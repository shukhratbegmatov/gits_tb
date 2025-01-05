import{_ as X}from"./Preloader.bd773840.js";import{_ as ee}from"./Button.vue.0b6b732c.js";import{d as O,z as Q,g as T,o as p,c as b,b as u,w as g,F as E,h as F,k as P,B as j,e as n,t as S,j as R,m as A,_ as U,r as ue,E as Z,i as pe,p as te,l as ae,n as G,D as se,v as ge,T as me,y as _e,W as he,A as fe}from"./entry.4775dd14.js";import{_ as be}from"./Single.93ab5b47.js";import{f as ve,h as oe,j as xe,e as ye,S as ne,a as le,N as $e}from"./swiper-slide.0b83c90d.js";import{A as re}from"./autoplay.03fb9283.js";import{E as ce}from"./pagination.min.89afa789.js";import{_ as de}from"./Wrapper.0c177f44.js";import{_ as Ce}from"./InfoCard.vue.bbfb95f5.js";import{C as ke}from"./CollapseTransition.e63cc04b.js";import{u as Se}from"./index.23aade4f.js";import{_ as K}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as Le,a as Be,b as Ie}from"./Subscribe.463fce14.js";import{_ as Pe}from"./CountryCard.99ddb18a.js";import{u as we}from"./about.90d2e558.js";import{u as De}from"./destination.1887fc89.js";import{u as Ae}from"./main.a7d42535.js";import{u as ze}from"./news.542967b5.js";import"./Breadcrumb.vue.3ef8e75b.js";import"./index.dbfe7042.js";import"./useFetcher.12646a52.js";function W(e=""){return`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Me({swiper:e,extendParams:o,on:l,emit:_}){const d="swiper-pagination";o({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),e.pagination={el:null,bullets:[]};let i,s=0;const c=t=>(Array.isArray(t)||(t=[t].filter(a=>!!a)),t);function $(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function I(t,a){const{bulletActiveClass:r}=e.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${r}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${r}-${a}-${a}`)))}function z(t){const a=t.target.closest(W(e.params.pagination.bulletClass));if(!a)return;t.preventDefault();const r=oe(a)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;const m=e.getSlideIndexByData(r),v=e.getSlideIndexByData(e.realIndex);m>e.slides.length-e.loopedSlides&&e.loopFix({direction:m>v?"next":"prev",activeSlideIndex:m,slideTo:!1}),e.slideToLoop(r)}else e.slideTo(r)}function L(){const t=e.rtl,a=e.params.pagination;if($())return;let r=e.pagination.el;r=c(r);let m,v;const D=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,Y=e.params.loop?Math.ceil(D/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(v=e.previousRealIndex||0,m=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(m=e.snapIndex,v=e.previousSnapIndex):(v=e.previousIndex||0,m=e.activeIndex||0),a.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const x=e.pagination.bullets;let M,B,q;if(a.dynamicBullets&&(i=ve(x[0],e.isHorizontal()?"width":"height",!0),r.forEach(C=>{C.style[e.isHorizontal()?"width":"height"]=`${i*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&v!==void 0&&(s+=m-(v||0),s>a.dynamicMainBullets-1?s=a.dynamicMainBullets-1:s<0&&(s=0)),M=Math.max(m-s,0),B=M+(Math.min(x.length,a.dynamicMainBullets)-1),q=(B+M)/2),x.forEach(C=>{const y=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(k=>`${a.bulletActiveClass}${k}`)].map(k=>typeof k=="string"&&k.includes(" ")?k.split(" "):k).flat();C.classList.remove(...y)}),r.length>1)x.forEach(C=>{const y=oe(C);y===m?C.classList.add(...a.bulletActiveClass.split(" ")):e.isElement&&C.setAttribute("part","bullet"),a.dynamicBullets&&(y>=M&&y<=B&&C.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),y===M&&I(C,"prev"),y===B&&I(C,"next"))});else{const C=x[m];if(C&&C.classList.add(...a.bulletActiveClass.split(" ")),e.isElement&&x.forEach((y,k)=>{y.setAttribute("part",k===m?"bullet-active":"bullet")}),a.dynamicBullets){const y=x[M],k=x[B];for(let V=M;V<=B;V+=1)x[V]&&x[V].classList.add(...`${a.bulletActiveClass}-main`.split(" "));I(y,"prev"),I(k,"next")}}if(a.dynamicBullets){const C=Math.min(x.length,a.dynamicMainBullets+4),y=(i*C-i)/2-q*i,k=t?"right":"left";x.forEach(V=>{V.style[e.isHorizontal()?k:"top"]=`${y}px`})}}r.forEach((x,M)=>{if(a.type==="fraction"&&(x.querySelectorAll(W(a.currentClass)).forEach(B=>{B.textContent=a.formatFractionCurrent(m+1)}),x.querySelectorAll(W(a.totalClass)).forEach(B=>{B.textContent=a.formatFractionTotal(Y)})),a.type==="progressbar"){let B;a.progressbarOpposite?B=e.isHorizontal()?"vertical":"horizontal":B=e.isHorizontal()?"horizontal":"vertical";const q=(m+1)/Y;let C=1,y=1;B==="horizontal"?C=q:y=q,x.querySelectorAll(W(a.progressbarFillClass)).forEach(k=>{k.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${y})`,k.style.transitionDuration=`${e.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(x.innerHTML=a.renderCustom(e,m+1,Y),M===0&&_("paginationRender",x)):(M===0&&_("paginationRender",x),_("paginationUpdate",x)),e.params.watchOverflow&&e.enabled&&x.classList[e.isLocked?"add":"remove"](a.lockClass)})}function H(){const t=e.params.pagination;if($())return;const a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let r=e.pagination.el;r=c(r);let m="";if(t.type==="bullets"){let v=e.params.loop?Math.ceil(a/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&v>a&&(v=a);for(let D=0;D<v;D+=1)t.renderBullet?m+=t.renderBullet.call(e,D,t.bulletClass):m+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?m=t.renderFraction.call(e,t.currentClass,t.totalClass):m=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?m=t.renderProgressbar.call(e,t.progressbarFillClass):m=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],r.forEach(v=>{t.type!=="custom"&&(v.innerHTML=m||""),t.type==="bullets"&&e.pagination.bullets.push(...v.querySelectorAll(W(t.bulletClass)))}),t.type!=="custom"&&_("paginationRender",r[0])}function N(){e.params.pagination=xe(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&e.isElement&&(a=e.el.shadowRoot.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...e.el.querySelectorAll(t.el)],a.length>1&&(a=a.filter(r=>ye(r,".swiper")[0]===e.el)[0])),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(e.pagination,{el:a}),a=c(a),a.forEach(r=>{t.type==="bullets"&&t.clickable&&r.classList.add(t.clickableClass),r.classList.add(t.modifierClass+t.type),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(r.classList.add(`${t.modifierClass}${t.type}-dynamic`),s=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&r.classList.add(t.progressbarOppositeClass),t.clickable&&r.addEventListener("click",z),e.enabled||r.classList.add(t.lockClass)}))}function h(){const t=e.params.pagination;if($())return;let a=e.pagination.el;a&&(a=c(a),a.forEach(r=>{r.classList.remove(t.hiddenClass),r.classList.remove(t.modifierClass+t.type),r.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&r.removeEventListener("click",z)})),e.pagination.bullets&&e.pagination.bullets.forEach(r=>r.classList.remove(...t.bulletActiveClass.split(" ")))}l("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:a}=e.pagination;a=c(a),a.forEach(r=>{r.classList.remove(t.horizontalClass,t.verticalClass),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),l("init",()=>{e.params.pagination.enabled===!1?w():(N(),H(),L())}),l("activeIndexChange",()=>{typeof e.snapIndex>"u"&&L()}),l("snapIndexChange",()=>{L()}),l("snapGridLengthChange",()=>{H(),L()}),l("destroy",()=>{h()}),l("enable disable",()=>{let{el:t}=e.pagination;t&&(t=c(t),t.forEach(a=>a.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),l("lock unlock",()=>{L()}),l("click",(t,a)=>{const r=a.target;let{el:m}=e.pagination;if(Array.isArray(m)||(m=[m].filter(v=>!!v)),e.params.pagination.el&&e.params.pagination.hideOnClick&&m&&m.length>0&&!r.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&r===e.navigation.nextEl||e.navigation.prevEl&&r===e.navigation.prevEl))return;const v=m[0].classList.contains(e.params.pagination.hiddenClass);_(v===!0?"paginationShow":"paginationHide"),m.forEach(D=>D.classList.toggle(e.params.pagination.hiddenClass))}});const f=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=c(t),t.forEach(a=>a.classList.remove(e.params.pagination.paginationDisabledClass))),N(),H(),L()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=c(t),t.forEach(a=>a.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:f,disable:w,render:H,update:L,init:N,destroy:h})}const Ne={class:"relative w-full h-full z-30"},Te={class:"flex items-center text-white space-x-2"},He=n("i",{class:"icon-map-pin text-lg lg:text-2xl"},null,-1),Ee={class:"text-sm lg:text-xl font-medium leading-130"},Fe={key:0},je={class:"text-base font-semibold leading-130 mr-1"},Oe=n("i",{class:"icon-arrow-right text-2xl"},null,-1),qe={key:0,class:"absolute right-[12%] top-[40%] hidden xl:flex"},Re={class:"flex flex-col items-center"},Ge={class:"relative text-white text-xl font-medium z-10 mb-3"},Ve=n("div",{class:"swiper-pagination"},null,-1),Ue={class:"relative text-white text-xl font-medium z-10 mt-1"},Ye=O({__name:"Slider",props:{images:{},loading:{type:Boolean}},setup(e){const o=e,l={slidesPerView:1,spaceBetween:30,loop:!1,pagination:{el:".swiper-pagination",clickable:"false",type:"bullets",renderBullet:function(c,$){return'<span class="'+$+'"><em></em><i></i><b></b></span>'}},effect:"fade",centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:[re,ce,Me]},_=Q(1),d=T(()=>[{title:"Bibi Khanum Mosque",short_description:"<p>Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th century.</p>",image:"/registan.webp"}]),i=T(()=>{var c,$;return($=(c=o==null?void 0:o.images)==null?void 0:c.destination)==null?void 0:$.length}),s=c=>{_.value=(c==null?void 0:c.activeIndex)+1};return(c,$)=>{const I=X,z=ee,L=U,H=be;return p(),b("div",Ne,[u(A(le),j(l,{class:"custom-swiper relative h-full",onSlideChange:s}),{default:g(()=>{var N,h;return[(p(!0),b(E,null,F((N=c.images)!=null&&N.destination?(h=c.images)==null?void 0:h.destination:A(d),(f,w)=>(p(),P(A(ne),{key:w,class:"relative h-full transition-all duration-300 !z-50"},{default:g(()=>[u(H,{title:f==null?void 0:f.title,image:f==null?void 0:f.image,text:f==null?void 0:f.short_description,loading:c.loading,content:""},{prefix:g(()=>[u(I,j({loading:c.loading},{width:"200px",height:"24px","preloader-class":"mb-1"}),{default:g(()=>{var t,a,r;return[n("div",Te,[He,n("span",Ee,[n("span",null,S((t=f==null?void 0:f.region)==null?void 0:t.title),1),(a=f==null?void 0:f.region)!=null&&a.title?(p(),b("span",Fe,",")):R("",!0),n("span",null,S((r=f==null?void 0:f.destination_country)==null?void 0:r.title),1)])])]}),_:2},1040)]),suffix:g(()=>[u(I,j({loading:c.loading},{width:"150px",height:"56px","preloader-class":"mb-1"}),{default:g(()=>[u(L,{to:c.localePath(`/destination/${f==null?void 0:f.slug}`)},{default:g(()=>[u(z,{"button-class":"!px-7 lg:!px-8 !py-3 !flex !items-center"},{default:g(()=>[n("span",je,S(c.$t("explore")),1),Oe]),_:1})]),_:2},1032,["to"])]),_:2},1040)]),_:2},1032,["title","image","text","loading"])]),_:2},1024))),128))]}),_:1},16),A(i)?(p(),b("div",qe,[n("div",Re,[n("span",Ge," 0"+S(_.value),1),Ve,n("span",Ue," 0"+S(A(i)),1)])])):R("",!0)])}}});const We={class:"aspect-location-image overflow-hidden rounded shrink-0 w-[75px] h-[66px] md:h-22 md:w-[100px] relative border-white/12"},Xe=["src"],Ke={class:"flex flex-col items-start justify-center space-y-[3.75px] md:space-y-[5px]"},Je={class:"text-gray-300 text-[13px] md:text-sm mb-1 line-clamp-1 leading-130"},Qe={key:0},Ze={class:"text-white text-base md:text-xl font-semibold line-clamp-2 leading-130"},et=O({__name:"Location",props:{location:{},loading:{type:Boolean}},setup(e){return(o,l)=>{var i;const _=X,d=U;return p(),P(d,{to:o.localePath(`/destination/${(i=o.location)==null?void 0:i.slug}`),class:"w-auto inline-block flex gap-3 rounded-xl border border-solid border-white/10 p-3 transition-300 group hover:border-white/60 location-backdrop-blur"},{default:g(()=>[u(_,j({loading:o.loading},{width:"75px",height:"66px"}),{default:g(()=>{var s;return[n("div",We,[n("img",{src:(s=o.location)==null?void 0:s.image,alt:"location image",class:"w-full h-full object-cover"},null,8,Xe)])]}),_:1},16),n("div",Ke,[u(_,j({loading:o.loading},{width:"70px",height:"14px"}),{default:g(()=>{var s,c,$,I,z,L;return[n("p",Je,[n("span",null,S((c=(s=o.location)==null?void 0:s.region)==null?void 0:c.title),1),(I=($=o.location)==null?void 0:$.region)!=null&&I.title?(p(),b("span",Qe,",")):R("",!0),n("span",null,S((L=(z=o.location)==null?void 0:z.destination_country)==null?void 0:L.title),1)])]}),_:1},16),u(_,j({loading:o.loading},{width:"192px",height:"28px"}),{default:g(()=>{var s;return[n("h4",Ze,S((s=o.location)==null?void 0:s.title),1)]}),_:1},16)])]),_:1},8,["to"])}}});const tt=O({__name:"Locations",props:{locations:{},loading:{type:Boolean}},setup(e){const o={slidesPerView:3,spaceBetween:24,loop:!0,centeredSlides:!1,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1.25,spaceBetween:20},480:{slidesPerView:1,spaceBetween:24},768:{slidesPerView:2,spaceBetween:24},1024:{slidesPerView:3,spaceBetween:24}},modules:[re,ce]};return(l,_)=>{const d=et;return p(),P(A(le),j(o,{class:"relative -mt-20 w-full !px-5 md:!px-20 !overflow-visible !z-30"}),{default:g(()=>[(p(!0),b(E,null,F(l.loading?6:l.locations,(i,s)=>(p(),P(A(ne),{class:"relative",key:s},{default:g(()=>[u(d,{location:l.loading?void 0:i,loading:l.loading},null,8,["location","loading"])]),_:2},1024))),128))]),_:1},16)}}}),at=""+globalThis.__publicAssetsURL("pattern/help.png"),J=e=>(te("data-v-6db75ef5"),e=e(),ae(),e),nt={class:"relative pb-8 lg:pb-16"},lt=J(()=>n("img",{src:at,alt:"Main pattern",class:"absolute w-full h-auto -top-[60%] left-0 z-20"},null,-1)),st={class:"relative container grid xl:grid-cols-2 gap-6 py-16 items-end gallery-slider z-30"},ot={class:"mt-8"},it={class:"text-xl font-semibold leading-130 mb-3"},rt={class:"flex gap-3 p-2 flex-col items-start md:items-center md:flex-row"},ct={class:"flex-y-center gap-3"},dt=["onMouseenter"],ut=["src","alt"],pt={key:0},gt={class:"inline-block !w-[300px]"},mt={key:1},_t={class:"inline-block !w-[300px]"},ht={class:"mt-8 flex-y-center gap-4 max-sm:flex-col"},ft={class:"flex-y-center gap-1 text-base font-semibold leading-150"},bt=J(()=>n("i",{class:"icon-earth-globe text-2xl leading-6"},null,-1)),vt={class:"flex-y-center gap-1 text-base font-semibold leading-150"},xt=J(()=>n("i",{class:"icon-arrow-right text-2xl leading-6"},null,-1)),yt={class:"relative group"},$t={class:"rounded-xl h-full object-cover w-full",alt:"About us images"},Ct=J(()=>n("button",{class:"w-8 h-8 lg:w-11 lg:h-11 text-2xl flex navigation-button nav-button-prev icon-arrow-left lg:opacity-0 group-hover:opacity-100 max-md:hidden cursor-pointer"},null,-1)),kt=J(()=>n("button",{class:"w-8 h-8 lg:w-11 lg:h-11 text-2xl flex navigation-button nav-button-next icon-arrow-right lg:opacity-0 group-hover:opacity-100 max-md:hidden cursor-pointer"},null,-1)),St={class:"container items-center grid md:grid-cols-4 gap-6"},Lt=O({__name:"HomeAboutUs",props:{about:{},statistics:{}},setup(e){const{width:o}=Se(),l=Q(null),_=s=>{l.value=s},d=()=>{l.value=null},i={slidesPerView:"auto",allowTouchMove:!1,navigation:{prevEl:".nav-button-prev",nextEl:".nav-button-next"},breakpoints:{320:{allowTouchMove:!0},768:{allowTouchMove:!1}},modules:[$e]};return(s,c)=>{var N;const $=de,I=ee,z=U,L=Ce,H=ue("lazy");return p(),b("div",nt,[lt,n("div",st,[n("div",null,[u($,{title:"about_us",subtitle:"about_us_project_desc",class:"!p-0"}),n("div",ot,[n("h4",it,S(s.$t("our_supporters")),1),n("div",rt,[(p(!0),b(E,null,F((N=s.about)==null?void 0:N.supporters,(h,f)=>(p(),b("div",ct,[n("div",{class:"flex-y-center gap-3",onMouseenter:w=>_(f),onMouseleave:d},[n("img",{src:h==null?void 0:h.logo,alt:h==null?void 0:h.name},null,8,ut),A(o)>1024?(p(),P(ke,{key:0,duration:400,dimension:"width"},{default:g(()=>[A(l)===f?(p(),b("div",pt,[n("p",gt,S(h==null?void 0:h.name),1)])):R("",!0)]),_:2},1024)):(p(),b("div",mt,[n("p",_t,S(h==null?void 0:h.name),1)]))],40,dt)]))),256))]),n("div",ht,[u(z,{to:s.localePath("/map"),class:"!w-full sm:!w-auto"},{default:g(()=>[u(I,{class:"!pl-8 !pr-7 !py-3 max-sm:w-full"},{default:g(()=>[n("span",ft,[Z(S(s.$t("explore"))+" ",1),bt])]),_:1})]),_:1},8,["to"]),u(z,{to:s.localePath("/about"),class:"!w-full sm:!w-auto"},{default:g(()=>[u(I,{class:"!pl-8 !pr-7 !py-3 max-sm:w-full",variant:"secondary"},{default:g(()=>[n("span",vt,[Z(S(s.$t("more_about_us"))+" ",1),xt])]),_:1})]),_:1},8,["to"])])])]),n("div",yt,[u(A(le),j({class:"w-full h-[342px]"},i),{default:g(()=>{var h;return[(p(!0),b(E,null,F((h=s.about)==null?void 0:h.images,(f,w)=>(p(),P(A(ne),{key:w},{default:g(()=>[pe(n("img",$t,null,512),[[H,{src:f==null?void 0:f.image,delay:500}]])]),_:2},1024))),128))]}),_:1},16),Ct,kt])]),n("div",St,[(p(!0),b(E,null,F(s.statistics,(h,f)=>(p(),P(L,{key:f,icon:h==null?void 0:h.icon,title:h==null?void 0:h.title,count:h==null?void 0:h.count,class:"!bg-white/10"},null,8,["icon","title","count"]))),128))])])}}});const Bt=K(Lt,[["__scopeId","data-v-6db75ef5"]]);const It={props:{loading:{type:Boolean,default:!1},height:{type:[String,Number],default:"30px"},width:{type:[String,Number],default:"100%"},line:{type:[String,Number],default:1},borderRadius:{type:[String,Number],default:"4px"},preloaderClass:{type:[String,Array],default:()=>""},circle:{type:Boolean,default:!1},img:{type:String,default:"https://picsum/photos/300/300"}},computed:{shimmerStyles(){return{"--width":this.width,"--height":this.height,"--border-radius":this.circle?"50%":this.borderRadius}}}};function Pt(e,o,l,_,d,i){return p(),P(me,{key:l.loading,name:"skeleton",mode:"out-in"},{default:g(()=>[l.loading?(p(),b("div",{key:"loading",class:G([l.preloaderClass,"flex-shrink-0"]),style:se({height:l.height,width:l.width})},[n("span",{class:"skeleton",style:se(i.shimmerStyles)},null,4)],6)):ge(e.$slots,"default",{key:1},void 0,!0)]),_:3})}const wt=K(It,[["render",Pt],["__scopeId","data-v-2e31f2b4"]]),Dt=["href"],At=["src","alt"],zt=O({__name:"Partners",props:{brand:{},loading:{type:Boolean,default:!1},isGray:{type:Boolean,default:!1},isDark:{type:Boolean}},setup(e){return(o,l)=>{const _=wt;return p(),P(_,{width:"100%",height:"136px","border-radius":"12px",loading:o.loading},{default:g(()=>{var d,i,s,c;return[n("a",{target:"_blank",href:`${(d=o.brand)==null?void 0:d.link}`,class:"partners-card cursor-pointer duration-300 bg-white/5 hover:bg-white/[12%] transition-300 p-0 md:p-4 rounded-xl h-[84px] w-[201px] md:h-[117px] md:w-[280px] flex justify-center items-center group border border-solid border-white/[16%]"},[(i=o.brand)!=null&&i.logo?(p(),b("img",{key:0,src:(s=o.brand)==null?void 0:s.logo,alt:(c=o.brand)==null?void 0:c.name,class:"lg:grayscale lg:opacity-60 duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 h-full max-h-[30px] md:max-h-[40px] w-full max-w-[200px] mx-auto object-contain"},null,8,At)):R("",!0)],8,Dt)]}),_:1},8,["loading"])}}});const Mt=K(zt,[["__scopeId","data-v-2e8d1883"]]),Nt=""+globalThis.__publicAssetsURL("partners-logo.svg"),Tt=e=>(te("data-v-9fb18fef"),e=e(),ae(),e),Ht={class:"relative"},Et=Tt(()=>n("div",{class:"w-16 h-16 lg:w-[100px] lg:h-[100px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full partners-shadow"},[n("img",{class:"w-full h-full",src:Nt,alt:"Tabarruk logo"})],-1)),Ft={class:"marquee"},jt={"aria-hidden":"true",class:G("marquee__group_left")},Ot={class:"marquee mt-7 md:mt-8"},qt={"aria-hidden":"true",class:G("marquee__group_right")},Rt=O({__name:"Partners",props:{partners:{},loading:{type:Boolean},position:{},isDark:{type:Boolean}},setup(e){function o(l){if(l){let _=0,d=[],i=l==null?void 0:l.length,s=100-i;for(let c=0;c<=s;c++)d.push(l[_]),_+1===i?_=0:_++;return d}}return(l,_)=>{const d=Mt;return p(),b("div",{class:G({"!bg-dark":l.isDark})},[n("div",Ht,[Et,n("div",Ft,[n("div",jt,[(p(!0),b(E,null,F(o(l.partners),(i,s)=>(p(),P(d,{key:s,brand:i,loading:l.loading,isGray:!0,isDark:l.isDark},null,8,["brand","loading","isDark"]))),128))])]),n("div",Ot,[n("div",qt,[(p(!0),b(E,null,F(o(l.partners),(i,s)=>(p(),P(d,{key:s,brand:i,loading:l.loading,isGray:!0,isDark:l.isDark},null,8,["brand","loading","isDark"]))),128))])])])],2)}}});const Gt=K(Rt,[["__scopeId","data-v-9fb18fef"]]),Vt={class:"flex mb-3 md:flex-col md:mb-0"},Ut={class:"flex items-center justify-center w-14 h-14 py-3 bg-transparent border-[1px] border-white border-opacity-20 rounded-lg ease-all duration-300 group-hover:bg-[#E54545]"},Yt=["src"],Wt={class:"font-bold text-xl text-white leading-130 pl-4 md:pt-6 md:pb-5 md:pl-0 md:text-2xl"},Xt={class:"mb-4 font-medium text-[13px] md:text-base text-white text-opacity-60 leading-130 ease-all duration-300 group-hover:text-opacity-100 md:pb-6 line-clamp-2"},Kt={class:"font-normal text-[15px] leading-130 md:text-base"},Jt=n("span",{class:"icon-arrow-right mt-0.5 ml-2.5"},null,-1),Qt=O({__name:"ReligionCard",props:{religion:{},loading:{type:Boolean}},setup(e){return(o,l)=>{var i;const _=X,d=U;return p(),P(d,{to:o.localePath(`/religions/${(i=o.religion)==null?void 0:i.id}`),class:G([{"bg-white/[0.03] mr-4":o.loading},"relative block p-4 border-[1px] border-white border-opacity-20 rounded-xl ease-all duration-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.04] hover:border-opacity-[0.04] group md:p-8"])},{default:g(()=>[n("div",Vt,[u(_,{width:"60px",height:"60px","border-radius":"8px","preloader-class":"mb-6",loading:o.loading},{default:g(()=>{var s;return[n("div",Ut,[n("img",{class:"flex-shrink-1",alt:"religion",src:(s=o.religion)==null?void 0:s.flag},null,8,Yt)])]}),_:1},8,["loading"]),u(_,{width:"151px",height:"31px","border-radius":"8px","preloader-class":"mb-5",loading:o.loading},{default:g(()=>{var s;return[n("h3",Wt,S((s=o.religion)==null?void 0:s.title),1)]}),_:1},8,["loading"])]),u(_,{width:"100%",height:"63px","border-radius":"8px","preloader-class":"mb-6",loading:o.loading},{default:g(()=>{var s;return[n("p",Xt,S((s=o.religion)==null?void 0:s.short_description),1)]}),_:1},8,["loading"]),u(_,{width:"96px",height:"21px","border-radius":"8px","preloader-class":"mb-6",loading:o.loading},{default:g(()=>{var s;return[u(d,{to:o.localePath(`/religions/${(s=o.religion)==null?void 0:s.id}`),class:"ease-all duration-300 flex text-white group-hover:text-red"},{default:g(()=>[n("p",Kt,S(o.$t("see_more")),1),Jt]),_:1},8,["to"])]}),_:1},8,["loading"])]),_:1},8,["to","class"])}}}),Zt=["src","alt"],ea={class:"flex flex-col justify-between pl-4"},ta=["innerHTML"],aa={class:"font-normal text-[13px] leading-130 text-white text-opacity-60 b-0 md:text-base"},ie=O({__name:"SmallNewsCard",props:{news:{},short:{type:Boolean},loading:{type:Boolean}},setup(e){const{locale:o}=_e();return(l,_)=>{var s;const d=X,i=U;return p(),P(i,{to:l.localePath(`/news/${(s=l.news)==null?void 0:s.slug}`),class:"flex lg:p-3 p-2 border-[1px] border-white border-opacity-20 rounded-xl bg-[#07091C] ease-all duration-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.04] hover:border-opacity-[0.04]"},{default:g(()=>[u(d,{width:l.short?"122px":"268px",height:l.short?"120px":"268px","border-radius":"8px",class:"!flex-shrink-0","preloader-class":"inline-flex",loading:l.loading},{default:g(()=>{var c,$;return[n("img",{src:(c=l.news)==null?void 0:c.image,alt:($=l.news)==null?void 0:$.title,class:G(["rounded-lg flex-shrink-0 object-cover",[l.short?"!w-[122px] !h-[128px]":"!w-[122px] !h-[128px] lg:!w-[268px] lg:!h-[290px]"]])},null,10,Zt)]}),_:1},8,["width","height","loading"]),n("div",ea,[n("div",null,[u(d,{width:"100px",height:"24px","border-radius":"8px","preloader-class":"mb-2",loading:l.loading},{default:g(()=>{var c;return[n("h4",{class:G(["mb-4 text-white font-semibold leading-130 text-base !line-clamp-2",[l.short?"text-lg":"text-lg lg:text-2xl"]])},S((c=l.news)==null?void 0:c.title),3)]}),_:1},8,["loading"]),u(d,{width:"200px",height:"24px","border-radius":"8px",loading:l.loading},{default:g(()=>{var c;return[l.short?(p(),b("div",{key:0,class:"news-text text-white text-base leading-130 font-medium !line-clamp-2",innerHTML:(c=l.news)==null?void 0:c.short_description},null,8,ta)):R("",!0)]}),_:1},8,["loading"])]),u(d,{width:"200px",height:"24px","border-radius":"8px",loading:l.loading},{default:g(()=>{var c;return[n("p",aa,S(A(he)((c=l.news)==null?void 0:c.published_at).locale(A(o)).format("MMMM DD YYYY")),1)]}),_:1},8,["loading"])])]),_:1},8,["to"])}}});const na=e=>(te("data-v-8a9a5a9c"),e=e(),ae(),e),la={class:"relative bg-dark text-white"},sa={class:"flex flex-wrap justify-center space-bottom-4"},oa={class:"relative custom-bg-img"},ia={class:"grid lg:grid-cols-3 gap-3 lg:gap-6 space-bottom-4 mt-10 md:grid-cols-2"},ra={class:"grid grid-cols-12 gap-x-6 mt-10"},ca={class:"lg:col-span-7 col-span-12 mb-2.5 lg:mb-0"},da={class:"grid gap-y-2.5 lg:col-span-5 col-span-12"},ua=na(()=>n("span",{class:"icon-arrow-right pl-1 text-2xl"},null,-1)),pa={class:"space-y-11 pb-16"},ga={class:"posts-wrapper d-flexx relative w-full z-10 px-4 lg:px-0"},ma={class:"space-y-11 pb-16"},_a={__name:"index",setup(e){const o=De(),l=Ae(),_=ze(),d=we(),i=Q(!1),s=T(()=>o.destinations),c=T(()=>l.partners),$=T(()=>_.newsList),I=T(()=>l.instagramPosts),z=T(()=>d.aboutData),L=T(()=>d==null?void 0:d.statistics),H=T(()=>l.mainData),N=T(()=>o.religionList),h=T(()=>o.countryList);async function f(){return i.value=!0,await Promise.all([l.fetchMainData(),l.fetchPartners(),d.fetchStatistics(),l.fetchInstagramPost(),o.fetchPopularDestination(),o.fetchReligionList(),o.fetchDestinations("",void 0,void 0),d.fetchAboutData(),_.fetchNewsList(1,3)])}f().finally(()=>{i.value=!1}),fe(()=>L,t=>{var a,r,m,v;w.value[0].count=(a=t.value)==null?void 0:a.attractions_count,w.value[1].count=(r=t.value)==null?void 0:r.destinations_count,w.value[2].count=(m=t.value)==null?void 0:m.countries_count,w.value[3].count=(v=t.value)==null?void 0:v.religions_count},{deep:!0});const w=Q([{title:"attractions",count:0,icon:"/svg/moscue.svg"},{title:"destinations",count:0,icon:"/svg/global.svg"},{title:"countries",count:0,icon:"/svg/flag.svg"}]);return(t,a)=>{const r=Ye,m=tt,v=Bt,D=de,Y=U,x=X,M=Le,B=Be,q=Ie,C=Gt;return p(),b("div",la,[u(r,{images:H.value[0],loading:i.value},null,8,["images","loading"]),u(m,{locations:s.value,loading:i.value},null,8,["locations","loading"]),u(v,{about:z.value,statistics:w.value,loading:i.value,id:"about"},null,8,["about","statistics","loading"]),u(D,{class:"z-50 relative",id:"country",centered:"",title:t.$t("how_many_countries_title"),subtitle:t.$t("how_many_countries_subtitle")},{default:g(()=>[n("div",sa,[(p(!0),b(E,null,F(i.value?3:h.value,(y,k)=>(p(),b("div",{key:k,class:"mt-10"},[u(Pe,{country:i.value?void 0:y,loading:i.value},null,8,["country","loading"])]))),128))])]),_:1},8,["title","subtitle"]),n("div",oa,[u(D,{id:"religion",centered:"",title:t.$t("religions"),subtitle:t.$t("religions_subtitle")},{default:g(()=>[n("div",ia,[(p(!0),b(E,null,F(i.value?3:N.value,(y,k)=>(p(),b("div",{key:k},[u(Qt,{religion:y,loading:i.value},null,8,["religion","loading"])]))),128))])]),_:1},8,["title","subtitle"]),u(D,{centered:"",title:t.$t("news"),subtitle:t.$t("news_subtitle")},{default:g(()=>[n("div",ra,[n("div",ca,[u(ie,{news:i.value?1:$.value[0],loading:i.value,class:"h-full"},null,8,["news","loading"])]),n("div",da,[(p(!0),b(E,null,F(i.value?2:$.value.slice(1),y=>(p(),b("div",{key:y.id},[u(ie,{news:y,short:"",loading:i.value},null,8,["news","loading"])]))),128))])]),u(x,{width:"148px",height:"48px","border-radius":"8px","preloader-class":"mt-2 ml-auto",loading:i.value},{default:g(()=>[u(Y,{to:t.localePath("/news")},{default:g(()=>[u(ee,{class:"!px-8 !py-3 !ml-auto mt-4 ease-all duration-300 s-button-secondary"},{default:g(()=>[Z(S(t.$t("all_news"))+" ",1),ua]),_:1})]),_:1},8,["to"])]),_:1},8,["loading"])]),_:1},8,["title","subtitle"])]),n("div",pa,[u(D,{centered:"",title:t.$t("instagram_title"),subtitle:t.$t("instagram_subtitle"),class:"!pb-0"},null,8,["title","subtitle"]),n("div",ga,[u(M,{posts:I.value,loading:i.value},null,8,["posts","loading"]),u(B,{loading:i.value},null,8,["loading"]),u(q)])]),n("div",ma,[u(D,{centered:"",title:t.$t("partners_title"),subtitle:t.$t("partners_subtitle"),class:"!pb-0"},null,8,["title","subtitle"]),i.value?R("",!0):(p(),P(C,{key:0,partners:c.value,"is-dark":""},null,8,["partners"]))])])}}},Ha=K(_a,[["__scopeId","data-v-8a9a5a9c"]]);export{Ha as default};
