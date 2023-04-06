import{g as f,e as z}from"./index.122dcd40.js";import{S as g}from"./sys-dict-type-api.64736411.js";import{K as b,r as E,a1 as A,ak as a,o as B,a as P,Y as e,S as o,b as i,X as R,W as m}from"./vue.e20a9695.js";const q={class:"sys-dictType-container"},J={style:{color:"#fff"}},O={class:"dialog-footer"},I=b({name:"sysEditDictType"}),Y=b({...I,props:{title:String},setup(V,{expose:y}){const F=V,p=E(),l=A({isShowDialog:!1,ruleForm:{}}),x=d=>{l.ruleForm=JSON.parse(JSON.stringify(d)),l.isShowDialog=!0},S=()=>{z.emit("submitRefresh"),l.isShowDialog=!1},w=()=>{l.isShowDialog=!1},D=()=>{p.value.validate(async d=>{d&&(l.ruleForm.id!=null&&l.ruleForm.id>0?await f(g).apiSysDictTypeUpdatePost(l.ruleForm):await f(g).apiSysDictTypeAddPost(l.ruleForm),S())})};return y({openDialog:x}),(d,t)=>{const h=a("ele-Edit"),k=a("el-icon"),u=a("el-input"),s=a("el-form-item"),n=a("el-col"),_=a("el-radio"),v=a("el-radio-group"),N=a("el-input-number"),U=a("el-row"),T=a("el-form"),c=a("el-button"),C=a("el-dialog");return B(),P("div",q,[e(C,{modelValue:l.isShowDialog,"onUpdate:modelValue":t[5]||(t[5]=r=>l.isShowDialog=r),draggable:"",width:"600px"},{header:o(()=>[i("div",J,[e(k,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:o(()=>[e(h)]),_:1}),i("span",null,R(F.title),1)])]),footer:o(()=>[i("span",O,[e(c,{onClick:w,size:"default"},{default:o(()=>[m("取 消")]),_:1}),e(c,{type:"primary",onClick:D,size:"default"},{default:o(()=>[m("确 定")]),_:1})])]),default:o(()=>[e(T,{model:l.ruleForm,ref_key:"ruleFormRef",ref:p,size:"default","label-width":"80px"},{default:o(()=>[e(U,{gutter:35},{default:o(()=>[e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"字典名称",prop:"name",rules:[{required:!0,message:"字典名称不能为空",trigger:"blur"}]},{default:o(()=>[e(u,{modelValue:l.ruleForm.name,"onUpdate:modelValue":t[0]||(t[0]=r=>l.ruleForm.name=r),placeholder:"字典名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"字典编码",prop:"code",rules:[{required:!0,message:"字典编码不能为空",trigger:"blur"}]},{default:o(()=>[e(u,{modelValue:l.ruleForm.code,"onUpdate:modelValue":t[1]||(t[1]=r=>l.ruleForm.code=r),placeholder:"字典编码",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"状态"},{default:o(()=>[e(v,{modelValue:l.ruleForm.status,"onUpdate:modelValue":t[2]||(t[2]=r=>l.ruleForm.status=r)},{default:o(()=>[e(_,{label:1},{default:o(()=>[m("启用")]),_:1}),e(_,{label:2},{default:o(()=>[m("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"排序"},{default:o(()=>[e(N,{modelValue:l.ruleForm.orderNo,"onUpdate:modelValue":t[3]||(t[3]=r=>l.ruleForm.orderNo=r),placeholder:"排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"备注"},{default:o(()=>[e(u,{modelValue:l.ruleForm.remark,"onUpdate:modelValue":t[4]||(t[4]=r=>l.ruleForm.remark=r),placeholder:"请输入备注内容",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{Y as _};
