(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)r=o[u],s[r]&&f.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return l.p+"js/"+({readmode:"readmode"}[t]||t)+"."+{readmode:"b715726b"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={readmode:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({readmode:"readmode"}[t]||t)+"."+{readmode:"fe81e7ae"}[t]+".css",r=l.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var o=s[i],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===n||c===r))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){o=u[i],c=o.getAttribute("data-href");if(c===n||c===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.request=n,a(s)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){r[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=i);var c,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,l.nc&&f.setAttribute("nonce",l.nc),f.src=o(t),c=function(e){f.onerror=f.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}s[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:f})},12e4);f.onerror=f.onload=c,u.appendChild(f)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"19f6":function(t,e,a){"use strict";var n=a("a34a"),r=a.n(n),s=a("bc3a"),i=a.n(s);function o(t){return function(){var e=this,a=arguments;return new Promise(function(n,r){var s=t.apply(e,a);function i(t,e){try{var a=s[t](e),i=a.value}catch(t){return void r(t)}a.done?n(i):Promise.resolve(i).then(o,l)}function o(t){i("next",t)}function l(t){i("throw",t)}o()})}}function l(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c="https://ai.morejust.media";i.a.defaults.baseURL=c,i.a.interceptors.response.use(function(t){var e=t.data;if(!e)return Promise.reject("Malformed response");var a=e.error,n=l(e,["error"]);return a?Promise.reject("Error: ".concat(n.description)):n}),e["a"]={loadURL:function(t){return i.a.get("/search?q=".concat(t))},parse:function(t){return i.a.get("/parse?url=".concat(t))},analyse:function(){var t=o(r.a.mark(function t(e){var a;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/parse?url=".concat(e));case 2:return a=t.sent,t.abrupt("return",i.a.post("/analyse",a));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},"2b63":function(t,e,a){t.exports=a.p+"img/nasa1965.47de216d.jpg"},"2c30":function(t,e,a){t.exports=a.p+"img/plane.b5d0c929.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("router-view")],1)},i=[],o=a("2877"),l=a("6544"),c=a.n(l),u=a("7496"),f={},d=Object(o["a"])(f,s,i,!1,null,null,null);d.options.__file="App.vue";var p=d.exports;c()(d,{VApp:u["a"]});var v=a("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("section",[n("v-parallax",{attrs:{src:t.nasa,height:"600"}},[n("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:a("cf05"),alt:"more just media",height:"200"}})]),n("h1",{staticClass:"white--text mb-2 display-1 text-xs-center"},[t._v("Reading. Reinvented.")]),n("div",{staticClass:"subheading mb-3 text-xs-center"},[t._v("Powered by morejust.media")]),n("v-btn",{staticClass:"blue lighten-2 mt-5",attrs:{dark:"",large:"",href:"/analyze"}},[t._v("\n          Get Started\n        ")])],1)],1)],1),n("section",{staticStyle:{"background-color":"#fefefe"}},[n("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("div",{staticClass:"text-xs-center"},[n("h2",{staticClass:"headline"},[t._v("We humans are flawed.")]),n("span",{staticClass:"subheading"},[t._v("\n            Fortunately, we humans are smart enough to fix it.\n          ")])])]),n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-text",{staticClass:"text-xs-center"},[n("img",{attrs:{src:"https://airbnb.design/anotherlens/img/balance.gif"}})]),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline text-xs-center"},[t._v("Balance your bias")])]),n("v-card-text",[t._v("\n                  Most of people form prejudices since childhood.\n                  Biases during the life prevents people from thinking openly and making right decisions.\n                  Learn to be independent of prejudices, then you will understand more of this world.\n                ")])],1)],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-text",{staticClass:"text-xs-center"},[n("img",{attrs:{src:"https://airbnb.design/anotherlens/img/opposite.gif"}})]),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Consider the opposite")])]),n("v-card-text",[t._v("\n                  Being only on the one side of the issue, you will never see the whole picture.\n                  You risk to miss a lot of in this case.\n                  Don't restrict your position and you will reach the golden mean.\n                  "),n("br"),n("br"),n("br")])],1)],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-text",{staticClass:"text-xs-center"},[n("img",{attrs:{src:"https://airbnb.design/anotherlens/img/growth.gif"}})]),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline text-xs-center"},[t._v("Embrace growth")])]),n("v-card-text",[t._v("\n                  Embrace the growth to make yourself and the world better!\n                  "),n("br"),n("br"),t._v("\n                  Images are the courtesy of Airbnb 😊\n                  "),n("br"),n("br"),n("br"),n("br")])],1)],1)],1)],1)],1)],1)],1),n("section",[n("v-parallax",{attrs:{src:t.hero,height:"380"}},[n("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[n("div",{staticClass:"headline white--text mb-3 text-xs-center"},[t._v("\n          Want to learn to read again?\n        ")]),n("em",[t._v("\n          Read any article\n        ")]),n("GoRead")],1)],1)],1),n("section",[n("InfoCard")],1),n("v-footer",{staticClass:"red darken-2"},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"white--text ml-3"},[t._v("\n          See more @ "),n("a",{staticClass:"white--text",attrs:{href:"https://github.com/morejust"}},[t._v("morejust")])])])],1)],1)],1)},m=[],b=a("7ae3"),g=a.n(b),x=a("2b63"),y=a.n(x),w=a("2c30"),C=a.n(w),_=a("6310"),j=a.n(_),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"search-url",attrs:{label:"Article URL or topic",required:"",solo:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}},[a("v-btn",{staticClass:"blue lighten-2 mt-5",staticStyle:{top:"-58px"},attrs:{slot:"append-outer","offset-y":"",dark:"",large:""},on:{click:t.submitForm},slot:"append-outer"},[t._v("\n            Process\n          ")]),a("v-btn",{staticClass:"lighten-2 mt-5",staticStyle:{top:"-58px"},attrs:{slot:"append-outer","offset-y":"",dark:"",large:""},on:{click:t.fillExample},slot:"append-outer"},[t._v("\n            Example\n          ")])],1)],1)],1)],1)],1)},k=[],O=a("a34a"),P=a.n(O),T=a("19f6");function E(t){return function(){var e=this,a=arguments;return new Promise(function(n,r){var s=t.apply(e,a);function i(t,e){try{var a=s[t](e),i=a.value}catch(t){return void r(t)}a.done?n(i):Promise.resolve(i).then(o,l)}function o(t){i("next",t)}function l(t){i("throw",t)}o()})}}var L=function(t){return t[Math.floor(Math.random()*t.length)]},S=["iPhone","Donald Trump","Putin","Germany","Spain"],R={name:"GoRead",methods:{fillExample:function(){var t=E(P.a.mark(function t(){var e,a,n;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=L(S),t.next=3,T["a"].loadURL(e);case 3:a=t.sent,n=a.url,this.url=n;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),submitForm:function(){var t=E(P.a.mark(function t(){var e,a,n,r;return P.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e=/^http(s)?:\/\//.test(this.url),e){t.next=9;break}return a=this.url,t.next=6,T["a"].loadURL(a);case 6:n=t.sent,r=n.url,this.url=r;case 9:this.loadURL(this.url),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),this.url="";case 15:case"end":return t.stop()}},t,this,[[0,12]])}));return function(){return t.apply(this,arguments)}}(),loadURL:function(t){ht.push("/read?url=".concat(t))}},data:function(t){var e=t.url;return{url:e}}},A=R,F=(a("fd88"),a("8336")),M=a("a523"),B=a("0e8f"),U=a("4bd4"),G=a("a722"),I=a("2677"),q=Object(o["a"])(A,V,k,!1,null,null,null);q.options.__file="GoRead.vue";var $=q.exports;c()(q,{VBtn:F["a"],VContainer:M["a"],VFlex:B["a"],VForm:U["a"],VLayout:G["a"],VTextField:I["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Company info")])]),a("v-card-text",[t._v("\n          Media objectivity and mistake-proof are becoming more and weaker.\n          As our society lives in an era of digitation and connected lives,\n          people tend to believe every information they face on the internet,\n          without thinking. That's where our solution comes.\n\n          Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.\n        ")])],1)],1),a("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Contact us")])]),a("v-card-text"),a("v-list",{staticClass:"transparent"},[a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("phone")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("777-MORE-JUST")])],1)],1),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("place")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Mountain View, US")])],1)],1),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("email")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("john@google.com")])],1)],1)],1)],1)],1)],1)],1)},N=[],D=a("b0af"),J=a("99d9"),W=a("12b2"),H=a("132d"),Y=a("8860"),K=a("ba95"),Q=a("40fe"),X=a("5d23"),Z={},tt=Object(o["a"])(Z,z,N,!1,null,null,null);tt.options.__file="InfoCard.vue";var et=tt.exports;c()(tt,{VCard:D["a"],VCardText:J["a"],VCardTitle:W["a"],VContainer:M["a"],VFlex:B["a"],VIcon:H["a"],VLayout:G["a"],VList:Y["a"],VListTile:K["a"],VListTileAction:Q["a"],VListTileContent:X["a"],VListTileTitle:X["b"]});var at={name:"home",components:{GoRead:$,InfoCard:et},data:function(){return{nasa:y.a,hero:g.a,plane:C.a,section:j.a}}},nt=at,rt=a("549c"),st=a("553a"),it=a("8b9c"),ot=Object(o["a"])(nt,h,m,!1,null,null,null);ot.options.__file="Home.vue";var lt=ot.exports;c()(ot,{VBtn:F["a"],VCard:D["a"],VCardText:J["a"],VCardTitle:W["a"],VContainer:M["a"],VContent:rt["a"],VFlex:B["a"],VFooter:st["a"],VLayout:G["a"],VParallax:it["a"]});var ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("section",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{staticClass:"white--text",attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("br"),n("br"),n("br"),n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:a("cf05"),alt:"more just media",height:"200"}})]),n("br"),n("br"),n("br"),n("GoRead")],1)],1)],1)],1)])},ut=[],ft={name:"analyze",components:{GoRead:$,InfoCard:et},data:function(){return{plane:C.a}}},dt=ft,pt=Object(o["a"])(dt,ct,ut,!1,null,null,null);pt.options.__file="Analyze.vue";var vt=pt.exports;c()(pt,{VContainer:M["a"],VContent:rt["a"],VFlex:B["a"],VLayout:G["a"]}),n["a"].use(v["a"]);var ht=new v["a"]({mode:"history",routes:[{path:"/",name:"home",component:lt},{path:"/analyze",name:"analyze",component:vt},{path:"/read",name:"read",props:function(t){var e=t.query;return{url:e.url}},component:function(){return a.e("readmode").then(a.bind(null,"e80d"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:ht,render:function(t){return t(p)}}).$mount("#app")},6310:function(t,e,a){t.exports=a.p+"img/section.f736edc0.jpg"},7171:function(t,e,a){},"7ae3":function(t,e,a){t.exports=a.p+"img/hero.ffec4320.jpeg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.fec7d27a.png"},fd88:function(t,e,a){"use strict";var n=a("7171"),r=a.n(n);r.a}});
//# sourceMappingURL=app.b56ac892.js.map