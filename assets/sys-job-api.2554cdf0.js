import{B as J,i as P,j as b}from"./index.96b44ad7.js";const u=function(l){return{apiSysJobAddJobDetailPost:async(a,e={})=>{const t="/api/sysJob/addJobDetail",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobAddJobTriggerPost:async(a,e={})=>{const t="/api/sysJob/addJobTrigger",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobCancelSleepPost:async(a={})=>{const e="/api/sysJob/cancelSleep",t=new URL(e,"https://example.com");let s;l&&(s=l.baseOptions);const r={method:"POST",...s,...a},o={},p={},c=new URLSearchParams(t.search);for(const h in p)c.set(h,p[h]);for(const h in a.params)c.set(h,a.params[h]);t.search=new URLSearchParams(c).toString();let i=s&&s.headers?s.headers:{};return r.headers={...o,...i,...a.headers},{url:t.pathname+t.search+t.hash,options:r}},apiSysJobDeleteJobDetailPost:async(a,e={})=>{const t="/api/sysJob/deleteJobDetail",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobDeleteJobTriggerPost:async(a,e={})=>{const t="/api/sysJob/deleteJobTrigger",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobJobClusterListGet:async(a={})=>{const e="/api/sysJob/jobClusterList",t=new URL(e,"https://example.com");let s;l&&(s=l.baseOptions);const r={method:"GET",...s,...a},o={},p={},c=new URLSearchParams(t.search);for(const h in p)c.set(h,p[h]);for(const h in a.params)c.set(h,a.params[h]);t.search=new URLSearchParams(c).toString();let i=s&&s.headers?s.headers:{};return r.headers={...o,...i,...a.headers},{url:t.pathname+t.search+t.hash,options:r}},apiSysJobJobTriggerListGet:async(a,e={})=>{const t="/api/sysJob/jobTriggerList",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"GET",...r,...e},p={},c={};a!==void 0&&(c.JobId=a);const i=new URLSearchParams(s.search);for(const y in c)i.set(y,c[y]);for(const y in e.params)i.set(y,e.params[y]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};return o.headers={...p,...h,...e.headers},{url:s.pathname+s.search+s.hash,options:o}},apiSysJobPageJobDetailPost:async(a,e={})=>{const t="/api/sysJob/pageJobDetail",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobPauseAllJobPost:async(a={})=>{const e="/api/sysJob/pauseAllJob",t=new URL(e,"https://example.com");let s;l&&(s=l.baseOptions);const r={method:"POST",...s,...a},o={},p={},c=new URLSearchParams(t.search);for(const h in p)c.set(h,p[h]);for(const h in a.params)c.set(h,a.params[h]);t.search=new URLSearchParams(c).toString();let i=s&&s.headers?s.headers:{};return r.headers={...o,...i,...a.headers},{url:t.pathname+t.search+t.hash,options:r}},apiSysJobPauseJobPost:async(a,e={})=>{const t="/api/sysJob/pauseJob",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobPauseTriggerPost:async(a,e={})=>{const t="/api/sysJob/pauseTrigger",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobPersistAllPost:async(a={})=>{const e="/api/sysJob/persistAll",t=new URL(e,"https://example.com");let s;l&&(s=l.baseOptions);const r={method:"POST",...s,...a},o={},p={},c=new URLSearchParams(t.search);for(const h in p)c.set(h,p[h]);for(const h in a.params)c.set(h,a.params[h]);t.search=new URLSearchParams(c).toString();let i=s&&s.headers?s.headers:{};return r.headers={...o,...i,...a.headers},{url:t.pathname+t.search+t.hash,options:r}},apiSysJobStartAllJobPost:async(a={})=>{const e="/api/sysJob/startAllJob",t=new URL(e,"https://example.com");let s;l&&(s=l.baseOptions);const r={method:"POST",...s,...a},o={},p={},c=new URLSearchParams(t.search);for(const h in p)c.set(h,p[h]);for(const h in a.params)c.set(h,a.params[h]);t.search=new URLSearchParams(c).toString();let i=s&&s.headers?s.headers:{};return r.headers={...o,...i,...a.headers},{url:t.pathname+t.search+t.hash,options:r}},apiSysJobStartJobPost:async(a,e={})=>{const t="/api/sysJob/startJob",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobStartTriggerPost:async(a,e={})=>{const t="/api/sysJob/startTrigger",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobUpdateJobDetailPost:async(a,e={})=>{const t="/api/sysJob/updateJobDetail",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}},apiSysJobUpdateJobTriggerPost:async(a,e={})=>{const t="/api/sysJob/updateJobTrigger",s=new URL(t,"https://example.com");let r;l&&(r=l.baseOptions);const o={method:"POST",...r,...e},p={},c={};p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(s.search);for(const n in c)i.set(n,c[n]);for(const n in e.params)i.set(n,e.params[n]);s.search=new URLSearchParams(i).toString();let h=r&&r.headers?r.headers:{};o.headers={...p,...h,...e.headers};const y=typeof a!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(a!==void 0?a:{}):a||"",{url:s.pathname+s.search+s.hash,options:o}}}},S=function(l){return{async apiSysJobAddJobDetailPost(a,e){const t=await u(l).apiSysJobAddJobDetailPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobAddJobTriggerPost(a,e){const t=await u(l).apiSysJobAddJobTriggerPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobCancelSleepPost(a){const e=await u(l).apiSysJobCancelSleepPost(a);return(t=P,s=b)=>{const r={...e.options,url:s+e.url};return t.request(r)}},async apiSysJobDeleteJobDetailPost(a,e){const t=await u(l).apiSysJobDeleteJobDetailPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobDeleteJobTriggerPost(a,e){const t=await u(l).apiSysJobDeleteJobTriggerPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobJobClusterListGet(a){const e=await u(l).apiSysJobJobClusterListGet(a);return(t=P,s=b)=>{const r={...e.options,url:s+e.url};return t.request(r)}},async apiSysJobJobTriggerListGet(a,e){const t=await u(l).apiSysJobJobTriggerListGet(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobPageJobDetailPost(a,e){const t=await u(l).apiSysJobPageJobDetailPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobPauseAllJobPost(a){const e=await u(l).apiSysJobPauseAllJobPost(a);return(t=P,s=b)=>{const r={...e.options,url:s+e.url};return t.request(r)}},async apiSysJobPauseJobPost(a,e){const t=await u(l).apiSysJobPauseJobPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobPauseTriggerPost(a,e){const t=await u(l).apiSysJobPauseTriggerPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobPersistAllPost(a){const e=await u(l).apiSysJobPersistAllPost(a);return(t=P,s=b)=>{const r={...e.options,url:s+e.url};return t.request(r)}},async apiSysJobStartAllJobPost(a){const e=await u(l).apiSysJobStartAllJobPost(a);return(t=P,s=b)=>{const r={...e.options,url:s+e.url};return t.request(r)}},async apiSysJobStartJobPost(a,e){const t=await u(l).apiSysJobStartJobPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobStartTriggerPost(a,e){const t=await u(l).apiSysJobStartTriggerPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobUpdateJobDetailPost(a,e){const t=await u(l).apiSysJobUpdateJobDetailPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}},async apiSysJobUpdateJobTriggerPost(a,e){const t=await u(l).apiSysJobUpdateJobTriggerPost(a,e);return(s=P,r=b)=>{const o={...t.options,url:r+t.url};return s.request(o)}}}};class d extends J{async apiSysJobAddJobDetailPost(a,e){return S(this.configuration).apiSysJobAddJobDetailPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobAddJobTriggerPost(a,e){return S(this.configuration).apiSysJobAddJobTriggerPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobCancelSleepPost(a){return S(this.configuration).apiSysJobCancelSleepPost(a).then(e=>e(this.axios,this.basePath))}async apiSysJobDeleteJobDetailPost(a,e){return S(this.configuration).apiSysJobDeleteJobDetailPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobDeleteJobTriggerPost(a,e){return S(this.configuration).apiSysJobDeleteJobTriggerPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobJobClusterListGet(a){return S(this.configuration).apiSysJobJobClusterListGet(a).then(e=>e(this.axios,this.basePath))}async apiSysJobJobTriggerListGet(a,e){return S(this.configuration).apiSysJobJobTriggerListGet(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobPageJobDetailPost(a,e){return S(this.configuration).apiSysJobPageJobDetailPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobPauseAllJobPost(a){return S(this.configuration).apiSysJobPauseAllJobPost(a).then(e=>e(this.axios,this.basePath))}async apiSysJobPauseJobPost(a,e){return S(this.configuration).apiSysJobPauseJobPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobPauseTriggerPost(a,e){return S(this.configuration).apiSysJobPauseTriggerPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobPersistAllPost(a){return S(this.configuration).apiSysJobPersistAllPost(a).then(e=>e(this.axios,this.basePath))}async apiSysJobStartAllJobPost(a){return S(this.configuration).apiSysJobStartAllJobPost(a).then(e=>e(this.axios,this.basePath))}async apiSysJobStartJobPost(a,e){return S(this.configuration).apiSysJobStartJobPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobStartTriggerPost(a,e){return S(this.configuration).apiSysJobStartTriggerPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobUpdateJobDetailPost(a,e){return S(this.configuration).apiSysJobUpdateJobDetailPost(a,e).then(t=>t(this.axios,this.basePath))}async apiSysJobUpdateJobTriggerPost(a,e){return S(this.configuration).apiSysJobUpdateJobTriggerPost(a,e).then(t=>t(this.axios,this.basePath))}}export{d as S};
