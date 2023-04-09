var _a, _b, _c, _d, _e, _f;
var n, l$1, u$1, t$1, r$1, o$2, f$1, c$1 = {}, s$1 = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function v$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y(l2, u2, i2) {
  var t2, r2, o2, f2 = {};
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (o2 in l2.defaultProps)
      void 0 === f2[o2] && (f2[o2] = l2.defaultProps[o2]);
  return p$1(l2, f2, t2, r2, null);
}
function p$1(n2, i2, t2, r2, o2) {
  var f2 = { type: n2, props: i2, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u$1 : o2 };
  return null == o2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function _$1(n2) {
  return n2.children;
}
function k$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function b$1(n2, l2) {
  if (null == l2)
    return n2.__ ? b$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? b$1(n2) : null;
}
function g$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return g$1(n2);
  }
}
function m$1(n2) {
  (!n2.__d && (n2.__d = true) && t$1.push(n2) && !w$1.__r++ || r$1 !== l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$2)(w$1);
}
function w$1() {
  var n2, l2, u2, i2, r2, o2, e2, c2;
  for (t$1.sort(f$1); n2 = t$1.shift(); )
    n2.__d && (l2 = t$1.length, i2 = void 0, r2 = void 0, e2 = (o2 = (u2 = n2).__v).__e, (c2 = u2.__P) && (i2 = [], (r2 = h$1({}, o2)).__v = o2.__v + 1, L(c2, o2, r2, u2.__n, void 0 !== c2.ownerSVGElement, null != o2.__h ? [e2] : null, i2, null == e2 ? b$1(o2) : e2, o2.__h), M(i2, o2), o2.__e != e2 && g$1(o2)), t$1.length > l2 && t$1.sort(f$1));
  w$1.__r = 0;
}
function x(n2, l2, u2, i2, t2, r2, o2, f2, e2, a2) {
  var h2, v2, y2, d2, k2, g2, m2, w2 = i2 && i2.__k || s$1, x2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (d2 = u2.__k[h2] = null == (d2 = l2[h2]) || "boolean" == typeof d2 || "function" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p$1(null, d2, null, null, d2) : Array.isArray(d2) ? p$1(_$1, { children: d2 }, null, null, null) : d2.__b > 0 ? p$1(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
      if (d2.__ = u2, d2.__b = u2.__b + 1, null === (y2 = w2[h2]) || y2 && d2.key == y2.key && d2.type === y2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < x2; v2++) {
          if ((y2 = w2[v2]) && d2.key == y2.key && d2.type === y2.type) {
            w2[v2] = void 0;
            break;
          }
          y2 = null;
        }
      L(n2, d2, y2 = y2 || c$1, t2, r2, o2, f2, e2, a2), k2 = d2.__e, (v2 = d2.ref) && y2.ref != v2 && (m2 || (m2 = []), y2.ref && m2.push(y2.ref, null, d2), m2.push(v2, d2.__c || k2, d2)), null != k2 ? (null == g2 && (g2 = k2), "function" == typeof d2.type && d2.__k === y2.__k ? d2.__d = e2 = A(d2, e2, n2) : e2 = C(n2, d2, y2, w2, k2, e2), "function" == typeof u2.type && (u2.__d = e2)) : e2 && y2.__e == e2 && e2.parentNode != n2 && (e2 = b$1(y2));
    }
  for (u2.__e = g2, h2 = x2; h2--; )
    null != w2[h2] && ("function" == typeof u2.type && null != w2[h2].__e && w2[h2].__e == u2.__d && (u2.__d = $(i2).nextSibling), S(w2[h2], w2[h2]));
  if (m2)
    for (h2 = 0; h2 < m2.length; h2++)
      O(m2[h2], m2[++h2], m2[++h2]);
}
function A(n2, l2, u2) {
  for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
    (i2 = t2[r2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? A(i2, l2, u2) : C(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function C(n2, l2, u2, i2, t2, r2) {
  var o2, f2, e2;
  if (void 0 !== l2.__d)
    o2 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != r2 || null == t2.parentNode)
    n:
      if (null == r2 || r2.parentNode !== n2)
        n2.appendChild(t2), o2 = null;
      else {
        for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 1)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, r2), o2 = r2;
      }
  return void 0 !== o2 ? o2 : t2.nextSibling;
}
function $(n2) {
  var l2, u2, i2;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
      if ((u2 = n2.__k[l2]) && (i2 = $(u2)))
        return i2;
  }
  return null;
}
function H(n2, l2, u2, i2, t2) {
  var r2;
  for (r2 in u2)
    "children" === r2 || "key" === r2 || r2 in l2 || T(n2, r2, null, u2[r2], i2);
  for (r2 in l2)
    t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || T(n2, r2, l2[r2], u2[r2], i2);
}
function I(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
}
function T(n2, l2, u2, i2, t2) {
  var r2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || I(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || I(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? z$1 : j$1, r2) : n2.removeEventListener(l2, r2 ? z$1 : j$1, r2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function j$1(n2) {
  return this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
}
function z$1(n2) {
  return this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
}
function L(n2, u2, i2, t2, r2, o2, f2, e2, c2) {
  var s2, a2, v2, y2, p2, d2, b2, g2, m2, w2, A2, P, C2, $2, H2, I2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [e2]), (s2 = l$1.__b) && s2(u2);
  try {
    n:
      if ("function" == typeof I2) {
        if (g2 = u2.props, m2 = (s2 = I2.contextType) && t2[s2.__c], w2 = s2 ? m2 ? m2.props.value : s2.__ : t2, i2.__c ? b2 = (a2 = u2.__c = i2.__c).__ = a2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = a2 = new I2(g2, w2) : (u2.__c = a2 = new k$1(g2, w2), a2.constructor = I2, a2.render = q), m2 && m2.sub(a2), a2.props = g2, a2.state || (a2.state = {}), a2.context = w2, a2.__n = t2, v2 = a2.__d = true, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != I2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h$1({}, a2.__s)), h$1(a2.__s, I2.getDerivedStateFromProps(g2, a2.__s))), y2 = a2.props, p2 = a2.state, a2.__v = u2, v2)
          null == I2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
        else {
          if (null == I2.getDerivedStateFromProps && g2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(g2, w2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(g2, a2.__s, w2) || u2.__v === i2.__v) {
            for (u2.__v !== i2.__v && (a2.props = g2, a2.state = a2.__s, a2.__d = false), a2.__e = false, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < a2._sb.length; A2++)
              a2.__h.push(a2._sb[A2]);
            a2._sb = [], a2.__h.length && f2.push(a2);
            break n;
          }
          null != a2.componentWillUpdate && a2.componentWillUpdate(g2, a2.__s, w2), null != a2.componentDidUpdate && a2.__h.push(function() {
            a2.componentDidUpdate(y2, p2, d2);
          });
        }
        if (a2.context = w2, a2.props = g2, a2.__P = n2, P = l$1.__r, C2 = 0, "prototype" in I2 && I2.prototype.render) {
          for (a2.state = a2.__s, a2.__d = false, P && P(u2), s2 = a2.render(a2.props, a2.state, a2.context), $2 = 0; $2 < a2._sb.length; $2++)
            a2.__h.push(a2._sb[$2]);
          a2._sb = [];
        } else
          do {
            a2.__d = false, P && P(u2), s2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
          } while (a2.__d && ++C2 < 25);
        a2.state = a2.__s, null != a2.getChildContext && (t2 = h$1(h$1({}, t2), a2.getChildContext())), v2 || null == a2.getSnapshotBeforeUpdate || (d2 = a2.getSnapshotBeforeUpdate(y2, p2)), H2 = null != s2 && s2.type === _$1 && null == s2.key ? s2.props.children : s2, x(n2, Array.isArray(H2) ? H2 : [H2], u2, i2, t2, r2, o2, f2, e2, c2), a2.base = u2.__e, u2.__h = null, a2.__h.length && f2.push(a2), b2 && (a2.__E = a2.__ = null), a2.__e = false;
      } else
        null == o2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = N(i2.__e, u2, i2, t2, r2, o2, f2, c2);
    (s2 = l$1.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != o2) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l$1.__e(n3, u2, i2);
  }
}
function M(n2, u2) {
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function N(l2, u2, i2, t2, r2, o2, f2, e2) {
  var s2, a2, h2, y2 = i2.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if ("svg" === d2 && (r2 = true), null != o2) {
    for (; _2 < o2.length; _2++)
      if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, o2[_2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o2 = null, e2 = false;
  }
  if (null === d2)
    y2 === p2 || e2 && l2.data === p2 || (l2.data = p2);
  else {
    if (o2 = o2 && n.call(l2.childNodes), a2 = (y2 = i2.props || c$1).dangerouslySetInnerHTML, h2 = p2.dangerouslySetInnerHTML, !e2) {
      if (null != o2)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (h2 || a2) && (h2 && (a2 && h2.__html == a2.__html || h2.__html === l2.innerHTML) || (l2.innerHTML = h2 && h2.__html || ""));
    }
    if (H(l2, p2, y2, r2, e2), h2)
      u2.__k = [];
    else if (_2 = u2.props.children, x(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, r2 && "foreignObject" !== d2, o2, f2, o2 ? o2[0] : i2.__k && b$1(i2, 0), e2), null != o2)
      for (_2 = o2.length; _2--; )
        null != o2[_2] && v$1(o2[_2]);
    e2 || ("value" in p2 && void 0 !== (_2 = p2.value) && (_2 !== l2.value || "progress" === d2 && !_2 || "option" === d2 && _2 !== y2.value) && T(l2, "value", _2, y2.value, false), "checked" in p2 && void 0 !== (_2 = p2.checked) && _2 !== l2.checked && T(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function O(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, i2);
  }
}
function S(n2, u2, i2) {
  var t2, r2;
  if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || O(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && S(t2[r2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || v$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B$1(u2, i2, t2) {
  var r2, o2, f2;
  l$1.__ && l$1.__(u2, i2), o2 = (r2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], L(i2, u2 = (!r2 && t2 || i2).__k = y(_$1, null, [u2]), o2 || c$1, c$1, void 0 !== i2.ownerSVGElement, !r2 && t2 ? [t2] : o2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i2.firstChild, r2), M(f2, u2);
}
n = s$1.slice, l$1 = { __e: function(n2, l2, u2, i2) {
  for (var t2, r2, o2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((r2 = t2.constructor) && null != r2.getDerivedStateFromError && (t2.setState(r2.getDerivedStateFromError(n2)), o2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), o2 = t2.__d), o2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, k$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$1({}, this.state), "function" == typeof n2 && (n2 = n2(h$1({}, u2), this.props)), n2 && h$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), m$1(this));
}, k$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m$1(this));
}, k$1.prototype.render = _$1, t$1 = [], o$2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, w$1.__r = 0;
var t, r, u, i, o$1 = 0, f = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
function d(t2, u2) {
  l$1.__h && l$1.__h(r, t2, o$1 || u2), o$1 = 0;
  var i2 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: c }), i2.__[t2];
}
function h(n2) {
  return o$1 = 1, s(B, n2);
}
function s(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function p(u2, i2) {
  var o2 = d(t++, 3);
  !l$1.__s && z(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r.__H.__h.push(o2));
}
function b() {
  for (var t2; t2 = f.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k), t2.__H.__h.forEach(w), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$1.__e(r2, t2.__v);
      }
}
l$1.__b = function(n2) {
  r = null, e && e(n2);
}, l$1.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(k), i2.__h.forEach(w), i2.__h = [])), u = r;
}, l$1.diffed = function(t2) {
  v && v(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f.push(o2) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j)(b)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
  })), u = r = null;
}, l$1.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$1.__e(u2, t3.__v);
    }
  }), l && l(t2, r2);
}, l$1.unmount = function(t2) {
  m && m(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g && (t2 = requestAnimationFrame(r2));
}
function k(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function w(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function z(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function B(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
const link$1 = "_link_4o50g_36";
const tw$2 = {
  "cursor-not-allowed": "_cursor-not-allowed_4o50g_1",
  "cursor-pointer": "_cursor-pointer_4o50g_1",
  "banner-container": "_banner-container_4o50g_4",
  "cookie-consent-ui-container": "_cookie-consent-ui-container_4o50g_8",
  "cookie-consent-ui-body": "_cookie-consent-ui-body_4o50g_12",
  "banner-title": "_banner-title_4o50g_16",
  "banner-body": "_banner-body_4o50g_20",
  "banner-body-consent-text": "_banner-body-consent-text_4o50g_24",
  "banner-body-consent-actions": "_banner-body-consent-actions_4o50g_28",
  "consent-action-btn": "_consent-action-btn_4o50g_32",
  link: link$1
};
var classnamesExports = {};
var classnames = {
  get exports() {
    return classnamesExports;
  },
  set exports(v2) {
    classnamesExports = v2;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);
const cx = classnamesExports;
var _ = 0;
function o(o2, e2, n2, t2, f2, l2) {
  var s2, u2, a2 = {};
  for (u2 in e2)
    "ref" == u2 ? s2 = e2[u2] : a2[u2] = e2[u2];
  var i2 = { type: o2, props: a2, key: n2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f2, __self: l2 };
  if ("function" == typeof o2 && (s2 = o2.defaultProps))
    for (u2 in s2)
      void 0 === a2[u2] && (a2[u2] = s2[u2]);
  return l$1.vnode && l$1.vnode(i2), i2;
}
function CookieConsentBanner(props) {
  return o(_$1, {
    children: props.isVisible && o("div", {
      className: cx([tw$2["cookie-consent-ui-container"]]),
      children: o("div", {
        className: cx([tw$2["cookie-consent-ui-body"]]),
        children: o("div", {
          className: cx([tw$2["banner-container"]]),
          children: [o("div", {
            className: cx([tw$2["banner-title"]]),
            children: props.bannerTitle
          }), o("div", {
            className: cx([tw$2["banner-body"]]),
            children: [o("div", {
              className: cx([tw$2["banner-body-consent-text"]]),
              children: [o("a", {
                target: "_blank",
                className: cx([tw$2["link"]]),
                href: props.bannerCompanyLink,
                children: props.bannerCompanyName
              }), " uses cookies to enhance your experience of our website. By clicking Allow, you are consenting to the use of cookies. Please read our ", o("a", {
                target: "_blank",
                className: cx([tw$2["link"]]),
                href: props.bannerCookiePolicyLink,
                children: "Cookie Policy"
              }), "  and ", o("a", {
                target: "_blank",
                className: cx([tw$2["link"]]),
                href: props.bannerPrivacyPolicyLink,
                children: "Privacy Policy"
              }), " for details."]
            }), o("div", {
              className: cx([tw$2["banner-body-consent-actions"]]),
              children: [o("button", {
                onClick: props.handleManageBtn,
                className: cx([tw$2["consent-action-btn"]]),
                children: "MANAGE COOKIES"
              }), o("button", {
                onClick: props.handleAllowBtn,
                className: cx([tw$2["consent-action-btn"]]),
                children: "ALLOW"
              })]
            })]
          })]
        })
      })
    })
  });
}
const tw$1 = {
  "cursor-not-allowed": "_cursor-not-allowed_1j7c9_1",
  "cursor-pointer": "_cursor-pointer_1j7c9_1",
  "cookie-consent-btn": "_cookie-consent-btn_1j7c9_4"
};
function CookieConsentBtn(props) {
  return o(_$1, {
    children: props.isVisible && o("button", {
      onClick: props.handleCookieConsentBtn,
      className: cx([tw$1["cookie-consent-btn"]]),
      children: "COOKIE CONSENTS"
    })
  });
}
const link = "_link_1uzpy_24";
const tw = {
  "cursor-not-allowed": "_cursor-not-allowed_1uzpy_1",
  "cursor-pointer": "_cursor-pointer_1uzpy_1",
  "panel-btn": "_panel-btn_1uzpy_4",
  "panel-container": "_panel-container_1uzpy_8",
  "panel-body": "_panel-body_1uzpy_12",
  "panel-title": "_panel-title_1uzpy_16",
  "panel-description": "_panel-description_1uzpy_20",
  link,
  "panel-powered-by-company": "_panel-powered-by-company_1uzpy_28",
  "powered-by-company-link": "_powered-by-company-link_1uzpy_32",
  "panel-allow-all-btn": "_panel-allow-all-btn_1uzpy_36",
  "panel-cancel-save-btns": "_panel-cancel-save-btns_1uzpy_36",
  "panel-item-separator-line": "_panel-item-separator-line_1uzpy_40",
  "panel-consent-checkbox": "_panel-consent-checkbox_1uzpy_44",
  "panel-cookie-consent-item-body": "_panel-cookie-consent-item-body_1uzpy_48",
  "panel-cookie-consent-item-cookies-used": "_panel-cookie-consent-item-cookies-used_1uzpy_52",
  "panel-cookie-consent-item-description": "_panel-cookie-consent-item-description_1uzpy_56",
  "panel-cookie-consent-item-checkbox": "_panel-cookie-consent-item-checkbox_1uzpy_60",
  "panel-cookie-consent-item-title": "_panel-cookie-consent-item-title_1uzpy_64",
  "panel-cookie-consent-item-container": "_panel-cookie-consent-item-container_1uzpy_68"
};
function CookieConsentManagementPanel(props) {
  const [cookieConsent, setCookieConsent] = h(props.cookieConsent);
  const handleAllowAllBtn = () => {
    const updatedCookieConsent = cookieConsent == null ? void 0 : cookieConsent.map((cc) => {
      cc.consent = true;
      return cc;
    });
    setCookieConsent(updatedCookieConsent);
  };
  const handleConsentCheckbox = (event, cookieConsentIndex) => {
    if (event.target instanceof HTMLInputElement) {
      cookieConsent[cookieConsentIndex].consent = event.target.checked;
      setCookieConsent(cookieConsent);
    }
  };
  return o(_$1, {
    children: props.isVisible && o("div", {
      className: cx([tw["panel-container"]]),
      children: o("div", {
        className: cx([tw["panel-body"]]),
        children: [o("div", {
          className: cx([tw["panel-title"]]),
          children: "MANAGE COOKIE PREFERENCES"
        }), o("div", {
          className: cx([tw["panel-description"]]),
          children: [o("a", {
            className: cx([tw["link"]]),
            target: "_blank",
            href: props.bannerCompanyLink,
            children: props.bannerCompanyName
          }), " uses cookies to enhance your experience of our website. By allowing, you are consenting to the use of cookies. Please read our ", o("a", {
            className: cx([tw["link"]]),
            target: "_blank",
            href: props.bannerCookiePolicyLink,
            children: "Cookie Policy"
          }), "  and ", o("a", {
            className: cx([tw["link"]]),
            target: "_blank",
            href: props.bannerPrivacyPolicyLink,
            children: "Privacy Policy"
          }), " for details."]
        }), o("div", {
          className: cx([tw["panel-description"]]),
          children: "You can set your consent preferences based on the purposes below."
        }), o("div", {
          className: cx([tw["panel-allow-all-btn"]]),
          children: o("button", {
            onClick: handleAllowAllBtn,
            className: cx([tw["panel-btn"]]),
            children: "ALLOW ALL"
          })
        }), o("div", {
          children: o("hr", {
            className: cx([tw["panel-item-separator-line"]])
          })
        }), o("div", {
          className: cx([tw["panel-cookie-consent-item-container"]]),
          children: cookieConsent == null ? void 0 : cookieConsent.map((cc, i2) => {
            var _a2;
            return o("div", {
              className: cx([tw["panel-cookie-consent-item"]]),
              children: [o("div", {
                className: cx([tw["panel-cookie-consent-item-body"]]),
                children: [o("div", {
                  className: cx([tw["panel-cookie-consent-item-description"]]),
                  children: [o("span", {
                    className: cx([tw["panel-cookie-consent-item-title"]]),
                    children: [cc.cookieCategory, ": "]
                  }), o("span", {
                    children: cc.cookieCategoryDescription
                  })]
                }), o("div", {
                  className: cx([tw["panel-cookie-consent-item-checkbox"]]),
                  children: o("input", {
                    disabled: cc.isMandatory,
                    type: "checkbox",
                    className: cx([tw["panel-consent-checkbox"], cc.isMandatory ? tw["cursor-not-allowed"] : tw["cursor-pointer"]]),
                    checked: cc.consent,
                    onClick: (event) => handleConsentCheckbox(event, i2)
                  })
                })]
              }), o("div", {
                className: cx([tw["panel-cookie-consent-item-cookies-used"]]),
                children: ["Cookies Used: ", (_a2 = cc.cookiesUsed) == null ? void 0 : _a2.toString()]
              }), o("div", {
                children: o("hr", {
                  className: cx([tw["panel-item-separator-line"]])
                })
              })]
            }, i2);
          })
        }), o("div", {
          className: cx([tw["panel-cancel-save-btns"]]),
          children: [o("button", {
            onClick: props.handleCancelBtn,
            className: cx([tw["panel-btn"]]),
            children: "CANCEL"
          }), o("button", {
            onClick: () => {
              props.handleSaveBtn(cookieConsent);
            },
            className: cx([tw["panel-btn"]]),
            children: "SAVE"
          })]
        }), o("div", {
          className: cx([tw["panel-powered-by-company"]]),
          children: ["Powered by ", o("a", {
            className: cx([tw["powered-by-company-link"]]),
            href: "https://igrant.io/",
            target: "_blank",
            children: [" ", o("strong", {
              children: "iGrant.io"
            })]
          })]
        })]
      })
    })
  });
}
const throwExpression = (errorMessage) => {
  throw new Error(errorMessage);
};
const getConsentFromLocalStorage = () => {
  return localStorage.getItem("cookieconsent");
};
const setConsentToLocalStorage = (cookieConsent) => {
  localStorage.setItem("cookieconsent", JSON.stringify(cookieConsent));
};
const stringToLocalStorageCookieConsent = (localStorageCookieConsentString) => {
  return JSON.parse(localStorageCookieConsentString);
};
function App(props) {
  const [cookieConsent, setCookieConsent] = h(props.cookieConsent);
  const [showCookieConsentBtn, setShowCookieConsentBtn] = h(false);
  const [showCookieConsentBanner, setShowCookieConsentBanner] = h(false);
  const [showCookieConsentManagementPanel, setCookieConsentManagementPanel] = h(false);
  p(() => {
    const localStorageCookieConsentString = getConsentFromLocalStorage();
    if (localStorageCookieConsentString === null) {
      setShowCookieConsentBanner(true);
      const localStorageCookieConsent = {};
      cookieConsent.map((cc) => {
        const cookieCategory = cc.cookieCategory;
        localStorageCookieConsent[cookieCategory] = cc.consent;
      });
      setConsentToLocalStorage(localStorageCookieConsent);
    } else {
      setShowCookieConsentBtn(true);
      const localStorageCookieConsent = stringToLocalStorageCookieConsent(localStorageCookieConsentString);
      cookieConsent.map((cc) => {
        const cookieCategory = cc.cookieCategory;
        if (cookieCategory in localStorageCookieConsent) {
          cc.consent = localStorageCookieConsent[cookieCategory];
        } else {
          localStorageCookieConsent[cookieCategory] = cc.consent;
        }
      });
      setConsentToLocalStorage(localStorageCookieConsent);
    }
  }, []);
  const handleConsentManagementPanelSaveBtn = (updatedCookieConsent) => {
    const localStorageCookieConsent = {};
    updatedCookieConsent.map((cc) => {
      const cookieCategory = cc.cookieCategory;
      localStorageCookieConsent[cookieCategory] = cc.consent;
    });
    setConsentToLocalStorage(localStorageCookieConsent);
    setCookieConsent(updatedCookieConsent);
    setShowCookieConsentBtn(true);
    setCookieConsentManagementPanel(false);
  };
  return o(_$1, {
    children: [o(CookieConsentBtn, {
      isVisible: showCookieConsentBtn,
      handleCookieConsentBtn: () => {
        setShowCookieConsentBtn(false);
        setCookieConsentManagementPanel(true);
      }
    }), o(CookieConsentBanner, {
      ...props,
      isVisible: showCookieConsentBanner,
      handleAllowBtn: () => {
        setShowCookieConsentBanner(false);
        setShowCookieConsentBtn(true);
      },
      handleManageBtn: () => {
        setShowCookieConsentBanner(false);
        setCookieConsentManagementPanel(true);
      }
    }), o(CookieConsentManagementPanel, {
      ...props,
      isVisible: showCookieConsentManagementPanel,
      cookieConsent,
      handleCancelBtn: () => {
        setShowCookieConsentBtn(true);
        setCookieConsentManagementPanel(false);
      },
      handleSaveBtn: handleConsentManagementPanelSaveBtn
    })]
  });
}
const global_module = {
  "cursor-not-allowed": "_cursor-not-allowed_lmy4u_1",
  "cursor-pointer": "_cursor-pointer_lmy4u_1"
};
const elementId = ((_a = document.getElementById("cookie-consent-ui")) == null ? void 0 : _a.getAttribute("data-element-id")) ?? throwExpression("data-element-id is required.");
const bannerTitle = ((_b = document.getElementById("cookie-consent-ui")) == null ? void 0 : _b.getAttribute("data-banner-title")) ?? throwExpression("data-banner-title is required.");
const bannerCompanyName = ((_c = document.getElementById("cookie-consent-ui")) == null ? void 0 : _c.getAttribute("data-banner-company-name")) ?? throwExpression("data-banner-company-name is required.");
const bannerCompanyLink = ((_d = document.getElementById("cookie-consent-ui")) == null ? void 0 : _d.getAttribute("data-banner-company-link")) ?? throwExpression("data-banner-company-link is required.");
const bannerCookiePolicyLink = ((_e = document.getElementById("cookie-consent-ui")) == null ? void 0 : _e.getAttribute("data-banner-cookie-policy-link")) ?? throwExpression("data-banner-cookie-policy-link is required.");
const bannerPrivacyPolicyLink = ((_f = document.getElementById("cookie-consent-ui")) == null ? void 0 : _f.getAttribute("data-banner-privacy-policy-link")) ?? throwExpression("data-banner-privacy-policy-link is required.");
window.CookieConsentUI = (cookieConsent) => {
  B$1(o(App, {
    elementId,
    bannerTitle,
    bannerCompanyName,
    bannerCompanyLink,
    bannerCookiePolicyLink,
    bannerPrivacyPolicyLink,
    cookieConsent
  }), document.getElementById(elementId));
};
