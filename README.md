# Hierarchy Generator CLI

A simple and efficient command-line interface (CLI) tool to create nested folder and file structures from a single command. This tool is perfect for quickly setting up project directories and files with minimal effort.

## Features

- Create complex folder and file structures using a single command.
- Automatically generates a visual representation of the created structure.
- Easy to install and use.

## Installation

You can install the CLI globally using npm:

```bash
npm install -g hierarchy-gen-cli
```

## Usage

After installation, you can use the CLI by running the `hierarchy-gen` command followed by your desired structure.

### Syntax

The syntax for specifying the folder structure is as follows:

```bash
hierarchy-gen "root['Details of your hierarchy']"
```

### Example
To create a directory structure like this:
```
root
├── folder1
│   ├── subfolder1
│   │   ├── file1.txt
│   │   └── file2.txt
│   └── subfolder2
│       └── file3.txt
└── folder2
    ├── subfolder3
    │   └── file4.txt
    └── file5.txt
```
Run the command:
``` bash
folder-creator "root[folder1[subfolder1[file1.txt,file2.txt],subfolder2[file3.txt]],folder2[subfolder3[file4.txt],file5.txt]]"
```

## Contributing

We welcome contributions! If you'd like to improve this CLI or add new features, feel free to fork the repository, create a new branch, and submit a pull request.

### Steps to Contribute

1. **Fork the repository.**
2. **Create a new branch:** 
``` bash
git checkout -b feature-branch
```
3. **Make your changes and commit them:**
``` bash
git commit -m 'Add new feature'
```
4. **Push to the branch:**
``` bash
git push origin feature-branch
```
5. **Open a pull request and describe your changes:**

## License
This project is licensed under the MIT License. You can freely use, modify, and distribute this software under the terms of the MIT License. See the [License](http://license.here) file for more details.

***

Thank you for using Folder Creator CLI! If you encounter any issues or have any suggestions, please open an issue or reach out.

