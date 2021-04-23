import{S as t,i as e,s as r,c as i,a as s,k as o,g as n,p as a,n as c,r as h,u as p,v as u,j as d,t as l,e as f,h as g,d as m,q as $}from"./start-58671407.js";import{P as y,a as x}from"./Post-Contents.svelte-e489b913.js";import{P as v}from"./Post-Section.svelte-bb286e68.js";import{L as S}from"./Link-External.svelte-3d7b7f7c.js";import{L as w}from"./Link.svelte-84cdb01d.js";import{F as q,P as b}from"./Full-Screen.svelte-cf15cb52.js";import"./Post-Tags-Projects.svelte-0a7c383c.js";import"./Icon.svelte-469e1454.js";import"./free-solid-svg-icons-650f6a7f.js";var k,M,P=function(){function t(){}return t.getColorVector=function(t,e){return t.createVector(t.red(e),t.green(e),t.blue(e))},t.rainbowColorBase=function(t){return[t.color("red"),t.color("orange"),t.color("yellow"),t.color("green"),t.color(38,58,150),t.color("indigo"),t.color("violet")]},t.getColorsArray=function(e,r,i){var s=this;void 0===i&&(i=null),null==i&&(i=t.rainbowColorBase(e));for(var o=i.map((function(t){return s.getColorVector(e,t)})),n=new Array,a=0;a<r;a++){var c=a/r*(o.length-1),h=Math.floor(c),p=c-h,u=this.getColorByPercentage(o[h],o[h+1],p);n.push(e.color(u.x,u.y,u.z))}return n},t.getColorByPercentage=function(t,e,r){var i=t.copy(),s=e.copy().sub(i).mult(r);return i.add(s)},t}(),C=function(){function t(t,e,r,i,s){this.numPoints=e,this.maxSpeed=r,this.sizeRange=i,this.minSize=s,this.p=t,this.setColors(),this.setupSquares(),this.setupPoints(),this.generateLines()}return t.prototype.move=function(){for(var t=0,e=this.points;t<e.length;t++){var r=e[t];r.x+=r.vx,r.y+=r.vy,(r.x<0||r.x>this.p.width)&&(r.vx*=-1),(r.y<0||r.y>this.p.height)&&(r.vy*=-1)}this.generateLines()},t.prototype.setColors=function(t){void 0===t&&(t=null),this.colorsArray=P.getColorsArray(this.p,this.p.floor(this.p.width),t)},t.prototype.draw=function(){this.p.strokeWeight(2);for(var t=0,e=this.lines;t<e.length;t++){var r=e[t];this.p.stroke(this.colorsArray[this.p.floor(r.x1)]),this.p.line(r.x1,r.y1,r.x2,r.y2)}},t.prototype.drawPoints=function(t){this.p.stroke(t),this.p.strokeWeight(.5),this.p.noFill();for(var e=0,r=this.points;e<r.length;e++){r[e].draw()}},t.prototype.drawGrid=function(t){this.p.stroke(t),this.p.strokeWeight(.4);for(var e=0;e<this.p.width/L.gridSpace;e++)this.p.line(e*L.gridSpace,0,e*L.gridSpace,this.p.height);for(var r=0;r<this.p.height/L.gridSpace;r++)this.p.line(0,r*L.gridSpace,this.p.width,r*L.gridSpace)},t.prototype.setupPoints=function(){var t;for(this.points=[],t=0;t<this.numPoints;t++){var e=Math.random()*this.p.width,r=Math.random()*this.p.height,i=Math.random()*this.maxSpeed-1,s=Math.random()*this.maxSpeed-1,o=Math.random()*this.sizeRange+this.minSize;this.points[t]=new j(this.p,e,r,i,s,o)}},t.prototype.generateLines=function(t){for(var e,r,i,s,o=[],n=Math.ceil(this.p.width/L.gridSpace),a=Math.ceil(this.p.height/L.gridSpace),c=0;c<n;c++){o[c]=[];for(var h=0;h<a;h++)o[c][h]=0}for(var p=0,u=this.points;p<u.length;p++)for(var d,l=(t=u[p]).r/2*L.strength,f=Math.ceil(2*l/L.gridSpace),g=(c=Math.max(0,Math.floor((t.x-l)/L.gridSpace)),h=Math.max(0,Math.floor((t.y-l)/L.gridSpace)),Math.min(n,c+1+f)),m=Math.min(a,h+1+f);c<g;c++)for(d=h;d<m;d++){var $=this.p.dist(t.x,t.y,c*L.gridSpace,d*L.gridSpace),y=t.r-$;o[c][d]+=Math.max(0,y)}this.lines=[];for(n=Math.ceil(this.p.width/L.gridSpace),a=Math.ceil(this.p.height/L.gridSpace),c=0;c<n-1;c++)for(h=0;h<a-1;h++){e=o[c][h]/100,r=o[c+1][h]/100,i=o[c][h+1]/100,s=o[c+1][h+1]/100;var x=(e>=L.stickyVal?1:0)+(r>=L.stickyVal?2:0)+(i>=L.stickyVal?4:0)+(s>=L.stickyVal?8:0),v=this.squares[x](c*L.gridSpace,h*L.gridSpace,e,r,i,s);null!=v&&this.lines.push(v)}},t.prototype.side=function(t,e){return L.gridSpace*((L.stickyVal-t)/(e-t))},t.prototype.setupSquares=function(){var t=this;this.squares=[],this.squares[0]=function(t,e,r,i,s,o){return null},this.squares[1]=function(e,r,i,s,o,n){return{x1:e,y1:r+L.gridSpace-t.side(o,i),x2:e+L.gridSpace-t.side(s,i),y2:r}},this.squares[2]=function(e,r,i,s,o,n){return{x1:e+t.side(i,s),y1:r,x2:e+L.gridSpace,y2:r+L.gridSpace-t.side(n,s)}},this.squares[3]=function(e,r,i,s,o,n){return{x1:e,y1:r+L.gridSpace-t.side(o,i),x2:e+L.gridSpace,y2:r+L.gridSpace-t.side(n,s)}},this.squares[4]=function(e,r,i,s,o,n){return{x1:e,y1:r+t.side(i,o),x2:e+L.gridSpace-t.side(n,o),y2:r+L.gridSpace}},this.squares[5]=function(e,r,i,s,o,n){return{x1:e+L.gridSpace-t.side(s,i),y1:r,x2:e+L.gridSpace-t.side(n,o),y2:r+L.gridSpace}},this.squares[6]=function(t,e,r,i,s,o){return null},this.squares[7]=function(e,r,i,s,o,n){return{x1:e+L.gridSpace-t.side(n,o),y1:r+L.gridSpace,x2:e+L.gridSpace,y2:r+L.gridSpace-t.side(n,s)}},this.squares[8]=function(e,r,i,s,o,n){return{x1:e+t.side(o,n),y1:r+L.gridSpace,x2:e+L.gridSpace,y2:r+t.side(s,n)}},this.squares[9]=function(t,e,r,i,s,o){return null},this.squares[10]=function(e,r,i,s,o,n){return{x1:e+t.side(i,s),y1:r,x2:e+t.side(o,n),y2:r+L.gridSpace}},this.squares[11]=function(e,r,i,s,o,n){return{x1:e,y1:r+L.gridSpace-t.side(o,i),x2:e+t.side(o,n),y2:r+L.gridSpace}},this.squares[12]=function(e,r,i,s,o,n){return{x1:e,y1:r+t.side(i,o),x2:e+L.gridSpace,y2:r+t.side(s,n)}},this.squares[13]=function(e,r,i,s,o,n){return{x1:e+L.gridSpace-t.side(s,i),y1:r,x2:e+L.gridSpace,y2:r+t.side(s,n)}},this.squares[14]=function(e,r,i,s,o,n){return{x1:e,y1:r+t.side(i,o),x2:e+t.side(i,s),y2:r}},this.squares[15]=function(t,e,r,i,s,o){return null}},t}(),j=function(){function t(t,e,r,i,s,o){this.x=e,this.y=r,this.vx=i,this.vy=s,this.r=o,this.p=t}return t.prototype.draw=function(){this.p.circle(this.x,this.y,this.r)},t}(),L={gridSpace:10,strength:1.8,stickyVal:.2,showGrid:!1,showPoints:!0,colors:null},V=function(t){t.preload=function(){},t.setup=function(){var e=t._userNode.offsetWidth,r=t._userNode.offsetHeight;t.createCanvas(e,r);k=new C(t,40,4,65,35),function(t){var e=t.createCheckbox(" Grid",L.showGrid);e.position(10,60),e.style("color","white"),e.style("font-weight","bold"),(M=t.createSlider(5,50,10,1)).position(80,60),e.changed((function(){L.showGrid=e.checked()}));var r=t.createCheckbox(" Points",L.showPoints);r.position(10,90),r.style("color","white"),r.style("font-weight","bold"),r.changed((function(){L.showPoints=r.checked()}));var i=t.createSelect();i.position(10,10),i.option("rainbow",""),i.option("red",["red","orange"]),i.option("green",["yellow","green"]),i.option("blue",["blue","indigo","violet"]),i.changed((function(){var e=i.value(),r=""===e?null:e.split(",").map((function(e){return t.color(e)}));k.setColors(r),L.colors=r}))}(t),t.frameRate(30)},t.windowResized=function(){var e=t._userNode.offsetWidth,r=t._userNode.offsetHeight;t.createCanvas(e,r),k.setColors(L.colors)},t.draw=function(){t.background(1);var e=t.color("white");e.setAlpha(150);var r=t.color("#f00");L.gridSpace=M.value(),k.move(),L.showPoints&&k.drawPoints(e),L.showGrid&&k.drawGrid(r),k.draw(t),t.textSize(15),t.noStroke(),t.fill(255),t.text("fps: "+t.frameRate(),10,50)}};function G(t){let e;return{c(){e=l("original marching squares demo")},l(t){e=g(t,"original marching squares demo")},m(t,r){c(t,e,r)},d(t){t&&d(e)}}}function z(t){let e,r;return e=new b({props:{id:"marchingCubes",sketch:V}}),{c(){i(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,i){a(e,t,i),r=!0},p:$,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){u(e,t)}}}function R(t){let e;return{c(){e=l("Source")},l(t){e=g(t,"Source")},m(t,r){c(t,e,r)},d(t){t&&d(e)}}}function A(t){let e,r,$,y,x,v,b,k,M;return r=new w({props:{href:"marching-squares",$$slots:{default:[G]},$$scope:{ctx:t}}}),y=new q({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),k=new S({props:{href:"https://github.com/Gaweph/p5-live-examples/tree/master/Random/MarchingCubes",$$slots:{default:[R]},$$scope:{ctx:t}}}),{c(){e=l("This is an improvement over the\r\n    "),i(r.$$.fragment),$=l("\r\n    . It includes Linear interpolation which produces a smoother mroe fluid\r\n    movement\r\n    "),i(y.$$.fragment),x=s(),v=f("br"),b=s(),i(k.$$.fragment)},l(t){e=g(t,"This is an improvement over the\r\n    "),o(r.$$.fragment,t),$=g(t,"\r\n    . It includes Linear interpolation which produces a smoother mroe fluid\r\n    movement\r\n    "),o(y.$$.fragment,t),x=n(t),v=m(t,"BR",{}),b=n(t),o(k.$$.fragment,t)},m(t,i){c(t,e,i),a(r,t,i),c(t,$,i),a(y,t,i),c(t,x,i),c(t,v,i),c(t,b,i),a(k,t,i),M=!0},p(t,e){const i={};4&e&&(i.$$scope={dirty:e,ctx:t}),r.$set(i);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),y.$set(s);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),k.$set(o)},i(t){M||(h(r.$$.fragment,t),h(y.$$.fragment,t),h(k.$$.fragment,t),M=!0)},o(t){p(r.$$.fragment,t),p(y.$$.fragment,t),p(k.$$.fragment,t),M=!1},d(t){t&&d(e),u(r,t),t&&d($),u(y,t),t&&d(x),t&&d(v),t&&d(b),u(k,t)}}}function B(t){let e,r;return e=new v({props:{$$slots:{default:[A]},$$scope:{ctx:t}}}),{c(){i(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,i){a(e,t,i),r=!0},p(t,r){const i={};4&r&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){u(e,t)}}}function W(t){let e,r,l,f;return e=new y({props:{title:I,tags:t[0],projects:t[1]}}),l=new x({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),{c(){i(e.$$.fragment),r=s(),i(l.$$.fragment)},l(t){o(e.$$.fragment,t),r=n(t),o(l.$$.fragment,t)},m(t,i){a(e,t,i),c(t,r,i),a(l,t,i),f=!0},p(t,[e]){const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),l.$set(r)},i(t){f||(h(e.$$.fragment,t),h(l.$$.fragment,t),f=!0)},o(t){p(e.$$.fragment,t),p(l.$$.fragment,t),f=!1},d(t){u(e,t),t&&d(r),u(l,t)}}}const I="Marching Squares Linear Interpolation";function N(t){return[["p5"],[]]}export default class extends t{constructor(t){super(),e(this,t,N,W,r,{})}}
//# sourceMappingURL=marching-squares-linear-interpolation.svelte-968d3c96.js.map
