(self["webpackChunkvue2_xm"]=self["webpackChunkvue2_xm"]||[]).push([[858],{7858:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return E}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{height:"100vh"}},[n("el-aside",{staticStyle:{width:"none"}},[n("Menu")],1),n("el-container",[n("el-header",{staticStyle:{"background-color":"#DEE1E6"}},[n("Header")],1),n("labels"),n("el-main",[n("router-view")],1)],1)],1)},l=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{"background-color":"#304156",border:"none",height:"100vh"},attrs:{"default-active":"1-4-1","default-active":t.$route.path,router:"",collapse:this.$store.state.top.isCollapse,"text-color":"#D6DEF0","active-text-color":"#f0b43a","background-color":"#304156"}},[t._l(t.nochildren,(function(e,r){return n("el-menu-item",{key:e.label,attrs:{index:e.path},on:{click:function(n){return t.labels(e)}}},[n("i",{class:"el-icon-"+e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])])})),t._l(t.childrens,(function(e,r){return n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])]),n("el-menu-item-group",t._l(e.children,(function(e,r){return n("el-menu-item",{attrs:{index:e.path},on:{click:function(n){return t.labels2(e)}}},[n("i",{class:"el-icon-"+e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])])})),1)],2)}))],2)},i=[],s=(n(7327),n(1539),{computed:{menu:function(){return this.$store.state.top.menu},nochildren:function(){return this.menu.filter((function(t){return!t.children}))},childrens:function(){return this.menu.filter((function(t){return t.children}))}},methods:{labels:function(t){this.$store.commit("selectMenu",t)},labels2:function(t){this.$store.commit("selectMenu",t)}}}),c=s,a=n(1001),u=(0,a.Z)(c,o,i,!1,null,null,null),f=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"titles"}},[n("div",{staticClass:"blift"},[n("button",{staticClass:"el-icon-s-fold",attrs:{type:"button"},on:{click:t.clickmenu}}),n("el-breadcrumb",{attrs:{separator:"/","text-color":"#D6DEF0"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),n("el-breadcrumb-item",[t._v(t._s(this.$route.meta[0]))])],1)],1),n("div",{staticClass:"tag"},[n("el-col",{attrs:{span:12}},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link"},[n("img",{attrs:{id:"ims",src:"https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("个人中心")]),n("el-dropdown-item",[n("div",{attrs:{id:"header"},on:{click:function(e){return t.tologin()}}},[t._v("退出登录")])])],1)],1)],1)],1)])},h=[],d=(n(4916),n(5306),{data:function(){return{}},methods:{clickmenu:function(){this.$store.commit("nomenu")},tologin:function(){this.$store.commit("clearToken"),this.$router.replace("/login")}}}),m=d,b=(0,a.Z)(m,p,h,!1,null,"809b1e30",null),g=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},t._l(t.tags,(function(e,r){return n("el-tag",{key:e.label,staticStyle:{cursor:"pointer","margin-top":"10px","margin-left":"10px"},attrs:{effect:e.path===t.$route.path?"dark":"plain",closable:"首页"!=e.label,"disable-transitions":!1},on:{close:function(n){return t.handleClose(e,r)},click:function(n){return t.clicktag(e.path)}}},[t._v(" "+t._s(e.label)+" ")])})),1)},_=[],k=n(1797),O=(n(8309),n(629)),w={computed:(0,k.Z)({},(0,O.rn)({tags:function(){return this.$store.state.top.tabsList}})),methods:(0,k.Z)((0,k.Z)({},(0,O.OI)(["closeTab"])),{},{handleClose:function(t,e){var n=this.tags.length-1;this.closeTab(t),t.name==this.$route.name&&(e===n?this.$router.push(this.tags[e-1].path):this.$router.push(this.tags[e].path))},clicktag:function(t){this.$router.replace(t)}})},y=w,$=(0,a.Z)(y,v,_,!1,null,null,null),j=$.exports,x={components:{Menu:f,Header:g,labels:j}},C=x,D=(0,a.Z)(C,r,l,!1,null,null,null),E=D.exports},5003:function(t,e,n){var r=n(2109),l=n(7293),o=n(5656),i=n(1236).f,s=n(9781),c=l((function(){i(1)})),a=!s||c;r({target:"Object",stat:!0,forced:a,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},9337:function(t,e,n){var r=n(2109),l=n(9781),o=n(3887),i=n(5656),s=n(1236),c=n(6135);r({target:"Object",stat:!0,sham:!l},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),l=s.f,a=o(r),u={},f=0;while(a.length>f)n=l(r,e=a[f++]),void 0!==n&&c(u,e,n);return u}})},7941:function(t,e,n){var r=n(2109),l=n(7908),o=n(1956),i=n(7293),s=i((function(){o(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(t){return o(l(t))}})},1797:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}}}]);
//# sourceMappingURL=858-legacy.2bef2620.js.map