// priority: 10
// Allows all startup scripts to use this module

global.Utils = (function Utils() {
  function toArray(x) {
    if (x === undefined) {
      return [];
    }
    if (!Array.isArray(x)) {
      x = [x];
    }
    return x;
  }

  return {
    toArray: toArray,
  };
})();
