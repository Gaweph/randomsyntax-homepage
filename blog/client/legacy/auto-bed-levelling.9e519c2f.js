import{a as t,b as n,c as e,d as r,i as o,s as a,e as s,S as c,f as i,k as f,g as u,o as $,m as l,p as m,u as g,t as p,h as d,j as h,n as b,z as v,C as j,y,A as R}from"./client.a8955c19.js";import"./Tag.8409b12c.js";import"./Post-Tags-Projects.e09515f9.js";import{P as w,a as x}from"./Post-Contents.d58d3f5b.js";import{L as P}from"./Link-External.848c499c.js";import{C}from"./Callout.84eaec23.js";import{V as G}from"./Vimeo.81882f87.js";import{G as S}from"./Gallery.935264fb.js";function A(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,a=n(t);if(r){var s=n(this).constructor;o=Reflect.construct(a,arguments,s)}else o=a.apply(this,arguments);return e(this,o)}}function D(t){var n;return{c:function(){n=v("Johan's (jcrocholl) Github branch")},l:function(t){n=j(t,"Johan's (jcrocholl) Github branch")},m:function(t,e){m(t,n,e)},d:function(t){t&&b(n)}}}function F(t){var n,e,r,o,a=new P({props:{href:"https://github.com/jcrocholl/Marlin/tree/fsr",$$slots:{default:[D]},$$scope:{ctx:t}}});return{c:function(){n=v("Code can be found at\r\n    "),i(a.$$.fragment),e=f(),r=y("br")},l:function(t){n=j(t,"Code can be found at\r\n    "),u(a.$$.fragment,t),e=$(t),r=R(t,"BR",{})},m:function(t,s){m(t,n,s),l(a,t,s),m(t,e,s),m(t,r,s),o=!0},p:function(t,n){var e={};8&n&&(e.$$scope={dirty:n,ctx:t}),a.$set(e)},i:function(t){o||(p(a.$$.fragment,t),o=!0)},o:function(t){d(a.$$.fragment,t),o=!1},d:function(t){t&&b(n),h(a,t),t&&b(e),t&&b(r)}}}function T(t){var n,e,r,o,a=new G({props:{id:"98630132"}}),s=new C({props:{$$slots:{default:[F]},$$scope:{ctx:t}}}),c=new S({props:{images:t[2]}});return{c:function(){n=v("Video of the G29 (Auto level) command.\r\n  "),i(a.$$.fragment),e=v("\r\n  This process involves using 3 Force Sense Resistors (FSR's) in order to use\r\n  the actual print head as the z-probe.\r\n  "),i(s.$$.fragment),r=v("\r\n  Here are some images of how the sensors are attached to the printer (under\r\n  the bed):\r\n  "),i(c.$$.fragment)},l:function(t){n=j(t,"Video of the G29 (Auto level) command.\r\n  "),u(a.$$.fragment,t),e=j(t,"\r\n  This process involves using 3 Force Sense Resistors (FSR's) in order to use\r\n  the actual print head as the z-probe.\r\n  "),u(s.$$.fragment,t),r=j(t,"\r\n  Here are some images of how the sensors are attached to the printer (under\r\n  the bed):\r\n  "),u(c.$$.fragment,t)},m:function(t,i){m(t,n,i),l(a,t,i),m(t,e,i),l(s,t,i),m(t,r,i),l(c,t,i),o=!0},p:function(t,n){var e={};8&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i:function(t){o||(p(a.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),o=!0)},o:function(t){d(a.$$.fragment,t),d(s.$$.fragment,t),d(c.$$.fragment,t),o=!1},d:function(t){t&&b(n),h(a,t),t&&b(e),h(s,t),t&&b(r),h(c,t)}}}function V(t){var n,e,r=new w({props:{title:_,tags:t[0],projects:t[1]}}),o=new x({props:{$$slots:{default:[T]},$$scope:{ctx:t}}});return{c:function(){i(r.$$.fragment),n=f(),i(o.$$.fragment)},l:function(t){u(r.$$.fragment,t),n=$(t),u(o.$$.fragment,t)},m:function(t,a){l(r,t,a),m(t,n,a),l(o,t,a),e=!0},p:function(t,n){var e=g(n,1)[0],r={};8&e&&(r.$$scope={dirty:e,ctx:t}),o.$set(r)},i:function(t){e||(p(r.$$.fragment,t),p(o.$$.fragment,t),e=!0)},o:function(t){d(r.$$.fragment,t),d(o.$$.fragment,t),e=!1},d:function(t){h(r,t),t&&b(n),h(o,t)}}}var _="3D Printer 4 - Auto Bed Levelling";function z(t){return[["hardware"],["3D-Printer"],["/blog/content/images/auto-bed-levelling/fsr_a.jpg","/blog/content/images/auto-bed-levelling/fsr_b.jpg","/blog/content/images/auto-bed-levelling/electronics_a.jpg","/blog/content/images/auto-bed-levelling/electronics_b.jpg"]]}var L=function(n){t(i,c);var e=A(i);function i(t){var n;return r(this,i),n=e.call(this),o(s(n),t,z,V,a,{}),n}return i}();export default L;