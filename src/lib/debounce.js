/**
 * 防抖函数
 * 短时间内多次触发同一事件，只执行最后一次，中间的不执行。
 * 
 * @param {*} func 需要延迟的函数
 * @param {*} delay 等待时间
 * @returns
 * 
 * 使用方法 
 * let foo = debounce(()=>{console.log(1)},1000)
 * foo()
 * 
 */
function debounce(func, delay) {
    let timeout
    return function() {
      clearTimeout(timeout) // 如果持续调用就清空定时器
      timeout = setTimeout(() => {
        func.apply(this, arguments)
      }, delay)
    }
}

export default debounce