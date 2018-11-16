
# create-file-tree
[![package version](https://img.shields.io/npm/v/create-file-tree.svg?style=flat-square)](https://npmjs.org/package/create-file-tree)
[![package downloads](https://img.shields.io/npm/dm/create-file-tree.svg?style=flat-square)](https://npmjs.org/package/create-file-tree)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/create-file-tree.svg?style=flat-square)](https://npmjs.org/package/create-file-tree)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Create a file tree

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install create-file-tree
$ # OR
$ yarn add create-file-tree
```

## Usage

```js
const createFileTree = require('create-file-tree')

const base = process.cwd()
const tree = {
  foop: {
    type: 'dir',
    bar: {
      type: 'file',
      ext: 'js',
      content: 'foo bar baz'
    },
    baz: {
      type: 'dir',
      ping: {
        type: 'file'
      }
    }
  }
}

createFileTree(tree, base)

// Creates following tree in current working dir
//
// foop/
// ├── bar.js
// └── baz
//     └── ping
// 1 directory, 2 files

```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    