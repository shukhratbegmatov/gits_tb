<<<<<<<< HEAD:_nuxt/about.85e762f9.js
import{d as b,g as f,o as l,c,F as I,r as L,h as T,e as o,i as ot,n as P,b as a,w as r,j as V,t as m,k as j,l as M,m as E,p as Y,q as st,s as K,v as nt,x as D,y as at,z as W}from"./entry.e1b59000.js";import{_ as lt}from"./Breadcrumb.vue.ae042215.js";import{_ as H,a as G}from"./Preloader.af539718.js";import{_ as it}from"./InfoCard.vue.32150f62.js";import{_ as rt}from"./Wrapper.7d6e1f18.js";import{S as ct,a as dt,N as ut}from"./swiper-slide.eaddbbe7.js";import{A as _t}from"./autoplay.b22bf47f.js";import{_ as N}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as mt}from"./PromoVideo.8bb84b04.js";import{f as pt,t as gt}from"./useFetcher.72e389f6.js";import{_ as ft}from"./Modal.c663aff9.js";import{u as ht}from"./composables.b30f66a0.js";import{u as vt}from"./about.4abbed65.js";import"./index.4efef8ff.js";const xt={class:"relative w-full h-[200px] lg:h-[550px]"},bt={key:0,class:"w-full h-full flex-y-center relative"},wt={class:"w-full h-full absolute left-0 max-w-[30%] object-cover",alt:"banner-image"},yt={class:"w-full h-full absolute right-0 max-w-[30%] object-cover",alt:"banner-image"},$t={key:1,class:"w-full h-full flex-y-center relative"},kt=b({__name:"Multi",props:{images:{}},setup(h){const t=h,i=f(()=>{var s;return(s=t.images[0])==null?void 0:s.image});return(s,e)=>{var u,_;const n=ot("lazy");return l(),c("div",xt,[s.images?(l(),c("div",bt,[(l(!0),c(I,null,L(s.images,(v,d)=>{var x,p;return l(),c("div",{class:P(["w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]",{"border-r-[0px]":d===((x=s.images)==null?void 0:x.length)-1}]),key:d},[T(o("img",{class:P(["w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6]",{"opacity-0":d===0||d===((p=s.images)==null?void 0:p.length)-1}]),alt:"banner-image"},null,2),[[n,{src:v==null?void 0:v.image,delay:500}]])],2)}),128)),T(o("img",wt,null,512),[[n,{src:i.value,delay:500}]]),T(o("img",yt,null,512),[[n,{src:(_=s.images[((u=s.images)==null?void 0:u.length)-1])==null?void 0:_.image,delay:500}]]),e[0]||(e[0]=o("div",{class:"w-full h-full absolute inset-0 bg-dark/20 z-[2]"},null,-1))])):(l(),c("div",$t,e[1]||(e[1]=[o("div",{class:"w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"},null,-1)])))])}}}),Ct={key:0,class:"relative z-10"},St={class:"container"},zt={class:"py-6 md:py-8 lg:py-16 space-y-8 lg:space-y-16"},At={class:"space-y-4 text-white"},Bt={class:"text-3xl lg:text-[40px] font-bold leading-130 font-playfair"},Pt=["innerHTML"],jt={class:"flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},Mt=b({__name:"AboutUs",props:{statistics:{},about:{},loading:{type:Boolean}},setup(h){return(t,i)=>{const s=H;return t.statistics?(l(),c("section",Ct,[o("div",St,[o("div",zt,[o("div",At,[a(s,{width:"163px",height:"52px","border-radius":"4px",class:"!inline-block mb-4",loading:t.loading},{default:r(()=>[o("h2",Bt,m(t.$t("about_us_title")),1)]),_:1},8,["loading"]),a(s,{width:"100%",height:"70px","border-radius":"4px",loading:t.loading},{default:r(()=>{var e;return[o("div",{class:"text-base lg:text-lg font-medium leading-130",innerHTML:(e=t.about)==null?void 0:e.description},null,8,Pt)]}),_:1},8,["loading"])]),o("div",jt,[(l(!0),c(I,null,L(t.loading?4:t.statistics,(e,n)=>(l(),j(it,{key:n,icon:e==null?void 0:e.icon,title:e==null?void 0:e.title,count:e==null?void 0:e.count,loading:t.loading},null,8,["icon","title","count","loading"]))),128))])])])])):V("",!0)}}}),It=""+globalThis.__publicAssetsURL("svg/mission-bg.svg"),Lt={class:"relative bg-white/5 py-8 lg:py-16 after:absolute after:top-0 after:left-0 after:top-0 after:w-full after:h-full after:bg-black/50 xl:after:hidden"},Vt={class:"relative container space-y-6 z-20"},Ft={class:"space-y-4 text-white max-w-[583px]"},Tt={class:"text-3xl lg:text-[40px] font-bold leading-130 font-playfair"},Dt=["innerHTML"],Et={class:"space-y-4"},Ht={class:"text-xl text-white font-semibold leading-130"},Nt={class:"inline-flex flex-col space-y-[18px] w-full max-w-[423px]"},Ot={class:"flex items-center space-x-2"},Ut=["src","alt"],Rt={class:"text-[15px] text-white font-bold leading-130 font-playfair"},qt=["src","alt"],Kt=b({__name:"OurMission",props:{mission:{},supporters:{},loading:{type:Boolean}},setup(h){return(t,i)=>{const s=H;return l(),c("section",Lt,[i[0]||(i[0]=o("img",{src:It,alt:"mission-bg",class:"absolute right-0 top-0 h-full object-cover"},null,-1)),o("div",Vt,[o("div",Ft,[a(s,{width:"163px",height:"52px","border-radius":"4px",class:"!inline-block mb-4",loading:t.loading},{default:r(()=>[o("h2",Tt,m(t.$t("our_mission")),1)]),_:1},8,["loading"]),a(s,{width:"100%",height:"70px","border-radius":"4px",loading:t.loading},{default:r(()=>[o("div",{class:"text-base lg:text-lg font-medium leading-130",innerHTML:t.mission},null,8,Dt)]),_:1},8,["loading"])]),o("div",Et,[a(s,{width:"139px",height:"26px","border-radius":"4px","preloader-class":"mb-4",loading:t.loading},{default:r(()=>[o("h4",Ht,m(t.$t("our_supporter")),1)]),_:1},8,["loading"]),o("div",Nt,[(l(!0),c(I,null,L(t.supporters,(e,n)=>(l(),c("div",{key:n,class:"relative bg-white/5 rounded-lg p-3 border border-solid border-white/5 overflow-hidden"},[a(s,{width:"250px",height:"43px","border-radius":"4px","preloader-class":"mb-4",loading:t.loading},{default:r(()=>[o("div",Ot,[o("img",{src:e==null?void 0:e.logo,alt:e==null?void 0:e.name},null,8,Ut),o("p",Rt,m(e==null?void 0:e.name),1)])]),_:2},1032,["loading"]),a(s,{width:"100px",height:"120px","border-radius":"4px","preloader-class":"absolute -bottom-full right-0",loading:t.loading},{default:r(()=>[o("img",{src:e==null?void 0:e.logo,alt:e==null?void 0:e.name,class:"absolute w-[120px] h-[120px] object-contain -bottom-16 right-0 grayscale opacity-10"},null,8,qt)]),_:2},1032,["loading"])]))),128))])])])])}}});const Wt={class:"statement-card relative w-full flex items-start flex-col rounded-[20px] border border-solid border-white/20 pb-[70px] px-3 transition-all duration-300 bg-dark-400"},Yt={class:"flex items-center justify-center flex-col mb-5 w-full"},Gt={class:"flex-shrink-0 w-[84px] h-[84px] rounded-full border border-gray-200 overflow-hidden -mt-[45px] custom-shadow"},Jt=["src","alt"],Qt={class:"flex flex-col items-center w-full mt-4 space-y-[6.8px]"},Xt={class:"custom-title text-red-100 text-base leading-130 font-bold"},Zt={class:"custom-subtitle text-white/80 text-sm leading-130 font-medium"},te={class:"custom-text text-sm text-white font-bold leading-130 text-center"},ee=b({__name:"StatementCard",props:{statement:{}},setup(h){return(t,i)=>{var s,e,n,u,_;return l(),c("div",Wt,[o("div",Yt,[o("div",Gt,[o("img",{src:(s=t.statement)==null?void 0:s.image,alt:(e=t.statement)==null?void 0:e.full_name,class:"w-full h-full object-cover"},null,8,Jt)]),o("div",Qt,[o("p",Xt,m((n=t.statement)==null?void 0:n.full_name),1),o("p",Zt,m((u=t.statement)==null?void 0:u.position),1)])]),o("p",te,m((_=t.statement)==null?void 0:_.statement),1),i[0]||(i[0]=o("span",{class:"icon-uni-cut absolute bottom-0 right-0 text-gray-100 text-[58px] opacity-5"},null,-1))])}}});const oe=N(ee,[["__scopeId","data-v-6707ccb1"]]),se={class:"relative md:px-[70px] xl:px-[100px]"},ne=b({__name:"Statements",props:{statements:{}},setup(h){const t={slidesPerView:3,spaceBetween:30,loop:!0,navigation:{nextEl:".slider-nav-next",prevEl:".slider-nav-prev"},centeredSlides:!0,autoplay:{delay:1e3,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:55},768:{slidesPerView:2,spaceBetween:55},1024:{slidesPerView:3,spaceBetween:55}},modules:[_t,ut]};return(i,s)=>{const e=rt;return l(),j(e,{centered:"",title:"statements",subtitle:"statements_sub"},{default:r(()=>[o("div",se,[a(M(dt),E(Y(t)),{default:r(()=>[(l(!0),c(I,null,L(i.statements,(n,u)=>(l(),j(M(ct),{key:u,class:"custom-state transition-all duration-300"},{default:r(()=>[a(oe,{statement:n},null,8,["statement"])]),_:2},1024))),128))]),_:1},16),s[0]||(s[0]=o("button",{class:"w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-prev lg:flex hidden absolute left-0 top-1/2 cursor-pointer group"},[o("i",{class:"icon-arrow-left text-3xl text-dark transition-300 group-hover:!text-white"})],-1)),s[1]||(s[1]=o("button",{class:"w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-next lg:flex hidden absolute right-0 top-1/2 cursor-pointer group"},[o("i",{class:"icon-arrow-right text-3xl text-dark transition-300 group-hover:!text-white"})],-1))])]),_:1})}}});const ae=N(ne,[["__scopeId","data-v-add03442"]]),le={class:"space-y-2"},ie={class:"flex items-center space-x-2"},re={class:"text-white/60 text-base font-medium leading-130"},ce={class:"text-white text-lg lg:text-xl font-bold leading-130"},de=b({__name:"InfoData",props:{title:{default:"Location"},icon:{default:"icon-location-pin"},loading:{type:Boolean}},setup(h){return(t,i)=>{const s=H;return l(),c("div",le,[a(s,{width:"93px",height:"21px","border-radius":"4px","preloader-class":"mb-2",loading:t.loading},{default:r(()=>[o("div",ie,[o("i",{class:P(["text-white/60 text-xl",t.icon])},null,2),o("span",re,m(t.$t(t.title)),1)])]),_:1},8,["loading"]),a(s,{width:"100%",height:"21px","border-radius":"4px",loading:t.loading},{default:r(()=>[o("p",ce,[st(t.$slots,"default")])]),_:3},8,["loading"])])}}}),ue={key:0,class:"relative"},_e=b({__name:"About",props:{locations:{},mapClass:{}},setup(h){const t=s=>({layout:"default#image",imageHref:"/svg/religions/about.svg",imageSize:[50,50],imageOffset:[-20,-30]}),i=f(()=>({apiKey:"",lang:"ru_RU",coordorder:"latlong",version:"2.1"}));return(s,e)=>{const n=K("ymap-marker"),u=K("yandex-map"),_=G;return s.locations?(l(),c("div",ue,[a(_,null,{default:r(()=>[a(u,{class:P(["h-full w-full",s.mapClass]),coords:s.locations.map_location,settings:i.value,zoom:14,controls:[]},{default:r(()=>{var v,d;return[a(n,{coords:s.locations.map_location,"marker-id":(v=s.locations)==null?void 0:v.location,"hint-content":(d=s.locations)==null?void 0:d.location,icon:t("about")},null,8,["coords","marker-id","hint-content","icon"])]}),_:1},8,["coords","settings","class"])]),_:1})])):V("",!0)}}});const me={class:"pb-16"},pe={class:"container flex items-stretch justify-between gap-5 flex-col lg:flex-row"},ge={class:"mb-6 text-white text-3xl lg:text-40 font-semibold leading-130 font-playfair"},fe={class:"space-y-5"},he=["href"],ve=["href"],xe={key:0,class:"rounded-xl relative overflow-hidden border border-solid border-white/20 w-full lg:max-w-[584px]"},be=b({__name:"Locations",props:{contacts:{}},setup(h){const t=h,i=f(()=>{var n;return{title:"location_contact",icon:"icon-location-pin",text:(n=t==null?void 0:t.contacts)==null?void 0:n.location}}),s=f(()=>{var n;return{title:"mail",icon:"icon-mail",text:(n=t==null?void 0:t.contacts)==null?void 0:n.email}}),e=f(()=>{var n;return{title:"phone_number",icon:"icon-phone",text:(n=t==null?void 0:t.contacts)==null?void 0:n.phone_number}});return f(()=>{var n,u;return[{id:1,name:(n=t==null?void 0:t.contacts)==null?void 0:n.location,location:(u=t==null?void 0:t.contacts)==null?void 0:u.map_location,image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.azernews.az%2Fmedia%2F2020%2F03%2F18%2F1584458665_old-city-4-800x450.jpg&f=1&nofb=1&ipt=f4812c3d5e90563db375976e60f0d823c56487fbdfae56428a7a4815a0cea048&ipo=images",religion:{type:"about"},latitude:41.321517,longitude:69.304964}]}),(n,u)=>{var d,x,p,C,S,k;const _=de,v=_e;return l(),c("section",me,[o("div",pe,[o("div",null,[o("h3",ge,m(n.$t("contacts")),1),o("div",fe,[a(_,{title:(d=i.value)==null?void 0:d.title,icon:(x=i.value)==null?void 0:x.icon},{default:r(()=>{var g;return[o("span",null,m((g=i.value)==null?void 0:g.text),1)]}),_:1},8,["title","icon"]),a(_,{title:(p=s.value)==null?void 0:p.title,icon:(C=s.value)==null?void 0:C.icon},{default:r(()=>{var g,w;return[o("a",{href:`mailto:${(g=s.value)==null?void 0:g.text}`,class:"hover:text-red duration-300"},m((w=s.value)==null?void 0:w.text),9,he)]}),_:1},8,["title","icon"]),a(_,{title:(S=e.value)==null?void 0:S.title,icon:(k=e.value)==null?void 0:k.icon},{default:r(()=>{var g,w;return[o("a",{href:`tel:${(g=e.value)==null?void 0:g.text}`,class:"hover:text-red duration-300"},m(M(pt)((w=e.value)==null?void 0:w.text)),9,ve)]}),_:1},8,["title","icon"])])]),n.contacts?(l(),c("div",xe,[a(v,{locations:n.contacts,"map-class":"!h-[300px]"},null,8,["locations"])])):V("",!0)])])}}}),we=""+globalThis.__publicAssetsURL("svg/bg-frame.svg"),ye={class:"relative"},$e={class:"relative"},ke=["src"],Ce=b({__name:"about",setup(h){var k,g,w;const t=vt(),{t:i}=nt(),s=f(()=>t==null?void 0:t.statistics),e=f(()=>t==null?void 0:t.aboutData),n=f(()=>t==null?void 0:t.statements),u=f(()=>t==null?void 0:t.contacts),_=f(()=>i("about_us_title")),v=[{title:"About us",link:"/about"}],d=D(!1),x=D(!1);at(()=>s,y=>{var $,z,A,B;p.value[0].count=($=y.value)==null?void 0:$.attractions_count,p.value[1].count=(z=y.value)==null?void 0:z.destinations_count,p.value[2].count=(A=y.value)==null?void 0:A.countries_count,p.value[3].count=(B=y.value)==null?void 0:B.religions_count},{deep:!0}),ht({title:_,description:(k=e==null?void 0:e.value)==null?void 0:k.title,ogTitle:(g=e==null?void 0:e.value)==null?void 0:g.title,ogImage:(w=e==null?void 0:e.value)==null?void 0:w.video_image});const p=D([{title:"attractions",count:0,icon:"/svg/moscue.svg"},{title:"destinations",count:0,icon:"/svg/global.svg"},{title:"countries",count:0,icon:"/svg/flag.svg"}]);async function C(){return d.value=!0,await Promise.all([await t.fetchAboutData(),await t.fetchStatistics(),await t.fetchStatements(),await t.fetchContacts()])}C().finally(()=>{d.value=!1});const S=()=>{x.value=!0};return(y,$)=>{var O,U,R,q;const z=kt,A=lt,B=Mt,J=Kt,Q=ae,X=mt,Z=be,tt=G,et=ft;return l(),c("div",ye,[o("div",$e,[$[1]||($[1]=o("img",{src:we,alt:"background frame",class:"absolute top-0 left-0 w-full h-full z-0"},null,-1)),a(z,{images:e.value.images,loading:d.value},null,8,["images","loading"]),a(A,{menu:v}),a(B,{about:e.value,statistics:p.value,loading:d.value},null,8,["about","statistics","loading"])]),a(J,E(Y({mission:(O=e.value)==null?void 0:O.our_mission,supporters:(U=e.value)==null?void 0:U.supporters,loading:d.value})),null,16),a(Q,{statements:n.value},null,8,["statements"]),a(X,W({class:"mb-8 lg:mb-16"},{image:(R=e.value)==null?void 0:R.video_image},{onHandleShowVideo:S}),null,16),d.value?V("",!0):(l(),j(Z,E(W({key:0},{contacts:u.value})),null,16)),a(et,{show:x.value,onClose:$[0]||($[0]=F=>x.value=!1),title:(q=e.value)==null?void 0:q.title,"body-style":"!max-w-[100%] md:!max-w-[70%] h-[55%] sm:h-[50%] md:h-[70%]"},{default:r(()=>[a(tt,null,{default:r(()=>{var F;return[(l(),c("iframe",{key:x.value,width:"100%",height:"100%",src:`https://www.youtube.com/embed/${("toEmbed"in y?y.toEmbed:M(gt))((F=e.value)==null?void 0:F.video_link)}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,ke))]}),_:1})]),_:1},8,["show","title"])])}}});const He=N(Ce,[["__scopeId","data-v-4349a045"]]);export{He as default};
========
import{d as b,g as f,o as l,c,F as I,r as L,h as T,e as o,i as ot,n as P,b as a,w as r,j as V,t as m,k as j,l as M,m as E,p as Y,q as st,s as K,v as nt,x as D,y as at,z as W}from"./entry.cf20d4e6.js";import{_ as lt}from"./Breadcrumb.vue.86488b26.js";import{_ as H,a as G}from"./Preloader.54e07d4e.js";import{_ as it}from"./InfoCard.vue.728d3634.js";import{_ as rt}from"./Wrapper.bcd2cac3.js";import{S as ct,a as dt,N as ut}from"./swiper-slide.83c10c0b.js";import{A as _t}from"./autoplay.9ecf01f5.js";import{_ as N}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as mt}from"./PromoVideo.235798c1.js";import{f as pt,t as gt}from"./useFetcher.12c76293.js";import{_ as ft}from"./Modal.95174f3b.js";import{u as ht}from"./composables.e9c88009.js";import{u as vt}from"./about.0c37c142.js";import"./index.76276c55.js";const xt={class:"relative w-full h-[200px] lg:h-[550px]"},bt={key:0,class:"w-full h-full flex-y-center relative"},wt={class:"w-full h-full absolute left-0 max-w-[30%] object-cover",alt:"banner-image"},yt={class:"w-full h-full absolute right-0 max-w-[30%] object-cover",alt:"banner-image"},$t={key:1,class:"w-full h-full flex-y-center relative"},kt=b({__name:"Multi",props:{images:{}},setup(h){const t=h,i=f(()=>{var s;return(s=t.images[0])==null?void 0:s.image});return(s,e)=>{var u,_;const n=ot("lazy");return l(),c("div",xt,[s.images?(l(),c("div",bt,[(l(!0),c(I,null,L(s.images,(v,d)=>{var x,p;return l(),c("div",{class:P(["w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]",{"border-r-[0px]":d===((x=s.images)==null?void 0:x.length)-1}]),key:d},[T(o("img",{class:P(["w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6]",{"opacity-0":d===0||d===((p=s.images)==null?void 0:p.length)-1}]),alt:"banner-image"},null,2),[[n,{src:v==null?void 0:v.image,delay:500}]])],2)}),128)),T(o("img",wt,null,512),[[n,{src:i.value,delay:500}]]),T(o("img",yt,null,512),[[n,{src:(_=s.images[((u=s.images)==null?void 0:u.length)-1])==null?void 0:_.image,delay:500}]]),e[0]||(e[0]=o("div",{class:"w-full h-full absolute inset-0 bg-dark/20 z-[2]"},null,-1))])):(l(),c("div",$t,e[1]||(e[1]=[o("div",{class:"w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"},null,-1)])))])}}}),Ct={key:0,class:"relative z-10"},St={class:"container"},zt={class:"py-6 md:py-8 lg:py-16 space-y-8 lg:space-y-16"},At={class:"space-y-4 text-white"},Bt={class:"text-3xl lg:text-[40px] font-bold leading-130 font-playfair"},Pt=["innerHTML"],jt={class:"flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},Mt=b({__name:"AboutUs",props:{statistics:{},about:{},loading:{type:Boolean}},setup(h){return(t,i)=>{const s=H;return t.statistics?(l(),c("section",Ct,[o("div",St,[o("div",zt,[o("div",At,[a(s,{width:"163px",height:"52px","border-radius":"4px",class:"!inline-block mb-4",loading:t.loading},{default:r(()=>[o("h2",Bt,m(t.$t("about_us_title")),1)]),_:1},8,["loading"]),a(s,{width:"100%",height:"70px","border-radius":"4px",loading:t.loading},{default:r(()=>{var e;return[o("div",{class:"text-base lg:text-lg font-medium leading-130",innerHTML:(e=t.about)==null?void 0:e.description},null,8,Pt)]}),_:1},8,["loading"])]),o("div",jt,[(l(!0),c(I,null,L(t.loading?4:t.statistics,(e,n)=>(l(),j(it,{key:n,icon:e==null?void 0:e.icon,title:e==null?void 0:e.title,count:e==null?void 0:e.count,loading:t.loading},null,8,["icon","title","count","loading"]))),128))])])])])):V("",!0)}}}),It=""+globalThis.__publicAssetsURL("svg/mission-bg.svg"),Lt={class:"relative bg-white/5 py-8 lg:py-16 after:absolute after:top-0 after:left-0 after:top-0 after:w-full after:h-full after:bg-black/50 xl:after:hidden"},Vt={class:"relative container space-y-6 z-20"},Ft={class:"space-y-4 text-white max-w-[583px]"},Tt={class:"text-3xl lg:text-[40px] font-bold leading-130 font-playfair"},Dt=["innerHTML"],Et={class:"space-y-4"},Ht={class:"text-xl text-white font-semibold leading-130"},Nt={class:"inline-flex flex-col space-y-[18px] w-full max-w-[423px]"},Ot={class:"flex items-center space-x-2"},Ut=["src","alt"],Rt={class:"text-[15px] text-white font-bold leading-130 font-playfair"},qt=["src","alt"],Kt=b({__name:"OurMission",props:{mission:{},supporters:{},loading:{type:Boolean}},setup(h){return(t,i)=>{const s=H;return l(),c("section",Lt,[i[0]||(i[0]=o("img",{src:It,alt:"mission-bg",class:"absolute right-0 top-0 h-full object-cover"},null,-1)),o("div",Vt,[o("div",Ft,[a(s,{width:"163px",height:"52px","border-radius":"4px",class:"!inline-block mb-4",loading:t.loading},{default:r(()=>[o("h2",Tt,m(t.$t("our_mission")),1)]),_:1},8,["loading"]),a(s,{width:"100%",height:"70px","border-radius":"4px",loading:t.loading},{default:r(()=>[o("div",{class:"text-base lg:text-lg font-medium leading-130",innerHTML:t.mission},null,8,Dt)]),_:1},8,["loading"])]),o("div",Et,[a(s,{width:"139px",height:"26px","border-radius":"4px","preloader-class":"mb-4",loading:t.loading},{default:r(()=>[o("h4",Ht,m(t.$t("our_supporter")),1)]),_:1},8,["loading"]),o("div",Nt,[(l(!0),c(I,null,L(t.supporters,(e,n)=>(l(),c("div",{key:n,class:"relative bg-white/5 rounded-lg p-3 border border-solid border-white/5 overflow-hidden"},[a(s,{width:"250px",height:"43px","border-radius":"4px","preloader-class":"mb-4",loading:t.loading},{default:r(()=>[o("div",Ot,[o("img",{src:e==null?void 0:e.logo,alt:e==null?void 0:e.name},null,8,Ut),o("p",Rt,m(e==null?void 0:e.name),1)])]),_:2},1032,["loading"]),a(s,{width:"100px",height:"120px","border-radius":"4px","preloader-class":"absolute -bottom-full right-0",loading:t.loading},{default:r(()=>[o("img",{src:e==null?void 0:e.logo,alt:e==null?void 0:e.name,class:"absolute w-[120px] h-[120px] object-contain -bottom-16 right-0 grayscale opacity-10"},null,8,qt)]),_:2},1032,["loading"])]))),128))])])])])}}});const Wt={class:"statement-card relative w-full flex items-start flex-col rounded-[20px] border border-solid border-white/20 pb-[70px] px-3 transition-all duration-300 bg-dark-400"},Yt={class:"flex items-center justify-center flex-col mb-5 w-full"},Gt={class:"flex-shrink-0 w-[84px] h-[84px] rounded-full border border-gray-200 overflow-hidden -mt-[45px] custom-shadow"},Jt=["src","alt"],Qt={class:"flex flex-col items-center w-full mt-4 space-y-[6.8px]"},Xt={class:"custom-title text-red-100 text-base leading-130 font-bold"},Zt={class:"custom-subtitle text-white/80 text-sm leading-130 font-medium"},te={class:"custom-text text-sm text-white font-bold leading-130 text-center"},ee=b({__name:"StatementCard",props:{statement:{}},setup(h){return(t,i)=>{var s,e,n,u,_;return l(),c("div",Wt,[o("div",Yt,[o("div",Gt,[o("img",{src:(s=t.statement)==null?void 0:s.image,alt:(e=t.statement)==null?void 0:e.full_name,class:"w-full h-full object-cover"},null,8,Jt)]),o("div",Qt,[o("p",Xt,m((n=t.statement)==null?void 0:n.full_name),1),o("p",Zt,m((u=t.statement)==null?void 0:u.position),1)])]),o("p",te,m((_=t.statement)==null?void 0:_.statement),1),i[0]||(i[0]=o("span",{class:"icon-uni-cut absolute bottom-0 right-0 text-gray-100 text-[58px] opacity-5"},null,-1))])}}});const oe=N(ee,[["__scopeId","data-v-6707ccb1"]]),se={class:"relative md:px-[70px] xl:px-[100px]"},ne=b({__name:"Statements",props:{statements:{}},setup(h){const t={slidesPerView:3,spaceBetween:30,loop:!0,navigation:{nextEl:".slider-nav-next",prevEl:".slider-nav-prev"},centeredSlides:!0,autoplay:{delay:1e3,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:55},768:{slidesPerView:2,spaceBetween:55},1024:{slidesPerView:3,spaceBetween:55}},modules:[_t,ut]};return(i,s)=>{const e=rt;return l(),j(e,{centered:"",title:"statements",subtitle:"statements_sub"},{default:r(()=>[o("div",se,[a(M(dt),E(Y(t)),{default:r(()=>[(l(!0),c(I,null,L(i.statements,(n,u)=>(l(),j(M(ct),{key:u,class:"custom-state transition-all duration-300"},{default:r(()=>[a(oe,{statement:n},null,8,["statement"])]),_:2},1024))),128))]),_:1},16),s[0]||(s[0]=o("button",{class:"w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-prev lg:flex hidden absolute left-0 top-1/2 cursor-pointer group"},[o("i",{class:"icon-arrow-left text-3xl text-dark transition-300 group-hover:!text-white"})],-1)),s[1]||(s[1]=o("button",{class:"w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-next lg:flex hidden absolute right-0 top-1/2 cursor-pointer group"},[o("i",{class:"icon-arrow-right text-3xl text-dark transition-300 group-hover:!text-white"})],-1))])]),_:1})}}});const ae=N(ne,[["__scopeId","data-v-add03442"]]),le={class:"space-y-2"},ie={class:"flex items-center space-x-2"},re={class:"text-white/60 text-base font-medium leading-130"},ce={class:"text-white text-lg lg:text-xl font-bold leading-130"},de=b({__name:"InfoData",props:{title:{default:"Location"},icon:{default:"icon-location-pin"},loading:{type:Boolean}},setup(h){return(t,i)=>{const s=H;return l(),c("div",le,[a(s,{width:"93px",height:"21px","border-radius":"4px","preloader-class":"mb-2",loading:t.loading},{default:r(()=>[o("div",ie,[o("i",{class:P(["text-white/60 text-xl",t.icon])},null,2),o("span",re,m(t.$t(t.title)),1)])]),_:1},8,["loading"]),a(s,{width:"100%",height:"21px","border-radius":"4px",loading:t.loading},{default:r(()=>[o("p",ce,[st(t.$slots,"default")])]),_:3},8,["loading"])])}}}),ue={key:0,class:"relative"},_e=b({__name:"About",props:{locations:{},mapClass:{}},setup(h){const t=s=>({layout:"default#image",imageHref:"/svg/religions/about.svg",imageSize:[50,50],imageOffset:[-20,-30]}),i=f(()=>({apiKey:"",lang:"ru_RU",coordorder:"latlong",version:"2.1"}));return(s,e)=>{const n=K("ymap-marker"),u=K("yandex-map"),_=G;return s.locations?(l(),c("div",ue,[a(_,null,{default:r(()=>[a(u,{class:P(["h-full w-full",s.mapClass]),coords:s.locations.map_location,settings:i.value,zoom:14,controls:[]},{default:r(()=>{var v,d;return[a(n,{coords:s.locations.map_location,"marker-id":(v=s.locations)==null?void 0:v.location,"hint-content":(d=s.locations)==null?void 0:d.location,icon:t("about")},null,8,["coords","marker-id","hint-content","icon"])]}),_:1},8,["coords","settings","class"])]),_:1})])):V("",!0)}}});const me={class:"pb-16"},pe={class:"container flex items-stretch justify-between gap-5 flex-col lg:flex-row"},ge={class:"mb-6 text-white text-3xl lg:text-40 font-semibold leading-130 font-playfair"},fe={class:"space-y-5"},he=["href"],ve=["href"],xe={key:0,class:"rounded-xl relative overflow-hidden border border-solid border-white/20 w-full lg:max-w-[584px]"},be=b({__name:"Locations",props:{contacts:{}},setup(h){const t=h,i=f(()=>{var n;return{title:"location_contact",icon:"icon-location-pin",text:(n=t==null?void 0:t.contacts)==null?void 0:n.location}}),s=f(()=>{var n;return{title:"mail",icon:"icon-mail",text:(n=t==null?void 0:t.contacts)==null?void 0:n.email}}),e=f(()=>{var n;return{title:"phone_number",icon:"icon-phone",text:(n=t==null?void 0:t.contacts)==null?void 0:n.phone_number}});return f(()=>{var n,u;return[{id:1,name:(n=t==null?void 0:t.contacts)==null?void 0:n.location,location:(u=t==null?void 0:t.contacts)==null?void 0:u.map_location,image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.azernews.az%2Fmedia%2F2020%2F03%2F18%2F1584458665_old-city-4-800x450.jpg&f=1&nofb=1&ipt=f4812c3d5e90563db375976e60f0d823c56487fbdfae56428a7a4815a0cea048&ipo=images",religion:{type:"about"},latitude:41.321517,longitude:69.304964}]}),(n,u)=>{var d,x,p,C,S,k;const _=de,v=_e;return l(),c("section",me,[o("div",pe,[o("div",null,[o("h3",ge,m(n.$t("contacts")),1),o("div",fe,[a(_,{title:(d=i.value)==null?void 0:d.title,icon:(x=i.value)==null?void 0:x.icon},{default:r(()=>{var g;return[o("span",null,m((g=i.value)==null?void 0:g.text),1)]}),_:1},8,["title","icon"]),a(_,{title:(p=s.value)==null?void 0:p.title,icon:(C=s.value)==null?void 0:C.icon},{default:r(()=>{var g,w;return[o("a",{href:`mailto:${(g=s.value)==null?void 0:g.text}`,class:"hover:text-red duration-300"},m((w=s.value)==null?void 0:w.text),9,he)]}),_:1},8,["title","icon"]),a(_,{title:(S=e.value)==null?void 0:S.title,icon:(k=e.value)==null?void 0:k.icon},{default:r(()=>{var g,w;return[o("a",{href:`tel:${(g=e.value)==null?void 0:g.text}`,class:"hover:text-red duration-300"},m(M(pt)((w=e.value)==null?void 0:w.text)),9,ve)]}),_:1},8,["title","icon"])])]),n.contacts?(l(),c("div",xe,[a(v,{locations:n.contacts,"map-class":"!h-[300px]"},null,8,["locations"])])):V("",!0)])])}}}),we=""+globalThis.__publicAssetsURL("svg/bg-frame.svg"),ye={class:"relative"},$e={class:"relative"},ke=["src"],Ce=b({__name:"about",setup(h){var k,g,w;const t=vt(),{t:i}=nt(),s=f(()=>t==null?void 0:t.statistics),e=f(()=>t==null?void 0:t.aboutData),n=f(()=>t==null?void 0:t.statements),u=f(()=>t==null?void 0:t.contacts),_=f(()=>i("about_us_title")),v=[{title:"About us",link:"/about"}],d=D(!1),x=D(!1);at(()=>s,y=>{var $,z,A,B;p.value[0].count=($=y.value)==null?void 0:$.attractions_count,p.value[1].count=(z=y.value)==null?void 0:z.destinations_count,p.value[2].count=(A=y.value)==null?void 0:A.countries_count,p.value[3].count=(B=y.value)==null?void 0:B.religions_count},{deep:!0}),ht({title:_,description:(k=e==null?void 0:e.value)==null?void 0:k.title,ogTitle:(g=e==null?void 0:e.value)==null?void 0:g.title,ogImage:(w=e==null?void 0:e.value)==null?void 0:w.video_image});const p=D([{title:"attractions",count:0,icon:"/svg/moscue.svg"},{title:"destinations",count:0,icon:"/svg/global.svg"},{title:"countries",count:0,icon:"/svg/flag.svg"}]);async function C(){return d.value=!0,await Promise.all([await t.fetchAboutData(),await t.fetchStatistics(),await t.fetchStatements(),await t.fetchContacts()])}C().finally(()=>{d.value=!1});const S=()=>{x.value=!0};return(y,$)=>{var O,U,R,q;const z=kt,A=lt,B=Mt,J=Kt,Q=ae,X=mt,Z=be,tt=G,et=ft;return l(),c("div",ye,[o("div",$e,[$[1]||($[1]=o("img",{src:we,alt:"background frame",class:"absolute top-0 left-0 w-full h-full z-0"},null,-1)),a(z,{images:e.value.images,loading:d.value},null,8,["images","loading"]),a(A,{menu:v}),a(B,{about:e.value,statistics:p.value,loading:d.value},null,8,["about","statistics","loading"])]),a(J,E(Y({mission:(O=e.value)==null?void 0:O.our_mission,supporters:(U=e.value)==null?void 0:U.supporters,loading:d.value})),null,16),a(Q,{statements:n.value},null,8,["statements"]),a(X,W({class:"mb-8 lg:mb-16"},{image:(R=e.value)==null?void 0:R.video_image},{onHandleShowVideo:S}),null,16),d.value?V("",!0):(l(),j(Z,E(W({key:0},{contacts:u.value})),null,16)),a(et,{show:x.value,onClose:$[0]||($[0]=F=>x.value=!1),title:(q=e.value)==null?void 0:q.title,"body-style":"!max-w-[100%] md:!max-w-[70%] h-[55%] sm:h-[50%] md:h-[70%]"},{default:r(()=>[a(tt,null,{default:r(()=>{var F;return[(l(),c("iframe",{key:x.value,width:"100%",height:"100%",src:`https://www.youtube.com/embed/${("toEmbed"in y?y.toEmbed:M(gt))((F=e.value)==null?void 0:F.video_link)}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,ke))]}),_:1})]),_:1},8,["show","title"])])}}});const He=N(Ce,[["__scopeId","data-v-4349a045"]]);export{He as default};
>>>>>>>> ec4950c (fix):_nuxt/about.9ad5b162.js
