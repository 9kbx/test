import{f as s}from"./formatTime.29ac8c52.js";import{K as o,a1 as _,I as i,a0 as d,o as m,a as p,b as t,X as r,aE as l,aF as u}from"./vue.e20a9695.js";import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";const n=a=>(l("data-v-23b83ee7"),a=a(),u(),a),h={class:"big-data-up mb15"},v={class:"up-left"},x=n(()=>t("i",{class:"el-icon-time mr5"},null,-1)),Q=n(()=>t("div",{class:"up-center"},[t("span",null,"智慧农业系统平台")],-1)),S=o({name:"chartHead"}),Y=o({...S,setup(a){const e=_({time:{txt:"",fun:0}}),c=()=>{e.time.txt=s(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ"),e.time.fun=window.setInterval(()=>{e.time.txt=s(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ")},1e3)};return i(()=>{c()}),d(()=>{window.clearInterval(e.time.fun)}),(w,I)=>(m(),p("div",h,[t("div",v,[x,t("span",null,r(e.time.txt),1)]),Q]))}});const M=f(Y,[["__scopeId","data-v-23b83ee7"]]);export{M as default};
