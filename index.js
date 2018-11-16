const fs = require('fs')
const path = require('path')

module.exports = function createFileTree (tree = {}, base = process.cwd()) {
  Object.keys(tree).forEach(key => {
    const { type, ext, content = '' } = tree[key]
    if (type === 'file') {
      fs.writeFileSync(path.join(base, ext ? `${key}.${ext}` : key), content)
    }

    if (type === 'dir') {
      const newDir = path.join(base, key)
      fs.mkdirSync(newDir)
      createFileTree(tree[key], newDir)
    }
  })
}
