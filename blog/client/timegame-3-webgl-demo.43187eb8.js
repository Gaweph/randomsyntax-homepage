import{S as e,i as t,s as o,c as r,e as a,a as n,h as s,m as c,j as i,t as m,b as $,d as l,g as f,p,o as h,v as d,r as u,u as g,F as y,w}from"./client.3bcff5e9.js";import"./Tag.6df3a1f0.js";import"./Post-Tags-Projects.8c4b6793.js";import{P as b,a as x}from"./Post-Contents.cd7a3b72.js";import{L as j}from"./Link.179caaad.js";import{C as T}from"./Callout.5dcc87e8.js";function G(e){let t,o,r;return{c(){t=p("Im sorry for the lack of levels and content.\r\n    "),o=h("br"),r=p("\r\n    This project was mainly for me to try and see what would be needed to\r\n    implement the time travel piece of functionality")},l(e){t=d(e,"Im sorry for the lack of levels and content.\r\n    "),o=u(e,"BR",{}),r=d(e,"\r\n    This project was mainly for me to try and see what would be needed to\r\n    implement the time travel piece of functionality")},m(e,a){i(e,t,a),i(e,o,a),i(e,r,a)},d(e){e&&f(t),e&&f(o),e&&f(r)}}}function I(e){let t;return{c(){t=p("TimeGame project posts")},l(e){t=d(e,"TimeGame project posts")},m(e,o){i(e,t,o)},d(e){e&&f(t)}}}function v(e){let t,o;const a=new j({props:{href:"/blog/projects/Time Travel Game",$$slots:{default:[I]},$$scope:{ctx:e}}});return{c(){t=p("I have tried to explain how some of the game mechanics work in other\r\n    "),r(a.$$.fragment)},l(e){t=d(e,"I have tried to explain how some of the game mechanics work in other\r\n    "),n(a.$$.fragment,e)},m(e,r){i(e,t,r),c(a,e,r),o=!0},p(e,t){const o={};4&t&&(o.$$scope={dirty:t,ctx:e}),a.$set(o)},i(e){o||(m(a.$$.fragment,e),o=!0)},o(e){$(a.$$.fragment,e),o=!1},d(e){e&&f(t),l(a,e)}}}function k(e){let t;return{c(){t=p("If you need any further explanation or help then feel free to ask :) Ill try\r\n    my best to answer.")},l(e){t=d(e,"If you need any further explanation or help then feel free to ask :) Ill try\r\n    my best to answer.")},m(e,o){i(e,t,o)},d(e){e&&f(t)}}}function L(e){let t,o,b,x,j,I,L;const E=new T({props:{title:"Too boring?",$$slots:{default:[G]},$$scope:{ctx:e}}}),W=new T({props:{title:"Explanation",$$slots:{default:[v]},$$scope:{ctx:e}}}),B=new T({props:{title:"Just ask :)",$$slots:{default:[k]},$$scope:{ctx:e}}});return{c(){t=p("I have created a WEBGL build of the time machine proof of concept game. You\r\n  should be able to play directly below.\r\n  "),r(E.$$.fragment),o=a(),b=h("iframe"),j=a(),r(W.$$.fragment),I=a(),r(B.$$.fragment),this.h()},l(e){t=d(e,"I have created a WEBGL build of the time machine proof of concept game. You\r\n  should be able to play directly below.\r\n  "),n(E.$$.fragment,e),o=s(e),b=u(e,"IFRAME",{style:!0,src:!0,title:!0}),g(b).forEach(f),j=s(e),n(W.$$.fragment,e),I=s(e),n(B.$$.fragment,e),this.h()},h(){y(b,"width","1024px"),y(b,"height","700px"),b.src!==(x="https://gaweph.github.io/TimeGame-WebGL-Demo/V0.01//")&&w(b,"src","https://gaweph.github.io/TimeGame-WebGL-Demo/V0.01//"),w(b,"title","Marching Squares Linear Interpolation")},m(e,r){i(e,t,r),c(E,e,r),i(e,o,r),i(e,b,r),i(e,j,r),c(W,e,r),i(e,I,r),c(B,e,r),L=!0},p(e,t){const o={};4&t&&(o.$$scope={dirty:t,ctx:e}),E.$set(o);const r={};4&t&&(r.$$scope={dirty:t,ctx:e}),W.$set(r);const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),B.$set(a)},i(e){L||(m(E.$$.fragment,e),m(W.$$.fragment,e),m(B.$$.fragment,e),L=!0)},o(e){$(E.$$.fragment,e),$(W.$$.fragment,e),$(B.$$.fragment,e),L=!1},d(e){e&&f(t),l(E,e),e&&f(o),e&&f(b),e&&f(j),l(W,e),e&&f(I),l(B,e)}}}function E(e){let t,o;const p=new b({props:{title:W,tags:e[0],projects:e[1]}}),h=new x({props:{$$slots:{default:[L]},$$scope:{ctx:e}}});return{c(){r(p.$$.fragment),t=a(),r(h.$$.fragment)},l(e){n(p.$$.fragment,e),t=s(e),n(h.$$.fragment,e)},m(e,r){c(p,e,r),i(e,t,r),c(h,e,r),o=!0},p(e,[t]){const o={};4&t&&(o.$$scope={dirty:t,ctx:e}),h.$set(o)},i(e){o||(m(p.$$.fragment,e),m(h.$$.fragment,e),o=!0)},o(e){$(p.$$.fragment,e),$(h.$$.fragment,e),o=!1},d(e){l(p,e),e&&f(t),l(h,e)}}}const W="Time Game 3 - WEBGL Demo [V0.01]";function B(e){return[["software","unity3d"],["Time Travel Game"]]}export default class extends e{constructor(e){super(),t(this,e,B,E,o,{})}}