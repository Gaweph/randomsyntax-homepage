import{S as s,i as t,s as a,o as e,p as r,e as l,c,r as o,u as n,v as i,g,h as p,a as f,w as h,j as u,x as j,m,y as $,t as v,b as d,d as y}from"./client.a317a7db.js";import{P}from"./Post-Tags-Projects.ad23e89b.js";function b(s){let t,a,b,x,E,k;const w=new P({props:{tags:s[3],projects:s[2]}});return{c(){t=e("div"),a=e("h2"),b=e("a"),x=r(s[0]),E=l(),c(w.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var r=n(t);a=o(r,"H2",{class:!0});var l=n(a);b=o(l,"A",{rel:!0,href:!0,class:!0});var c=n(b);x=i(c,s[0]),c.forEach(g),l.forEach(g),E=p(r),f(w.$$.fragment,r),r.forEach(g),this.h()},h(){h(b,"rel","prefetch"),h(b,"href",s[1]),h(b,"class","svelte-1ygst4l"),h(a,"class","post-link-title svelte-1ygst4l"),h(t,"class","post-link-container svelte-1ygst4l")},m(s,e){u(s,t,e),j(t,a),j(a,b),j(b,x),j(t,E),m(w,t,null),k=!0},p(s,[t]){(!k||1&t)&&$(x,s[0]),(!k||2&t)&&h(b,"href",s[1]);const a={};8&t&&(a.tags=s[3]),4&t&&(a.projects=s[2]),w.$set(a)},i(s){k||(v(w.$$.fragment,s),k=!0)},o(s){d(w.$$.fragment,s),k=!1},d(s){s&&g(t),y(w)}}}function x(s,t,a){let{title:e=""}=t,{slug:r=""}=t,{projects:l=[]}=t,{tags:c=[]}=t;return s.$set=s=>{"title"in s&&a(0,e=s.title),"slug"in s&&a(1,r=s.slug),"projects"in s&&a(2,l=s.projects),"tags"in s&&a(3,c=s.tags)},[e,r,l,c]}class E extends s{constructor(s){super(),t(this,s,x,b,a,{title:0,slug:1,projects:2,tags:3})}}export{E as P};
