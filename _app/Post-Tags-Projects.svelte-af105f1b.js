import{S as t,i as e,s as n,I as s,e as r,c as l,b as o,t as a,g as c,h as f,m as g,j as i,k as h,l as $,n as u,p as m,r as p,q as d,z as j,v,w as x,x as w,u as D,B as I,C as b,D as B}from"./start-7dcb1d88.js";import{a as E,b as V}from"./free-solid-svg-icons-650f6a7f.js";function k(t){let e,n,D,I,b;return n=new s({props:{icon:E}}),{c(){e=r("div"),l(n.$$.fragment),D=o(),I=a(t[0]),this.h()},l(s){e=c(s,"DIV",{class:!0});var r=f(e);g(n.$$.fragment,r),D=i(r),I=h(r,t[0]),r.forEach($),this.h()},h(){u(e,"class","project svelte-tnsh3k")},m(t,s){m(t,e,s),p(n,e,null),d(e,D),d(e,I),b=!0},p(t,[e]){(!b||1&e)&&j(I,t[0])},i(t){b||(v(n.$$.fragment,t),b=!0)},o(t){x(n.$$.fragment,t),b=!1},d(t){t&&$(e),w(n)}}}function q(t,e,n){let{project:s}=e;return t.$$set=t=>{"project"in t&&n(0,s=t.project)},[s]}class z extends t{constructor(t){super(),e(this,t,q,k,n,{project:0})}}function C(t){let e,n,D,I,b;return n=new s({props:{icon:V}}),{c(){e=r("div"),l(n.$$.fragment),D=o(),I=a(t[0]),this.h()},l(s){e=c(s,"DIV",{class:!0});var r=f(e);g(n.$$.fragment,r),D=i(r),I=h(r,t[0]),r.forEach($),this.h()},h(){u(e,"class","tag svelte-10a3ux4")},m(t,s){m(t,e,s),p(n,e,null),d(e,D),d(e,I),b=!0},p(t,[e]){(!b||1&e)&&j(I,t[0])},i(t){b||(v(n.$$.fragment,t),b=!0)},o(t){x(n.$$.fragment,t),b=!1},d(t){t&&$(e),w(n)}}}function P(t,e,n){let{tag:s}=e;return t.$$set=t=>{"tag"in t&&n(0,s=t.tag)},[s]}class S extends t{constructor(t){super(),e(this,t,P,C,n,{tag:0})}}function y(t,e,n){const s=t.slice();return s[2]=e[n],s}function A(t,e,n){const s=t.slice();return s[5]=e[n],s}function F(t){let e,n;return e=new z({props:{project:t[5]}}),{c(){l(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,s){p(e,t,s),n=!0},p(t,n){const s={};2&n&&(s.project=t[5]),e.$set(s)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function G(t){return{c:D,l:D,m:D,d:D}}function H(t){let e,n,s;return e=new S({props:{tag:t[2]}}),{c(){l(e.$$.fragment),n=o()},l(t){g(e.$$.fragment,t),n=i(t)},m(t,r){p(e,t,r),m(t,n,r),s=!0},p(t,n){const s={};1&n&&(s.tag=t[2]),e.$set(s)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){w(e,t),t&&$(n)}}}function J(t){let e,n,s,l,a=t[1],g=[];for(let e=0;e<a.length;e+=1)g[e]=F(A(t,a,e));const h=t=>x(g[t],1,1,(()=>{g[t]=null}));let u=t[0].length>0&&t[1].length>0&&G(),p=t[0],j=[];for(let e=0;e<p.length;e+=1)j[e]=H(y(t,p,e));const w=t=>x(j[t],1,1,(()=>{j[t]=null}));return{c(){e=r("div");for(let t=0;t<g.length;t+=1)g[t].c();n=o(),u&&u.c(),s=o();for(let t=0;t<j.length;t+=1)j[t].c()},l(t){e=c(t,"DIV",{});var r=f(e);for(let t=0;t<g.length;t+=1)g[t].l(r);n=i(r),u&&u.l(r),s=i(r);for(let t=0;t<j.length;t+=1)j[t].l(r);r.forEach($)},m(t,r){m(t,e,r);for(let t=0;t<g.length;t+=1)g[t].m(e,null);d(e,n),u&&u.m(e,null),d(e,s);for(let t=0;t<j.length;t+=1)j[t].m(e,null);l=!0},p(t,[r]){if(2&r){let s;for(a=t[1],s=0;s<a.length;s+=1){const l=A(t,a,s);g[s]?(g[s].p(l,r),v(g[s],1)):(g[s]=F(l),g[s].c(),v(g[s],1),g[s].m(e,n))}for(I(),s=a.length;s<g.length;s+=1)h(s);b()}if(t[0].length>0&&t[1].length>0?u||(u=G(),u.c(),u.m(e,s)):u&&(u.d(1),u=null),1&r){let n;for(p=t[0],n=0;n<p.length;n+=1){const s=y(t,p,n);j[n]?(j[n].p(s,r),v(j[n],1)):(j[n]=H(s),j[n].c(),v(j[n],1),j[n].m(e,null))}for(I(),n=p.length;n<j.length;n+=1)w(n);b()}},i(t){if(!l){for(let t=0;t<a.length;t+=1)v(g[t]);for(let t=0;t<p.length;t+=1)v(j[t]);l=!0}},o(t){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)x(g[t]);j=j.filter(Boolean);for(let t=0;t<j.length;t+=1)x(j[t]);l=!1},d(t){t&&$(e),B(g,t),u&&u.d(),B(j,t)}}}function K(t,e,n){let{tags:s=[]}=e,{projects:r=[]}=e;return t.$$set=t=>{"tags"in t&&n(0,s=t.tags),"projects"in t&&n(1,r=t.projects)},[s,r]}class L extends t{constructor(t){super(),e(this,t,K,J,n,{tags:0,projects:1})}}export{L as P};
//# sourceMappingURL=Post-Tags-Projects.svelte-af105f1b.js.map
