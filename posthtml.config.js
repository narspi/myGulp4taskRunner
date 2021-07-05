const posthtmlWebp = require('posthtml-webp');
const include = require('posthtml-include');

module.exports = () => {
    return {
      plugins: [
        include({ root: 'src/html' }),
        posthtmlWebp({
          replaceExtension: true,
          extensionIgnore: ['svg'],
          classIgnore: ['test-webp'],
        })
      ]
    }
  }