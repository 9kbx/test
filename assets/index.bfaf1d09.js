import{K as m,l as o,u as t,o as i,a as l,R as S,U as z,O as c,b as I,M as _}from"./vue.e20a9695.js";const $=["src"],x=m({name:"svgIcon"}),v=m({...x,props:{name:{type:String},size:{type:Number,default:()=>14},color:{type:String}},setup(p){const e=p,u=["https","http","/src","/assets","data:image","/test/"],a=o(()=>e==null?void 0:e.name),h=o(()=>{var s;return(s=e==null?void 0:e.name)==null?void 0:s.startsWith("ele-")}),d=o(()=>u.find(s=>{var n;return(n=e.name)==null?void 0:n.startsWith(s)})),r=o(()=>`font-size: ${e.size}px;color: ${e.color};`),y=o(()=>`width: ${e.size}px;height: ${e.size}px;display: inline-block;overflow: hidden;`),f=o(()=>{const s=[];return["-webkit","-ms","-o","-moz"].forEach(g=>s.push(`${g}-filter: drop-shadow(${e.color} 30px 0);`)),`width: ${e.size}px;height: ${e.size}px;position: relative;left: -${e.size}px;${s.join("")}`});return(s,n)=>t(h)?(i(),l("i",{key:0,class:"el-icon",style:c(t(r))},[(i(),S(z(t(a))))],4)):t(d)?(i(),l("div",{key:1,style:c(t(y))},[I("img",{src:t(a),style:c(t(f))},null,12,$)],4)):(i(),l("i",{key:2,class:_(t(a)),style:c(t(r))},null,6))}});export{v as default};
