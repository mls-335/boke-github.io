(self["webpackChunkvue2_xm"]=self["webpackChunkvue2_xm"]||[]).push([[871],{9871:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return _}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"user"}},[a("el-dialog",{attrs:{title:t.etxt?"新增用户":"修改用户",visible:t.isshow},on:{"update:visible":function(e){t.isshow=e}}},[a("userfrom",{attrs:{form:t.userfroms,formLabel:t.userfromlabel}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.isshow=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.kfrom}},[t._v("确 定")])],1)],1),a("div",{attrs:{id:"title"}},[a("div",{staticStyle:{height:"50px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.adduser}},[t._v("+新增")])],1),a("div",{staticClass:"liftTitle"},[a("userfrom",{attrs:{formLabel:t.formLabel,form:t.searchForm,inline:""}},[a("el-button",{staticStyle:{height:"40px"},attrs:{type:"primary"},on:{click:function(e){return t.getUserList(t.searchForm.keyword)}}},[t._v("搜索 ")])],1)],1)]),a("commonTable",{attrs:{tableData:t.tableData,tableLabel:t.tableLabel,config:t.config},on:{changepage:function(e){return t.getUserList()},commt:t.commt,upduser:t.deluser}})],1)},n=[],o=a(1797),l=(a(1249),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px",inline:t.inline}},[t._l(t.formLabel,(function(e){return a("el-form-item",{key:e.data,attrs:{label:e.label}},["input"===e.type?a("el-input",{attrs:{placeholder:"请输入"+e.label},model:{value:t.form[e.data],callback:function(a){t.$set(t.form,e.data,a)},expression:"form[item.data]"}}):t._e(),"date"===e.type?a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.form[e.data],callback:function(a){t.$set(t.form,e.data,a)},expression:"form[item.data]"}}):t._e(),"select"===e.type?a("el-select",{attrs:{placeholder:"请输入"+e.label},model:{value:t.form[e.data],callback:function(a){t.$set(t.form,e.data,a)},expression:"form[item.data]"}},t._l(e.options,(function(t){return a("el-option",{attrs:{label:t.label,value:t.value}})})),1):t._e()],1)})),a("el-form-item",[t._t("default")],2)],2)}),i=[],s={props:{form:Object,formLabel:Array,inline:Boolean}},c=s,u=a(1001),f=(0,u.Z)(c,l,i,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"序号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(10*(t.config.page-1)+e.$index+1))])]}}])}),t._l(t.tableLabel,(function(e,r){return a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:e.label},scopedSlots:t._u([{key:"default",fn:function(r){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(r.row[e.prop]))])]}}],null,!0)})})),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],2),a("el-pagination",{staticStyle:{float:"right","margin-top":"20px"},attrs:{background:"",layout:"prev, pager, next",total:t.config.total,"current-page":t.config.page},on:{"current-change":t.conpage,"update:currentPage":function(e){return t.$set(t.config,"page",e)},"update:current-page":function(e){return t.$set(t.config,"page",e)}}})],1)},m=[],b={props:{tableData:Array,tableLabel:Array,config:Object},data:function(){return{}},methods:{conpage:function(t){this.$emit("changepage",t)},handleEdit:function(t){this.$emit("commt",t)},handleDelete:function(t,e){this.$emit("upduser",e)}}},h=b,g=(0,u.Z)(h,d,m,!1,null,null,null),y=g.exports,v={components:{userfrom:p,commonTable:y},data:function(){return{etxt:"true",isshow:!1,userfroms:{name:"",sex:"",birth:"",addr:"",age:""},userfromlabel:[{data:"name",label:"姓名",type:"input"},{data:"sex",label:"性别",type:"select",options:[{label:"女",value:0},{label:"男",value:1}]},{data:"birth",label:"出生日期",type:"date"},{data:"addr",label:"地址",type:"input"},{data:"age",label:"年龄",type:"input"}],tableData:[],tableLabel:[{label:"姓名",prop:"name"},{label:"年龄",prop:"age"},{label:"性别",prop:"sexLabel"},{label:"出生日期",prop:"birth"},{label:"地址",prop:"addr"}],config:{page:1,total:20},searchForm:{keyword:""},formLabel:[{data:"keyword",label:"",type:"input"}]}},methods:{getUserList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log(e),e&&(this.config.page=1),this.$http.get("/api/user/getUserData",{params:{page:this.config.page,name:e}}).then((function(e){t.config.total=e.data.count,t.tableData=e.data.list.map((function(t){return t.sexLabel=0===t.sex?"女":"男",t}))}))},adduser:function(){this.isshow=!0,this.etxt=!0,this.userfroms={}},commt:function(t){this.isshow=!0,this.etxt=!1;var e=(0,o.Z)({},t);this.userfroms=e},deluser:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$http.get("/api/user/delUserInfo",{params:{id:t.id}}).then((function(t){e.getUserList()})),e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},kfrom:function(){var t=this;this.etxt?this.$http.post("/api/user/addUserInfo",this.userfroms).then((function(e){t.isshow=!1,t.getUserList()})):this.$http.post("/api/user/updUserInfo",this.userfroms).then((function(e){t.isshow=!1,t.getUserList()}))}},mounted:function(){this.getUserList()}},w=v,x=(0,u.Z)(w,r,n,!1,null,"ed15f382",null),_=x.exports},5003:function(t,e,a){var r=a(2109),n=a(7293),o=a(5656),l=a(1236).f,i=a(9781),s=n((function(){l(1)})),c=!i||s;r({target:"Object",stat:!0,forced:c,sham:!i},{getOwnPropertyDescriptor:function(t,e){return l(o(t),e)}})},9337:function(t,e,a){var r=a(2109),n=a(9781),o=a(3887),l=a(5656),i=a(1236),s=a(6135);r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,r=l(t),n=i.f,c=o(r),u={},f=0;while(c.length>f)a=n(r,e=c[f++]),void 0!==a&&s(u,e,a);return u}})},7941:function(t,e,a){var r=a(2109),n=a(7908),o=a(1956),l=a(7293),i=l((function(){o(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return o(n(t))}})},1797:function(t,e,a){"use strict";a.d(e,{Z:function(){return o}});a(7941),a(2526),a(7327),a(1539),a(5003),a(4747),a(9337);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}}}]);
//# sourceMappingURL=871-legacy.f11d0f17.js.map