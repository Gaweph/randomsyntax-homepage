function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function r(e){return e()}function s(){return Object.create(null)}function o(e){e.forEach(r)}function a(e){return"function"==typeof e}function f(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t,n,r){if(e){const s=c(e,t,n,r);return e[0](s)}}function c(e,t,r,s){return e[1]&&s?n(r.ctx.slice(),e[1](s(t))):r.ctx}function l(e,t,n,r,s,o,a){const f=function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(t,r,s,o);if(f){const s=c(t,n,r,a);e.p(s,f)}}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}const p="undefined"!=typeof window;let h=p?()=>window.performance.now():()=>Date.now(),_=p?e=>requestAnimationFrame(e):e;const m=new Set;function g(e){m.forEach((t=>{t.c(e)||(m.delete(t),t.f())})),0!==m.size&&_(g)}function $(e,t){e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function E(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function S(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function N(){return w(" ")}function T(){return w("")}function x(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function C(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e){return Array.from(e.childNodes)}function L(e,t,n,r){for(let r=0;r<e.length;r+=1){const s=e[r];if(s.nodeName===t){let t=0;const o=[];for(;t<s.attributes.length;){const e=s.attributes[t++];n[e.name]||o.push(e.name)}for(let e=0;e<o.length;e++)s.removeAttribute(o[e]);return e.splice(r,1)[0]}}return r?S(t):v(t)}function O(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return w(t)}function j(e){return O(e," ")}function P(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function R(e,t,n){e.classList[n?"add":"remove"](t)}function V(e,t=document.body){return Array.from(t.querySelectorAll(e))}const J=new Set;let q,A=0;function U(e,t,n,r,s,o,a,f=0){const i=16.666/r;let c="{\n";for(let e=0;e<=1;e+=i){const r=t+(n-t)*o(e);c+=100*e+`%{${a(r,1-r)}}\n`}const l=c+`100% {${a(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(l)}_${f}`,d=e.ownerDocument;J.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[u]||(h[u]=!0,p.insertRule(`@keyframes ${u} ${l}`,p.cssRules.length));const _=e.style.animation||"";return e.style.animation=`${_?`${_}, `:""}${u} ${r}ms linear ${s}ms 1 both`,A+=1,u}function D(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),s=n.length-r.length;s&&(e.style.animation=r.join(", "),A-=s,A||_((()=>{A||(J.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),J.clear())})))}function z(e){q=e}function M(){if(!q)throw new Error("Function called outside component initialization");return q}function B(e){M().$$.on_mount.push(e)}function K(e){M().$$.on_destroy.push(e)}const F=[],G=[],H=[],W=[],Y=Promise.resolve();let X=!1;function Q(e){H.push(e)}let Z=!1;const ee=new Set;function te(){if(!Z){Z=!0;do{for(let e=0;e<F.length;e+=1){const t=F[e];z(t),ne(t.$$)}for(z(null),F.length=0;G.length;)G.pop()();for(let e=0;e<H.length;e+=1){const t=H[e];ee.has(t)||(ee.add(t),t())}H.length=0}while(F.length);for(;W.length;)W.pop()();X=!1,Z=!1,ee.clear()}}function ne(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}let re;function se(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const oe=new Set;let ae;function fe(){ae={r:0,c:[],p:ae}}function ie(){ae.r||o(ae.c),ae=ae.p}function ce(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function le(e,t,n,r){if(e&&e.o){if(oe.has(e))return;oe.add(e),ae.c.push((()=>{oe.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const ue={duration:0};function de(n,r,s,f){let i=r(n,s),c=f?0:1,l=null,u=null,d=null;function p(){d&&D(n,d)}function $(e,t){const n=e.b-c;return t*=Math.abs(n),{a:c,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function b(r){const{delay:s=0,duration:a=300,easing:f=t,tick:b=e,css:y}=i||ue,E={start:h()+s,b:r};r||(E.group=ae,ae.r+=1),l||u?u=E:(y&&(p(),d=U(n,c,r,a,s,f,y)),r&&b(0,1),l=$(E,a),Q((()=>se(n,r,"start"))),function(e){let t;0===m.size&&_(g),new Promise((n=>{m.add(t={c:e,f:n})}))}((e=>{if(u&&e>u.start&&(l=$(u,a),u=null,se(n,l.b,"start"),y&&(p(),d=U(n,c,l.b,l.duration,0,f,i.css))),l)if(e>=l.end)b(c=l.b,1-c),se(n,l.b,"end"),u||(l.b?p():--l.group.r||o(l.group.c)),l=null;else if(e>=l.start){const t=e-l.start;c=l.a+l.d*f(t/l.duration),b(c,1-c)}return!(!l&&!u)})))}return{run(e){a(i)?(re||(re=Promise.resolve(),re.then((()=>{re=null}))),re).then((()=>{i=i(),b(e)})):b(e)},end(){p(),l=u=null}}}const pe="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function he(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],f=t[o];if(f){for(const e in a)e in f||(r[e]=1);for(const e in f)s[e]||(n[e]=f[e],s[e]=1);e[o]=f}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function _e(e){return"object"==typeof e&&null!==e?e:{}}function me(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function $e(e,t,n){const{fragment:s,on_mount:f,on_destroy:i,after_update:c}=e.$$;s&&s.m(t,n),Q((()=>{const t=f.map(r).filter(a);i?i.push(...t):o(t),e.$$.on_mount=[]})),c.forEach(Q)}function be(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){-1===e.$$.dirty[0]&&(F.push(e),X||(X=!0,Y.then(te)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(t,n,r,a,f,i,c=[-1]){const l=q;z(t);const u=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:f,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let d=!1;if(u.ctx=r?r(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return u.ctx&&f(u.ctx[e],u.ctx[e]=s)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](s),d&&ye(t,e)),n})):[],u.update(),d=!0,o(u.before_update),u.fragment=!!a&&a(u.ctx),n.target){if(n.hydrate){const e=I(n.target);u.fragment&&u.fragment.l(e),e.forEach(y)}else u.fragment&&u.fragment.c();n.intro&&ce(t.$$.fragment),$e(t,n.target,n.anchor),te()}z(l)}class ve{$destroy(){be(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Se(e){let t,n,r=e[1].stack+"";return{c(){t=v("pre"),n=w(r)},l(e){t=L(e,"PRE",{});var s=I(t);n=O(s,r),s.forEach(y)},m(e,r){b(e,t,r),$(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&P(n,r)},d(e){e&&y(t)}}}function we(t){let n,r,s,o,a,f,i,c=t[1].message+"",l=t[1].stack&&Se(t);return{c(){n=v("h1"),r=w(t[0]),s=N(),o=v("p"),a=w(c),f=N(),l&&l.c(),i=T()},l(e){n=L(e,"H1",{});var u=I(n);r=O(u,t[0]),u.forEach(y),s=j(e),o=L(e,"P",{});var d=I(o);a=O(d,c),d.forEach(y),f=j(e),l&&l.l(e),i=T()},m(e,t){b(e,n,t),$(n,r),b(e,s,t),b(e,o,t),$(o,a),b(e,f,t),l&&l.m(e,t),b(e,i,t)},p(e,[t]){1&t&&P(r,e[0]),2&t&&c!==(c=e[1].message+"")&&P(a,c),e[1].stack?l?l.p(e,t):(l=Se(e),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},i:e,o:e,d(e){e&&y(n),e&&y(s),e&&y(o),e&&y(f),l&&l.d(e),e&&y(i)}}}function Ne(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s]}class Te extends ve{constructor(e){super(),Ee(this,e,Ne,we,f,{status:0,error:1})}}function xe(e){let t,r,s;const o=[e[4]||{}];var a=e[2][1];function f(e){let t={$$slots:{default:[Le]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)t=n(t,o[e]);return{props:t}}return a&&(t=new a(f(e))),{c(){t&&me(t.$$.fragment),r=T()},l(e){t&&ge(t.$$.fragment,e),r=T()},m(e,n){t&&$e(t,e,n),b(e,r,n),s=!0},p(e,n){const s=16&n?he(o,[_e(e[4]||{})]):{};if(4132&n&&(s.$$scope={dirty:n,ctx:e}),a!==(a=e[2][1])){if(t){fe();const e=t;le(e.$$.fragment,1,0,(()=>{be(e,1)})),ie()}a?(t=new a(f(e)),me(t.$$.fragment),ce(t.$$.fragment,1),$e(t,r.parentNode,r)):t=null}else a&&t.$set(s)},i(e){s||(t&&ce(t.$$.fragment,e),s=!0)},o(e){t&&le(t.$$.fragment,e),s=!1},d(e){e&&y(r),t&&be(t,e)}}}function Ce(e){let t,n;return t=new Te({props:{status:e[0],error:e[1]}}),{c(){me(t.$$.fragment)},l(e){ge(t.$$.fragment,e)},m(e,r){$e(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.status=e[0]),2&n&&(r.error=e[1]),t.$set(r)},i(e){n||(ce(t.$$.fragment,e),n=!0)},o(e){le(t.$$.fragment,e),n=!1},d(e){be(t,e)}}}function Ie(e){let t,r,s;const o=[e[5]||{}];var a=e[2][2];function f(e){let t={};for(let e=0;e<o.length;e+=1)t=n(t,o[e]);return{props:t}}return a&&(t=new a(f())),{c(){t&&me(t.$$.fragment),r=T()},l(e){t&&ge(t.$$.fragment,e),r=T()},m(e,n){t&&$e(t,e,n),b(e,r,n),s=!0},p(e,n){const s=32&n?he(o,[_e(e[5]||{})]):{};if(a!==(a=e[2][2])){if(t){fe();const e=t;le(e.$$.fragment,1,0,(()=>{be(e,1)})),ie()}a?(t=new a(f()),me(t.$$.fragment),ce(t.$$.fragment,1),$e(t,r.parentNode,r)):t=null}else a&&t.$set(s)},i(e){s||(t&&ce(t.$$.fragment,e),s=!0)},o(e){t&&le(t.$$.fragment,e),s=!1},d(e){e&&y(r),t&&be(t,e)}}}function Le(e){let t,n,r=e[2][2]&&Ie(e);return{c(){r&&r.c(),t=T()},l(e){r&&r.l(e),t=T()},m(e,s){r&&r.m(e,s),b(e,t,s),n=!0},p(e,n){e[2][2]?r?(r.p(e,n),4&n&&ce(r,1)):(r=Ie(e),r.c(),ce(r,1),r.m(t.parentNode,t)):r&&(fe(),le(r,1,1,(()=>{r=null})),ie())},i(e){n||(ce(r),n=!0)},o(e){le(r),n=!1},d(e){r&&r.d(e),e&&y(t)}}}function Oe(e){let t,n,r,s;const o=[Ce,xe],a=[];function f(e,t){return e[1]?0:1}return t=f(e),n=a[t]=o[t](e),{c(){n.c(),r=T()},l(e){n.l(e),r=T()},m(e,n){a[t].m(e,n),b(e,r,n),s=!0},p(e,s){let i=t;t=f(e),t===i?a[t].p(e,s):(fe(),le(a[i],1,1,(()=>{a[i]=null})),ie(),n=a[t],n?n.p(e,s):(n=a[t]=o[t](e),n.c()),ce(n,1),n.m(r.parentNode,r))},i(e){s||(ce(n),s=!0)},o(e){le(n),s=!1},d(e){a[t].d(e),e&&y(r)}}}function je(e){let t,n=e[7]&&Pe(e);return{c(){t=v("div"),n&&n.c(),this.h()},l(e){t=L(e,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=I(t);n&&n.l(r),r.forEach(y),this.h()},h(){C(t,"id","svelte-announcer"),C(t,"aria-live","assertive"),C(t,"aria-atomic","true"),C(t,"class","svelte-1j55zn5")},m(e,r){b(e,t,r),n&&n.m(t,null)},p(e,r){e[7]?n?n.p(e,r):(n=Pe(e),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(e){e&&y(t),n&&n.d()}}}function Pe(e){let t,n;return{c(){t=w("Navigated to "),n=w(e[8])},l(r){t=O(r,"Navigated to "),n=O(r,e[8])},m(e,r){b(e,t,r),b(e,n,r)},p(e,t){256&t&&P(n,e[8])},d(e){e&&y(t),e&&y(n)}}}function ke(e){let t,r,s,o;const a=[e[3]||{}];let f={$$slots:{default:[Oe]},$$scope:{ctx:e}};for(let e=0;e<a.length;e+=1)f=n(f,a[e]);t=new e[9]({props:f});let i=e[6]&&je(e);return{c(){me(t.$$.fragment),r=N(),i&&i.c(),s=T()},l(e){ge(t.$$.fragment,e),r=j(e),i&&i.l(e),s=T()},m(e,n){$e(t,e,n),b(e,r,n),i&&i.m(e,n),b(e,s,n),o=!0},p(e,[n]){const r=8&n?he(a,[_e(e[3]||{})]):{};4151&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r),e[6]?i?i.p(e,n):(i=je(e),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},i(e){o||(ce(t.$$.fragment,e),o=!0)},o(e){le(t.$$.fragment,e),o=!1},d(e){be(t,e),e&&y(r),i&&i.d(e),e&&y(s)}}}function Re(e,t,n){let{status:r}=t,{error:s}=t,{stores:o}=t,{page:a}=t,{components:f}=t,{props_0:i=null}=t,{props_1:c=null}=t,{props_2:l=null}=t;const u=f[0];var d,p,h;d="__svelte__",p=o,M().$$.context.set(d,p),h=o.page.notify,M().$$.after_update.push(h);let _=!1,m=!1,g=null;return B((()=>{const e=o.page.subscribe((()=>{_&&(n(7,m=!0),n(8,g=document.title))}));return n(6,_=!0),e})),e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error),"stores"in e&&n(10,o=e.stores),"page"in e&&n(11,a=e.page),"components"in e&&n(2,f=e.components),"props_0"in e&&n(3,i=e.props_0),"props_1"in e&&n(4,c=e.props_1),"props_2"in e&&n(5,l=e.props_2)},e.$$.update=()=>{3072&e.$$.dirty&&o.page.set(a)},[r,s,f,i,c,l,_,m,g,u,o,a]}class Ve extends ve{constructor(e){super(),Ee(this,e,Re,ke,f,{status:0,error:1,stores:10,page:11,components:2,props_0:3,props_1:4,props_2:5})}}function Je(e){let t;const n=e[1].default,r=i(n,e,e[0],null);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,n){r&&r.m(e,n),t=!0},p(e,[t]){r&&r.p&&1&t&&l(r,n,e,e[0],t,null,null)},i(e){t||(ce(r,e),t=!0)},o(e){le(r,e),t=!1},d(e){r&&r.d(e)}}}function qe(e,t,n){let{$$slots:r={},$$scope:s}=t;return e.$$set=e=>{"$$scope"in e&&n(0,s=e.$$scope)},[s,r]}var Ae=Object.freeze({__proto__:null,default:class extends ve{constructor(e){super(),Ee(this,e,qe,Je,f,{})}}});const Ue=[()=>Promise.all([import("./index.svelte-a22b5ec6.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","index.svelte-0641c71f.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./$layout.svelte-536b07e3.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","$layout.svelte-3d17d116.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./index.svelte-699f62e5.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","index.svelte-f205c0a7.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./marching-squares-linear-interpolation.svelte-968d3c96.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Link-External.svelte-23e4e1bf.css","Full-Screen.svelte-89797bc9.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./unity3d-animation-from-transform.svelte-8a5225ee.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","PrismJS.svelte-3b79baee.css","Callout.svelte-a9f481ba.css","Vimeo.svelte-8676971e.css","Gallery.svelte-f4ee3c03.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./3d-printer-calibration.svelte-e34e931c.js"),__inject_styles(["start-1646ff03.css","Gallery.svelte-f4ee3c03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Callout.svelte-a9f481ba.css","Link-External.svelte-23e4e1bf.css","Vimeo.svelte-8676971e.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./3d-printer-wip-leaking.svelte-3e4f5c8b.js"),__inject_styles(["start-1646ff03.css","Gallery.svelte-f4ee3c03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Link-External.svelte-23e4e1bf.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./arch-linux-new-install.svelte-b503b653.js"),__inject_styles(["start-1646ff03.css","Gallery.svelte-f4ee3c03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Callout.svelte-a9f481ba.css","Link-External.svelte-23e4e1bf.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./boxstarter-hello-world.svelte-840427b6.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","PrismJS.svelte-3b79baee.css","Callout.svelte-a9f481ba.css","Link-External.svelte-23e4e1bf.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./timegame-1-timetravel.svelte-cd93ddb2.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","PrismJS.svelte-3b79baee.css","Callout.svelte-a9f481ba.css","Vimeo.svelte-8676971e.css","Link-External.svelte-23e4e1bf.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./timegame-2-animations.svelte-20bd09b0.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Callout.svelte-a9f481ba.css","Vimeo.svelte-8676971e.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./timegame-3-webgl-demo.svelte-f0a62303.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Callout.svelte-a9f481ba.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./test-private-methods.svelte-eeef786d.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Callout.svelte-a9f481ba.css","PrismJS.svelte-3b79baee.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./auto-bed-levelling.svelte-be5a9de8.js"),__inject_styles(["start-1646ff03.css","Gallery.svelte-f4ee3c03.css","Callout.svelte-a9f481ba.css","Vimeo.svelte-8676971e.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Link-External.svelte-23e4e1bf.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./timegame-webgl-002.svelte-4eb3439f.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Gallery.svelte-f4ee3c03.css","Callout.svelte-a9f481ba.css","Link-External.svelte-23e4e1bf.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./3d-printer-build.svelte-cf293ffc.js"),__inject_styles(["start-1646ff03.css","Gallery.svelte-f4ee3c03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Callout.svelte-a9f481ba.css","Link-External.svelte-23e4e1bf.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./a-week-with-arch.svelte-e1b40441.js"),__inject_styles(["start-1646ff03.css","Gallery.svelte-f4ee3c03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./marching-squares.svelte-c3832ecc.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Callout.svelte-a9f481ba.css","Link-External.svelte-23e4e1bf.css","Full-Screen.svelte-89797bc9.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./conky-config.svelte-da239b4c.js"),__inject_styles(["start-1646ff03.css","Gallery.svelte-f4ee3c03.css","Icon.svelte-f065ca59.css","PrismJS.svelte-3b79baee.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Callout.svelte-a9f481ba.css","Link-External.svelte-23e4e1bf.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./3d-printing.svelte-b5ef48d9.js"),__inject_styles(["start-1646ff03.css","Gallery.svelte-f4ee3c03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css"])]).then((function(e){return e[0]})),()=>Promise.all([import("./10Print.svelte-96fb2732.js"),__inject_styles(["start-1646ff03.css","Icon.svelte-f065ca59.css","Post-Tags-Projects.svelte-9d07b317.css","Post-Contents.svelte-6aebd342.css","Link-External.svelte-23e4e1bf.css","Full-Screen.svelte-89797bc9.css"])]).then((function(e){return e[0]}))],De=()=>({}),ze=[{pattern:/^\/$/,params:De,parts:[Ue[0]]},{pattern:/^\/blog\/?$/,params:De,parts:[Ue[1],Ue[2]]},{pattern:/^\/blog\/marching-squares-linear-interpolation\/?$/,params:De,parts:[Ue[1],Ue[3]]},{pattern:/^\/blog\/unity3d-animation-from-transform\/?$/,params:De,parts:[Ue[1],Ue[4]]},{pattern:/^\/blog\/3d-printer-calibration\/?$/,params:De,parts:[Ue[1],Ue[5]]},{pattern:/^\/blog\/3d-printer-wip-leaking\/?$/,params:De,parts:[Ue[1],Ue[6]]},{pattern:/^\/blog\/arch-linux-new-install\/?$/,params:De,parts:[Ue[1],Ue[7]]},{pattern:/^\/blog\/boxstarter-hello-world\/?$/,params:De,parts:[Ue[1],Ue[8]]},{pattern:/^\/blog\/timegame-1-timetravel\/?$/,params:De,parts:[Ue[1],Ue[9]]},{pattern:/^\/blog\/timegame-2-animations\/?$/,params:De,parts:[Ue[1],Ue[10]]},{pattern:/^\/blog\/timegame-3-webgl-demo\/?$/,params:De,parts:[Ue[1],Ue[11]]},{pattern:/^\/blog\/test-private-methods\/?$/,params:De,parts:[Ue[1],Ue[12]]},{pattern:/^\/blog\/auto-bed-levelling\/?$/,params:De,parts:[Ue[1],Ue[13]]},{pattern:/^\/blog\/timegame-webgl-002\/?$/,params:De,parts:[Ue[1],Ue[14]]},{pattern:/^\/blog\/3d-printer-build\/?$/,params:De,parts:[Ue[1],Ue[15]]},{pattern:/^\/blog\/a-week-with-arch\/?$/,params:De,parts:[Ue[1],Ue[16]]},{pattern:/^\/blog\/marching-squares\/?$/,params:De,parts:[Ue[1],Ue[17]]},{pattern:/^\/blog\/conky-config\/?$/,params:De,parts:[Ue[1],Ue[18]]},{pattern:/^\/blog\/3d-printing\/?$/,params:De,parts:[Ue[1],Ue[19]]},{pattern:/^\/blog\/10Print\/?$/,params:De,parts:[Ue[1],Ue[20]]}],Me=[/^\/blog\/challenge-birds-and-bees\/?$/,/^\/blog\/marching-squares-js\/?$/,/^\/blog\/marching-cubes\/?$/,/^\/blog\/10print-js\/?$/];function Be(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}const Ke=[];function Fe(t,n=e){let r;const s=[];function o(e){if(f(t,e)&&(t=e,r)){const e=!Ke.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),Ke.push(n,t)}if(e){for(let e=0;e<Ke.length;e+=2)Ke[e][0](Ke[e+1]);Ke.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,f=e){const i=[a,f];return s.push(i),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(i);-1!==e&&s.splice(e,1),0===s.length&&(r(),r=null)}}}}function Ge(){return{x:pageXOffset,y:pageYOffset}}class He{constructor({base:e,host:t,pages:n,ignore:r}){this.base=e,this.host=t,this.pages=n,this.ignore=r,this.history=window.history||{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"}}init({renderer:e}){let t;this.renderer=e,e.router=this,"scrollRestoration"in this.history&&(this.history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{this.history.scrollRestoration="auto"})),addEventListener("load",(()=>{this.history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(t),t=setTimeout((()=>{const e={...history.state||{},"sveltekit:scroll":Ge()};history.replaceState(e,document.title,window.location)}),50)})),addEventListener("click",(e=>{if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Be(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=this.select(s);if(o){const n=t.hasAttribute("sveltekit:noscroll");this.renderer.notify(o),this.history.pushState({},"",s.href),this.navigate(o,!!n&&Ge(),s.hash),e.preventDefault()}})),addEventListener("popstate",(e=>{if(e.state){const t=new URL(location.href),n=this.select(t);n?this.navigate(n,e.state["sveltekit:scroll"]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),this.history.replaceState({},"",location.href);const n=this.select(new URL(location.href));if(n)return this.renderer.start(n)}select(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(this.base))return null;let t=e.pathname.slice(this.base.length);if(""===t&&(t="/"),!this.ignore.some((e=>e.test(t))))for(const n of this.pages){const r=n.pattern.exec(t);if(r){const s=new URLSearchParams(e.search),o=n.params(r),a={host:this.host,path:t,query:s,params:o};return{href:e.href,route:n,match:r,page:a}}}}async goto(e,{noscroll:t=!1,replaceState:n=!1}={}){const r=new URL(e,function(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}(document)),s=this.select(r);return s?(this.renderer.notify(s),this.history[n?"replaceState":"pushState"]({},"",e),this.navigate(s,!!t&&Ge(),r.hash)):(location.href=e,new Promise((()=>{})))}async navigate(e,t,n){location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.render(e),document.body.focus();const r=n&&document.getElementById(n.slice(1));t?scrollTo(t.x,t.y):r?scrollTo(0,r.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function We(e){const t=Fe(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}class Ye{constructor({Root:e,layout:t,target:n,error:r,status:s,preloaded:o,session:a}){this.Root=e,this.layout=t,this.layout_loader=()=>t,this.target=n,this.initial={preloaded:o,error:r,status:s},this.current={page:null,query:null,session_changed:!1,nodes:[]},this.caches=new Map,this.prefetching={href:null,promise:null},this.stores={page:We({}),navigating:Fe(null),session:Fe(a)},this.$session=null,this.root=null;const f=e=>{const t=Be(e.target);t&&t.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(t.href))};let i;addEventListener("touchstart",f),addEventListener("mousemove",(e=>{clearTimeout(i),i=setTimeout((()=>{f(e)}),20)}));let c=!1;this.stores.session.subscribe((async e=>{if(this.$session=e,!c)return;this.current.session_changed=!0;const t=this.router.select(new URL(location.href));this.render(t)})),c=!0}async start(e){const t={stores:this.stores,error:this.initial.error,status:this.initial.status,page:e.page};if(this.initial.error)t.components=[this.layout.default];else{const n=await this.hydrate(e);if(n.redirect)throw new Error("TODO client-side redirects");Object.assign(t,n.props),this.current=n.state}this.root=new this.Root({target:this.target,props:t,hydrate:!0}),this.initial=null}notify(e){this.stores.navigating.set({from:this.current.page,to:e.page})}async render(e){const t=this.token={},n=await this.hydrate(e);this.token===t&&(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null))}async hydrate({route:e,page:t}){const n={error:null,status:200,components:[]},r=(e,t)=>{if(this.initial){const t=document.querySelector(`script[type="svelte-data"][url="${e}"]`);if(t){const{body:e,...n}=JSON.parse(t.textContent);return Promise.resolve(new Response(e,n))}}return fetch(e,t)},s=t.query.toString(),o={page:t,query:s,session_changed:!1,nodes:[]},a=[this.layout_loader(),...e.parts.map((e=>e()))],f=[];let i,c={};const l={params:Object.keys(t.params).filter((e=>!this.current.page||this.current.page.params[e]!==t.params[e])),query:s!==this.current.query,session:this.current.session_changed,context:!1};try{for(let e=0;e<a.length;e+=1){const u=this.current.nodes[e],{default:d,load:p}=await a[e];n.components[e]=d;if(!u||d!==u.component||l.params.some((e=>u.uses.params.has(e)))||l.query&&u.uses.query||l.session&&u.uses.session||l.context&&u.uses.context){const n=t.path+s,a=this.caches.get(d),u=a&&a.get(n);let h,_;if(!u||l.context&&u.node.uses.context){h={component:d,uses:{params:new Set,query:!1,session:!1,context:!1}};const e={};for(const n in t.params)Object.defineProperty(e,n,{get:()=>(h.uses.params.add(n),t.params[n]),enumerable:!0});const n=this.$session;_=p&&await p.call(null,{page:{...t,params:e,get query(){return h.uses.query=!0,t.query}},get session(){return h.uses.session=!0,n},get context(){return h.uses.context=!0,{...c}},fetch:r})}else({node:h,loaded:_}=u);if(_){if(_.error){const e=new Error(_.error.message);throw e.status=_.error.status,e}if(_.redirect){i=_.redirect;break}if(_.context&&(l.context=!0,c={...c,..._.context}),_.maxage){this.caches.has(d)||this.caches.set(d,new Map);const e=this.caches.get(d),t={node:h,loaded:_};e.set(n,t);let r=!1;const s=setTimeout((()=>{o()}),1e3*_.maxage),o=()=>{e.get(n)===t&&e.delete(n),a(),clearTimeout(s)},a=this.stores.session.subscribe((()=>{r&&o()}));r=!0}f[e]=_.props}o.nodes[e]=h}else o.nodes[e]=u}(await Promise.all(f)).forEach(((e,t)=>{e&&(n[`props_${t}`]=e)})),this.current.page&&t.path===this.current.page.path||(n.page=t)}catch(e){n.error=e,n.status=500,o.nodes=[]}return{redirect:i,props:n,state:o}}async prefetch(e){const t=this.router.select(e);if(t)return e.href!==this.prefetching.href&&(this.prefetching={href:e.href,promise:this.hydrate(t)}),this.prefetching.promise;throw new Error(`Could not prefetch ${e.href}`)}}async function Xe({paths:e,target:t,host:n,session:r,preloaded:s,error:o,status:a}){const f=new He({base:e.base,host:n,pages:ze,ignore:Me}),i=new Ye({Root:Ve,layout:Ae,target:t,preloaded:s,error:o,status:a,session:r});await f.init({renderer:i})}export{l as A,P as B,fe as C,ie as D,E,V as F,Q as G,de as H,B as I,K as J,pe as K,R as L,x as M,T as N,G as O,Xe as P,ve as S,N as a,S as b,me as c,L as d,v as e,I as f,j as g,O as h,Ee as i,y as j,ge as k,C as l,k as m,b as n,$ as o,$e as p,e as q,ce as r,f as s,w as t,le as u,be as v,d as w,n as x,u as y,i as z};

import __inject_styles from './inject_styles-0e3d93cc.js';//# sourceMappingURL=start-58671407.js.map
