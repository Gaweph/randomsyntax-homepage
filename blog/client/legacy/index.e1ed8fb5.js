import{_ as t,r as n,a as r,b as a,c as e,d as s,i as c,s as f,e as o,S as u,T as i,k as $,f as p,q as g,n as l,o as m,g as h,p as d,m as v,u as x,t as y,h as T,j,I as w,z as R,C as k,G as b}from"./client.6c61c330.js";import{T as D,c as S}from"./Tag.d7146f10.js";function q(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=a(t);if(n){var c=a(this).constructor;r=Reflect.construct(s,arguments,c)}else r=s.apply(this,arguments);return e(this,r)}}function z(t){var n,r,a=new w({props:{icon:S}});return{c:function(){p(a.$$.fragment),n=R("\r\n  Tags")},l:function(t){h(a.$$.fragment,t),n=k(t,"\r\n  Tags")},m:function(t,e){v(a,t,e),d(t,n,e),r=!0},p:b,i:function(t){r||(y(a.$$.fragment,t),r=!0)},o:function(t){T(a.$$.fragment,t),r=!1},d:function(t){j(a,t),t&&l(n)}}}function C(t){var n,r,a,e=new i({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),s=new D({props:{tags:t[0]}});return{c:function(){n=$(),p(e.$$.fragment),r=$(),p(s.$$.fragment),this.h()},l:function(t){g('[data-svelte="svelte-32lck8"]',document.head).forEach(l),n=m(t),h(e.$$.fragment,t),r=m(t),h(s.$$.fragment,t),this.h()},h:function(){document.title="Tags"},m:function(t,c){d(t,n,c),v(e,t,c),d(t,r,c),v(s,t,c),a=!0},p:function(t,n){var r=x(n,1)[0],a={};2&r&&(a.$$scope={dirty:r,ctx:t}),e.$set(a);var c={};1&r&&(c.tags=t[0]),s.$set(c)},i:function(t){a||(y(e.$$.fragment,t),y(s.$$.fragment,t),a=!0)},o:function(t){T(e.$$.fragment,t),T(s.$$.fragment,t),a=!1},d:function(t){t&&l(n),j(e,t),t&&l(r),j(s,t)}}}function E(t,n){return G.apply(this,arguments)}function G(){return(G=t(n.mark((function t(r,a){var e,s,c;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("index.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return s=t.sent,c=s.flatMap((function(t){return t.tags})).filter((function(t,n,r){return r.indexOf(t)===n})),t.abrupt("return",{tags:c});case 8:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function I(t,n,r){var a=n.tags;return t.$set=function(t){"tags"in t&&r(0,a=t.tags)},[a]}var M=function(t){r(a,u);var n=q(a);function a(t){var r;return s(this,a),r=n.call(this),c(o(r),t,I,C,f,{tags:0}),r}return a}();export default M;export{E as preload};
