import{a as n,b as t,c as o,d as e,i,s as c,e as r,S as a,y as s,k as u,q as l,A as f,B as h,n as d,o as v,D as p,N as w,E as m,p as g,O as y,u as R,G as S,P as E,z as L,C as P,Q as $,x as D,h as U,v as k,t as O,R as T,K as j,L as V,M as b}from"./client.a8955c19.js";function x(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,c=t(n);if(e){var r=t(this).constructor;i=Reflect.construct(c,arguments,r)}else i=c.apply(this,arguments);return o(this,i)}}function C(n){var t,o,e,i,c;return{c:function(){t=s("script"),e=u(),i=s("div"),this.h()},l:function(n){var o=l('[data-svelte="svelte-1gjteg3"]',document.head);t=f(o,"SCRIPT",{src:!0}),h(t).forEach(d),o.forEach(d),e=v(n),i=f(n,"DIV",{id:!0,style:!0,class:!0}),h(i).forEach(d),this.h()},h:function(){t.src!==(o="/blog/content/js/p5."+n[1]+".min.js")&&p(t,"src",o),p(i,"id",n[0]),w(i,"position","relative"),w(i,"width",n[2]),w(i,"height",n[3]),p(i,"class","svelte-15taklf")},m:function(o,r,a){m(document.head,t),g(o,e,r),g(o,i,r),a&&c(),c=y(t,"load",n[4])},p:function(n,e){var c=R(e,1)[0];2&c&&t.src!==(o="/blog/content/js/p5."+n[1]+".min.js")&&p(t,"src",o),1&c&&p(i,"id",n[0]),4&c&&w(i,"width",n[2]),8&c&&w(i,"height",n[3])},i:S,o:S,d:function(n){d(t),n&&d(e),n&&d(i),c()}}}function N(n,t,o){var e=t.sketch,i=t.id,c=void 0===i?"sketch":i,r=t.p5Version,a=void 0===r?"1.0.0":r,s=t.width,u=void 0===s?"100%":s,l=t.height,f=void 0===l?"100%":l,h={};return E((function(){h.remove&&h.remove()})),n.$set=function(n){"sketch"in n&&o(5,e=n.sketch),"id"in n&&o(0,c=n.id),"p5Version"in n&&o(1,a=n.p5Version),"width"in n&&o(2,u=n.width),"height"in n&&o(3,f=n.height)},[c,a,u,f,function(){h=new p5(e,c)},e]}var F=function(t){n(s,a);var o=x(s);function s(n){var t;return e(this,s),t=o.call(this),i(r(t),n,N,C,c,{sketch:5,id:0,p5Version:1,width:2,height:3}),t}return s}();function I(n){return"URLSearchParams"in window?new URLSearchParams(window.location.search).get(n):""}function M(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,c=t(n);if(e){var r=t(this).constructor;i=Reflect.construct(c,arguments,r)}else i=c.apply(this,arguments);return o(this,i)}}function B(n){var t,o=n[5].default,e=j(o,n,n[4],null);return{c:function(){e&&e.c()},l:function(n){e&&e.l(n)},m:function(n,o){e&&e.m(n,o),t=!0},p:function(n,t){e&&e.p&&16&t&&e.p(V(o,n,n[4],null),b(o,n[4],t,null))},i:function(n){t||(O(e,n),t=!0)},o:function(n){U(e,n),t=!1},d:function(n){e&&e.d(n)}}}function q(n){var t,o=n[5].default,e=j(o,n,n[4],null);return{c:function(){e&&e.c()},l:function(n){e&&e.l(n)},m:function(n,o){e&&e.m(n,o),t=!0},p:function(n,t){e&&e.p&&16&t&&e.p(V(o,n,n[4],null),b(o,n[4],t,null))},i:function(n){t||(O(e,n),t=!0)},o:function(n){U(e,n),t=!1},d:function(n){e&&e.d(n)}}}function z(n){var t,o,e,i,c,r,a,l,w=[q,B],S=[];function E(n,t){return n[1]?0:1}return o=E(n),e=S[o]=w[o](n),{c:function(){t=s("div"),e.c(),i=u(),c=s("button"),r=L("FULL SCREEN MODE"),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var o=h(t);e.l(o),o.forEach(d),i=v(n),c=f(n,"BUTTON",{class:!0});var a=h(c);r=P(a,"FULL SCREEN MODE"),a.forEach(d),this.h()},h:function(){p(t,"class","fullscreen-wrapper svelte-6807go"),$(t,"overlay",n[0]),p(c,"class","overlay-button svelte-6807go"),$(c,"overlay",n[0])},m:function(e,s,u){g(e,t,s),S[o].m(t,null),g(e,i,s),g(e,c,s),m(c,r),a=!0,u&&l(),l=y(c,"click",n[2])},p:function(n,i){var r=R(i,1)[0],a=o;(o=E(n))===a?S[o].p(n,r):(D(),U(S[a],1,1,(function(){S[a]=null})),k(),(e=S[o])||(e=S[o]=w[o](n)).c(),O(e,1),e.m(t,null)),1&r&&$(t,"overlay",n[0]),1&r&&$(c,"overlay",n[0])},i:function(n){a||(O(e),a=!0)},o:function(n){U(e),a=!1},d:function(n){n&&d(t),S[o].d(),n&&d(i),n&&d(c),l()}}}function A(n,t,o){var e=t.reloadSlotOnToggle,i=void 0===e||e;T((function(){o(0,c="1"==I("full-screen")),window.addEventListener("popstate",(function(n){o(0,c="1"==I("full-screen"))}))}));var c=!1,r=!1;var a=t.$$slots,s=void 0===a?{}:a,u=t.$$scope;return n.$set=function(n){"reloadSlotOnToggle"in n&&o(3,i=n.reloadSlotOnToggle),"$$scope"in n&&o(4,u=n.$$scope)},[c,r,function(){o(0,c=!c),c?function(n,t){if("URLSearchParams"in window){var o=new URLSearchParams(window.location.search);o.set("full-screen","1"),history.pushState(null,"",window.location.pathname+"?"+o.toString())}}():function(n){if("URLSearchParams"in window){var t=new URLSearchParams(window.location.search);t.delete(n),history.pushState(null,"",window.location.pathname+"?"+t.toString())}}("full-screen"),i&&o(1,r=!r)},i,u,s]}var G=function(t){n(s,a);var o=M(s);function s(n){var t;return e(this,s),t=o.call(this),i(r(t),n,A,z,c,{reloadSlotOnToggle:3}),t}return s}();export{G as F,F as P};
