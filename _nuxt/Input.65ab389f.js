import{d as h,x as v,y,o as b,c as g,e as n,q as r,n as s,z as w,aa as _,l as x,ab as B}from"./entry.cf20d4e6.js";import{_ as C}from"./_plugin-vue_export-helper.c27b6911.js";const I=["value"],$=h({__name:"Input",props:{type:{default:"text"},placeholder:{},modelValue:{},disabled:{type:Boolean},error:{type:Boolean},focus:{type:Boolean},maxlength:{default:99},minlength:{default:void 0},max:{default:void 0},min:{default:void 0},inputClass:{default:void 0},prefixClass:{},suffixClass:{},autocomplete:{default:"new-password"},id:{},readonly:{type:Boolean}},emits:["update:modelValue","blur","focusout","focus","enter"],setup(d,{expose:u,emit:i}){const a=i,p=e=>{a("update:modelValue",e.target.value)},f=()=>{a("enter")},t=v();u({Input:t});const l=d,m=e=>{a("focus")};return y(()=>l==null?void 0:l.focus,e=>{var o;e&&((o=t==null?void 0:t.value)==null||o.focus())},{deep:!0,immediate:!0}),(e,o)=>(b(),g("div",{class:s(["relative inline-flex items-center transition-300 relative rounded-lg border overflow-hidden w-full px-4 py-3 group focus-within:border-white/70 bg-white/10 border-white/20 input-backdrop",{"!border-red":e.error}])},[n("span",{class:s([[e.prefixClass],"flex-center"])},[r(e.$slots,"prefix",{},void 0,!0)],2),n("input",w({value:e.modelValue},{type:e.type,minlength:e.minlength,maxlength:e.maxlength,max:e.max,min:e.min,disabled:e.disabled,placeholder:e.placeholder,readonly:"readonly"in e?e.readonly:x(B),autocomplete:e.autocomplete,id:e.id},{class:[[e.inputClass,"font-medium leading-130 text-base placeholder:text-base placeholder:font-normal bg-transparent flex-grow outline-none text-white placeholder:text-white/20"],"w-full"],ref_key:"Input",ref:t,onKeyup:_(f,["enter"]),onInput:p,onBlur:o[0]||(o[0]=c=>e.$emit("blur")),onFocusout:o[1]||(o[1]=c=>e.$emit("focusout")),onFocus:m}),null,16,I),n("span",{class:s([[e.suffixClass],"flex-center"])},[r(e.$slots,"suffix",{},void 0,!0)],2)],2))}});const F=C($,[["__scopeId","data-v-d73a1dbb"]]);export{F as _};
