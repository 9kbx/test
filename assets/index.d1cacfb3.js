import{K as D,r as N,a1 as z,k as A,a0 as I,ak as a,au as g,o as s,a as U,Y as e,S as t,ac as Q,T as _,R as r,W as i,b as F,X as G}from"./vue.e20a9695.js";import{e as b,f as M,z as L,E as W,D as k}from"./index.96b44ad7.js";import{_ as X}from"./editMenu.vue_vue_type_script_setup_true_name_sysEditMenu_lang.62a93b37.js";import"./monacoEditor.9170b963.js";import"./index.vue_vue_type_script_setup_true_name_iconSelector_lang.900e48db.js";import"./getStyleSheets.185dedb6.js";const Y={class:"sys-menu-container"},j={class:"ml10"},H=D({name:"sysMenu"}),ae=D({...H,setup(J){const h=N(),o=z({loading:!1,menuData:[],queryParams:{title:void 0,type:void 0},editMenuTitle:""});A(async()=>{p(),b.on("submitRefresh",()=>{p()})}),I(()=>{b.off("submitRefresh")});const p=async()=>{o.loading=!0;var n=await M(k).apiSysMenuListGet(o.queryParams.title,o.queryParams.type);o.menuData=n.data.result??[],o.loading=!1},P=()=>{o.queryParams.title=void 0,o.queryParams.type=void 0,p()},C=()=>{var n;o.editMenuTitle="添加菜单",(n=h.value)==null||n.openDialog({type:2})},q=n=>{var d;o.editMenuTitle="编辑菜单",(d=h.value)==null||d.openDialog(n)},x=n=>{L.confirm(`确定删除菜单：【${n.title}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await M(k).apiSysMenuDeletePost({id:n.id}),p(),W.success("删除成功")}).catch(()=>{})};return(n,d)=>{const T=a("el-input"),f=a("el-form-item"),w=a("el-option"),V=a("el-select"),c=a("el-button"),B=a("el-button-group"),S=a("el-form"),v=a("el-card"),E=a("SvgIcon"),u=a("el-table-column"),m=a("el-tag"),R=a("el-table"),y=g("auth"),$=g("loading");return s(),U("div",Y,[e(v,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:t(()=>[e(S,{model:o.queryParams,ref:"queryForm",inline:!0},{default:t(()=>[e(f,{label:"菜单名称",prop:"title"},{default:t(()=>[e(T,{placeholder:"菜单名称",clearable:"",onKeyup:Q(p,["enter"]),modelValue:o.queryParams.title,"onUpdate:modelValue":d[0]||(d[0]=l=>o.queryParams.title=l)},null,8,["onKeyup","modelValue"])]),_:1}),e(f,{label:"类型",prop:"type"},{default:t(()=>[e(V,{modelValue:o.queryParams.type,"onUpdate:modelValue":d[1]||(d[1]=l=>o.queryParams.type=l),placeholder:"类型",clearable:""},{default:t(()=>[e(w,{label:"目录",value:1}),e(w,{label:"菜单",value:2}),e(w,{label:"按钮",value:3})]),_:1},8,["modelValue"])]),_:1}),e(f,null,{default:t(()=>[e(B,null,{default:t(()=>[_((s(),r(c,{type:"primary",icon:"ele-Search",onClick:p},{default:t(()=>[i(" 查询 ")]),_:1})),[[y,"sysMenu:list"]]),e(c,{icon:"ele-Refresh",onClick:P},{default:t(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[_((s(),r(c,{type:"primary",icon:"ele-Plus",onClick:C},{default:t(()=>[i(" 新增 ")]),_:1})),[[y,"sysMenu:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),e(v,{shadow:"hover",style:{"margin-top":"8px"}},{default:t(()=>[_((s(),r(R,{data:o.menuData,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"},border:""},{default:t(()=>[e(u,{label:"菜单名称","show-overflow-tooltip":""},{default:t(l=>[e(E,{name:l.row.icon},null,8,["name"]),F("span",j,G(n.$t(l.row.title)),1)]),_:1}),e(u,{label:"类型",width:"70",align:"center","show-overflow-tooltip":""},{default:t(l=>[l.row.type===1?(s(),r(m,{key:0,type:"warning"},{default:t(()=>[i("目录")]),_:1})):l.row.type===2?(s(),r(m,{key:1},{default:t(()=>[i("菜单")]),_:1})):(s(),r(m,{key:2,type:"info"},{default:t(()=>[i("按钮")]),_:1}))]),_:1}),e(u,{prop:"path",label:"路由路径","show-overflow-tooltip":""}),e(u,{prop:"component",label:"组件路径","show-overflow-tooltip":""}),e(u,{prop:"permission",label:"权限标识","show-overflow-tooltip":""}),e(u,{prop:"orderNo",label:"排序",width:"70",align:"center","show-overflow-tooltip":""}),e(u,{label:"状态",width:"80",align:"center","show-overflow-tooltip":""},{default:t(l=>[l.row.status===1?(s(),r(m,{key:0,type:"success"},{default:t(()=>[i("启用")]),_:1})):(s(),r(m,{key:1,type:"danger"},{default:t(()=>[i("禁用")]),_:1}))]),_:1}),e(u,{prop:"createTime",label:"修改时间",align:"center","show-overflow-tooltip":""}),e(u,{label:"操作",width:"140",fixed:"right",align:"center","show-overflow-tooltip":""},{default:t(l=>[_((s(),r(c,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:K=>q(l.row)},{default:t(()=>[i(" 编辑 ")]),_:2},1032,["onClick"])),[[y,"sysMenu:update"]]),_((s(),r(c,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:K=>x(l.row)},{default:t(()=>[i(" 删除 ")]),_:2},1032,["onClick"])),[[y,"sysMenu:delete"]])]),_:1})]),_:1},8,["data"])),[[$,o.loading]])]),_:1}),e(X,{ref_key:"editMenuRef",ref:h,title:o.editMenuTitle,menuData:o.menuData},null,8,["title","menuData"])])}}});export{ae as default};
