/**
 * @param {function} fn
 * @param {number} wait
 * @returns {function}
 */
function debounce(fn, wait) {
  let timer;
  return function debounced(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), wait);
  }
}