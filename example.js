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
