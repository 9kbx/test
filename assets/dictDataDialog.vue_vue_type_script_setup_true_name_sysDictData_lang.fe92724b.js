import{K as k,r as M,a1 as j,k as Q,a0 as F,ak as i,au as O,o as _,a as W,Y as a,S as t,b as S,ac as h,W as d,T as Y,R as f}from"./vue.e20a9695.js";import{e as v,f as w,z as G,E as H}from"./index.96b44ad7.js";import{_ as J}from"./editDictData.vue_vue_type_script_setup_true_name_sysEditDictData_lang.9674f7b1.js";import{S as P}from"./sys-dict-data-api.8472452f.js";const L={class:"sys-dictData-container"},X={style:{color:"#fff"}},Z=S("span",null," 字典值列表 ",-1),ee=k({name:"sysDictData"}),ie=k({...ee,setup(ae,{expose:C}){const g=M(),e=j({isShowDialog:!1,loading:!1,dictDataData:[],queryParams:{value:void 0,code:void 0,dictTypeId:0},tableParams:{page:1,pageSize:10,total:0},editDictDataTitle:""});Q(async()=>{v.on("submitRefreshDictData",()=>{s()})}),F(()=>{v.off("submitRefreshDictData")});const x=async l=>{e.queryParams.dictTypeId=l.id,s(),e.isShowDialog=!0},s=async()=>{var p,u;e.loading=!0;let l=Object.assign(e.queryParams,e.tableParams);var n=await w(P).apiSysDictDataPagePost(l);e.dictDataData=((p=n.data.result)==null?void 0:p.items)??[],e.tableParams.total=(u=n.data.result)==null?void 0:u.total,e.loading=!1},z=()=>{e.queryParams.value=void 0,e.queryParams.code=void 0,s()},T=()=>{e.editDictDataTitle="添加字典值",g.value.openDialog({})},q=l=>{e.editDictDataTitle="编辑字典值",g.value.openDialog(l)},V=l=>{G.confirm(`确定删除字典值：【${l.value}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await w(P).apiSysDictDataDeletePost({id:l.id}),s(),H.success("删除成功")}).catch(()=>{})},B=l=>{e.tableParams.pageSize=l,s()},E=l=>{e.tableParams.page=l,s()};return C({openDialog:x}),(l,n)=>{const p=i("ele-Edit"),u=i("el-icon"),y=i("el-input"),m=i("el-form-item"),c=i("el-button"),I=i("el-button-group"),K=i("el-form"),D=i("el-card"),r=i("el-table-column"),b=i("el-tag"),R=i("el-table"),U=i("el-pagination"),N=i("el-dialog"),$=O("loading");return _(),W("div",L,[a(N,{modelValue:e.isShowDialog,"onUpdate:modelValue":n[4]||(n[4]=o=>e.isShowDialog=o),draggable:"",width:"860px"},{header:t(()=>[S("div",X,[a(u,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:t(()=>[a(p)]),_:1}),Z])]),default:t(()=>[a(D,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:t(()=>[a(K,{model:e.queryParams,ref:"queryForm",inline:!0},{default:t(()=>[a(m,{label:"字典值",prop:"value"},{default:t(()=>[a(y,{placeholder:"字典值",clearable:"",onKeyup:h(s,["enter"]),modelValue:e.queryParams.value,"onUpdate:modelValue":n[0]||(n[0]=o=>e.queryParams.value=o)},null,8,["onKeyup","modelValue"])]),_:1}),a(m,{label:"编码",prop:"code"},{default:t(()=>[a(y,{placeholder:"编码",clearable:"",onKeyup:h(s,["enter"]),modelValue:e.queryParams.code,"onUpdate:modelValue":n[1]||(n[1]=o=>e.queryParams.code=o)},null,8,["onKeyup","modelValue"])]),_:1}),a(m,null,{default:t(()=>[a(I,null,{default:t(()=>[a(c,{type:"primary",icon:"ele-Search",onClick:s},{default:t(()=>[d(" 查询 ")]),_:1}),a(c,{icon:"ele-Refresh",onClick:z},{default:t(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1}),a(m,null,{default:t(()=>[a(c,{type:"primary",icon:"ele-Plus",onClick:T},{default:t(()=>[d(" 新增 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(D,{shadow:"hover",style:{"margin-top":"8px"}},{default:t(()=>[Y((_(),f(R,{data:e.dictDataData,style:{width:"100%"},border:""},{default:t(()=>[a(r,{type:"index",label:"序号",width:"55",align:"center"}),a(r,{prop:"value",label:"字典值","show-overflow-tooltip":""}),a(r,{prop:"code",label:"编码","show-overflow-tooltip":""}),a(r,{prop:"status",label:"状态",width:"70",align:"center","show-overflow-tooltip":""},{default:t(o=>[o.row.status===1?(_(),f(b,{key:0,type:"success"},{default:t(()=>[d("启用")]),_:1})):(_(),f(b,{key:1,type:"danger"},{default:t(()=>[d("禁用")]),_:1}))]),_:1}),a(r,{prop:"orderNo",label:"排序",width:"70",align:"center","show-overflow-tooltip":""}),a(r,{prop:"createTime",label:"修改时间",align:"center","show-overflow-tooltip":""}),a(r,{prop:"remark",label:"备注","show-overflow-tooltip":""}),a(r,{label:"操作",width:"140",fixed:"right",align:"center","show-overflow-tooltip":""},{default:t(o=>[a(c,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:A=>q(o.row)},{default:t(()=>[d(" 编辑 ")]),_:2},1032,["onClick"]),a(c,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:A=>V(o.row)},{default:t(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[$,e.loading]]),a(U,{currentPage:e.tableParams.page,"onUpdate:currentPage":n[2]||(n[2]=o=>e.tableParams.page=o),"page-size":e.tableParams.pageSize,"onUpdate:pageSize":n[3]||(n[3]=o=>e.tableParams.pageSize=o),total:e.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:B,onCurrentChange:E,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1})]),_:1},8,["modelValue"]),a(J,{ref_key:"editDictDataRef",ref:g,title:e.editDictDataTitle,dictTypeId:e.queryParams.dictTypeId},null,8,["title","dictTypeId"])])}}});export{ie as _};
