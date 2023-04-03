import{K as u,r as c,a1 as b,k,ak as w,T as S,Z as T,o,a as i,b as d,M as W,V as f,X as B,L as O,R as I,O as m,n as A}from"./vue.e20a9695.js";import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";const $={key:1,class:"notice-bar-warp-slot"},N=u({name:"noticeBar"}),_=u({...N,props:{mode:{type:String,default:()=>""},text:{type:String,default:()=>""},color:{type:String,default:()=>"var(--el-color-warning)"},background:{type:String,default:()=>"var(--el-color-warning-light-9)"},size:{type:[Number,String],default:()=>14},height:{type:Number,default:()=>40},delay:{type:Number,default:()=>1},speed:{type:Number,default:()=>100},scrollable:{type:Boolean,default:()=>!1},leftIcon:{type:String,default:()=>""},rightIcon:{type:String,default:()=>""}},emits:["close","link"],setup(t,{emit:s}){const a=t,l=c(),n=c(),e=b({order:1,oneTime:0,twoTime:0,warpOWidth:0,textOWidth:0,isMode:!1}),y=()=>{A(()=>{e.warpOWidth=l.value.offsetWidth,e.textOWidth=n.value.offsetWidth,document.styleSheets[0].insertRule(`@keyframes oneAnimation {0% {left: 0px;} 100% {left: -${e.textOWidth}px;}}`),document.styleSheets[0].insertRule(`@keyframes twoAnimation {0% {left: ${e.warpOWidth}px;} 100% {left: -${e.textOWidth}px;}}`),p(),setTimeout(()=>{r()},a.delay*1e3)})},p=()=>{e.oneTime=e.textOWidth/a.speed,e.twoTime=(e.textOWidth+e.warpOWidth)/a.speed},r=()=>{e.order===1?(n.value.style.cssText=`animation: oneAnimation ${e.oneTime}s linear; opactity: 1;}`,e.order=2):n.value.style.cssText=`animation: twoAnimation ${e.twoTime}s linear infinite; opacity: 1;`},h=()=>{n.value.addEventListener("animationend",()=>{r()},!1)},g=()=>{if(!a.mode)return!1;a.mode==="closeable"?(e.isMode=!0,s("close")):a.mode==="link"&&s("link")};return k(()=>{if(a.scrollable)return!1;y(),h()}),(x,C)=>{const v=w("SvgIcon");return S((o(),i("div",{class:"notice-bar",style:m({background:t.background,height:`${t.height}px`})},[d("div",{class:"notice-bar-warp",style:m({color:t.color,fontSize:`${t.size}px`})},[t.leftIcon?(o(),i("i",{key:0,class:W(["notice-bar-warp-left-icon",t.leftIcon])},null,2)):f("",!0),d("div",{class:"notice-bar-warp-text-box",ref_key:"noticeBarWarpRef",ref:l},[t.scrollable?(o(),i("div",$,[O(x.$slots,"default",{},void 0,!0)])):(o(),i("div",{key:0,class:"notice-bar-warp-text",ref_key:"noticeBarTextRef",ref:n},B(t.text),513))],512),t.rightIcon?(o(),I(v,{key:1,name:t.rightIcon,class:"notice-bar-warp-right-icon",onClick:g},null,8,["name"])):f("",!0)],4)],4)),[[T,!e.isMode]])}}});const V=R(_,[["__scopeId","data-v-eaf205fb"]]);export{V as default};
