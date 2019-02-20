/*!
 * GDPR-cookie - An iGrant.io javascript plugin to manage cookie settings in compliance with EU law
 *
 * Description: This file controls the opening and closing of the cookie management slide bar and this functions are called from slidebar-main.js
 * 
 * Copyright (c) 2018-2019 LCubed AB
 *
 * Author: Anandhu K M
 *
 */

( function( window ) {

'use strict';

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var slidebar = {
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

if ( typeof define === 'function' && define.amd ) {
  
  define( slidebar );
} else {
 
  window.slidebar = slidebar;
}
})( window );
