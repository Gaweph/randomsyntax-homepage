function e(e){return Promise.all(e.map((function(e){return new Promise((function(t,n){var r=new URL(e,import.meta.url),l=document.baseURI;if(!l){var o=document.getElementsByTagName("base");l=o.length?o[0].href:document.URL}var u=(""+r).substring(l.length),a=document.querySelector('link[rel=stylesheet][href="'+u+'"]')||document.querySelector('link[rel=stylesheet][href="'+r+'"]');a||((a=document.createElement("link")).rel="stylesheet",a.href=r,document.head.appendChild(a)),a.sheet?t():(a.addEventListener("load",(function(){return t()})),a.addEventListener("error",n))}))})))}export default e;
//# sourceMappingURL=inject_styles-0e3d93cc.js.map
