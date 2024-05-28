// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generate } = require('@arco-design/color');

module.exports = {
  install(_, __, functions) {
    functions.add('color-palette', (color, index) => generate(color.value, { index: index.value }));
  }
};
