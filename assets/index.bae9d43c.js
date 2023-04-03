import{K as V,r as z,a1 as J,k as X,a0 as Z,ak as u,au as D,o as r,a as ee,Y as a,S as e,ac as q,T as g,R as s,W as o,V as f}from"./vue.e20a9695.js";import{e as B,f as b,z as C,E as v}from"./index.96b44ad7.js";import{_ as te}from"./editTenant.vue_vue_type_script_setup_true_name_sysEditTenant_lang.4718df27.js";import ae from"./grantMenu.e632cb37.js";import{S as h}from"./sys-tenant-api.4b84f048.js";import"./monacoEditor.9170b963.js";import"./_plugin-vue_export-helper.c27b6911.js";const ne={class:"sys-tenant-container"},oe=V({name:"sysTenant"}),me=V({...oe,setup(le){const k=z(),S=z(),l=J({loading:!1,tenantData:[],queryParams:{name:void 0,phone:void 0},tableParams:{page:1,pageSize:10,total:0},editTenantTitle:""});X(async()=>{c(),B.on("submitRefresh",()=>{c()})}),Z(()=>{B.off("submitRefresh")});const c=async()=>{var w,m;l.loading=!0;let n=Object.assign(l.queryParams,l.tableParams);var d=await b(h).apiSysTenantPagePost(n);l.tenantData=((w=d.data.result)==null?void 0:w.items)??[],l.tableParams.total=(m=d.data.result)==null?void 0:m.total,l.loading=!1},M=()=>{l.queryParams.name=void 0,l.queryParams.phone=void 0,c()},R=()=>{var n;l.editTenantTitle="添加租户",(n=k.value)==null||n.openDialog({tenantType:0})},$=n=>{var d;l.editTenantTitle="编辑租户",(d=k.value)==null||d.openDialog(n)},K=async n=>{var d;(d=S.value)==null||d.openDialog(n)},U=async n=>{C.confirm(`确定重置密码：【${n.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await b(h).apiSysTenantResetPwdPost({userId:n.userId}),v.success("密码重置成功：123456")}).catch(()=>{})},E=n=>{C.confirm(`确定删除租户：【${n.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await b(h).apiSysTenantDeletePost({id:n.id}),c(),v.success("删除成功")}).catch(()=>{})},G=n=>{l.tableParams.pageSize=n,c()},N=n=>{l.tableParams.page=n,c()},O=n=>{C.confirm(`确定创建/更新租户数据库：【${n.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await b(h).apiSysTenantCreateDbPost({id:n.id}),v.success("创建/更新租户数据库成功")}).catch(()=>{})},A=n=>{b(h).apiSysTenantSetStatusPost({id:n.id,status:n.status}).then(()=>{v.success("租户状态设置成功")}).catch(()=>{n.status=n.status==1?2:1})};return(n,d)=>{const w=u("el-input"),m=u("el-form-item"),_=u("el-button"),I=u("el-button-group"),Q=u("el-form"),x=u("el-card"),p=u("el-table-column"),i=u("el-tag"),j=u("el-switch"),P=u("el-dropdown-item"),F=u("el-dropdown-menu"),H=u("el-dropdown"),L=u("el-table"),W=u("el-pagination"),T=D("auth"),Y=D("loading");return r(),ee("div",ne,[a(x,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:e(()=>[a(Q,{model:l.queryParams,ref:"queryForm",inline:!0},{default:e(()=>[a(m,{label:"租户名称",prop:"name"},{default:e(()=>[a(w,{placeholder:"租户名称",clearable:"",onKeyup:q(c,["enter"]),modelValue:l.queryParams.name,"onUpdate:modelValue":d[0]||(d[0]=t=>l.queryParams.name=t)},null,8,["onKeyup","modelValue"])]),_:1}),a(m,{label:"联系电话",prop:"phone"},{default:e(()=>[a(w,{placeholder:"联系电话",clearable:"",onKeyup:q(c,["enter"]),modelValue:l.queryParams.phone,"onUpdate:modelValue":d[1]||(d[1]=t=>l.queryParams.phone=t)},null,8,["onKeyup","modelValue"])]),_:1}),a(m,null,{default:e(()=>[a(I,null,{default:e(()=>[g((r(),s(_,{type:"primary",icon:"ele-Search",onClick:c},{default:e(()=>[o(" 查询 ")]),_:1})),[[T,"sysTenant:page"]]),a(_,{icon:"ele-Refresh",onClick:M},{default:e(()=>[o(" 重置 ")]),_:1})]),_:1})]),_:1}),a(m,null,{default:e(()=>[g((r(),s(_,{type:"primary",icon:"ele-Plus",onClick:R},{default:e(()=>[o(" 新增 ")]),_:1})),[[T,"sysTenant:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),a(x,{shadow:"hover",style:{"margin-top":"8px"}},{default:e(()=>[g((r(),s(L,{data:l.tenantData,style:{width:"100%"},border:""},{default:e(()=>[a(p,{type:"index",label:"序号",width:"55",align:"center",fixed:""}),a(p,{prop:"name",label:"租户名称",width:"160","show-overflow-tooltip":""}),a(p,{prop:"adminName",label:"管理员",width:"120","show-overflow-tooltip":""}),a(p,{prop:"phone",label:"电话",width:"120","show-overflow-tooltip":""}),a(p,{prop:"tenantType",label:"租户类型",width:"100",align:"center","show-overflow-tooltip":""},{default:e(t=>[t.row.tenantType===0?(r(),s(i,{key:0},{default:e(()=>[o(" ID隔离 ")]),_:1})):(r(),s(i,{key:1,type:"danger"},{default:e(()=>[o(" 库隔离 ")]),_:1}))]),_:1}),a(p,{label:"状态",width:"70",align:"center","show-overflow-tooltip":""},{default:e(t=>[a(j,{modelValue:t.row.status,"onUpdate:modelValue":y=>t.row.status=y,"active-value":1,"inactive-value":2,size:"small",onChange:y=>A(t.row),disabled:t.row.id==12345678e7},null,8,["modelValue","onUpdate:modelValue","onChange","disabled"])]),_:1}),a(p,{prop:"dbType",label:"数据库类型",width:"120",align:"center","show-overflow-tooltip":""},{default:e(t=>[t.row.dbType===0?(r(),s(i,{key:0},{default:e(()=>[o(" MySql ")]),_:1})):t.row.dbType===1?(r(),s(i,{key:1},{default:e(()=>[o(" SqlServer ")]),_:1})):f("",!0),t.row.dbType===2?(r(),s(i,{key:2},{default:e(()=>[o(" Sqlite ")]),_:1})):t.row.dbType===3?(r(),s(i,{key:3},{default:e(()=>[o(" Oracle ")]),_:1})):f("",!0),t.row.dbType===4?(r(),s(i,{key:4},{default:e(()=>[o(" PostgreSQL ")]),_:1})):t.row.dbType===5?(r(),s(i,{key:5},{default:e(()=>[o(" Dm ")]),_:1})):f("",!0),t.row.dbType===6?(r(),s(i,{key:6},{default:e(()=>[o(" Kdbndp ")]),_:1})):t.row.dbType===7?(r(),s(i,{key:7},{default:e(()=>[o(" Oscar ")]),_:1})):f("",!0),t.row.dbType===8?(r(),s(i,{key:8},{default:e(()=>[o(" MySqlConnector ")]),_:1})):t.row.dbType===9?(r(),s(i,{key:9},{default:e(()=>[o(" Access ")]),_:1})):f("",!0),t.row.dbType===10?(r(),s(i,{key:10},{default:e(()=>[o(" OpenGauss ")]),_:1})):t.row.dbType===11?(r(),s(i,{key:11},{default:e(()=>[o(" QuestDB ")]),_:1})):t.row.dbType===12?(r(),s(i,{key:12},{default:e(()=>[o(" HG ")]),_:1})):t.row.dbType===13?(r(),s(i,{key:13},{default:e(()=>[o(" ClickHouse ")]),_:1})):t.row.dbType===14?(r(),s(i,{key:14},{default:e(()=>[o(" GBase ")]),_:1})):t.row.dbType===900?(r(),s(i,{key:15},{default:e(()=>[o(" Custom ")]),_:1})):f("",!0)]),_:1}),a(p,{prop:"connection",label:"数据库连接",width:"300","show-overflow-tooltip":""}),a(p,{prop:"orderNo",label:"排序",width:"70",align:"center","show-overflow-tooltip":""}),a(p,{prop:"createTime",label:"修改时间",width:"160",align:"center","show-overflow-tooltip":""}),a(p,{prop:"remark",label:"备注","show-overflow-tooltip":""}),a(p,{label:"操作",width:"180",fixed:"right",align:"center","show-overflow-tooltip":""},{default:e(t=>[g((r(),s(_,{icon:"ele-Coin",size:"small",text:"",type:"danger",onClick:y=>O(t.row),disabled:t.row.tenantType==0},{default:e(()=>[o(" 创建库 ")]),_:2},1032,["onClick","disabled"])),[[T,"sysTenant:createDb"]]),g((r(),s(_,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:y=>$(t.row)},{default:e(()=>[o(" 编辑 ")]),_:2},1032,["onClick"])),[[T,"sysTenant:update"]]),a(H,null,{dropdown:e(()=>[a(F,null,{default:e(()=>[a(P,{icon:"ele-OfficeBuilding",onClick:y=>K(t.row),"v-auth":"sysTenant:grantMenu"},{default:e(()=>[o(" 授权菜单 ")]),_:2},1032,["onClick"]),a(P,{icon:"ele-RefreshLeft",onClick:y=>U(t.row),"v-auth":"sysTenant:resetPwd"},{default:e(()=>[o(" 重置密码 ")]),_:2},1032,["onClick"]),a(P,{icon:"ele-Delete",onClick:y=>E(t.row),"v-auth":"sysTenant:delete"},{default:e(()=>[o(" 删除租户 ")]),_:2},1032,["onClick"])]),_:2},1024)]),default:e(()=>[a(_,{icon:"ele-MoreFilled",size:"small",text:"",type:"primary",style:{"padding-left":"12px"}})]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[Y,l.loading]]),a(W,{currentPage:l.tableParams.page,"onUpdate:currentPage":d[2]||(d[2]=t=>l.tableParams.page=t),"page-size":l.tableParams.pageSize,"onUpdate:pageSize":d[3]||(d[3]=t=>l.tableParams.pageSize=t),total:l.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:G,onCurrentChange:N,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1}),a(te,{ref_key:"editTenantRef",ref:k,title:l.editTenantTitle},null,8,["title"]),a(ae,{ref_key:"grantMenuRef",ref:S},null,512)])}}});export{me as default};
