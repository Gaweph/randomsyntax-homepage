import{a as t,b as n,c as e,d as r,i as a,s as o,e as s,S as i,f as c,k as f,g as u,o as $,m,p,u as l,t as g,h as d,j as h,n as v,z as y,y as x,C as P,A as j,B as w,E as b,G as C}from"./client.cb3ad8ae.js";import"./Tag.a3fa55d0.js";import"./Post-Tags-Projects.e7473de9.js";import{P as k,a as E}from"./Post-Contents.d83476ea.js";import{P as S}from"./Post-Section.8a0bb65d.js";import{L as z}from"./Link-External.3e794773.js";import{F as R,P as I}from"./Full-Screen.573b9453.js";var T=function(t){t.setup=function(){var n=t.canvas.parentElement,e=n.offsetWidth,r=n.offsetHeight;t.createCanvas(e,r)};var n=0,e=0;t.draw=function(){t.stroke(3),t.stroke(t.color("hsba(160, 100%, 50%, 0.5)")),t.random(1)>.5?t.line(n,e,n+10,e+10):t.line(n,e+10,n+10,e),(n+=10)>t.width&&(n=0,e+=10),e>t.height&&(t.background(255),n=0,e=0)},t.resizeCanvas=function(){var n=t.canvas.parentElement,e=n.offsetWidth,r=n.offsetHeight;t.resizeCanvas(e,r)}};function D(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(r){var s=n(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return e(this,a)}}function F(t){var n;return{c:function(){n=y("10Print")},l:function(t){n=P(t,"10Print")},m:function(t,e){p(t,n,e)},d:function(t){t&&v(n)}}}function H(t){var n,e=new I({props:{sketch:T}});return{c:function(){c(e.$$.fragment)},l:function(t){u(e.$$.fragment,t)},m:function(t,r){m(e,t,r),n=!0},p:C,i:function(t){n||(g(e.$$.fragment,t),n=!0)},o:function(t){d(e.$$.fragment,t),n=!1},d:function(t){h(e,t)}}}function L(t){var n,e,r,a,o,s,i,l,C,k=new z({props:{href:"https://10print.org/",$$slots:{default:[F]},$$scope:{ctx:t}}}),E=new R({props:{$$slots:{default:[H]},$$scope:{ctx:t}}});return{c:function(){n=y("Simple\r\n    "),c(k.$$.fragment),e=y("\r\n    implementation in p5.\r\n    "),r=x("p"),a=y("Considering it only uses 2 characters ('\\' and '/') I find this\r\n      mesmerizing to watch."),o=f(),c(E.$$.fragment),s=f(),i=x("p"),l=y("This page only exists here so I can put it into full screen mode.")},l:function(t){n=P(t,"Simple\r\n    "),u(k.$$.fragment,t),e=P(t,"\r\n    implementation in p5.\r\n    "),r=j(t,"P",{});var c=w(r);a=P(c,"Considering it only uses 2 characters ('\\' and '/') I find this\r\n      mesmerizing to watch."),c.forEach(v),o=$(t),u(E.$$.fragment,t),s=$(t),i=j(t,"P",{});var f=w(i);l=P(f,"This page only exists here so I can put it into full screen mode."),f.forEach(v)},m:function(t,c){p(t,n,c),m(k,t,c),p(t,e,c),p(t,r,c),b(r,a),p(t,o,c),m(E,t,c),p(t,s,c),p(t,i,c),b(i,l),C=!0},p:function(t,n){var e={};4&n&&(e.$$scope={dirty:n,ctx:t}),k.$set(e);var r={};4&n&&(r.$$scope={dirty:n,ctx:t}),E.$set(r)},i:function(t){C||(g(k.$$.fragment,t),g(E.$$.fragment,t),C=!0)},o:function(t){d(k.$$.fragment,t),d(E.$$.fragment,t),C=!1},d:function(t){t&&v(n),h(k,t),t&&v(e),t&&v(r),t&&v(o),h(E,t),t&&v(s),t&&v(i)}}}function W(t){var n,e=new S({props:{$$slots:{default:[L]},$$scope:{ctx:t}}});return{c:function(){c(e.$$.fragment)},l:function(t){u(e.$$.fragment,t)},m:function(t,r){m(e,t,r),n=!0},p:function(t,n){var r={};4&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i:function(t){n||(g(e.$$.fragment,t),n=!0)},o:function(t){d(e.$$.fragment,t),n=!1},d:function(t){h(e,t)}}}function A(t){var n,e,r=new k({props:{title:B,tags:t[0],projects:t[1]}}),a=new E({props:{$$slots:{default:[W]},$$scope:{ctx:t}}});return{c:function(){c(r.$$.fragment),n=f(),c(a.$$.fragment)},l:function(t){u(r.$$.fragment,t),n=$(t),u(a.$$.fragment,t)},m:function(t,o){m(r,t,o),p(t,n,o),m(a,t,o),e=!0},p:function(t,n){var e=l(n,1)[0],r={};4&e&&(r.$$scope={dirty:e,ctx:t}),a.$set(r)},i:function(t){e||(g(r.$$.fragment,t),g(a.$$.fragment,t),e=!0)},o:function(t){d(r.$$.fragment,t),d(a.$$.fragment,t),e=!1},d:function(t){h(r,t),t&&v(n),h(a,t)}}}var B="10Print";function G(t){return[["p5"],[]]}var q=function(n){t(c,i);var e=D(c);function c(t){var n;return r(this,c),n=e.call(this),a(s(n),t,G,A,o,{}),n}return c}();export default q;