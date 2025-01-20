import{_ as A}from"./Breadcrumb.vue.86488b26.js";import{_ as Y}from"./Preloader.54e07d4e.js";import{d as I,o,k as h,w as b,e as m,b as E,z as N,t as w,l as y,U as Q,n as P,_ as z,$ as O,a0 as K,g as B,c as v,q as $,D as k,a1 as x,a2 as S,j as C,F as R,r as F,u as D,x as G,K as X,v as Z,y as _,T as tt}from"./entry.cf20d4e6.js";import{_ as et}from"./_plugin-vue_export-helper.c27b6911.js";import{u as at}from"./composables.e9c88009.js";import{u as nt}from"./news.1a296ff9.js";import"./useFetcher.12c76293.js";const lt={class:"aspect-video w-full rounded-xl overflow-hidden"},st=["src","alt"],it={class:"my-3"},ot={class:"font-semibold leading-130 text-base text-white line-clamp-2 mb-2 transition-300 group-hover:text-red-100"},ut=["innerHTML"],rt={class:"flex-center-between"},dt={class:"font-medium text-sm leading-130 text-white"},gt=I({__name:"News",props:{item:{},loading:{type:Boolean}},setup(t){return(n,a)=>{var s;const e=Y,p=z;return o(),h(p,{to:n.localePath(`/news/${(s=n.item)==null?void 0:s.slug}`),class:P(["w-full p-3 pb-4 bg-dark-100 rounded-xl group transition-300",{"pointer-events-none":n.loading}])},{default:b(()=>[m("div",lt,[E(e,N({loading:n.loading},{width:"100%",height:"100%"}),{default:b(()=>{var g,r;return[m("img",{class:"w-full h-full object-cover",src:(g=n.item)==null?void 0:g.image,alt:(r=n.item)==null?void 0:r.title},null,8,st)]}),_:1},16)]),m("div",it,[E(e,N({height:"42px",width:"100%",margin:"0 0 8px 0"},{loading:n.loading}),{default:b(()=>{var g;return[m("h2",ot,w((g=n.item)==null?void 0:g.title),1)]}),_:1},16),E(e,N({height:"36px",width:"100%"},{loading:n.loading}),{default:b(()=>{var g;return[a[0]||(a[0]=m("div",null,null,-1)),m("p",{class:"text-gray text-sm leading-130 line-clamp-2",innerHTML:(g=n.item)==null?void 0:g.short_description},null,8,ut)]}),_:1},16)]),m("div",rt,[E(e,N({height:"18px",width:"70px"},{loading:n.loading}),{default:b(()=>{var g;return[m("p",dt,w(y(Q)((g=n.item)==null?void 0:g.published_at).format("DD.MM.YYYY")),1)]}),_:1},16),a[1]||(a[1]=m("i",{class:"icon-arrow-right text-xl leading-5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-300 text-red-100"},null,-1))])]),_:1},8,["to","class"])}}});const bt=et(gt,[["__scopeId","data-v-359dbfad"]]);function ft(t,n){const a=O(),e={...a.currentRoute.value.query};n?e[t]=n:delete e[t],a.replace({query:e});function p(s){if(s!=null&&s.length){for(const g in s)delete e[s[g]];a.replace({query:e})}else a.replace({query:{}})}return{clearRouteQuery:p}}const ct={key:0},vt={key:1},mt={key:2},ht={key:3},Bt={key:4},wt={key:5},Pt={key:6},Ct={key:7},yt={key:8},kt={key:9},xt=I({__name:"vue-awesome-paginate",props:{totalItems:{type:Number,required:!0},itemsPerPage:{type:Number,default:10,validator:t=>{if(t<=0){const n="itemsPerPage attribute must be greater than 0.";throw console.error(n),new TypeError(n)}return!0}},currentPage:{type:Number,default:1,validator:t=>{const n="currentPage attribute must be greater than 0.";if(t<=0)throw console.error(n),new TypeError(n);return!0}},modelValue:{type:Number,required:!0,validator:t=>{const n="v-model is required and must be greater than 0.";if(t<=0)throw console.error(n),new TypeError(n);return!0}},maxPagesShown:{type:Number,default:5,validator:t=>{const n="maxPagesShown attribute must be greater than 0.";if(t<=0)throw console.error(n),new TypeError(n);return!0}},dir:{type:String,default:"ltr",validator:t=>{const n='dir attribute must be either "ltr" or "rtl".';if(t!=="ltr"&&t!=="rtl")throw console.error(n),new TypeError(n);return!0}},type:{type:String,default:"button",validator:t=>{const n=["link","button"],a="type attribute must be one of the following: "+n.join(", ");if(n.indexOf(t)===-1)throw console.error(a),new TypeError(a);return!0}},onClick:{type:Function,default:()=>{}},locale:{type:String,default:"en",validator:t=>{const n=["en","ar","ir"],a="locale attribute must be one of the following: "+n.join(", ");if(n.indexOf(t)===-1)throw console.error(a),new TypeError(a);return!0}},prevButtonContent:{type:String,default:"<"},nextButtonContent:{type:String,default:">"},hidePrevNext:{type:Boolean,default:!1},hidePrevNextWhenEnds:{type:Boolean,default:!1},showBreakpointButtons:{type:Boolean,default:!0},disableBreakpointButtons:{type:Boolean,default:!1},startingBreakpointContent:{type:String,default:"..."},endingBreakpointButtonContent:{type:String,default:"..."},showJumpButtons:{type:Boolean,default:!1},linkUrl:{type:String,default:"#"},backwardJumpButtonContent:{type:String,default:"<<"},forwardJumpButtonContent:{type:String,default:">>"},disablePagination:{type:Boolean,default:!1},showEndingButtons:{type:Boolean,default:!1},firstPageContent:{type:String,default:"First"},lastPageContent:{type:String,default:"Last"},backButtonClass:{type:String,default:"back-button"},nextButtonClass:{type:String,default:"next-button"},firstButtonClass:{type:String,default:"first-button"},lastButtonClass:{type:String,default:"last-button"},numberButtonsClass:{type:String,default:"number-buttons"},startingBreakpointButtonClass:{type:String,default:"starting-breakpoint-button"},endingBreakPointButtonClass:{type:String,default:"ending-breakpoint-button"},firstPageButtonClass:{type:String,default:"first-page-button"},lastPageButtonClass:{type:String,default:"last-page-button"},paginateButtonsClass:{type:String,default:"paginate-buttons"},disabledPaginateButtonsClass:{type:String,default:"disabled-paginate-buttons"},activePageClass:{type:String,default:"active-page"},paginationContainerClass:{type:String,default:"pagination-container"},disabledBreakPointButtonClass:{type:String,default:"disabled-breakpoint-button"},backwardJumpButtonClass:{type:String,default:"backward-jump-button"},forwardJumpButtonClass:{type:String,default:"forward-jump-button"},disabledBackwardJumpButtonClass:{type:String,default:"disabled-backward-jump-button"},disabledBackButtonClass:{type:String,default:"disabled-back-button"},disabledFirstButtonClass:{type:String,default:"disabled-first-button"},disabledLastButtonClass:{type:String,default:"disabled-last-button"},disabledNextButtonClass:{type:String,default:"disabled-next-button"},disabledForwardJumpButtonClass:{type:String,default:"disabled-forward-jump-button"}},emits:["update:modelValue","click"],setup(t,{emit:n}){const a=t;if(a.currentPage&&!a.modelValue)throw new Error("currentPage/current-page is now deprecated, use v-model instead to set the current page.");if(!a.modelValue)throw new TypeError("v-model is required for the paginate component.");const e=K(a,"modelValue"),p=n,s=u=>{u!==e.value&&(u>l.value||u<1||a.disablePagination||(p("update:modelValue",u),p("click",u)))},g=u=>{switch(a.locale){case"en":return u;case"ar":return u.toLocaleString("ar-SA");case"ir":return u.toLocaleString("fa-IR");default:return u}},r=u=>a.type!=="link"?"":a.linkUrl.replace("[page]",u.toString()),l=B(()=>Math.ceil(a.totalItems/a.itemsPerPage)),c=B(()=>{let u,d;if(l.value<=a.maxPagesShown)u=1,d=l.value;else{let M=Math.floor(a.maxPagesShown/2),U=Math.ceil(a.maxPagesShown/2)-1;e.value<=M?(u=1,d=a.maxPagesShown):e.value+U>=l.value?(u=l.value-a.maxPagesShown+1,d=l.value):(u=e.value-M,d=e.value+U)}let f=Array.from(Array(d+1-u).keys()).map(M=>u+M);return a.dir==="rtl"&&(f=f.reverse()),{totalItems:a.totalItems,currentPage:e.value,itemsPerPage:a.itemsPerPage,totalPages:l,startPage:u,endPage:d,pages:f}}),i=B(()=>a.dir==="rtl"),V=B(()=>i.value?!a.hidePrevNextWhenEnds||e.value!==l.value:!a.hidePrevNextWhenEnds||e.value!==1),J=B(()=>i.value?!a.hidePrevNextWhenEnds||e.value!==1:!a.hidePrevNextWhenEnds||e.value!==l.value),L=B(()=>i.value?c.value.pages[0]<l.value-1:c.value.pages[0]>=3),T=B(()=>i.value?c.value.pages[c.value.pages.length-1]>=3:c.value.pages[c.value.pages.length-1]<l.value-1),j=B(()=>i.value?c.value.pages[0]<l.value:c.value.pages[0]>=2),q=B(()=>i.value?c.value.pages[c.value.pages.length-1]>=2:c.value.pages[c.value.pages.length-1]<l.value),H=B(()=>e.value!==1),W=B(()=>e.value!==l.value);if(a.type==="link"&&a.linkUrl==="#")throw console.error("linkUrl attribute is required if type attribute is 'link'"),new TypeError("linkUrl attribute is required if type attribute is 'link'");if(a.type==="link"&&!a.linkUrl.includes("[page]"))throw console.error("linkUrl attribute must contain '[page]' substring"),new TypeError("linkUrl attribute must contain '[page]' substring");return(u,d)=>(o(),v("ul",{id:"componentContainer",class:P(t.paginationContainerClass)},[t.showEndingButtons&&H.value?(o(),v("li",ct,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(i.value?l.value:1),onClick:d[0]||(d[0]=x(f=>s(i.value?l.value:1),["prevent"])),class:P([t.firstPageButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:""]),disabled:t.disablePagination},{default:b(()=>[$(u.$slots,"first-page-button",{},()=>[k(w(t.firstPageContent),1)])]),_:3},8,["href","class","disabled"]))])):C("",!0),t.showJumpButtons&&L.value?(o(),v("li",vt,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(i.value?e.value+Math.ceil(t.maxPagesShown/2):e.value-Math.ceil(t.maxPagesShown/2)),onClick:d[1]||(d[1]=x(f=>s(i.value?e.value+Math.ceil(t.maxPagesShown/2):e.value-Math.ceil(t.maxPagesShown/2)),["prevent"])),class:P([t.backwardJumpButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledBackwardJumpButtonClass:""]),disabled:t.disablePagination},{default:b(()=>[$(u.$slots,"backward-jump-button",{},()=>[k(w(t.backwardJumpButtonContent),1)])]),_:3},8,["href","class","disabled"]))])):C("",!0),!t.hidePrevNext&&V.value?(o(),v("li",mt,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(i.value?e.value+1:e.value-1),onClick:d[2]||(d[2]=x(f=>s(i.value?e.value+1:e.value-1),["prevent"])),class:P([t.backButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledBackButtonClass:""]),disabled:t.disablePagination},{default:b(()=>[$(u.$slots,"prev-button",{},()=>[k(w(t.prevButtonContent),1)])]),_:3},8,["href","class","disabled"]))])):C("",!0),t.showBreakpointButtons&&j.value?(o(),v("li",ht,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(i.value?l.value:1),onClick:d[3]||(d[3]=x(f=>s(i.value?l.value:1),["prevent"])),class:P([t.firstButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledFirstButtonClass:""]),disabled:t.disablePagination},{default:b(()=>[k(w(i.value?g(l.value):g(1)),1)]),_:1},8,["href","class","disabled"]))])):C("",!0),t.showBreakpointButtons&&L.value?(o(),v("li",Bt,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(t.disableBreakpointButtons?e.value:i.value?e.value+Math.ceil(t.maxPagesShown/2):e.value-Math.ceil(t.maxPagesShown/2)),onClick:d[4]||(d[4]=x(f=>s(t.disableBreakpointButtons?e.value:i.value?e.value+Math.ceil(t.maxPagesShown/2):e.value-Math.ceil(t.maxPagesShown/2)),["prevent"])),disabled:t.disableBreakpointButtons||t.disablePagination,class:P([t.startingBreakpointButtonClass,t.paginateButtonsClass,t.disableBreakpointButtons||t.disablePagination?`${t.disabledPaginateButtonsClass} ${t.disabledBreakPointButtonClass}`:""])},{default:b(()=>[$(u.$slots,"starting-breakpoint-button",{},()=>[k(w(t.startingBreakpointContent),1)])]),_:3},8,["href","disabled","class"]))])):C("",!0),(o(!0),v(R,null,F(c.value.pages,(f,M)=>(o(),v("li",{key:M},[(o(),h(S(t.type==="button"?"button":"a"),{href:r(f),onClick:x(()=>s(f),["prevent"]),class:P([t.paginateButtonsClass,t.numberButtonsClass,f===e.value?t.activePageClass:"",t.disablePagination?t.disabledPaginateButtonsClass:""]),disabled:t.disablePagination},{default:b(()=>[k(w(g(f)),1)]),_:2},1032,["href","onClick","class","disabled"]))]))),128)),t.showBreakpointButtons&&T.value?(o(),v("li",wt,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(t.disableBreakpointButtons?e.value:i.value?e.value-Math.ceil(t.maxPagesShown/2):e.value+Math.ceil(t.maxPagesShown/2)),onClick:d[5]||(d[5]=x(f=>s(t.disableBreakpointButtons?e.value:i.value?e.value-Math.ceil(t.maxPagesShown/2):e.value+Math.ceil(t.maxPagesShown/2)),["prevent"])),disabled:t.disableBreakpointButtons||t.disablePagination,class:P([t.endingBreakPointButtonClass,t.paginateButtonsClass,t.disableBreakpointButtons||t.disablePagination?`${t.disabledPaginateButtonsClass} ${t.disabledBreakPointButtonClass}`:""])},{default:b(()=>[$(u.$slots,"ending-breakpoint-button",{},()=>[k(w(t.endingBreakpointButtonContent),1)])]),_:3},8,["href","disabled","class"]))])):C("",!0),t.showBreakpointButtons&&q.value?(o(),v("li",Pt,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(i.value?1:l.value),onClick:d[6]||(d[6]=x(f=>s(i.value?1:l.value),["prevent"])),class:P([t.lastButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledLastButtonClass:""]),disabled:t.disablePagination},{default:b(()=>[k(w(i.value?g(1):g(l.value)),1)]),_:1},8,["href","class","disabled"]))])):C("",!0),!t.hidePrevNext&&J.value?(o(),v("li",Ct,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(i.value?e.value-1:e.value+1),onClick:d[7]||(d[7]=x(f=>s(i.value?e.value-1:e.value+1),["prevent"])),class:P([t.paginateButtonsClass,t.nextButtonClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledNextButtonClass:""]),disabled:t.disablePagination},{default:b(()=>[$(u.$slots,"next-button",{},()=>[k(w(t.nextButtonContent),1)])]),_:3},8,["href","class","disabled"]))])):C("",!0),t.showJumpButtons&&T.value?(o(),v("li",yt,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(i.value?e.value-Math.ceil(t.maxPagesShown/2):e.value+Math.ceil(t.maxPagesShown/2)),onClick:d[8]||(d[8]=x(f=>s(i.value?e.value-Math.ceil(t.maxPagesShown/2):e.value+Math.ceil(t.maxPagesShown/2)),["prevent"])),class:P([t.forwardJumpButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:"",t.disablePagination?t.disabledForwardJumpButtonClass:""]),disabled:t.disablePagination},{default:b(()=>[$(u.$slots,"forward-jump-button",{},()=>[k(w(t.forwardJumpButtonContent),1)])]),_:3},8,["href","class","disabled"]))])):C("",!0),t.showEndingButtons&&W.value?(o(),v("li",kt,[(o(),h(S(t.type==="button"?"button":"a"),{href:r(i.value?1:l.value),onClick:d[9]||(d[9]=x(f=>s(i.value?1:l.value),["prevent"])),class:P([t.lastPageButtonClass,t.paginateButtonsClass,t.disablePagination?t.disabledPaginateButtonsClass:""]),disabled:t.disablePagination},{default:b(()=>[$(u.$slots,"last-page-button",{},()=>[k(w(t.lastPageContent),1)])]),_:3},8,["href","class","disabled"]))])):C("",!0)],2))}}),St=I({__name:"Pagination",props:{total:{default:24},perPage:{default:12},maxPageShow:{default:3}},emits:["handle-page"],setup(t,{emit:n}){var g;const a=D(),e=n;function p(r){ft("page",r),setTimeout(()=>{e("handle-page",r)},0)}const s=G(+((g=a.query)==null?void 0:g.page)||1);return(r,l)=>r.total>r.perPage?(o(),h(y(xt),{key:0,modelValue:y(s),"onUpdate:modelValue":l[0]||(l[0]=c=>X(s)?s.value=c:null),"active-page-class":"btn-active","disabled-back-button-class":"dd","total-items":r.total,"items-per-page":r.perPage,"max-pages-shown":r.maxPageShow,"back-button-class":`${y(s)===1?"disable":""} back-button`,"next-button-class":`${y(s)===Math.ceil(r.total/r.perPage)?"disable":""} next-button`,onClick:p},{"prev-button":b(()=>l[1]||(l[1]=[m("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[m("path",{d:"M12.5 5L7.5 10L12.5 15",stroke:"#969696","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),"next-button":b(()=>l[2]||(l[2]=[m("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[m("path",{d:"M7.5 5L12.5 10L7.5 15",stroke:"#969696","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),_:1},8,["modelValue","total-items","items-per-page","max-pages-shown","back-button-class","next-button-class"])):C("",!0)}});const pt={class:"min-h-[calc(100vh-239px)]"},$t={class:"pt-20 md:pt-[120px]"},Nt={class:"container pt-5 md:pt-9 pb-5 md:pb-8"},Mt={class:"font-bold leading-130 text-3xl md:text-40 text-white mb-3 md:mb-6 font-playfair"},Vt=I({__name:"index",setup(t){const n=D(),a=nt(),{t:e}=Z(),p=B(()=>((Number(n.query.page)||1)-1)*12),s=B(()=>a.newsLoading),g=B(()=>a.newsList),r=B(()=>a.newsCount),l=()=>{a.fetchNewsList(p.value)};_(()=>n.query.page,()=>{l()},{immediate:!0}),at({title:e("news")});const c=[{title:"News",link:"/news"}];return(i,V)=>{const J=A,L=bt,T=St;return o(),v("div",pt,[m("div",$t,[E(J,N({menu:c},{class:"container px-0"}),null,16),m("div",Nt,[m("h1",Mt,w(i.$t("news")),1),E(tt,{name:"fade",mode:"out-in"},{default:b(()=>[(o(),v("div",{key:y(s),class:"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"},[(o(!0),v(R,null,F(y(s)?12:y(g),(j,q)=>(o(),h(L,N({key:q,item:y(s)?void 0:j,ref_for:!0},{loading:y(s)}),null,16,["item"]))),128))]))]),_:1}),y(s)?C("",!0):(o(),h(T,N({key:0,class:"justify-end mt-8","per-page":12},{total:y(r)}),null,16))])])])}}});export{Vt as default};
