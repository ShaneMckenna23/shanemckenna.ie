webpackJsonp([0x83323ebd9d39],{43:function(e,t,n){e.exports={default:n(45),__esModule:!0}},44:function(e,t,n){e.exports={default:n(46),__esModule:!0}},21:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(43),r=o(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},75:function(e,t,n){var o,i;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===i)for(var a in o)r.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],i=function(){return n}.apply(t,o),!(void 0!==i&&(e.exports=i)))}()},45:function(e,t,n){n(49);var o=n(14).Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},46:function(e,t,n){n(50),e.exports=n(14).Object.getPrototypeOf},49:function(e,t,n){var o=n(25);o(o.S+o.F*!n(24),"Object",{defineProperty:n(26).f})},50:function(e,t,n){var o=n(48),i=n(77);n(79)("getPrototypeOf",function(){return function(e){return i(o(e))}})},54:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(e){function t(){var t=i||r||s||u||p||c,n=void 0,o=void 0;if(t){var a=m?"2000px":"100%",l=v&&e;n=i?(l?"":"-")+a:r?(l?"-":"")+a:"0",o=u||p?(l?"":"-")+a:s||c?(l?"-":"")+a:"0"}return(0,h.animation)((e?"to":"from")+" {opacity: 0;"+(t?" transform: translate3d("+n+", "+o+", 0);":"")+"}\n         "+(e?"from":"to")+" {opacity: 1;transform: none;} ")}return{reverse:i,make:t}}var o=e.out,i=e.left,r=e.right,s=e.up,u=e.down,p=e.top,c=e.bottom,m=e.big,v=e.opposite,y=(0,l.default)(e,["out","left","right","up","down","top","bottom","big","opposite"]);return t?f.default.createElement(d.default,(0,a.default)({},y,{in:n(!1),out:n(!0)})):n(o)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),a=o(r),s=n(13),l=o(s),u=n(1),f=o(u),p=n(3),c=n(8),d=o(c),h=n(9),m={out:p.bool,left:p.bool,right:p.bool,top:p.bool,bottom:p.bool,big:p.bool,opposite:p.bool},v={};i.propTypes=m,i.defaultProps=v,t.default=i,e.exports=t.default},55:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(e){function t(){var t=void 0;if(p||c||i||r||s||u){var n=e&&m,o=p||s||u?(u?n?"":"-":n?"-":"")+"1":"0",a=c||r||i?(i?n?"":"-":n?"-":"")+"1":"0";t=e?"from {\n              transform: perspective(400px);\n            }\n\n            30% {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, -15deg);\n              opacity: 1;\n            }\n\n            to {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, 90deg);\n              opacity: 0;\n            }":"from {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, 90deg);\n              animation-timing-function: ease-in;\n              opacity: 0;\n            }\n\n            40% {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, -20deg);\n              animation-timing-function: ease-in;\n            }\n\n            60% {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, 10deg);\n              opacity: 1;\n            }\n\n            80% {\n              transform: perspective(400px) rotate3d("+o+", "+a+", 0, -5deg);\n            }\n\n            to {\n              transform: perspective(400px);\n            }"}else t="from {\n              transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n              animation-timing-function: ease-out;\n              opacity: "+(e?"1":"0")+";\n            }\n\n            40% {\n              transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n              animation-timing-function: ease-out;\n            }\n\n            50% {\n              transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n              animation-timing-function: ease-in;\n            }\n\n            to {\n              transform: perspective(400px);\n              animation-timing-function: ease-in;\n              opacity: "+(e?"0":"1")+";\n            }";return(0,h.animation)(t)}return{style:{backfaceVisibility:"visible"},make:t}}var o=e.out,i=e.left,r=e.right,s=e.top,u=e.bottom,p=e.x,c=e.y,m=e.opposite,v=(0,l.default)(e,["out","left","right","top","bottom","x","y","opposite"]);return t?f.default.createElement(d.default,(0,a.default)({},v,{in:n(!1),out:n(!0)})):n(o)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),a=o(r),s=n(13),l=o(s),u=n(1),f=o(u),p=n(3),c=n(8),d=o(c),h=n(9),m={out:p.bool,left:p.bool,right:p.bool,top:p.bool,bottom:p.bool,opposite:p.bool},v={};i.propTypes=m,i.defaultProps=v,t.default=i,e.exports=t.default},8:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),r=o(i),a=n(44),s=o(a),l=n(15),u=o(l),f=n(21),p=o(f),c=n(34),d=o(c),h=n(33),m=o(h),v=n(1),y=o(v),b=n(3),w=n(9),g=n(57),_=o(g),x=n(59),E=o(x),O={when:b.bool,spy:b.any,effect:b.string,collapse:(0,b.oneOfType)([b.bool,b.string]),duration:b.number,delay:b.number,count:b.number,forever:b.bool,tag:b.string,step:(0,b.oneOfType)([(0,b.instanceOf)(_.default),b.string]),className:b.string,style:b.object,props:b.object,force:b.bool,bypass:b.bool,fraction:b.number,onReveal:b.func,children:b.node.isRequired,in:b.object,out:(0,b.oneOfType)([b.object,b.bool])},M={duration:1e3,delay:0,count:1,fraction:.2,tag:"div",when:!0},j={stepper:b.object},k=function(e){function t(e){(0,u.default)(this,t);var n=(0,d.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return n.state={legacyMode:!1,style:{height:e.collapse?0:void 0,visibility:e.collapse?e.when||!e.out?"visible":"hidden":void 0,opacity:!e.when&&e.out?0:void 0}},n.isListener=!1,n.isShown=!!n.props.bypass,n.revealHandler=(0,E.default)(n.reveal.bind(n,!1),66),n.resizeHandler=(0,E.default)(n.resize.bind(n),500),n.invisible=(0,E.default)(n.invisible,500),n.saveRef=function(e){return n.el=e},n}return(0,m.default)(t,e),(0,p.default)(t,[{key:"inViewport",value:function(){if(!this.el||window.document.hidden)return!1;var e=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(e,window.innerHeight)*(w.globalHide?this.props.fraction:0);return n>o-window.innerHeight&&n<e-o}},{key:"hide",value:function(){this.props.out&&this.setState({style:{opacity:0}})}},{key:"resize",value:function(){this&&this.el&&this.props.when&&this.inViewport()&&(this.clean(),this.isShown=!!this.props.when,this.setState({style:{opacity:this.props.when||!this.props.out?1:0}}),this.props.onReveal&&this.props.when&&this.props.onReveal())}},{key:"invisible",value:function(){this&&!this.isShown&&this.setState({style:(0,r.default)({},this.state.style,{visibility:"hidden"})})}},{key:"animationEnd",value:function(e,t){var n=this;if(!t){var o=this.finalEl||this.el,i=function t(){n&&o&&(o.removeEventListener("animationend",t),e.call(n))};o.addEventListener("animationend",i)}}},{key:"collapse",value:function(e,t){if(t.collapse&&t.out){var n=t.duration+(t.cascade?!0===t.cascade?1e3:t.cascade:0),o=n>>2,i=t.when?o:n-o,a=t.delay+(t.when?0:o);return(0,r.default)({},e,{height:t.when?!0===t.collapse?this.dummyEl.offsetHeight:t.collapse:0,transition:"height "+i+"ms ease "+a+"ms"})}return e}},{key:"animate",value:function(e){if(this&&this.el){if(this.clean(),e.effect)this.setState({legacyMode:!0});else{var t=e[e.when||!e.out?"in":"out"],n=e.out||e.when?t.animation||t.make():void 0;if(this.isShown===!!e.when)return;this.isShown=!!e.when,this.setState({style:this.collapse((0,r.default)({animationName:n,animationDuration:e.duration+"ms",animationDelay:e.delay+"ms",animationIterationCount:e.forever?"infinite":e.count,animationFillMode:"both",opacity:1},t.style),e)}),!e.when&&e.out&&this.animationEnd(this.invisible,e.forever)}e.onReveal&&e.when&&e.onReveal()}}},{key:"clean",value:function(){this.isListener&&(window.removeEventListener("scroll",this.revealHandler),window.removeEventListener("orientationchange",this.revealHandler),window.document.removeEventListener("visibilitychange",this.revealHandler),window.removeEventListener("resize",this.resizeHandler),this.isListener=!1)}},{key:"componentWillUnmount",value:function(){this.clean(),w.ssr&&(0,w.disableSsr)()}},{key:"listen",value:function(){this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler),window.addEventListener("orientationchange",this.revealHandler),window.document.addEventListener("visibilitychange",this.revealHandler),window.addEventListener("resize",this.resizeHandler))}},{key:"reveal",value:function(e){var t=this;if(this&&this.el)if(e||(e=this.props),this.inViewport()){if(this.start)return this.hide(),this.listen(),void this.start(this.step);e.when&&this.isShown&&"spy"in e?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.animate.call(t,e)},200)):this.animate(e)}else this.listen()}},{key:"componentDidMount",value:function(){if(this.el&&!this.props.bypass){if(this.props.force)return this.animate(this.props);this.props.step instanceof _.default?this.props.step.push(this):this.props.step&&this.context.stepper&&this.context.stepper.get(this.props.step).push(this),w.ssr&&(this.props.out||this.props.effect)&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms"}}),window.setTimeout(this.revealHandler,1e3)):this.props.when&&this.reveal(this.props)}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return y.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):y.default.Children.toArray(e);var o=n.length-1,i=this.props.duration+(!0===this.props.cascade?1e3:this.props.cascade),a=0;return n=n.map(function(e){return y.default.cloneElement(e,{style:(0,r.default)({},e.props.style,t.state.style,{animationDuration:Math.round((0,w.cascade)(a++,0,o,t.props.duration,i))+"ms"}),ref:a===o?function(e){return t.finalEl=e}:void 0})})}},{key:"componentWillReceiveProps",value:function(e){e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e)}},{key:"dummy",value:function(e){var t=this;if(!0!==this.props.collapse)return e;var n=[e,y.default.createElement(e.type,(0,r.default)({},this.props.props||void 0,{className:this.props.className,children:this.props.children,key:2,ref:function(e){return t.dummyEl=e},style:(0,r.default)({},this.props.style,{position:"absolute",left:"-9999em",top:"-9999em",height:"auto",display:"block",animationName:"none",animationDuration:"0s",transition:"none",opacity:0})}))];return y.default.createElement("span",null,n)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.id,o=e.children,i=e.style,a=e.className,s=(this.state.legacyMode?this.props.effect:this.props.out||this.props.effect?w.namespace:"")+(a?" "+a:"")||void 0,l=void 0,u=!1;this.state.legacyMode||(l=(0,r.default)({},i,this.state.style),this.props.cascade&&o&&this.state.style.animationName&&(u=this.cascade(o),l.animationName=void 0));var f=y.default.createElement(t,(0,r.default)({},this.props.props||void 0,{id:n,className:s,style:this.state.legacyMode?i:l,key:this.props.collapse?1:void 0,ref:this.saveRef}),u||o);return this.props.collapse?this.dummy(f):f}}],[{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(y.default.Component);k.propTypes=O,k.defaultProps=M,k.contextTypes=j,t.default=k,e.exports=t.default},56:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(e){function t(){var t="-200deg",n="center";return e&&m?((p||u)&&r&&(t="-45deg"),((p||u)&&i||(c||s)&&r)&&(t="45deg"),(c||s)&&i&&(t="-90deg"),(i||r)&&(n=(r?"left":"right")+" bottom")):((c||s)&&i&&(t="-45deg"),((c||s)&&r||(p||u)&&i)&&(t="45deg"),(p||u)&&r&&(t="-90deg"),(i||r)&&(n=(i?"left":"right")+" bottom")),(0,h.animation)("\n        "+(e?"to":"from")+" { opacity: 0; transform-origin: "+n+"; transform: rotate3d(0, 0, 1, "+t+");}\n        "+(e?"from":"to")+" { opacity: 1; transform-origin: "+n+"; transform: none;}\n      ")}return{make:t}}var o=e.out,i=e.left,r=e.right,s=e.top,u=e.bottom,p=e.up,c=e.down,m=e.opposite,v=(0,l.default)(e,["out","left","right","top","bottom","up","down","opposite"]);return t?f.default.createElement(d.default,(0,a.default)({},v,{in:n(!1),out:n(!0)})):n(o)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),a=o(r),s=n(13),l=o(s),u=n(1),f=o(u),p=n(3),c=n(8),d=o(c),h=n(9),m={out:p.bool,left:p.bool,right:p.bool,top:p.bool,bottom:p.bool,opposite:p.bool},v={};i.propTypes=m,i.defaultProps=v,t.default=i,e.exports=t.default},57:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(15),r=o(i),a=n(21),s=o(a),l=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;(0,r.default)(this,e),this.after=n,this.name=t,this.chain=[]}return(0,s.default)(e,[{key:"push",value:function(e){this.start&&(e.step=this.index,e.start=this.start),this.chain.push(e)}}]),e}();t.default=l,e.exports=t.default},58:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function n(e){function t(){var t=i||r,n=s||u||p||c,o=t||n,a=void 0,l=void 0,f=void 0,d=void 0,v=void 0;return o?e?(l=t?((m?r:i)?"":"-")+"42px":"0",f=n?((m?p||u:c||s)?"-":"")+"60px":"0",d=t?((m?i:r)?"":"-")+"2000px":"0",v=n?((m?c||s:p||u)?"":"-")+"2000px":"0",a="40% {\n              opacity: 1;\n              transform: scale3d(.475, .475, .475) translate3d("+l+", "+f+", 0);\n            }\n            to {\n              opacity: 0;\n              transform: scale(.1) translate3d("+d+", "+v+", 0);\n              transform-origin: "+(n?"center bottom":((m?r:i)?"left":"right")+" center")+";\n            }"):(l=t?(i?"-":"")+"1000px":"0",f=n?(c||s?"-":"")+"1000px":"0",d=t?(r?"-":"")+"10px":"0",v=n?(p||u?"-":"")+"60px":"0",a="from {\n              opacity: 0;\n              transform: scale3d(.1, .1, .1) translate3d("+l+", "+f+", 0);\n              animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n            }\n            60% {\n              opacity: 1;\n              transform: scale3d(.475, .475, .475) translate3d("+d+", "+v+", 0);\n              animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n            }"):a=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",(0,h.animation)(a)}return{make:t}}var o=e.out,i=e.left,r=e.right,s=e.top,u=e.bottom,p=e.up,c=e.down,m=e.opposite,v=(0,l.default)(e,["out","left","right","top","bottom","up","down","opposite"]);return t?f.default.createElement(d.default,(0,a.default)({},v,{in:n(!1),out:n(!0)})):n(o)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),a=o(r),s=n(13),l=o(s),u=n(1),f=o(u),p=n(3),c=n(8),d=o(c),h=n(9),m={out:p.bool,left:p.bool,right:p.bool,top:p.bool,bottom:p.bool,opposite:p.bool},v={};i.propTypes=m,i.defaultProps=v,t.default=i,e.exports=t.default},59:function(e,t){"use strict";function n(e,t,n){var o;return function(){var i=this,r=arguments,a=function(){o=null,n||e.apply(i,r)},s=n&&!o;clearTimeout(o),o=setTimeout(a,t),s&&e.apply(i,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},9:function(e,t){"use strict";function n(e){try{return p.insertRule(e,p.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(e,t,n,o,i){var r=Math.log(o),a=Math.log(i),s=(a-r)/(n-t);return Math.exp(r+s*(e-t))}function i(e){if(!p)return"";var t="@keyframes "+(c+u)+"{"+e+"}",n=f[e];return n?""+c+n:(p.insertRule(t,p.cssRules.length),f[e]=u,""+c+u++)}function r(){window.removeEventListener("scroll",r,!0),n("."+a+" { opacity: 0; }"),window.removeEventListener("orientationchange",r,!0),window.document.removeEventListener("visibilitychange",r),t.globalHide=l=!0}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=o,t.animation=i;var a=t.namespace="react-reveal",s=(t.is16=!1,t.ssr=!0),l=(t.disableSsr=function(){return t.ssr=s=!1},t.globalHide=!1),u=1,f={},p=!1,c=a+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<500&&(t.ssr=s=!1);var d=document.createElement("style");document.head.appendChild(d),d.sheet&&d.sheet.cssRules&&d.sheet.insertRule&&(p=d.sheet,window.addEventListener("scroll",r,!0),window.addEventListener("orientationchange",r,!0),window.document.addEventListener("visibilitychange",r))}},60:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(i).default}});var r=n(54);Object.defineProperty(t,"Fade",{enumerable:!0,get:function(){return o(r).default}});var a=n(55);Object.defineProperty(t,"Flip",{enumerable:!0,get:function(){return o(a).default}});var s=n(56);Object.defineProperty(t,"Rotate",{enumerable:!0,get:function(){return o(s).default}});var l=n(58);Object.defineProperty(t,"Zoom",{enumerable:!0,get:function(){return o(l).default}})},73:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),l=o(s),u=n(75),f=o(u),p=n(82),c=o(p),d=function(e){function t(){return i(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e,t=this.props.children,n=(0,f.default)(c.default.container,(e={},e[c.default.text]=this.props.text,e));return l.default.createElement("div",{className:n},t)},t}(l.default.Component);t.default=d,e.exports=t.default},82:function(e,t){e.exports={container:"src-components-Container----Container-module---container---mqt46",text:"src-components-Container----Container-module---text---hNVyh"}},118:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),l=o(s),u=n(60),f=n(136),p=o(f),c=function(e){function t(){return i(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props.children;return l.default.createElement("div",{className:p.default.header},l.default.createElement(u.Fade,{down:!0,tag:"h1"},e))},t}(l.default.Component);t.default=c,e.exports=t.default},136:function(e,t){e.exports={header:"src-components-Header----Header-module---header---1rl48"}},279:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),l=o(s),u=n(42),f=o(u),p=n(118),c=o(p),d=n(73),h=o(d),m=n(93),v=o(m),y=n(20),b=o(y),w=function(e){function t(){return i(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return l.default.createElement("div",{className:"container about-container"},l.default.createElement(f.default,{title:"About | "+b.default.siteTitle}),l.default.createElement(c.default,null,"About"),l.default.createElement(h.default,{text:!0},l.default.createElement("h1",null,"Hi!"),l.default.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands.")),l.default.createElement(v.default,null))},t}(l.default.Component);t.default=w,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-jsx-8f4604d23e823384a6f1.js.map