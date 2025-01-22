import{_ as M}from"./Breadcrumb.vue.1c018e8a.js";import{a as S,_ as V}from"./CopyUrl.5739c63a.js";import{s as $,$ as Y}from"./useFetcher.f8622034.js";import{d as C,o as p,c as D,e as s,l as o,b as i,w as k,D as r,u as j,x as z,g as H,k as E,m as I,z as L,j as P,t as c,C as U,U as A}from"./entry.07f4fb3d.js";import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";import{u as X}from"./asyncData.e68094e2.js";import{u as q}from"./composables.bad1cd50.js";const F={class:"border-t border-dark-100 pt-3 md:pt-4"},G={class:"max-w-[584px] w-fit mx-auto flex items-stretch gap-4 p-3 md:p-4 max-sm:flex-col bg-dark/50 border border-white/20 rounded-xl"},J={class:"flex gap-3 sm:gap-4"},K=C({__name:"SingleDetail",props:{title:{}},setup(N){return(a,e)=>{const t=S,m=V;return p(),D("div",F,[s("div",G,[s("div",J,[e[4]||(e[4]=s("i",{class:"icon-share text-white text-2xl sm:text-32 leading-6 sm:leading-8"},null,-1)),e[5]||(e[5]=s("span",{class:"w-px h-6 sm:h-8",style:{background:`linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              #ffffff 51.04%,
              rgba(255, 255, 255, 0) 100%
            )`}},null,-1)),s("button",{onClick:e[0]||(e[0]=n=>("share"in a?a.share:o($))("telegram",a.title)),class:"icon-telegram social-share group"},[i(t,null,{default:k(()=>e[2]||(e[2]=[r(" Telegram ")])),_:1})]),s("button",{onClick:e[1]||(e[1]=n=>("share"in a?a.share:o($))("twitter",a.title)),class:"icon-twitter social-share group"},[i(t,null,{default:k(()=>e[3]||(e[3]=[r(" Twitter ")])),_:1})])]),i(m)])])}}});const O=R(K,[["__scopeId","data-v-a392c551"]]),Q={class:"pt-20 md:pt-[120px] pb-12 container min-h-[calc(100vh-239px)]"},W={class:"max-w-3xl mx-auto"},Z={class:"text-40 text-white font-semibold leading-130 text-white"},tt={class:"flex-y-center gap-7 my-4 text-gray-100"},et={class:"flex-y-center gap-1"},st={class:"flex-y-center gap-1"},ot={class:"aspect-video w-full rounded-xl overflow-hidden"},at=["src","alt"],nt=["innerHTML"],ut=C({__name:"[slug]",setup(N){var n,u,_,f;const a=j(),e=z(!1),{data:t}=X(async()=>(e.value=!0,await Y.$get(`/news/NewsDetail/${a.params.slug}/`).catch(()=>{U({statusCode:404})}).finally(()=>{e.value=!1})),"$mN2gziXVDH");q({title:(n=t==null?void 0:t.value)==null?void 0:n.title,description:(u=t==null?void 0:t.value)==null?void 0:u.short_description,ogDescription:(_=t.value)==null?void 0:_.short_description,ogImage:(f=t==null?void 0:t.value)==null?void 0:f.image});const m=H(()=>{var d;return[{title:"News",link:"/news"},{title:(d=t==null?void 0:t.value)==null?void 0:d.title,link:"/news"}]});return(d,l)=>{var x,g,v,h,w,y,b;const T=M,B=O;return p(),D("div",Q,[o(e)?P("",!0):(p(),E(T,I(L({key:0},{menu:o(m)})),null,16)),s("div",W,[s("h1",Z,c((x=o(t))==null?void 0:x.title),1),s("div",tt,[s("div",et,[l[0]||(l[0]=s("i",{class:"icon-calendar text-2xl leading-6"},null,-1)),r(" "+c(o(A)((g=o(t))==null?void 0:g.published_at).format("DD.MM.YYYY")),1)]),s("div",st,[l[1]||(l[1]=s("i",{class:"icon-eye text-2xl leading-6"},null,-1)),r(" "+c((v=o(t))==null?void 0:v.view_count),1)])]),s("div",ot,[s("img",{class:"w-full h-full object-cover",src:(h=o(t))==null?void 0:h.image,alt:(w=o(t))==null?void 0:w.title},null,8,at)]),s("div",{class:"vhtml-text py-6",innerHTML:(y=o(t))==null?void 0:y.description},null,8,nt),i(B,{title:(b=o(t))==null?void 0:b.title},null,8,["title"])])])}}});export{ut as default};
