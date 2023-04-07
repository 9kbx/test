import{K as k,r as E,a1 as Q,l as F,ak as r,o as y,a as $,Y as l,S as t,b as S,X as ee,W as s,u as i,T as D,Z as T,R as M,V as x}from"./vue.e20a9695.js";import{g as B,e as le}from"./index.32ca2701.js";import{e as te}from"./monacoEditor.48edecf2.js";import{S as C}from"./sys-job-api.4639c142.js";var c=(p=>(p[p.NUMBER_0=0]="NUMBER_0",p[p.NUMBER_1=1]="NUMBER_1",p[p.NUMBER_2=2]="NUMBER_2",p))(c||{});const oe=`#region using

using Furion;
using Furion.Logging;
using Furion.RemoteRequest.Extensions;
using Furion.Schedule;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Data;
using System.Linq.Dynamic.Core;
using System.Linq.Expressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Yitter.IdGenerator;

#endregion

namespace Admin.NET.Core;

/// <summary>
/// 动态作业任务
/// </summary>
[JobDetail("你的作业编号")]
public class DynamicJob : IJob
{
    private readonly IServiceProvider _serviceProvider;

    public DynamicJob(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task ExecuteAsync(JobExecutingContext context, CancellationToken stoppingToken)
    {
        using var serviceScope = _serviceProvider.CreateScope();
        
        // 获取用户仓储
        // var rep = serviceScope.ServiceProvider.GetService<SqlSugarRepository<SysUser>>();

        // 请求网址
        // var result = await "http://www.baidu.com".GetAsStringAsync();
        // Console.WriteLine(result);

        // 日志
        // Log.Information("日志消息");
    }
}`,ae={class:"sys-jobDetail-container"},re={style:{color:"#fff"}},se={class:"dialog-footer"},ie=k({name:"sysEditJobDetail"}),pe=k({...ie,props:{title:String},setup(p,{expose:P}){const q=p,f={get:'{"Method":"GET"}',post:'{"Method":"POST"}',put:'{"Method":"PUT"}',delete:'{"Method":"DELETE"}'},N=E(),U=E(),e=Q({isShowDialog:!1,selectedTabName:"0",ruleForm:{},monacoEditor:null,httpJobMessage:{requestUri:"",httpMethod:f.get,body:""}}),h=F(()=>e.ruleForm.id!=null&&e.ruleForm.id>0),I=F(()=>e.ruleForm.createType===c.NUMBER_1),_=F(()=>e.ruleForm.createType===c.NUMBER_2);var v=null;const L=()=>{v=te.create(U.value,{theme:"vs-dark",value:"",language:"csharp",formatOnPaste:!0,wordWrap:"on",wrappingIndent:"indent",folding:!0,foldingHighlight:!0,foldingStrategy:"indentation",showFoldingControls:"always",disableLayerHinting:!0,emptySelectionClipboard:!1,selectionClipboard:!1,automaticLayout:!0,codeLens:!1,scrollBeyondLastLine:!1,colorDecorators:!0,accessibilitySupport:"auto",lineNumbers:"on",lineNumbersMinChars:5,readOnly:!1})},O=d=>{e.selectedTabName="0",e.ruleForm=JSON.parse(JSON.stringify(d)),e.isShowDialog=!0,e.ruleForm.createType===c.NUMBER_2&&(e.httpJobMessage=J(e.ruleForm.properties)),setTimeout(()=>{v==null&&L(),v.setValue(d.id==null?oe:e.ruleForm.scriptCode)},1)},A=()=>{le.emit("submitRefresh"),e.isShowDialog=!1},H=()=>{e.isShowDialog=!1},z=()=>{N.value.validate(async d=>{if(d){if(e.ruleForm.createType===c.NUMBER_1?e.ruleForm.scriptCode=v.getValue():e.ruleForm.scriptCode="",e.ruleForm.createType===c.NUMBER_2){const b={HttpJob:JSON.stringify({RequestUri:e.httpJobMessage.requestUri,HttpMethod:JSON.parse(e.httpJobMessage.httpMethod+""),Body:e.httpJobMessage.body,ClientName:"HttpJob",EnsureSuccessStatusCode:!0})};e.ruleForm.properties=JSON.stringify(b)}e.ruleForm.id!=null&&e.ruleForm.id>0?await B(C).apiSysJobUpdateJobDetailPost(e.ruleForm):await B(C).apiSysJobAddJobDetailPost(e.ruleForm),A()}})},J=d=>{if(d==null||d==="")return{};const o=JSON.parse(d),b=JSON.parse(o.HttpJob);return{requestUri:b.RequestUri,httpMethod:JSON.stringify(b.HttpMethod),body:b.Body}};return P({httpMethodDef:f,openDialog:O,getHttpJobMessage:J}),(d,o)=>{const b=r("ele-Edit"),j=r("el-icon"),g=r("el-input"),u=r("el-form-item"),m=r("el-col"),n=r("el-radio"),V=r("el-radio-group"),G=r("SvgIcon"),W=r("el-tooltip"),Y=r("el-row"),K=r("el-form"),R=r("el-tab-pane"),X=r("el-tabs"),w=r("el-button"),Z=r("el-dialog");return y(),$("div",ae,[l(Z,{modelValue:e.isShowDialog,"onUpdate:modelValue":o[11]||(o[11]=a=>e.isShowDialog=a),draggable:"","close-on-click-modal":!1,width:"1000px"},{header:t(()=>[S("div",re,[l(j,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:t(()=>[l(b)]),_:1}),S("span",null,ee(q.title),1)])]),footer:t(()=>[S("span",se,[l(w,{onClick:H,size:"default"},{default:t(()=>[s("取 消")]),_:1}),l(w,{type:"primary",onClick:z,size:"default"},{default:t(()=>[s("确 定")]),_:1})])]),default:t(()=>[l(X,{modelValue:e.selectedTabName,"onUpdate:modelValue":o[10]||(o[10]=a=>e.selectedTabName=a)},{default:t(()=>[l(R,{label:"作业信息"},{default:t(()=>[l(K,{model:e.ruleForm,ref_key:"ruleFormRef",ref:N,size:"default","label-width":"130px"},{default:t(()=>[l(Y,{gutter:35},{default:t(()=>[l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[l(u,{label:"作业编号",prop:"jobId",rules:[{required:!0,message:"作业编号不能为空",trigger:"blur"}]},{default:t(()=>[l(g,{modelValue:e.ruleForm.jobId,"onUpdate:modelValue":o[0]||(o[0]=a=>e.ruleForm.jobId=a),placeholder:"作业编号",disabled:i(h),clearable:""},null,8,["modelValue","disabled"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[l(u,{label:"组名称",prop:"groupName",rules:[{required:!0,message:"组名称不能为空",trigger:"blur"}]},{default:t(()=>[l(g,{modelValue:e.ruleForm.groupName,"onUpdate:modelValue":o[1]||(o[1]=a=>e.ruleForm.groupName=a),placeholder:"组名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(u,{label:"创建类型",prop:"createType"},{default:t(()=>[l(V,{modelValue:e.ruleForm.createType,"onUpdate:modelValue":o[2]||(o[2]=a=>e.ruleForm.createType=a),disabled:i(h)},{default:t(()=>[D(l(n,{label:i(c).NUMBER_0},{default:t(()=>[s("内置")]),_:1},8,["label"]),[[T,i(h)]]),l(n,{label:i(c).NUMBER_1},{default:t(()=>[s("脚本")]),_:1},8,["label"]),l(n,{label:i(c).NUMBER_2},{default:t(()=>[s("Http请求")]),_:1},8,["label"])]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[l(u,{label:"执行方式",prop:"concurrent"},{default:t(()=>[l(V,{modelValue:e.ruleForm.concurrent,"onUpdate:modelValue":o[3]||(o[3]=a=>e.ruleForm.concurrent=a)},{default:t(()=>[l(n,{label:!0},{default:t(()=>[s("并行")]),_:1}),l(n,{label:!1},{default:t(()=>[s("串行")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),D(l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[l(u,{prop:"includeAnnotations"},{label:t(()=>[S("div",null,[s(" 扫描特性触发器 "),l(W,{"raw-content":"",content:"此参数只在新增作业时生效<br/>扫描定义在作业上的触发器",placement:"top"},{default:t(()=>[l(G,{name:"fa fa-question-circle-o",size:16,style:{"vertical-align":"middle"}})]),_:1})])]),default:t(()=>[l(V,{modelValue:e.ruleForm.includeAnnotations,"onUpdate:modelValue":o[4]||(o[4]=a=>e.ruleForm.includeAnnotations=a)},{default:t(()=>[l(n,{label:!0},{default:t(()=>[s("是")]),_:1}),l(n,{label:!1},{default:t(()=>[s("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},512),[[T,!i(h)&&!i(_)]]),l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(u,{label:"描述信息",prop:"description"},{default:t(()=>[l(g,{modelValue:e.ruleForm.description,"onUpdate:modelValue":o[5]||(o[5]=a=>e.ruleForm.description=a),placeholder:"描述信息",clearable:"",type:"textarea",autosize:{minRows:1,maxRows:3}},null,8,["modelValue"])]),_:1})]),_:1}),i(_)?x("",!0):(y(),M(m,{key:0,xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(u,{label:"额外数据",prop:"properties"},{default:t(()=>[l(g,{modelValue:e.ruleForm.properties,"onUpdate:modelValue":o[6]||(o[6]=a=>e.ruleForm.properties=a),placeholder:"额外数据",clearable:"",type:"textarea",autosize:{minRows:3,maxRows:6}},null,8,["modelValue"])]),_:1})]),_:1})),i(_)?(y(),M(m,{key:1,xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(u,{label:"请求地址",prop:"requestUri"},{default:t(()=>[l(g,{modelValue:e.httpJobMessage.requestUri,"onUpdate:modelValue":o[7]||(o[7]=a=>e.httpJobMessage.requestUri=a),placeholder:"请求地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):x("",!0),i(_)?(y(),M(m,{key:2,xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(u,{label:"请求方法",prop:"httpMethod"},{default:t(()=>[l(V,{modelValue:e.httpJobMessage.httpMethod,"onUpdate:modelValue":o[8]||(o[8]=a=>e.httpJobMessage.httpMethod=a)},{default:t(()=>[l(n,{label:f.get},{default:t(()=>[s("Get")]),_:1},8,["label"]),l(n,{label:f.post},{default:t(()=>[s("Post")]),_:1},8,["label"]),l(n,{label:f.put},{default:t(()=>[s("Put")]),_:1},8,["label"]),l(n,{label:f.delete},{default:t(()=>[s("Delete")]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1})):x("",!0),i(_)?(y(),M(m,{key:3,xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(u,{label:"请求报文体",prop:"body"},{default:t(()=>[l(g,{modelValue:e.httpJobMessage.body,"onUpdate:modelValue":o[9]||(o[9]=a=>e.httpJobMessage.body=a),placeholder:"请求报文体",clearable:"",type:"textarea",autosize:{minRows:3,maxRows:6}},null,8,["modelValue"])]),_:1})]),_:1})):x("",!0)]),_:1})]),_:1},8,["model"])]),_:1}),l(R,{label:"脚本代码",disabled:!i(I)},{default:t(()=>[S("div",{ref_key:"monacoEditorRef",ref:U,style:{width:"100%",height:"500px"}},null,512)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{c as J,pe as _};
