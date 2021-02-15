import{a as t,b as r,c as e,d as i,i as n,s as o,e as s,S as a,f as c,k as u,g as f,o as h,m as p,p as d,u as l,t as g,h as m,j as $,n as y,z as v,y as x,C as S,A as w,G as q}from"./client.6c61c330.js";import"./Tag.d7146f10.js";import"./Post-Tags-Projects.d7577e0f.js";import{P as k,a as P}from"./Post-Contents.70cd398c.js";import{P as C}from"./Post-Section.6722fb24.js";import{L as M}from"./Link-External.f7598c17.js";import{L as b}from"./Link.883fa5fb.js";import{F as R,P as j}from"./Full-Screen.071a1036.js";var L,G,V=function(){function t(){}return t.getColorVector=function(t,r){return t.createVector(t.red(r),t.green(r),t.blue(r))},t.rainbowColorBase=function(t){return[t.color("red"),t.color("orange"),t.color("yellow"),t.color("green"),t.color(38,58,150),t.color("indigo"),t.color("violet")]},t.getColorsArray=function(r,e,i){var n=this;void 0===i&&(i=null),null==i&&(i=t.rainbowColorBase(r));for(var o=i.map((function(t){return n.getColorVector(r,t)})),s=new Array,a=0;a<e;a++){var c=a/e*(o.length-1),u=Math.floor(c),f=c-u,h=this.getColorByPercentage(o[u],o[u+1],f);s.push(r.color(h.x,h.y,h.z))}return s},t.getColorByPercentage=function(t,r,e){var i=t.copy(),n=r.copy().sub(i).mult(e);return i.add(n)},t}(),z=function(){function t(t,r,e,i,n){this.numPoints=r,this.maxSpeed=e,this.sizeRange=i,this.minSize=n,this.p=t,this.setColors(),this.setupSquares(),this.setupPoints(),this.generateLines()}return t.prototype.move=function(){for(var t=0,r=this.points;t<r.length;t++){var e=r[t];e.x+=e.vx,e.y+=e.vy,(e.x<0||e.x>this.p.width)&&(e.vx*=-1),(e.y<0||e.y>this.p.height)&&(e.vy*=-1)}this.generateLines()},t.prototype.setColors=function(t){void 0===t&&(t=null),this.colorsArray=V.getColorsArray(this.p,this.p.floor(this.p.width),t)},t.prototype.draw=function(){this.p.strokeWeight(2);for(var t=0,r=this.lines;t<r.length;t++){var e=r[t];this.p.stroke(this.colorsArray[this.p.floor(e.x1)]),this.p.line(e.x1,e.y1,e.x2,e.y2)}},t.prototype.drawPoints=function(t){this.p.stroke(t),this.p.strokeWeight(.5),this.p.noFill();for(var r=0,e=this.points;r<e.length;r++){e[r].draw()}},t.prototype.drawGrid=function(t){this.p.stroke(t),this.p.strokeWeight(.4);for(var r=0;r<this.p.width/B.gridSpace;r++)this.p.line(r*B.gridSpace,0,r*B.gridSpace,this.p.height);for(var e=0;e<this.p.height/B.gridSpace;e++)this.p.line(0,e*B.gridSpace,this.p.width,e*B.gridSpace)},t.prototype.setupPoints=function(){var t;for(this.points=[],t=0;t<this.numPoints;t++){var r=Math.random()*this.p.width,e=Math.random()*this.p.height,i=Math.random()*this.maxSpeed-1,n=Math.random()*this.maxSpeed-1,o=Math.random()*this.sizeRange+this.minSize;this.points[t]=new A(this.p,r,e,i,n,o)}},t.prototype.generateLines=function(t){for(var r,e,i,n,o=[],s=Math.ceil(this.p.width/B.gridSpace),a=Math.ceil(this.p.height/B.gridSpace),c=0;c<s;c++){o[c]=[];for(var u=0;u<a;u++)o[c][u]=0}for(var f=0,h=this.points;f<h.length;f++)for(var p,d=(t=h[f]).r/2*B.strength,l=Math.ceil(2*d/B.gridSpace),g=(c=Math.max(0,Math.floor((t.x-d)/B.gridSpace)),u=Math.max(0,Math.floor((t.y-d)/B.gridSpace)),Math.min(s,c+1+l)),m=Math.min(a,u+1+l);c<g;c++)for(p=u;p<m;p++){var $=this.p.dist(t.x,t.y,c*B.gridSpace,p*B.gridSpace),y=t.r-$;o[c][p]+=Math.max(0,y)}this.lines=[];for(s=Math.ceil(this.p.width/B.gridSpace),a=Math.ceil(this.p.height/B.gridSpace),c=0;c<s-1;c++)for(u=0;u<a-1;u++){r=o[c][u]/100,e=o[c+1][u]/100,i=o[c][u+1]/100,n=o[c+1][u+1]/100;var v=(r>=B.stickyVal?1:0)+(e>=B.stickyVal?2:0)+(i>=B.stickyVal?4:0)+(n>=B.stickyVal?8:0),x=this.squares[v](c*B.gridSpace,u*B.gridSpace,r,e,i,n);null!=x&&this.lines.push(x)}},t.prototype.side=function(t,r){return B.gridSpace*((B.stickyVal-t)/(r-t))},t.prototype.setupSquares=function(){var t=this;this.squares=[],this.squares[0]=function(t,r,e,i,n,o){return null},this.squares[1]=function(r,e,i,n,o,s){return{x1:r,y1:e+B.gridSpace-t.side(o,i),x2:r+B.gridSpace-t.side(n,i),y2:e}},this.squares[2]=function(r,e,i,n,o,s){return{x1:r+t.side(i,n),y1:e,x2:r+B.gridSpace,y2:e+B.gridSpace-t.side(s,n)}},this.squares[3]=function(r,e,i,n,o,s){return{x1:r,y1:e+B.gridSpace-t.side(o,i),x2:r+B.gridSpace,y2:e+B.gridSpace-t.side(s,n)}},this.squares[4]=function(r,e,i,n,o,s){return{x1:r,y1:e+t.side(i,o),x2:r+B.gridSpace-t.side(s,o),y2:e+B.gridSpace}},this.squares[5]=function(r,e,i,n,o,s){return{x1:r+B.gridSpace-t.side(n,i),y1:e,x2:r+B.gridSpace-t.side(s,o),y2:e+B.gridSpace}},this.squares[6]=function(t,r,e,i,n,o){return null},this.squares[7]=function(r,e,i,n,o,s){return{x1:r+B.gridSpace-t.side(s,o),y1:e+B.gridSpace,x2:r+B.gridSpace,y2:e+B.gridSpace-t.side(s,n)}},this.squares[8]=function(r,e,i,n,o,s){return{x1:r+t.side(o,s),y1:e+B.gridSpace,x2:r+B.gridSpace,y2:e+t.side(n,s)}},this.squares[9]=function(t,r,e,i,n,o){return null},this.squares[10]=function(r,e,i,n,o,s){return{x1:r+t.side(i,n),y1:e,x2:r+t.side(o,s),y2:e+B.gridSpace}},this.squares[11]=function(r,e,i,n,o,s){return{x1:r,y1:e+B.gridSpace-t.side(o,i),x2:r+t.side(o,s),y2:e+B.gridSpace}},this.squares[12]=function(r,e,i,n,o,s){return{x1:r,y1:e+t.side(i,o),x2:r+B.gridSpace,y2:e+t.side(n,s)}},this.squares[13]=function(r,e,i,n,o,s){return{x1:r+B.gridSpace-t.side(n,i),y1:e,x2:r+B.gridSpace,y2:e+t.side(n,s)}},this.squares[14]=function(r,e,i,n,o,s){return{x1:r,y1:e+t.side(i,o),x2:r+t.side(i,n),y2:e}},this.squares[15]=function(t,r,e,i,n,o){return null}},t}(),A=function(){function t(t,r,e,i,n,o){this.x=r,this.y=e,this.vx=i,this.vy=n,this.r=o,this.p=t}return t.prototype.draw=function(){this.p.circle(this.x,this.y,this.r)},t}(),B={gridSpace:10,strength:1.8,stickyVal:.2,showGrid:!1,showPoints:!0,colors:null},W=function(t){t.preload=function(){},t.setup=function(){var r=t._userNode.offsetWidth,e=t._userNode.offsetHeight;t.createCanvas(r,e);L=new z(t,40,4,65,35),function(t){var r=t.createCheckbox(" Grid",B.showGrid);r.position(10,60),r.style("color","white"),r.style("font-weight","bold"),(G=t.createSlider(5,50,10,1)).position(80,60),r.changed((function(){B.showGrid=r.checked()}));var e=t.createCheckbox(" Points",B.showPoints);e.position(10,90),e.style("color","white"),e.style("font-weight","bold"),e.changed((function(){B.showPoints=e.checked()}));var i=t.createSelect();i.position(10,10),i.option("rainbow",""),i.option("red",["red","orange"]),i.option("green",["yellow","green"]),i.option("blue",["blue","indigo","violet"]),i.changed((function(){var r=i.value(),e=""===r?null:r.split(",").map((function(r){return t.color(r)}));L.setColors(e),B.colors=e}))}(t),t.frameRate(30)},t.windowResized=function(){var r=t._userNode.offsetWidth,e=t._userNode.offsetHeight;t.createCanvas(r,e),L.setColors(B.colors)},t.draw=function(){t.background(1);var r=t.color("white");r.setAlpha(150);var e=t.color("#f00");B.gridSpace=G.value(),L.move(),B.showPoints&&L.drawPoints(r),B.showGrid&&L.drawGrid(e),L.draw(t),t.textSize(15),t.noStroke(),t.fill(255),t.text("fps: "+t.frameRate(),10,50)}};function N(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(i){var s=r(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return e(this,n)}}function T(t){var r;return{c:function(){r=v("original marching squares demo")},l:function(t){r=S(t,"original marching squares demo")},m:function(t,e){d(t,r,e)},d:function(t){t&&y(r)}}}function _(t){var r,e=new j({props:{id:"marchingCubes",sketch:W}});return{c:function(){c(e.$$.fragment)},l:function(t){f(e.$$.fragment,t)},m:function(t,i){p(e,t,i),r=!0},p:q,i:function(t){r||(g(e.$$.fragment,t),r=!0)},o:function(t){m(e.$$.fragment,t),r=!1},d:function(t){$(e,t)}}}function F(t){var r;return{c:function(){r=v("Source")},l:function(t){r=S(t,"Source")},m:function(t,e){d(t,r,e)},d:function(t){t&&y(r)}}}function I(t){var r,e,i,n,o,s,a=new b({props:{href:"marching-squares",$$slots:{default:[T]},$$scope:{ctx:t}}}),l=new R({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),q=new M({props:{href:"https://github.com/Gaweph/p5-live-examples/tree/master/Random/MarchingCubes",$$slots:{default:[F]},$$scope:{ctx:t}}});return{c:function(){r=v("This is an improvement over the\r\n    "),c(a.$$.fragment),e=v("\r\n    . It includes Linear interpolation which produces a smoother mroe fluid\r\n    movement\r\n    "),c(l.$$.fragment),i=u(),n=x("br"),o=u(),c(q.$$.fragment)},l:function(t){r=S(t,"This is an improvement over the\r\n    "),f(a.$$.fragment,t),e=S(t,"\r\n    . It includes Linear interpolation which produces a smoother mroe fluid\r\n    movement\r\n    "),f(l.$$.fragment,t),i=h(t),n=w(t,"BR",{}),o=h(t),f(q.$$.fragment,t)},m:function(t,c){d(t,r,c),p(a,t,c),d(t,e,c),p(l,t,c),d(t,i,c),d(t,n,c),d(t,o,c),p(q,t,c),s=!0},p:function(t,r){var e={};4&r&&(e.$$scope={dirty:r,ctx:t}),a.$set(e);var i={};4&r&&(i.$$scope={dirty:r,ctx:t}),l.$set(i);var n={};4&r&&(n.$$scope={dirty:r,ctx:t}),q.$set(n)},i:function(t){s||(g(a.$$.fragment,t),g(l.$$.fragment,t),g(q.$$.fragment,t),s=!0)},o:function(t){m(a.$$.fragment,t),m(l.$$.fragment,t),m(q.$$.fragment,t),s=!1},d:function(t){t&&y(r),$(a,t),t&&y(e),$(l,t),t&&y(i),t&&y(n),t&&y(o),$(q,t)}}}function D(t){var r,e=new C({props:{$$slots:{default:[I]},$$scope:{ctx:t}}});return{c:function(){c(e.$$.fragment)},l:function(t){f(e.$$.fragment,t)},m:function(t,i){p(e,t,i),r=!0},p:function(t,r){var i={};4&r&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i:function(t){r||(g(e.$$.fragment,t),r=!0)},o:function(t){m(e.$$.fragment,t),r=!1},d:function(t){$(e,t)}}}function H(t){var r,e,i=new k({props:{title:E,tags:t[0],projects:t[1]}}),n=new P({props:{$$slots:{default:[D]},$$scope:{ctx:t}}});return{c:function(){c(i.$$.fragment),r=u(),c(n.$$.fragment)},l:function(t){f(i.$$.fragment,t),r=h(t),f(n.$$.fragment,t)},m:function(t,o){p(i,t,o),d(t,r,o),p(n,t,o),e=!0},p:function(t,r){var e=l(r,1)[0],i={};4&e&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i:function(t){e||(g(i.$$.fragment,t),g(n.$$.fragment,t),e=!0)},o:function(t){m(i.$$.fragment,t),m(n.$$.fragment,t),e=!1},d:function(t){$(i,t),t&&y(r),$(n,t)}}}var E="Marching Squares Linear Interpolation";function J(t){return[["p5"],[]]}var K=function(r){t(c,a);var e=N(c);function c(t){var r;return i(this,c),r=e.call(this),n(s(r),t,J,H,o,{}),r}return c}();export default K;
