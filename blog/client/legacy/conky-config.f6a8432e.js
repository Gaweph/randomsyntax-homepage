import{_ as t,r as n,a as e,b as r,c as o,d as c,i as a,s,e as f,S as i,f as u,k as $,g as m,o as l,m as p,p as h,u as g,t as d,h as y,j as v,n as k,y as w,z as b,A as x,B as C,C as P,E as j}from"./client.cb3ad8ae.js";import"./Tag.a3fa55d0.js";import"./Post-Tags-Projects.e7473de9.js";import{P as E,a as I}from"./Post-Contents.d83476ea.js";import{P as T}from"./Post-Section.8a0bb65d.js";import{L as R}from"./Link-External.3e794773.js";import{P as S}from"./PrismJS.58031522.js";import{C as G}from"./Callout.ed03855d.js";import{G as _}from"./Gallery.dff005c2.js";function L(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=r(t);if(n){var a=r(this).constructor;e=Reflect.construct(c,arguments,a)}else e=c.apply(this,arguments);return o(this,e)}}function O(t){var n;return{c:function(){n=b("Conky-Colors")},l:function(t){n=P(t,"Conky-Colors")},m:function(t,e){h(t,n,e)},d:function(t){t&&k(n)}}}function D(t){var n;return{c:function(){n=b("conky-nvidia")},l:function(t){n=P(t,"conky-nvidia")},m:function(t,e){h(t,n,e)},d:function(t){t&&k(n)}}}function F(t){var n;return{c:function(){n=b("lm_sensors")},l:function(t){n=P(t,"lm_sensors")},m:function(t,e){h(t,n,e)},d:function(t){t&&k(n)}}}function N(t){var n;return{c:function(){n=b("conky-colors TTF files")},l:function(t){n=P(t,"conky-colors TTF files")},m:function(t,e){h(t,n,e)},d:function(t){t&&k(n)}}}function q(t){var n;return{c:function(){n=b("I'm sure there's a better way of getting the CPU temps. Please let me know\r\n      if this is the case. I'm not sure that the Ethernet if else statements are\r\n      working correctly.")},l:function(t){n=P(t,"I'm sure there's a better way of getting the CPU temps. Please let me know\r\n      if this is the case. I'm not sure that the Ethernet if else statements are\r\n      working correctly.")},m:function(t,e){h(t,n,e)},d:function(t){t&&k(n)}}}function A(t){var n;return{c:function(){n=b("Lovely conky-colors deviant-art by helmuthdu")},l:function(t){n=P(t,"Lovely conky-colors deviant-art by helmuthdu")},m:function(t,e){h(t,n,e)},d:function(t){t&&k(n)}}}function H(t){var n;return{c:function(){n=b("helmuthdu's github conky-colors repository")},l:function(t){n=P(t,"helmuthdu's github conky-colors repository")},m:function(t,e){h(t,n,e)},d:function(t){t&&k(n)}}}function U(t){var n,e,r,o=new R({props:{href:"http://helmuthdu.deviantart.com/art/CONKY-COLORS-244793180",$$slots:{default:[A]},$$scope:{ctx:t}}}),c=new R({props:{href:"https://github.com/helmuthdu/conky_colors",$$slots:{default:[H]},$$scope:{ctx:t}}});return{c:function(){n=b("There is some\r\n      "),u(o.$$.fragment),e=b("\r\n      . Further information on this project cna be found at\r\n      "),u(c.$$.fragment)},l:function(t){n=P(t,"There is some\r\n      "),m(o.$$.fragment,t),e=P(t,"\r\n      . Further information on this project cna be found at\r\n      "),m(c.$$.fragment,t)},m:function(t,a){h(t,n,a),p(o,t,a),h(t,e,a),p(c,t,a),r=!0},p:function(t,n){var e={};8&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e);var r={};8&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i:function(t){r||(d(o.$$.fragment,t),d(c.$$.fragment,t),r=!0)},o:function(t){y(o.$$.fragment,t),y(c.$$.fragment,t),r=!1},d:function(t){t&&k(n),v(o,t),t&&k(e),v(c,t)}}}function X(t){var n,e,r,o,c,a,s,f,i,g,E,I,T,L,A,H,X,B,z,J,K,Y,M=new _({props:{images:["/blog/content/images/conky-config/Conky_Config.png"]}}),Q=new R({props:{href:"https://aur.archlinux.org/packages/conky-colors/",$$slots:{default:[O]},$$scope:{ctx:t}}}),V=new R({props:{href:"https://aur.archlinux.org/packages/conky-nvidia/",$$slots:{default:[D]},$$scope:{ctx:t}}}),W=new R({props:{href:"https://www.archlinux.org/packages/?name=lm_sensors",$$slots:{default:[F]},$$scope:{ctx:t}}}),Z=new S({props:{language:"Bash",code:t[0]}}),tt=new R({props:{href:"https://github.com/helmuthdu/conky_colors/tree/master/fonts/conkycolors",$$slots:{default:[N]},$$scope:{ctx:t}}}),nt=new G({props:{title:"PLEASE NOTE:",$$slots:{default:[q]},$$scope:{ctx:t}}}),et=new G({props:{title:"FURTHER READING:",$$slots:{default:[U]},$$scope:{ctx:t}}});return{c:function(){n=w("p"),e=b("I have had a couple of queries regarding my conky config that can be seen\r\n      on my new arch desktop screenshot:"),r=$(),u(M.$$.fragment),o=$(),c=w("p"),a=b("In order to recreate this config you will need the\r\n      "),u(Q.$$.fragment),s=b("\r\n      ,\r\n      "),u(V.$$.fragment),f=b("\r\n      and\r\n      "),u(W.$$.fragment),i=b("\r\n      packages"),g=b("\r\n    Here is the conky config file (feel free to copy as needed):\r\n    "),u(Z.$$.fragment),E=$(),I=w("p"),T=w("strong"),L=b("wlp4s0"),A=b("\r\n      and\r\n      "),H=w("strong"),X=b("enp3s0f0"),B=b("\r\n      are the network device IDS, so you will need to substitute your own. If\r\n      you would like to modify the icons then they can be found in the\r\n      "),u(tt.$$.fragment),z=b("\r\n      on helmuthdu's github repository"),J=$(),u(nt.$$.fragment),K=$(),u(et.$$.fragment)},l:function(t){n=x(t,"P",{});var u=C(n);e=P(u,"I have had a couple of queries regarding my conky config that can be seen\r\n      on my new arch desktop screenshot:"),u.forEach(k),r=l(t),m(M.$$.fragment,t),o=l(t),c=x(t,"P",{});var $=C(c);a=P($,"In order to recreate this config you will need the\r\n      "),m(Q.$$.fragment,$),s=P($,"\r\n      ,\r\n      "),m(V.$$.fragment,$),f=P($,"\r\n      and\r\n      "),m(W.$$.fragment,$),i=P($,"\r\n      packages"),$.forEach(k),g=P(t,"\r\n    Here is the conky config file (feel free to copy as needed):\r\n    "),m(Z.$$.fragment,t),E=l(t),I=x(t,"P",{});var p=C(I);T=x(p,"STRONG",{});var h=C(T);L=P(h,"wlp4s0"),h.forEach(k),A=P(p,"\r\n      and\r\n      "),H=x(p,"STRONG",{});var d=C(H);X=P(d,"enp3s0f0"),d.forEach(k),B=P(p,"\r\n      are the network device IDS, so you will need to substitute your own. If\r\n      you would like to modify the icons then they can be found in the\r\n      "),m(tt.$$.fragment,p),z=P(p,"\r\n      on helmuthdu's github repository"),p.forEach(k),J=l(t),m(nt.$$.fragment,t),K=l(t),m(et.$$.fragment,t)},m:function(t,u){h(t,n,u),j(n,e),h(t,r,u),p(M,t,u),h(t,o,u),h(t,c,u),j(c,a),p(Q,c,null),j(c,s),p(V,c,null),j(c,f),p(W,c,null),j(c,i),h(t,g,u),p(Z,t,u),h(t,E,u),h(t,I,u),j(I,T),j(T,L),j(I,A),j(I,H),j(H,X),j(I,B),p(tt,I,null),j(I,z),h(t,J,u),p(nt,t,u),h(t,K,u),p(et,t,u),Y=!0},p:function(t,n){var e={};8&n&&(e.$$scope={dirty:n,ctx:t}),Q.$set(e);var r={};8&n&&(r.$$scope={dirty:n,ctx:t}),V.$set(r);var o={};8&n&&(o.$$scope={dirty:n,ctx:t}),W.$set(o);var c={};1&n&&(c.code=t[0]),Z.$set(c);var a={};8&n&&(a.$$scope={dirty:n,ctx:t}),tt.$set(a);var s={};8&n&&(s.$$scope={dirty:n,ctx:t}),nt.$set(s);var f={};8&n&&(f.$$scope={dirty:n,ctx:t}),et.$set(f)},i:function(t){Y||(d(M.$$.fragment,t),d(Q.$$.fragment,t),d(V.$$.fragment,t),d(W.$$.fragment,t),d(Z.$$.fragment,t),d(tt.$$.fragment,t),d(nt.$$.fragment,t),d(et.$$.fragment,t),Y=!0)},o:function(t){y(M.$$.fragment,t),y(Q.$$.fragment,t),y(V.$$.fragment,t),y(W.$$.fragment,t),y(Z.$$.fragment,t),y(tt.$$.fragment,t),y(nt.$$.fragment,t),y(et.$$.fragment,t),Y=!1},d:function(t){t&&k(n),t&&k(r),v(M,t),t&&k(o),t&&k(c),v(Q),v(V),v(W),t&&k(g),v(Z,t),t&&k(E),t&&k(I),v(tt),t&&k(J),v(nt,t),t&&k(K),v(et,t)}}}function B(t){var n,e=new T({props:{$$slots:{default:[X]},$$scope:{ctx:t}}});return{c:function(){u(e.$$.fragment)},l:function(t){m(e.$$.fragment,t)},m:function(t,r){p(e,t,r),n=!0},p:function(t,n){var r={};9&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i:function(t){n||(d(e.$$.fragment,t),n=!0)},o:function(t){y(e.$$.fragment,t),n=!1},d:function(t){v(e,t)}}}function z(t){var n,e,r=new E({props:{title:Y,tags:t[1],projects:t[2]}}),o=new I({props:{$$slots:{default:[B]},$$scope:{ctx:t}}});return{c:function(){u(r.$$.fragment),n=$(),u(o.$$.fragment)},l:function(t){m(r.$$.fragment,t),n=l(t),m(o.$$.fragment,t)},m:function(t,c){p(r,t,c),h(t,n,c),p(o,t,c),e=!0},p:function(t,n){var e=g(n,1)[0],r={};9&e&&(r.$$scope={dirty:e,ctx:t}),o.$set(r)},i:function(t){e||(d(r.$$.fragment,t),d(o.$$.fragment,t),e=!0)},o:function(t){y(r.$$.fragment,t),y(o.$$.fragment,t),e=!1},d:function(t){v(r,t),t&&k(n),v(o,t)}}}function J(t){return K.apply(this,arguments)}function K(){return(K=t(n.mark((function t(e){var r,o,c;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,e.query,"https://gist.githubusercontent.com/Gaweph/63d48a9c43e1b256ca8c8a9a7717fed7/raw/37e5276e3cbe53162a49b27706df5142ac92fff6/conky-config",t.next=4,this.fetch("https://gist.githubusercontent.com/Gaweph/63d48a9c43e1b256ca8c8a9a7717fed7/raw/37e5276e3cbe53162a49b27706df5142ac92fff6/conky-config");case 4:return r=t.sent,t.next=7,r.text();case 7:return o=t.sent,c=o,t.abrupt("return",{gistContents:c});case 10:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}var Y="Conky Config";function M(t,n,e){var r=n.gistContents,o=void 0===r?"XXX":r;return t.$set=function(t){"gistContents"in t&&e(0,o=t.gistContents)},[o,["config","conky"],[]]}var Q=function(t){e(r,i);var n=L(r);function r(t){var e;return c(this,r),e=n.call(this),a(f(e),t,M,z,s,{gistContents:0}),e}return r}();export default Q;export{J as preload};