import{S as t,i as s,s as e,T as r,e as a,c as n,q as o,g as c,h as $,a as f,j as p,m as i,t as m,b as j,d as g,I as l,p as d,v as u,z as h}from"./client.3bcff5e9.js";import{f as x}from"./Tag.6df3a1f0.js";import{P as w}from"./Post-Tags-Projects.8c4b6793.js";function P(t){let s,e;const r=new l({props:{icon:x}});return{c(){n(r.$$.fragment),s=d("\r\n  Projects")},l(t){f(r.$$.fragment,t),s=u(t,"\r\n  Projects")},m(t,a){i(r,t,a),p(t,s,a),e=!0},p:h,i(t){e||(m(r.$$.fragment,t),e=!0)},o(t){j(r.$$.fragment,t),e=!1},d(t){g(r,t),t&&c(s)}}}function v(t){let s,e,l;const d=new r({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),u=new w({props:{projects:t[0]}});return{c(){s=a(),n(d.$$.fragment),e=a(),n(u.$$.fragment),this.h()},l(t){o('[data-svelte="svelte-rfgxwv"]',document.head).forEach(c),s=$(t),f(d.$$.fragment,t),e=$(t),f(u.$$.fragment,t),this.h()},h(){document.title="Projects"},m(t,r){p(t,s,r),i(d,t,r),p(t,e,r),i(u,t,r),l=!0},p(t,[s]){const e={};2&s&&(e.$$scope={dirty:s,ctx:t}),d.$set(e);const r={};1&s&&(r.projects=t[0]),u.$set(r)},i(t){l||(m(d.$$.fragment,t),m(u.$$.fragment,t),l=!0)},o(t){j(d.$$.fragment,t),j(u.$$.fragment,t),l=!1},d(t){t&&c(s),g(d,t),t&&c(e),g(u,t)}}}async function b(t,s){const e=await this.fetch("index.json");return{projects:(await e.json()).flatMap(t=>t.projects).filter((t,s,e)=>e.indexOf(t)===s)}}function T(t,s,e){let{projects:r}=s;return t.$set=t=>{"projects"in t&&e(0,r=t.projects)},[r]}export default class extends t{constructor(t){super(),s(this,t,T,v,e,{projects:0})}}export{b as preload};
