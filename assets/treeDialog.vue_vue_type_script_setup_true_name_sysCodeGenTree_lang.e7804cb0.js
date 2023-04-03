import{f as g,e as z}from"./index.96b44ad7.js";import{S as C}from"./sys-code-gen-api.ab3328b6.js";import{K as D,r as h,a1 as A,k as $,ak as m,o as n,a as s,Y as o,S as a,b as E,W as v,F as p,ab as b,R as _}from"./vue.e20a9695.js";const K={class:"sys-codeGenTree-container"},M={class:"dialog-footer"},P=D({name:"sysCodeGenTree"}),H=D({...P,setup(W,{expose:N}){const y=h();var r={};const e=A({isShowDialog:!1,ruleForm:{},dbData:[],tableData:[],columnData:[]});$(async()=>{await x()});const V=async()=>{e.tableData=[],e.columnData=[],await k()},w=async()=>{e.columnData=[],await I()},x=async()=>{var u=await g(C).apiSysCodeGenDatabaseListGet();e.dbData=u.data.result},k=async()=>{if(e.ruleForm.configId!=""){var u=await g(C).apiSysCodeGenTableListConfigIdGet(e.ruleForm.configId);e.tableData=u.data.result}},I=async()=>{if(!(e.ruleForm.configId==""||e.ruleForm.tableName=="")){var u=await g(C).apiSysCodeGenColumnListByTableNameTableNameConfigIdGet(e.ruleForm.tableName,e.ruleForm.configId);e.columnData=u.data.result}},S=u=>{r=u,e.isShowDialog=!0},G=()=>{r.fkTableName=e.ruleForm.tableName,r.displayColumn=e.ruleForm.displayColumn,r.valueColumn=e.ruleForm.valueColumn,r.pidColumn=e.ruleForm.pidColumn,z.emit("submitRefreshFk",r),e.isShowDialog=!1},T=()=>{e.isShowDialog=!1},L=()=>{y.value.validate(async u=>{u&&G()})};return N({openDialog:S}),(u,t)=>{const d=m("el-option"),i=m("el-select"),c=m("el-form-item"),f=m("el-col"),U=m("el-row"),B=m("el-form"),F=m("el-button"),R=m("el-dialog");return n(),s("div",K,[o(R,{modelValue:e.isShowDialog,"onUpdate:modelValue":t[7]||(t[7]=l=>e.isShowDialog=l),title:"树选择配置",draggable:"",width:"600px"},{footer:a(()=>[E("span",M,[o(F,{onClick:T,size:"default"},{default:a(()=>[v("取 消")]),_:1}),o(F,{type:"primary",onClick:L,size:"default"},{default:a(()=>[v("确 定")]),_:1})])]),default:a(()=>[o(B,{model:e.ruleForm,ref_key:"ruleFormRef",ref:y,size:"default","label-width":"100px"},{default:a(()=>[o(U,{gutter:35},{default:a(()=>[o(f,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(c,{label:"库定位器",prop:"configId"},{default:a(()=>[o(i,{clearable:"",modelValue:e.ruleForm.configId,"onUpdate:modelValue":t[0]||(t[0]=l=>e.ruleForm.configId=l),placeholder:"库名",filterable:"",onChange:t[1]||(t[1]=l=>V())},{default:a(()=>[(n(!0),s(p,null,b(e.dbData,l=>(n(),_(d,{key:l.configId,label:l.configId,value:l.configId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(f,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(c,{label:"数据库表",prop:"tableName"},{default:a(()=>[o(i,{modelValue:e.ruleForm.tableName,"onUpdate:modelValue":t[2]||(t[2]=l=>e.ruleForm.tableName=l),class:"m-2",filterable:"",clearable:"",onChange:t[3]||(t[3]=l=>w())},{default:a(()=>[(n(!0),s(p,null,b(e.tableData,l=>(n(),_(d,{key:l.entityName,label:l.tableName,value:l.tableName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(f,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(c,{label:"显示字段",prop:"displayColumn"},{default:a(()=>[o(i,{modelValue:e.ruleForm.displayColumn,"onUpdate:modelValue":t[4]||(t[4]=l=>e.ruleForm.displayColumn=l)},{default:a(()=>[(n(!0),s(p,null,b(e.columnData,l=>(n(),_(d,{key:l.columnName,label:l.columnName,value:l.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(f,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(c,{label:"选择值字段",prop:"valueColumn"},{default:a(()=>[o(i,{modelValue:e.ruleForm.valueColumn,"onUpdate:modelValue":t[5]||(t[5]=l=>e.ruleForm.valueColumn=l)},{default:a(()=>[(n(!0),s(p,null,b(e.columnData,l=>(n(),_(d,{key:l.columnName,label:l.columnName,value:l.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(f,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(c,{label:"父级字段",prop:"pidColumn"},{default:a(()=>[o(i,{modelValue:e.ruleForm.pidColumn,"onUpdate:modelValue":t[6]||(t[6]=l=>e.ruleForm.pidColumn=l)},{default:a(()=>[(n(!0),s(p,null,b(e.columnData,l=>(n(),_(d,{key:l.columnName,label:l.columnName,value:l.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{H as _};
