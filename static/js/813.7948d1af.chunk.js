(self.webpackChunkalter_vision_landing=self.webpackChunkalter_vision_landing||[]).push([[813],{6939:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,f,u,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(!i(e[f],a[f]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!a.has(f.value[0]))return!1;for(c=e.entries();!(f=c.next()).done;)if(!i(f.value[1],a.get(f.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(e[f]!==a[f])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(f=s;0!==f--;)if(!Object.prototype.hasOwnProperty.call(a,u[f]))return!1;if(t&&e instanceof Element)return!1;for(f=s;0!==f--;)if(("_owner"!==u[f]&&"__v"!==u[f]&&"__o"!==u[f]||!e.$$typeof)&&!i(e[u[f]],a[u[f]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2686:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{O:function(){return Ae}});var o=n(7313);function i(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function a(e){return e instanceof i(e).Element||e instanceof Element}function s(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function f(e){return"undefined"!==typeof ShadowRoot&&(e instanceof i(e).ShadowRoot||e instanceof ShadowRoot)}var u=Math.max,c=Math.min,l=Math.round;function p(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(s(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=l(n.width)/a||1),i>0&&(o=l(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function d(e){var t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function v(e){return e?(e.nodeName||"").toLowerCase():null}function m(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return p(m(e)).left+d(e).scrollLeft}function g(e){return i(e).getComputedStyle(e)}function y(e){var t=g(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function b(e,t,n){void 0===n&&(n=!1);var r=s(t),o=s(t)&&function(e){var t=e.getBoundingClientRect(),n=l(t.width)/e.offsetWidth||1,r=l(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),a=m(t),f=p(e,o),u={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==v(t)||y(a))&&(u=function(e){return e!==i(e)&&s(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:d(e);var t}(t)),s(t)?((c=p(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=h(a))),{x:f.left+u.scrollLeft-c.x,y:f.top+u.scrollTop-c.y,width:f.width,height:f.height}}function w(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function O(e){return"html"===v(e)?e:e.assignedSlot||e.parentNode||(f(e)?e.host:null)||m(e)}function x(e){return["html","body","#document"].indexOf(v(e))>=0?e.ownerDocument.body:s(e)&&y(e)?e:x(O(e))}function E(e,t){var n;void 0===t&&(t=[]);var r=x(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=i(r),s=o?[a].concat(a.visualViewport||[],y(r)?r:[]):r,f=t.concat(s);return o?f:f.concat(E(O(s)))}function j(e){return["table","td","th"].indexOf(v(e))>=0}function k(e){return s(e)&&"fixed"!==g(e).position?e.offsetParent:null}function L(e){for(var t=i(e),n=k(e);n&&j(n)&&"static"===g(n).position;)n=k(n);return n&&("html"===v(n)||"body"===v(n)&&"static"===g(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&s(e)&&"fixed"===g(e).position)return null;var n=O(e);for(f(n)&&(n=n.host);s(n)&&["html","body"].indexOf(v(n))<0;){var r=g(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var A="top",C="bottom",D="right",R="left",S="auto",P=[A,C,D,R],M="start",T="end",B="viewport",H="popper",W=P.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+T])}),[]),V=[].concat(P,[S]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+T])}),[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function U(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var N={placement:"bottom",modifiers:[],strategy:"absolute"};function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function z(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?N:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},N,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,u={state:o,setOptions:function(n){var f="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,f),o.scrollParents={reference:a(e)?E(e):e.contextElement?E(e.contextElement):[],popper:E(t)};var l=function(e){var t=q(e);return _.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:u,options:r}),f=function(){};s.push(a||f)}})),u.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(F(t,n)){o.rects={reference:b(t,L(n),"fixed"===o.options.strategy),popper:w(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,c=void 0===s?{}:s,l=i.name;"function"===typeof a&&(o=a({state:o,options:c,name:l,instance:u})||o)}else o.reset=!1,r=-1}}},update:U((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){c(),f=!0}};if(!F(e,t))return u;function c(){s.forEach((function(e){return e()})),s=[]}return u.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var I={passive:!0};function X(e){return e.split("-")[0]}function Y(e){return e.split("-")[1]}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?X(o):null,a=o?Y(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case A:t={x:s,y:n.y-r.height};break;case C:t={x:s,y:n.y+n.height};break;case D:t={x:n.x+n.width,y:f};break;case R:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var u=i?$(i):null;if(null!=u){var c="y"===u?"height":"width";switch(a){case M:t[u]=t[u]-(n[c]/2-r[c]/2);break;case T:t[u]=t[u]+(n[c]/2-r[c]/2)}}return t}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,f=e.position,u=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,d=e.isFixed,v=s.x,h=void 0===v?0:v,y=s.y,b=void 0===y?0:y,w="function"===typeof p?p({x:h,y:b}):{x:h,y:b};h=w.x,b=w.y;var O=s.hasOwnProperty("x"),x=s.hasOwnProperty("y"),E=R,j=A,k=window;if(c){var S=L(n),P="clientHeight",M="clientWidth";if(S===i(n)&&"static"!==g(S=m(n)).position&&"absolute"===f&&(P="scrollHeight",M="scrollWidth"),S=S,o===A||(o===R||o===D)&&a===T)j=C,b-=(d&&S===k&&k.visualViewport?k.visualViewport.height:S[P])-r.height,b*=u?1:-1;if(o===R||(o===A||o===C)&&a===T)E=D,h-=(d&&S===k&&k.visualViewport?k.visualViewport.width:S[M])-r.width,h*=u?1:-1}var B,H=Object.assign({position:f},c&&G),W=!0===p?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:l(t*r)/r||0,y:l(n*r)/r||0}}({x:h,y:b}):{x:h,y:b};return h=W.x,b=W.y,u?Object.assign({},H,((B={})[j]=x?"0":"",B[E]=O?"0":"",B.transform=(k.devicePixelRatio||1)<=1?"translate("+h+"px, "+b+"px)":"translate3d("+h+"px, "+b+"px, 0)",B)):Object.assign({},H,((t={})[j]=x?b+"px":"",t[E]=O?h+"px":"",t.transform="",t))}var Q={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=V.reduce((function(e,n){return e[n]=function(e,t,n){var r=X(e),o=[R,A].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[R,D].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},Z={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&f(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function oe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ie(e,t){return t===B?oe(function(e){var t=i(e),n=m(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,f=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:o,height:a,x:s+h(e),y:f}}(e)):a(t)?function(e){var t=p(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):oe(function(e){var t,n=m(e),r=d(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=u(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=u(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+h(e),f=-r.scrollTop;return"rtl"===g(o||n).direction&&(s+=u(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(m(e)))}function ae(e,t,n){var r="clippingParents"===t?function(e){var t=E(O(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&s(e)?L(e):e;return a(n)?t.filter((function(e){return a(e)&&re(e,n)&&"body"!==v(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],f=o.reduce((function(t,n){var r=ie(e,n);return t.top=u(r.top,t.top),t.right=c(r.right,t.right),t.bottom=c(r.bottom,t.bottom),t.left=u(r.left,t.left),t}),ie(e,i));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function se(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function fe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,s=void 0===i?"clippingParents":i,f=n.rootBoundary,u=void 0===f?B:f,c=n.elementContext,l=void 0===c?H:c,d=n.altBoundary,v=void 0!==d&&d,h=n.padding,g=void 0===h?0:h,y=se("number"!==typeof g?g:fe(g,P)),b=l===H?"reference":H,w=e.rects.popper,O=e.elements[v?b:l],x=ae(a(O)?O:O.contextElement||m(e.elements.popper),s,u),E=p(e.elements.reference),j=J({reference:E,element:w,strategy:"absolute",placement:o}),k=oe(Object.assign({},w,j)),L=l===H?k:E,R={top:x.top-L.top+y.top,bottom:L.bottom-x.bottom+y.bottom,left:x.left-L.left+y.left,right:L.right-x.right+y.right},S=e.modifiersData.offset;if(l===H&&S){var M=S[o];Object.keys(R).forEach((function(e){var t=[D,C].indexOf(e)>=0?1:-1,n=[A,C].indexOf(e)>=0?"y":"x";R[e]+=M[n]*t}))}return R}function ce(e,t,n){return u(e,c(t,n))}var le={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.padding,v=n.tether,m=void 0===v||v,h=n.tetherOffset,g=void 0===h?0:h,y=ue(t,{boundary:f,rootBoundary:l,padding:d,altBoundary:p}),b=X(t.placement),O=Y(t.placement),x=!O,E=$(b),j="x"===E?"y":"x",k=t.modifiersData.popperOffsets,S=t.rects.reference,P=t.rects.popper,T="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,B="number"===typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(k){if(i){var V,_="y"===E?A:R,q="y"===E?C:D,U="y"===E?"height":"width",N=k[E],F=N+y[_],z=N-y[q],I=m?-P[U]/2:0,J=O===M?S[U]:P[U],G=O===M?-P[U]:-S[U],K=t.elements.arrow,Q=m&&K?w(K):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Z[_],te=Z[q],ne=ce(0,S[U],Q[U]),re=x?S[U]/2-I-ne-ee-B.mainAxis:J-ne-ee-B.mainAxis,oe=x?-S[U]/2+I+ne+te+B.mainAxis:G+ne+te+B.mainAxis,ie=t.elements.arrow&&L(t.elements.arrow),ae=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(V=null==H?void 0:H[E])?V:0,fe=N+oe-se,le=ce(m?c(F,N+re-se-ae):F,N,m?u(z,fe):z);k[E]=le,W[E]=le-N}if(s){var pe,de="x"===E?A:R,ve="x"===E?C:D,me=k[j],he="y"===j?"height":"width",ge=me+y[de],ye=me-y[ve],be=-1!==[A,R].indexOf(b),we=null!=(pe=null==H?void 0:H[j])?pe:0,Oe=be?ge:me-S[he]-P[he]-we+B.altAxis,xe=be?me+S[he]+P[he]-we-B.altAxis:ye,Ee=m&&be?function(e,t,n){var r=ce(e,t,n);return r>n?n:r}(Oe,me,xe):ce(m?Oe:ge,me,m?xe:ye);k[j]=Ee,W[j]=Ee-me}t.modifiersData[r]=W}},requiresIfExists:["offset"]};var pe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=X(n.placement),f=$(s),u=[R,D].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return se("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:fe(e,P))}(o.padding,n),l=w(i),p="y"===f?A:R,d="y"===f?C:D,v=n.rects.reference[u]+n.rects.reference[f]-a[f]-n.rects.popper[u],m=a[f]-n.rects.reference[f],h=L(i),g=h?"y"===f?h.clientHeight||0:h.clientWidth||0:0,y=v/2-m/2,b=c[p],O=g-l[u]-c[d],x=g/2-l[u]/2+y,E=ce(b,x,O),j=f;n.modifiersData[r]=((t={})[j]=E,t.centerOffset=E-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&re(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function de(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ve(e){return[A,D,C,R].some((function(t){return e[t]>=0}))}var me=z({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,s=r.resize,f=void 0===s||s,u=i(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach((function(e){e.addEventListener("scroll",n.update,I)})),f&&u.addEventListener("resize",n.update,I),function(){a&&c.forEach((function(e){e.removeEventListener("scroll",n.update,I)})),f&&u.removeEventListener("resize",n.update,I)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=J({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,u={placement:X(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&v(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&v(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},Q,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,u=n.padding,c=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,v=void 0===d||d,m=n.allowedAutoPlacements,h=t.options.placement,g=X(h),y=f||(g===h||!v?[ee(h)]:function(e){if(X(e)===S)return[];var t=ee(e);return[ne(e),t,ne(t)]}(h)),b=[h].concat(y).reduce((function(e,n){return e.concat(X(n)===S?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,u=void 0===f?V:f,c=Y(r),l=c?s?W:W.filter((function(e){return Y(e)===c})):P,p=l.filter((function(e){return u.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=ue(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[X(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:c,rootBoundary:l,padding:u,flipVariations:v,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,E=!0,j=b[0],k=0;k<b.length;k++){var L=b[k],T=X(L),B=Y(L)===M,H=[A,C].indexOf(T)>=0,_=H?"width":"height",q=ue(t,{placement:L,boundary:c,rootBoundary:l,altBoundary:p,padding:u}),U=H?B?D:R:B?C:A;w[_]>O[_]&&(U=ee(U));var N=ee(U),F=[];if(i&&F.push(q[T]<=0),s&&F.push(q[U]<=0,q[N]<=0),F.every((function(e){return e}))){j=L,E=!1;break}x.set(L,F)}if(E)for(var z=function(e){var t=b.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},I=v?3:1;I>0;I--){if("break"===z(I))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},le,pe,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ue(t,{elementContext:"reference"}),s=ue(t,{altBoundary:!0}),f=de(a,r),u=de(s,o,i),c=ve(f),l=ve(u);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),he=n(6939),ge=n.n(he),ye=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},be="undefined"!==typeof window&&window.document&&window.document.createElement?o.useLayoutEffect:o.useEffect,we=[];function Oe(e){var t=o.useRef(e);return t.current=e,o.useCallback((function(){return t.current}),[])}var xe=function(){};function Ee(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e,x:0,y:0,toJSON:function(){return null}}}}var je=["styles","attributes"],ke={getBoundingClientRect:Ee()},Le={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function Ae(e,t){var n,i,a;void 0===e&&(e={}),void 0===t&&(t={});var s=Object.keys(Le).reduce((function(e,t){var n;return r({},e,((n={})[t]=void 0!==e[t]?e[t]:Le[t],n))}),e),f=o.useMemo((function(){return[{name:"offset",options:{offset:s.offset}}]}),Array.isArray(s.offset)?s.offset:[]),u=r({},t,{placement:t.placement||s.placement,modifiers:t.modifiers||f}),c=o.useState(null),l=c[0],p=c[1],d=o.useState(null),v=d[0],m=d[1],h=function(e){var t=e.initial,n=e.value,r=e.onChange,i=void 0===r?xe:r;if(void 0===t&&void 0===n)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var a=o.useState(t),s=a[0],f=a[1],u=Oe(s),c=o.useCallback((function(e){var t=u(),n="function"===typeof e?e(t):e;"function"===typeof n.persist&&n.persist(),f(n),"function"===typeof i&&i(n)}),[u,i]),l=void 0!==n;return[l?n:s,l?i:c]}({initial:s.defaultVisible,value:s.visible,onChange:s.onVisibleChange}),g=h[0],y=h[1],b=o.useRef();o.useEffect((function(){return function(){return clearTimeout(b.current)}}),[]);var w=function(e,t,n){void 0===n&&(n={});var r=o.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||we},a=o.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],f=a[1],u=o.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);f({styles:ye(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:ye(n.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),c=o.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return ge()(r.current,e)?r.current||e:(r.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),l=o.useRef();return be((function(){l.current&&l.current.setOptions(c)}),[c]),be((function(){if(null!=e&&null!=t){var r=(n.createPopper||me)(e,t,c);return l.current=r,function(){r.destroy(),l.current=null}}}),[e,t,n.createPopper]),{state:l.current?l.current.state:null,styles:s.styles,attributes:s.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}}(s.followCursor?ke:l,v,u),O=w.styles,x=w.attributes,E=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(w,je),j=E.update,k=Oe({visible:g,triggerRef:l,tooltipRef:v,finalConfig:s}),L=o.useCallback((function(e){return Array.isArray(s.trigger)?s.trigger.includes(e):s.trigger===e}),Array.isArray(s.trigger)?s.trigger:[s.trigger]),A=o.useCallback((function(){clearTimeout(b.current),b.current=window.setTimeout((function(){return y(!1)}),s.delayHide)}),[s.delayHide,y]),C=o.useCallback((function(){clearTimeout(b.current),b.current=window.setTimeout((function(){return y(!0)}),s.delayShow)}),[s.delayShow,y]),D=o.useCallback((function(){k().visible?A():C()}),[k,A,C]);o.useEffect((function(){if(k().finalConfig.closeOnOutsideClick){var e=function(e){var t,n=k(),r=n.tooltipRef,o=n.triggerRef,i=(null==e.composedPath||null==(t=e.composedPath())?void 0:t[0])||e.target;i instanceof Node&&(null==r||null==o||r.contains(i)||o.contains(i)||A())};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}}),[k,A]),o.useEffect((function(){if(null!=l&&L("click"))return l.addEventListener("click",D),function(){return l.removeEventListener("click",D)}}),[l,L,D]),o.useEffect((function(){if(null!=l&&L("right-click")){var e=function(e){e.preventDefault(),D()};return l.addEventListener("contextmenu",e),function(){return l.removeEventListener("contextmenu",e)}}}),[l,L,D]),o.useEffect((function(){if(null!=l&&L("focus"))return l.addEventListener("focus",C),l.addEventListener("blur",A),function(){l.removeEventListener("focus",C),l.removeEventListener("blur",A)}}),[l,L,C,A]),o.useEffect((function(){if(null!=l&&L("hover"))return l.addEventListener("mouseenter",C),l.addEventListener("mouseleave",A),function(){l.removeEventListener("mouseenter",C),l.removeEventListener("mouseleave",A)}}),[l,L,C,A]),o.useEffect((function(){if(null!=v&&k().finalConfig.interactive)return v.addEventListener("mouseenter",C),v.addEventListener("mouseleave",A),function(){v.removeEventListener("mouseenter",C),v.removeEventListener("mouseleave",A)}}),[v,C,A,k]);var R=null==E||null==(n=E.state)||null==(i=n.modifiersData)||null==(a=i.hide)?void 0:a.isReferenceHidden;o.useEffect((function(){s.closeOnTriggerHidden&&R&&A()}),[s.closeOnTriggerHidden,A,R]),o.useEffect((function(){if(s.followCursor&&null!=l)return l.addEventListener("mousemove",e),function(){return l.removeEventListener("mousemove",e)};function e(e){var t=e.clientX,n=e.clientY;ke.getBoundingClientRect=Ee(t,n),null==j||j()}}),[s.followCursor,l,j]),o.useEffect((function(){if(null!=v&&null!=j&&null!=s.mutationObserverOptions){var e=new MutationObserver(j);return e.observe(v,s.mutationObserverOptions),function(){return e.disconnect()}}}),[s.mutationObserverOptions,v,j]);return r({getArrowProps:function(e){return void 0===e&&(e={}),r({},e,x.arrow,{style:r({},e.style,O.arrow),"data-popper-arrow":!0})},getTooltipProps:function(e){return void 0===e&&(e={}),r({},e,{style:r({},e.style,O.popper)},x.popper,{"data-popper-interactive":s.interactive})},setTooltipRef:m,setTriggerRef:p,tooltipRef:v,triggerRef:l,visible:g},E)}},4294:function(){}}]);