import{S as t,i as s,s as e,T as a,e as r,c as n,q as o,g as c,h as $,a as f,j as p,m as i,t as m,b as j,d as g,I as d,p as l,v as u,z as h}from"./client.a234b10f.js";import{f as x}from"./Tag.f9e3940c.js";import{P as w}from"./Post-Tags-Projects.abd873db.js";function P(t){let s,e;const a=new d({props:{icon:x}});return{c(){n(a.$$.fragment),s=l("\r\n  Projects")},l(t){f(a.$$.fragment,t),s=u(t,"\r\n  Projects")},m(t,r){i(a,t,r),p(t,s,r),e=!0},p:h,i(t){e||(m(a.$$.fragment,t),e=!0)},o(t){j(a.$$.fragment,t),e=!1},d(t){g(a,t),t&&c(s)}}}function b(t){let s,e,d;const l=new a({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),u=new w({props:{projects:t[0]}});return{c(){s=r(),n(l.$$.fragment),e=r(),n(u.$$.fragment),this.h()},l(t){o('[data-svelte="svelte-rfgxwv"]',document.head).forEach(c),s=$(t),f(l.$$.fragment,t),e=$(t),f(u.$$.fragment,t),this.h()},h(){document.title="Projects"},m(t,a){p(t,s,a),i(l,t,a),p(t,e,a),i(u,t,a),d=!0},p(t,[s]){const e={};2&s&&(e.$$scope={dirty:s,ctx:t}),l.$set(e);const a={};1&s&&(a.projects=t[0]),u.$set(a)},i(t){d||(m(l.$$.fragment,t),m(u.$$.fragment,t),d=!0)},o(t){j(l.$$.fragment,t),j(u.$$.fragment,t),d=!1},d(t){t&&c(s),g(l,t),t&&c(e),g(u,t)}}}async function v(t,s){const e=await this.fetch("index.json");return{projects:(await e.json()).flatMap(t=>t.projects).filter((t,s,e)=>e.indexOf(t)===s)}}function T(t,s,e){let{projects:a}=s;return t.$set=t=>{"projects"in t&&e(0,a=t.projects)},[a]}export default class extends t{constructor(t){super(),s(this,t,T,b,e,{projects:0})}}export{v as preload};
