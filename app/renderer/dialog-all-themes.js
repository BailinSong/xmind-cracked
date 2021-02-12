module.exports=webpackJsonp([8],{10:function(e,t){e.exports=require("fs")},15:function(e,t){e.exports=require("querystring")},16:function(e,t){e.exports=require("util")},23:function(e,t){e.exports=require("events")},25:function(e,t){e.exports=require("os")},26:function(e,t){e.exports=require("crypto")},264:function(e,t){e.exports=require("ncp")},31:function(e,t){e.exports=require("tty")},32:function(e,t){e.exports=require("net")},359:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,a){function s(e){try{u(i.next(e))}catch(e){a(e)}}function r(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(s,r)}u((i=i.apply(e,t||[])).next())})},o=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=n(5),u=n(6),l=a(n(4)),c=a(n(15)),d=n(19),h=n(9),m=(n(8),a(n(24))),f=n(8),p=s(n(47)),v=n(21),b=n(56),T=n(34),k=n(21),g=n(263),y=a(n(41)),C=c.default.parse(window.location.search.slice(1)),w={cache:{},fetch:function(e){return i(this,void 0,void 0,function*(){if(void 0===this.cache[e]){let t={};t=e.startsWith("CUSTOM-")?{content:g.readTheme(e)}:JSON.parse(yield p.load(`static/styles/themes/${e}.json`)),this.cache[e]=t}return this.cache[e]})},get:function(e){return this.cache[e]}};t.default=r.createComponent({name:"all-themes",mixins:[y.default],setup(e,t){const n=r.getCurrentInstance(),a=t.root.$store,s=C.centralTopicStructureClass||"map-unbalance",c=r.ref(C.themeTab||"built-in"),y=r.ref(""),x=r.ref(""),O=r.ref([]),_=r.ref(null),I=r.ref(C.activeThemeId||""),$=r.ref(""),S=r.computed(()=>a.state.themeEditor.customThemes),j=r.computed(()=>S.value.concat(O.value)),E=r.computed(()=>"built-in"===c.value?O.value.map(e=>{var{name:t,id:i}=e,a=o(e,["name","id"]);return Object.assign(Object.assign({id:i},a),{previewUrl:P(s,i),name:n.$T("$$",t)})}):S.value.map(e=>(e.previewUrl=P(s,e.id),e)).sort((e,t)=>t.createdAt-e.createdAt)),P=(e,t)=>{if(t.startsWith("CUSTOM-")){const n=S.value.find(({id:e})=>e===t),i=n&&n.createdAt;return p.toURLInAppData(`theme/${t}/previews/${e}.svg?t=${i}`)}return"theme-custom"===t?n.$toResourceURL("static/assets/images/theme-custom.svg"):n.$toResourceURL(`static/styles/theme_previews/${e}/${e}-${t}.svg`)},D=()=>i(this,void 0,void 0,function*(){if(a.commit("activation/checkpoint"),a.getters["activation/status"]===f.ACTIVATION_STATUS.VALID)return!0;{let e,t;if("true"===process.env.VANA_LICENSE_MODE)t="activate",e=n.$T("Subscribe");else{const i=""===a.state.account.user&&""===a.state.account.token;t=i?"signIn":"activate",e=i?n.$T("Sign in and Subscribe"):n.$T("Subscribe")}let i=yield T.showMessageBox({type:"info",title:n.$T("This Feature is Locked"),message:n.$T("This Feature is Locked"),detail:n.$T("This feature is not available in Trial Mode. Please subscribe XMind to unlock it."),buttons:[e,n.$T("Cancel")],cancelId:1,defaultId:0});return Array.isArray(i)&&i.length>0&&0===i[0]&&(a.handleCommand(t),k.trackConfig({name:"sourceOfPurchase",value:"exportScale"})),!1}}),M=(e,t)=>{"custom"===c.value&&(y.value=e,x.value=t,setTimeout(()=>{const t=document.querySelector("#themename-"+e);t&&t.focus()},10))},A=()=>i(this,void 0,void 0,function*(){if(yield D()){const e="CUSTOM-"+d.UUID();a.handleCommand("themeEditor",{id:e,editorId:C.editorId,parentId:C.parentId,centralTopicStructureClass:C.centralTopicStructureClass,openType:"create-theme"}).then(()=>window.close())}}),U=e=>i(this,void 0,void 0,function*(){e.startsWith("CUSTOM-")&&(delete w.cache[e],yield w.fetch(e));const t=E.value.find(({id:t})=>t===e);return Object.assign(Object.assign({},t),yield w.fetch(e))}),R=r.computed(()=>[{type:"space",size:"flexible"},{type:"button",label:n.$T("Cancel"),click:"onCancel"},{type:"buttons",buttons:[{type:"button",label:n.$T("Choose"),click:"handleChooseTheme",enabled:!!("custom"===c.value?I.value:$.value)}]},{type:"space",size:"flexible"}]),q=r.computed(()=>{let e=n.$T("Create Theme");return e});return(()=>i(this,void 0,void 0,function*(){n.$safeRun(()=>i(this,void 0,void 0,function*(){const e=yield p.load("static/styles/themes.json"),t=JSON.parse(e.toString());O.value=t.themes}))}))(),{themesContainerRef:_,touchBarItems:R,themeTab:c,computedThemes:E,choosedBuiltInThemeId:$,choosedCustomThemeId:I,openMenu:e=>{const{MenuItem:t,Menu:o}=u.remote,r=j.value.find(({id:t})=>t===e);if(!r)return;const h=new o;"custom"==c.value?(I.value=r.id,h.append(new t({label:n.$T("Edit"),click:()=>i(this,void 0,void 0,function*(){(yield D())&&a.handleCommand("themeEditor",{id:e,parentId:C.parentId,editorId:C.editorId,centralTopicStructureClass:s,openType:"loading-theme"}).then(()=>window.close())})})),h.append(new t({label:n.$T("Rename"),click:()=>M(e,r.name)})),h.append(new t({type:"separator"})),h.append(new t({label:n.$T("Duplicate"),click:()=>i(this,void 0,void 0,function*(){yield g.duplicateTheme(e,e=>{a.commit("themeEditor/saveCustomTheme",{id:e,name:r.name}),c.value="custom",I.value=e,_.value.scrollTo({top:0,left:0,behavior:"smooth"})})})})),h.append(new t({label:n.$T("Delete"),click:()=>i(this,void 0,void 0,function*(){const t=E.value.length?E.value.findIndex(t=>t.id===e):-1;yield g.deleteTheme(e,()=>{a.commit("themeEditor/removeCustomTheme",{id:e})}),-1===t||0===E.value.length?I.value="EMPTY":I.value=E.value.length>t?E.value[t].id:E.value[E.value.length-1].id})}))):($.value=r.id,h.append(new t({label:n.$T("Duplicate"),click:()=>i(this,void 0,void 0,function*(){const e="CUSTOM-"+d.UUID();try{const t=JSON.parse(yield p.load(`static/styles/themes/${r.id}.json`));if(!t.content)return;for(const e of Object.keys(t.content).filter(e=>e.startsWith("level")))delete t.content[e];t.content.id=e;const o=e=>i(this,void 0,void 0,function*(){yield m.default.writeFile(e,JSON.stringify(t.content))}),s=e=>i(this,void 0,void 0,function*(){const t=C.previewClassList;yield Promise.all(t.map(t=>m.default.copyFile(l.default.resolve(b.getAppPath(),`static/styles/theme_previews/${t}/${t}-${r.id}.svg`),l.default.join(e,t+".svg"))))});yield g.genTheme(e,o,s,()=>{a.commit("themeEditor/saveCustomTheme",{id:e,name:n.$T("$$",r.name)})}),v.trackEvent({eventCategory:"ThemeEditor",eventAction:"duplicateBuiltInTheme"}),c.value="custom",I.value=e}catch(e){console.error(e)}_.value.scrollTo({top:0,left:0,behavior:"smooth"})})}))),h.popup({window:u.remote.getCurrentWindow()})},editThemeName:M,editingCustomThemeId:y,handleThemeRename:e=>{y.value&&(a.commit("themeEditor/renameCustomTheme",{id:y.value,name:e.target.value}),y.value="",x.value="")},handleChooseTheme:()=>i(this,void 0,void 0,function*(){const e="built-in"===c.value?$.value:I.value;if("EMPTY"===e)return void A();const t=yield U(e);t&&(v.trackEvent({eventCategory:"AllThemes",eventAction:"changeTheme",eventName:e.startsWith("CUSTOM-")?"User Custom":t.name}),a.commit(`${h.SHARED}/setTargetTheme`,{targetTheme:t.content}),setTimeout(()=>{window.close()},100))}),handleAddNewCustomTheme:A,createThemeText:q,onCancel:()=>{setTimeout(()=>{window.close()},100)},onChooseClick:({id:e,themeTab:t})=>{"built-in"===t?$.value=e:I.value=e}}}})},4:function(e,t){e.exports=require("path")},6:function(e,t){e.exports=require("electron")},980:function(e,t,n){"use strict";var i=n(0),o=i(n(12)),a=i(n(15)),s=i(n(29)),r=i(n(351)),u=i(n(152)),l=n(9),c=i(n(981));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}const h=a.default.parse(location.search.slice(1));(0,s.default)(c.default,{name:"dialog-all-themes",storeModules:{[l.SHARED]:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,o.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u.default,{remoteNamespace:(0,l.EDITOR_SHARED_WITH_ID)(h.editorId)}),themeEditor:r.default}})},981:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(359),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(985),r=n(1);var u=function(e){n(982)},l=Object(r.a)(o.a,s.a,s.b,!1,u,"data-v-fb4ef5aa",null);t.default=l.exports},982:function(e,t,n){var i=n(983);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(20).default)("7e05dd7e",i,!0,{})},983:function(e,t,n){(e.exports=n(18)()).push([e.i,"\n.dark .custom-add[data-v-fb4ef5aa] {\n  background: rgba(255, 255, 255, 0.1);\n}\n",""])},985:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-window uk-window-dialog uk-window-default"},[n("div",{staticClass:"uk-window-expanded-title-bar"},[n("div",{staticClass:"uk-window-title-bar"},[n("window-control-button-group")],1),e._v(" "),n("div",{staticClass:"uk-flex uk-flex-no-shrink uk-flex-center uk-width-1-1"},[n("ul",{staticClass:"uk-tab uk-tab-large uk-flex-center uk-tab-capsule",attrs:{"uk-tab":"connect: .main-content-switcher"}},[n("li",{class:{"uk-active":"built-in"===e.themeTab}},[n("a",{attrs:{draggable:"false",href:"#"},on:{click:function(t){e.themeTab="built-in"}}},[e._v("\n            "+e._s(e.$T("Built-in"))+"\n          ")])]),e._v(" "),n("li",{class:{"uk-active":"custom"===e.themeTab}},[n("a",{attrs:{draggable:"false",href:"#"},on:{click:function(t){e.themeTab="custom"}}},[e._v("\n            "+e._s(e.$T("Custom"))+"\n          ")])])])])]),e._v(" "),n("div",{staticClass:"uk-window-body uk-flex uk-flex-column uk-child-separator uk-position-relative"},[n("div",{ref:"themesContainerRef",staticClass:"uk-height-1-1 uk-overflow-auto"},[n("div",{staticClass:"uk-flex uk-flex-wrap",staticStyle:{"margin-top":"-5px","padding-bottom":"18px"}},["custom"===e.themeTab?n("div",{staticClass:"uk-flex uk-flex-column",staticStyle:{"margin-left":"30px",outline:"none"}},[n("div",{staticClass:"uk-card uk-card-default uk-card-selectable uk-background-cover uk-border-rounded uk-margin-small-bottom uk-overflow-hidden custom-add",class:{"uk-active":"EMPTY"===e.choosedCustomThemeId},staticStyle:{width:"203px",height:"121px","margin-top":"20px"},attrs:{title:e.$T("Create new theme based on current style.")},on:{click:e.handleAddNewCustomTheme}},[n("div",{staticClass:"uk-flex uk-flex-center uk-flex-middle",staticStyle:{color:"#b2b2b2",height:"100%"},attrs:{"uk-icon":"icon: zoom-plus; ratio: 3"}})]),e._v(" "),n("span",{staticClass:"uk-card-selectable-text uk-display-inline-block",staticStyle:{"font-size":"13px",height:"22px","line-height":"22px",overflow:"hidden","text-overflow":"ellipsis","max-width":"173px","align-self":"center"}},[e._v(e._s(e.createThemeText))])]):e._e(),e._v(" "),e._l(e.computedThemes,function(t){var i=t.id,o=t.name,a=t.previewUrl;return n("div",{key:i,staticClass:"uk-flex uk-flex-column",staticStyle:{"margin-left":"30px","margin-top":"20px",outline:"none"},attrs:{theme:i}},[n("div",{staticClass:"uk-card uk-card-default uk-card-selectable uk-background-cover uk-border-rounded uk-margin-small-bottom uk-overflow-hidden",class:{"uk-active":i===("built-in"===e.themeTab?e.choosedBuiltInThemeId:e.choosedCustomThemeId)},staticStyle:{width:"203px",height:"121px"},attrs:{tabindex:"-1"},on:{click:function(t){return e.onChooseClick({id:i,themeTab:e.themeTab})},dblclick:function(){e.onChooseClick({id:i,themeTab:e.themeTab}),e.handleChooseTheme()},contextmenu:function(t){return e.openMenu(i)}}},[n("img",{staticClass:"uk-width-1-1",attrs:{draggable:"false","uk-img":"",src:a,alt:""}})]),e._v(" "),e.editingCustomThemeId!==i?n("span",{staticClass:"uk-card-selectable-text uk-display-inline-block",staticStyle:{"font-size":"13px",height:"22px","line-height":"22px",overflow:"hidden","text-overflow":"ellipsis","max-width":"173px","align-self":"center"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.editThemeName(i,o)}}},[e._v(e._s(o))]):n("input",{staticClass:"uk-text-center uk-input",staticStyle:{"font-size":"13px",height:"22px","line-height":"22px","box-sizing":"border-box"},attrs:{id:"themename-"+i,type:"text",autofocus:e.editingCustomThemeId===i},domProps:{value:o},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),t.preventDefault(),e.handleThemeRename(t))},blur:function(t){return t.stopPropagation(),t.preventDefault(),e.handleThemeRename(t)},mousedown:function(t){return t.stopPropagation(),function(t){return e.editingCustomThemeId!==i&&t.preventDefault()}(t)}}})])})],2)])]),e._v(" "),n("div",{staticClass:"uk-window-button-bar"},[n("div",{staticClass:"uk-flex uk-flex-right uk-button-group"},[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button",disabled:"built-in"===e.themeTab?!e.choosedBuiltInThemeId:!e.choosedCustomThemeId,autofocus:""},on:{click:e.handleChooseTheme}},[e._v("\n        "+e._s(e.$T("Choose"))+"\n      ")]),e._v(" "),n("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:e.onCancel}},[e._v("\n        "+e._s(e.$T("Cancel"))+"\n      ")])])])])},o=[]}},[980]);