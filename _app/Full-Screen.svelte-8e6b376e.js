import{S as e,i as t,s,e as n,b as a,E as l,g as r,h as o,l as i,j as c,n as h,o as d,q as u,p,u as f,H as w,J as v,K as m,t as g,k as S,L as E,M as y,B as L,w as $,C as R,v as U,y as P,A as k}from"./start-7dcb1d88.js";const{document:O}=m;function T(e){let t,s,w,v;return{c(){t=n("script"),w=a(),v=n("div"),this.h()},l(e){const s=l('[data-svelte="svelte-nld0df"]',O.head);t=r(s,"SCRIPT",{src:!0}),o(t).forEach(i),s.forEach(i),w=c(e),v=r(e,"DIV",{id:!0,style:!0,class:!0}),o(v).forEach(i),this.h()},h(){t.src!==(s="/content/blog/js/p5."+e[1]+".min.js")&&h(t,"src",s),h(v,"id",e[0]),d(v,"position","relative"),d(v,"width",e[2]),d(v,"height",e[3]),h(v,"class","svelte-3yvr6x")},m(e,s){u(O.head,t),p(e,w,s),p(e,v,s)},p(e,[n]){2&n&&t.src!==(s="/content/blog/js/p5."+e[1]+".min.js")&&h(t,"src",s),1&n&&h(v,"id",e[0]),4&n&&d(v,"width",e[2]),8&n&&d(v,"height",e[3])},i:f,o:f,d(e){i(t),e&&i(w),e&&i(v)}}}function b(e,t,s){let{sketch:n}=t,{id:a="sketchXX"}=t,{p5Version:l="1.0.0"}=t,{width:r="100%"}=t,{height:o="100%"}=t,i=null;function c(){for(var e=document.getElementById(a),t=0;t<e.childNodes.length;t++){if("p5Canvas"==e.children[t].className)return!0}return!1}return w((()=>{var e=setInterval((()=>{!function(){try{p5&&n&&!c()&&(i=new p5(n,a))}catch(e){}}(),c()&&clearInterval(e)}),100)})),v((()=>{null!=i&&i.remove&&i.remove()})),e.$$set=e=>{"sketch"in e&&s(4,n=e.sketch),"id"in e&&s(0,a=e.id),"p5Version"in e&&s(1,l=e.p5Version),"width"in e&&s(2,r=e.width),"height"in e&&s(3,o=e.height)},[a,l,r,o,n]}class j extends e{constructor(e){super(),t(this,e,b,T,s,{sketch:4,id:0,p5Version:1,width:2,height:3})}}function I(e){return"URLSearchParams"in window?new URLSearchParams(window.location.search).get(e):""}function V(e){let t;const s=e[5].default,n=P(s,e,e[4],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,s){n&&n.m(e,s),t=!0},p(e,t){n&&n.p&&16&t&&k(n,s,e,e[4],t,null,null)},i(e){t||(U(n,e),t=!0)},o(e){$(n,e),t=!1},d(e){n&&n.d(e)}}}function C(e){let t;const s=e[5].default,n=P(s,e,e[4],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,s){n&&n.m(e,s),t=!0},p(e,t){n&&n.p&&16&t&&k(n,s,e,e[4],t,null,null)},i(e){t||(U(n,e),t=!0)},o(e){$(n,e),t=!1},d(e){n&&n.d(e)}}}function N(e){let t,s,l,d,f,w,v,m,P;const k=[C,V],O=[];function T(e,t){return e[1]?0:1}return s=T(e),l=O[s]=k[s](e),{c(){t=n("div"),l.c(),d=a(),f=n("button"),w=g("FULL SCREEN MODE"),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=o(t);l.l(s),s.forEach(i),d=c(e),f=r(e,"BUTTON",{class:!0});var n=o(f);w=S(n,"FULL SCREEN MODE"),n.forEach(i),this.h()},h(){h(t,"class","fullscreen-wrapper svelte-1fqdder"),E(t,"overlay",e[0]),h(f,"class","overlay-button svelte-1fqdder"),E(f,"overlay",e[0])},m(n,a){p(n,t,a),O[s].m(t,null),p(n,d,a),p(n,f,a),u(f,w),v=!0,m||(P=y(f,"click",e[2]),m=!0)},p(e,[n]){let a=s;s=T(e),s===a?O[s].p(e,n):(L(),$(O[a],1,1,(()=>{O[a]=null})),R(),l=O[s],l?l.p(e,n):(l=O[s]=k[s](e),l.c()),U(l,1),l.m(t,null)),1&n&&E(t,"overlay",e[0]),1&n&&E(f,"overlay",e[0])},i(e){v||(U(l),v=!0)},o(e){$(l),v=!1},d(e){e&&i(t),O[s].d(),e&&i(d),e&&i(f),m=!1,P()}}}function x(e,t,s){let{$$slots:n={},$$scope:a}=t,{reloadSlotOnToggle:l=!0}=t;w((()=>{s(0,r="1"==I("full-screen")),window.addEventListener("popstate",(e=>{s(0,r="1"==I("full-screen"))}))}));let r=!1,o=!1;return e.$$set=e=>{"reloadSlotOnToggle"in e&&s(3,l=e.reloadSlotOnToggle),"$$scope"in e&&s(4,a=e.$$scope)},[r,o,function(){s(0,r=!r),r?function(e,t){if("URLSearchParams"in window){var s=new URLSearchParams(window.location.search);s.set("full-screen","1"),history.pushState(null,"",window.location.pathname+"?"+s.toString())}}():function(e){if("URLSearchParams"in window){var t=new URLSearchParams(window.location.search);t.delete(e),history.pushState(null,"",window.location.pathname+"?"+t.toString())}}("full-screen"),l&&s(1,o=!o)},l,a,n]}class D extends e{constructor(e){super(),t(this,e,x,N,s,{reloadSlotOnToggle:3})}}export{D as F,j as P};
//# sourceMappingURL=Full-Screen.svelte-8e6b376e.js.map
