import{K as F,r as W,a1 as X,k as Y,a0 as G,ak as i,au as k,o as c,a as H,Y as l,S as a,ac as J,T as f,R as _,W as d,X as Z,b as m}from"./vue.e20a9695.js";import{e as V,f as b,E as C,z as ee}from"./index.96b44ad7.js";import{d as le}from"./download.b0f01c01.js";import{S as h}from"./sys-file-api.aac04d56.js";import"./monacoEditor.9170b963.js";const ae={class:"sys-file-container"},te={style:{color:"#fff"}},oe=m("span",null," 上传文件 ",-1),ie=m("div",{class:"el-upload__text"},[d("将文件拖到此处，或"),m("em",null,"点击上传")],-1),ne=m("div",{class:"el-upload__tip"},"请上传大小不超过 10MB 的文件",-1),se={class:"dialog-footer"},re=F({name:"sysFile"}),_e=F({...re,setup(de){const q=W(),e=X({loading:!1,fileData:[],queryParams:{fileName:void 0,startTime:void 0,endTime:void 0},tableParams:{page:1,pageSize:10,total:0},dialogVisible:!1,fileList:[]});Y(async()=>{s(),V.on("submitRefresh",()=>{s()})}),G(()=>{V.off("submitRefresh")});const s=async()=>{var g,p;e.queryParams.startTime==null&&(e.queryParams.startTime=void 0),e.queryParams.endTime==null&&(e.queryParams.endTime=void 0),e.loading=!0;let n=Object.assign(e.queryParams,e.tableParams);var o=await b(h).apiSysFilePagePost(n);e.fileData=((g=o.data.result)==null?void 0:g.items)??[],e.tableParams.total=(p=o.data.result)==null?void 0:p.total,e.loading=!1},z=()=>{e.queryParams.fileName=void 0,e.queryParams.startTime=void 0,e.queryParams.endTime=void 0,s()},T=()=>{e.fileList=[],e.dialogVisible=!0},S=(n,o)=>{e.fileList=o},U=async()=>{e.fileList.length<1||(await b(h).apiSysFileUploadFilePostForm(e.fileList[0].raw),s(),C.success("上传成功"),e.dialogVisible=!1)},N=async n=>{le({url:n.url})},B=n=>{ee.confirm(`确定删除文件：【${n.fileName}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await b(h).apiSysFileDeletePost({id:n.id}),s(),C.success("删除成功")}).catch(()=>{})},D=n=>{e.tableParams.pageSize=n,s()},L=n=>{e.tableParams.page=n,s()};return(n,o)=>{const g=i("el-input"),p=i("el-form-item"),w=i("el-date-picker"),u=i("el-button"),R=i("el-button-group"),K=i("el-form"),v=i("el-card"),r=i("el-table-column"),E=i("el-tag"),M=i("el-image"),$=i("el-table"),j=i("el-pagination"),P=i("ele-UploadFilled"),x=i("el-icon"),A=i("el-upload"),Q=i("el-dialog"),y=k("auth"),I=k("loading");return c(),H("div",ae,[l(v,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:a(()=>[l(K,{model:e.queryParams,ref:"queryForm",inline:!0},{default:a(()=>[l(p,{label:"文件名称",prop:"fileName"},{default:a(()=>[l(g,{placeholder:"文件名称",clearable:"",onKeyup:J(s,["enter"]),modelValue:e.queryParams.fileName,"onUpdate:modelValue":o[0]||(o[0]=t=>e.queryParams.fileName=t)},null,8,["onKeyup","modelValue"])]),_:1}),l(p,{label:"开始时间",prop:"name"},{default:a(()=>[l(w,{modelValue:e.queryParams.startTime,"onUpdate:modelValue":o[1]||(o[1]=t=>e.queryParams.startTime=t),type:"datetime",placeholder:"开始时间"},null,8,["modelValue"])]),_:1}),l(p,{label:"结束时间",prop:"code"},{default:a(()=>[l(w,{modelValue:e.queryParams.endTime,"onUpdate:modelValue":o[2]||(o[2]=t=>e.queryParams.endTime=t),type:"datetime",placeholder:"结束时间"},null,8,["modelValue"])]),_:1}),l(p,null,{default:a(()=>[l(R,null,{default:a(()=>[f((c(),_(u,{type:"primary",icon:"ele-Search",onClick:s},{default:a(()=>[d(" 查询 ")]),_:1})),[[y,"sysFile:page"]]),l(u,{icon:"ele-Refresh",onClick:z},{default:a(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1}),l(p,null,{default:a(()=>[f((c(),_(u,{type:"primary",icon:"ele-Plus",onClick:T},{default:a(()=>[d(" 上传 ")]),_:1})),[[y,"sysFile:uploadFile"]])]),_:1})]),_:1},8,["model"])]),_:1}),l(v,{shadow:"hover",style:{"margin-top":"8px"}},{default:a(()=>[f((c(),_($,{data:e.fileData,style:{width:"100%"},border:""},{default:a(()=>[l(r,{type:"index",label:"序号",width:"55",align:"center"}),l(r,{prop:"fileName",label:"名称"}),l(r,{prop:"suffix",label:"后缀",align:"center","show-overflow-tooltip":""},{default:a(t=>[l(E,{round:""},{default:a(()=>[d(Z(t.row.suffix),1)]),_:2},1024)]),_:1}),l(r,{prop:"sizeKb",label:"大小kb",align:"center","show-overflow-tooltip":""}),l(r,{prop:"url",label:"预览",align:"center"},{default:a(t=>[l(M,{style:{width:"60px",height:"60px"},src:t.row.url,lazy:!0,"hide-on-click-modal":!0,"preview-src-list":[t.row.url],"initial-index":0,fit:"scale-down","preview-teleported":""},null,8,["src","preview-src-list"])]),_:1}),l(r,{prop:"bucketName",label:"存储位置",align:"center","show-overflow-tooltip":""}),l(r,{prop:"id",label:"存储标识",align:"center","show-overflow-tooltip":""}),l(r,{prop:"createTime",label:"创建时间",align:"center","show-overflow-tooltip":""}),l(r,{label:"操作",width:"140",fixed:"right",align:"center","show-overflow-tooltip":""},{default:a(t=>[f((c(),_(u,{icon:"ele-Download",size:"small",text:"",type:"primary",onClick:O=>N(t.row)},{default:a(()=>[d(" 下载 ")]),_:2},1032,["onClick"])),[[y,"sysFile:downloadFile"]]),f((c(),_(u,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:O=>B(t.row)},{default:a(()=>[d(" 删除 ")]),_:2},1032,["onClick"])),[[y,"sysFile:delete"]])]),_:1})]),_:1},8,["data"])),[[I,e.loading]]),l(j,{currentPage:e.tableParams.page,"onUpdate:currentPage":o[3]||(o[3]=t=>e.tableParams.page=t),"page-size":e.tableParams.pageSize,"onUpdate:pageSize":o[4]||(o[4]=t=>e.tableParams.pageSize=t),total:e.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:D,onCurrentChange:L,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1}),l(Q,{modelValue:e.dialogVisible,"onUpdate:modelValue":o[6]||(o[6]=t=>e.dialogVisible=t),"lock-scroll":!1,draggable:"",width:"400px"},{header:a(()=>[m("div",te,[l(x,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:a(()=>[l(P)]),_:1}),oe])]),footer:a(()=>[m("span",se,[l(u,{onClick:o[5]||(o[5]=t=>e.dialogVisible=!1)},{default:a(()=>[d("取消")]),_:1}),l(u,{type:"primary",onClick:U},{default:a(()=>[d("确定")]),_:1})])]),default:a(()=>[m("div",null,[l(A,{ref_key:"uploadRef",ref:q,drag:"","auto-upload":!1,limit:1,"file-list":e.fileList,action:"","on-change":S,accept:".jpg,.png,.bmp,.gif,.txt,.pdf,.xlsx,.docx"},{tip:a(()=>[ne]),default:a(()=>[l(x,{class:"el-icon--upload"},{default:a(()=>[l(P)]),_:1}),ie]),_:1},8,["file-list"])])]),_:1},8,["modelValue"])])}}});export{_e as default};
