/**
 *
 * JS节流函数
 * 用途限制一段时间的调用频率，在某个事件段内只会调用一次
 * 
 * @param {*} func
 * @param {*} delay
 * @returns
 * 
 * 使用方法 
 * let foo = debounce(()=>{console.log(1)},1000)
 * foo()
 * 
 */
function throttle(func, delay) {
  let run = true  //定义一个锁 标志位
  return function () {
    if (!run) {
      return
    }
    run = false;
    setTimeout(() => {
      func.apply(this, arguments)
      run = true
    }, delay)
  }
}

export default throttle