import{S as t,i as e,s as n,e as s,c as r,a as l,t as o,d as a,f as c,k as f,g,h as i,j as h,l as $,n as u,p as m,o as p,B as d,r as j,u as v,v as x,q as I,C as w,D,E}from"./start-58671407.js";import{I as B}from"./Icon.svelte-469e1454.js";import{a as V,b as k}from"./free-solid-svg-icons-650f6a7f.js";function b(t){let e,n,I,w,D;return n=new B({props:{icon:V}}),{c(){e=s("div"),r(n.$$.fragment),I=l(),w=o(t[0]),this.h()},l(s){e=a(s,"DIV",{class:!0});var r=c(e);f(n.$$.fragment,r),I=g(r),w=i(r,t[0]),r.forEach(h),this.h()},h(){$(e,"class","project svelte-tnsh3k")},m(t,s){u(t,e,s),m(n,e,null),p(e,I),p(e,w),D=!0},p(t,[e]){(!D||1&e)&&d(w,t[0])},i(t){D||(j(n.$$.fragment,t),D=!0)},o(t){v(n.$$.fragment,t),D=!1},d(t){t&&h(e),x(n)}}}function q(t,e,n){let{project:s}=e;return t.$$set=t=>{"project"in t&&n(0,s=t.project)},[s]}class C extends t{constructor(t){super(),e(this,t,q,b,n,{project:0})}}function P(t){let e,n,I,w,D;return n=new B({props:{icon:k}}),{c(){e=s("div"),r(n.$$.fragment),I=l(),w=o(t[0]),this.h()},l(s){e=a(s,"DIV",{class:!0});var r=c(e);f(n.$$.fragment,r),I=g(r),w=i(r,t[0]),r.forEach(h),this.h()},h(){$(e,"class","tag svelte-10a3ux4")},m(t,s){u(t,e,s),m(n,e,null),p(e,I),p(e,w),D=!0},p(t,[e]){(!D||1&e)&&d(w,t[0])},i(t){D||(j(n.$$.fragment,t),D=!0)},o(t){v(n.$$.fragment,t),D=!1},d(t){t&&h(e),x(n)}}}function S(t,e,n){let{tag:s}=e;return t.$$set=t=>{"tag"in t&&n(0,s=t.tag)},[s]}class y extends t{constructor(t){super(),e(this,t,S,P,n,{tag:0})}}function z(t,e,n){const s=t.slice();return s[2]=e[n],s}function A(t,e,n){const s=t.slice();return s[5]=e[n],s}function F(t){let e,n;return e=new C({props:{project:t[5]}}),{c(){r(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,s){m(e,t,s),n=!0},p(t,n){const s={};2&n&&(s.project=t[5]),e.$set(s)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function G(t){return{c:I,l:I,m:I,d:I}}function H(t){let e,n,s;return e=new y({props:{tag:t[2]}}),{c(){r(e.$$.fragment),n=l()},l(t){f(e.$$.fragment,t),n=g(t)},m(t,r){m(e,t,r),u(t,n,r),s=!0},p(t,n){const s={};1&n&&(s.tag=t[2]),e.$set(s)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t),t&&h(n)}}}function J(t){let e,n,r,o,f=t[1],i=[];for(let e=0;e<f.length;e+=1)i[e]=F(A(t,f,e));const $=t=>v(i[t],1,1,(()=>{i[t]=null}));let m=t[0].length>0&&t[1].length>0&&G(),d=t[0],x=[];for(let e=0;e<d.length;e+=1)x[e]=H(z(t,d,e));const I=t=>v(x[t],1,1,(()=>{x[t]=null}));return{c(){e=s("div");for(let t=0;t<i.length;t+=1)i[t].c();n=l(),m&&m.c(),r=l();for(let t=0;t<x.length;t+=1)x[t].c()},l(t){e=a(t,"DIV",{});var s=c(e);for(let t=0;t<i.length;t+=1)i[t].l(s);n=g(s),m&&m.l(s),r=g(s);for(let t=0;t<x.length;t+=1)x[t].l(s);s.forEach(h)},m(t,s){u(t,e,s);for(let t=0;t<i.length;t+=1)i[t].m(e,null);p(e,n),m&&m.m(e,null),p(e,r);for(let t=0;t<x.length;t+=1)x[t].m(e,null);o=!0},p(t,[s]){if(2&s){let r;for(f=t[1],r=0;r<f.length;r+=1){const l=A(t,f,r);i[r]?(i[r].p(l,s),j(i[r],1)):(i[r]=F(l),i[r].c(),j(i[r],1),i[r].m(e,n))}for(w(),r=f.length;r<i.length;r+=1)$(r);D()}if(t[0].length>0&&t[1].length>0?m||(m=G(),m.c(),m.m(e,r)):m&&(m.d(1),m=null),1&s){let n;for(d=t[0],n=0;n<d.length;n+=1){const r=z(t,d,n);x[n]?(x[n].p(r,s),j(x[n],1)):(x[n]=H(r),x[n].c(),j(x[n],1),x[n].m(e,null))}for(w(),n=d.length;n<x.length;n+=1)I(n);D()}},i(t){if(!o){for(let t=0;t<f.length;t+=1)j(i[t]);for(let t=0;t<d.length;t+=1)j(x[t]);o=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)v(i[t]);x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)v(x[t]);o=!1},d(t){t&&h(e),E(i,t),m&&m.d(),E(x,t)}}}function K(t,e,n){let{tags:s=[]}=e,{projects:r=[]}=e;return t.$$set=t=>{"tags"in t&&n(0,s=t.tags),"projects"in t&&n(1,r=t.projects)},[s,r]}class L extends t{constructor(t){super(),e(this,t,K,J,n,{tags:0,projects:1})}}export{L as P};
//# sourceMappingURL=Post-Tags-Projects.svelte-0a7c383c.js.map
