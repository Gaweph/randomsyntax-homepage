import{S as t,i as e,s,e as r,c as n,a as l,t as o,d as a,f as c,k as f,g as h,h as g,j as i,l as u,n as $,p,o as m,B as d,r as j,u as v,v as x,q as b,C as E,D as I,E as w}from"./start-f5bdf764.js";import{I as D}from"./Icon.svelte-7ea34d79.js";import{a as B,b as V}from"./free-solid-svg-icons-650f6a7f.js";function k(t){let e,s,b,E,I;return s=new D({props:{icon:B}}),{c(){e=r("div"),n(s.$$.fragment),b=l(),E=o(t[0]),this.h()},l(r){e=a(r,"DIV",{class:!0});var n=c(e);f(s.$$.fragment,n),b=h(n),E=g(n,t[0]),n.forEach(i),this.h()},h(){u(e,"class","project svelte-tnsh3k")},m(t,r){$(t,e,r),p(s,e,null),m(e,b),m(e,E),I=!0},p(t,[e]){(!I||1&e)&&d(E,t[0])},i(t){I||(j(s.$$.fragment,t),I=!0)},o(t){v(s.$$.fragment,t),I=!1},d(t){t&&i(e),x(s)}}}function A(t,e,s){let{project:r}=e;return t.$$set=t=>{"project"in t&&s(0,r=t.project)},[r]}class q extends t{constructor(t){super(),e(this,t,A,k,s,{project:0})}}function C(t){let e,s,b,E,I;return s=new D({props:{icon:V}}),{c(){e=r("div"),n(s.$$.fragment),b=l(),E=o(t[0]),this.h()},l(r){e=a(r,"DIV",{class:!0});var n=c(e);f(s.$$.fragment,n),b=h(n),E=g(n,t[0]),n.forEach(i),this.h()},h(){u(e,"class","tag svelte-10a3ux4")},m(t,r){$(t,e,r),p(s,e,null),m(e,b),m(e,E),I=!0},p(t,[e]){(!I||1&e)&&d(E,t[0])},i(t){I||(j(s.$$.fragment,t),I=!0)},o(t){v(s.$$.fragment,t),I=!1},d(t){t&&i(e),x(s)}}}function P(t,e,s){let{tag:r}=e;return t.$$set=t=>{"tag"in t&&s(0,r=t.tag)},[r]}class S extends t{constructor(t){super(),e(this,t,P,C,s,{tag:0})}}function y(t,e,s){const r=t.slice();return r[2]=e[s],r}function z(t,e,s){const r=t.slice();return r[5]=e[s],r}function F(t){let e,s,l,o;return s=new q({props:{project:t[5]}}),{c(){e=r("a"),n(s.$$.fragment),this.h()},l(t){e=a(t,"A",{rel:!0,href:!0,class:!0});var r=c(e);f(s.$$.fragment,r),r.forEach(i),this.h()},h(){u(e,"rel","prefetch"),u(e,"href",l="/blog/projects/"+t[5]+"/"),u(e,"class","svelte-oecx31")},m(t,r){$(t,e,r),p(s,e,null),o=!0},p(t,r){const n={};2&r&&(n.project=t[5]),s.$set(n),(!o||2&r&&l!==(l="/blog/projects/"+t[5]+"/"))&&u(e,"href",l)},i(t){o||(j(s.$$.fragment,t),o=!0)},o(t){v(s.$$.fragment,t),o=!1},d(t){t&&i(e),x(s)}}}function G(t){return{c:b,l:b,m:b,d:b}}function H(t){let e,s,o,g,d;return s=new S({props:{tag:t[2]}}),{c(){e=r("a"),n(s.$$.fragment),o=l(),this.h()},l(t){e=a(t,"A",{rel:!0,href:!0,class:!0});var r=c(e);f(s.$$.fragment,r),o=h(r),r.forEach(i),this.h()},h(){u(e,"rel","prefetch"),u(e,"href",g="/blog/tags/"+t[2]+"/"),u(e,"class","svelte-oecx31")},m(t,r){$(t,e,r),p(s,e,null),m(e,o),d=!0},p(t,r){const n={};1&r&&(n.tag=t[2]),s.$set(n),(!d||1&r&&g!==(g="/blog/tags/"+t[2]+"/"))&&u(e,"href",g)},i(t){d||(j(s.$$.fragment,t),d=!0)},o(t){v(s.$$.fragment,t),d=!1},d(t){t&&i(e),x(s)}}}function J(t){let e,s,n,o,f=t[1],g=[];for(let e=0;e<f.length;e+=1)g[e]=F(z(t,f,e));const u=t=>v(g[t],1,1,(()=>{g[t]=null}));let p=t[0].length>0&&t[1].length>0&&G(),d=t[0],x=[];for(let e=0;e<d.length;e+=1)x[e]=H(y(t,d,e));const b=t=>v(x[t],1,1,(()=>{x[t]=null}));return{c(){e=r("div");for(let t=0;t<g.length;t+=1)g[t].c();s=l(),p&&p.c(),n=l();for(let t=0;t<x.length;t+=1)x[t].c()},l(t){e=a(t,"DIV",{});var r=c(e);for(let t=0;t<g.length;t+=1)g[t].l(r);s=h(r),p&&p.l(r),n=h(r);for(let t=0;t<x.length;t+=1)x[t].l(r);r.forEach(i)},m(t,r){$(t,e,r);for(let t=0;t<g.length;t+=1)g[t].m(e,null);m(e,s),p&&p.m(e,null),m(e,n);for(let t=0;t<x.length;t+=1)x[t].m(e,null);o=!0},p(t,[r]){if(2&r){let n;for(f=t[1],n=0;n<f.length;n+=1){const l=z(t,f,n);g[n]?(g[n].p(l,r),j(g[n],1)):(g[n]=F(l),g[n].c(),j(g[n],1),g[n].m(e,s))}for(E(),n=f.length;n<g.length;n+=1)u(n);I()}if(t[0].length>0&&t[1].length>0?p||(p=G(),p.c(),p.m(e,n)):p&&(p.d(1),p=null),1&r){let s;for(d=t[0],s=0;s<d.length;s+=1){const n=y(t,d,s);x[s]?(x[s].p(n,r),j(x[s],1)):(x[s]=H(n),x[s].c(),j(x[s],1),x[s].m(e,null))}for(E(),s=d.length;s<x.length;s+=1)b(s);I()}},i(t){if(!o){for(let t=0;t<f.length;t+=1)j(g[t]);for(let t=0;t<d.length;t+=1)j(x[t]);o=!0}},o(t){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)v(g[t]);x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)v(x[t]);o=!1},d(t){t&&i(e),w(g,t),p&&p.d(),w(x,t)}}}function K(t,e,s){let{tags:r=[]}=e,{projects:n=[]}=e;return t.$$set=t=>{"tags"in t&&s(0,r=t.tags),"projects"in t&&s(1,n=t.projects)},[r,n]}class L extends t{constructor(t){super(),e(this,t,K,J,s,{tags:0,projects:1})}}export{L as P};
//# sourceMappingURL=Post-Tags-Projects.svelte-4d25858e.js.map
