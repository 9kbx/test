import{K as _,r as m,ak as o,o as c,a as f,Y as e,S as n,R as i,V as v,W as k}from"./vue.e20a9695.js";const h={class:"steps-container layout-pd"},y=_({name:"pagesSteps"}),g=_({...y,setup(b){const t=m(1),r=()=>{t.value++>2&&(t.value=1)};return(x,C)=>{const s=o("SvgIcon"),a=o("el-step"),u=o("el-steps"),l=o("el-result"),p=o("el-button"),d=o("el-card");return c(),f("div",h,[e(d,{shadow:"hover",header:"element-plus 步骤条"},{default:n(()=>[e(u,{active:t.value},{default:n(()=>[e(a,{title:"第一步"},{icon:n(()=>[e(s,{name:"iconfont icon-0_round_solid",size:40})]),_:1}),e(a,{title:"第二步"},{icon:n(()=>[e(s,{name:"iconfont icon-2_round_solid",size:40})]),_:1}),e(a,{title:"第三步"},{icon:n(()=>[e(s,{name:"iconfont icon-3_round_solid",size:40})]),_:1})]),_:1},8,["active"]),t.value===1?(c(),i(l,{key:0,icon:"success",title:"成功提示",subTitle:"请根据提示进行操作"})):t.value===2?(c(),i(l,{key:1,icon:"warning",title:"警告提示",subTitle:"请根据提示进行操作"})):t.value===3?(c(),i(l,{key:2,icon:"error",title:"错误提示",subTitle:"请根据提示进行操作"})):v("",!0),e(p,{onClick:r,size:"default",class:"mt15",type:"primary"},{default:n(()=>[e(s,{name:"iconfont icon-step"}),k(" 下一步 ")]),_:1})]),_:1})])}}});export{g as default};
