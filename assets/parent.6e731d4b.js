import{_ as I}from"./monacoEditor.9170b963.js";import{K as V,aC as P,aD as x,aG as B,az as v,a1 as D,l as f,I as E,n as _,k as S,a0 as U,w as M,ak as O,o as l,a as z,Y as r,S as c,_ as d,u as s,R as w,T as R,Z as y,U as G,aH as H}from"./vue.e20a9695.js";import{d as Y,u as Z,e as K,S as b}from"./index.96b44ad7.js";const j={class:"layout-parent"},q=V({name:"layoutParentView"}),X=V({...q,setup(F){const g=P(()=>I(()=>import("./iframes.8a6bc1c0.js"),["./iframes.8a6bc1c0.js","./vue.e20a9695.js"],import.meta.url)),i=x(),A=B(),k=Y(),T=Z(),{keepAliveNames:n,cachedViews:p}=v(k),{themeConfig:m}=v(T),e=D({refreshRouterViewKey:"",iframeRefreshKey:"",keepAliveNameList:[],iframeList:[]}),u=f(()=>m.value.animation),L=f(()=>m.value.isTagsview?p.value:e.keepAliveNameList),h=f(()=>i.meta.isIframe),N=async()=>{A.getRoutes().forEach(a=>{a.meta.isIframe&&(a.meta.isIframeOpen=!1,a.meta.loading=!0,e.iframeList.push({...a}))})};return E(()=>{e.keepAliveNameList=n.value,K.on("onTagsViewRefreshRouterView",a=>{e.keepAliveNameList=n.value.filter(t=>i.name!==t),e.refreshRouterViewKey="",e.iframeRefreshKey="",_(()=>{e.refreshRouterViewKey=a,e.iframeRefreshKey=a,e.keepAliveNameList=n.value})})}),S(()=>{N(),_(()=>{setTimeout(()=>{if(m.value.isCacheTagsView){let a=b.get("tagsViewList")||[];p.value=a.filter(t=>{var o;return(o=t.meta)==null?void 0:o.isKeepAlive}).map(t=>t.name)}},0)})}),U(()=>{K.off("onTagsViewRefreshRouterView",()=>{})}),M(()=>i.fullPath,()=>{e.refreshRouterViewKey=decodeURI(i.fullPath)},{immediate:!0}),(a,t)=>{const o=O("router-view");return l(),z("div",j,[r(o,null,{default:c(({Component:C})=>[r(d,{name:s(u),mode:"out-in"},{default:c(()=>[(l(),w(H,{include:s(L)},[R((l(),w(G(C),{key:e.refreshRouterViewKey,class:"w100"})),[[y,!s(h)]])],1032,["include"]))]),_:2},1032,["name"])]),_:1}),r(d,{name:s(u),mode:"out-in"},{default:c(()=>[R(r(s(g),{class:"w100",refreshKey:e.iframeRefreshKey,name:s(u),list:e.iframeList},null,8,["refreshKey","name","list"]),[[y,s(h)]])]),_:1},8,["name"])])}}});export{X as default};
