import{K as p,a1 as g,l as y,k as v,a0 as b,w as L,ak as S,o,R as V,S as I,T as M,a,O as d,u,b as i,F as m,ab as E,Y as $,X as B,V as O,Z as T,_ as W}from"./vue.e20a9695.js";import{_ as D}from"./_plugin-vue_export-helper.c27b6911.js";const F={class:"el-dropdown-menu"},N=["onClick"],R=p({name:"layoutTagsViewContextmenu"}),j=p({...R,props:{dropdown:{type:Object,default:()=>({x:0,y:0})}},emits:["currentContextmenuClick"],setup(f,{expose:x,emit:_}){const n=f,e=g({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"message.tagsView.refresh",affix:!1,icon:"ele-RefreshRight"},{contextMenuClickId:1,txt:"message.tagsView.close",affix:!1,icon:"ele-Close"},{contextMenuClickId:2,txt:"message.tagsView.closeOther",affix:!1,icon:"ele-CircleClose"},{contextMenuClickId:3,txt:"message.tagsView.closeAll",affix:!1,icon:"ele-FolderDelete"},{contextMenuClickId:4,txt:"message.tagsView.fullscreen",affix:!1,icon:"iconfont icon-fullscreen"}],item:{},arrowLeft:10}),r=y(()=>n.dropdown.x+117>document.documentElement.clientWidth?{x:document.documentElement.clientWidth-117-5,y:n.dropdown.y}:n.dropdown),w=t=>{_("currentContextmenuClick",Object.assign({},{contextMenuClickId:t},e.item))},C=t=>{var l;e.item=t,(l=t.meta)!=null&&l.isAffix?e.dropdownList[1].affix=!0:e.dropdownList[1].affix=!1,c(),setTimeout(()=>{e.isShow=!0},10)},c=()=>{e.isShow=!1};return v(()=>{document.body.addEventListener("click",c)}),b(()=>{document.body.removeEventListener("click",c)}),L(()=>n.dropdown,({x:t})=>{t+117>document.documentElement.clientWidth?e.arrowLeft=117-(document.documentElement.clientWidth-t):e.arrowLeft=10},{deep:!0}),x({openContextmenu:C}),(t,l)=>{const h=S("SvgIcon");return o(),V(W,{name:"el-zoom-in-center"},{default:I(()=>[M((o(),a("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:d(`top: ${u(r).y+5}px;left: ${u(r).x}px;`),key:Math.random()},[i("ul",F,[(o(!0),a(m,null,E(e.dropdownList,(s,k)=>(o(),a(m,null,[s.affix?O("",!0):(o(),a("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:k,onClick:z=>w(s.contextMenuClickId)},[$(h,{name:s.icon},null,8,["name"]),i("span",null,B(t.$t(s.txt)),1)],8,N))],64))),256))]),i("div",{class:"el-popper__arrow",style:d({left:`${e.arrowLeft}px`})},null,4)],4)),[[T,e.isShow]])]),_:1})}}});const U=D(j,[["__scopeId","data-v-fb9242e5"]]);export{U as default};
