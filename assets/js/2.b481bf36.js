(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,,,function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(21),i=n(34);t.exports=n(13)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(17)("wks"),i=n(18),o=n(9).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(15)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(14),i=n(9),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(32)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(26),i=n(25);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(9),i=n(14),o=n(10),s=n(23),a=n(30),c=function(t,e,n){var u,l,f,p,v=t&c.F,h=t&c.G,m=t&c.S,g=t&c.P,_=t&c.B,y=h?r:m?r[e]||(r[e]={}):(r[e]||{}).prototype,d=h?i:i[e]||(i[e]={}),b=d.prototype||(d.prototype={});for(u in h&&(n=e),n)f=((l=!v&&y&&void 0!==y[u])?y:n)[u],p=_&&l?a(f,r):g&&"function"==typeof f?a(Function.call,f):f,y&&s(y,u,f,t&c.U),d[u]!=f&&o(d,u,p),g&&b[u]!=f&&(b[u]=f)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(22),i=n(40),o=n(41),s=Object.defineProperty;e.f=n(13)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(9),i=n(10),o=n(16),s=n(18)("src"),a=n(42),c=(""+a).split("toString");n(14).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var u="function"==typeof n;u&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(u&&(o(n,s)||i(n,s,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[s]||a.call(this)}))},function(t,e,n){var r=n(25);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(29),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(43);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(17)("keys"),i=n(18);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(12),i=n(9).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e,n){var r=n(51),i=n(39);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(19),i=n(28),o=n(38);t.exports=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(29),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=!n(13)&&!n(15)((function(){return 7!=Object.defineProperty(n(33)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(12);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(17)("native-function-to-string",Function.toString)},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(11)("unscopables"),i=Array.prototype;null==i[r]&&n(10)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,e,n){var r=n(21).f,i=n(16),o=n(11)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(30),i=n(26),o=n(24),s=n(28),a=n(47);t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f,v=e||a;return function(e,a,h){for(var m,g,_=o(e),y=i(_),d=r(a,h,3),b=s(y.length),x=0,w=n?v(e,b):c?v(e,0):void 0;b>x;x++)if((p||x in y)&&(g=d(m=y[x],x,_),t))if(n)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:w.push(m)}else if(l)return!1;return f?-1:u||l?l:w}}},function(t,e,n){var r=n(48);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(12),i=n(49),o=n(11)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(15);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){var r=n(16),i=n(19),o=n(37)(!1),s=n(31)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)n!=s&&r(a,n)&&u.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){for(var r=n(53),i=n(36),o=n(23),s=n(9),a=n(10),c=n(35),u=n(11),l=u("iterator"),f=u("toStringTag"),p=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(v),m=0;m<h.length;m++){var g,_=h[m],y=v[_],d=s[_],b=d&&d.prototype;if(b&&(b[l]||a(b,l,p),b[f]||a(b,f,_),c[_]=p,y))for(g in r)b[g]||o(b,g,r[g],!0)}},function(t,e,n){"use strict";var r=n(44),i=n(54),o=n(35),s=n(19);t.exports=n(55)(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(32),i=n(20),o=n(23),s=n(10),a=n(35),c=n(56),u=n(45),l=n(60),f=n(11)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,m,g,_){c(n,e,h);var y,d,b,x=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",C="values"==m,k=!1,S=t.prototype,O=S[f]||S["@@iterator"]||m&&S[m],E=O||x(m),T=m?C?x("entries"):E:void 0,j="Array"==e&&S.entries||O;if(j&&(b=l(j.call(new t)))!==Object.prototype&&b.next&&(u(b,w,!0),r||"function"==typeof b[f]||s(b,f,v)),C&&O&&"values"!==O.name&&(k=!0,E=function(){return O.call(this)}),r&&!_||!p&&!k&&S[f]||s(S,f,E),a[e]=E,a[w]=v,m)if(y={values:C?E:x("values"),keys:g?E:x("keys"),entries:T},_)for(d in y)d in S||o(S,d,y[d]);else i(i.P+i.F*(p||k),e,y);return y}},function(t,e,n){"use strict";var r=n(57),i=n(34),o=n(45),s={};n(10)(s,n(11)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(22),i=n(58),o=n(39),s=n(31)("IE_PROTO"),a=function(){},c=function(){var t,e=n(33)("iframe"),r=o.length;for(e.style.display="none",n(59).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[s]=t):n=c(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(21),i=n(22),o=n(36);t.exports=n(13)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),a=s.length,c=0;a>c;)r.f(t,n=s[c++],e[n]);return t}},function(t,e,n){var r=n(9).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(16),i=n(24),o=n(31)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict";var r=n(20),i=n(46)(0),o=n(50)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,e,n){},,function(t,e,n){t.exports=n.p+"assets/img/logo.ba1f4c97.svg"},function(t,e,n){t.exports=n.p+"assets/img/Social_GitHub.170a83cb.svg"},function(t,e,n){t.exports=n.p+"assets/img/Social_Reddit.712e49c3.svg"},function(t,e,n){t.exports=n.p+"assets/img/Social_Medium.b5c65b9e.svg"},function(t,e,n){t.exports=n.p+"assets/img/Social_Telegram.0c5a18a5.svg"},function(t,e,n){t.exports=n.p+"assets/img/Social_Facebook.9cf07bad.svg"},function(t,e,n){t.exports=n.p+"assets/img/Social_Twitter.2be522b0.svg"},function(t,e,n){t.exports=n.p+"assets/img/Footer_Github.0d486b5b.svg"},function(t,e,n){t.exports=n.p+"assets/img/Footer_Reddit.2f50260f.svg"},function(t,e,n){t.exports=n.p+"assets/img/Footer_Medium.9e4345ae.svg"},function(t,e,n){t.exports=n.p+"assets/img/aeternity-logo-white-stacked.8e030072.svg"},function(t,e,n){t.exports=n.p+"assets/img/Footer_Telegram.ee7bdfce.svg"},function(t,e,n){t.exports=n.p+"assets/img/Footer_Facebook.7de70978.svg"},function(t,e,n){t.exports=n.p+"assets/img/Footer_Twitter.e52927dd.svg"},function(t,e,n){var r=n(24),i=n(36);n(79)("keys",(function(){return function(t){return i(r(t))}}))},function(t,e,n){var r=n(20),i=n(14),o=n(15);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",s)}},function(t,e,n){"use strict";var r=n(62);n.n(r).a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item nav-current"},[e("a",{attrs:{href:""}},[this._v("Developers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{attrs:{href:"https://www.aeventures.io",target:"_blank"}},[this._v("Entrepreneurs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{attrs:{href:"https://www.aeternityconsulting.com",target:"_blank"}},[this._v("Consulting")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{attrs:{href:"https://forum.aeternity.com",target:"_blank"}},[this._v("Community")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{attrs:{href:"https://www.aeternity-foundation.org",target:"_blank"}},[this._v("Foundation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{attrs:{href:"https://blog.aeternity.com",target:"_blank"}},[this._v("Blog")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"social"},[e("a",{attrs:{href:"https://github.com/aeternity"}},[e("img",{attrs:{src:n(65),alt:""}})]),this._v(" "),e("a",{attrs:{href:"https://www.reddit.com/r/Aeternity/"}},[e("img",{attrs:{src:n(66),alt:""}})]),this._v(" "),e("a",{attrs:{href:"https://blog.aeternity.com"}},[e("img",{attrs:{src:n(67),alt:""}})]),this._v(" "),e("a",{attrs:{href:"https://telegram.me/aeternity"}},[e("img",{attrs:{src:n(68),alt:""}})]),this._v(" "),e("a",{attrs:{href:"https://www.facebook.com/aeternityproject/"}},[e("img",{attrs:{src:n(69),alt:""}})]),this._v(" "),e("a",{attrs:{href:"https://twitter.com/aeternity"}},[e("img",{attrs:{src:n(70),alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lang-menu"},[n("ul",{staticClass:"lang-items"},[n("li",{staticClass:"lang-item"},[n("a",{staticClass:"lang-link",attrs:{href:"#",onclick:"return false"}},[t._v("English")])]),t._v(" "),n("li",{staticClass:"lang-item"},[n("a",{staticClass:"lang-link",attrs:{onclick:"return false"}},[t._v("Español")])]),t._v(" "),n("li",{staticClass:"lang-item"},[n("a",{staticClass:"lang-link",attrs:{onclick:"return false"}},[t._v("Русский")])]),t._v(" "),n("li",{staticClass:"lang-item"},[n("a",{staticClass:"lang-link",attrs:{onclick:"return false"}},[t._v("中文 (简体)")])]),t._v(" "),n("li",{staticClass:"lang-item"},[n("a",{staticClass:"lang-link",attrs:{onclick:"return false"}},[t._v("日本語")])])])])}],i={data:function(){return{navActive:!1,langActive:!1}},methods:{navToggle:function(){this.navActive=!this.navActive},langToggle:function(){this.navActive=!this.navActive}}},o=n(0),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("section",{class:{"main-nav":!0,active:t.navActive}},[r("div",{staticClass:"logo"},[r("a",{attrs:{href:t.$withBase("/")}},[r("img",{attrs:{src:n(64),alt:"Aeternity"}})])]),t._v(" "),r("nav",{staticClass:"pages"},[r("button",{on:{click:t.navToggle}}),t._v(" "),r("ul",{staticClass:"nav-items",on:{click:function(e){return e.stopPropagation(),t.navToggle(e)}}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),r("div",{class:{"lang-switcher":!0,active:t.langActive}},[r("button",{staticClass:"lang-current",attrs:{type:"button"},on:{click:t.langToggle}},[t._v("ENG")]),t._v(" "),t._m(7)])])])}),r,!1,null,null,null).exports,a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"section section--fancy",attrs:{id:"footer"}},[r("div",{staticClass:"section-content section-content--fancy"},[r("h2",[t._v("æternity newsletter")]),t._v(" "),r("p",[t._v("Sign up for the latest content and updates.")]),t._v(" "),r("form",{staticClass:"subscribe",attrs:{action:"https://aeternity.us15.list-manage.com/subscribe/post?u=83a504836fa768f10619d053c&id=c2d8c3ba71",method:"post",target:"_blank"}},[r("label",[r("input",{attrs:{type:"email",name:"EMAIL",placeholder:"your.email@example.com"}})]),t._v(" "),r("button",{staticClass:"button button--wide",attrs:{type:"submit",name:"subscribe"}},[t._v("Subscribe")])])]),t._v(" "),r("div",{staticClass:"footer-links"},[r("ul",{staticClass:"footer-icons"},[r("li",{staticClass:"footer-icon"},[r("a",{attrs:{href:"https://github.com/aeternity"}},[r("img",{attrs:{src:n(71),alt:""}}),r("span",[t._v("GitHub")])])]),t._v(" "),r("li",{staticClass:"footer-icon"},[r("a",{attrs:{href:"https://www.reddit.com/r/Aeternity/"}},[r("img",{attrs:{src:n(72),alt:""}}),r("span",[t._v("Reddit")])])]),t._v(" "),r("li",{staticClass:"footer-icon"},[r("a",{attrs:{href:"https://blog.aeternity.com"}},[r("img",{attrs:{src:n(73),alt:""}}),r("span",[t._v("Medium")])])])]),t._v(" "),r("img",{staticClass:"footer-logo",attrs:{src:n(74),alt:""}}),t._v(" "),r("ul",{staticClass:"footer-icons"},[r("li",{staticClass:"footer-icon"},[r("a",{attrs:{href:"https://telegram.me/aeternity"}},[r("img",{attrs:{src:n(75),alt:""}}),r("span",[t._v("Telegram")])])]),t._v(" "),r("li",{staticClass:"footer-icon"},[r("a",{attrs:{href:"https://www.facebook.com/aeternityproject/"}},[r("img",{attrs:{src:n(76),alt:""}}),r("span",[t._v("Facebook")])])]),t._v(" "),r("li",{staticClass:"footer-icon"},[r("a",{attrs:{href:"https://twitter.com/aeternity"}},[r("img",{attrs:{src:n(77),alt:""}}),r("span",[t._v("Twitter")])])])])])])}],c=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),a,!1,null,null,null).exports,u=(n(78),n(52),n(61),n(2)),l=n.n(u),f={data:function(){return{showConsent:void 0===l.a.get("opt_in")}},methods:{acceptCookies:function(){this.$gtag.optIn(),l.a.set("opt_in","1"),this.showConsent=!1},denyCookies:function(){Object.keys(l.a.get()).forEach((function(t){return l.a.remove(t)})),this.$gtag.optOut(),l.a.set("opt_in","0"),this.showConsent=!1}}},p={name:"Layout",components:{Navigation:s,Footer:c,CookieConsent:Object(o.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.showConsent,expression:"showConsent"}],attrs:{id:"cookie_consent"}},[this._v("\n    We use cookies to make this website more user-friendly and improve user experience.\n    "),e("button",{attrs:{id:"deny_cookies"},on:{click:this.denyCookies}},[this._v("Deny")]),this._v(" "),e("button",{attrs:{id:"accept_cookies"},on:{click:this.acceptCookies}},[this._v("Accept")])])}),[],!1,null,null,null).exports}},v=(n(80),Object(o.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation"),t._v(" "),n("main",[t.$page.frontmatter.announcement?n("div",{staticClass:"announcement",domProps:{innerHTML:t._s(t.$page.frontmatter.announcement)}}):t._e(),t._v(" "),n("Content"),t._v(" "),n("Footer")],1),t._v(" "),n("CookieConsent")],1)}),[],!1,null,null,null));e.default=v.exports}]]);