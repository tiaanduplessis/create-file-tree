const path = require('path')
const fs = require('fs')

const rimraf = require('rimraf')

const createFileTree = require('./')

test('should create a tree', () => {
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

  const expectedPaths = [
    'foop',
    path.join('foop', 'bar.js')
  ]

  expect(createFileTree).toBeDefined()

  createFileTree(tree)

  expectedPaths.forEach(current => {
    expect(fs.existsSync(current)).toBeTruthy()
  })
})

afterAll(() => {
  rimraf.sync('foop')
})
