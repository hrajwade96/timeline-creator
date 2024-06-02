# Deps List

`deps_analyzer` is a powerful command-line tool designed to manage Flutter/Dart package dependencies by scanning `pubspec.yaml`
files in your project directories. It helps you keep track of your dependencies and ensures they are up-to-date by fetching the latest versions from pub.dev.

## Features

- **Automatic Scanning**: Recursively scans all directories for `pubspec.yaml` files.
- **Version Fetching**: Retrieves the latest versions of dependencies from pub.dev.
- **Comprehensive Reports**: Generates a `deps_list.txt` , `deps_list.csv` and `deps_list.json` files listing all dependencies and their versions.

## Installation

To use `deps_analyzer`, you need to have Dart installed on your system. Follow these steps to install the tool:

### Step 1: Add to pubspec.yaml

Add the following to your project's `pubspec.yaml` file:

```yaml
dev_dependencies:
  deps_analyzer: ^0.0.1
```

### Step 2:

Execute the command: 'deps_analyzer'