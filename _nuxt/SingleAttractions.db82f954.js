import{_ as c}from"./Preloader.733d0edb.js";import{d as m,o as u,k as x,w as r,e,b as g,n as a,t as d,D as h,_ as f}from"./entry.c14770fa.js";import{_ as v}from"./_plugin-vue_export-helper.c27b6911.js";const b={class:"w-full h-full relative rounded-xl border border-white/25 overflow-hidden"},w=["src","alt"],y={class:"gradient-overlay absolute w-full h-full top-0 left-0 z-20 p-3 sm:p-5 flex items-end justify-start"},C={class:"text-white"},k=m({__name:"SingleAttractions",props:{data:{},cardLoading:{type:Boolean},titleClass:{},cardClass:{},textClass:{}},setup(B){return(t,s)=>{var o;const p=c,_=f;return u(),x(_,{to:t.localePath(`/destination/${(o=t.data)==null?void 0:o.slug}`),class:a(["group w-[200px] sm:w-[220px] md:w-[280px] h-[220px] sm:h-[240px] md:h-[300px]",t.cardClass])},{default:r(()=>[e("div",b,[g(p,{width:"100%",height:"100%","border-radius":"12px",loading:t.cardLoading},{default:r(()=>{var l,n,i;return[e("img",{src:(l=t.data)==null?void 0:l.image,alt:t.data.title,class:"absolute w-full h-full object-cover top-0 left-0 z-10 transition-300 group-hover:scale-110"},null,8,w),e("div",y,[e("div",C,[e("p",{class:a([t.titleClass,"font-semibold leading-130 text-lg sm:text-xl md:text-2xl translate-y-5 group-hover:translate-y-0 transition-300"])},d(t.data.title),3),e("p",{class:a([t.textClass,"font-medium leading-130 text-sm sm:text-base md:text-xl text-white/80 mt-1 flex items-center gap-x-2 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-300"])},[s[0]||(s[0]=e("i",{class:"icon-map-pin"},null,-1)),h(" "+d((i=(n=t.data)==null?void 0:n.destination_country)==null?void 0:i.title),1)],2)])])]}),_:1},8,["loading"])])]),_:1},8,["to","class"])}}});const S=v(k,[["__scopeId","data-v-dbad3b64"]]);export{S as _};
