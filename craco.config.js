const postpxtoviewport = require('postcss-px-to-viewport-8-plugin')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '49',
          ios: '10',
        },
      },
    ],
  ],
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            postpxtoviewport({
              // 设计稿的视口宽度
              viewportWidth: 375,
              // 单位转换后保留的精度
              unitPrecision: 2,
            }),
          ],
        },
      },
    },
  },
}
