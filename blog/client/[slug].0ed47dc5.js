import{S as t,i as s,s as e,T as n,c as o,a,m as r,t as l,b as c,d as f,e as g,f as i,q as u,g as $,h as p,j as m,k as d,l as h,I as j,p as w,v as x,y as P,n as b}from"./client.a234b10f.js";import{f as v}from"./Tag.f9e3940c.js";import"./Post-Tags-Projects.abd873db.js";import{P as y}from"./Post-Link.a17f26c5.js";function T(t,s,e){const n=t.slice();return n[2]=s[e],n}function k(t){let s,e,n;const i=new j({props:{icon:v}});return{c(){o(i.$$.fragment),s=g(),e=w(t[0])},l(n){a(i.$$.fragment,n),s=p(n),e=x(n,t[0])},m(t,o){r(i,t,o),m(t,s,o),m(t,e,o),n=!0},p(t,s){(!n||1&s)&&P(e,t[0])},i(t){n||(l(i.$$.fragment,t),n=!0)},o(t){c(i.$$.fragment,t),n=!1},d(t){f(i,t),t&&$(s),t&&$(e)}}}function D(t){let s;const e=new y({props:{title:t[2].title,slug:t[2].slug,projects:t[2].projects,tags:t[2].tags}});return{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,n){r(e,t,n),s=!0},p(t,s){const n={};2&s&&(n.title=t[2].title),2&s&&(n.slug=t[2].slug),2&s&&(n.projects=t[2].projects),2&s&&(n.tags=t[2].tags),e.$set(n)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function q(t){let s,e,j,w,x;document.title=s="Project - "+t[0];const P=new n({props:{$$slots:{default:[k]},$$scope:{ctx:t}}});let v=t[1],y=[];for(let s=0;s<v.length;s+=1)y[s]=D(T(t,v,s));const q=t=>c(y[t],1,1,()=>{y[t]=null});return{c(){e=g(),o(P.$$.fragment),j=g();for(let t=0;t<y.length;t+=1)y[t].c();w=i()},l(t){u('[data-svelte="svelte-1g072uu"]',document.head).forEach($),e=p(t),a(P.$$.fragment,t),j=p(t);for(let s=0;s<y.length;s+=1)y[s].l(t);w=i()},m(t,s){m(t,e,s),r(P,t,s),m(t,j,s);for(let e=0;e<y.length;e+=1)y[e].m(t,s);m(t,w,s),x=!0},p(t,[e]){(!x||1&e)&&s!==(s="Project - "+t[0])&&(document.title=s);const n={};if(33&e&&(n.$$scope={dirty:e,ctx:t}),P.$set(n),2&e){let s;for(v=t[1],s=0;s<v.length;s+=1){const n=T(t,v,s);y[s]?(y[s].p(n,e),l(y[s],1)):(y[s]=D(n),y[s].c(),l(y[s],1),y[s].m(w.parentNode,w))}for(b(),s=v.length;s<y.length;s+=1)q(s);d()}},i(t){if(!x){l(P.$$.fragment,t);for(let t=0;t<v.length;t+=1)l(y[t]);x=!0}},o(t){c(P.$$.fragment,t),y=y.filter(Boolean);for(let t=0;t<y.length;t+=1)c(y[t]);x=!1},d(t){t&&$(e),f(P,t),t&&$(j),h(y,t),t&&$(w)}}}async function B(t,s){const{slug:e}=t.params,n=await this.fetch("index.json"),o=(await n.json()).filter(t=>t.projects.includes(e));return o.sort((t,s)=>new Date(s.date)-new Date(t.date)),{posts:o,slug:e}}function E(t,s,e){let{slug:n}=s,{posts:o}=s;return t.$set=t=>{"slug"in t&&e(0,n=t.slug),"posts"in t&&e(1,o=t.posts)},[n,o]}export default class extends t{constructor(t){super(),s(this,t,E,q,e,{slug:0,posts:1})}}export{B as preload};
