/**
 *
 * Class helper functions from https://github.com/ded/bonzo
 *
 */
function classReg(className) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

let hasClass, addClass, removeClass;

if ("classList" in document.documentElement) {
  hasClass = function(elem, c) {
    return elem.classList.contains(c);
  };
  addClass = function(elem, c) {
    elem.classList.add(c);
  };
  removeClass = function(elem, c) {
    elem.classList.remove(c);
  };
} else {
  hasClass = function(elem, c) {
    return classReg(c).test(elem.className);
  };
  addClass = function(elem, c) {
    if (!hasClass(elem, c)) {
      elem.className = elem.className + " " + c;
    }
  };
  removeClass = function(elem, c) {
    elem.className = elem.className.replace(classReg(c), " ");
  };
}

function toggleClass(elem, c) {
  const fn = hasClass(elem, c) ? removeClass : addClass;
  fn(elem, c);
}

export const classManager = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};
