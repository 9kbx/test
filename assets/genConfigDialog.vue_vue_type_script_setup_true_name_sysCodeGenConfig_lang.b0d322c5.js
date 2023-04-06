import{B as ie,h as N,i as Q,R as Y,g as W,e as j,F as le}from"./index.122dcd40.js";import{_ as ne}from"./fkDialog.vue_vue_type_script_setup_true_name_sysCodeGenFk_lang.b7d1dd58.js";import{_ as de}from"./treeDialog.vue_vue_type_script_setup_true_name_sysCodeGenTree_lang.20a80a05.js";import{S as ae}from"./sys-dict-data-api.132322e9.js";import{S as ce}from"./sys-dict-type-api.64736411.js";import{K as re,r as te,a1 as ue,k as pe,a0 as me,ak as O,au as fe,o as F,a as H,Y as g,S as L,b as he,W as oe,T as ye,R as I,F as K,ab as J}from"./vue.e20a9695.js";const M=function(w){return{apiSysCodeGenConfigDetailGet:async(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r={})=>{const A="/api/sysCodeGenConfig/detail",R=new URL(A,"https://example.com");let x;w&&(x=w.baseOptions);const k={method:"GET",...x,...r},$={},a={};t!==void 0&&(a.Id=t),o!==void 0&&(a.CodeGenId=o),s!==void 0&&(a.ColumnName=s),e!==void 0&&(a.LowerColumnName=e),l!==void 0&&(a.ColumnComment=l),u!==void 0&&(a.NetType=u),p!==void 0&&(a.EffectType=p),h!==void 0&&(a.FkEntityName=h),m!==void 0&&(a.FkTableName=m),f!==void 0&&(a.LowerFkEntityName=f),v!==void 0&&(a.FkColumnName=v),y!==void 0&&(a.LowerFkColumnName=y),E!==void 0&&(a.FkColumnNetType=E),D!==void 0&&(a.DictTypeCode=D),n!==void 0&&(a.WhetherRetract=n),c!==void 0&&(a.WhetherRequired=c),d!==void 0&&(a.QueryWhether=d),b!==void 0&&(a.QueryType=b),C!==void 0&&(a.WhetherTable=C),V!==void 0&&(a.WhetherAddUpdate=V),S!==void 0&&(a.ColumnKey=S),G!==void 0&&(a.DataType=G),T!==void 0&&(a.WhetherCommon=T),_!==void 0&&(a.TableNickName=_),U!==void 0&&(a.DisplayColumn=U),P!==void 0&&(a.ValueColumn=P),i!==void 0&&(a.PidColumn=i);const B=new URLSearchParams(R.search);for(const q in a)B.set(q,a[q]);for(const q in r.params)B.set(q,r.params[q]);R.search=new URLSearchParams(B).toString();let z=x&&x.headers?x.headers:{};return k.headers={...$,...z,...r.headers},{url:R.pathname+R.search+R.hash,options:k}},apiSysCodeGenConfigListGet:async(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r={})=>{const A="/api/sysCodeGenConfig/list",R=new URL(A,"https://example.com");let x;w&&(x=w.baseOptions);const k={method:"GET",...x,...r},$={},a={};t!==void 0&&(a.Id=t),o!==void 0&&(a.CodeGenId=o),s!==void 0&&(a.ColumnName=s),e!==void 0&&(a.LowerColumnName=e),l!==void 0&&(a.ColumnComment=l),u!==void 0&&(a.NetType=u),p!==void 0&&(a.EffectType=p),h!==void 0&&(a.FkEntityName=h),m!==void 0&&(a.FkTableName=m),f!==void 0&&(a.LowerFkEntityName=f),v!==void 0&&(a.FkColumnName=v),y!==void 0&&(a.LowerFkColumnName=y),E!==void 0&&(a.FkColumnNetType=E),D!==void 0&&(a.DictTypeCode=D),n!==void 0&&(a.WhetherRetract=n),c!==void 0&&(a.WhetherRequired=c),d!==void 0&&(a.QueryWhether=d),b!==void 0&&(a.QueryType=b),C!==void 0&&(a.WhetherTable=C),V!==void 0&&(a.WhetherAddUpdate=V),S!==void 0&&(a.ColumnKey=S),G!==void 0&&(a.DataType=G),T!==void 0&&(a.WhetherCommon=T),_!==void 0&&(a.TableNickName=_),U!==void 0&&(a.DisplayColumn=U),P!==void 0&&(a.ValueColumn=P),i!==void 0&&(a.PidColumn=i);const B=new URLSearchParams(R.search);for(const q in a)B.set(q,a[q]);for(const q in r.params)B.set(q,r.params[q]);R.search=new URLSearchParams(B).toString();let z=x&&x.headers?x.headers:{};return k.headers={...$,...z,...r.headers},{url:R.pathname+R.search+R.hash,options:k}},apiSysCodeGenConfigUpdatePost:async(t,o={})=>{const s="/api/sysCodeGenConfig/update",e=new URL(s,"https://example.com");let l;w&&(l=w.baseOptions);const u={method:"POST",...l,...o},p={},h={};p["Content-Type"]="application/json-patch+json";const m=new URLSearchParams(e.search);for(const y in h)m.set(y,h[y]);for(const y in o.params)m.set(y,o.params[y]);e.search=new URLSearchParams(m).toString();let f=l&&l.headers?l.headers:{};u.headers={...p,...f,...o.headers};const v=typeof t!="string"||u.headers["Content-Type"]==="application/json";return u.data=v?JSON.stringify(t!==void 0?t:{}):t||"",{url:e.pathname+e.search+e.hash,options:u}}}},X=function(w){return{async apiSysCodeGenConfigDetailGet(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r){const A=await M(w).apiSysCodeGenConfigDetailGet(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r);return(R=N,x=Q)=>{const k={...A.options,url:x+A.url};return R.request(k)}},async apiSysCodeGenConfigListGet(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r){const A=await M(w).apiSysCodeGenConfigListGet(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r);return(R=N,x=Q)=>{const k={...A.options,url:x+A.url};return R.request(k)}},async apiSysCodeGenConfigUpdatePost(t,o){const s=await M(w).apiSysCodeGenConfigUpdatePost(t,o);return(e=N,l=Q)=>{const u={...s.options,url:l+s.url};return e.request(u)}}}};class se extends ie{async apiSysCodeGenConfigDetailGet(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r){return X(this.configuration).apiSysCodeGenConfigDetailGet(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r).then(A=>A(this.axios,this.basePath))}async apiSysCodeGenConfigListGet(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r){return X(this.configuration).apiSysCodeGenConfigListGet(t,o,s,e,l,u,p,h,m,f,v,y,E,D,n,c,d,b,C,V,S,G,T,_,U,P,i,r).then(A=>A(this.axios,this.basePath))}async apiSysCodeGenConfigUpdatePost(t,o){return X(this.configuration).apiSysCodeGenConfigUpdatePost(t,o).then(s=>s(this.axios,this.basePath))}}const Z=function(w){return{apiSysEnumEnumDataListByFieldGet:async(t,o,s={})=>{if(t==null)throw new Y("entityName","Required parameter entityName was null or undefined when calling apiSysEnumEnumDataListByFieldGet.");if(o==null)throw new Y("fieldName","Required parameter fieldName was null or undefined when calling apiSysEnumEnumDataListByFieldGet.");const e="/api/sysEnum/enumDataListByField",l=new URL(e,"https://example.com");let u;w&&(u=w.baseOptions);const p={method:"GET",...u,...s},h={},m={};t!==void 0&&(m.EntityName=t),o!==void 0&&(m.FieldName=o);const f=new URLSearchParams(l.search);for(const y in m)f.set(y,m[y]);for(const y in s.params)f.set(y,s.params[y]);l.search=new URLSearchParams(f).toString();let v=u&&u.headers?u.headers:{};return p.headers={...h,...v,...s.headers},{url:l.pathname+l.search+l.hash,options:p}},apiSysEnumEnumDataListGet:async(t,o={})=>{if(t==null)throw new Y("enumName","Required parameter enumName was null or undefined when calling apiSysEnumEnumDataListGet.");const s="/api/sysEnum/enumDataList",e=new URL(s,"https://example.com");let l;w&&(l=w.baseOptions);const u={method:"GET",...l,...o},p={},h={};t!==void 0&&(h.EnumName=t);const m=new URLSearchParams(e.search);for(const v in h)m.set(v,h[v]);for(const v in o.params)m.set(v,o.params[v]);e.search=new URLSearchParams(m).toString();let f=l&&l.headers?l.headers:{};return u.headers={...p,...f,...o.headers},{url:e.pathname+e.search+e.hash,options:u}},apiSysEnumEnumTypeListGet:async(t={})=>{const o="/api/sysEnum/enumTypeList",s=new URL(o,"https://example.com");let e;w&&(e=w.baseOptions);const l={method:"GET",...e,...t},u={},p={},h=new URLSearchParams(s.search);for(const f in p)h.set(f,p[f]);for(const f in t.params)h.set(f,t.params[f]);s.search=new URLSearchParams(h).toString();let m=e&&e.headers?e.headers:{};return l.headers={...u,...m,...t.headers},{url:s.pathname+s.search+s.hash,options:l}}}},ee=function(w){return{async apiSysEnumEnumDataListByFieldGet(t,o,s){const e=await Z(w).apiSysEnumEnumDataListByFieldGet(t,o,s);return(l=N,u=Q)=>{const p={...e.options,url:u+e.url};return l.request(p)}},async apiSysEnumEnumDataListGet(t,o){const s=await Z(w).apiSysEnumEnumDataListGet(t,o);return(e=N,l=Q)=>{const u={...s.options,url:l+s.url};return e.request(u)}},async apiSysEnumEnumTypeListGet(t){const o=await Z(w).apiSysEnumEnumTypeListGet(t);return(s=N,e=Q)=>{const l={...o.options,url:e+o.url};return s.request(l)}}}};class ve extends ie{async apiSysEnumEnumDataListByFieldGet(t,o,s){return ee(this.configuration).apiSysEnumEnumDataListByFieldGet(t,o,s).then(e=>e(this.axios,this.basePath))}async apiSysEnumEnumDataListGet(t,o){return ee(this.configuration).apiSysEnumEnumDataListGet(t,o).then(s=>s(this.axios,this.basePath))}async apiSysEnumEnumTypeListGet(t){return ee(this.configuration).apiSysEnumEnumTypeListGet(t).then(o=>o(this.axios,this.basePath))}}const we={class:"sys-codeGenConfig-container"},Ce={class:"dialog-footer"},Se=re({name:"sysCodeGenConfig"}),De=re({...Se,setup(w,{expose:t}){const o=te(),s=te(),e=ue({isShowDialog:!1,loading:!1,tableData:[],dbData:[],effectTypeList:[],dictTypeCodeList:[],dictDataAll:[],queryTypeList:[],allConstSelector:[],allEnumSelector:[]});pe(async()=>{var V;var n=await W(ae).apiSysDictDataDataListCodeGet("code_gen_effect_type");e.effectTypeList=n.data.result;var c=await W(ce).apiSysDictTypeListGet();e.dictTypeCodeList=c.data.result,e.dictDataAll=c.data.result;var d=await W(ae).apiSysDictDataDataListCodeGet("code_gen_query_type");e.queryTypeList=d.data.result;var b=await W(le).apiSysConstListGet();e.allConstSelector=b.data.result;let C=await W(ve).apiSysEnumEnumTypeListGet();e.allEnumSelector=(V=C.data.result)==null?void 0:V.map(S=>({...S,name:S.typeDescribe,code:S.typeName})),j.on("submitRefreshFk",S=>{e.tableData[S.index]=S})}),me(()=>{j.off("submitRefresh",()=>{}),j.off("submitRefreshFk",()=>{})});const l=(n,c)=>{let d=n.effectType;d==="fk"?f(n,c):d==="ApiTreeSelect"?v(n,c):d==="Select"?(n.dictTypeCode="",e.dictTypeCodeList=e.dictDataAll):d==="ConstSelector"?(n.dictTypeCode="",e.dictTypeCodeList=e.allConstSelector):d=="EnumSelector"&&(n.dictTypeCode="",e.dictTypeCodeList=e.allEnumSelector)},u=async n=>{e.loading=!0;var c=await W(se).apiSysCodeGenConfigListGet(void 0,n.id),d=c.data.result??[];d.forEach(b=>{for(const C in b)b[C]==="Y"&&(b[C]=!0),b[C]==="N"&&(b[C]=!1)}),e.tableData=d,e.loading=!1};function p(n){var c=["createdUserName","createdTime","updatedUserName","updatedTime"];return c.indexOf(n.columnName)>-1||n.columnKey==="True"}function h(n){var c=["Radio","Select","Checkbox","ConstSelector","EnumSelector"];return c.indexOf(n.effectType)===-1}const m=n=>{u(n),e.isShowDialog=!0},f=(n,c)=>{n.index=c,o.value.openDialog(n)},v=(n,c)=>{n.index=c,s.value.openDialog(n)},y=()=>{j.emit("submitRefresh"),e.isShowDialog=!1},E=()=>{e.isShowDialog=!1},D=async()=>{e.loading=!0;var n=e.tableData;n.forEach(c=>{for(const d in c)c[d]===!0&&(c[d]="Y"),c[d]===!1&&(c[d]="N")}),await W(se).apiSysCodeGenConfigUpdatePost(n),e.loading=!1,y()};return t({openDialog:m}),(n,c)=>{const d=O("el-table-column"),b=O("el-input"),C=O("el-option"),V=O("el-select"),S=O("el-checkbox"),G=O("el-switch"),T=O("el-table"),_=O("el-button"),U=O("el-dialog"),P=fe("loading");return F(),H("div",we,[g(U,{modelValue:e.isShowDialog,"onUpdate:modelValue":c[0]||(c[0]=i=>e.isShowDialog=i),title:"配置",draggable:"",width:"100%"},{footer:L(()=>[he("span",Ce,[g(_,{onClick:E,size:"default"},{default:L(()=>[oe("取 消")]),_:1}),g(_,{type:"primary",onClick:D,size:"default"},{default:L(()=>[oe("确 定")]),_:1})])]),default:L(()=>[ye((F(),I(T,{data:e.tableData,style:{width:"100%"},border:""},{default:L(()=>[g(d,{type:"index",label:"序号",width:"55",align:"center"}),g(d,{prop:"columnName",label:"字段","show-overflow-tooltip":""}),g(d,{prop:"columnComment",label:"描述","show-overflow-tooltip":""},{default:L(i=>[g(b,{modelValue:i.row.columnComment,"onUpdate:modelValue":r=>i.row.columnComment=r,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),g(d,{prop:"netType",label:"数据类型","show-overflow-tooltip":""}),g(d,{prop:"effectType",label:"作用类型","show-overflow-tooltip":""},{default:L(i=>[g(V,{modelValue:i.row.effectType,"onUpdate:modelValue":r=>i.row.effectType=r,class:"m-2",placeholder:"Select",disabled:p(i.row),onChange:r=>l(i.row,i.$index)},{default:L(()=>[(F(!0),H(K,null,J(e.effectTypeList,r=>(F(),I(C,{key:r.code,label:r.value,value:r.code},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1}),g(d,{prop:"dictTypeCode",label:"字典","show-overflow-tooltip":""},{default:L(i=>[g(V,{modelValue:i.row.dictTypeCode,"onUpdate:modelValue":r=>i.row.dictTypeCode=r,class:"m-2",disabled:h(i.row)},{default:L(()=>[(F(!0),H(K,null,J(e.dictTypeCodeList,r=>(F(),I(C,{key:r.code,label:r.name,value:r.code},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),g(d,{prop:"whetherTable",label:"列表显示",align:"center","show-overflow-tooltip":""},{default:L(i=>[g(S,{modelValue:i.row.whetherTable,"onUpdate:modelValue":r=>i.row.whetherTable=r},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),g(d,{prop:"whetherAddUpdate",label:"增改",align:"center","show-overflow-tooltip":""},{default:L(i=>[g(S,{modelValue:i.row.whetherAddUpdate,"onUpdate:modelValue":r=>i.row.whetherAddUpdate=r,disabled:p(i.row)},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),g(d,{prop:"whetherRequired",label:"必填",align:"center","show-overflow-tooltip":""},{default:L(i=>[g(S,{modelValue:i.row.whetherRequired,"onUpdate:modelValue":r=>i.row.whetherRequired=r,disabled:p(i.row)},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),g(d,{prop:"queryWhether",label:"是否是查询",align:"center","show-overflow-tooltip":""},{default:L(i=>[g(G,{modelValue:i.row.queryWhether,"onUpdate:modelValue":r=>i.row.queryWhether=r,"active-value":!0,"inactive-value":!1},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),g(d,{prop:"queryType",label:"查询方式","show-overflow-tooltip":""},{default:L(i=>[g(V,{modelValue:i.row.queryType,"onUpdate:modelValue":r=>i.row.queryType=r,class:"m-2",placeholder:"Select",disabled:!i.row.queryWhether},{default:L(()=>[(F(!0),H(K,null,J(e.queryTypeList,r=>(F(),I(C,{key:r.code,label:r.value,value:r.code},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:1})]),_:1},8,["data"])),[[P,e.loading]])]),_:1},8,["modelValue"]),g(ne,{ref_key:"fkDialogRef",ref:o},null,512),g(de,{ref_key:"treeDialogRef",ref:s},null,512)])}}});export{De as _};
