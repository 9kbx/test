import{K as n,aG as _,ak as e,o as u,a as m,Y as t,S as o,W as p}from"./vue.e20a9695.js";const d={class:"layout-pd"},f=n({name:"limitsBackEndEndPage"}),y=n({...f,setup(g){const s=_(),a=()=>{s.push("/limits/frontEnd/page")};return(h,x)=>{const l=e("el-alert"),c=e("ele-Position"),i=e("el-icon"),r=e("el-button");return u(),m("div",d,[t(l,{title:"温馨提示：1、此页面无法模拟后端控制路由，因为 `gitee` 上所请求的 `json` 菜单数据线上会出现跨域的情况（json地址：\n      https://gitee.com/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json）。2、本地接口请求文件位置：`/src/api/menu/index.ts`。\n      3、拉取代码后本地请求查看后端控制页面路由效果：`/src/store/modules/themeConfig.ts`中开启（isRequestRoutes 为 true，则开启后端控制路由）。\n      4、此页面效果只作为演示使用，若出现不可逆转的bug，请尝试 `F5` 刷新页面。5、默认启用的是 `前端控制路由`。",type:"warning",closable:!1}),t(r,{type:"primary",size:"default",class:"mt15",onClick:a},{default:o(()=>[t(i,null,{default:o(()=>[t(c)]),_:1}),p(" 立即前往前端控制路由 ")]),_:1})])}}});export{y as default};
