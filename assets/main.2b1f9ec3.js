import{_ as i}from"./monacoEditor.9170b963.js";import{K as d,aC as u,r as H,aD as L,az as _,l as a,k as M,ak as o,o as m,R as p,S as f,Y as s,u as e,V as E,O as N}from"./vue.e20a9695.js";import{b as P,u as S,N as A}from"./index.96b44ad7.js";const B=d({name:"layoutMain"}),$=d({...B,setup(D,{expose:y}){const g=u(()=>i(()=>import("./parent.6e731d4b.js"),["./parent.6e731d4b.js","./monacoEditor.9170b963.js","./monacoEditor.613065c2.css","./vue.e20a9695.js","./index.96b44ad7.js","./index.32da498c.css"],import.meta.url)),b=u(()=>i(()=>import("./index.e5b5c863.js"),["./index.e5b5c863.js","./vue.e20a9695.js","./_plugin-vue_export-helper.c27b6911.js","./index.69034cba.css"],import.meta.url)),r=H(),k=L(),x=P(),h=S(),{themeConfig:t}=_(h),{isTagsViewCurrenFull:v}=_(x),C=a(()=>t.value.isFooter&&!k.meta.isIframe),w=a(()=>t.value.isFixedHeader),R=a(()=>t.value.isFixedHeader?".layout-backtop-header-fixed .el-scrollbar__wrap":".layout-backtop .el-scrollbar__wrap"),l=a(()=>{if(v.value)return"0px";const{isTagsview:n,layout:c}=t.value;return n&&c!=="classic"?"85px":"51px"});return M(()=>{A.done(600)}),y({layoutMainScrollbarRef:r}),(n,c)=>{const T=o("el-scrollbar"),V=o("el-backtop"),F=o("el-main");return m(),p(F,{class:"layout-main",style:N(e(w)?`height: calc(100% - ${e(l)})`:`minHeight: calc(100% - ${e(l)})`)},{default:f(()=>[s(T,{ref_key:"layoutMainScrollbarRef",ref:r,class:"layout-main-scroll layout-backtop-header-fixed","wrap-class":"layout-main-scroll","view-class":"layout-main-scroll"},{default:f(()=>[s(e(g)),e(C)?(m(),p(e(b),{key:0})):E("",!0)]),_:1},512),s(V,{target:e(R)},null,8,["target"])]),_:1},8,["style"])}}});export{$ as default};
