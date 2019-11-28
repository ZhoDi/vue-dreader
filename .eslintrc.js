module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //关闭未引用报错
    // 'no-unused-vars': 'off',
    //vue组件未使用
    // 'vue/no-unused-components':'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
