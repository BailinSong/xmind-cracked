module.exports=webpackJsonp([19],{10:function(e,t){e.exports=require("fs")},15:function(e,t){e.exports=require("querystring")},16:function(e,t){e.exports=require("util")},23:function(e,t){e.exports=require("events")},25:function(e,t){e.exports=require("os")},26:function(e,t){e.exports=require("crypto")},31:function(e,t){e.exports=require("tty")},32:function(e,t){e.exports=require("net")},356:function(e,t,n){"use strict";var o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(49)),i=o(n(14)),s=o(n(27)),a=n(13),u=n(19);const c="K9FIvBKyOCYhS1Q1i6ov2YuC5FZ7iXOVzTdBS7GD",l="http://localhost/biggerplate_callback",d=(0,s.default)("biggerplate");var p={data:()=>({showSpinner:!1,oathURL:`https://accounts.biggerplate.com/oauth/auth?client_id=${c}&redirect_uri=${encodeURIComponent(l)}&response_type=code&scope=account+maps`}),methods:{handleAuthorization({target:e}){const t=e.getURL();if(0!==t.indexOf(l))return;const n=r.default.parse(t,!0).query.code;n?(this.showSpinner=!0,this.$safeRun(()=>{fetch("https://accounts.biggerplate.com/oauth/token",{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},method:"POST",body:new URLSearchParams({client_id:c,client_secret:"Uoe5YUPf14wkes5Gy5HIwTygMxPGe7hrztVMuIGU",redirect_uri:l,response_type:"token",code:n,grant_type:"authorization_code",scope:"account+maps"})}).then(e=>e?e.ok?e.json():Promise.reject("Biggerplate authorization is not ok: "+e.status):Promise.reject("Invalid response")).then(({access_token:e,expires_in:t,refresh_token:n})=>{if(!e)return Promise.reject("Invalid access_token");i.default.fetch(a.STORE_COMMIT,{mutations:[{type:"biggerplate/updateBiggerplate",payload:{accessToken:e,realExpireTime:Date.now()+1e3*(t-100),refreshToken:n}}]}).then(()=>{this.showSpinner=!1,window.close()})}).catch(e=>{this.showSpinner=!1,d.error("Request accessToken error: %s",(0,u.normalizeError)(e)),window.close()})})):window.close()}}};t.default=p},4:function(e,t){e.exports=require("path")},49:function(e,t){e.exports=require("url")},6:function(e,t){e.exports=require("electron")},971:function(e,t,n){"use strict";var o=n(0),r=o(n(29)),i=o(n(972));(0,r.default)(i.default,{name:"biggerplate"})},972:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(356),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var s=n(973),a=n(1),u=Object(a.a)(r.a,s.a,s.b,!1,null,null,null);t.default=u.exports},973:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-window uk-window-dialog",attrs:{id:"app"}},[n("div",{staticClass:"uk-window-title-bar"},[n("div",{staticClass:"uk-window-title"},[e._v("\n      Biggerplate Authorization\n    ")]),e._v(" "),n("window-control-button-group")],1),e._v(" "),n("div",{staticClass:"uk-window-body uk-flex uk-flex-column uk-position-relative"},[n("webview",{staticClass:"uk-flex-1",attrs:{src:e.oathURL,partition:"biggerplate"},on:{"did-finish-load":function(t){return e.handleAuthorization(t)},"did-start-loading":function(t){e.showSpinner=!0},"did-stop-loading":function(t){e.showSpinner=!1}}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"uk-background-default uk-position-cover uk-flex uk-flex-1 uk-flex-center uk-flex-middle"},[n("div",{attrs:{"uk-spinner":"ratio: 4;"}})])],1)])},r=[]}},[971]);