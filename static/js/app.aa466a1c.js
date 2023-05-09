(function(){"use strict";var e={721:function(e,n,t){var r=t(963),a=t(252),o=t(262),u=t(577),i=t(201),c={class:"main-tab"},l=(0,a.aZ)({__name:"MainTab",setup:function(e){var n=(0,i.tv)(),t=function(){return n.push("/")},r=function(){return n.push("/game/game1")},o=function(){return n.push("/effects/linearBall")};return function(e,n){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("button",{class:"btn one",onClick:t},"Home"),(0,a._)("button",{class:"btn two",onClick:r},"Game"),(0,a._)("button",{class:"btn three",onClick:o},"Effects")])}}}),f=t(744);const s=(0,f.Z)(l,[["__scopeId","data-v-58028cd6"]]);var m=s,d=t(999),p=["className"],v=(0,a.aZ)({__name:"App",setup:function(e){return function(e,n){var t=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(m),(0,a.Wm)((0,o.SU)(d.Z),{active:!0},{default:(0,a.w5)((function(e){return[(0,a._)("div",{style:(0,u.j5)([{color:"#fff","pointer-events":"none"},e.style]),className:e.className}," O ",12,p)]})),_:1}),((0,a.wg)(),(0,a.j4)(a.Ob,{exclude:"Home"},[(0,a.Wm)(t)],1024))],64)}}});const h=v;var b=h,g={id:"draw-border"},y=(0,a.aZ)({__name:"BorderClick",props:{message:{default:"Hover me"}},setup:function(e){var n=e;return function(e,t){return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("button",null,(0,u.zw)(n.message),1)])}}});const _=(0,f.Z)(y,[["__scopeId","data-v-e4d0ac86"]]);var w=_,k={id:"home"},C=(0,a.aZ)({__name:"Home",props:{},emits:["change","delete"],setup:function(e,n){n.emit;var t=(0,i.tv)(),r=(0,o.iH)("Game Start"),c=(0,o.qj)(["打地鼠","踩白块","贪吃蛇","奔跑吧陈签"]),l=(0,o.iH)("auto"),f=(0,o.iH)(0),s=(0,o.iH)(-1),m=(0,o.iH)(20),d=(0,o.iH)(40),p=(0,o.iH)(0),v=(0,o.iH)(0),h=function(){if("Game Start"===r.value)l.value="none",p.value+=1,b(),g();else switch(s.value){case 0:t.push("/game");break;case 1:t.push("/game/game2");break;case 2:t.push("/game/game3");break;case 3:t.push("/game/game4");break}},b=function(){f.value=Math.ceil(4*Math.random());var e=s.value,n=c.length;e+=1,e>n-1&&(e=0),s.value=e},g=function(){p.value>m.value+10&&f.value===s.value?(clearTimeout(v.value),p.value=0,r.value="Go!!!",l.value="auto"):(p.value<m.value-20?d.value-=4:d.value+=10,v.value=setTimeout(h,d.value))};(0,o.iH)(0);return function(e,n){return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",null,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c,(function(e,n){return(0,a.wg)(),(0,a.iD)("li",{class:(0,u.C_)({active:n===s.value}),key:n},(0,u.zw)(e),3)})),128))])]),(0,a.Wm)(w,{class:"borderClick",message:r.value,onClick:h,style:(0,u.j5)({pointerEvents:l.value})},null,8,["message","style"])])}}});const O=(0,f.Z)(C,[["__scopeId","data-v-0716bebc"]]);var j=O,H=function(){return t.e(441).then(t.bind(t,441))},E=function(){return t.e(122).then(t.bind(t,122))},S=function(){return t.e(748).then(t.bind(t,748))},T=function(){return t.e(211).then(t.bind(t,211))},B=function(){return t.e(656).then(t.bind(t,146))},A=function(){return t.e(240).then(t.bind(t,240))},N=function(){return t.e(444).then(t.bind(t,444))},G=function(){return t.e(124).then(t.bind(t,124))},D=function(){return t.e(691).then(t.bind(t,691))},Z=[{path:"",redirect:"/home"},{path:"/home",component:j},{path:"/effects",component:H,children:[{path:"linearBall",component:E,name:"LinearBall"},{path:"colorfulBall",component:S,name:"ColorfulBall"},{path:"colorfulBall",component:S,name:"ColorfulBall"}]},{path:"/game",component:T,children:[{path:"game1",component:B,name:"Game1"},{path:"game2",component:A,name:"Game2"},{path:"game3",component:N,name:"Game3"},{path:"game4",component:G,name:"Game4"},{path:"game5",component:D,name:"Game5"}]}],x=(0,i.p7)({history:(0,i.r5)(),routes:Z}),P=x;(0,r.ri)(b).use(P).mount("#app")}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,o){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],a=e[f][1],o=e[f][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||u>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<u&&(u=o));if(i){e.splice(f--,1);var l=a();void 0!==l&&(n=l)}}return n}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,a,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"static/js/"+e+"."+{122:"3dd28765",124:"fbb9c926",211:"175156eb",240:"f04fb059",441:"7355b208",444:"6291a456",656:"4f18548d",691:"1a86722a",748:"ae16e260"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"static/css/"+e+"."+{122:"9da08587",124:"62a43a85",211:"a01cdd66",240:"b28f3b3e",441:"6741697b",444:"ae20effb",656:"c2ebb3ce",748:"cf19313d"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="web_game:";t.l=function(r,a,o,u){if(e[r])e[r].push(a);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+o){i=s;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+o),i.src=r),e[r]=[a];var m=function(n,t){i.onerror=i.onload=null,clearTimeout(d);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(t)})),n)return n(t)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e=function(e,n,t,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)t();else{var u=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=i,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=o,a.href=n,document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var a=t[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){a=u[r],o=a.getAttribute("data-href");if(o===e||o===n)return a}},r=function(r){return new Promise((function(a,o){var u=t.miniCssF(r),i=t.p+u;if(n(u,i))return a();e(r,i,a,o)}))},a={143:0};t.f.miniCss=function(e,n){var t={122:1,124:1,211:1,240:1,441:1,444:1,656:1,748:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=r(e).then((function(){a[e]=0}),(function(n){throw delete a[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(t,r){a=e[n]=[t,r]}));r.push(a[2]=o);var u=t.p+t.u(n),i=new Error,c=function(r){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+o+": "+u+")",i.name="ChunkLoadError",i.type=o,i.request=u,a[1](i)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,o,u=r[0],i=r[1],c=r[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(c)var f=c(t)}for(n&&n(r);l<u.length;l++)o=u[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(f)},r=self["webpackChunkweb_game"]=self["webpackChunkweb_game"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(721)}));r=t.O(r)})();
//# sourceMappingURL=app.aa466a1c.js.map