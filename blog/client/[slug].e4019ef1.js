import{S as t,i as s,s as e,T as a,c as n,a as o,m as r,t as l,b as c,d as g,e as f,f as i,q as $,g as p,h as u,j as m,k as d,l as h,I as j,p as w,v as x,y as T,n as b}from"./client.a317a7db.js";import{d as P}from"./Tag.2a2eba50.js";import"./Post-Tags-Projects.ad23e89b.js";import{P as v}from"./Post-Link.c12fa670.js";function y(t,s,e){const a=t.slice();return a[2]=s[e],a}function k(t){let s,e,a;const i=new j({props:{icon:P}});return{c(){n(i.$$.fragment),s=f(),e=w(t[0])},l(a){o(i.$$.fragment,a),s=u(a),e=x(a,t[0])},m(t,n){r(i,t,n),m(t,s,n),m(t,e,n),a=!0},p(t,s){(!a||1&s)&&T(e,t[0])},i(t){a||(l(i.$$.fragment,t),a=!0)},o(t){c(i.$$.fragment,t),a=!1},d(t){g(i,t),t&&p(s),t&&p(e)}}}function D(t){let s;const e=new v({props:{title:t[2].title,slug:t[2].slug,projects:t[2].projects,tags:t[2].tags}});return{c(){n(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){r(e,t,a),s=!0},p(t,s){const a={};2&s&&(a.title=t[2].title),2&s&&(a.slug=t[2].slug),2&s&&(a.projects=t[2].projects),2&s&&(a.tags=t[2].tags),e.$set(a)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function q(t){let s,e,j,w,x;document.title=s="Tag - "+t[0];const T=new a({props:{$$slots:{default:[k]},$$scope:{ctx:t}}});let P=t[1],v=[];for(let s=0;s<P.length;s+=1)v[s]=D(y(t,P,s));const q=t=>c(v[t],1,1,()=>{v[t]=null});return{c(){e=f(),n(T.$$.fragment),j=f();for(let t=0;t<v.length;t+=1)v[t].c();w=i()},l(t){$('[data-svelte="svelte-13xwic5"]',document.head).forEach(p),e=u(t),o(T.$$.fragment,t),j=u(t);for(let s=0;s<v.length;s+=1)v[s].l(t);w=i()},m(t,s){m(t,e,s),r(T,t,s),m(t,j,s);for(let e=0;e<v.length;e+=1)v[e].m(t,s);m(t,w,s),x=!0},p(t,[e]){(!x||1&e)&&s!==(s="Tag - "+t[0])&&(document.title=s);const a={};if(33&e&&(a.$$scope={dirty:e,ctx:t}),T.$set(a),2&e){let s;for(P=t[1],s=0;s<P.length;s+=1){const a=y(t,P,s);v[s]?(v[s].p(a,e),l(v[s],1)):(v[s]=D(a),v[s].c(),l(v[s],1),v[s].m(w.parentNode,w))}for(b(),s=P.length;s<v.length;s+=1)q(s);d()}},i(t){if(!x){l(T.$$.fragment,t);for(let t=0;t<P.length;t+=1)l(v[t]);x=!0}},o(t){c(T.$$.fragment,t),v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)c(v[t]);x=!1},d(t){t&&p(e),g(T,t),t&&p(j),h(v,t),t&&p(w)}}}async function B(t,s){const{slug:e}=t.params,a=await this.fetch("index.json"),n=(await a.json()).filter(t=>t.tags.includes(e));return n.sort((t,s)=>new Date(s.date)-new Date(t.date)),{posts:n,slug:e}}function E(t,s,e){let{slug:a}=s,{posts:n}=s;return t.$set=t=>{"slug"in t&&e(0,a=t.slug),"posts"in t&&e(1,n=t.posts)},[a,n]}export default class extends t{constructor(t){super(),s(this,t,E,q,e,{slug:0,posts:1})}}export{B as preload};
