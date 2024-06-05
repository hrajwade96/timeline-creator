# Dependencies Analyzer

`deps_analyzer` is a powerful command-line tool designed to manage Flutter/Dart package dependencies by scanning `pubspec.yaml`
files in your project directories. It helps you keep track of your dependencies and ensures they are up-to-date by fetching the latest versions from pub.dev.

## Features

- **Automatic Scanning**: Recursively scans all directories for `pubspec.yaml` files.
- **Version Fetching**: Retrieves the latest versions of dependencies from pub.dev.
- **Comprehensive Reports**: Generates a `deps_list.txt` , `deps_list.csv` and `deps_list.json` files listing all dependencies and their versions.

## Installation

## Global Activation
### Install it
You can install the package from the command line:

```dart 
dart pub global activate deps_analyzer
```

### Use it
The package has the following executables:

```dart 
analyze_deps
```

### OR

## Use this as a dependency
### Step 1: Add to pubspec.yaml
```yaml
dev_dependencies:
  deps_analyzer: ^0.1.0
```

### Step 2: Add to pubspec.yaml

```dart
dart run deps_analyzer:deps_list
```

## Why Use `deps_analyzer`?

In any software project, managing dependencies is crucial to ensure that your application remains up-to-date, secure, and maintainable. `deps_analyzer` is a Dart CLI tool designed to simplify and streamline the process of analyzing and managing dependencies in Dart and Flutter projects. Here’s how `deps_analyzer` can add value to your workflow:

1. **Comprehensive Dependency Analysis**:
    - `deps_analyzer` scans all `pubspec.yaml` files within your project to gather a complete list of dependencies. This provides a holistic view of all the libraries your project relies on.

2. **Latest Version Checks**:
    - The tool fetches the latest versions of all dependencies from pub.dev, allowing you to see at a glance which dependencies are outdated. Keeping dependencies up-to-date can help in leveraging the latest features, improvements, and security patches.

3. **Multiple Output Formats**:
    - `deps_analyzer` generates reports in CSV, JSON, and text formats. This flexibility allows you to integrate the analysis results into various parts of your development workflow, whether it's for automated scripts, documentation, or manual review.

4. **Improved Project Maintenance**:
    - By regularly using `deps_analyzer`, you can maintain a clean and updated project dependency tree, which reduces the risk of compatibility issues and technical debt. It also aids in preparing for major upgrades by highlighting dependencies that may need attention.


## Sample outputs


### CSV Output
sample CSV output [here](https://github.com/hrajwade96/deps_analyzer/blob/main/deps_analyzer/example/output/deps_list.csv).

### JSON Output
Here’s a sample JSON output:

```json
{
  "http": {
    "current_versions": ["^0.13.3"],
    "latest_version": "0.13.4"
  },
  "path": {
    "current_versions": ["^1.8.0"],
    "latest_version": "1.8.1"
  },
  "yaml": {
    "current_versions": ["^3.1.0"],
    "latest_version": "3.1.1"
  }
}
```
sample JSON output [here](https://github.com/hrajwade96/deps_analyzer/blob/main/deps_analyzer/example/output/deps_list.json).

### Text Output 
sample Text output [here](https://github.com/hrajwade96/deps_analyzer/blob/main/deps_analyzer/example/output/deps_list.txt).
