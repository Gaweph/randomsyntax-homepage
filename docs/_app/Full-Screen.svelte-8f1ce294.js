import{S as e,i as t,s,e as n,a,F as l,d as r,f as o,j as i,g as c,l as h,m as d,o as u,n as f,q as p,I as w,J as m,K as v,t as g,h as S,L as E,M as L,C as $,u as y,D as R,r as U,z as P,A as I}from"./start-b48a7065.js";const{document:O}=v;function T(e){let t,s,w,m;return{c(){t=n("script"),w=a(),m=n("div"),this.h()},l(e){const s=l('[data-svelte="svelte-nld0df"]',O.head);t=r(s,"SCRIPT",{src:!0}),o(t).forEach(i),s.forEach(i),w=c(e),m=r(e,"DIV",{id:!0,style:!0,class:!0}),o(m).forEach(i),this.h()},h(){t.src!==(s="/content/blog/js/p5."+e[1]+".min.js")&&h(t,"src",s),h(m,"id",e[0]),d(m,"position","relative"),d(m,"width",e[2]),d(m,"height",e[3]),h(m,"class","svelte-3yvr6x")},m(e,s){u(O.head,t),f(e,w,s),f(e,m,s)},p(e,[n]){2&n&&t.src!==(s="/content/blog/js/p5."+e[1]+".min.js")&&h(t,"src",s),1&n&&h(m,"id",e[0]),4&n&&d(m,"width",e[2]),8&n&&d(m,"height",e[3])},i:p,o:p,d(e){i(t),e&&i(w),e&&i(m)}}}function j(e,t,s){let{sketch:n}=t,{id:a="sketchXX"}=t,{p5Version:l="1.0.0"}=t,{width:r="100%"}=t,{height:o="100%"}=t,i=null;function c(){for(var e=document.getElementById(a),t=0;t<e.childNodes.length;t++){if("p5Canvas"==e.children[t].className)return!0}return!1}return w((()=>{var e=setInterval((()=>{!function(){try{p5&&n&&!c()&&(i=new p5(n,a))}catch(e){}}(),c()&&clearInterval(e)}),100)})),m((()=>{null!=i&&i.remove&&i.remove()})),e.$$set=e=>{"sketch"in e&&s(4,n=e.sketch),"id"in e&&s(0,a=e.id),"p5Version"in e&&s(1,l=e.p5Version),"width"in e&&s(2,r=e.width),"height"in e&&s(3,o=e.height)},[a,l,r,o,n]}class k extends e{constructor(e){super(),t(this,e,j,T,s,{sketch:4,id:0,p5Version:1,width:2,height:3})}}function V(e){return"URLSearchParams"in window?new URLSearchParams(window.location.search).get(e):""}function b(e){let t;const s=e[5].default,n=P(s,e,e[4],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,s){n&&n.m(e,s),t=!0},p(e,t){n&&n.p&&16&t&&I(n,s,e,e[4],t,null,null)},i(e){t||(U(n,e),t=!0)},o(e){y(n,e),t=!1},d(e){n&&n.d(e)}}}function C(e){let t;const s=e[5].default,n=P(s,e,e[4],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,s){n&&n.m(e,s),t=!0},p(e,t){n&&n.p&&16&t&&I(n,s,e,e[4],t,null,null)},i(e){t||(U(n,e),t=!0)},o(e){y(n,e),t=!1},d(e){n&&n.d(e)}}}function D(e){let t,s,l,d,p,w,m,v,P;const I=[C,b],O=[];function T(e,t){return e[1]?0:1}return s=T(e),l=O[s]=I[s](e),{c(){t=n("div"),l.c(),d=a(),p=n("button"),w=g("FULL SCREEN MODE"),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=o(t);l.l(s),s.forEach(i),d=c(e),p=r(e,"BUTTON",{class:!0});var n=o(p);w=S(n,"FULL SCREEN MODE"),n.forEach(i),this.h()},h(){h(t,"class","fullscreen-wrapper svelte-1fqdder"),E(t,"overlay",e[0]),h(p,"class","overlay-button svelte-1fqdder"),E(p,"overlay",e[0])},m(n,a){f(n,t,a),O[s].m(t,null),f(n,d,a),f(n,p,a),u(p,w),m=!0,v||(P=L(p,"click",e[2]),v=!0)},p(e,[n]){let a=s;s=T(e),s===a?O[s].p(e,n):($(),y(O[a],1,1,(()=>{O[a]=null})),R(),l=O[s],l?l.p(e,n):(l=O[s]=I[s](e),l.c()),U(l,1),l.m(t,null)),1&n&&E(t,"overlay",e[0]),1&n&&E(p,"overlay",e[0])},i(e){m||(U(l),m=!0)},o(e){y(l),m=!1},d(e){e&&i(t),O[s].d(),e&&i(d),e&&i(p),v=!1,P()}}}function N(e,t,s){let{$$slots:n={},$$scope:a}=t,{reloadSlotOnToggle:l=!0}=t;w((()=>{s(0,r="1"==V("full-screen")),window.addEventListener("popstate",(e=>{s(0,r="1"==V("full-screen"))}))}));let r=!1,o=!1;return e.$$set=e=>{"reloadSlotOnToggle"in e&&s(3,l=e.reloadSlotOnToggle),"$$scope"in e&&s(4,a=e.$$scope)},[r,o,function(){s(0,r=!r),r?function(e,t){if("URLSearchParams"in window){var s=new URLSearchParams(window.location.search);s.set("full-screen","1"),history.pushState(null,"",window.location.pathname+"?"+s.toString())}}():function(e){if("URLSearchParams"in window){var t=new URLSearchParams(window.location.search);t.delete(e),history.pushState(null,"",window.location.pathname+"?"+t.toString())}}("full-screen"),l&&s(1,o=!o)},l,a,n]}class x extends e{constructor(e){super(),t(this,e,N,D,s,{reloadSlotOnToggle:3})}}export{x as F,k as P};
//# sourceMappingURL=Full-Screen.svelte-8f1ce294.js.map
