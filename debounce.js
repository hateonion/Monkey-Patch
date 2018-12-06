/**
 * @param {function} fn fn is the function to be debounced
 * @param {number} wait wait is the time for debounce
 * @param {boolean} [leading=false] is going to running the function immediately 
 * @returns {function} will return a debounced function
 */
function debounce(fn, wait, leading=false) {
  /** @type {number} */
  let timer;
  /** @type {number} */
  let lastCallTime;
  /** @type {boolean} */
  let isInvoked = false;
  return function debounced(...args) {
    const context = this;
    const thisCallTime = Date.now();
    if(leading) {
      if(!isInvoked) {
        fn.apply(context, args);
        isInvoked = true;
      }
      if(thisCallTime - lastCallTime >= wait) {
        fn.apply(context, args);
      } 
      lastCallTime = Date.now();
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), wait);
  }
}