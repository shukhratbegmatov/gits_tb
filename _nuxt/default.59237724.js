import{U as N,_ as B}from"./Header.vue.e9f0564b.js";import{_ as P}from"./Logo.vue.d9d938c8.js";import{d as S,x as F,g as V,o,c as a,e,b as n,w as h,t as p,h as u,j as _,F as U,r as j,l as q,_ as I,i as R,k as $,D as Y,T as A,q as E}from"./entry.cf20d4e6.js";import{u as H}from"./main.962c3179.js";import{u as M}from"./destination.6942b686.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Preloader.54e07d4e.js";import"./Input.65ab389f.js";import"./useFetcher.12c76293.js";import"./index.c74183ad.js";import"./index.76276c55.js";const W=""+globalThis.__publicAssetsURL("pattern/footer.png"),Z=[{to:"/",text:"main_page"},{to:"/help",text:"faq"},{to:"/page/privacy-agreement",text:"privacy"}],z={class:""},G={class:"max-md:border-b-0 border-y-2 border-white/10 relative"},J={class:"container grid grid-cols-1 lg:grid-cols-3 items-start gap-10 md:gap-6 pt-6 md:py-9"},K={class:"font-normal text-sm leading-140 text-white mt-4"},O={class:"flex items-end justify-center gap-3 max-lg:order-1 mt-auto"},Q=["href"],X=["href"],tt=["href"],et=["href"],ot={class:"grid grid-cols-2 gap-x-6 gap-y-4 max-lg:order-0"},at={class:"md:bg-dark-500 pt-4 pb-9 md:py-5"},st={class:"flex-center-between container"},rt={class:"text-white text-sm leading-130"},it=S({__name:"Footer",setup(T){const r=F(!0),s=H(),t=V(()=>s.staticFields);async function l(){return await Promise.all([s.fetchSocials(),s.fetchStaticFields()])}return l().finally(()=>{r.value=!1}),(i,c)=>{var g,v,x,y,w,b,k,D;const m=P,f=I,d=R("tooltip");return o(),a("div",z,[e("div",G,[e("div",J,[e("div",null,[n(f,{to:i.localePath("/")},{default:h(()=>[(o(),$(m,{key:r.value}))]),_:1},8,["to"]),e("p",K,p(i.$t("footer_text")),1)]),e("div",O,[(g=t.value)!=null&&g.telegram?u((o(),a("a",{key:0,href:(v=t.value)==null?void 0:v.telegram,class:"icon-telegram text-4xl leading-9 relative group text-white hover:text-red-100 transition-300"},null,8,Q)),[[d,"Telegram"]]):_("",!0),(x=t.value)!=null&&x.twitter?u((o(),a("a",{key:1,href:(y=t.value)==null?void 0:y.twitter,class:"icon-twitter text-4xl leading-9 relative group text-white hover:text-red-100 transition-300 cursor-pointer"},null,8,X)),[[d,"Twitter"]]):_("",!0),(w=t.value)!=null&&w.youtube?u((o(),a("a",{key:2,href:(b=t.value)==null?void 0:b.youtube,class:"icon-youtube text-4xl leading-9 relative group text-white hover:text-red-100 transition-300 cursor-pointer"},null,8,tt)),[[d,"Youtube"]]):_("",!0),(k=t.value)!=null&&k.instagram?u((o(),a("a",{key:3,href:(D=t.value)==null?void 0:D.instagram,class:"icon-instagram text-4xl leading-9 relative group text-white hover:text-red-100 transition-300 cursor-pointer"},null,8,et)),[[d,"Instagram"]]):_("",!0)]),e("div",ot,[(o(!0),a(U,null,j(q(Z),(L,C)=>(o(),$(f,{class:"text-white text-base font-semibold leading-130 hover:text-white/40 transition-300",key:C,to:i.localePath(L.to)},{default:h(()=>[Y(p(i.$t(L.text)),1)]),_:2},1032,["to"]))),128))])]),c[0]||(c[0]=e("img",{src:W,alt:"footer patter",class:"absolute left-0 top-0 h-full max-md:hidden"},null,-1))]),e("div",at,[e("div",st,[e("p",rt,p(`© ${new Date().getFullYear()}, Tabarruk Ziyorat`),1),n(N)])])])}}}),nt={class:"bg-dark"},xt=S({__name:"default",setup(T){const r=M(),s=F(!0);async function t(){return await Promise.all([r.fetchReligionListWithDestination(),r.fetchCountryList()])}return t().finally(()=>{s.value=!1}),(l,i)=>{const c=B,m=it;return o(),a("div",nt,[n(c,{loading:s.value},null,8,["loading"]),n(A,{name:"fade",mode:"out-in"},{default:h(()=>[(o(),a("div",{key:l.$route.name,class:"overflow-x-hidden"},[E(l.$slots,"default")]))]),_:3}),n(m)])}}});export{xt as default};
