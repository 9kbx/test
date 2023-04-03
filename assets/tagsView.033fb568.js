import{_ as be}from"./monacoEditor.48edecf2.js";import{K as te,aC as Te,r as D,az as O,aD as _e,aG as xe,a1 as Se,l as E,I as qe,a0 as De,al as Ae,k as Ie,aJ as ke,w as Pe,ak as v,o as p,a as R,Y as M,S as Ue,b as Q,M as N,u as d,F as Z,ab as $e,a6 as b,V as T,R as j,X as Oe,n as B}from"./vue.e20a9695.js";import{S as Ee}from"./sortable.esm.be94e56d.js";import{b as ee,u as Me,ad as Ne,d as je,o as se,e as y,ae as Be,S as V,E as Fe,af as ae}from"./index.09fc6580.js";import{_ as We}from"./_plugin-vue_export-helper.c27b6911.js";const He=["data-url","onContextmenu","onMousedown","onClick"],ze={key:0,class:"iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont"},Ke=te({name:"layoutTagsView"}),Xe=te({...Ke,setup(Ye){const ie=Te(()=>be(()=>import("./contextmenu.d1cafac2.js"),["assets/contextmenu.d1cafac2.js","assets/vue.e20a9695.js","assets/_plugin-vue_export-helper.c27b6911.js","assets/contextmenu.e02295da.css"])),m=D([]),_=D(),F=D(),ne=D(),le=ee(),re=Me(),ue=ee(),ce=Ne(),{themeConfig:W}=O(re),{tagsViewRoutes:oe}=O(ue),{routesList:fe}=O(ce),h=je(),f=_e(),o=xe(),t=Se({routeActive:"",routePath:f.path,dropdown:{x:"",y:""},sortable:"",tagsRefsIndex:0,tagsViewList:[],tagsViewRoutesList:[]}),me=E(()=>W.value.tagsStyle),u=E(()=>W.value),ge=E(()=>s=>se.setTagsViewNameI18n(s)),x=s=>u.value.isShareTagsView?s.path===t.routePath:s.query&&Object.keys(s.query).length||s.params&&Object.keys(s.params).length?s.url?s.url===t.routeActive:s.path===t.routeActive:s.path===t.routePath,g=s=>{V.set("tagsViewList",s)},H=async()=>{t.routeActive=await w(f),t.routePath=await f.meta.isDynamic?f.meta.isDynamicPath:f.path,t.tagsViewList=[],t.tagsViewRoutesList=oe.value,we()},we=async()=>{V.get("tagsViewList")&&u.value.isCacheTagsView?t.tagsViewList=await V.get("tagsViewList"):(await t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=w(s),t.tagsViewList.push({...s}),h.addCachedView(s))}),await A(f.path,f)),G(u.value.isShareTagsView?t.routePath:t.routeActive)},z=async(s,e)=>{var i,r;let a=(i=e==null?void 0:e.meta)!=null&&i.isDynamic?e.meta.isDynamicPath:s;if(t.tagsViewList.filter(l=>{var c,C;return l.path===a&&ae((c=e==null?void 0:e.meta)!=null&&c.isDynamic?l.params?l.params:null:l.query?l.query:null,(C=e==null?void 0:e.meta)!=null&&C.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)}).length<=0){let l=t.tagsViewRoutesList.find(c=>c.path===a);if(!l||l.meta.isAffix||l.meta.isLink&&!l.meta.isIframe)return!1;(r=e==null?void 0:e.meta)!=null&&r.isDynamic?l.params=e.params:l.query=e==null?void 0:e.query,l.url=w(l),t.tagsViewList.push({...l}),await h.addCachedView(l),g(t.tagsViewList)}},K=(s,e)=>{var n;let a=(n=e==null?void 0:e.meta)!=null&&n.isDynamic?e.meta.isDynamicPath:s;t.tagsViewList.forEach(i=>{var r,l,c;i.path===a&&!ae((r=e==null?void 0:e.meta)!=null&&r.isDynamic?i.params?i.params:null:i.query?i.query:null,(l=e==null?void 0:e.meta)!=null&&l.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)&&((c=e==null?void 0:e.meta)!=null&&c.isDynamic?i.params=e.params:i.query=e==null?void 0:e.query,i.url=w(i),g(t.tagsViewList))})},A=(s,e)=>{B(async()=>{var n,i,r;let a;if((n=e==null?void 0:e.meta)!=null&&n.isDynamic){if(u.value.isShareTagsView?await K(s,e):await z(s,e),t.tagsViewList.some(l=>{var c;return l.path===((c=e==null?void 0:e.meta)==null?void 0:c.isDynamicPath)}))return g(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(l=>{var c;return l.path===((c=e==null?void 0:e.meta)==null?void 0:c.isDynamicPath)})}else{if(u.value.isShareTagsView?await K(s,e):await z(s,e),t.tagsViewList.some(l=>l.path===s))return g(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(l=>l.path===s)}if(!a||(i=a==null?void 0:a.meta)!=null&&i.isLink&&!a.meta.isIframe)return!1;(r=e==null?void 0:e.meta)!=null&&r.isDynamic?a.params=e!=null&&e.params?e==null?void 0:e.params:f.params:a.query=e!=null&&e.query?e==null?void 0:e.query:f.query,a.url=w(a),await h.addCachedView(a),await t.tagsViewList.push({...a}),await g(t.tagsViewList)})},X=async s=>{var n;const e=decodeURI(s);let a={};if(t.tagsViewList.forEach(i=>{i.transUrl=L(i),i.transUrl?i.transUrl===L(i)&&(a=i):i.path===e&&(a=i)}),!a)return!1;await h.delCachedView(a),y.emit("onTagsViewRefreshRouterView",s),(n=a.meta)!=null&&n.isKeepAlive&&h.addCachedView(a)},I=s=>{t.tagsViewList.map((e,a,n)=>{var i;(i=e.meta)!=null&&i.isAffix||(u.value.isShareTagsView?e.path===s:e.url===s)&&(h.delCachedView(e),t.tagsViewList.splice(a,1),setTimeout(()=>{(t.tagsViewList.length===a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)?n[n.length-1].meta.isDynamic?a!==n.length?o.push({name:n[a].name,params:n[a].params}):o.push({name:n[n.length-1].name,params:n[n.length-1].params}):a!==n.length?o.push({path:n[a].path,query:n[a].query}):o.push({path:n[n.length-1].path,query:n[n.length-1].query}):(t.tagsViewList.length!==a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)&&(n[a].meta.isDynamic?o.push({name:n[a].name,params:n[a].params}):o.push({path:n[a].path,query:n[a].query}))},0))}),g(t.tagsViewList)},he=s=>{V.get("tagsViewList")&&(t.tagsViewList=[],V.get("tagsViewList").map(e=>{var a;(a=e.meta)!=null&&a.isAffix&&!e.meta.isHide&&(e.url=w(e),h.delOthersCachedViews(e),t.tagsViewList.push({...e}))}),A(s,f),g(t.tagsViewList))},pe=()=>{V.get("tagsViewList")&&(h.delAllCachedViews(),t.tagsViewList=[],V.get("tagsViewList").map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=w(s),t.tagsViewList.push({...s}),o.push({path:t.tagsViewList[t.tagsViewList.length-1].path}))}),g(t.tagsViewList))},de=async s=>{const e=t.tagsViewList.find(a=>u.value.isShareTagsView?a.path===s:a.url===s);e.meta.isDynamic?await o.push({name:e.name,params:e.params}):await o.push({name:e.name,query:e.query}),le.setCurrenFullscreen(!0)},Y=s=>{let e={};return t.tagsViewList.forEach(a=>{a.transUrl=L(a),a.transUrl?a.transUrl===L(a)&&a.transUrl===s.commonUrl&&(e=a):a.path===decodeURI(s.path)&&(e=a)}),e||null},k=async s=>{if(s.commonUrl=L(s),!Y(s))return Fe({type:"warning",message:"请正确输入路径及完整参数（query、params）"});const{path:e,name:a,params:n,query:i,meta:r,url:l}=Y(s);switch(s.contextMenuClickId){case 0:r.isDynamic?await o.push({name:a,params:n}):await o.push({path:e,query:i}),X(f.fullPath);break;case 1:I(u.value.isShareTagsView?e:l);break;case 2:r.isDynamic?await o.push({name:a,params:n}):await o.push({path:e,query:i}),he(e);break;case 3:pe();break;case 4:de(u.value.isShareTagsView?e:l);break}},ye=(s,e)=>{const{clientX:a,clientY:n}=e;t.dropdown.x=a,t.dropdown.y=n,F.value.openContextmenu(s)},Ve=(s,e)=>{var a;if(!((a=s.meta)!=null&&a.isAffix)&&e.button===1){const n=Object.assign({},{contextMenuClickId:1,...s});k(n)}},Le=(s,e)=>{t.tagsRefsIndex=e,o.push(s),u.value.layout==="columns"&&(fe.value.find(n=>n.path.indexOf(`/${s.path.split("/")[1]}`)>-1).children?u.value.isCollapse=!1:u.value.isCollapse=!0)},L=s=>{var n,i;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e)return"";let a="";for(let[r,l]of Object.entries(e))(n=s.meta)!=null&&n.isDynamic?a+=`/${l}`:a+=`&${r}=${l}`;return(i=s.meta)!=null&&i.isDynamic?s.isFnClick?decodeURI(s.path):`${s.path.split(":")[0]}${a.replace(/^\//,"")}`:`${s.path}${a.replace(/^&/,"?")}`},w=s=>{var n;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e||Object.keys(e).length<=0)return s.path;let a="";for(let i in e)a+=e[i];return`${(n=s.meta)!=null&&n.isDynamic?s.meta.isDynamicPath:s.path}-${a}`},Ce=s=>{_.value.$refs.wrapRef.scrollLeft+=s.wheelDelta/4},Re=()=>{B(()=>{if(m.value.length<=0)return!1;let s=m.value[t.tagsRefsIndex],e=t.tagsRefsIndex,a=m.value.length,n=m.value[0],i=m.value[m.value.length-1],r=_.value.$refs.wrapRef,l=r.scrollWidth,c=r.offsetWidth,C=r.scrollLeft,$=m.value[t.tagsRefsIndex-1],J=m.value[t.tagsRefsIndex+1],S=0,q=0;s===n?r.scrollLeft=0:s===i?r.scrollLeft=l-c:(e===0?S=n.offsetLeft-5:S=($==null?void 0:$.offsetLeft)-5,e===a?q=i.offsetLeft+i.offsetWidth+5:q=J.offsetLeft+J.offsetWidth+5,q>C+c?r.scrollLeft=q-c:S<C&&(r.scrollLeft=S)),_.value.update()})},G=s=>{B(async()=>{let e=await t.tagsViewList;t.tagsRefsIndex=e.findIndex(a=>u.value.isShareTagsView?a.path===s:a.url===s),Re()})},P=async()=>{const s=document.querySelector(".layout-navbars-tagsview-ul");if(!s)return!1;t.sortable.el&&t.sortable.destroy(),t.sortable=Ee.create(s,{animation:300,dataIdAttr:"data-url",disabled:!u.value.isSortableTagsView,onEnd:()=>{const e=[];t.sortable.toArray().map(a=>{t.tagsViewList.map(n=>{n.url===a&&e.push({...n})})}),g(e)}})},U=async()=>{await P(),se.isMobile()&&t.sortable.el&&t.sortable.destroy()};return qe(()=>{U(),window.addEventListener("resize",U),y.on("onCurrentContextmenuClick",s=>{s.isFnClick=!0,k(s)}),y.on("openOrCloseSortable",()=>{P()}),y.on("openShareTagsView",()=>{u.value.isShareTagsView&&(o.push("/home"),t.tagsViewList=[],t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=w(s),t.tagsViewList.push({...s}))}))})}),De(()=>{y.off("onCurrentContextmenuClick",()=>{}),y.off("openOrCloseSortable",()=>{}),y.off("openShareTagsView",()=>{}),window.removeEventListener("resize",U)}),Ae(()=>{m.value=[]}),Ie(()=>{H(),P()}),ke(async s=>{t.routeActive=w(s),t.routePath=s.meta.isDynamic?s.meta.isDynamicPath:s.path,await A(s.path,s),G(u.value.isShareTagsView?t.routePath:t.routeActive)}),Pe(Be.state,s=>{if(s.tagsViewRoutes.tagsViewRoutes.length===t.tagsViewRoutesList.length)return!1;H()},{deep:!0}),(s,e)=>{const a=v("SvgIcon"),n=v("el-scrollbar");return p(),R("div",{class:N(["layout-navbars-tagsview",{"layout-navbars-tagsview-shadow":d(u).layout==="classic"}])},[M(n,{ref_key:"scrollbarRef",ref:_,onWheel:b(Ce,["prevent"])},{default:Ue(()=>[Q("ul",{class:N(["layout-navbars-tagsview-ul",d(me)]),ref_key:"tagsUlRef",ref:ne},[(p(!0),R(Z,null,$e(t.tagsViewList,(i,r)=>(p(),R("li",{key:r,class:N(["layout-navbars-tagsview-ul-li",{"is-active":x(i)}]),"data-url":i.url,onContextmenu:b(l=>ye(i,l),["prevent"]),onMousedown:l=>Ve(i,l),onClick:l=>Le(i,r),ref_for:!0,ref:l=>{l&&(m.value[r]=l)}},[x(i)?(p(),R("i",ze)):T("",!0),!x(i)&&d(u).isTagsviewIcon?(p(),j(a,{key:1,name:i.meta.icon,class:"pr5"},null,8,["name"])):T("",!0),Q("span",null,Oe(d(ge)(i)),1),x(i)?(p(),R(Z,{key:2},[M(a,{name:"ele-RefreshRight",class:"ml5 layout-navbars-tagsview-ul-li-refresh",onClick:e[0]||(e[0]=b(l=>X(s.$route.fullPath),["stop"]))}),i.meta.isAffix?T("",!0):(p(),j(a,{key:0,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-active",onClick:b(l=>I(d(u).isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],64)):T("",!0),i.meta.isAffix?T("",!0):(p(),j(a,{key:3,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-three",onClick:b(l=>I(d(u).isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],42,He))),128))],2)]),_:1},8,["onWheel"]),M(d(ie),{dropdown:t.dropdown,ref_key:"contextmenuRef",ref:F,onCurrentContextmenuClick:k},null,8,["dropdown"])],2)}}});const es=We(Xe,[["__scopeId","data-v-2622bed9"]]);export{es as default};
