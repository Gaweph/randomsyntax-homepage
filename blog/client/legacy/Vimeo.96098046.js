import{a as t,b as r,c as e,d as n,i as a,s as i,e as s,S as c,y as o,k as u,A as l,B as f,o as v,n as h,D as d,N as p,p as m,E as y,u as R,G as b}from"./client.b5e22270.js";function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,i=r(t);if(n){var s=r(this).constructor;a=Reflect.construct(i,arguments,s)}else a=i.apply(this,arguments);return e(this,a)}}function D(t){var r,e,n,a,i,s,c,j;return{c:function(){r=o("div"),e=o("br"),n=u(),a=o("div"),i=o("iframe"),c=u(),j=o("br"),this.h()},l:function(t){r=l(t,"DIV",{style:!0});var s=f(r);e=l(s,"BR",{}),n=v(s),a=l(s,"DIV",{class:!0});var o=f(a);i=l(o,"IFRAME",{src:!0,frameborder:!0,allowfullscreen:!0,title:!0,class:!0}),f(i).forEach(h),o.forEach(h),c=v(s),j=l(s,"BR",{}),s.forEach(h),this.h()},h:function(){i.src!==(s="//player.vimeo.com/video/"+t[0])&&d(i,"src",s),d(i,"frameborder","0"),i.allowFullscreen="",d(i,"title",t[1]),d(i,"class","svelte-ghjj6u"),d(a,"class","video-container svelte-ghjj6u"),p(r,"max-width","700px")},m:function(t,s){m(t,r,s),y(r,e),y(r,n),y(r,a),y(a,i),y(r,c),y(r,j)},p:function(t,r){var e=R(r,1)[0];1&e&&i.src!==(s="//player.vimeo.com/video/"+t[0])&&d(i,"src",s),2&e&&d(i,"title",t[1])},i:b,o:b,d:function(t){t&&h(r)}}}function E(t,r,e){var n=r.id,a=r.title;return t.$set=function(t){"id"in t&&e(0,n=t.id),"title"in t&&e(1,a=t.title)},[n,a]}var x=function(r){t(o,c);var e=j(o);function o(t){var r;return n(this,o),r=e.call(this),a(s(r),t,E,D,i,{id:0,title:1}),r}return o}();export{x as V};
