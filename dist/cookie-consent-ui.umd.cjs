!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){var e,n,t,o,_,i,l,r,c,a,s,u,d,p={},f=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function y(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function v(e,n,t,o,_){var i={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++c:_};return null==_&&null!=r.vnode&&r.vnode(i),i}function b(e){return e.children}function k(e,n){this.props=e,this.context=n}function g(e,n){if(null==n)return e.__?g(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?g(e):null}function N(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return N(e)}}function C(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!w.__r++||s!==r.debounceRendering)&&((s=r.debounceRendering)||u)(w)}function w(){var e,n,t,o,_,i,l,r;for(a.sort(d);e=a.shift();)e.__d&&(n=a.length,o=void 0,_=void 0,l=(i=(t=e).__v).__e,(r=t.__P)&&(o=[],(_=y({},i)).__v=i.__v+1,z(r,i,_,t.__n,void 0!==r.ownerSVGElement,null!=i.__h?[l]:null,o,null==l?g(i):l,i.__h),I(o,i),i.__e!=l&&N(i)),a.length>n&&a.sort(d));w.__r=0}function E(e,n,t,o,_,i,l,r,c,a){var s,u,d,h,y,m,k,N=o&&o.__k||f,C=N.length;for(t.__k=[],s=0;s<n.length;s++)if(null!=(h=t.__k[s]=null==(h=n[s])||"boolean"==typeof h||"function"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?v(null,h,null,null,h):Array.isArray(h)?v(b,{children:h},null,null,null):h.__b>0?v(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)){if(h.__=t,h.__b=t.__b+1,null===(d=N[s])||d&&h.key==d.key&&h.type===d.type)N[s]=void 0;else for(u=0;u<C;u++){if((d=N[u])&&h.key==d.key&&h.type===d.type){N[u]=void 0;break}d=null}z(e,h,d=d||p,_,i,l,r,c,a),y=h.__e,(u=h.ref)&&d.ref!=u&&(k||(k=[]),d.ref&&k.push(d.ref,null,h),k.push(u,h.__c||y,h)),null!=y?(null==m&&(m=y),"function"==typeof h.type&&h.__k===d.__k?h.__d=c=P(h,c,e):c=S(e,h,d,N,y,c),"function"==typeof t.type&&(t.__d=c)):c&&d.__e==c&&c.parentNode!=e&&(c=g(d))}for(t.__e=m,s=C;s--;)null!=N[s]&&("function"==typeof t.type&&null!=N[s].__e&&N[s].__e==t.__d&&(t.__d=x(o).nextSibling),U(N[s],N[s]));if(k)for(s=0;s<k.length;s++)T(k[s],k[++s],k[++s])}function P(e,n,t){for(var o,_=e.__k,i=0;_&&i<_.length;i++)(o=_[i])&&(o.__=e,n="function"==typeof o.type?P(o,n,t):S(t,o,o,_,o.__e,n));return n}function S(e,n,t,o,_,i){var l,r,c;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||_!=i||null==_.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(_),l=null;else{for(r=i,c=0;(r=r.nextSibling)&&c<o.length;c+=1)if(r==_)break e;e.insertBefore(_,i),l=i}return void 0!==l?l:_.nextSibling}function x(e){var n,t,o;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(n=e.__k.length-1;n>=0;n--)if((t=e.__k[n])&&(o=x(t)))return o;return null}function A(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||h.test(n)?t:t+"px"}function H(e,n,t,o,_){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||A(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||A(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?o||e.addEventListener(n,i?B:L,i):e.removeEventListener(n,i?B:L,i);else if("dangerouslySetInnerHTML"!==n){if(_)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(l){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function L(e){return this.l[e.type+!1](r.event?r.event(e):e)}function B(e){return this.l[e.type+!0](r.event?r.event(e):e)}function z(e,n,t,o,_,i,c,a,s){var u,d,f,h,v,N,C,w,P,S,x,A,L,B,z,I=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(s=t.__h,a=n.__e=t.__e,n.__h=null,i=[a]),(u=r.__b)&&u(n);try{e:if("function"==typeof I){if(w=n.props,P=(u=I.contextType)&&o[u.__c],S=u?P?P.props.value:u.__:o,t.__c?C=(d=n.__c=t.__c).__=d.__E:("prototype"in I&&I.prototype.render?n.__c=d=new I(w,S):(n.__c=d=new k(w,S),d.constructor=I,d.render=M),P&&P.sub(d),d.props=w,d.state||(d.state={}),d.context=S,d.__n=o,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=I.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=y({},d.__s)),y(d.__s,I.getDerivedStateFromProps(w,d.__s))),h=d.props,v=d.state,d.__v=n,f)null==I.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==I.getDerivedStateFromProps&&w!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(w,S),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(w,d.__s,S)||n.__v===t.__v){for(n.__v!==t.__v&&(d.props=w,d.state=d.__s,d.__d=!1),d.__e=!1,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),x=0;x<d._sb.length;x++)d.__h.push(d._sb[x]);d._sb=[],d.__h.length&&c.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(w,d.__s,S),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,v,N)}))}if(d.context=S,d.props=w,d.__P=e,A=r.__r,L=0,"prototype"in I&&I.prototype.render){for(d.state=d.__s,d.__d=!1,A&&A(n),u=d.render(d.props,d.state,d.context),B=0;B<d._sb.length;B++)d.__h.push(d._sb[B]);d._sb=[]}else do{d.__d=!1,A&&A(n),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++L<25);d.state=d.__s,null!=d.getChildContext&&(o=y(y({},o),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(N=d.getSnapshotBeforeUpdate(h,v)),z=null!=u&&u.type===b&&null==u.key?u.props.children:u,E(e,Array.isArray(z)?z:[z],n,t,o,_,i,c,a,s),d.base=n.__e,n.__h=null,d.__h.length&&c.push(d),C&&(d.__E=d.__=null),d.__e=!1}else null==i&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=function(e,n,t,o,_,i,r,c){var a,s,u,d=t.props,f=n.props,h=n.type,y=0;if("svg"===h&&(_=!0),null!=i)for(;y<i.length;y++)if((a=i[y])&&"setAttribute"in a==!!h&&(h?a.localName===h:3===a.nodeType)){e=a,i[y]=null;break}if(null==e){if(null===h)return document.createTextNode(f);e=_?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,f.is&&f),i=null,c=!1}if(null===h)d===f||c&&e.data===f||(e.data=f);else{if(i=i&&l.call(e.childNodes),s=(d=t.props||p).dangerouslySetInnerHTML,u=f.dangerouslySetInnerHTML,!c){if(null!=i)for(d={},y=0;y<e.attributes.length;y++)d[e.attributes[y].name]=e.attributes[y].value;(u||s)&&(u&&(s&&u.__html==s.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(function(e,n,t,o,_){var i;for(i in t)"children"===i||"key"===i||i in n||H(e,i,null,t[i],o);for(i in n)_&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||H(e,i,n[i],t[i],o)}(e,f,d,_,c),u)n.__k=[];else if(y=n.props.children,E(e,Array.isArray(y)?y:[y],n,t,o,_&&"foreignObject"!==h,i,r,i?i[0]:t.__k&&g(t,0),c),null!=i)for(y=i.length;y--;)null!=i[y]&&m(i[y]);c||("value"in f&&void 0!==(y=f.value)&&(y!==e.value||"progress"===h&&!y||"option"===h&&y!==d.value)&&H(e,"value",y,d.value,!1),"checked"in f&&void 0!==(y=f.checked)&&y!==e.checked&&H(e,"checked",y,d.checked,!1))}return e}(t.__e,n,t,o,_,i,c,s);(u=r.diffed)&&u(n)}catch(T){n.__v=null,(s||null!=i)&&(n.__e=a,n.__h=!!s,i[i.indexOf(a)]=null),r.__e(T,n,t)}}function I(e,n){r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(t){r.__e(t,n.__v)}}))}function T(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(o){r.__e(o,t)}}function U(e,n,t){var o,_;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||T(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){r.__e(i,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(_=0;_<o.length;_++)o[_]&&U(o[_],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__=e.__e=e.__d=void 0}function M(e,n,t){return this.constructor(e,t)}function O(e,n,t){var o,_,i;r.__&&r.__(e,n),_=(o="function"==typeof t)?null:t&&t.__k||n.__k,i=[],z(n,e=(!o&&t||n).__k=function(e,n,t){var o,_,i,r={};for(i in n)"key"==i?o=n[i]:"ref"==i?_=n[i]:r[i]=n[i];if(arguments.length>2&&(r.children=arguments.length>3?l.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===r[i]&&(r[i]=e.defaultProps[i]);return v(e,r,o,_,null)}(b,null,[e]),_||p,p,void 0!==n.ownerSVGElement,!o&&t?[t]:_?null:n.firstChild?l.call(n.childNodes):null,i,!o&&t?t:_?_.__e:n.firstChild,o),I(i,e)}l=f.slice,r={__e:function(e,n,t,o){for(var _,i,l;n=n.__;)if((_=n.__c)&&!_.__)try{if((i=_.constructor)&&null!=i.getDerivedStateFromError&&(_.setState(i.getDerivedStateFromError(e)),l=_.__d),null!=_.componentDidCatch&&(_.componentDidCatch(e,o||{}),l=_.__d),l)return _.__E=_}catch(r){e=r}throw e}},c=0,k.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof e&&(e=e(y({},t),this.props)),e&&y(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),C(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),C(this))},k.prototype.render=b,a=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d=function(e,n){return e.__v.__b-n.__v.__b},w.__r=0;var V,D,F,W,q=0,j=[],R=[],G=r.__b,K=r.__r,$=r.diffed,J=r.__c,Y=r.unmount;function Q(e,n){r.__h&&r.__h(D,e,q||n),q=0;var t=D.__H||(D.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:R}),t.__[e]}function X(e){return q=1,function(e,n,t){var o=Q(V++,2);if(o.t=e,!o.__c&&(o.__=[t?t(n):_e(void 0,n),function(e){var n=o.__N?o.__N[0]:o.__[0],t=o.t(n,e);n!==t&&(o.__N=[t,o.__[1]],o.__c.setState({}))}],o.__c=D,!D.u)){var _=function(e,n,t){if(!o.__c.__H)return!0;var _=o.__c.__H.__.filter((function(e){return e.__c}));if(_.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var l=!1;return _.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(l=!0)}})),!(!l&&o.__c.props===e)&&(!i||i.call(this,e,n,t))};D.u=!0;var i=D.shouldComponentUpdate,l=D.componentWillUpdate;D.componentWillUpdate=function(e,n,t){if(this.__e){var o=i;i=void 0,_(e,n,t),i=o}l&&l.call(this,e,n,t)},D.shouldComponentUpdate=_}return o.__N||o.__}(_e,e)}function Z(){for(var e;e=j.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(te),e.__H.__h.forEach(oe),e.__H.__h=[]}catch(n){e.__H.__h=[],r.__e(n,e.__v)}}r.__b=function(e){D=null,G&&G(e)},r.__r=function(e){K&&K(e),V=0;var n=(D=e.__c).__H;n&&(F===D?(n.__h=[],D.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=R,e.__N=e.i=void 0}))):(n.__h.forEach(te),n.__h.forEach(oe),n.__h=[])),F=D},r.diffed=function(e){$&&$(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==j.push(n)&&W===r.requestAnimationFrame||((W=r.requestAnimationFrame)||ne)(Z)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==R&&(e.__=e.__V),e.i=void 0,e.__V=R}))),F=D=null},r.__c=function(e,n){n.some((function(e){try{e.__h.forEach(te),e.__h=e.__h.filter((function(e){return!e.__||oe(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],r.__e(t,e.__v)}})),J&&J(e,n)},r.unmount=function(e){Y&&Y(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{te(e)}catch(t){n=t}})),t.__H=void 0,n&&r.__e(n,t.__v))};var ee="function"==typeof requestAnimationFrame;function ne(e){var n,t=function(){clearTimeout(o),ee&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);ee&&(n=requestAnimationFrame(t))}function te(e){var n=D,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),D=n}function oe(e){var n=D;e.__c=e.__(),D=n}function _e(e,n){return"function"==typeof n?n(e):n}const ie={"cursor-not-allowed":"_cursor-not-allowed_4o50g_1","cursor-pointer":"_cursor-pointer_4o50g_1","banner-container":"_banner-container_4o50g_4","cookie-consent-ui-container":"_cookie-consent-ui-container_4o50g_8","cookie-consent-ui-body":"_cookie-consent-ui-body_4o50g_12","banner-title":"_banner-title_4o50g_16","banner-body":"_banner-body_4o50g_20","banner-body-consent-text":"_banner-body-consent-text_4o50g_24","banner-body-consent-actions":"_banner-body-consent-actions_4o50g_28","consent-action-btn":"_consent-action-btn_4o50g_32",link:"_link_4o50g_36"};var le,re={};
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
le={get exports(){return re},set exports(e){re=e}},function(){var e={}.hasOwnProperty;function n(){for(var t=[],o=0;o<arguments.length;o++){var _=arguments[o];if(_){var i=typeof _;if("string"===i||"number"===i)t.push(_);else if(Array.isArray(_)){if(_.length){var l=n.apply(null,_);l&&t.push(l)}}else if("object"===i){if(_.toString!==Object.prototype.toString&&!_.toString.toString().includes("[native code]")){t.push(_.toString());continue}for(var r in _)e.call(_,r)&&_[r]&&t.push(r)}}}return t.join(" ")}le.exports?(n.default=n,le.exports=n):window.classNames=n}();const ce=re;var ae=0;function se(e,n,t,o,_,i){var l,c,a={};for(c in n)"ref"==c?l=n[c]:a[c]=n[c];var s={type:e,props:a,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ae,__source:_,__self:i};if("function"==typeof e&&(l=e.defaultProps))for(c in l)void 0===a[c]&&(a[c]=l[c]);return r.vnode&&r.vnode(s),s}function ue(e){return se(b,{children:e.isVisible&&se("div",{className:ce([ie["cookie-consent-ui-container"]]),children:se("div",{className:ce([ie["cookie-consent-ui-body"]]),children:se("div",{className:ce([ie["banner-container"]]),children:[se("div",{className:ce([ie["banner-title"]]),children:e.bannerTitle}),se("div",{className:ce([ie["banner-body"]]),children:[se("div",{className:ce([ie["banner-body-consent-text"]]),children:[se("a",{target:"_blank",className:ce([ie.link]),href:e.bannerCompanyLink,children:e.bannerCompanyName})," uses cookies to enhance your experience of our website. By clicking Allow, you are consenting to the use of cookies. Please read our ",se("a",{target:"_blank",className:ce([ie.link]),href:e.bannerCookiePolicyLink,children:"Cookie Policy"}),"  and ",se("a",{target:"_blank",className:ce([ie.link]),href:e.bannerPrivacyPolicyLink,children:"Privacy Policy"})," for details."]}),se("div",{className:ce([ie["banner-body-consent-actions"]]),children:[se("button",{onClick:e.handleManageBtn,className:ce([ie["consent-action-btn"]]),children:"MANAGE COOKIES"}),se("button",{onClick:e.handleAllowBtn,className:ce([ie["consent-action-btn"]]),children:"ALLOW"})]})]})]})})})})}const de={"cursor-not-allowed":"_cursor-not-allowed_1j7c9_1","cursor-pointer":"_cursor-pointer_1j7c9_1","cookie-consent-btn":"_cookie-consent-btn_1j7c9_4"};function pe(e){return se(b,{children:e.isVisible&&se("button",{onClick:e.handleCookieConsentBtn,className:ce([de["cookie-consent-btn"]]),children:"COOKIE CONSENTS"})})}const fe={"cursor-not-allowed":"_cursor-not-allowed_1uzpy_1","cursor-pointer":"_cursor-pointer_1uzpy_1","panel-btn":"_panel-btn_1uzpy_4","panel-container":"_panel-container_1uzpy_8","panel-body":"_panel-body_1uzpy_12","panel-title":"_panel-title_1uzpy_16","panel-description":"_panel-description_1uzpy_20",link:"_link_1uzpy_24","panel-powered-by-company":"_panel-powered-by-company_1uzpy_28","powered-by-company-link":"_powered-by-company-link_1uzpy_32","panel-allow-all-btn":"_panel-allow-all-btn_1uzpy_36","panel-cancel-save-btns":"_panel-cancel-save-btns_1uzpy_36","panel-item-separator-line":"_panel-item-separator-line_1uzpy_40","panel-consent-checkbox":"_panel-consent-checkbox_1uzpy_44","panel-cookie-consent-item-body":"_panel-cookie-consent-item-body_1uzpy_48","panel-cookie-consent-item-cookies-used":"_panel-cookie-consent-item-cookies-used_1uzpy_52","panel-cookie-consent-item-description":"_panel-cookie-consent-item-description_1uzpy_56","panel-cookie-consent-item-checkbox":"_panel-cookie-consent-item-checkbox_1uzpy_60","panel-cookie-consent-item-title":"_panel-cookie-consent-item-title_1uzpy_64","panel-cookie-consent-item-container":"_panel-cookie-consent-item-container_1uzpy_68"};function he(e){const[n,t]=X(e.cookieConsent);return se(b,{children:e.isVisible&&se("div",{className:ce([fe["panel-container"]]),children:se("div",{className:ce([fe["panel-body"]]),children:[se("div",{className:ce([fe["panel-title"]]),children:"MANAGE COOKIE PREFERENCES"}),se("div",{className:ce([fe["panel-description"]]),children:[se("a",{className:ce([fe.link]),target:"_blank",href:e.bannerCompanyLink,children:e.bannerCompanyName})," uses cookies to enhance your experience of our website. By allowing, you are consenting to the use of cookies. Please read our ",se("a",{className:ce([fe.link]),target:"_blank",href:e.bannerCookiePolicyLink,children:"Cookie Policy"}),"  and ",se("a",{className:ce([fe.link]),target:"_blank",href:e.bannerPrivacyPolicyLink,children:"Privacy Policy"})," for details."]}),se("div",{className:ce([fe["panel-description"]]),children:"You can set your consent preferences based on the purposes below."}),se("div",{className:ce([fe["panel-allow-all-btn"]]),children:se("button",{onClick:()=>{const e=null==n?void 0:n.map((e=>(e.consent=!0,e)));t(e)},className:ce([fe["panel-btn"]]),children:"ALLOW ALL"})}),se("div",{children:se("hr",{className:ce([fe["panel-item-separator-line"]])})}),se("div",{className:ce([fe["panel-cookie-consent-item-container"]]),children:null==n?void 0:n.map(((e,o)=>{var _;return se("div",{className:ce([fe["panel-cookie-consent-item"]]),children:[se("div",{className:ce([fe["panel-cookie-consent-item-body"]]),children:[se("div",{className:ce([fe["panel-cookie-consent-item-description"]]),children:[se("span",{className:ce([fe["panel-cookie-consent-item-title"]]),children:[e.cookieCategory,": "]}),se("span",{children:e.cookieCategoryDescription})]}),se("div",{className:ce([fe["panel-cookie-consent-item-checkbox"]]),children:se("input",{disabled:e.isMandatory,type:"checkbox",className:ce([fe["panel-consent-checkbox"],e.isMandatory?fe["cursor-not-allowed"]:fe["cursor-pointer"]]),checked:e.consent,onClick:e=>((e,o)=>{e.target instanceof HTMLInputElement&&(n[o].consent=e.target.checked,t(n))})(e,o)})})]}),se("div",{className:ce([fe["panel-cookie-consent-item-cookies-used"]]),children:["Cookies Used: ",null==(_=e.cookiesUsed)?void 0:_.toString()]}),se("div",{children:se("hr",{className:ce([fe["panel-item-separator-line"]])})})]},o)}))}),se("div",{className:ce([fe["panel-cancel-save-btns"]]),children:[se("button",{onClick:e.handleCancelBtn,className:ce([fe["panel-btn"]]),children:"CANCEL"}),se("button",{onClick:()=>{e.handleSaveBtn(n)},className:ce([fe["panel-btn"]]),children:"SAVE"})]}),se("div",{className:ce([fe["panel-powered-by-company"]]),children:["Powered by ",se("a",{className:ce([fe["powered-by-company-link"]]),href:"https://igrant.io/",target:"_blank",children:[" ",se("strong",{children:"iGrant.io"})]})]})]})})})}const ye=e=>{throw new Error(e)},me=e=>{localStorage.setItem("cookieconsent",JSON.stringify(e))};function ve(e){const[n,t]=X(e.cookieConsent),[o,_]=X(!1),[i,l]=X(!1),[c,a]=X(!1);var s,u,d,p,f;s=()=>{const e=localStorage.getItem("cookieconsent");if(null===e){l(!0);const e={};n.map((n=>{const t=n.cookieCategory;e[t]=n.consent})),me(e)}else{_(!0);const t=(e=>JSON.parse(e))(e);n.map((e=>{const n=e.cookieCategory;n in t?e.consent=t[n]:t[n]=e.consent})),me(t)}},u=[],f=Q(V++,3),!r.__s&&(d=f.__H,p=u,!d||d.length!==p.length||p.some((function(e,n){return e!==d[n]})))&&(f.__=s,f.i=u,D.__H.__h.push(f));return se(b,{children:[se(pe,{isVisible:o,handleCookieConsentBtn:()=>{_(!1),a(!0)}}),se(ue,{...e,isVisible:i,handleAllowBtn:()=>{l(!1),_(!0)},handleManageBtn:()=>{l(!1),a(!0)}}),se(he,{...e,isVisible:c,cookieConsent:n,handleCancelBtn:()=>{_(!0),a(!1)},handleSaveBtn:e=>{const n={};e.map((e=>{const t=e.cookieCategory;n[t]=e.consent})),me(n),t(e),_(!0),a(!1)}})]})}const be=(null==(e=document.getElementById("cookie-consent-ui"))?void 0:e.getAttribute("data-element-id"))??ye("data-element-id is required."),ke=(null==(n=document.getElementById("cookie-consent-ui"))?void 0:n.getAttribute("data-banner-title"))??ye("data-banner-title is required."),ge=(null==(t=document.getElementById("cookie-consent-ui"))?void 0:t.getAttribute("data-banner-company-name"))??ye("data-banner-company-name is required."),Ne=(null==(o=document.getElementById("cookie-consent-ui"))?void 0:o.getAttribute("data-banner-company-link"))??ye("data-banner-company-link is required."),Ce=(null==(_=document.getElementById("cookie-consent-ui"))?void 0:_.getAttribute("data-banner-cookie-policy-link"))??ye("data-banner-cookie-policy-link is required."),we=(null==(i=document.getElementById("cookie-consent-ui"))?void 0:i.getAttribute("data-banner-privacy-policy-link"))??ye("data-banner-privacy-policy-link is required.");window.CookieConsentUI=e=>{O(se(ve,{elementId:be,bannerTitle:ke,bannerCompanyName:ge,bannerCompanyLink:Ne,bannerCookiePolicyLink:Ce,bannerPrivacyPolicyLink:we,cookieConsent:e}),document.getElementById(be))}}));