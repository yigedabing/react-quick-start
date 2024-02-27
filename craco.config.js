const path = require('path')
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
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@utils': path.resolve('src/utils'),
      '@styles': path.resolve('src/styles'),
    },
  },
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
