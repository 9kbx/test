import{l as h,n as w,p as g,s as v,q as b}from"./index.32ca2701.js";import{K as c,az as C,r as R,k as U,ak as t,o as V,a as k,Y as e,u,S as d}from"./vue.e20a9695.js";import"./monacoEditor.48edecf2.js";const y={class:"layout-pd"},A=c({name:"limitsFrontEndPage"}),z=c({...A,setup(F){const s=h(),{userInfos:a}=C(s),o=R(""),i=()=>{o.value=a.value.roles[0]},_=async()=>{w(),g.set("userName",o.value),await s.setUserInfos(),await v(),b()};return U(()=>{i()}),(I,n)=>{const l=t("el-alert"),r=t("el-radio-button"),m=t("el-radio-group"),p=t("el-card");return V(),k("div",y,[e(l,{title:"温馨提示：此权限页面代码及效果只作为演示使用，若出现不可逆转的bug，请尝试 `F5` 刷新页面。若实际项目中非要实现此用户权限切换功能，\r\n      请在切换方法 `onRadioChange` 最后面添加刷新代码 `window.location.reload()`。 请注意：按钮权限页面中的演示2（指令模式）、演示3（函数模式）\r\n      切换用户时无法动态演示，想要动态演示，请按 `F5` 或者添加 `window.location.reload()`。",type:"warning",closable:!1}),e(l,{title:`当前用户页面权限：[${u(a).roles}]，当前用户按钮权限：[${u(a).authBtnList}]`,type:"success",closable:!1,class:"mt15"},null,8,["title"]),e(p,{shadow:"hover",header:"切换用户演示，前端控制不同用户显示不同页面、按钮权限",class:"mt15"},{default:d(()=>[e(m,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=f=>o.value=f),size:"default",onChange:_},{default:d(()=>[e(r,{label:"admin"}),e(r,{label:"common"})]),_:1},8,["modelValue"])]),_:1})])}}});export{z as default};
