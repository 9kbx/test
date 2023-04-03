import{K as x,r as v,a1 as j,k as Q,a0 as F,ak as i,au as T,o as s,a as I,Y as t,S as a,ac as P,T as y,R as c,W as d}from"./vue.e20a9695.js";import{e as k,f as C,z as O,E as W}from"./index.96b44ad7.js";import{_ as Y}from"./editDictType.vue_vue_type_script_setup_true_name_sysEditDictType_lang.daa75bdc.js";import{_ as G}from"./dictDataDialog.vue_vue_type_script_setup_true_name_sysDictData_lang.fe92724b.js";import{S as z}from"./sys-dict-type-api.bcfb5f04.js";import"./monacoEditor.9170b963.js";import"./editDictData.vue_vue_type_script_setup_true_name_sysEditDictData_lang.9674f7b1.js";import"./sys-dict-data-api.8472452f.js";const H={class:"sys-dict-container"},J=x({name:"sysDict"}),ie=x({...J,setup(L){const g=v(),b=v(),e=j({loading:!1,dictTypeData:[],queryParams:{name:void 0,code:void 0},tableParams:{page:1,pageSize:10,total:0},editDictTypeTitle:""});Q(async()=>{r(),k.on("submitRefresh",()=>{r()})}),F(()=>{k.off("submitRefresh")});const r=async()=>{var _,m;e.loading=!0;let l=Object.assign(e.queryParams,e.tableParams);var o=await C(z).apiSysDictTypePagePost(l);e.dictTypeData=((_=o.data.result)==null?void 0:_.items)??[],e.tableParams.total=(m=o.data.result)==null?void 0:m.total,e.loading=!1},S=()=>{e.queryParams.name=void 0,e.queryParams.code=void 0,r()},q=()=>{var l;e.editDictTypeTitle="添加字典",(l=g.value)==null||l.openDialog({})},R=l=>{var o;e.editDictTypeTitle="编辑字典",(o=g.value)==null||o.openDialog(l)},V=l=>{var o;(o=b.value)==null||o.openDialog(l)},B=l=>{O.confirm(`确定删除字典：【${l.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await C(z).apiSysDictTypeDeletePost({id:l.id}),r(),W.success("删除成功")}).catch(()=>{})},E=l=>{e.tableParams.pageSize=l,r()},K=l=>{e.tableParams.page=l,r()};return(l,o)=>{const _=i("el-input"),m=i("el-form-item"),u=i("el-button"),$=i("el-button-group"),U=i("el-form"),D=i("el-card"),p=i("el-table-column"),h=i("el-tag"),M=i("el-table"),A=i("el-pagination"),f=T("auth"),N=T("loading");return s(),I("div",H,[t(D,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:a(()=>[t(U,{model:e.queryParams,ref:"queryForm",inline:!0},{default:a(()=>[t(m,{label:"字典名称",prop:"name"},{default:a(()=>[t(_,{placeholder:"字典名称",clearable:"",onKeyup:P(r,["enter"]),modelValue:e.queryParams.name,"onUpdate:modelValue":o[0]||(o[0]=n=>e.queryParams.name=n)},null,8,["onKeyup","modelValue"])]),_:1}),t(m,{label:"字典编码",prop:"code"},{default:a(()=>[t(_,{placeholder:"字典编码",clearable:"",onKeyup:P(r,["enter"]),modelValue:e.queryParams.code,"onUpdate:modelValue":o[1]||(o[1]=n=>e.queryParams.code=n)},null,8,["onKeyup","modelValue"])]),_:1}),t(m,null,{default:a(()=>[t($,null,{default:a(()=>[y((s(),c(u,{type:"primary",icon:"ele-Search",onClick:r},{default:a(()=>[d(" 查询 ")]),_:1})),[[f,"sysDictType:page"]]),t(u,{icon:"ele-Refresh",onClick:S},{default:a(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1}),t(m,null,{default:a(()=>[y((s(),c(u,{type:"primary",icon:"ele-Plus",onClick:q},{default:a(()=>[d(" 新增 ")]),_:1})),[[f,"sysDictType:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),t(D,{shadow:"hover",style:{"margin-top":"8px"}},{default:a(()=>[y((s(),c(M,{data:e.dictTypeData,style:{width:"100%"},border:""},{default:a(()=>[t(p,{type:"index",label:"序号",width:"55",align:"center"}),t(p,{prop:"name",label:"字典名称","show-overflow-tooltip":""}),t(p,{prop:"code",label:"字典编码","show-overflow-tooltip":""}),t(p,{prop:"status",label:"状态",width:"70",align:"center","show-overflow-tooltip":""},{default:a(n=>[n.row.status===1?(s(),c(h,{key:0,type:"success"},{default:a(()=>[d("启用")]),_:1})):(s(),c(h,{key:1,type:"danger"},{default:a(()=>[d("禁用")]),_:1}))]),_:1}),t(p,{prop:"orderNo",label:"排序",width:"70",align:"center","show-overflow-tooltip":""}),t(p,{prop:"createTime",label:"修改时间",align:"center","show-overflow-tooltip":""}),t(p,{prop:"remark",label:"备注","show-overflow-tooltip":""}),t(p,{label:"操作",width:"210",fixed:"right",align:"center","show-overflow-tooltip":""},{default:a(n=>[y((s(),c(u,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:w=>R(n.row)},{default:a(()=>[d(" 编辑 ")]),_:2},1032,["onClick"])),[[f,"sysDictType:update"]]),y((s(),c(u,{icon:"ele-Memo",size:"small",text:"",type:"primary",onClick:w=>V(n.row)},{default:a(()=>[d(" 字典 ")]),_:2},1032,["onClick"])),[[f,"sysDictType:page"]]),y((s(),c(u,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:w=>B(n.row)},{default:a(()=>[d(" 删除 ")]),_:2},1032,["onClick"])),[[f,"sysDictType:delete"]])]),_:1})]),_:1},8,["data"])),[[N,e.loading]]),t(A,{currentPage:e.tableParams.page,"onUpdate:currentPage":o[2]||(o[2]=n=>e.tableParams.page=n),"page-size":e.tableParams.pageSize,"onUpdate:pageSize":o[3]||(o[3]=n=>e.tableParams.pageSize=n),total:e.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:E,onCurrentChange:K,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1}),t(Y,{ref_key:"editDictTypeRef",ref:g,title:e.editDictTypeTitle},null,8,["title"]),t(G,{ref_key:"dictDataDialogRef",ref:b},null,512)])}}});export{ie as default};
