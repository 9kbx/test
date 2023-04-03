import{K as w,r as S,a1 as z,l as B,ak as r,o as O,a as G,Y as e,S as l,b as u,X as M,W as s,u as F,T as W,Z as H}from"./vue.e20a9695.js";import{f as x,e as Y}from"./index.b00245d2.js";import{e as K}from"./monacoEditor.48edecf2.js";import{S as V}from"./sys-job-api.66dc3741.js";const X=`#region using

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
}`,Z={class:"sys-jobDetail-container"},Q={style:{color:"#fff"}},$={class:"dialog-footer"},ee=w({name:"sysEditJobDetail"}),re=w({...ee,props:{title:String},setup(D,{expose:h}){const C=D,f=S(),g=S(),o=z({isShowDialog:!1,selectedTabName:"0",ruleForm:{},monacoEditor:null}),_=B(()=>o.ruleForm.id!=null&&o.ruleForm.id>0);var m=null;const E=()=>{m=K.create(g.value,{theme:"vs-dark",value:"",language:"csharp",formatOnPaste:!0,wordWrap:"on",wrappingIndent:"indent",folding:!0,foldingHighlight:!0,foldingStrategy:"indentation",showFoldingControls:"always",disableLayerHinting:!0,emptySelectionClipboard:!1,selectionClipboard:!1,automaticLayout:!0,codeLens:!1,scrollBeyondLastLine:!1,colorDecorators:!0,accessibilitySupport:"auto",lineNumbers:"on",lineNumbersMinChars:5,readOnly:!1})},N=d=>{o.selectedTabName="0",o.ruleForm=JSON.parse(JSON.stringify(d)),o.isShowDialog=!0,setTimeout(()=>{m==null&&E(),m.setValue(d.id==null?X:o.ruleForm.scriptCode)},1)},T=()=>{Y.emit("submitRefresh"),o.isShowDialog=!1},J=()=>{o.isShowDialog=!1},k=()=>{f.value.validate(async d=>{d&&(o.ruleForm.scriptCode=m.getValue(),o.ruleForm.id!=null&&o.ruleForm.id>0?await x(V).apiSysJobUpdateJobDetailPost(o.ruleForm):await x(V).apiSysJobAddJobDetailPost(o.ruleForm),T())})};return h({openDialog:N}),(d,t)=>{const I=r("ele-Edit"),P=r("el-icon"),c=r("el-input"),i=r("el-form-item"),n=r("el-col"),p=r("el-radio"),b=r("el-radio-group"),A=r("SvgIcon"),L=r("el-tooltip"),U=r("el-row"),R=r("el-form"),y=r("el-tab-pane"),q=r("el-tabs"),v=r("el-button"),j=r("el-dialog");return O(),G("div",Z,[e(j,{modelValue:o.isShowDialog,"onUpdate:modelValue":t[7]||(t[7]=a=>o.isShowDialog=a),draggable:"","close-on-click-modal":!1,width:"1000px"},{header:l(()=>[u("div",Q,[e(P,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:l(()=>[e(I)]),_:1}),u("span",null,M(C.title),1)])]),footer:l(()=>[u("span",$,[e(v,{onClick:J,size:"default"},{default:l(()=>[s("取 消")]),_:1}),e(v,{type:"primary",onClick:k,size:"default"},{default:l(()=>[s("确 定")]),_:1})])]),default:l(()=>[e(q,{modelValue:o.selectedTabName,"onUpdate:modelValue":t[6]||(t[6]=a=>o.selectedTabName=a)},{default:l(()=>[e(y,{label:"作业信息"},{default:l(()=>[e(R,{model:o.ruleForm,ref_key:"ruleFormRef",ref:f,size:"default","label-width":"130px"},{default:l(()=>[e(U,{gutter:35},{default:l(()=>[e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(i,{label:"作业编号",prop:"jobId",rules:[{required:!0,message:"作业编号不能为空",trigger:"blur"}]},{default:l(()=>[e(c,{modelValue:o.ruleForm.jobId,"onUpdate:modelValue":t[0]||(t[0]=a=>o.ruleForm.jobId=a),placeholder:"作业编号",disabled:F(_),clearable:""},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(i,{label:"组名称",prop:"groupName",rules:[{required:!0,message:"组名称不能为空",trigger:"blur"}]},{default:l(()=>[e(c,{modelValue:o.ruleForm.groupName,"onUpdate:modelValue":t[1]||(t[1]=a=>o.ruleForm.groupName=a),placeholder:"组名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(i,{label:"执行方式",prop:"concurrent"},{default:l(()=>[e(b,{modelValue:o.ruleForm.concurrent,"onUpdate:modelValue":t[2]||(t[2]=a=>o.ruleForm.concurrent=a)},{default:l(()=>[e(p,{label:!0},{default:l(()=>[s("并行")]),_:1}),e(p,{label:!1},{default:l(()=>[s("串行")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),W(e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(i,{prop:"includeAnnotations"},{label:l(()=>[u("div",null,[s(" 扫描特性触发器 "),e(L,{"raw-content":"",content:"此参数只在新增作业时生效<br/>扫描定义在作业上的触发器",placement:"top"},{default:l(()=>[e(A,{name:"fa fa-question-circle-o",size:16,style:{"vertical-align":"middle"}})]),_:1})])]),default:l(()=>[e(b,{modelValue:o.ruleForm.includeAnnotations,"onUpdate:modelValue":t[3]||(t[3]=a=>o.ruleForm.includeAnnotations=a)},{default:l(()=>[e(p,{label:!0},{default:l(()=>[s("是")]),_:1}),e(p,{label:!1},{default:l(()=>[s("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},512),[[H,!F(_)]]),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(i,{label:"额外数据",prop:"properties"},{default:l(()=>[e(c,{modelValue:o.ruleForm.properties,"onUpdate:modelValue":t[4]||(t[4]=a=>o.ruleForm.properties=a),placeholder:"额外数据",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(i,{label:"描述信息",prop:"description"},{default:l(()=>[e(c,{modelValue:o.ruleForm.description,"onUpdate:modelValue":t[5]||(t[5]=a=>o.ruleForm.description=a),placeholder:"描述信息",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(y,{label:"脚本代码",disabled:!o.ruleForm.createFromScript},{default:l(()=>[u("div",{ref_key:"monacoEditorRef",ref:g,style:{width:"100%",height:"500px"}},null,512)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{re as _};
