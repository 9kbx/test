import{_ as u}from"./monacoEditor.9170b963.js";import{E as k}from"./index.96b44ad7.js";import{K as h,aC as f,r as c,a1 as x,ak as r,o as C,a as V,Y as e,S as o,u as _,b as P,W as p}from"./vue.e20a9695.js";const D={class:"form-rules-container layout-pd"},I={class:"flex-margin"},b=h({name:"pagesFormRules"}),L=h({...b,setup(A){const v=f(()=>u(()=>import("./formRulesOne.c30bdaff.js"),["./formRulesOne.c30bdaff.js","./vue.e20a9695.js"],import.meta.url)),F=f(()=>u(()=>import("./formRulesTwo.be3b6802.js"),["./formRulesTwo.be3b6802.js","./vue.e20a9695.js"],import.meta.url)),g=f(()=>u(()=>import("./formRulesThree.db45a81f.js"),["./formRulesThree.db45a81f.js","./vue.e20a9695.js"],import.meta.url)),a=c(),l=c(),n=c(),T=x({formRulesOneData:{name:"lyt",email:"lyt123@.com",autograph:"lyt123456",occupation:"1"}}),m=(i,d)=>new Promise(s=>{i.value.$refs[d].validate(t=>{t&&s(t)})}),w=()=>{a.value.$refs.formRulesOneRef.resetFields(),l.value.$refs.formRulesTwoRef.resetFields(),n.value.$refs.formRulesThreeRef.resetFields()},y=()=>{Promise.all([m(a,"formRulesOneRef"),m(l,"formRulesTwoRef"),m(n,"formRulesThreeRef")]).then(()=>{k.success("表单全部验证成功")})},O=()=>{w()};return(i,d)=>{const s=r("el-card"),t=r("SvgIcon"),R=r("el-button"),E=r("el-row");return C(),V("div",D,[e(s,{shadow:"hover",header:"表单组件1"},{default:o(()=>[e(_(v),{data:T.formRulesOneData,ref_key:"pagesFormRulesOneRef",ref:a},null,8,["data"])]),_:1}),e(s,{shadow:"hover",header:"表单组件2",class:"mt15"},{default:o(()=>[e(_(F),{ref_key:"pagesFormRulesTwoRef",ref:l},null,512)]),_:1}),e(s,{shadow:"hover",header:"表单组件3",class:"mt15"},{default:o(()=>[e(_(g),{ref_key:"pagesFormRulesThreeRef",ref:n},null,512)]),_:1}),e(E,{class:"flex mt15"},{default:o(()=>[P("div",I,[e(R,{size:"default",onClick:O},{default:o(()=>[e(t,{name:"ele-RefreshRight"}),p(" 重置表单 ")]),_:1}),e(R,{size:"default",type:"primary",onClick:y},{default:o(()=>[e(t,{name:"iconfont icon-shuxing"}),p(" 验证表单 ")]),_:1})])]),_:1})])}}});export{L as default};
