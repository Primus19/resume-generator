(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7465:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var n=r(482),s=r(9108),a=r(2563),i=r.n(a),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2277)),"/home/ubuntu/resume-generator-disk-fix/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],u=[],c="/_not-found",m={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2259:(e,t,r)=>{Promise.resolve().then(r.bind(r,5094))},8294:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},5094:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var n=r(5344),s=r(3130),a=r.n(s),i=r(5242),o=r.n(i),l=r(6622),d=r.n(l),u=r(6388),c=r.n(u),m=r(5261),p=r.n(m),x=r(7983),f=r.n(x),h=r(3729);let b={template:"",colorScheme:"blue",personalInfo:{firstName:"",lastName:"",email:"",phone:"",title:"",location:"",summary:""},experiences:[],education:[],skills:[]},v=(0,h.createContext)(void 0),g=({children:e})=>{let[t,r]=(0,h.useState)(b);return n.jsx(v.Provider,{value:{resumeData:t,updateTemplate:e=>{r(t=>({...t,template:e}))},updateColorScheme:e=>{r(t=>({...t,colorScheme:e}))},updatePersonalInfo:e=>{r(t=>({...t,personalInfo:{...t.personalInfo,...e}}))},addExperience:e=>{let t=Date.now().toString();r(r=>({...r,experiences:[...r.experiences,{...e,id:t}]}))},updateExperience:(e,t)=>{r(r=>({...r,experiences:r.experiences.map(r=>r.id===e?{...r,...t}:r)}))},removeExperience:e=>{r(t=>({...t,experiences:t.experiences.filter(t=>t.id!==e)}))},addEducation:e=>{let t=Date.now().toString();r(r=>({...r,education:[...r.education,{...e,id:t}]}))},updateEducation:(e,t)=>{r(r=>({...r,education:r.education.map(r=>r.id===e?{...r,...t}:r)}))},removeEducation:e=>{r(t=>({...t,education:t.education.filter(t=>t.id!==e)}))},addSkill:e=>{t.skills.includes(e)||r(t=>({...t,skills:[...t.skills,e]}))},removeSkill:e=>{r(t=>({...t,skills:t.skills.filter(t=>t!==e)}))}},children:e})},P=`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideIn {
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(88, 166, 255, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(88, 166, 255, 0); }
    100% { box-shadow: 0 0 0 0 rgba(88, 166, 255, 0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-slideIn {
    animation: slideIn 0.5s ease-out forwards;
  }
  
  .animate-pulse {
    animation: pulse 2s infinite;
  }
`;function _({children:e}){return(0,n.jsxs)(g,{children:[n.jsx(f(),{id:P.__hash,children:P}),n.jsx("div",{className:`${a().variable} ${o().variable} ${d().variable} ${c().variable} ${p().variable}`,children:e})]})}},2277:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>u});var n=r(5036),s=r(8592),a=r.n(s);r(7272);let i=(0,r(6843).createProxy)(String.raw`/home/ubuntu/resume-generator-disk-fix/src/components/AppProviders.tsx`),{__esModule:o,$$typeof:l}=i,d=i.default,u={title:"Resume Generator - Create Professional Resumes",description:"Create stunning, professional resumes in minutes with our sleek resume generator."};function c({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:a().className,children:n.jsx("div",{className:"min-h-screen bg-gradient-to-b from-[rgb(13,17,23)] to-[rgb(23,27,33)]",children:n.jsx(d,{children:e})})})})}},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,150],()=>r(7465));module.exports=n})();