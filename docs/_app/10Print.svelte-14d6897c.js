import{S as t,i as e,s,c as n,a as r,k as a,g as o,p as i,n as $,r as f,u as c,v as m,j as p,t as l,e as g,h as d,d as u,f as h,o as v,q as x}from"./start-f5bdf764.js";import{P,a as j}from"./Post-Contents.svelte-0738cff8.js";import{P as w}from"./Post-Section.svelte-ca8a2080.js";import{L as y}from"./Link-External.svelte-618ea4ea.js";import{F as k,P as C}from"./Full-Screen.svelte-28a1ba42.js";import"./Post-Tags-Projects.svelte-4d25858e.js";import"./Icon.svelte-7ea34d79.js";import"./free-solid-svg-icons-650f6a7f.js";var E=function(t){var e=10;t.setup=function(){var e=t.canvas.parentElement,s=e.offsetWidth,n=e.offsetHeight;t.createCanvas(s,n)};var s=0,n=0;t.draw=function(){t.stroke(3),t.stroke(t.color("hsba(160, 100%, 50%, 0.5)")),t.random(1)>.5?t.line(s,n,s+e,n+e):t.line(s,n+e,s+e,n),(s+=e)>t.width&&(s=0,n+=e),n>t.height&&(t.background(255),s=0,n=0)},t.resizeCanvas=function(){var e=t.canvas.parentElement,s=e.offsetWidth,n=e.offsetHeight;t.resizeCanvas(s,n)}};function I(t){let e;return{c(){e=l("10Print")},l(t){e=d(t,"10Print")},m(t,s){$(t,e,s)},d(t){t&&p(e)}}}function S(t){let e,s;return e=new C({props:{sketch:E}}),{c(){n(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,n){i(e,t,n),s=!0},p:x,i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function b(t){let e,s,x,P,j,w,C,E,b,z,T;return s=new y({props:{href:"https://10print.org/",$$slots:{default:[I]},$$scope:{ctx:t}}}),C=new k({props:{$$slots:{default:[S]},$$scope:{ctx:t}}}),{c(){e=l("Simple\r\n    "),n(s.$$.fragment),x=l("\r\n    implementation in p5.\r\n    "),P=g("p"),j=l("Considering it only uses 2 characters ('\\' and '/') I find this\r\n      mesmerizing to watch."),w=r(),n(C.$$.fragment),E=r(),b=g("p"),z=l("This page only exists here so I can put it into full screen mode.")},l(t){e=d(t,"Simple\r\n    "),a(s.$$.fragment,t),x=d(t,"\r\n    implementation in p5.\r\n    "),P=u(t,"P",{});var n=h(P);j=d(n,"Considering it only uses 2 characters ('\\' and '/') I find this\r\n      mesmerizing to watch."),n.forEach(p),w=o(t),a(C.$$.fragment,t),E=o(t),b=u(t,"P",{});var r=h(b);z=d(r,"This page only exists here so I can put it into full screen mode."),r.forEach(p)},m(t,n){$(t,e,n),i(s,t,n),$(t,x,n),$(t,P,n),v(P,j),$(t,w,n),i(C,t,n),$(t,E,n),$(t,b,n),v(b,z),T=!0},p(t,e){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),C.$set(r)},i(t){T||(f(s.$$.fragment,t),f(C.$$.fragment,t),T=!0)},o(t){c(s.$$.fragment,t),c(C.$$.fragment,t),T=!1},d(t){t&&p(e),m(s,t),t&&p(x),t&&p(P),t&&p(w),m(C,t),t&&p(E),t&&p(b)}}}function z(t){let e,s;return e=new w({props:{$$slots:{default:[b]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,n){i(e,t,n),s=!0},p(t,s){const n={};4&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function T(t){let e,s,l,g;return e=new P({props:{title:F,tags:t[0],projects:t[1]}}),l=new j({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(l.$$.fragment)},l(t){a(e.$$.fragment,t),s=o(t),a(l.$$.fragment,t)},m(t,n){i(e,t,n),$(t,s,n),i(l,t,n),g=!0},p(t,[e]){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s)},i(t){g||(f(e.$$.fragment,t),f(l.$$.fragment,t),g=!0)},o(t){c(e.$$.fragment,t),c(l.$$.fragment,t),g=!1},d(t){m(e,t),t&&p(s),m(l,t)}}}const F="10Print";function H(t){return[["p5"],[]]}export default class extends t{constructor(t){super(),e(this,t,H,T,s,{})}}
//# sourceMappingURL=10Print.svelte-14d6897c.js.map