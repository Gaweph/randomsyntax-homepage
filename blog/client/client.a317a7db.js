function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(r)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}function l(t,e,r,s){return t[1]&&s?n(r.ctx.slice(),t[1](s(e))):r.ctx}function u(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t){return null==t?"":t}const m="undefined"!=typeof window;let d=m?()=>window.performance.now():()=>Date.now(),h=m?t=>requestAnimationFrame(t):t;const g=new Set;function $(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),0!==g.size&&h($)}function _(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function w(){return P(" ")}function x(){return P("")}function R(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t){return Array.from(t.childNodes)}function j(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?y(e):S(e)}function L(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return P(e)}function O(t){return L(t," ")}function D(t,e){e=""+e,t.data!==e&&(t.data=e)}function q(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function k(t,e,n){t.classList[n?"add":"remove"](e)}function H(t,e=document.body){return Array.from(e.querySelectorAll(t))}const N=new Set;let z,I=0;function U(t,e,n,r,s,o,a,i=0){const c=16.666/r;let l="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*o(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,p=t.ownerDocument;N.add(p);const m=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(S("style")).sheet),d=p.__svelte_rules||(p.__svelte_rules={});d[f]||(d[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${f} ${r}ms linear ${s}ms 1 both`,I+=1,f}function M(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),I-=s,I||h(()=>{I||(N.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),N.clear())}))}function V(t){z=t}function T(){if(!z)throw new Error("Function called outside component initialization");return z}function B(t){T().$$.on_mount.push(t)}function G(t){T().$$.on_destroy.push(t)}const J=[],F=[],K=[],W=[],X=Promise.resolve();let Y=!1;function Q(t){K.push(t)}let Z=!1;const tt=new Set;function et(){if(!Z){Z=!0;do{for(let t=0;t<J.length;t+=1){const e=J[t];V(e),nt(e.$$)}for(J.length=0;F.length;)F.pop()();for(let t=0;t<K.length;t+=1){const e=K[t];tt.has(e)||(tt.add(e),e())}K.length=0}while(J.length);for(;W.length;)W.pop()();Y=!1,Z=!1,tt.clear()}}function nt(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}let rt;function st(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const ot=new Set;let at;function it(){at={r:0,c:[],p:at}}function ct(){at.r||o(at.c),at=at.p}function lt(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(ot.has(t))return;ot.add(t),at.c.push(()=>{ot.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ft={duration:0};function pt(n,r,s,i){let c=r(n,s),l=i?0:1,u=null,f=null,p=null;function m(){p&&M(n,p)}function _(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(r){const{delay:s=0,duration:a=300,easing:i=e,tick:v=t,css:E}=c||ft,b={start:d()+s,b:r};r||(b.group=at,at.r+=1),u?f=b:(E&&(m(),p=U(n,l,r,a,s,i,E)),r&&v(0,1),u=_(b,a),Q(()=>st(n,r,"start")),function(t){let e;0===g.size&&h($),new Promise(n=>{g.add(e={c:t,f:n})})}(t=>{if(f&&t>f.start&&(u=_(f,a),f=null,st(n,u.b,"start"),E&&(m(),p=U(n,l,u.b,u.duration,0,i,c.css))),u)if(t>=u.end)v(l=u.b,1-l),st(n,u.b,"end"),f||(u.b?m():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*i(e/u.duration),v(l,1-l)}return!(!u&&!f)}))}return{run(t){a(c)?(rt||(rt=Promise.resolve(),rt.then(()=>{rt=null})),rt).then(()=>{c=c(),v(t)}):v(t)},end(){m(),u=f=null}}}const mt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function dt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ht(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function $t(t,e){t&&t.l(e)}function _t(t,e,n){const{fragment:s,on_mount:i,on_destroy:c,after_update:l}=t.$$;s&&s.m(e,n),Q(()=>{const e=i.map(r).filter(a);c?c.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(Q)}function vt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){-1===t.$$.dirty[0]&&(J.push(t),Y||(Y=!0,X.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(e,n,r,a,i,c,l=[-1]){const u=z;V(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l};let m=!1;if(p.ctx=r?r(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),m&&Et(e,t)),n}):[],p.update(),m=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=C(n.target);p.fragment&&p.fragment.l(t),t.forEach(E)}else p.fragment&&p.fragment.c();n.intro&&lt(e.$$.fragment),_t(e,n.target,n.anchor),et()}V(u)}class St{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const yt=[];function Pt(e,n=t){let r;const s=[];function o(t){if(i(e,t)&&(e=t,r)){const t=!yt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),yt.push(n,e)}if(t){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.push(c),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const wt={},xt=()=>({});function Rt(e){let n,r,s;return{c(){n=y("svg"),r=y("path"),this.h()},l(t){n=j(t,"svg",{"aria-hidden":!0,class:!0,role:!0,xmlns:!0,viewBox:!0},1);var e=C(n);r=j(e,"path",{fill:!0,d:!0},1),C(r).forEach(E),e.forEach(E),this.h()},h(){A(r,"fill","currentColor"),A(r,"d",e[0]),A(n,"aria-hidden","true"),A(n,"class",s=p(e[1])+" svelte-p8vizn"),A(n,"role","img"),A(n,"xmlns","http://www.w3.org/2000/svg"),A(n,"viewBox",e[2])},m(t,e){v(t,n,e),_(n,r)},p(t,[e]){1&e&&A(r,"d",t[0]),2&e&&s!==(s=p(t[1])+" svelte-p8vizn")&&A(n,"class",s),4&e&&A(n,"viewBox",t[2])},i:t,o:t,d(t){t&&E(n)}}}function At(t,e,r){let{icon:s}=e,o=[],a="",i="";return t.$set=t=>{r(4,e=n(n({},e),f(t))),"icon"in t&&r(3,s=t.icon)},t.$$.update=()=>{8&t.$$.dirty&&r(2,i="0 0 "+s.icon[0]+" "+s.icon[1]),r(1,a="fa-svelte "+(e.class?e.class:"")),8&t.$$.dirty&&r(0,o=s.icon[4])},e=f(e),[o,a,i,s]}class Ct extends St{constructor(t){super(),bt(this,t,At,Rt,i,{icon:3})}}function jt(e){let n,r,s,o,a,i,c;return{c(){n=S("header"),r=S("nav"),s=S("div"),o=S("div"),a=S("a"),i=S("img"),this.h()},l(t){n=j(t,"HEADER",{id:!0,role:!0,class:!0});var e=C(n);r=j(e,"NAV",{});var c=C(r);s=j(c,"DIV",{class:!0});var l=C(s);o=j(l,"DIV",{class:!0});var u=C(o);a=j(u,"A",{class:!0,rel:!0,href:!0});var f=C(a);i=j(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(E),u.forEach(E),l.forEach(E),c.forEach(E),e.forEach(E),this.h()},h(){i.src!==(c="content/images/logo_name.svg")&&A(i,"src","content/images/logo_name.svg"),A(i,"alt","Gareth Williams"),A(i,"class","svelte-14lxydg"),A(a,"class","navbar-bg svelte-14lxydg"),A(a,"rel","prefetch"),A(a,"href","/blog"),A(o,"class","site-title svelte-14lxydg"),A(s,"class","container"),A(n,"id","masthead"),A(n,"role","banner"),A(n,"class","svelte-14lxydg")},m(t,e){v(t,n,e),_(n,r),_(r,s),_(s,o),_(o,a),_(a,i)},p:t,i:t,o:t,d(t){t&&E(n)}}}function Lt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Ot extends St{constructor(t){super(),bt(this,t,Lt,jt,i,{segment:0})}}var Dt={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},qt={prefix:"fab",iconName:"pinterest",icon:[496,512,[],"f0d2","M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"]};function kt(e){let n,r,s,o,a;const i=new Ct({props:{icon:Dt}}),c=new Ct({props:{icon:qt}});return{c(){n=S("div"),r=S("a"),gt(i.$$.fragment),s=w(),o=S("a"),gt(c.$$.fragment),this.h()},l(t){n=j(t,"DIV",{class:!0});var e=C(n);r=j(e,"A",{href:!0,class:!0,target:!0,rel:!0});var a=C(r);$t(i.$$.fragment,a),a.forEach(E),s=O(e),o=j(e,"A",{href:!0,class:!0,target:!0,rel:!0});var l=C(o);$t(c.$$.fragment,l),l.forEach(E),e.forEach(E),this.h()},h(){A(r,"href","https://github.com/Gaweph"),A(r,"class","btn-github svelte-1qs9g6x"),A(r,"target","_blank"),A(r,"rel","external"),A(o,"href","https://uk.pinterest.com/gaweph"),A(o,"class","btn-pinterest svelte-1qs9g6x"),A(o,"target","_blank"),A(o,"rel","external"),A(n,"class","social-container svelte-1qs9g6x")},m(t,e){v(t,n,e),_(n,r),_t(i,r,null),_(n,s),_(n,o),_t(c,o,null),a=!0},p:t,i(t){a||(lt(i.$$.fragment,t),lt(c.$$.fragment,t),a=!0)},o(t){ut(i.$$.fragment,t),ut(c.$$.fragment,t),a=!1},d(t){t&&E(n),vt(i),vt(c)}}}class Ht extends St{constructor(t){super(),bt(this,t,null,kt,i,{})}}function Nt(e){let n,r,s,o,a,i,c;const l=new Ht({});return{c(){n=S("footer"),r=S("div"),s=S("div"),gt(l.$$.fragment),o=w(),a=S("div"),i=P("RandomSyntax.net"),this.h()},l(t){n=j(t,"FOOTER",{class:!0});var e=C(n);r=j(e,"DIV",{class:!0});var c=C(r);s=j(c,"DIV",{class:!0});var u=C(s);$t(l.$$.fragment,u),u.forEach(E),o=O(c),a=j(c,"DIV",{class:!0});var f=C(a);i=L(f,"RandomSyntax.net"),f.forEach(E),c.forEach(E),e.forEach(E),this.h()},h(){A(s,"class","social-container svelte-qxruod"),A(a,"class","site-sub-title svelte-qxruod"),A(r,"class","container"),A(n,"class","svelte-qxruod")},m(t,e){v(t,n,e),_(n,r),_(r,s),_t(l,s,null),_(r,o),_(r,a),_(a,i),c=!0},p:t,i(t){c||(lt(l.$$.fragment,t),c=!0)},o(t){ut(l.$$.fragment,t),c=!1},d(t){t&&E(n),vt(l)}}}function zt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class It extends St{constructor(t){super(),bt(this,t,zt,Nt,i,{segment:0})}}function Ut(t){let e,n,r,s;const o=new Ot({props:{segment:t[0]}}),a=t[2].default,i=c(a,t,t[1],null),f=new It({props:{segment:t[0]}});return{c(){gt(o.$$.fragment),e=w(),n=S("main"),i&&i.c(),r=w(),gt(f.$$.fragment),this.h()},l(t){$t(o.$$.fragment,t),e=O(t),n=j(t,"MAIN",{class:!0});var s=C(n);i&&i.l(s),s.forEach(E),r=O(t),$t(f.$$.fragment,t),this.h()},h(){A(n,"class","container svelte-1xrlckb")},m(t,a){_t(o,t,a),v(t,e,a),v(t,n,a),i&&i.m(n,null),v(t,r,a),_t(f,t,a),s=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),i&&i.p&&2&e&&i.p(l(a,t,t[1],null),u(a,t[1],e,null));const r={};1&e&&(r.segment=t[0]),f.$set(r)},i(t){s||(lt(o.$$.fragment,t),lt(i,t),lt(f.$$.fragment,t),s=!0)},o(t){ut(o.$$.fragment,t),ut(i,t),ut(f.$$.fragment,t),s=!1},d(t){vt(o,t),t&&E(e),t&&E(n),i&&i.d(t),t&&E(r),vt(f,t)}}}function Mt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class Vt extends St{constructor(t){super(),bt(this,t,Mt,Ut,i,{segment:0})}}function Tt(t){let e,n,r;const s=t[1].default,o=c(s,t,t[0],null);return{c(){e=S("h1"),n=S("span"),o&&o.c(),this.h()},l(t){e=j(t,"H1",{class:!0});var r=C(e);n=j(r,"SPAN",{});var s=C(n);o&&o.l(s),s.forEach(E),r.forEach(E),this.h()},h(){A(e,"class","title")},m(t,s){v(t,e,s),_(e,n),o&&o.m(n,null),r=!0},p(t,[e]){o&&o.p&&1&e&&o.p(l(s,t,t[0],null),u(s,t[0],e,null))},i(t){r||(lt(o,t),r=!0)},o(t){ut(o,t),r=!1},d(t){t&&E(e),o&&o.d(t)}}}function Bt(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class Gt extends St{constructor(t){super(),bt(this,t,Bt,Tt,i,{})}}function Jt(t){let e;return{c(){e=P(t[0])},l(n){e=L(n,t[0])},m(t,n){v(t,e,n)},p(t,n){1&n&&D(e,t[0])},d(t){t&&E(e)}}}function Ft(t){let e,n,r=t[1].stack+"";return{c(){e=S("pre"),n=P(r)},l(t){e=j(t,"PRE",{});var s=C(e);n=L(s,r),s.forEach(E)},m(t,r){v(t,e,r),_(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d(t){t&&E(e)}}}function Kt(t){let e,n,r,s,o,a,i,c,l=t[1].message+"";document.title=e=t[0];const u=new Gt({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}});let f=t[2]&&t[1].stack&&Ft(t);return{c(){n=w(),gt(u.$$.fragment),r=w(),s=S("p"),o=P(l),a=w(),f&&f.c(),i=x(),this.h()},l(t){H('[data-svelte="svelte-1q84kh7"]',document.head).forEach(E),n=O(t),$t(u.$$.fragment,t),r=O(t),s=j(t,"P",{class:!0});var e=C(s);o=L(e,l),e.forEach(E),a=O(t),f&&f.l(t),i=x(),this.h()},h(){A(s,"class","svelte-umqmb6")},m(t,e){v(t,n,e),_t(u,t,e),v(t,r,e),v(t,s,e),_(s,o),v(t,a,e),f&&f.m(t,e),v(t,i,e),c=!0},p(t,[n]){(!c||1&n)&&e!==(e=t[0])&&(document.title=e);const r={};9&n&&(r.$$scope={dirty:n,ctx:t}),u.$set(r),(!c||2&n)&&l!==(l=t[1].message+"")&&D(o,l),t[2]&&t[1].stack?f?f.p(t,n):(f=Ft(t),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null)},i(t){c||(lt(u.$$.fragment,t),c=!0)},o(t){ut(u.$$.fragment,t),c=!1},d(t){t&&E(n),vt(u,t),t&&E(r),t&&E(s),t&&E(a),f&&f.d(t),t&&E(i)}}}function Wt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class Xt extends St{constructor(t){super(),bt(this,t,Wt,Kt,i,{status:0,error:1})}}function Yt(t){let e,r;const s=[t[4].props];var o=t[4].component;function a(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}if(o)var i=new o(a());return{c(){i&&gt(i.$$.fragment),e=x()},l(t){i&&$t(i.$$.fragment,t),e=x()},m(t,n){i&&_t(i,t,n),v(t,e,n),r=!0},p(t,n){const r=16&n?dt(s,[ht(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){it();const t=i;ut(t.$$.fragment,1,0,()=>{vt(t,1)}),ct()}o?(gt((i=new o(a())).$$.fragment),lt(i.$$.fragment,1),_t(i,e.parentNode,e)):i=null}else o&&i.$set(r)},i(t){r||(i&&lt(i.$$.fragment,t),r=!0)},o(t){i&&ut(i.$$.fragment,t),r=!1},d(t){t&&E(e),i&&vt(i,t)}}}function Qt(t){let e;const n=new Xt({props:{error:t[0],status:t[1]}});return{c(){gt(n.$$.fragment)},l(t){$t(n.$$.fragment,t)},m(t,r){_t(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(lt(n.$$.fragment,t),e=!0)},o(t){ut(n.$$.fragment,t),e=!1},d(t){vt(n,t)}}}function Zt(t){let e,n,r,s;const o=[Qt,Yt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){a[e].m(t,n),v(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?a[e].p(t,s):(it(),ut(a[c],1,1,()=>{a[c]=null}),ct(),n=a[e],n||(n=a[e]=o[e](t),n.c()),lt(n,1),n.m(r.parentNode,r))},i(t){s||(lt(n),s=!0)},o(t){ut(n),s=!1},d(t){a[e].d(t),t&&E(r)}}}function te(t){let e;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Zt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=n(s,r[t]);const o=new Vt({props:s});return{c(){gt(o.$$.fragment)},l(t){$t(o.$$.fragment,t)},m(t,n){_t(o,t,n),e=!0},p(t,[e]){const n=12&e?dt(r,[4&e&&{segment:t[2][0]},8&e&&ht(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){e||(lt(o.$$.fragment,t),e=!0)},o(t){ut(o.$$.fragment,t),e=!1},d(t){vt(o,t)}}}function ee(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e;var l,u;return l=wt,u=r,T().$$.context.set(l,u),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1)},[s,o,a,i,c,r]}class ne extends St{constructor(t){super(),bt(this,t,ee,te,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const re=[/^\/index.json$/,/^\/challenge-birds-and-bees\/?$/,/^\/marching-cubes\/?$/],se=[{js:()=>import("./index.79cd9938.js"),css:[]},{js:()=>import("./marching-squares-linear-interpolation.6ebaa48e.js"),css:[]},{js:()=>import("./unity3d-animation-from-transform.03cae091.js"),css:[]},{js:()=>import("./3d-printer-calibration.65a80c57.js"),css:[]},{js:()=>import("./3d-printer-wip-leaking.21bd2f57.js"),css:[]},{js:()=>import("./arch-linux-new-install.746fd3e0.js"),css:[]},{js:()=>import("./boxstarter-hello-world.0dad657b.js"),css:[]},{js:()=>import("./timegame-1-timetravel.bd08cca7.js"),css:[]},{js:()=>import("./timegame-2-animations.fd629503.js"),css:[]},{js:()=>import("./timegame-3-webgl-demo.f6c297bb.js"),css:[]},{js:()=>import("./test-private-methods.e538d3b5.js"),css:[]},{js:()=>import("./auto-bed-levelling.49fd9381.js"),css:[]},{js:()=>import("./timegame-webgl-002.65f8d5b1.js"),css:[]},{js:()=>import("./3d-printer-build.8387a5ca.js"),css:[]},{js:()=>import("./a-week-with-arch.a360f2bc.js"),css:[]},{js:()=>import("./marching-squares.9b188645.js"),css:[]},{js:()=>import("./conky-config.b449391e.js"),css:[]},{js:()=>import("./3d-printing.f402f1b9.js"),css:[]},{js:()=>import("./index.462d4f20.js"),css:[]},{js:()=>import("./[slug].057a3032.js"),css:[]},{js:()=>import("./10Print.641dde80.js"),css:[]},{js:()=>import("./index.b7a35c72.js"),css:[]},{js:()=>import("./[slug].e4019ef1.js"),css:[]}],oe=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/marching-squares-linear-interpolation\/?$/,parts:[{i:1}]},{pattern:/^\/unity3d-animation-from-transform\/?$/,parts:[{i:2}]},{pattern:/^\/3d-printer-calibration\/?$/,parts:[{i:3}]},{pattern:/^\/3d-printer-wip-leaking\/?$/,parts:[{i:4}]},{pattern:/^\/arch-linux-new-install\/?$/,parts:[{i:5}]},{pattern:/^\/boxstarter-hello-world\/?$/,parts:[{i:6}]},{pattern:/^\/timegame-1-timetravel\/?$/,parts:[{i:7}]},{pattern:/^\/timegame-2-animations\/?$/,parts:[{i:8}]},{pattern:/^\/timegame-3-webgl-demo\/?$/,parts:[{i:9}]},{pattern:/^\/test-private-methods\/?$/,parts:[{i:10}]},{pattern:/^\/auto-bed-levelling\/?$/,parts:[{i:11}]},{pattern:/^\/timegame-webgl-002\/?$/,parts:[{i:12}]},{pattern:/^\/3d-printer-build\/?$/,parts:[{i:13}]},{pattern:/^\/a-week-with-arch\/?$/,parts:[{i:14}]},{pattern:/^\/marching-squares\/?$/,parts:[{i:15}]},{pattern:/^\/conky-config\/?$/,parts:[{i:16}]},{pattern:/^\/3d-printing\/?$/,parts:[{i:17}]},{pattern:/^\/projects\/?$/,parts:[{i:18}]},{pattern:/^\/projects\/([^\/]+?)\/?$/,parts:[null,{i:19,params:t=>({slug:ae(t[1])})}]},{pattern:/^\/10Print\/?$/,parts:[{i:20}]},{pattern:/^\/tags\/?$/,parts:[{i:21}]},{pattern:/^\/tags\/([^\/]+?)\/?$/,parts:[null,{i:22,params:t=>({slug:ae(t[1])})}]}]);var ae;const ie="undefined"!=typeof __SAPPER__&&__SAPPER__;let ce,le,ue,fe=!1,pe=[],me="{}";const de={page:Pt({}),preloading:Pt(null),session:Pt(ie&&ie.session)};let he,ge;de.session.subscribe(async t=>{if(he=t,!fe)return;ge=!0;const e=Pe(new URL(location.href)),n=le={},{redirect:r,props:s,branch:o}=await Ae(e);n===le&&await Re(r,o,s,e.page)});let $e,_e=null;let ve,Ee=1;const be="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Se={};function ye(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Pe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ie.baseUrl))return null;let e=t.pathname.slice(ie.baseUrl.length);if(""===e&&(e="/"),!re.some(t=>t.test(e)))for(let n=0;n<oe.length;n+=1){const r=oe[n],s=r.pattern.exec(e);if(s){const n=ye(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:i}}}}function we(){return{x:pageXOffset,y:pageYOffset}}async function xe(t,e,n,r){if(e)ve=e;else{const t=we();Se[ve]=t,e=ve=++Ee,Se[ve]=n?t:{x:0,y:0}}ve=e,ce&&de.preloading.set(!0);const s=_e&&_e.href===t.href?_e.promise:Ae(t);_e=null;const o=le={},{redirect:a,props:i,branch:c}=await s;if(o===le&&(await Re(a,c,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Se[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Se[ve]=t,t&&scrollTo(t.x,t.y)}}async function Re(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Pe(new URL(t,document.baseURI));return n?(be[e.replaceState?"replaceState":"pushState"]({id:ve},"",t),xe(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(de.page.set(r),de.preloading.set(!1),ce)ce.$set(n);else{n.stores={page:{subscribe:de.page.subscribe},preloading:{subscribe:de.preloading.subscribe},session:de.session},n.level0={props:await ue};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)je(t.nextSibling);je(t),je(e)}ce=new ne({target:$e,props:n,hydrate:!0})}pe=e,me=JSON.stringify(r.query),fe=!0,ge=!1}async function Ae(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let i;ue||(ue=ie.preloaded[0]||xt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},he));let c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==me)return!0;const s=pe[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,f,l,s)&&(u=!0),o.segments[c]=r[i+1],!e)return{segment:f};const p=c++;if(!ge&&!u&&pe[i]&&pe[i].part===e.i)return pe[i];u=!1;const{default:m,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ce);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(se[e.i]);let h;return h=fe||!ie.preloaded[i+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},he):{}:ie.preloaded[i+1],o["level"+p]={component:m,props:h,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}function Ce(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function je(t){t.parentNode.removeChild(t)}function Le(t){const e=Pe(new URL(t,document.baseURI));if(e)return _e&&t===_e.href||function(t,e){_e={href:t,promise:e}}(t,Ae(e)),_e.promise}let Oe;function De(t){clearTimeout(Oe),Oe=setTimeout(()=>{qe(t)},20)}function qe(t){const e=He(t.target);e&&"prefetch"===e.rel&&Le(e.href)}function ke(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=He(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Pe(s);if(o){xe(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),be.pushState({id:ve},"",s.href)}}function He(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ne(t){if(Se[ve]=we(),t.state){const e=Pe(new URL(location.href));e?xe(e,t.state.id):location.href=location.href}else Ee=Ee+1,function(t){ve=t}(Ee),be.replaceState({id:ve},"",location.href)}var ze;ze={target:document.querySelector("#sapper")},"scrollRestoration"in be&&(be.scrollRestoration="manual"),function(t){$e=t}(ze.target),addEventListener("click",ke),addEventListener("popstate",Ne),addEventListener("touchstart",qe),addEventListener("mousemove",De),Promise.resolve().then(()=>{const{hash:t,href:e}=location;be.replaceState({id:Ee},"",e);const n=new URL(location.href);if(ie.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:i}=ie;ue||(ue=o&&o[0]),Re(null,[],{error:i,status:a,session:s,level0:{props:ue},level1:{props:{status:a,error:i},component:Xt},segments:o},{host:e,path:n,query:ye(r),params:{}})}();const r=Pe(n);return r?xe(r,Ee,!0,t):void 0});export{Q as A,pt as B,c as C,l as D,u as E,q as F,R as G,G as H,Ct as I,k as J,B as K,F as L,mt as M,St as S,Gt as T,$t as a,ut as b,gt as c,vt as d,w as e,x as f,E as g,O as h,bt as i,v as j,ct as k,b as l,_t as m,it as n,S as o,P as p,H as q,j as r,i as s,lt as t,C as u,L as v,A as w,_ as x,D as y,t as z};