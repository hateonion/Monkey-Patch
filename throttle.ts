function throttle(fn: Function, threshold: number) : Function {
  let lastCallTime: number;
  let isInvoked = false;
  return function throttled(...args) {
    const thisCallTime = Date.now();
    if(!isInvoked) {
      fn.apply(this, args);
      lastCallTime = Date.now();
    }
    if(thisCallTime - lastCallTime >= threshold) {
      fn.apply(this, args);
      lastCallTime = Date.now();
    }
  }
}