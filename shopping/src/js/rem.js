// rem-demo/util/rem.js
// 设置基准大小
// const baseSize = 1
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例
  const scale = document.documentElement.clientWidth / 750
  document.documentElement.style.fontSize = (1 * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
window.onresize = function () {
  setRem()
}
