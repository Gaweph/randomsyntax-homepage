import{S as e,i as t,s as a,c as r,e as n,a as s,h as o,m,j as i,t as $,b as c,d as f,g as p,p as l,o as d,v as g,r as u}from"./client.bf93b2b1.js";import"./Tag.4f22bcf4.js";import"./Post-Tags-Projects.ce4bd14a.js";import{P as b,a as h}from"./Post-Contents.1e083f22.js";import{L as w}from"./Link-External.54e87122.js";import{C as y}from"./Callout.c0ac3b50.js";import{G}from"./Gallery.ff48f0b0.js";function j(e){let t;return{c(){t=l("Full Screen WebGl Demo")},l(e){t=g(e,"Full Screen WebGl Demo")},m(e,a){i(e,t,a)},d(e){e&&p(t)}}}function v(e){let t;return{c(){t=l("Any feedback would be appreciated. Is it obvious what to do?")},l(e){t=g(e,"Any feedback would be appreciated. Is it obvious what to do?")},m(e,a){i(e,t,a)},d(e){e&&p(t)}}}function x(e){let t,a,b,h,x,T;const A=new G({props:{useThumbnail:!1,images:["https://raw.githubusercontent.com/Gaweph/TimeGame-WebGL-Demo/master/V0.02/V0.02.png"]}}),D=new w({props:{href:"https://gaweph.github.io/TimeGame-WebGL-Demo/V0.02/",$$slots:{default:[j]},$$scope:{ctx:e}}}),L=new y({props:{title:"Feedback welcome",$$slots:{default:[v]},$$scope:{ctx:e}}});return{c(){t=l("A new build of my time game prototype is available. !\r\n  "),r(A.$$.fragment),a=n(),b=d("br"),h=l("\r\n  I have revamped and simplified the graphics to try and refine the game\r\n  mechanics first. A\r\n  "),r(D.$$.fragment),x=l("\r\n  can be played online.\r\n  "),r(L.$$.fragment)},l(e){t=g(e,"A new build of my time game prototype is available. !\r\n  "),s(A.$$.fragment,e),a=o(e),b=u(e,"BR",{}),h=g(e,"\r\n  I have revamped and simplified the graphics to try and refine the game\r\n  mechanics first. A\r\n  "),s(D.$$.fragment,e),x=g(e,"\r\n  can be played online.\r\n  "),s(L.$$.fragment,e)},m(e,r){i(e,t,r),m(A,e,r),i(e,a,r),i(e,b,r),i(e,h,r),m(D,e,r),i(e,x,r),m(L,e,r),T=!0},p(e,t){const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),D.$set(a);const r={};4&t&&(r.$$scope={dirty:t,ctx:e}),L.$set(r)},i(e){T||($(A.$$.fragment,e),$(D.$$.fragment,e),$(L.$$.fragment,e),T=!0)},o(e){c(A.$$.fragment,e),c(D.$$.fragment,e),c(L.$$.fragment,e),T=!1},d(e){e&&p(t),f(A,e),e&&p(a),e&&p(b),e&&p(h),f(D,e),e&&p(x),f(L,e)}}}function T(e){let t,a;const l=new b({props:{title:A,tags:e[0],projects:e[1]}}),d=new h({props:{$$slots:{default:[x]},$$scope:{ctx:e}}});return{c(){r(l.$$.fragment),t=n(),r(d.$$.fragment)},l(e){s(l.$$.fragment,e),t=o(e),s(d.$$.fragment,e)},m(e,r){m(l,e,r),i(e,t,r),m(d,e,r),a=!0},p(e,[t]){const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),d.$set(a)},i(e){a||($(l.$$.fragment,e),$(d.$$.fragment,e),a=!0)},o(e){c(l.$$.fragment,e),c(d.$$.fragment,e),a=!1},d(e){f(l,e),e&&p(t),f(d,e)}}}const A="Time Game 4 - WEBGL Demo [V0.02]";function D(e){return[["software","unity3d"],["Time Travel Game"]]}export default class extends e{constructor(e){super(),t(this,e,D,T,a,{})}}
