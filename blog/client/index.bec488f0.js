import{S as t,i as s,s as e,c as a,a as n,m as o,t as r,b as l,d as c,e as i,f,q as g,g as p,h,j as m,k as u,l as d,n as j}from"./client.3bcff5e9.js";import"./Tag.6df3a1f0.js";import"./Post-Tags-Projects.8c4b6793.js";import{P as $}from"./Post-Link.8685849e.js";function w(t,s,e){const a=t.slice();return a[1]=s[e],a}function x(t){let s;const e=new $({props:{title:t[1].title,slug:t[1].slug,projects:t[1].projects,tags:t[1].tags}});return{c(){a(e.$$.fragment)},l(t){n(e.$$.fragment,t)},m(t,a){o(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.title=t[1].title),1&s&&(a.slug=t[1].slug),1&s&&(a.projects=t[1].projects),1&s&&(a.tags=t[1].tags),e.$set(a)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function b(t){let s,e,a,n=t[0],o=[];for(let s=0;s<n.length;s+=1)o[s]=x(w(t,n,s));const c=t=>l(o[t],1,1,()=>{o[t]=null});return{c(){s=i();for(let t=0;t<o.length;t+=1)o[t].c();e=f(),this.h()},l(t){g('[data-svelte="svelte-1dazbtm"]',document.head).forEach(p),s=h(t);for(let s=0;s<o.length;s+=1)o[s].l(t);e=f(),this.h()},h(){document.title="Gareth Williams - RandomSyntax.Net"},m(t,n){m(t,s,n);for(let s=0;s<o.length;s+=1)o[s].m(t,n);m(t,e,n),a=!0},p(t,[s]){if(1&s){let a;for(n=t[0],a=0;a<n.length;a+=1){const l=w(t,n,a);o[a]?(o[a].p(l,s),r(o[a],1)):(o[a]=x(l),o[a].c(),r(o[a],1),o[a].m(e.parentNode,e))}for(j(),a=n.length;a<o.length;a+=1)c(a);u()}},i(t){if(!a){for(let t=0;t<n.length;t+=1)r(o[t]);a=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)l(o[t]);a=!1},d(t){t&&p(s),d(o,t),t&&p(e)}}}async function P({params:t,query:s}){const e=await this.fetch("index.json"),a=await e.json();return a.sort((t,s)=>new Date(s.date)-new Date(t.date)),{posts:a}}function y(t,s,e){let{posts:a}=s;return t.$set=t=>{"posts"in t&&e(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),s(this,t,y,b,e,{posts:0})}}export{P as preload};