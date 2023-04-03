import{f as m,M as K,O as G}from"./index.96b44ad7.js";import{S as h}from"./sys-region-api.bc43fc5f.js";import{K as I,r as g,a1 as L,k as M,w as z,ak as l,au as E,o as v,R as O,S as o,b as d,Y as a,u as y,W as i,T as P,a as U}from"./vue.e20a9695.js";import{_ as W}from"./_plugin-vue_export-helper.c27b6911.js";import"./monacoEditor.9170b963.js";const Y={class:"card-header"},j={class:"tree-h-flex"},q={class:"tree-h-left"},F={class:"tree-h-right"},H={style:{"margin-bottom":"45px"}},J=I({__name:"regionTree",emits:["node-click"],setup(Q,{expose:x,emit:p}){const c=g(""),n=g(),s=L({loading:!1,regionData:[]});M(()=>{_()}),z(c,e=>{n.value.filter(e)});const _=async()=>{s.loading=!0;var e=await m(h).apiSysRegionListGet(0);s.regionData=e.data.result??[],s.loading=!1},w=async(e,t)=>{if(!(e.data==null||Array.isArray(e.data))){s.loading=!0;var f=await m(h).apiSysRegionListGet(e.data.id),u=f.data.result??[];s.loading=!1,t(u)}},k=()=>n.value.getCheckedKeys(),A=(e,t)=>e?t.name.includes(e):!0,N=async e=>{if(e=="expandAll")for(let t=0;t<n.value.store._getAllNodes().length;t++)n.value.store._getAllNodes()[t].expanded=!0;else if(e=="collapseAll")for(let t=0;t<n.value.store._getAllNodes().length;t++)n.value.store._getAllNodes()[t].expanded=!1;else e=="refresh"?_():e=="rootNode"&&p("node-click",{id:0,name:""})},C=e=>{p("node-click",{id:e.id,name:e.name})};return x({initTreeData:_,getCheckedKeys:k}),(e,t)=>{const f=l("el-input"),u=l("el-icon"),b=l("el-button"),r=l("el-dropdown-item"),R=l("el-dropdown-menu"),T=l("el-dropdown"),D=l("el-tree"),V=l("el-card"),S=E("loading");return v(),O(V,{class:"box-card",shadow:"hover",style:{height:"100%"},"body-style":"height:100%; overflow:auto"},{header:o(()=>[d("div",Y,[d("div",j,[d("div",q,[a(f,{"prefix-icon":y(K),modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=B=>c.value=B),placeholder:"行政区域名称"},null,8,["prefix-icon","modelValue"])]),d("div",F,[a(T,{onCommand:N},{dropdown:o(()=>[a(R,null,{default:o(()=>[a(r,{command:"expandAll"},{default:o(()=>[i("全部展开")]),_:1}),a(r,{command:"collapseAll"},{default:o(()=>[i("全部折叠")]),_:1}),a(r,{command:"rootNode"},{default:o(()=>[i("根节点")]),_:1}),a(r,{command:"refresh"},{default:o(()=>[i("刷新")]),_:1})]),_:1})]),default:o(()=>[a(b,{style:{"margin-left":"8px",width:"34px"}},{default:o(()=>[a(u,{class:"el-icon--center"},{default:o(()=>[a(y(G))]),_:1})]),_:1})]),_:1})])])])]),default:o(()=>[P((v(),U("div",H,[a(D,{ref_key:"treeRef",ref:n,class:"filter-tree",data:s.regionData,"node-key":"id",props:{children:"children",label:"name"},"filter-node-method":A,onNodeClick:C,"highlight-current":"","check-strictly":"",accordion:"",lazy:"",load:w},null,8,["data"])])),[[S,s.loading]])]),_:1})}}});const oe=W(J,[["__scopeId","data-v-e16f46e7"]]);export{oe as default};
