import{g as J,a as K}from"./download.b0f01c01.js";import{B as W,i as V,j as T,f as C,E as X}from"./index.96b44ad7.js";import{K as I,a1 as Y,k as $,ak as u,au as D,T as x,o as f,a as G,Y as t,S as n,R as b,W as P,b as R,X as Z,aE as ee,aF as ae}from"./vue.e20a9695.js";import{_ as te}from"./_plugin-vue_export-helper.c27b6911.js";import"./monacoEditor.9170b963.js";const q=function(c){return{apiSysLogOpClearPost:async(e={})=>{const o="/api/sysLogOp/clear",r=new URL(o,"https://example.com");let s;c&&(s=c.baseOptions);const l={method:"POST",...s,...e},p={},w={},g=new URLSearchParams(r.search);for(const h in w)g.set(h,w[h]);for(const h in e.params)g.set(h,e.params[h]);r.search=new URLSearchParams(g).toString();let y=s&&s.headers?s.headers:{};return l.headers={...p,...y,...e.headers},{url:r.pathname+r.search+r.hash,options:l}},apiSysLogOpExportPost:async(e,o={})=>{const r="/api/sysLogOp/export",s=new URL(r,"https://example.com");let l;c&&(l=c.baseOptions);const p={method:"POST",...l,...o},w={},g={};w["Content-Type"]="application/json-patch+json";const y=new URLSearchParams(s.search);for(const a in g)y.set(a,g[a]);for(const a in o.params)y.set(a,o.params[a]);s.search=new URLSearchParams(y).toString();let h=l&&l.headers?l.headers:{};p.headers={...w,...h,...o.headers};const v=typeof e!="string"||p.headers["Content-Type"]==="application/json";return p.data=v?JSON.stringify(e!==void 0?e:{}):e||"",{url:s.pathname+s.search+s.hash,options:p}},apiSysLogOpPagePost:async(e,o={})=>{const r="/api/sysLogOp/page",s=new URL(r,"https://example.com");let l;c&&(l=c.baseOptions);const p={method:"POST",...l,...o},w={},g={};w["Content-Type"]="application/json-patch+json";const y=new URLSearchParams(s.search);for(const a in g)y.set(a,g[a]);for(const a in o.params)y.set(a,o.params[a]);s.search=new URLSearchParams(y).toString();let h=l&&l.headers?l.headers:{};p.headers={...w,...h,...o.headers};const v=typeof e!="string"||p.headers["Content-Type"]==="application/json";return p.data=v?JSON.stringify(e!==void 0?e:{}):e||"",{url:s.pathname+s.search+s.hash,options:p}}}},k=function(c){return{async apiSysLogOpClearPost(e){const o=await q(c).apiSysLogOpClearPost(e);return(r=V,s=T)=>{const l={...o.options,url:s+o.url};return r.request(l)}},async apiSysLogOpExportPost(e,o){const r=await q(c).apiSysLogOpExportPost(e,o);return(s=V,l=T)=>{const p={...r.options,url:l+r.url};return s.request(p)}},async apiSysLogOpPagePost(e,o){const r=await q(c).apiSysLogOpPagePost(e,o);return(s=V,l=T)=>{const p={...r.options,url:l+r.url};return s.request(p)}}}};class A extends W{async apiSysLogOpClearPost(e){return k(this.configuration).apiSysLogOpClearPost(e).then(o=>o(this.axios,this.basePath))}async apiSysLogOpExportPost(e,o){return k(this.configuration).apiSysLogOpExportPost(e,o).then(r=>r(this.axios,this.basePath))}async apiSysLogOpPagePost(e,o){return k(this.configuration).apiSysLogOpPagePost(e,o).then(r=>r(this.axios,this.basePath))}}const oe=c=>(ee("data-v-c7136171"),c=c(),ae(),c),se={class:"sys-oplog-container"},re={style:{color:"#fff"}},le=oe(()=>R("span",null," 日志详情 ",-1)),ne=I({name:"sysOpLog"}),ie=I({...ne,setup(c){const e=Y({loading:!1,queryParams:{startTime:void 0,endTime:void 0},tableParams:{page:1,pageSize:20,field:"createTime",order:"descending",descStr:"descending",total:0},logData:[],dialogVisible:!1,content:""});$(async()=>{o()});const o=async()=>{var S,_;e.queryParams.startTime==null&&(e.queryParams.startTime=void 0),e.queryParams.endTime==null&&(e.queryParams.endTime=void 0),e.loading=!0;let a=Object.assign(e.queryParams,e.tableParams);var d=await C(A).apiSysLogOpPagePost(a);e.logData=((S=d.data.result)==null?void 0:S.items)??[],e.tableParams.total=(_=d.data.result)==null?void 0:_.total,e.loading=!1},r=()=>{e.queryParams.startTime=void 0,e.queryParams.endTime=void 0,o()},s=async()=>{e.loading=!0,await C(A).apiSysLogOpClearPost(),e.loading=!1,X.success("清空成功"),o()},l=async()=>{e.loading=!0;var a=await C(A).apiSysLogOpExportPost(e.queryParams,{responseType:"blob"});e.loading=!1;var d=J(a.headers);K(a.data,d)},p=a=>{e.tableParams.pageSize=a,o()},w=a=>{e.tableParams.page=a,o()},g=a=>{e.content=a.message,e.dialogVisible=!0},y=a=>a.row.exception!=null?"warning-row":"",h=[{text:"今天",value:new Date},{text:"昨天",value:()=>{const a=new Date;return a.setTime(a.getTime()-3600*1e3*24),a}},{text:"上周",value:()=>{const a=new Date;return a.setTime(a.getTime()-3600*1e3*24*7),a}}],v=a=>{e.tableParams.field=a.prop,e.tableParams.order=a.order,o()};return(a,d)=>{const S=u("el-date-picker"),_=u("el-form-item"),O=u("el-button"),j=u("el-button-group"),B=u("el-form"),U=u("el-card"),i=u("el-table-column"),z=u("el-tag"),E=u("el-table"),N=u("el-pagination"),F=u("ele-Document"),Q=u("el-icon"),H=u("el-dialog"),L=D("auth"),M=D("loading");return x((f(),G("div",se,[t(U,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:n(()=>[t(B,{model:e.queryParams,ref:"queryForm",inline:!0},{default:n(()=>[t(_,{label:"开始时间",prop:"name"},{default:n(()=>[t(S,{modelValue:e.queryParams.startTime,"onUpdate:modelValue":d[0]||(d[0]=m=>e.queryParams.startTime=m),type:"datetime",placeholder:"开始时间",shortcuts:h},null,8,["modelValue"])]),_:1}),t(_,{label:"结束时间",prop:"code"},{default:n(()=>[t(S,{modelValue:e.queryParams.endTime,"onUpdate:modelValue":d[1]||(d[1]=m=>e.queryParams.endTime=m),type:"datetime",placeholder:"结束时间",shortcuts:h},null,8,["modelValue"])]),_:1}),t(_,null,{default:n(()=>[t(j,null,{default:n(()=>[x((f(),b(O,{type:"primary",icon:"ele-Search",onClick:o},{default:n(()=>[P(" 查询 ")]),_:1})),[[L,"sysOplog:page"]]),t(O,{icon:"ele-Refresh",onClick:r},{default:n(()=>[P(" 重置 ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:n(()=>[x((f(),b(O,{icon:"ele-DeleteFilled",type:"danger",onClick:s},{default:n(()=>[P(" 清空 ")]),_:1})),[[L,"sysOplog:clear"]]),x((f(),b(O,{icon:"ele-FolderOpened",onClick:l},{default:n(()=>[P(" 导出 ")]),_:1})),[[L,"sysOplog:export"]])]),_:1})]),_:1},8,["model"])]),_:1}),t(U,{shadow:"hover",style:{"margin-top":"8px"}},{default:n(()=>[t(E,{data:e.logData,onSortChange:v,style:{width:"100%"},border:"","row-class-name":y},{default:n(()=>[t(i,{type:"index",label:"序号",width:"55",align:"center"}),t(i,{prop:"controllerName",label:"模块名称",width:"100","show-overflow-tooltip":""}),t(i,{prop:"displayTitle",label:"显示名称",width:"150","show-overflow-tooltip":""}),t(i,{prop:"actionName",label:"方法名称",width:"100","show-overflow-tooltip":""}),t(i,{prop:"httpMethod",label:"请求方式",width:"90",align:"center","show-overflow-tooltip":""}),t(i,{prop:"requestUrl",label:"请求地址",width:"200","show-overflow-tooltip":""}),t(i,{prop:"eventId",label:"事件Id",width:"70",align:"center","show-overflow-tooltip":""}),t(i,{prop:"threadId",label:"线程Id",sortable:"custom",width:"90",align:"center","show-overflow-tooltip":""}),t(i,{prop:"traceId",label:"请求跟踪Id",width:"150",sortable:"custom","show-overflow-tooltip":""}),t(i,{prop:"account",label:"账号名称",width:"100","show-overflow-tooltip":""}),t(i,{prop:"realName",label:"真实姓名",width:"100","show-overflow-tooltip":""}),t(i,{prop:"remoteIp",label:"IP地址",width:"120","show-overflow-tooltip":""}),t(i,{prop:"location",label:"登录地点",width:"150","show-overflow-tooltip":""}),t(i,{prop:"browser",label:"浏览器","show-overflow-tooltip":""}),t(i,{prop:"os",label:"操作系统",width:"150","show-overflow-tooltip":""}),t(i,{prop:"status",label:"状态",width:"70",align:"center","show-overflow-tooltip":""},{default:n(m=>[m.row.status==="200"?(f(),b(z,{key:0,type:"success"},{default:n(()=>[P("成功")]),_:1})):(f(),b(z,{key:1,type:"danger"},{default:n(()=>[P("失败")]),_:1}))]),_:1}),t(i,{prop:"elapsed",label:"耗时(ms)",width:"100",align:"center","show-overflow-tooltip":""}),t(i,{prop:"exception",label:"异常对象",width:"150","show-overflow-tooltip":""}),t(i,{prop:"logDateTime",label:"日志时间",width:"160",align:"center",fixed:"right","show-overflow-tooltip":""}),t(i,{label:"操作",width:"80",align:"center",fixed:"right","show-overflow-tooltip":""},{default:n(m=>[x((f(),b(O,{icon:"ele-InfoFilled",size:"small",text:"",type:"primary",onClick:pe=>g(m.row)},{default:n(()=>[P("详情 ")]),_:2},1032,["onClick"])),[[L,"sysOplog:page"]])]),_:1})]),_:1},8,["data"]),t(N,{currentPage:e.tableParams.page,"onUpdate:currentPage":d[2]||(d[2]=m=>e.tableParams.page=m),"page-size":e.tableParams.pageSize,"onUpdate:pageSize":d[3]||(d[3]=m=>e.tableParams.pageSize=m),total:e.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:p,onCurrentChange:w,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1}),t(H,{modelValue:e.dialogVisible,"onUpdate:modelValue":d[4]||(d[4]=m=>e.dialogVisible=m),draggable:"",width:"1000px"},{header:n(()=>[R("div",re,[t(Q,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:n(()=>[t(F)]),_:1}),le])]),default:n(()=>[R("pre",null,Z(e.content),1)]),_:1},8,["modelValue"])])),[[M,e.loading]])}}});const ge=te(ie,[["__scopeId","data-v-c7136171"]]);export{ge as default};
