import{K as h,r as y,aD as w,l as d,w as m,au as I,o as n,a as o,b as k,F as O,ab as b,u as c,T as p,Y as v,S as x,Z as L,a4 as R,n as S}from"./vue.e20a9695.js";const T={class:"layout-padding layout-padding-unset layout-iframe"},B={class:"layout-padding-auto layout-padding-view"},D=["src","data-url"],K=h({name:"layoutIframeView"}),V=h({...K,props:{refreshKey:{type:String,default:()=>""},name:{type:String,default:()=>"slide-right"},list:{type:Array,default:()=>[]}},setup(f){const r=f,l=y(),i=w(),g=d(()=>r.list.filter(e=>{var a;return(a=e.meta)==null?void 0:a.isIframeOpen})),_=d(()=>i.path),u=(e,a)=>{S(()=>{if(!l.value)return!1;l.value.forEach(s=>{s.dataset.url===e&&(s.onload=()=>{var t;(t=a.meta)!=null&&t.isIframeOpen&&a.meta.loading&&(a.meta.loading=!1)})})})};return m(()=>i.fullPath,e=>{const a=r.list.find(s=>s.path===e);if(!a)return!1;a.meta.isIframeOpen||(a.meta.isIframeOpen=!0),u(e,a)},{immediate:!0}),m(()=>r.refreshKey,()=>{const e=r.list.find(a=>a.path===i.path);if(!e)return!1;e.meta.isIframeOpen&&(e.meta.isIframeOpen=!1),setTimeout(()=>{e.meta.isIframeOpen=!0,e.meta.loading=!0,u(i.fullPath,e)})},{deep:!0}),(e,a)=>{const s=I("loading");return n(),o("div",T,[k("div",B,[(n(!0),o(O,null,b(c(g),t=>p((n(),o("div",{class:"w100",key:t.path,"element-loading-background":"white"},[v(R,{name:f.name},{default:x(()=>[p((n(),o("iframe",{src:t.meta.isLink,key:t.path,frameborder:"0",height:"100%",width:"100%",style:{position:"absolute"},"data-url":t.path,ref_for:!0,ref_key:"iframeRef",ref:l},null,8,D)),[[L,c(_)===t.path]])]),_:2},1032,["name"])])),[[s,t.meta.loading]])),128))])])}}});export{V as default};
