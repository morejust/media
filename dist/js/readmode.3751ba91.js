(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["readmode"],{"0da0":function(t,e,n){},"43d8":function(t,e,n){},"5b9e":function(t,e,n){"use strict";var r=n("0da0"),i=n.n(r);i.a},7703:function(t,e,n){"use strict";var r=n("43d8"),i=n.n(r);i.a},e80d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("section",[r("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[r("a",{attrs:{href:"/analyze"}},[r("img",{attrs:{src:n("cf05"),alt:"more just media",height:"200"}})]),r("p",[r("a",{attrs:{href:t.url}},[t._v(t._s(t.url))])]),t.isLoading?r("h1",[t._v("Loading...")]):t._e(),t.error?r("h2",{attrs:{red:""}},[t._v(t._s(t.error))]):r("Article",{attrs:{article:t.article}})],1)],1)])},i=[],a=n("a34a"),o=n.n(a),s=n("19f6"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isShowingTip?n("Tip",{staticClass:"tip",attrs:{text:t.tip,y:t.tipOffset+32}}):t._e(),n("article",{staticClass:"reading-mode simple-container"},[n("h1",[t._v("\n      "+t._s(t.article.title)+"\n    ")]),n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{attrs:{src:t.article.image,"max-heigth":"400px"}})],1)],1),n("p"),t.isHTMLReady?n("v-container",[n("InteractiveText",{attrs:{html:t.rawHtml,callback:t.onHighlight}}),n("p",[t._v("\n        Source: "),n("a",{attrs:{href:t.article.url,target:"_blank"}},[t._v(t._s(t.article.url))])])],1):n("p",[t._v("\n      Markup is getting ready...\n      "),n("br"),n("br"),t._v("\n      "+t._s(t.article.text)+"\n    ")])],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"absolute popover",style:"top: "+(t.y||0)+"px"},[n("v-flex",{attrs:{xs12:"",sm4:"","offset-sm8":""}},[n("v-card",{staticClass:"card"},[n("v-card-title",{attrs:{"primary-title":""}},[n("p",[t._v("\n          "+t._s(t.text.title)+"\n        ")]),n("p",[t._v("\n          "+t._s(t.text.message)+"\n        ")])])],1)],1)],1)},h=[],f={props:["text","y"]},p=f,g=(n("5b9e"),n("2877")),m=n("6544"),d=n.n(m),v=n("b0af"),y=n("12b2"),b=n("0e8f"),w=n("a722"),x=Object(g["a"])(p,u,h,!1,null,null,null);x.options.__file="Tip.vue";var _=x.exports;d()(x,{VCard:v["a"],VCardTitle:y["a"],VFlex:b["a"],VLayout:w["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{domProps:{innerHTML:t._s(t.html)},on:{mouseover:t.doHighlight,click:t.onClick}})},O=[],j={props:["html","callback","highlightClass"],data:function(t){t.html,t.callback;var e=t.highlightClass;return{highlight:e||"highlight",focus:null}},methods:{onClick:function(t){var e=t.target;e===this.focus?this.undoHighlight():this.doHighlight({target:e})},doHighlight:function(t){var e=t.target,n=e.className.split(" ").includes(this.highlight);n?(this.callback(e),this.focus=e):this.undoHighlight()},undoHighlight:function(){this.callback(!1),this.focus=null}}},A=j,T=Object(g["a"])(A,k,O,!1,null,null,null);T.options.__file="InteractiveText.vue";var H=T.exports,L=function(t){var e=t.offset,n=t.type,r=t.content;switch(console.log("highlight",{offset:e,type:n,content:r}),n){case"sentiment":var i=parseFloat(t.sentiment)||0;return{title:"\n          '".concat(r,"' has ").concat(i>0?"positive":"negative","\n          sentiment here (").concat(i.toFixed(2),")\n        "),message:"\n          Pay attention to strong emotional message text sends.\n          Usually, it can be used to manipulate your opinion.\n        "};case"fact":return{title:"\n          Does the article prove this fact?\n        ",message:"\n          Looks like this is one of the main messages in the article.\n          Try asking yourself: Could this statement be false?\n        "};case"generalization":return{title:"\n          '".concat(r,"' is a generalization\n        "),message:"\n          Any general statement is false.\n          No jokes, generalizations tend to overcome need for proof using\n          cherry-picked examples. Look what happens if you replace '".concat(r,"'\n          by 'one of the'\n        ")};case"journalism cliches":return{title:"\n          '".concat(r,"' is a cliche\n        "),message:"\n          That's unprofessional journalism.\n          Writer uses these words when he has nothing to say, but wants to sound smart.\n        "};default:return{title:"\n          '".concat(r,"' is of type '").concat(n,"'\n        "),message:"\n          Our AI highlighter asks you to look closely at this statement.\n        "}}};function P(t){return E(t)||C(t)||S()}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function C(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function E(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function I(t,e){return F(t)||V(t,e)||M()}function M(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function V(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(t){i=!0,a=t}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function F(t){if(Array.isArray(t))return t}function R(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var z=function(t,e,n){return"hsla(".concat(t,", ").concat((100*e).toFixed(0),"%, 50%, ").concat((100*n).toFixed(0),")")},$=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",n=t.offset,r=t.content,i=(R(t,["offset","content"]),"");return'<span\n    style="'.concat(i,'"\n    class="highlight highlight-').concat(e.replace(" ","-")," highlight-").concat(e.replace(" ","-"),"-").concat(n,'"\n    data-type="').concat(e,'"\n    data-content="').concat(r,'"\n    data-offset="').concat(n,'"\n    >').concat(r,"</span>")},N=function(t){var e=t.sentiment,n=t.magnitude,r=t.offset,i=t.content,a=z(e>0?118:360,Math.abs(e)+.5,n),o="border-bottom: 2px solid ".concat(a);return'<span\n      style="'.concat(o,'"\n      class="highlight highlight-sentiment-').concat(r,'"\n      data-type="sentiment"\n      data-content="').concat(i,'"\n      data-offset="').concat(r,'"\n      data-magnitude=').concat(n,"\n      data-sentiment=").concat(e,"\n      >").concat(i,"</span>")},B=function(t,e,n){return e.filter(function(t){return t.type===n}).map(function(t){var e=t.offset,r=t.content,i=$(t,n);return{type:n,offset:e,html:i,content:r}})},D=function(t,e){return e.map(function(t){var e=t.offset,n=t.content,r=N(t);return{type:"sentiment",offset:e,html:r,content:n}})},J=function(t,e){return e.map(function(t){var e=I(t,2),n=e[0],r=e[1];return{type:"html",offset:n,html:r,content:""}})},U=function(t,e){var n=function(t,e){return t.offset-e.offset||("begin"===t.type?-1:0)||("begin"===e.type?1:0)||("end"===t.type?1:0)||("end"===e.type?-1:0)||("html"===t.type?-1:0)||("html"===e.type?1:0)||("text"===t.type?-1:0)||("text"===e.type?1:0)};e.push({type:"begin",offset:0,content:""}),e.push({type:"end",offset:t.length,content:""});var r=e.sort(n),i=r.reduce(function(e,n){var r=e.text_tokens,i=e.current_offset,a=n.offset,o=n.content;if(a<i)return{text_tokens:r,current_offset:i};var s=t.slice(i,a);return r.push({type:"text",offset:i,content:s}),console.log(i),console.log(s),console.log(n),i+=s.length+o.length,{text_tokens:r,current_offset:i}},{text_tokens:[],current_offset:0}),a=i.text_tokens;return P(e).concat(P(a)).sort(n)};function W(t){return K(t)||G(t)||q()}function q(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function G(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function K(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function Q(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t,e){try{var n=a[t](e),o=n.value}catch(t){return void i(t)}n.done?r(o):Promise.resolve(o).then(s,c)}function s(t){o("next",t)}function c(t){o("throw",t)}s()})}}var X={name:"Article",props:["article"],created:function(){var t=Q(o.a.mark(function t(){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),watch:{article:function(t){console.log("new value",t),t&&(this.isHTMLReady=!1,this.highlight())}},components:{InteractiveText:H,Tip:_},methods:{onHighlight:function(t){t?(this.isShowingTip=!0,this.tipOffset=t.offsetTop,this.showTip(t.dataset)):this.isShowingTip=!1},showTip:function(t){this.tip=L(t)},highlight:function(){var t=this.article,e=t.title,n=t.text,r=t.html,i=t.entities,a=t.stopwords,o=t.checkFacts;if(e){var s=J(n,r),c=i.filter(function(t){return t.salience>.001}).flatMap(function(t){return t.mentions}).filter(function(t){return 0!=t.magnitude}),l=D(n,c),u=B(n,o,"fact"),h=B(n,a,"generalization"),f=B(n,a,"journalism cliches");console.log(n),console.log(f),this.highlights=W(l).concat(W(s),W(u),W(f),W(h));var p=U(n,this.highlights);console.log(p);var g=p.map(function(t){return t.html||t.content}).join("");console.log(g),g&&(this.rawHtml=g,this.isHTMLReady=!0)}}},data:function(t){var e=t.article,n=e.url,r=e.title,i=e.text,a=e.html,o=e.entities;return{url:n,title:r,text:i,html:a,entities:o,isShowingTip:!1,tipOffset:0,tip:{},isHTMLReady:!1,isAIReady:!1,rawHtml:"",highlights:[]}}},Y=X,Z=(n("7703"),n("a523")),tt=n("adda"),et=Object(g["a"])(Y,c,l,!1,null,null,null);et.options.__file="Article.vue";var nt=et.exports;function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){it(t,e,n[e])})}return t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function at(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t,e){try{var n=a[t](e),o=n.value}catch(t){return void i(t)}n.done?r(o):Promise.resolve(o).then(s,c)}function s(t){o("next",t)}function c(t){o("throw",t)}s()})}}d()(et,{VContainer:Z["a"],VFlex:b["a"],VImg:tt["a"],VLayout:w["a"]});var ot={name:"ReadMode",props:["url"],created:function(){var t=at(o.a.mark(function t(){var e;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this.url,this.loadArticle(e);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(t){t.url;return{isLoading:!0,error:"",article:{}}},watch:{url:function(t){this.isLoading=!0,this.error=!1,this.loadArticle(t)}},methods:{loadArticle:function(){var t=at(o.a.mark(function t(e){var n,r,i,a,c;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s["a"].analyse(e);case 3:if(n=t.sent,console.log(n),r=n.post,r){t.next=8;break}throw new Error("Bad API response: No post data");case 8:if(i=r.title,a=r.text,c=r.image,a){t.next=11;break}throw new Error("Bad API response: Empty text");case 11:this.article=rt({url:e,title:i,text:a,image:c},n),console.log("this.article",this.article),t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),this.error=t.t0.message,console.log("err",t.t0.message);case 19:return t.prev=19,this.isLoading=!1,t.finish(19);case 22:case"end":return t.stop()}},t,this,[[0,15,19,22]])}));return function(e){return t.apply(this,arguments)}}()},components:{Article:nt}},st=ot,ct=n("549c"),lt=Object(g["a"])(st,r,i,!1,null,null,null);lt.options.__file="ReadMode.vue";e["default"]=lt.exports;d()(lt,{VContent:ct["a"],VLayout:w["a"]})}}]);
//# sourceMappingURL=readmode.3751ba91.js.map