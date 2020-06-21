const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	chainWebpack: (config) => {
    config.resolve.alias
    .set('components', resolve('./src/components'))
    .set('assets', resolve('./src/assets'))
    .set('common', resolve('./src/common'))
    .set('views', resolve('./src/views'))
    .set('network', resolve('./src/network'))
    .set('store', resolve('./src/store'))
  }
}
