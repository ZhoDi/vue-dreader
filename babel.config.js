module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        "useBuiltIns":"usage",
        "corejs": 3
      }
    ]
  ],
  //按需引入vant组件
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}