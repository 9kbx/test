import{K as P,r as O,a1 as Q,ak as i,o as u,a as b,Y as e,S as a,b as D,W as r,F as V,ab as h,u as w,a6 as v,R as _,V as F}from"./vue.e20a9695.js";import{E as X,f as Z,e as ee}from"./index.96b44ad7.js";import{S as le}from"./sys-database-api.0b8dd303.js";import{y as C,d as ae}from"./database.e811a0f2.js";const te={class:"sys-dbTable-container"},oe={style:{color:"#fff"}},ne=D("span",null," 增加表 ",-1),ie={style:{"text-align":"left","margin-top":"10px"}},de={class:"dialog-footer"},ue=P({name:"sysAddTable"}),_e=P({...ue,setup(re,{expose:z}){var p=0;const N=O(),o=Q({isShowDialog:!1,ruleForm:{},tableData:[]}),E=d=>{o.ruleForm=d,o.isShowDialog=!0},B=()=>{ee.emit("addTableSubmitted",o.ruleForm.tableName??""),o.tableData=[],o.isShowDialog=!1},$=()=>{o.isShowDialog=!1},A=()=>{N.value.validate(async d=>{if(!d)return;if(o.tableData.length===0){X({type:"error",message:"请选择库名!"});return}const n={dbColumnInfoList:o.tableData,...o.ruleForm};await Z(le).apiSysDatabaseAddTablePost(n),B()})};function L(){o.tableData.push({columnDescription:"主键Id",dataType:"bigint",dbColumnName:"Id",decimalDigits:0,isIdentity:0,isNullable:0,isPrimarykey:1,length:0,key:p,editable:!0,isNew:!0}),p++}function R(){o.tableData.push({columnDescription:"",dataType:"",dbColumnName:"",decimalDigits:0,isIdentity:0,isNullable:1,isPrimarykey:0,length:0,key:p,editable:!0,isNew:!0}),p++}function q(){o.tableData.push({columnDescription:"租户Id",dataType:"bigint",dbColumnName:"TenantId",decimalDigits:0,isIdentity:0,isNullable:1,isPrimarykey:0,length:0,key:p,editable:!0,isNew:!0}),p++}function M(){[{dataType:"datetime",name:"CreateTime",desc:"创建时间"},{dataType:"datetime",name:"UpdateTime",desc:"更新时间"},{dataType:"bigint",name:"CreateUserId",desc:"创建者Id"},{dataType:"bigint",name:"UpdateUserId",desc:"修改者Id"},{dataType:"bit",name:"IsDelete",desc:"软删除",isNullable:0}].forEach(n=>{o.tableData.push({columnDescription:n.desc,dataType:n.dataType,dbColumnName:n.name,decimalDigits:0,isIdentity:0,isNullable:n.isNullable===0?0:1,isPrimarykey:0,length:n.length||0,key:p,editable:!0,isNew:!0}),p++})}function K(d){o.tableData.splice(d,1)}function W(d,n){if(d.isNew){var s=T(n,n-1,o.tableData);return s}}function Y(d,n){if(d.isNew)return T(n,n+1,o.tableData)}function T(d,n,s){let k=s[d];return s[d]=s[n],s[n]=k,s}return z({openDialog:E}),(d,n)=>{const s=i("ele-Edit"),k=i("el-icon"),U=i("el-divider"),f=i("el-input"),I=i("el-form-item"),x=i("el-col"),j=i("el-row"),G=i("el-form"),m=i("el-table-column"),y=i("el-option"),g=i("el-select"),S=i("el-input-number"),c=i("el-button"),H=i("el-table"),J=i("el-dialog");return u(),b("div",te,[e(J,{modelValue:o.isShowDialog,"onUpdate:modelValue":n[2]||(n[2]=l=>o.isShowDialog=l),draggable:"","close-on-click-modal":!1,width:"1400px"},{header:a(()=>[D("div",oe,[e(k,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:a(()=>[e(s)]),_:1}),ne])]),footer:a(()=>[D("span",de,[e(c,{onClick:$,size:"default"},{default:a(()=>[r("取 消")]),_:1}),e(c,{type:"primary",onClick:A,size:"default"},{default:a(()=>[r("确 定")]),_:1})])]),default:a(()=>[e(U,{"content-position":"left"},{default:a(()=>[r("数据表信息")]),_:1}),e(G,{model:o.ruleForm,ref_key:"ruleFormRef",ref:N,size:"default","label-width":"80px"},{default:a(()=>[e(j,{gutter:35},{default:a(()=>[e(x,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[e(I,{label:"表名称",prop:"tableName",rules:[{required:!0,message:"名称不能为空",trigger:"blur"}]},{default:a(()=>[e(f,{modelValue:o.ruleForm.tableName,"onUpdate:modelValue":n[0]||(n[0]=l=>o.ruleForm.tableName=l),placeholder:"表名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(x,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[e(I,{label:"描述",prop:"description",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]},{default:a(()=>[e(f,{modelValue:o.ruleForm.description,"onUpdate:modelValue":n[1]||(n[1]=l=>o.ruleForm.description=l),placeholder:"描述",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(U,{"content-position":"left"},{default:a(()=>[r("数据列信息")]),_:1}),e(H,{data:o.tableData,style:{width:"100%"},"max-height":"400"},{default:a(()=>[e(m,{fixed:"",prop:"dbColumnName",label:"字段名",width:"150"},{default:a(l=>[e(f,{modelValue:l.row.dbColumnName,"onUpdate:modelValue":t=>l.row.dbColumnName=t,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{prop:"columnDescription",label:"描述",width:"200"},{default:a(l=>[e(f,{modelValue:l.row.columnDescription,"onUpdate:modelValue":t=>l.row.columnDescription=t,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{prop:"isPrimarykey",label:"主键"},{default:a(l=>[e(g,{modelValue:l.row.isPrimarykey,"onUpdate:modelValue":t=>l.row.isPrimarykey=t,class:"m-2",placeholder:"Select"},{default:a(()=>[(u(!0),b(V,null,h(w(C),t=>(u(),_(y,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{prop:"isIdentity",label:"自增"},{default:a(l=>[e(g,{modelValue:l.row.isIdentity,"onUpdate:modelValue":t=>l.row.isIdentity=t,class:"m-2",placeholder:"Select"},{default:a(()=>[(u(!0),b(V,null,h(w(C),t=>(u(),_(y,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{prop:"dataType",label:"类型"},{default:a(l=>[e(g,{modelValue:l.row.dataType,"onUpdate:modelValue":t=>l.row.dataType=t,class:"m-2",placeholder:"Select"},{default:a(()=>[(u(!0),b(V,null,h(w(ae),t=>(u(),_(y,{key:t.value,label:t.value,value:t.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{prop:"isNullable",label:"可空"},{default:a(l=>[e(g,{modelValue:l.row.isNullable,"onUpdate:modelValue":t=>l.row.isNullable=t,class:"m-2",placeholder:"Select"},{default:a(()=>[(u(!0),b(V,null,h(w(C),t=>(u(),_(y,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{prop:"length",label:"长度"},{default:a(l=>[e(S,{modelValue:l.row.length,"onUpdate:modelValue":t=>l.row.length=t,size:"small"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{prop:"decimalDigits",label:"保留几位小数"},{default:a(l=>[e(S,{modelValue:l.row.decimalDigits,"onUpdate:modelValue":t=>l.row.decimalDigits=t,size:"small"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{fixed:"right",label:"操作",width:"210",align:"center"},{default:a(l=>[e(c,{link:"",type:"primary",icon:"el-icon-delete",size:"small",onClick:v(t=>K(l.$index),["prevent"])},{default:a(()=>[r("删除")]),_:2},1032,["onClick"]),o.tableData.length>1?(u(),_(c,{key:0,link:"",type:"primary",icon:"ele-Top",size:"small",onClick:v(t=>W(l.row,l.$index),["prevent"])},{default:a(()=>[r("上移")]),_:2},1032,["onClick"])):F("",!0),o.tableData.length>1?(u(),_(c,{key:1,link:"",type:"primary",icon:"ele-Bottom",size:"small",onClick:v(t=>Y(l.row,l.$index),["prevent"])},{default:a(()=>[r("下移")]),_:2},1032,["onClick"])):F("",!0)]),_:1})]),_:1},8,["data"]),D("div",ie,[e(c,{icon:"ele-Plus",onClick:L},{default:a(()=>[r("新增主键字段")]),_:1}),e(c,{icon:"ele-Plus",onClick:R},{default:a(()=>[r("新增普通字段")]),_:1}),e(c,{icon:"ele-Plus",onClick:q},{default:a(()=>[r("新增租户字段")]),_:1}),e(c,{icon:"ele-Plus",onClick:M},{default:a(()=>[r("新增基础字段")]),_:1})])]),_:1},8,["modelValue"])])}}});export{_e as _};
