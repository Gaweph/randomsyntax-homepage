import{S as t,i as n,s as e,c as r,a as s,k as a,g as o,p as i,n as l,r as $,u as c,v as f,j as h,t as g,h as m,e as u,d as p,f as d,o as y}from"./start-35854c27.js";import{G as w}from"./Gallery.svelte-1e30ffa7.js";import{P as v,a as x}from"./Post-Contents.svelte-39c77b65.js";import{P as I}from"./Post-Section.svelte-035fd7aa.js";import{C as k}from"./Callout.svelte-1a07ef09.js";import{L as b}from"./Link-External.svelte-39b17335.js";import"./Post-Tags-Projects.svelte-aa368aff.js";import"./Icon.svelte-e37e0d5e.js";import"./free-solid-svg-icons-650f6a7f.js";function G(t){let n;return{c(){n=g("Mint")},l(t){n=m(t,"Mint")},m(t,e){l(t,n,e)},d(t){t&&h(n)}}}function A(t){let n;return{c(){n=g("Gentoo")},l(t){n=m(t,"Gentoo")},m(t,e){l(t,n,e)},d(t){t&&h(n)}}}function j(t){let n,e,s,o,u,p;return e=new b({props:{href:"https://www.linuxmint.com/",$$slots:{default:[G]},$$scope:{ctx:t}}}),o=new b({props:{href:"https://www.gentoo.org/get-started/",$$slots:{default:[A]},$$scope:{ctx:t}}}),{c(){n=g("I have been contemplating re-installing my main OS. Currently I'm running\r\n    "),r(e.$$.fragment),s=g("\r\n    ( 14 - Cinnamon) and Windows 7. I have always wanted to install\r\n    "),r(o.$$.fragment),u=g("\r\n    , but I just can't bring myself to doing it, everything I read suggests it\r\n    will take hours upon hours to install. Then there's the maintenance,\r\n    apparently everything is compiled at install time, which can increase\r\n    installation times.")},l(t){n=m(t,"I have been contemplating re-installing my main OS. Currently I'm running\r\n    "),a(e.$$.fragment,t),s=m(t,"\r\n    ( 14 - Cinnamon) and Windows 7. I have always wanted to install\r\n    "),a(o.$$.fragment,t),u=m(t,"\r\n    , but I just can't bring myself to doing it, everything I read suggests it\r\n    will take hours upon hours to install. Then there's the maintenance,\r\n    apparently everything is compiled at install time, which can increase\r\n    installation times.")},m(t,r){l(t,n,r),i(e,t,r),l(t,s,r),i(o,t,r),l(t,u,r),p=!0},p(t,n){const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),o.$set(s)},i(t){p||($(e.$$.fragment,t),$(o.$$.fragment,t),p=!0)},o(t){c(e.$$.fragment,t),c(o.$$.fragment,t),p=!1},d(t){t&&h(n),f(e,t),t&&h(s),f(o,t),t&&h(u)}}}function S(t){let n,e;return{c(){n=u("strong"),e=g("DOCUMENTATION IS AMAZING")},l(t){n=p(t,"STRONG",{});var r=d(n);e=m(r,"DOCUMENTATION IS AMAZING"),r.forEach(h)},m(t,r){l(t,n,r),y(n,e)},d(t){t&&h(n)}}}function T(t){let n;return{c(){n=g("Beginners Guide")},l(t){n=m(t,"Beginners Guide")},m(t,e){l(t,n,e)},d(t){t&&h(n)}}}function E(t){let n,e,v,x,I,k,G,A,j,E,N,O,C,M,P,L,R,B,_,D,U,W,Y,Z;return O=new b({props:{href:"https://wiki.archlinux.org/index.php/Installation_guide",$$slots:{default:[S]},$$scope:{ctx:t}}}),M=new b({props:{href:"https://wiki.archlinux.org/index.php/Beginners",$$slots:{default:[T]},$$scope:{ctx:t}}}),Y=new w({props:{images:["/content/blog/images/arch-linux-new-install/arch_initial_screenshot.png"]}}),{c(){n=u("p"),e=g("I have been looking at\r\n      "),v=u("strong"),x=g("Arch Linux"),I=g("\r\n      , and I think this provides a good middle ground. You get to build a\r\n      system running only what you configure and install, but it seems easier\r\n      and less daunting that a full\r\n      "),k=u("strong"),G=g("Gentoo"),A=g("\r\n      install."),j=s(),E=u("p"),N=g("One thing I would like to highlight is that the\r\n      "),r(O.$$.fragment),C=g("\r\n      , really really helpful, if you need to know it, it's in there. Check out\r\n      the\r\n      "),r(M.$$.fragment),P=g("\r\n      if you need help getting going."),L=s(),R=u("p"),B=g("After 2 hours of work, here is what I have:"),_=s(),D=u("p"),U=g("(It still needs a lot of work, this is simply the stock xfce, with\r\n      chromium installed)"),W=s(),r(Y.$$.fragment)},l(t){n=p(t,"P",{});var r=d(n);e=m(r,"I have been looking at\r\n      "),v=p(r,"STRONG",{});var s=d(v);x=m(s,"Arch Linux"),s.forEach(h),I=m(r,"\r\n      , and I think this provides a good middle ground. You get to build a\r\n      system running only what you configure and install, but it seems easier\r\n      and less daunting that a full\r\n      "),k=p(r,"STRONG",{});var i=d(k);G=m(i,"Gentoo"),i.forEach(h),A=m(r,"\r\n      install."),r.forEach(h),j=o(t),E=p(t,"P",{});var l=d(E);N=m(l,"One thing I would like to highlight is that the\r\n      "),a(O.$$.fragment,l),C=m(l,"\r\n      , really really helpful, if you need to know it, it's in there. Check out\r\n      the\r\n      "),a(M.$$.fragment,l),P=m(l,"\r\n      if you need help getting going."),l.forEach(h),L=o(t),R=p(t,"P",{});var $=d(R);B=m($,"After 2 hours of work, here is what I have:"),$.forEach(h),_=o(t),D=p(t,"P",{});var c=d(D);U=m(c,"(It still needs a lot of work, this is simply the stock xfce, with\r\n      chromium installed)"),c.forEach(h),W=o(t),a(Y.$$.fragment,t)},m(t,r){l(t,n,r),y(n,e),y(n,v),y(v,x),y(n,I),y(n,k),y(k,G),y(n,A),l(t,j,r),l(t,E,r),y(E,N),i(O,E,null),y(E,C),i(M,E,null),y(E,P),l(t,L,r),l(t,R,r),y(R,B),l(t,_,r),l(t,D,r),y(D,U),l(t,W,r),i(Y,t,r),Z=!0},p(t,n){const e={};4&n&&(e.$$scope={dirty:n,ctx:t}),O.$set(e);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),M.$set(r)},i(t){Z||($(O.$$.fragment,t),$(M.$$.fragment,t),$(Y.$$.fragment,t),Z=!0)},o(t){c(O.$$.fragment,t),c(M.$$.fragment,t),c(Y.$$.fragment,t),Z=!1},d(t){t&&h(n),t&&h(j),t&&h(E),f(O),f(M),t&&h(L),t&&h(R),t&&h(_),t&&h(D),t&&h(W),f(Y,t)}}}function N(t){let n;return{c(){n=g("ecryptfs Arch Guide")},l(t){n=m(t,"ecryptfs Arch Guide")},m(t,e){l(t,n,e)},d(t){t&&h(n)}}}function O(t){let n,e,s,o,w,v,x,I,k;return I=new b({props:{href:"https://wiki.archlinux.org/index.php/ECryptfs",$$slots:{default:[N]},$$scope:{ctx:t}}}),{c(){n=g("Something to note is that my previous install of\r\n    "),e=u("strong"),s=g("Mint"),o=g("\r\n    had encrypted my home folders with\r\n    "),w=u("strong"),v=g("ecryptfs"),x=g("\r\n    (standard ubuntu encryption). This was easily used with my new install by\r\n    following the Auto-Mount steps in this\r\n    "),r(I.$$.fragment)},l(t){n=m(t,"Something to note is that my previous install of\r\n    "),e=p(t,"STRONG",{});var r=d(e);s=m(r,"Mint"),r.forEach(h),o=m(t,"\r\n    had encrypted my home folders with\r\n    "),w=p(t,"STRONG",{});var i=d(w);v=m(i,"ecryptfs"),i.forEach(h),x=m(t,"\r\n    (standard ubuntu encryption). This was easily used with my new install by\r\n    following the Auto-Mount steps in this\r\n    "),a(I.$$.fragment,t)},m(t,r){l(t,n,r),l(t,e,r),y(e,s),l(t,o,r),l(t,w,r),y(w,v),l(t,x,r),i(I,t,r),k=!0},p(t,n){const e={};4&n&&(e.$$scope={dirty:n,ctx:t}),I.$set(e)},i(t){k||($(I.$$.fragment,t),k=!0)},o(t){c(I.$$.fragment,t),k=!1},d(t){t&&h(n),t&&h(e),t&&h(o),t&&h(w),t&&h(x),f(I,t)}}}function C(t){let n,e,g,m,u,p;return n=new I({props:{title:"Something New",$$slots:{default:[j]},$$scope:{ctx:t}}}),g=new I({props:{title:"Arch",$$slots:{default:[E]},$$scope:{ctx:t}}}),u=new k({props:{$$slots:{default:[O]},$$scope:{ctx:t}}}),{c(){r(n.$$.fragment),e=s(),r(g.$$.fragment),m=s(),r(u.$$.fragment)},l(t){a(n.$$.fragment,t),e=o(t),a(g.$$.fragment,t),m=o(t),a(u.$$.fragment,t)},m(t,r){i(n,t,r),l(t,e,r),i(g,t,r),l(t,m,r),i(u,t,r),p=!0},p(t,e){const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),g.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),u.$set(a)},i(t){p||($(n.$$.fragment,t),$(g.$$.fragment,t),$(u.$$.fragment,t),p=!0)},o(t){c(n.$$.fragment,t),c(g.$$.fragment,t),c(u.$$.fragment,t),p=!1},d(t){f(n,t),t&&h(e),f(g,t),t&&h(m),f(u,t)}}}function M(t){let n,e,g,m;return n=new v({props:{title:P,tags:t[1],projects:t[0]}}),g=new x({props:{$$slots:{default:[C]},$$scope:{ctx:t}}}),{c(){r(n.$$.fragment),e=s(),r(g.$$.fragment)},l(t){a(n.$$.fragment,t),e=o(t),a(g.$$.fragment,t)},m(t,r){i(n,t,r),l(t,e,r),i(g,t,r),m=!0},p(t,[n]){const e={};4&n&&(e.$$scope={dirty:n,ctx:t}),g.$set(e)},i(t){m||($(n.$$.fragment,t),$(g.$$.fragment,t),m=!0)},o(t){c(n.$$.fragment,t),c(g.$$.fragment,t),m=!1},d(t){f(n,t),t&&h(e),f(g,t)}}}const P="Arch Linux New Install";function L(t){return[[],["setup","software"]]}export default class extends t{constructor(t){super(),n(this,t,L,M,e,{})}}
//# sourceMappingURL=arch-linux-new-install.svelte-cfc7ff84.js.map
