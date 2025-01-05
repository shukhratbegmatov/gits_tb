import{d as g,g as n,o as l,c as i,e as t,n as r,v as s,j as a,B as y,t as C}from"./entry.4775dd14.js";const h={class:"loading-icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v=["opacity","stroke"],m=t("path",{d:"M11.2458 20.8191C9.38896 20.6622 7.56653 19.9205 6.07624 18.5787C3.60297 16.3517 2.67826 13.0422 3.37337 10.0106",stroke:"#1A1A1A","stroke-width":"3","stroke-linecap":"round"},null,-1),B=g({__name:"Button",props:{text:{default:"Button"},textClass:{default:""},shadowColor:{default:""},hasShadow:{type:Boolean,default:!0},spinnerColor:{default:"white"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},type:{default:"button"},variant:{default:"primary"},icon:{},iconClass:{},buttonClass:{},suffix:{type:Boolean}},emits:["click"],setup(d,{emit:u}){const o=d,p=n(()=>`s-button-${o.variant}`),c=u,f=()=>{c("click")},b=n(()=>[o.textClass,o.loading?"opacity-0 invisible":"opacity-100 visible","font-semibold leading-150 text-base select-none"]);return(e,k)=>(l(),i("button",y({disabled:e.disabled,type:e.type},{class:["transition-300 rounded-lg py-4 px-3 flex-center cursor-pointer relative group disabled:bg-grey-light disabled:hover:bg-grey-light disabled:text-dark/40 outline-none",[e.buttonClass,{"pointer-events-none w-[110px]":e.loading},p.value]],style:{"--box-shadow":e.shadowColor,"--spinnerColor":e.spinnerColor},onClick:f}),[t("i",{class:r(["s-transition absolute-center-h absolute-center-v",e.loading?"opacity-100 visible":"opacity-0 invisible w-0"])},[(l(),i("svg",h,[t("path",{opacity:[e.loading?1:.2],d:"M11.9999 3.14746C16.8856 3.14746 20.8524 7.11425 20.8524 11.9999C20.8524 16.8856 16.8856 20.8524 11.9999 20.8524C7.11425 20.8524 3.14746 16.8856 3.14746 11.9999C3.14746 7.11425 7.11425 3.14746 11.9999 3.14746Z",stroke:[e.loading?"#ffffff":"#111325"],"stroke-width":"3"},null,8,v),m]))],2),e.loading?a("",!0):s(e.$slots,"default",{key:0},()=>[e.icon?s(e.$slots,"icon",{key:0}):a("",!0),t("span",{class:r([b.value,"s-transition"])},C(e.text),3),e.suffix?s(e.$slots,"suffix",{key:1}):a("",!0)])],16))}});export{B as _};
