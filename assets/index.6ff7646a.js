import{_ as o}from"./monacoEditor.9170b963.js";import{E as _}from"./index.96b44ad7.js";import{K as p,aC as r,r as b,a1 as g,k as f,o as y,a as D,b as k,Y as i,u as s,P as v}from"./vue.e20a9695.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";const C={class:"table-demo-container layout-padding"},S={class:"table-demo-padding layout-padding-view layout-padding-auto"},T=p({name:"makeTableDemo"}),q=p({...T,setup(E){const n=r(()=>o(()=>import("./index.7f925098.js"),["./index.7f925098.js","./vue.e20a9695.js","./sortable.esm.be94e56d.js","./index.96b44ad7.js","./monacoEditor.9170b963.js","./monacoEditor.613065c2.css","./index.32da498c.css","./_plugin-vue_export-helper.c27b6911.js","./index.a489f139.css"],import.meta.url)),d=r(()=>o(()=>import("./search.0b4b83ed.js"),["./search.0b4b83ed.js","./vue.e20a9695.js","./_plugin-vue_export-helper.c27b6911.js","./search.3e5cb508.css"],import.meta.url)),l=b(),a=g({tableData:{data:[],header:[{key:"name",colWidth:"",title:"应检尽检核酸采样点名称",type:"text",isCheck:!0},{key:"address",colWidth:"",title:"详细地址",type:"text",isCheck:!0},{key:"phone",colWidth:"",title:"采样点联系电话",type:"text",isCheck:!0},{key:"time",colWidth:"",title:"开放时间",type:"text",isCheck:!0},{key:"isSupport",colWidth:"",title:"是否支持24小时核酸检测",type:"text",isCheck:!0},{key:"image",colWidth:"",width:"70",height:"40",title:"图片描述",type:"image",isCheck:!0}],config:{total:0,loading:!0,isBorder:!1,isSerialNo:!0,isSelection:!0,isOperate:!0},search:[{label:"采样点名称",prop:"name",placeholder:"请输入应检尽检核酸采样点名称",required:!0,type:"input"},{label:"详细地址",prop:"address",placeholder:"请输入详细地址",required:!1,type:"input"},{label:"联系电话",prop:"phone",placeholder:"请输入采样点联系电话",required:!1,type:"input"},{label:"开放时间",prop:"time",placeholder:"请选择",required:!1,type:"date"},{label:"支持24小时",prop:"isSupport",placeholder:"请选择",required:!1,type:"select",options:[{label:"是",value:1},{label:"否",value:0}]},{label:"图片描述",prop:"image",placeholder:"请输入图片描述",required:!1,type:"input"},{label:"核酸机构",prop:"mechanism",placeholder:"请输入核酸机构",required:!1,type:"input"}],param:{pageNum:1,pageSize:10}}}),t=()=>{a.tableData.config.loading=!0,a.tableData.data=[];for(let e=0;e<20;e++)a.tableData.data.push({id:`123456789${e+1}`,name:`莲塘别墅广场${e+1}`,address:`中沧公寓中庭榕树下${e+1}`,phone:`0592-6081259${e+1}`,time:"6:00 ~ 24:00",isSupport:`${e%2===0?"是":"否"}`,image:"https://img2.baidu.com/it/u=417454395,2713356475&fm=253&fmt=auto?w=200&h=200"});a.tableData.config.total=a.tableData.data.length,setTimeout(()=>{a.tableData.config.loading=!1},500)},c=e=>{a.tableData.param=Object.assign({},a.tableData.param,{...e}),l.value.pageReset()},u=e=>{_.success(`删除${e.name}成功！`),t()},m=e=>{a.tableData.param.pageNum=e.pageNum,a.tableData.param.pageSize=e.pageSize,t()},h=e=>{a.tableData.header=e};return f(()=>{t()}),(e,P)=>(y(),D("div",C,[k("div",S,[i(s(d),{search:a.tableData.search,onSearch:c},null,8,["search"]),i(s(n),v({ref_key:"tableRef",ref:l},a.tableData,{class:"table-demo",onDelRow:u,onPageChange:m,onSortHeader:h}),null,16)])]))}});const w=x(q,[["__scopeId","data-v-3806b9c1"]]);export{w as default};
