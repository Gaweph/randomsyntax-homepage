import{S as t,i as s,s as e,T as n,c as o,a,m as r,t as l,b as c,d as f,e as g,f as i,q as u,g as $,h as p,j as m,k as d,l as h,I as j,p as w,v as b,y as x,n as P}from"./client.bf93b2b1.js";import{f as v}from"./Tag.4f22bcf4.js";import"./Post-Tags-Projects.ce4bd14a.js";import{P as y}from"./Post-Link.d74f67e6.js";function T(t,s,e){const n=t.slice();return n[2]=s[e],n}function k(t){let s,e,n;const i=new j({props:{icon:v}});return{c(){o(i.$$.fragment),s=g(),e=w(t[0])},l(n){a(i.$$.fragment,n),s=p(n),e=b(n,t[0])},m(t,o){r(i,t,o),m(t,s,o),m(t,e,o),n=!0},p(t,s){(!n||1&s)&&x(e,t[0])},i(t){n||(l(i.$$.fragment,t),n=!0)},o(t){c(i.$$.fragment,t),n=!1},d(t){f(i,t),t&&$(s),t&&$(e)}}}function D(t){let s;const e=new y({props:{title:t[2].title,slug:t[2].slug,projects:t[2].projects,tags:t[2].tags}});return{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,n){r(e,t,n),s=!0},p(t,s){const n={};2&s&&(n.title=t[2].title),2&s&&(n.slug=t[2].slug),2&s&&(n.projects=t[2].projects),2&s&&(n.tags=t[2].tags),e.$set(n)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function q(t){let s,e,j,w,b;document.title=s="Project - "+t[0];const x=new n({props:{$$slots:{default:[k]},$$scope:{ctx:t}}});let v=t[1],y=[];for(let s=0;s<v.length;s+=1)y[s]=D(T(t,v,s));const q=t=>c(y[t],1,1,()=>{y[t]=null});return{c(){e=g(),o(x.$$.fragment),j=g();for(let t=0;t<y.length;t+=1)y[t].c();w=i()},l(t){u('[data-svelte="svelte-1g072uu"]',document.head).forEach($),e=p(t),a(x.$$.fragment,t),j=p(t);for(let s=0;s<y.length;s+=1)y[s].l(t);w=i()},m(t,s){m(t,e,s),r(x,t,s),m(t,j,s);for(let e=0;e<y.length;e+=1)y[e].m(t,s);m(t,w,s),b=!0},p(t,[e]){(!b||1&e)&&s!==(s="Project - "+t[0])&&(document.title=s);const n={};if(33&e&&(n.$$scope={dirty:e,ctx:t}),x.$set(n),2&e){let s;for(v=t[1],s=0;s<v.length;s+=1){const n=T(t,v,s);y[s]?(y[s].p(n,e),l(y[s],1)):(y[s]=D(n),y[s].c(),l(y[s],1),y[s].m(w.parentNode,w))}for(P(),s=v.length;s<y.length;s+=1)q(s);d()}},i(t){if(!b){l(x.$$.fragment,t);for(let t=0;t<v.length;t+=1)l(y[t]);b=!0}},o(t){c(x.$$.fragment,t),y=y.filter(Boolean);for(let t=0;t<y.length;t+=1)c(y[t]);b=!1},d(t){t&&$(e),f(x,t),t&&$(j),h(y,t),t&&$(w)}}}async function B(t,s){const{slug:e}=t.params,n=await this.fetch("index.json"),o=(await n.json()).filter(t=>t.projects.includes(e));return o.sort((t,s)=>new Date(s.date)-new Date(t.date)),{posts:o,slug:e}}function E(t,s,e){let{slug:n}=s,{posts:o}=s;return t.$set=t=>{"slug"in t&&e(0,n=t.slug),"posts"in t&&e(1,o=t.posts)},[n,o]}export default class extends t{constructor(t){super(),s(this,t,E,q,e,{slug:0,posts:1})}}export{B as preload};