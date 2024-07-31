const root = process.cwd();

module.exports = function(config) {
  config.css.watch = ['components/**/*.{less,css}', 'components/style/color/*.js'];
  config.css.watchBase = {
    ['components/**/*.{less,css}']: 'components',
    ['components/style/color/*.js']: 'components'
  };
}