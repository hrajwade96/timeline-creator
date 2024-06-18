import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:glob/glob.dart';
import 'package:glob/list_local_fs.dart';
import 'package:http/http.dart' as http;
import 'package:path/path.dart' as path;
import 'package:yaml/yaml.dart';

const projectPackage = 'project package';

void safePrint(Object message) {
  // ignore: avoid_print
  print(message);
}

/// Fetches the latest version of the given package from pub.dev.
///
/// If the [versionInfo] contains `{path:}` or [packageName]
/// it returns the [projectPackage] constant.
///
/// Throws an error if the fetch fails.
Future<String> fetchLatestVersion(
    String packageName, String versionInfo) async {
  final url = Uri.parse('https://pub.dev/api/packages/$packageName');
  safePrint('Fetching latest version for package: $packageName');
  try {
    final response = await http.get(url);
    if (response.statusCode == 200) {
      final jsonResponse = jsonDecode(response.body);
      safePrint(
          'Fetched latest version for $packageName: ${jsonResponse['latest']['version']}');
      return jsonResponse['latest']['version'].toString();
    } else {
      safePrint(
          'Failed to fetch latest version for $packageName: ${response.statusCode}');
      return 'Could not fetch, this could be a project package';
    }
  } catch (e) {
    safePrint('Error fetching latest version for $packageName: $e');
    return 'Error';
  }
}

/// Checks if the given [filePath] should be ignored based on the [pathsToIgnore].
///
/// Uses the Glob package to match patterns in the [pathsToIgnore] list.
bool shouldIgnore(String filePath, List<String> pathsToIgnore) =>
    pathsToIgnore.any((ignorePattern) {
      final glob = Glob(ignorePattern);
      return glob.matches(filePath);
    });

/// Finds dependencies in the project and generates output files.
///
/// Scans the project for `pubspec.yaml` files, fetches the latest versions
/// of dependencies from pub.dev, and generates CSV, JSON, and text reports.
Future<void> findDependencies() async {
  final currentDir = Directory.current.path;
  final glob = Glob(path.join(currentDir, '**/pubspec.yaml'));

  final pathsToIgnore = <String>[];
  var versionInfo = '';
  final allDependencies = <String, Set<String>>{};

  await for (final FileSystemEntity entity in glob.list(followLinks: false)) {
    final relativeFilePath = path.relative(entity.path, from: path.current);
    final normalizedFilePath = path.normalize(relativeFilePath);

    if (entity is File && !shouldIgnore(normalizedFilePath, pathsToIgnore)) {
      try {
        final pubspecContent = await entity.readAsString();
        final doc = loadYaml(pubspecContent);

        if (doc is YamlMap && doc.containsKey('dependencies')) {
          final dependencies = doc['dependencies'];
          if (dependencies is YamlMap) {
            dependencies.forEach((key, value) {
              final packageName = key.toString();
              versionInfo = projectPackage;
              if (value == null) {
                versionInfo = 'no version specified';
              } else if (value is String) {
                versionInfo = value;
              } else if (value is YamlMap) {
                if (value.containsKey('version')) {
                  versionInfo = value['version'].toString();
                } else {
                  versionInfo =
                      value.keys.map((k) => '$k: ${value[k]}').join(', ');
                }
              }

              if (versionInfo.contains('sdk: flutter')) {
                safePrint('Skipping flutter SDK dependency');
                return; // Skip adding flutter SDK version
              }

              allDependencies.putIfAbsent(packageName, () => <String>{});
              allDependencies[packageName]!.add(versionInfo);
              safePrint(
                  'Found dependency: $packageName, version: $versionInfo');
            });
          }
        }
      } catch (e) {
        safePrint('Error processing ${entity.path}: $e');
      }
    }
  }

  final latestVersions = <String, String>{};
  for (var packageName in allDependencies.keys) {
    final latestVersion = await fetchLatestVersion(
        packageName, allDependencies[packageName].toString());
    latestVersions[packageName] = latestVersion;
  }

  await generateCsvFile(allDependencies, latestVersions);
  await generateJsonFile(allDependencies, latestVersions);
  await generateTextFile(allDependencies, latestVersions);
}

/// Generates a CSV file listing all dependencies and their versions.
///
/// The file is saved in the `output` directory.
Future<void> generateCsvFile(Map<String, Set<String>> allDependencies,
    Map<String, String> latestVersions) async {
  final outputDir = Directory('output');
  if (!await outputDir.exists()) {
    await outputDir.create();
  }
  final csvFile = File(path.join(outputDir.path, 'deps_list.csv'));
  final sink = csvFile.openWrite();
  sink.writeln('Dependency Name,Current Version(s),Latest Version');

  allDependencies.forEach((packageName, versions) {
    final latestVersion = latestVersions[packageName] ?? projectPackage;
    sink.writeln('$packageName,${versions.join(' ')},$latestVersion');
    safePrint(
        'Written to CSV: $packageName,${versions.join(' ')},$latestVersion');
  });

  await sink.flush();
  await sink.close();
  safePrint('CSV file generated: ${csvFile.path}');
}

/// Generates a JSON file listing all dependencies and their versions.
///
/// The file is saved in the `output` directory.
Future<void> generateJsonFile(Map<String, Set<String>> allDependencies,
    Map<String, String> latestVersions) async {
  final outputDir = Directory('output');
  if (!await outputDir.exists()) {
    await outputDir.create();
  }
  final jsonFile = File(path.join(outputDir.path, 'deps_list.json'));
  final jsonContent = <String, dynamic>{};

  allDependencies.forEach((packageName, versions) {
    jsonContent[packageName] = {
      'current_versions': versions.toList(),
      'latest_version': latestVersions[packageName] ?? projectPackage,
    };
    safePrint(
        'Written to JSON: $packageName, versions: ${versions.toList()}, latest: ${latestVersions[packageName] ?? projectPackage}');
  });

  await jsonFile.writeAsString(jsonEncode(jsonContent));
  safePrint('JSON file generated: ${jsonFile.path}');
}

/// Generates a text file listing all dependencies and their versions.
///
/// The file is saved in the `output` directory.
Future<void> generateTextFile(Map<String, Set<String>> allDependencies,
    Map<String, String> latestVersions) async {
  final outputDir = Directory('output');
  if (!await outputDir.exists()) {
    await outputDir.create();
  }
  final txtFile = File(path.join(outputDir.path, 'deps_list.txt'));
  final sink = txtFile.openWrite();
  sink.writeln(
      'Dependencies and their versions/details found across all pubspec.yaml files, including latest versions from pub.dev:');
  allDependencies.forEach((packageName, versions) {
    final latestVersion = latestVersions[packageName] ?? projectPackage;
    sink.writeln(
        '$packageName: ${versions.join(', ')} (Latest as of now: $latestVersion)');
    safePrint(
        'Written to text file: $packageName: ${versions.join(', ')} (Latest as of now: $latestVersion)');
  });

  await sink.flush();
  await sink.close();
  safePrint('Text file generated: ${txtFile.path}');
}

Future<void> main() async {
  safePrint('Starting dependency analysis...');
  await findDependencies();
  safePrint('Dependency analysis completed.');
}
