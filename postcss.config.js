module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,   //视窗的宽度，对应设计稿的宽度
      viewportHeight: 667,   //视窗的高度，对应设计稿的宽度，也可以不配置
      unitPrecision: 5,   //指定'px'转换视窗单位值得小数位数（大多数是无法整除的）
      viewportUnit: 'vw', //指定需要转换成视窗的单位，建议使用vw
      selectorBlackList: ['ignore', 'tab-bar'], //指定不需要转换的类（即class），只要类名中包含，就不会转化它，可以在某些不需要转换的组件中添加class="ignore"
      minPixelValue: 1, //小于/等于1px的就不会转换它
      mediaQuery: false,  //是否允许在媒体查询中转换px
      // exclude: [/TabBar/]  //必须是正则，匹配文件的
    }
  }
}