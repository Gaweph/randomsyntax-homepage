import{S as t,i as s,s as a,T as e,e as n,o as r,c as o,q as c,g as l,h as i,r as u,u as $,a as p,w as d,j as f,m,x as g,t as h,A as x,B as j,b as v,d as y,p as w,v as b,y as E,C as P,D,E as q}from"./client.3bcff5e9.js";import{P as C}from"./Post-Tags-Projects.8c4b6793.js";function I(t){const s=t-1;return s*s*s+1}function S(t,{delay:s=0,duration:a=400,easing:e=I,x:n=0,y:r=0,opacity:o=0}){const c=getComputedStyle(t),l=+c.opacity,i="none"===c.transform?"":c.transform,u=l*(1-o);return{delay:s,duration:a,easing:e,css:(t,s)=>`\n\t\t\ttransform: ${i} translate(${(1-t)*n}px, ${(1-t)*r}px);\n\t\t\topacity: ${l-u*s}`}}function T(t){let s;return{c(){s=w(t[0])},l(a){s=b(a,t[0])},m(t,a){f(t,s,a)},p(t,a){1&a&&E(s,t[0])},d(t){t&&l(s)}}}function V(t){let s,a,w,b,E,P;document.title=s=t[0];const D=new e({props:{$$slots:{default:[T]},$$scope:{ctx:t}}}),q=new C({props:{tags:t[1],projects:t[2]}});return{c(){a=n(),w=r("div"),o(D.$$.fragment),b=n(),o(q.$$.fragment),this.h()},l(t){c('[data-svelte="svelte-qazgrf"]',document.head).forEach(l),a=i(t),w=u(t,"DIV",{class:!0});var s=$(w);p(D.$$.fragment,s),b=i(s),p(q.$$.fragment,s),s.forEach(l),this.h()},h(){d(w,"class","svelte-463wh6")},m(t,s){f(t,a,s),f(t,w,s),m(D,w,null),g(w,b),m(q,w,null),P=!0},p(t,[a]){(!P||1&a)&&s!==(s=t[0])&&(document.title=s);const e={};9&a&&(e.$$scope={dirty:a,ctx:t}),D.$set(e);const n={};2&a&&(n.tags=t[1]),4&a&&(n.projects=t[2]),q.$set(n)},i(t){P||(h(D.$$.fragment,t),h(q.$$.fragment,t),x(()=>{E||(E=j(w,S,{x:-200,duration:400},!0)),E.run(1)}),P=!0)},o(t){v(D.$$.fragment,t),v(q.$$.fragment,t),E||(E=j(w,S,{x:-200,duration:400},!1)),E.run(0),P=!1},d(t){t&&l(a),t&&l(w),y(D),y(q),t&&E&&E.end()}}}function X(t,s,a){let{title:e="XX"}=s,{tags:n}=s,{projects:r}=s;return t.$set=t=>{"title"in t&&a(0,e=t.title),"tags"in t&&a(1,n=t.tags),"projects"in t&&a(2,r=t.projects)},[e,n,r]}class z extends t{constructor(t){super(),s(this,t,X,V,a,{title:0,tags:1,projects:2})}}function A(t){let s,a,e;const n=t[1].default,o=P(n,t,t[0],null);return{c(){s=r("div"),o&&o.c(),this.h()},l(t){s=u(t,"DIV",{class:!0});var a=$(s);o&&o.l(a),a.forEach(l),this.h()},h(){d(s,"class","post-contents svelte-1pwbv9h")},m(t,a){f(t,s,a),o&&o.m(s,null),e=!0},p(t,[s]){o&&o.p&&1&s&&o.p(D(n,t,t[0],null),q(n,t[0],s,null))},i(t){e||(h(o,t),x(()=>{a||(a=j(s,S,{x:-200,duration:400},!0)),a.run(1)}),e=!0)},o(t){v(o,t),a||(a=j(s,S,{x:-200,duration:400},!1)),a.run(0),e=!1},d(t){t&&l(s),o&&o.d(t),t&&a&&a.end()}}}function B(t,s,a){let{$$slots:e={},$$scope:n}=s;return t.$set=t=>{"$$scope"in t&&a(0,n=t.$$scope)},[n,e]}class k extends t{constructor(t){super(),s(this,t,B,A,a,{})}}export{z as P,k as a};
