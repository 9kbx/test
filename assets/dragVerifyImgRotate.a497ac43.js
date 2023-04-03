import{_ as u}from"./_plugin-vue_export-helper.c27b6911.js";import{o as d,a as f,b as n,M as g,O as o,X as l,V as c}from"./vue.e20a9695.js";const y={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"验证通过"},failTip:{type:String,default:"验证失败"},diffDegree:{type:Number,default:10},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270}},mounted:function(){const s=this.$refs.dragVerify;s.style.setProperty("--textColor",this.textColor),s.style.setProperty("--width",Math.floor(this.width/2)+"px"),s.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",marginTop:"20px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",height:this.width+"px",position:"relative",overflow:"hidden","border-radius":"50%"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}},factor:function(){return this.minDegree==this.maxDegree?Math.floor(1+Math.random()*6)/10+1:1}},data(){return{isMoving:!1,x:0,isOk:!1,showBar:!1,showErrorTip:!1,ranRotate:0,cRotate:0,imgStyle:{}}},methods:{checkimgLoaded:function(){var s=this.minDegree,e=this.maxDegree,i=Math.floor(s+Math.random()*(e-s));this.ranRotate=i,this.imgStyle={transform:`rotateZ(${i}deg)`}},dragStart:function(s){this.isPassing||(this.isMoving=!0,this.x=s.pageX||s.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.touches[0].pageX)-this.x,i=this.$refs.handler;i.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px";var a=Math.ceil(e/(this.width-this.height)*this.maxDegree*this.factor);this.cRotate=a;var h=this.ranRotate-a;this.imgStyle={transform:`rotateZ(${h}deg)`}}},dragFinish:function(s){if(this.isMoving&&!this.isPassing){if(Math.abs(this.ranRotate-this.cRotate)>this.diffDegree){this.isOk=!0,this.imgStyle={transform:`rotateZ(${this.ranRotate}deg)`};var e=this;setTimeout(function(){e.$refs.handler.style.left="0",e.$refs.progressBar.style.width="0",e.isOk=!1},500),this.showErrorTip=!0,this.$emit("passfail")}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1;var s=this.$refs.handler;s.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const s=this.$options.data();for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&(this[a]=s[a]);var e=this.$refs.handler,i=this.$refs.message;e.style.left="0",this.$refs.progressBar.style.width="0",e.children[0].className=this.handlerIcon,i.style["-webkit-text-fill-color"]="transparent",i.style.animation="slidetounlock 3s infinite",i.style.color=this.background},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}};const m={class:"drag-verify-container"},p=["src"],v={key:0,class:"tips success"},x={key:1,class:"tips danger"};function S(s,e,i,a,h,t){return d(),f("div",m,[n("div",{style:o([t.dragVerifyImgStyle,{"background-color":"var(--el-color-primary)"}])},[n("img",{ref:"checkImg",src:i.imgsrc,class:g(["check-img",{goOrigin:h.isOk}]),onLoad:e[0]||(e[0]=(...r)=>t.checkimgLoaded&&t.checkimgLoaded(...r)),style:o(h.imgStyle),alt:""},null,46,p),i.showTips&&i.isPassing?(d(),f("div",v,l(i.successTip),1)):c("",!0),i.showTips&&!i.isPassing&&h.showErrorTip?(d(),f("div",x,l(i.failTip),1)):c("",!0)],4),n("div",{ref:"dragVerify",class:"drag_verify",style:o(t.dragVerifyStyle),onMousemove:e[3]||(e[3]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onMouseup:e[4]||(e[4]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onMouseleave:e[5]||(e[5]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onTouchmove:e[6]||(e[6]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onTouchend:e[7]||(e[7]=(...r)=>t.dragFinish&&t.dragFinish(...r))},[n("div",{class:g(["dv_progress_bar",{goFirst2:h.isOk}]),ref:"progressBar",style:o(t.progressBarStyle)},l(t.successMessage),7),n("div",{class:"dv_text",style:o(t.textStyle),ref:"message"},l(t.message),5),n("div",{class:g(["dv_handler dv_handler_bg",{goFirst:h.isOk}]),onMousedown:e[1]||(e[1]=(...r)=>t.dragStart&&t.dragStart(...r)),onTouchstart:e[2]||(e[2]=(...r)=>t.dragStart&&t.dragStart(...r)),ref:"handler",style:o([t.handlerStyle,{"background-color":"var(--el-color-primary)"}])},[n("i",{class:g(i.handlerIcon),style:{color:"#FFF"}},null,2)],38)],36)])}const M=u(y,[["render",S],["__scopeId","data-v-af9ef4f8"]]);export{M as default};
