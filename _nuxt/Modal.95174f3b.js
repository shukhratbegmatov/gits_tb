import{d as p,B as f,M as w,o as s,c as n,j as d,b as v,w as y,T as h,e as o,q as r,n as l,t as _}from"./entry.cf20d4e6.js";import{_ as b}from"./_plugin-vue_export-helper.c27b6911.js";const x={key:0,id:"ModalBg",class:"fixed top-0 w-full h-full z-[51] flex items-center justify-center transition-300 p-5"},k={class:"text-white text-lg md:text-2xl font-semibold text-white"},M=p({__name:"Modal",props:{title:{default:"Modal"},show:{type:Boolean},bodyStyle:{},headerStyle:{},buttonClass:{}},emits:["close"],setup(g,{emit:u}){const m=u,a=e=>{const t=e.target;t.id!=="Modal"&&t.id==="ModalBg"&&i()};f(()=>{document==null||document.addEventListener("mousedown",a,{passive:!0}),document==null||document.addEventListener("keydown",e=>{e.code=="Escape"&&i()},{passive:!0})}),w(()=>{document==null||document.removeEventListener("mousedown",a,{passive:!0})});function i(){m("close")}return(e,t)=>(s(),n("div",null,[e.show?(s(),n("div",{key:0,class:"fixed top-0 w-full h-full bg-black/60 z-50 flex items-center justify-center transition-300 p-5",onClick:t[0]||(t[0]=c=>e.$emit("close"))})):d("",!0),v(h,{name:"modal"},{default:y(()=>[e.show?(s(),n("div",x,[o("div",{id:"Modal",class:l(["bg-dark rounded-xl w-full max-w-[484px] overflow-hidden scale-110 transition-300",[{"!scale-100":e.show},e.bodyStyle]])},[r(e.$slots,"header",{},()=>[o("div",{class:l(["px-5 py-2 md:py-3 flex justify-between items-center border-b border-white/18",e.headerStyle])},[o("h3",k,_(e.title),1),o("button",{onClick:t[1]||(t[1]=c=>e.$emit("close")),class:l(["text-white/50 transition-300 hover:text-white",e.buttonClass])},t[2]||(t[2]=[o("i",{class:"icon-xmark"},null,-1)]),2)],2)],!0),r(e.$slots,"default",{},void 0,!0)],2)])):d("",!0)]),_:3})]))}});const S=b(M,[["__scopeId","data-v-3028af9e"]]);export{S as _};
