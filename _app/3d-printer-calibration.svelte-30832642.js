import{S as t,i as e,s as a,c as r,a as n,k as s,g as i,p as o,n as $,r as l,u as c,v as f,j as p,e as g,t as m,d,f as u,h as b,o as h}from"./start-ecbf61aa.js";import{G as y}from"./Gallery.svelte-e50edb37.js";import{P as v,a as P}from"./Post-Contents.svelte-14ba2dac.js";import{P as j}from"./Post-Section.svelte-c9b9ecea.js";import{C as w}from"./Callout.svelte-e4de3065.js";import{L as x}from"./Link-External.svelte-68d03d5a.js";import{V as D}from"./Vimeo.svelte-da9eaffb.js";import"./Post-Tags-Projects.svelte-d9ae2f4f.js";import"./Icon.svelte-dd41848c.js";import"./free-solid-svg-icons-650f6a7f.js";function C(t){let e;return{c(){e=m("Calibrating a Delta 3D Printer")},l(t){e=b(t,"Calibrating a Delta 3D Printer")},m(t,a){$(t,e,a)},d(t){t&&p(e)}}}function I(t){let e,a;return{c(){e=g("p"),a=m("This calibration process is for a delta style printers only (like my\n        3DR)")},l(t){e=d(t,"P",{});var r=u(e);a=b(r,"This calibration process is for a delta style printers only (like my\n        3DR)"),r.forEach(p)},m(t,r){$(t,e,r),h(e,a)},d(t){t&&p(e)}}}function E(t){let e,a,v,P,j,E,k,q,T,_,A,G,H,L,M,R,S,V,O,z;return P=new D({props:{id:"86994938",title:"Printing calibration cube"}}),q=new x({props:{href:"http://minow.blogspot.co.uk/index.html#4918805519571907051",$$slots:{default:[C]},$$scope:{ctx:t}}}),A=new w({props:{title:"Delta Printers Only",$$slots:{default:[I]},$$scope:{ctx:t}}}),R=new y({props:{images:["/content/blog/images/3d-printer-calibration/calibration_a.jpg","/content/blog/images/3d-printer-calibration/calibration_b.jpg","/content/blog/images/3d-printer-calibration/calibration_c.jpg"]}}),{c(){e=g("p"),a=m("Here is a video of my printer doing a calibration."),v=n(),r(P.$$.fragment),j=n(),E=g("p"),k=m("Calibrating the print head height is proving to be quite difficult. I\n      found a good article on\n      "),r(q.$$.fragment),T=m("\n      by Minow."),_=n(),r(A.$$.fragment),G=n(),H=g("p"),L=m("As you can see the prints are getting significantly better."),M=n(),r(R.$$.fragment),S=n(),V=g("p"),O=m("Its not quite there, but I would say its close.")},l(t){e=d(t,"P",{});var r=u(e);a=b(r,"Here is a video of my printer doing a calibration."),r.forEach(p),v=i(t),s(P.$$.fragment,t),j=i(t),E=d(t,"P",{});var n=u(E);k=b(n,"Calibrating the print head height is proving to be quite difficult. I\n      found a good article on\n      "),s(q.$$.fragment,n),T=b(n,"\n      by Minow."),n.forEach(p),_=i(t),s(A.$$.fragment,t),G=i(t),H=d(t,"P",{});var o=u(H);L=b(o,"As you can see the prints are getting significantly better."),o.forEach(p),M=i(t),s(R.$$.fragment,t),S=i(t),V=d(t,"P",{});var $=u(V);O=b($,"Its not quite there, but I would say its close."),$.forEach(p)},m(t,r){$(t,e,r),h(e,a),$(t,v,r),o(P,t,r),$(t,j,r),$(t,E,r),h(E,k),o(q,E,null),h(E,T),$(t,_,r),o(A,t,r),$(t,G,r),$(t,H,r),h(H,L),$(t,M,r),o(R,t,r),$(t,S,r),$(t,V,r),h(V,O),z=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),q.$set(a);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),A.$set(r)},i(t){z||(l(P.$$.fragment,t),l(q.$$.fragment,t),l(A.$$.fragment,t),l(R.$$.fragment,t),z=!0)},o(t){c(P.$$.fragment,t),c(q.$$.fragment,t),c(A.$$.fragment,t),c(R.$$.fragment,t),z=!1},d(t){t&&p(e),t&&p(v),f(P,t),t&&p(j),t&&p(E),f(q),t&&p(_),f(A,t),t&&p(G),t&&p(H),t&&p(M),f(R,t),t&&p(S),t&&p(V)}}}function k(t){let e,a;return e=new j({props:{$$slots:{default:[E]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment)},l(t){s(e.$$.fragment,t)},m(t,r){o(e,t,r),a=!0},p(t,a){const r={};4&a&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){a||(l(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){f(e,t)}}}function q(t){let e,a,g,m;return e=new v({props:{title:T,tags:t[0],projects:t[1]}}),g=new P({props:{$$slots:{default:[k]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment),a=n(),r(g.$$.fragment)},l(t){s(e.$$.fragment,t),a=i(t),s(g.$$.fragment,t)},m(t,r){o(e,t,r),$(t,a,r),o(g,t,r),m=!0},p(t,[e]){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),g.$set(a)},i(t){m||(l(e.$$.fragment,t),l(g.$$.fragment,t),m=!0)},o(t){c(e.$$.fragment,t),c(g.$$.fragment,t),m=!1},d(t){f(e,t),t&&p(a),f(g,t)}}}const T="3D Printer 3 - Calibration";function _(t){return[["hardware","build"],["3D-Printer"]]}export default class extends t{constructor(t){super(),e(this,t,_,q,a,{})}}
//# sourceMappingURL=3d-printer-calibration.svelte-30832642.js.map
