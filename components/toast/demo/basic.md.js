webpackJsonp([38],{3:function(n,t,a){"use strict";a(7),a(6);var s=Math.floor(window.devicePixelRatio||1);s>=2&&document.querySelector("html").classList.add("pixel-ratio-"+s)},6:function(n,t){},7:function(n,t){},17:function(n,t){"use strict";function a(n,t){var a={},s={};return Object.keys(n).forEach(function(e){t.indexOf(e)!==-1?a[e]=n[e]:s[e]=n[e]}),[a,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},22:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=a(1),r=e(i),f=a(2),k=s(f),d=function(n){function t(){return c(this,t),l(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,o=t.style,c=t.onClick,l=(0,k["default"])((n={},p(n,""+a,!0),p(n,e,!!e),p(n,a+"-ws"+s,!0),n));return r.createElement("div",{className:l,style:o,onClick:c})},t}(r.Component);t["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},23:function(n,t,a){"use strict";a(3),a(25)},25:function(n,t){},40:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function i(n){return"string"==typeof n}function r(n){return i(n.type)&&T(n.props.children)?y.cloneElement(n,{},n.props.children.split("").join(" ")):i(n)?(T(n)&&(n=n.split("").join(" ")),y.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},k=function(){function n(n,t){var a=[],s=!0,e=!1,o=void 0;try{for(var p,c=n[Symbol.iterator]();!(s=(p=c.next()).done)&&(a.push(p.value),!t||a.length!==t);s=!0);}catch(l){e=!0,o=l}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=a(1),y=e(d),m=a(2),g=s(m),h=a(33),b=s(h),v=a(17),w=s(v),O=/^[\u4e00-\u9fa5]{2}$/,T=O.test.bind(O),C=function(n){function t(){c(this,t);for(var a=arguments.length,s=Array(a),e=0;e<a;e++)s[e]=arguments[e];var o=l(this,n.call.apply(n,[this].concat(s)));return o.onClick=function(){o.props.onClick(o)},o}return u(t,n),t.prototype.render=function(){var n,t=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),a=k(t,2),s=a[0],e=s.children,o=s.className,c=s.prefixCls,l=s.type,u=s.size,i=s.ghost,d=s.inline,m=s.disabled,h=s.htmlType,v=s.icon,O=s.loading,T=a[1],C=(0,g["default"])((n={},p(n,o,o),p(n,c,!0),p(n,c+"-primary","primary"===l),p(n,c+"-ghost",i),p(n,c+"-warning","warning"===l),p(n,c+"-small","small"===u&&d),p(n,c+"-loading",O),p(n,c+"-inline",d),p(n,c+"-disabled",m),n)),P=O?"loading":v,j=y.Children.map(e,r);return y.createElement("button",f({},T,{type:h||"button",className:C,disabled:m,onClick:this.onClick}),P?y.createElement(b["default"],{type:P}):null,j)},t}(y.Component);t["default"]=C,C.propTypes={prefixCls:d.PropTypes.string,type:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),ghost:d.PropTypes.bool,inline:d.PropTypes.bool,disabled:d.PropTypes.bool,loading:d.PropTypes.bool,icon:d.PropTypes.bool,onClick:d.PropTypes.func},C.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},44:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=a(1),r=e(i),f=a(2),k=s(f),d=function(n){function t(){return c(this,t),l(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,o=t.children,c=t.style,l=(0,k["default"])((n={},p(n,""+a,!0),p(n,e,!!e),p(n,a+"-wb"+s,!0),n));return r.createElement("div",{className:l,style:c},o)},t}(r.Component);t["default"]=d,d.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},45:function(n,t,a){"use strict";a(3),a(46)},46:function(n,t){},48:function(n,t,a){"use strict";a(3),a(55),a(54)},54:function(n,t){},250:function(n,t){"use strict";function a(){var n=arguments;return function(){for(var t=0;t<n.length;t++)n[t]&&n[t].apply&&n[t].apply(this,arguments)}}n.exports=a},267:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(){return k=i["default"].newInstance({prefixCls:d,style:{top:0}})}function p(n,t){var a=arguments.length<=2||void 0===arguments[2]?3:arguments[2],s=arguments[3],e={info:"",success:"check-circle-o",fail:"cross-circle-o",network:"frown",loading:"loading"}[t];"function"==typeof a&&(s=a,a=3);var p=o();p.notice({duration:a,style:{},content:l.createElement("div",{className:d+"-text"},!!e&&l.createElement(f["default"],{type:e}),l.createElement("div",null,n)),onClose:function(){s&&s(),p.destroy(),p=null}})}Object.defineProperty(t,"__esModule",{value:!0});var c=a(1),l=e(c),u=a(286),i=s(u),r=a(33),f=s(r),k=void 0,d="am-toast";t["default"]={SHORT:3,LONG:8,show:function(n,t){return p(n,"info",t,function(){})},info:function(n,t,a){return p(n,"info",t,a)},success:function(n,t,a){return p(n,"success",t,a)},fail:function(n,t,a){return p(n,"fail",t,a)},offline:function(n,t,a){return p(n,"offline",t,a)},loading:function(n,t,a){return p(n,"loading",t,a)},hide:function(){k&&(k.destroy(),k=null)}},n.exports=t["default"]},268:function(n,t,a){"use strict";a(3),a(55),a(276)},276:function(n,t){},284:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),p=s(o),c=a(2),l=s(c),u=p["default"].createClass({displayName:"Notice",propTypes:{duration:o.PropTypes.number,onClose:o.PropTypes.func,children:o.PropTypes.any},getDefaultProps:function(){return{onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}}},componentDidMount:function(){var n=this;this.props.duration&&(this.closeTimer=setTimeout(function(){n.close()},1e3*this.props.duration))},componentWillUnmount:function(){this.clearCloseTimer()},clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close:function(){this.clearCloseTimer(),this.props.onClose()},render:function(){var n,t=this.props,a=t.prefixCls+"-notice",s=(n={},e(n,""+a,1),e(n,a+"-closable",t.closable),e(n,t.className,!!t.className),n);return p["default"].createElement("div",{className:(0,l["default"])(s),style:t.style},p["default"].createElement("div",{className:a+"-content"},t.children),t.closable?p["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:a+"-close"},p["default"].createElement("span",{className:a+"-close-x"})):null)}});t["default"]=u,n.exports=t["default"]},285:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function o(){return"rcNotification_"+v+"_"+b++}Object.defineProperty(t,"__esModule",{value:!0});var p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},c=a(1),l=s(c),u=a(4),i=s(u),r=a(77),f=s(r),k=a(250),d=s(k),y=a(2),m=s(y),g=a(284),h=s(g),b=0,v=Date.now(),w=l["default"].createClass({displayName:"Notification",propTypes:{prefixCls:c.PropTypes.string,transitionName:c.PropTypes.string,animation:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.object]),style:c.PropTypes.object},getDefaultProps:function(){return{prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}}},getInitialState:function(){return{notices:[]}},getTransitionName:function(){var n=this.props,t=n.transitionName;return!t&&n.animation&&(t=n.prefixCls+"-"+n.animation),t},add:function(n){var t=n.key=n.key||o();this.setState(function(a){var s=a.notices;if(!s.filter(function(n){return n.key===t}).length)return{notices:s.concat(n)}})},remove:function(n){this.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==n})}})},render:function(){var n,t=this,a=this.props,s=this.state.notices.map(function(n){var s=(0,d["default"])(t.remove.bind(t,n.key),n.onClose);return l["default"].createElement(h["default"],p({prefixCls:a.prefixCls},n,{onClose:s}),n.content)}),o=(n={},e(n,a.prefixCls,1),e(n,a.className,!!a.className),n);return l["default"].createElement("div",{className:(0,m["default"])(o),style:a.style},l["default"].createElement(f["default"],{transitionName:this.getTransitionName()},s))}});w.newInstance=function(n){var t=n||{},a=document.createElement("div");document.body.appendChild(a);var s=i["default"].render(l["default"].createElement(w,t),a);return{notice:function(n){s.add(n)},removeNotice:function(n){s.remove(n)},component:s,destroy:function(){i["default"].unmountComponentAtNode(a),document.body.removeChild(a)}}},t["default"]=w,n.exports=t["default"]},286:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(285),o=s(e);t["default"]=o["default"],n.exports=t["default"]},849:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(45),a(44)),o=s(e),p=(a(48),a(40)),c=s(p),l=(a(23),a(22)),u=s(l),i=(a(268),a(267)),r=s(i),f=a(1),k=s(f),d=a(4);s(d);n.exports={content:[["p","\u7eaf\u6587\u5b57\u3001\u7eaf\u56fe\u6807\u3001\u6210\u529f\u3001\u5931\u8d25\u3001\u79bb\u7ebf\u3001loading"]],meta:{order:0,title:"\u666e\u901a",filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Toast<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >showToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >info</span><span class="token punctuation" >(</span><span class="token string" >\'\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >successToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >success</span><span class="token punctuation" >(</span><span class="token string" >\'\u52a0\u8f7d\u6210\u529f!!!\'</span><span class="token punctuation" >,</span> <span class="token number" >2</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >failToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >fail</span><span class="token punctuation" >(</span><span class="token string" >\'\u52a0\u8f7d\u5931\u8d25!!!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >offline</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >offline</span><span class="token punctuation" >(</span><span class="token string" >\'\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >loadingToast</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Toast<span class="token punctuation" >.</span><span class="token function" >loading</span><span class="token punctuation" >(</span><span class="token string" >\'\u52a0\u8f7d\u4e2d...\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u52a0\u8f7d\u5b8c\u6210!!!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> ToastExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>toast-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>showToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u7eaf\u6587\u5b57 toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >ghost</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>successToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6210\u529f toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>failToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5931\u8d25 toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >ghost</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>offline<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u7f51\u7edc toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>loadingToast<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u52a0\u8f7d\u4e2d toast<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ToastExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){r["default"].info("\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!")}function t(){r["default"].success("\u52a0\u8f7d\u6210\u529f!!!",2)}function a(){r["default"].fail("\u52a0\u8f7d\u5931\u8d25!!!")}function s(){r["default"].offline("\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!")}function e(){r["default"].loading("\u52a0\u8f7d\u4e2d...",function(){console.log("\u52a0\u8f7d\u5b8c\u6210!!!")})}var p=k["default"].createClass({displayName:"ToastExample",render:function(){return k["default"].createElement("div",{className:"toast-container"},k["default"].createElement(u["default"],null),k["default"].createElement(o["default"],null,k["default"].createElement(c["default"],{type:"primary",onClick:n},"\u7eaf\u6587\u5b57 toast")),k["default"].createElement(u["default"],null),k["default"].createElement(o["default"],null,k["default"].createElement(c["default"],{type:"primary",ghost:!0,onClick:t},"\u6210\u529f toast")),k["default"].createElement(u["default"],null),k["default"].createElement(o["default"],null,k["default"].createElement(c["default"],{type:"primary",onClick:a},"\u5931\u8d25 toast")),k["default"].createElement(u["default"],null),k["default"].createElement(o["default"],null,k["default"].createElement(c["default"],{type:"primary",ghost:!0,onClick:s},"\u7f51\u7edc toast")),k["default"].createElement(u["default"],null),k["default"].createElement(o["default"],null,k["default"].createElement(c["default"],{type:"primary",onClick:e},"\u52a0\u8f7d\u4e2d toast")),k["default"].createElement(u["default"],null))}});return k["default"].createElement(p,null)}}}});