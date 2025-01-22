import{_ as tt}from"./Preloader.vue.68ab52bb.js";import{_ as et}from"./ReligionBadge.vue.6d156959.js";import{d as G,v as H,x as C,o as n,c as l,e as o,t as k,F as v,r as x,k as m,z as W,b as w,w as u,l as z,j as S,T as ot,_ as J,u as nt,g as M}from"./entry.7ab36066.js";import{_ as st}from"./Single.d2cb2239.js";import{_ as it}from"./InfoCard.vue.b83469a2.js";import{_ as lt}from"./CountryCard.7c48074d.js";import{_ as at}from"./Wrapper.987ad0c6.js";import{_ as rt}from"./Attractions.vue.15bf86a3.js";import{C as ct}from"./CollapseTransition.d7ec804a.js";import{_ as K}from"./_plugin-vue_export-helper.c27b6911.js";import{u as dt}from"./composables.002d6719.js";import{c as T,$ as V}from"./useFetcher.2ca7db7d.js";import"./religions.8734ae30.js";import"./Breadcrumb.vue.7a185406.js";import"./index.0146bd5a.js";const ut={class:"container mx-auto px-4 sm:px-6 lg:px-8"},_t={class:"text-white text-[28px] leading-130 font-bold card-title-shadow font-playfair"},pt={class:"text-white/60 card-title-shadow text-sm leading-130 font-semibold mt-2"},gt={class:"w-full mt-4"},mt={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6"},ft={key:0,class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 pt-6"},ht={class:"w-full h-full border border-solid border-white/[24%] rounded-xl flex-center group relative overflow-hidden"},vt={class:"text-white text-base leading-130 font-semibold group-hover:tracking-[1px] transition-300 text-center"},xt={key:0,class:"flex-center w-full mt-6"},wt={key:0},yt={key:1},$t=G({__name:"SectionWrapper",props:{card:{}},setup(O){H();const c=C(!1);function L(t,i){var r,_;const a=t.split("|");return i===0?a[2]:i===1?a[0]:(console.log("full",(r=a[1])==null?void 0:r.replace("{n}",i)),(_=a[1])==null?void 0:_.replace("{n}",i))}return(t,i)=>{var _,R,D,I,B,N,y,$;const a=rt,r=J;return n(),l("div",null,[o("div",ut,[o("div",null,[o("p",_t,k((_=t.card)==null?void 0:_.title),1),o("p",pt,k(L(t.$t("destination_count",(D=(R=t.card)==null?void 0:R.destinations)==null?void 0:D.length),(B=(I=t.card)==null?void 0:I.destinations)==null?void 0:B.length)),1)]),o("div",gt,[o("div",mt,[(n(!0),l(v,null,x((N=t.card)==null?void 0:N.destinations.slice(0,6),(d,p)=>(n(),m(a,W({ref_for:!0},{item:d},{key:p}),null,16))),128))]),w(ct,{duration:400},{default:u(()=>{var d,p,s,f,g;return[z(c)?(n(),l("div",ft,[(n(!0),l(v,null,x((d=t.card)==null?void 0:d.destinations.slice(6),(h,P)=>(n(),m(a,W({ref_for:!0},{item:h},{key:P,class:"!w-full !h-[200px]"}),null,16))),128)),((p=t.card)==null?void 0:p.destinations_count)>((f=(s=t.card)==null?void 0:s.destinations)==null?void 0:f.length)?(n(),m(r,{key:0,to:t.localePath(`/attractions/${(g=t.card)==null?void 0:g.id}`),class:"!w-[178px] !h-[200px]"},{default:u(()=>[o("div",ht,[o("div",null,[o("p",vt,k(t.$t("all_attractions")),1),i[1]||(i[1]=o("div",{class:"w-full flex-center mt-2"},[o("i",{class:"icon-arrow-right text-white text-[28px]"})],-1))]),i[2]||(i[2]=o("i",{class:"icon-mosque absolute text-white/[7%] bottom-0 right-0 text-[110px]"},null,-1))])]),_:1},8,["to"])):S("",!0)])):S("",!0)]}),_:1}),(($=(y=t.card)==null?void 0:y.destinations)==null?void 0:$.length)>6?(n(),l("div",xt,[o("button",{class:"px-4 py-2 rounded-xl leading-130 text-xl text-white font-semibold bg-white/10 border border-solid border-white/10 transition-300 hover:bg-white/30 active:scale-95",onClick:i[0]||(i[0]=d=>c.value=!z(c))},[w(ot,{name:"fade",mode:"out-in"},{default:u(()=>[z(c)?(n(),l("span",yt,k(t.$t("less")),1)):(n(),l("span",wt,k(t.$t("more")),1))]),_:1})])])):S("",!0)])])])}}});const bt=K($t,[["__scopeId","data-v-cb69d826"]]),kt={class:"pb-16"},Ct={class:"mb-9"},St={class:"w-[50px] h-[50px]"},Lt=["src"],Rt={class:"absolute top-[20%] lg:top-auto left-0 p-4 border border-solid border-white/10 border-l-[0] bg-white/[4%] rounded-r-xl additional-blur-religious-single z-50 flex flex-col gap-2.5"},Dt={class:"w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-lg flex-center border border-solid border-white/10 cursor-pointer hover:bg-red transition-300 religious-single-card"},Bt={class:"relative -mt-20 w-full !z-30"},Nt={class:"container items-center grid md:grid-cols-3 gap-6"},Wt={key:0,class:"container pb-11"},It={class:"flex flex-wrap justify-center mt-6 gap-y-6 gap-[30px]"},Pt={key:0,class:"relative flex-center"},zt={class:"flex flex-col gap-10"},Tt=G({__name:"[slug]",setup(O){var y,$,d,p;const{t:c}=H(),L=nt(),t=C({}),i=C(!0),a=C([]),r=C([]);function _(){V.$get("/destination/ReligionList").then(s=>{a.value=s==null?void 0:s.results})}function R(){V.$get(`/destination/ReligionDetail/${L.params.slug}`).then(s=>{t.value=s})}function D(){V.$get(`/destination/CountryListWithDestinations/${L.params.slug}?limit=20`).then(s=>{r.value=s})}(async()=>{await R(),await _(),await D()})().finally(()=>{i.value=!1});const B=M(()=>{var s,f,g,h;return[{title:c("attractions"),count:T(String((s=t.value)==null?void 0:s.attractions_count)),icon:"/svg/moscue.svg"},{title:c("countries"),count:T(String((f=t.value)==null?void 0:f.countries_count)),icon:"/svg/flag.svg"},{title:c("population_single",{name:(g=t.value)==null?void 0:g.type}),count:T(String((h=t.value)==null?void 0:h.population)),icon:"/svg/population.svg"}]}),N=M(()=>{var s;return[{title:"Religions",link:"/"},{title:(s=t==null?void 0:t.value)==null?void 0:s.type,link:"/religions/islam"}]});return dt({title:(y=t==null?void 0:t.value)==null?void 0:y.name,description:($=t==null?void 0:t.value)==null?void 0:$.short_description,ogDescription:(d=t.value)==null?void 0:d.short_description,ogImage:(p=t==null?void 0:t.value)==null?void 0:p.image}),(s,f)=>{var A,F,j,q,E;const g=tt,h=et,P=J,Q=st,U=it,X=lt,Y=at,Z=bt;return n(),l("div",kt,[(n(),m(Q,W({loading:i.value,"has-breadcrumb":"",title:(A=t.value)==null?void 0:A.name},{text:(F=t.value)==null?void 0:F.short_description,breadcrumb:N.value},{image:(j=t.value)==null?void 0:j.image,isReligion:!0,key:(q=t.value)==null?void 0:q.image}),{prefix:u(()=>[o("div",Ct,[w(g,{width:"50px",height:"50px","border-radius":"4px",loading:i.value},{default:u(()=>{var e;return[o("div",St,[o("img",{src:(e=t.value)==null?void 0:e.flag,alt:"religion flag",class:"w-full h-full"},null,8,Lt)])]}),_:1},8,["loading"])])]),additional:u(()=>[o("div",Rt,[(n(!0),l(v,null,x(a.value,(e,b)=>(n(),m(P,{key:b,to:s.localePath(`/religions/${e==null?void 0:e.id}`)},{default:u(()=>[o("div",Dt,[w(h,{type:e==null?void 0:e.type},null,8,["type"])])]),_:2},1032,["to"]))),128))])]),_:1},16,["loading","title","image"])),o("div",Bt,[o("div",Nt,[(n(!0),l(v,null,x(B.value,(e,b)=>(n(),m(U,{loading:i.value,key:b,icon:e==null?void 0:e.icon,title:e==null?void 0:e.title,count:e==null?void 0:e.count,class:"!bg-white/10"},null,8,["loading","icon","title","count"]))),128))])]),(E=r.value)!=null&&E.length?(n(),l("div",Wt,[w(Y,{centered:"",title:s.$t("countries")},{default:u(()=>[o("div",It,[(n(!0),l(v,null,x(r.value,e=>(n(),l("div",{key:e.destinations,class:"!min-w-[144px]"},[w(X,{country:e},null,8,["country"])]))),128))])]),_:1},8,["title"]),r.value.length?(n(),l("div",Pt,[o("div",zt,[(n(!0),l(v,null,x(r.value,(e,b)=>(n(),m(Z,W({key:b,ref_for:!0},{card:e}),null,16))),128))])])):S("",!0)])):S("",!0)])}}});const Yt=K(Tt,[["__scopeId","data-v-d0590950"]]);export{Yt as default};
