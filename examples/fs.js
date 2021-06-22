const fs = require('fs')
const path = require('path')

const entries = fs.readdirSync(__dirname).reduce((entries, dir) => {
  const fullDir = path.join(__dirname, dir)
  console.log('debug ~ file: fs.js ~ line 6 ~ entries ~ fullDir', fullDir);
  const entry = path.join(fullDir, 'app.ts')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entries[dir] = ['webpack-hot-middleware/client', entry]
  }

  return entries
}, {})
console.log('debug ~ file: fs.js ~ line 12 ~ entries ~ entries', entries)
