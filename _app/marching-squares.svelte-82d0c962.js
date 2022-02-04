import{S as t,i as r,s as e,c as i,b as n,m as o,j as a,r as s,p as c,v as f,w as l,x as g,l as u,t as d,e as $,k as h,g as m,h as p,q as S,u as v}from"./start-7dcb1d88.js";import{P as y,a as b}from"./Post-Contents.svelte-2f658c6b.js";import{C as w}from"./Callout.svelte-f08a0822.js";import{L as x}from"./Link-External.svelte-fd7ba10b.js";import{L as z}from"./Link.svelte-619a0453.js";import{F as M,P as C}from"./Full-Screen.svelte-8e6b376e.js";import"./Post-Tags-Projects.svelte-af105f1b.js";import"./free-solid-svg-icons-650f6a7f.js";var P=function(){function t(){}return t.getColorVector=function(t,r){return r.createVector(r.red(t),r.green(t),r.blue(t))},t.rainbowColorBase=function(t){return[t.color("red"),t.color("orange"),t.color("yellow"),t.color("green"),t.color(38,58,150),t.color("indigo"),t.color("violet")]},t.getColorsArray=function(r,e,i){var n=this;void 0===i&&(i=null),null==i&&(i=t.rainbowColorBase(r));for(var o=i.map((function(t){return n.getColorVector(t,r)})),a=new Array,s=0;s<e;s++){var c=s/e*(o.length-1),f=Math.floor(c),l=c-f,g=this.getColorByPercentage(o[f],o[f+1],l);a.push(r.color(g.x,g.y,g.z))}return a},t.getColorByPercentage=function(t,r,e){var i=t.copy(),n=r.copy().sub(i).mult(e);return i.add(n)},t}(),j=function(){function t(){}return t.drawForCombination=function(r,e,i,n,o){var a=(e+1)*o.gridSize,s=(i+1)*o.gridSize,c=e*o.gridSize,f=i*o.gridSize,l=a-o.gridSize/2,g=s-o.gridSize/2;"0000"==n||("0001"==n?r.line(c,g,l,f):"0010"==n?r.line(a-o.gridSize/2,f,a,g):"0011"==n?r.line(c,g,a,g):"0100"==n?r.line(a-o.gridSize/2,s,a,s-o.gridSize/2):"0101"==n?(t.drawForCombination(r,e,i,"0001",o),t.drawForCombination(r,e,i,"0100",o)):"0110"==n?r.line(l,f,l,s):"0111"==n||"1000"==n?r.line(c,s-o.gridSize/2,l,s):"1001"==n?r.line(a-o.gridSize/2,f,a-o.gridSize/2,s):"1010"==n?(t.drawForCombination(r,e,i,"0010",o),t.drawForCombination(r,e,i,"1000",o)):"1011"==n?r.line(a-o.gridSize/2,s,a,s-o.gridSize/2):"1100"==n?r.line(c,s-o.gridSize/2,a,s-o.gridSize/2):"1101"==n?r.line(l,f,a,g):"1110"==n?r.line(l,f,c,g):"1111"==n||console.log("bad number"+n))},t.getCurrentPointArray=function(t,r,e){for(var i=[],n=0;n<t.height/e.gridSize;n++){i[n]=[];for(var o=0;o<t.width/e.gridSize;o++)i[n][o]=0}for(var a=t.width/e.gridSize,s=t.height/e.gridSize,c=0,f=r;c<f.length;c++){var l=f[c],g=Math.max(0,t.floor((l.x-l.r)/e.gridSize)),u=Math.max(0,t.floor((l.y-l.r)/e.gridSize)),d=Math.min(a-1,t.ceil((l.x+l.r)/e.gridSize)),$=Math.min(s-1,t.ceil((l.y+l.r)/e.gridSize));for(n=u;n<=$;n++)for(o=g;o<=d;o++){var h=l.inside(o*e.gridSize,n*e.gridSize);if(h>=1)try{i[n][o]=Math.max(h,i[n][o])}catch(t){console.log(n,o)}}}return i},t.drawSquares=function(r,e,i){for(var n=1;n<e.length-1;n++)for(var o=e[n],a=1;a<o.length-1;a++){var s=e[n][a]>0?"1":"0",c=e[n][a+1]>0?"1":"0",f=e[n+1][a+1]>0?"1":"0",l=e[n+1][a]>0?"1":"0";r.stroke(i.colorsArray[r.floor(a*i.gridSize)]),t.drawForCombination(r,a,n,l+f+c+s,i)}},t}(),A=function(){function t(t,r,e,i,n,o,a){this.p=t,this.pointX=r,this.pointY=e,this.vx=i,this.vy=n,this.radius=o,this.PARAMS=a}return t.prototype.inside=function(t,r){return this.r*this.r/((t-this.x)*(t-this.x)+(r-this.y)*(r-this.y))},t.prototype.move=function(){this.pointX+=this.vx/this.p.width,this.pointY+=this.vy/this.p.height,(this.x-this.r<0||this.x+this.r>this.p.width)&&(this.vx*=-1),(this.y-this.r<0||this.y+this.r>this.p.height)&&(this.vy*=-1)},Object.defineProperty(t.prototype,"r",{get:function(){return this.radius*this.PARAMS.maxPointSize},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return this.pointX*this.p.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.pointY*this.p.height},enumerable:!0,configurable:!0}),t}();let q,k,F;var L=function(t){function r(){q.colorsArray=P.getColorsArray(t,t.floor(t.width)),q.maxPointSize=t.width/15}q={gridSize:15,maxPointSize:10,numberOfpoints:100,colorsArray:[]},t.preload=function(){},t.setup=function(){var e=t._userNode.offsetWidth,i=t._userNode.offsetHeight;t.createCanvas(e,i),k=[];for(var n=0;n<q.numberOfpoints;n++){var o=Math.random(),a=Math.random(),s=2*Math.random()-1,c=2*Math.random()-1,f=Math.random();k.push(new A(t,o,a,s,c,f,q))}F=t.createSlider(2,30,q.gridSize,2),F.position(10,10),r()},t.windowResized=function(){var e=t._userNode.offsetWidth,i=t._userNode.offsetHeight;t.createCanvas(e,i),r()},t.draw=function(){t.background(1),q.gridSize=F.value(),t.strokeWeight(2);var r=j.getCurrentPointArray(t,k,q);j.drawSquares(t,r,q);for(var e=0,i=k;e<i.length;e++){i[e].move()}t.textSize(15),t.noStroke(),t.fill(255),t.text("fps: "+t.frameRate(),10,50)}};function R(t){let r;return{c(){r=d("Metaballs and Marching Squares")},l(t){r=h(t,"Metaballs and Marching Squares")},m(t,e){c(t,r,e)},d(t){t&&u(r)}}}function O(t){let r,e;return r=new C({props:{sketch:L}}),{c(){i(r.$$.fragment)},l(t){o(r.$$.fragment,t)},m(t,i){s(r,t,i),e=!0},p:v,i(t){e||(f(r.$$.fragment,t),e=!0)},o(t){l(r.$$.fragment,t),e=!1},d(t){g(r,t)}}}function B(t){let r;return{c(){r=d("Source")},l(t){r=h(t,"Source")},m(t,e){c(t,r,e)},d(t){t&&u(r)}}}function N(t){let r;return{c(){r=d("Linear interpolation version")},l(t){r=h(t,"Linear interpolation version")},m(t,e){c(t,r,e)},d(t){t&&u(r)}}}function W(t){let r,e,n,a;return e=new z({props:{href:"marching-squares-linear-interpolation",$$slots:{default:[N]},$$scope:{ctx:t}}}),{c(){r=d("A Less blocky\n    "),i(e.$$.fragment),n=d("\n    can be found in a future post")},l(t){r=h(t,"A Less blocky\n    "),o(e.$$.fragment,t),n=h(t,"\n    can be found in a future post")},m(t,i){c(t,r,i),s(e,t,i),c(t,n,i),a=!0},p(t,r){const i={};4&r&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i(t){a||(f(e.$$.fragment,t),a=!0)},o(t){l(e.$$.fragment,t),a=!1},d(t){t&&u(r),g(e,t),t&&u(n)}}}function _(t){let r,e,v,y,b,z,C,P,j,A,q,k,F,L;return e=new x({props:{href:"http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/",$$slots:{default:[R]},$$scope:{ctx:t}}}),C=new M({props:{$$slots:{default:[O]},$$scope:{ctx:t}}}),q=new x({props:{href:"https://github.com/Gaweph/p5-live-examples/tree/master/Random/MarchingSquares",$$slots:{default:[B]},$$scope:{ctx:t}}}),F=new w({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){r=d("My initial implementation of the **Marching Squares** algorithm, I was\n  insipred after reading\n  "),i(e.$$.fragment),v=d("\n  by\n  "),y=$("strong"),b=d("Jamie Wong"),z=n(),i(C.$$.fragment),P=n(),j=$("br"),A=n(),i(q.$$.fragment),k=n(),i(F.$$.fragment)},l(t){r=h(t,"My initial implementation of the **Marching Squares** algorithm, I was\n  insipred after reading\n  "),o(e.$$.fragment,t),v=h(t,"\n  by\n  "),y=m(t,"STRONG",{});var i=p(y);b=h(i,"Jamie Wong"),i.forEach(u),z=a(t),o(C.$$.fragment,t),P=a(t),j=m(t,"BR",{}),A=a(t),o(q.$$.fragment,t),k=a(t),o(F.$$.fragment,t)},m(t,i){c(t,r,i),s(e,t,i),c(t,v,i),c(t,y,i),S(y,b),c(t,z,i),s(C,t,i),c(t,P,i),c(t,j,i),c(t,A,i),s(q,t,i),c(t,k,i),s(F,t,i),L=!0},p(t,r){const i={};4&r&&(i.$$scope={dirty:r,ctx:t}),e.$set(i);const n={};4&r&&(n.$$scope={dirty:r,ctx:t}),C.$set(n);const o={};4&r&&(o.$$scope={dirty:r,ctx:t}),q.$set(o);const a={};4&r&&(a.$$scope={dirty:r,ctx:t}),F.$set(a)},i(t){L||(f(e.$$.fragment,t),f(C.$$.fragment,t),f(q.$$.fragment,t),f(F.$$.fragment,t),L=!0)},o(t){l(e.$$.fragment,t),l(C.$$.fragment,t),l(q.$$.fragment,t),l(F.$$.fragment,t),L=!1},d(t){t&&u(r),g(e,t),t&&u(v),t&&u(y),t&&u(z),g(C,t),t&&u(P),t&&u(j),t&&u(A),g(q,t),t&&u(k),g(F,t)}}}function V(t){let r,e,d,$;return r=new y({props:{title:X,tags:t[0],projects:t[1]}}),d=new b({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){i(r.$$.fragment),e=n(),i(d.$$.fragment)},l(t){o(r.$$.fragment,t),e=a(t),o(d.$$.fragment,t)},m(t,i){s(r,t,i),c(t,e,i),s(d,t,i),$=!0},p(t,[r]){const e={};4&r&&(e.$$scope={dirty:r,ctx:t}),d.$set(e)},i(t){$||(f(r.$$.fragment,t),f(d.$$.fragment,t),$=!0)},o(t){l(r.$$.fragment,t),l(d.$$.fragment,t),$=!1},d(t){g(r,t),t&&u(e),g(d,t)}}}const X="Marching Squares";function Y(t){return[["p5"],[]]}export default class extends t{constructor(t){super(),r(this,t,Y,V,e,{})}}
//# sourceMappingURL=marching-squares.svelte-82d0c962.js.map
