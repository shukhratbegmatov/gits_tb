import{_ as Q}from"./Logo.vue.fc8916e7.js";import{d as k,g as H,o as d,k as $,w as b,e as u,t as m,_ as A,z as E,c as h,v as T,m as I,a3 as J,b as v,n as w,j as F,T as B,G as X,F as O,h as L,E as Z,a as j,y as ee,ab as te,C as ae,Z as D,f as se,A as ne}from"./entry.4775dd14.js";import{_ as M}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as le}from"./Preloader.bd773840.js";import{_ as oe}from"./Input.6afbaacd.js";import{d as ie}from"./useFetcher.12646a52.js";import{u as W}from"./destination.1887fc89.js";import{b as re}from"./index.23aade4f.js";const ce={class:"w-7 h-7 rounded-lg overflow-hidden flex-shrink-0"},de=["src"],ue={class:"text-base text-white font-medium leading-130 whitespace-nowrap transition-300 group-hover:text-red"},he={class:"text-sm text-white/60 font-normal leading-130 whitespace-nowrap"},ge=k({__name:"NavigationLink",props:{icon:{default:"/svg/countries/azerbaijan.svg"},type:{},title:{default:"Uzbekistan"},count:{default:32},id:{}},setup(o){const l=o,e=H(()=>(l==null?void 0:l.type)=="countries"?"/country/":"/religions/");return(t,i)=>{const a=A;return d(),$(a,{to:t.localePath(e.value+t.id),class:"w-full flex items-center space-x-[10px] py-2 pl-2 pr-8 rounded-xl transition-300 group hover:bg-white/5"},{default:b(()=>[u("div",ce,[u("img",{src:t.icon,class:"w-full h-full !flex-shrink-0",alt:"Navigation Icon"},null,8,de)]),u("div",null,[u("p",ue,m(t.title),1),u("p",he,m(t.count)+" "+m(t.$t("destinations")),1)])]),_:1},8,["to"])}}}),pe=k({__name:"Dropdown",props:{position:{default:"right"},dropdownStyle:{default:""},size:{default:"32px"},loading:{type:Boolean,default:!1}},emits:["on-open","close"],setup(o,{emit:l}){const e=l,t=E(!1),i=()=>{t.value=!t.value,t.value&&e("on-open")},a=()=>{t.value=!1,e("close")};return(r,f)=>(d(),h("div",{class:w(["s-dropdown inline-flex relative",{"pointer-events-none":r.loading}])},[u("div",{onFocusout:a,class:"inline-block",onClick:J(i,["stop"])},[T(r.$slots,"button",{isOpen:I(t)},void 0,!0)],32),v(B,{name:"slideDown",mode:"out-in"},{default:b(()=>[I(t)?(d(),h("div",{key:0,class:w(["w-fit absolute top-10 z-50 min-w-[200px] border border-solid border-white/20 rounded-lg w-auto h-auto z-50 backdrop-blur",[{"right-0":r.position==="right","-left-[120px]":r.position==="left"},r.dropdownStyle]]),onClick:a},[T(r.$slots,"items",{},void 0,!0)],2)):F("",!0)]),_:3})],2))}});const fe=M(pe,[["__scopeId","data-v-628b3135"]]),_e={class:"relative flex items-center space-x-6"},Ce={class:"relative text-white flex"},ve=k({__name:"NavigationWrapper",props:{loading:{type:Boolean},navigations:{}},setup(o){const l=X(),e=t=>{if(l!=null&&l.fullPath.includes("country")&&t==="countries"||l!=null&&l.fullPath.includes("religions")&&t==="religions")return!0};return(t,i)=>{const a=ge,r=fe,f=A,c=le;return d(),h("ul",_e,[(d(!0),h(O,null,L(t.navigations,(s,g)=>(d(),h("li",{key:g,class:"relative text-white flex"},[v(c,{width:"67px",height:"21px","border-radius":"4px",class:"!inline-block",loading:t.loading},{default:b(()=>[s!=null&&s.action?(d(),$(r,{key:0,position:"left"},{button:b(()=>[u("button",{class:w(["text-base font-bold leading-130 transition-all duration-150 hover:text-white/40",{"!text-red":e(s==null?void 0:s.action)}])},m(s!=null&&s.title?t.$t(s==null?void 0:s.title):"foo"),3)]),items:b(()=>[u("ul",{class:w(["relative block grid p-4",[(s==null?void 0:s.action)==="countries"?"w-max grid-cols-2":" w-full grid-cols-1"]])},[(d(!0),h(O,null,L(s==null?void 0:s.content,(n,p)=>(d(),h("li",{key:p,class:"flex-shrink-0"},[v(a,{type:s==null?void 0:s.action,id:n==null?void 0:n.id,title:n==null?void 0:n.title,icon:n==null?void 0:n.flag,count:n==null?void 0:n.destination_count},null,8,["type","id","title","icon","count"])]))),128))],2)]),_:2},1024)):(d(),$(f,{key:1,to:t.localePath(s==null?void 0:s.url),class:"text-base font-bold leading-130 transition-all duration-150 hover:text-white/40"},{default:b(()=>[Z(m(t.$t(s==null?void 0:s.title)),1)]),_:2},1032,["to"]))]),_:2},1032,["loading"])]))),128)),u("li",Ce,[v(f,{class:"flex-shrink-0 bold",to:"/faq"},{default:b(()=>[Z(" FAQ ")]),_:1})])])}}});const me=M(ve,[["__scopeId","data-v-00229917"]]);const N=j(),be={name:"FormSelect",emits:["on-toggle","input"],props:{addInfo:{type:Boolean,default:!1},value:{type:[String,Number,Object],default:""},options:{type:Array,required:!0},showArrow:{type:Boolean,default:!0},labelKey:{type:String,default:"name"},infoKey:{type:String,default:"info"},valueKey:{type:String,default:"value"},selectedOptionStyles:{type:String,default:""},defaultIconStyle:{type:String,default:""},placeholder:{type:String,default:"Select"},optionsStyle:{type:String,default:""},optionStyle:{type:String,default:""},error:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledOption:{type:String,default:"disabled"},dark:{type:Boolean,default:!1}},data(){return{showOptions:!1,targetIsVisible:!1,selectedValue:void 0}},watch:{value:{handler(){this.updateValueByProp()},deep:!0,immediate:!0},options(){this.updateValueByProp()}},computed:{languageSwitch(){return N.languageSwitch}},methods:{focusOut(){N.languageTrigger(!1),this.showOptions=!1},toggleSelect(){this.disabled||(this.showOptions=!this.showOptions,N.languageTrigger(this.showOptions),this.$emit("on-toggle",this.showOptions))},findOption(o){var l;return(l=this.options)==null?void 0:l.find(e=>e==o||e[this.valueKey]==o[this.valueKey]||e[this.valueKey]==o)},onSelect(o){this.selectedValue=o,this.toggleSelect(),this.$emit("input",o[this==null?void 0:this.valueKey]||o)},isActive(o){return this.selectedValue===o||this.selectedValue&&this.selectedValue[this.valueKey]===o[this.valueKey]},updateValueByProp(){this.selectedValue=![void 0,null,""].includes(this.value)&&this.valueKey?this.findOption(this.value):void 0}}},ye={key:0,class:"text-gray font-normal"},we=["disabled","onClick"];function xe(o,l,e,t,i,a){return d(),h("div",{onFocusout:l[1]||(l[1]=(...r)=>a.focusOut&&a.focusOut(...r)),tabindex:"0",class:"relative flex items-center"},[u("div",{class:w(["rounded-md inline-flex items-center border cursor-pointer",[{"!cursor-not-allowed":e.disabled},e.error?"border-red":"border-gray-500",e.selectedOptionStyles,e.dark?"bg-white/[0.06] border-white/[0.12]":"bg-gray-100 border-gray-500"]]),onClick:l[0]||(l[0]=(...r)=>a.toggleSelect&&a.toggleSelect(...r))},[T(o.$slots,"prefix",{},void 0,!0),T(o.$slots,"selectedOption",{value:i.selectedValue},()=>{var r;return[u("div",{class:w(["text-sm leading-130 flex items-center gap-2",[{"text-gray/40":e.disabled},{"text-red":e.error},e.dark?"text-white":"text-black"]])},[Z(m(i.selectedValue?i.selectedValue[e.labelKey]||i.selectedValue:e.placeholder)+" ",1),e.addInfo?(d(),h("p",ye,m((r=i.selectedValue)==null?void 0:r.info),1)):F("",!0)],2)]},!0)],2),v(B,{name:"select",mode:"out-in"},{default:b(()=>[i.showOptions||a.languageSwitch?(d(),h("div",{key:i.showOptions,class:w([[e.optionsStyle],"grid grid-cols-3 w-fit absolute top-10 z-50 p-4 min-w-[200px] border border-solid border-white/20 rounded-xl w-auto h-auto z-50 backdrop-blur"])},[T(o.$slots,"options",{},()=>[(d(!0),h(O,null,L(e.options,(r,f)=>(d(),h("button",{key:f,type:"button",class:w([[e.optionStyle,e.dark?(a.isActive(r),"text-white"):a.isActive(r)?"":"text-black"],"flex items-center space-x-2 transition-200 relative cursor-pointer max-w-full w-full p-2 hover:bg-white/[4%] rounded-lg"]),disabled:r[e.disabledOption],onClick:c=>a.onSelect(r)},[T(o.$slots,"option",{option:r,index:f},()=>[u("div",null,m(r[e.labelKey]),1)],!0),u("i",{class:w(["transition-200 icon-check text-lg text-white inline-block",{"opacity-0":!a.isActive(r)}])},null,2)],10,we))),128))],!0)],2)):F("",!0)]),_:3})],32)}const Se=M(be,[["render",xe],["__scopeId","data-v-48e234da"]]),ke=""+globalThis.__publicAssetsURL("svg/flags/uz.svg"),Ee=["src","alt"],Fe={key:0,class:"text-white text-base font-medium leading-130"},Ve={key:0,class:"flex items-center space-x-2"},$e=["src","alt"],Me={key:1,src:ke,alt:"locale icon"},Te={class:"text-white text-sm font-medium leading-130"},q=k({__name:"LanguageSwitcher",props:{optionStyles:{},isMobile:{type:Boolean,default:!1}},setup(o){ee();const l=te(),e=E([{value:"ru",name:"Русский",img:"/svg/flags/ru.svg"},{value:"kk",name:"Қазақша",img:"/svg/flags/kk.svg"},{value:"tk",name:"Türkmen",img:"/svg/flags/tk.svg"},{value:"en",name:"English",img:"/svg/flags/en.svg"},{value:"ky",name:"Қыргызча",img:"/svg/flags/ky.svg"},{value:"az",name:"Azərbaycan",img:"/svg/flags/az.svg"},{value:"uz",name:"O’zbekcha",img:"/svg/flags/uz.svg"},{value:"tr",name:"Türk",img:"/svg/flags/tr.svg"},{value:"hu",name:"Magyar",img:"/svg/flags/hu.svg"}]),t=E(),i=async a=>{localStorage.setItem("locale",a),l.go(0)};return ae(()=>{localStorage.getItem("locale")||localStorage.setItem("locale","uz");{const a=localStorage.getItem("locale")??"uz";t.value=e.value.find(r=>r.value===a)}}),(a,r)=>{const f=Se;return d(),$(f,{onFocusout:a.languageTrigger,value:t.value,options:e.value,"label-key":"name","value-key":"value","selected-option-styles":"!bg-transparent select-none border-none","option-style":"hover:bg-gray-500 cursor-pointer select-none p-2","options-style":`right-0 min-w-max ${a.optionStyles}`,onInput:i},{selectedOption:b(()=>{var c,s,g,n;return[(d(),h("img",{src:(c=t.value)==null?void 0:c.img,alt:(s=t.value)==null?void 0:s.name,key:(g=t.value)==null?void 0:g.img,class:w(["mr-[10px] w-6 h-6",{"mr-[10px]":a.isMobile}])},null,10,Ee)),a.isMobile?(d(),h("span",Fe,m((n=t.value)==null?void 0:n.name),1)):F("",!0)]}),option:b(({option:c})=>[c?(d(),h("div",Ve,[c!=null&&c.value?(d(),h("img",{key:0,src:`/svg/flags/${c==null?void 0:c.value}.svg`,alt:c==null?void 0:c.name,class:"w-[22px] h-[22px]"},null,8,$e)):(d(),h("img",Me)),u("span",Te,m(c==null?void 0:c.name),1)])):F("",!0)]),_:1},8,["onFocusout","value","options","options-style"])}}});var P={},He={get exports(){return P},set exports(o){P=o}};(function(o){o.exports=function(l){var e={};function t(i){if(e[i])return e[i].exports;var a=e[i]={exports:{},id:i,loaded:!1};return l[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}return t.m=l,t.c=e,t.p="",t(0)}([function(l,e,t){l.exports=t(1)},function(l,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=t(2);Object.defineProperty(e,"combineChunks",{enumerable:!0,get:function(){return i.combineChunks}}),Object.defineProperty(e,"fillInChunks",{enumerable:!0,get:function(){return i.fillInChunks}}),Object.defineProperty(e,"findAll",{enumerable:!0,get:function(){return i.findAll}}),Object.defineProperty(e,"findChunks",{enumerable:!0,get:function(){return i.findChunks}})},function(l,e){Object.defineProperty(e,"__esModule",{value:!0}),e.findAll=function(s){var g=s.autoEscape,n=s.caseSensitive,p=n===void 0?!1:n,_=s.findChunks,C=_===void 0?i:_,y=s.sanitize,S=s.searchWords,x=s.textToHighlight;return a({chunksToHighlight:t({chunks:C({autoEscape:g,caseSensitive:p,sanitize:y,searchWords:S,textToHighlight:x})}),totalLength:x?x.length:0})};var t=e.combineChunks=function(s){var g=s.chunks;return g=g.sort(function(n,p){return n.start-p.start}).reduce(function(n,p){if(n.length===0)return[p];var _=n.pop();if(p.start<=_.end){var C=Math.max(_.end,p.end);n.push({highlight:!1,start:_.start,end:C})}else n.push(_,p);return n},[]),g},i=function(s){var g=s.autoEscape,n=s.caseSensitive,p=s.sanitize,_=p===void 0?r:p,C=s.searchWords,y=s.textToHighlight;return y=_(y),C.filter(function(S){return S}).reduce(function(S,x){x=_(x),g&&(x=f(x));for(var V=new RegExp(x,n?"g":"gi"),z=void 0;z=V.exec(y);){var K=z.index,U=V.lastIndex;U>K&&S.push({highlight:!1,start:K,end:U}),z.index===V.lastIndex&&V.lastIndex++}return S},[])};e.findChunks=i;var a=e.fillInChunks=function(s){var g=s.chunksToHighlight,n=s.totalLength,p=[],_=function(S,x,V){x-S>0&&p.push({start:S,end:x,highlight:V})};if(g.length===0)_(0,n,!1);else{var C=0;g.forEach(function(y){_(C,y.start,!1),_(y.start,y.end,!0),C=y.end}),_(C,n,!1)}return p};function r(c){return c}function f(c){return c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}}])})(He);const Y=(o,l)=>{const e=P.findAll({autoEscape:o.autoEscape,caseSensitive:o.caseSensitive,findChunks:o.findChunks,sanitize:o.sanitize,searchWords:o.searchWords,textToHighlight:o.textToHighlight}),t=ze(o,e),i=l.slots;return i.default?i.default&&i.default(t):D("span",{...l.attrs},t.map(({chunk:a,text:r,attrs:f})=>a.highlight?D("mark",f,[r]):r))},R={};function ze(o,l){let e=-1,t="",i={};const{textToHighlight:a,highlightClassName:r,highlightStyle:f=R,activeIndex:c,activeClassName:s,activeStyle:g=R}=o;return l.map((n,p)=>{const _=a.substr(n.start,n.end-n.start);if(n.highlight){e++;const C=e===+(c||-1);return t=`${r} ${C?s:""}`,i=C===!0&&g!=null?{...f,...g}:f,{chunk:n,text:_,attrs:{class:t,key:p,style:i,highlightIndex:e}}}else return{chunk:n,text:_}})}Y.props={activeClassName:String,activeIndex:Number,activeStyle:Object,autoEscape:Boolean,caseSensitive:{type:Boolean,defualt:!1},findChunks:Function,custom:{type:Boolean,default:!1},highlightClassName:String,highlightStyle:Object,sanitize:Function,searchWords:{type:Array,validator(o){return o.every(l=>typeof l=="string")},required:!0},textToHighlight:{type:String,required:!0}};const Be=Y,Oe={class:"text-xs text-white/80 font-normal leading-130"},Le=u("span",{class:"mx-0.5"}," / ",-1),Ae={key:0,class:"mx-0.5"},Ie=k({__name:"Value",props:{title:{},search:{},slug:{},breadcrumb:{}},setup(o){const l=j(),e=()=>{l.mobileTrigger(!1)};return(t,i)=>{const a=A;return d(),h("li",{class:"text-white space-y-0.5",onClick:e},[v(a,{to:t.localePath(`/destination/${t.slug}`),class:"w-full"},{default:b(()=>{var r,f,c,s;return[v(I(Be),{class:"text-base text-white font-medium leading-130","highlight-class-name":"bg-[#E54545] text-white rounded","search-words":[t.search??""],"text-to-highlight":t.title},null,8,["search-words","text-to-highlight"]),u("p",Oe,[u("span",null,m(t.$t("countries")),1),Le,u("span",null,m((f=(r=t.breadcrumb)==null?void 0:r.country)==null?void 0:f.title),1),(c=t.breadcrumb)!=null&&c.title?(d(),h("span",Ae," / ")):F("",!0),u("span",null,m((s=t.breadcrumb)==null?void 0:s.title),1)])]}),_:1},8,["to"])])}}}),Ze={},Ne={class:"flex items-center justify-center flex-col space-y-4 py-10 px-[124px]"},Pe={class:"text-xl text-white font-medium leading-130"},je={class:"text-center text-base text-white/60 font-medium leading-130"};function We(o,l){return d(),h("div",Ne,[u("p",Pe,m(o.$t("empty_title")),1),u("p",je,m(o.$t("empty_subtitle")),1)])}const Ke=M(Ze,[["render",We]]),Ue={key:0,class:"relative w-full"},De={class:"absolute top-3 left-0 w-full border border-solid border-white/20 rounded-lg w-auto h-auto z-50 backdrop-blur z-50 shadow-md"},Re={key:0,class:"list"},G=k({__name:"Wrapper",props:{search:{},searchTrigger:{type:Boolean},searchContent:{},wrapperClass:{}},emits:["handleUpdateSearch","clear"],setup(o,{emit:l}){const e=l;function t(){e("clear")}const i=a=>{ie("search",()=>{e("handleUpdateSearch",a)})};return(a,r)=>{const f=oe,c=Ie,s=Ke;return d(),h("div",{class:w(["absolute w-[93%] right-12 transition-all duration-300",a.wrapperClass])},[v(f,{"model-value":a.search,class:w(["transition-300",[a.searchTrigger?"opacity-100":"opacity-0"]]),placeholder:a.$t("search"),"onUpdate:modelValue":i,"input-class":"pl-2 mt-0.5","prefix-class":"leading-130",focus:a.searchTrigger},{suffix:b(()=>[a.search?(d(),h("button",{key:0,onClick:t,class:"py-1.5 px-2 text-sm leading-120 rounded-md bg-white/[0.06] hover:bg-white/20 text-white transition-300"},m(a.$t("clear")),1)):F("",!0)]),_:1},8,["model-value","placeholder","class","focus"]),v(B,{name:"fade",mode:"out-in"},{default:b(()=>{var g;return[a.searchTrigger&&a.search?(d(),h("div",Ue,[u("div",De,[((g=a.searchContent)==null?void 0:g.length)>0?(d(),h("ul",Re,[(d(!0),h(O,null,L(a.searchContent,(n,p)=>(d(),$(c,{key:p,search:a.search,slug:n==null?void 0:n.slug,title:n==null?void 0:n.title,breadcrumb:n==null?void 0:n.region},null,8,["search","slug","title","breadcrumb"]))),128))])):(d(),$(s,{key:1}))])])):F("",!0)]}),_:1})],2)}}});const qe={class:"flex items-center"},Ye=k({__name:"Search",setup(o){const l=W(),e=E(""),t=E(!1),i=H(()=>l.destinationsSearch),a=()=>{e.value="",setTimeout(()=>{t.value=!t.value},100)},r=()=>{e.value=""},f=async c=>{e.value=c,await l.fetchDestinations(e.value,void 0,void 0)};return(c,s)=>{const g=G;return d(),h("div",qe,[v(g,{class:w([t.value?"max-w-full":"max-w-0"]),search:e.value,"search-trigger":t.value,"search-content":i.value,onHandleUpdateSearch:f,onClear:r},null,8,["class","search","search-trigger","search-content"]),u("button",{class:w(["text-2xl text-white transition-all duration-150 hover:text-white/40",[t.value?"icon-xmark":"icon-search"]]),onClick:a},null,2)])}}});const Ge=M(Ye,[["__scopeId","data-v-74188a73"]]);const Qe={},Je={href:"https://uic.group",target:"_blank",class:"cursor-pointer flex items-center footer-logo transition-all duration-500 group","aria-label":"link"},Xe=se('<svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3eb63d49><path d="M14.8212 5.76238C8.7411 4.30268 4.49212 7.77144 1.87856 3.87105C1.87073 3.85533 1.86291 3.84749 1.85508 3.8318C1.78466 3.72193 1.87856 3.56497 2.00375 3.59636C7.38738 4.88342 8.26379 4.08293 10.5252 4.3576C12.6145 4.60873 14.8212 5.76238 14.8212 5.76238Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M15.8933 6.74255C10.5409 5.94992 6.74573 9.96017 3.88176 6.87597C3.87394 6.86812 3.86611 6.85243 3.85046 6.84458C3.77222 6.75826 3.82699 6.6013 3.94436 6.60914C8.83502 6.97014 9.98529 6.10688 11.9964 6.02055C13.8743 5.94207 15.8933 6.74255 15.8933 6.74255Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M16.887 8.00643C12.2154 7.37076 10.2123 11.5772 6.42494 9.00311C6.41711 8.99526 6.40929 8.98742 6.39364 8.97173C6.31539 8.90109 6.33887 8.69706 6.44841 8.69706C10.5879 8.7049 11.6677 7.7396 13.4128 7.52772C15.776 7.24518 16.887 8.00643 16.887 8.00643Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M18.9919 9.39589C16.5505 9.65487 16.934 11.6168 14.2579 11.1774C13.9058 11.1224 13.984 10.8713 14.1405 10.8242C16.3863 10.1807 16.3863 9.74904 17.1923 9.42727C17.9591 9.13691 18.9919 9.39589 18.9919 9.39589Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M17.8885 8.79159C14.3673 8.86222 13.4675 11.3971 10.5017 10.5731C10.0479 10.4475 10.2044 10.1022 10.447 10.0708C13.8431 9.52929 14.0073 9.02703 15.2671 8.7288C16.4487 8.44628 17.8885 8.79159 17.8885 8.79159Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M15.8775 5.75447C15.854 5.7937 15.7992 5.80155 15.7601 5.78585C15.0324 5.36991 14.3517 4.88334 13.5693 4.34969C12.8336 3.85527 11.2529 3.18035 7.96643 3.33732C6.40142 3.4158 4.02262 3.73756 1.56555 2.05027C0.970846 1.65002 0.368316 0.967258 0.055314 0.331591C0.024016 0.276648 0.00836717 0.206014 0.000542654 0.135379C-0.00728186 0.064745 0.0709627 0.00982383 0.141405 0.0333615C6.22146 2.4819 7.95861 1.52447 11.785 2.41127C13.3578 2.78013 15.3063 5.07171 15.8698 5.64458C15.901 5.66814 15.901 5.71522 15.8775 5.75447Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M21.1674 19.1743C21.0968 19.3938 21.1124 19.6529 20.9717 19.8413C20.7994 20.0925 20.377 20.116 20.1735 19.8883C20.0405 19.7707 20.0405 19.5824 19.9935 19.4332C19.6884 18.0912 19.391 16.7491 19.0936 15.3993C19.0624 15.3052 19.0936 15.2423 19.1875 15.2032C19.3363 15.1639 19.3519 15.3287 19.3987 15.423C19.7352 16.3412 20.0482 17.2671 20.3926 18.1853C20.5021 18.4994 20.87 18.3972 21.1124 18.4758C21.3707 18.6405 21.2142 18.9466 21.1674 19.1743Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M21.5663 15.4697C21.5977 15.5561 21.5507 15.6581 21.4568 15.6737C21.4021 15.6816 21.3551 15.6737 21.3394 15.5952C21.1124 15.1401 20.9168 14.6614 20.6821 14.2063C20.377 13.9472 20.0561 13.6804 19.8684 13.3115C19.5319 12.7151 19.5631 11.9382 19.9387 11.3653C19.9699 11.326 19.9935 11.2789 20.0249 11.2397C20.0796 11.1612 20.197 11.1769 20.2282 11.2711C20.2517 11.3417 20.2673 11.4123 20.2987 11.4751C20.7212 12.8014 21.1282 14.1434 21.5663 15.4697Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M21.6289 9.15201C21.6133 9.50516 21.4803 9.83477 21.3942 10.1722C21.3863 10.1958 21.3786 10.2115 21.3551 10.2193C21.3003 10.2429 21.2456 10.2036 21.2456 10.1487C21.2533 9.68566 21.4177 9.23049 21.3003 8.7753C21.1282 8.15532 20.7056 7.61383 20.6744 6.9546C20.6585 6.6093 20.7447 6.27184 20.8153 5.93438C20.5647 5.40858 20.4473 4.80427 20.5803 4.23139C20.6038 4.16076 20.6117 4.16076 20.6509 4.21568C20.8935 4.56885 21.2142 4.922 21.2142 5.38502C21.183 6.04424 20.8229 6.70347 21.0656 7.36269C21.2612 7.95129 21.6836 8.50063 21.6289 9.15201Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M23.6947 6.87666C23.6791 7.73992 22.9279 8.43053 23.014 9.3095C23.014 9.64696 23.1 9.99227 23.0608 10.3297C23.0061 10.6279 22.6696 10.675 22.4272 10.7457C22.2863 10.8085 22.1298 10.6436 22.1689 10.5024C22.1689 9.48215 22.1689 8.45409 22.1689 7.43386C22.1845 7.01008 22.2863 6.56273 22.5758 6.24099C22.7558 6.02908 22.9435 5.8172 23.1391 5.6053C23.1782 5.5582 23.2017 5.50328 23.194 5.44834C23.1782 5.26 23.1391 5.09519 23.2252 4.87544C23.3582 4.60077 23.5305 4.43596 23.7103 4.25546C23.7418 4.22408 23.7886 4.23977 23.7965 4.279C23.9218 4.83621 23.7965 5.44049 23.5382 5.94276C23.6009 6.24099 23.6947 6.55489 23.6947 6.87666Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M33.5778 3.72176C32.5136 4.01996 32.0206 4.38096 31.5981 4.71842C31.5981 4.71842 32.5606 4.38096 33.9455 4.23187C37.8738 3.80024 38.1006 5.26778 42.4984 3.5648C42.647 3.54126 42.6861 3.65897 42.647 3.72176C42.0601 4.74198 41.4106 5.87206 38.9536 5.97408C36.2775 6.08397 34.8847 5.0088 32.3727 5.33057C30.7687 5.53461 29.9392 6.03687 29.4774 6.34295C34.955 5.29132 34.5011 7.70847 39.869 6.42143C39.9317 6.40571 40.0022 6.39002 40.0649 6.39787C40.2055 6.41356 40.2605 6.58623 40.1743 6.68041C40.1352 6.72748 40.0805 6.77458 40.0413 6.82165C39.3371 7.5829 38.5936 8.41477 36.0895 8.22643C33.1474 8.00668 32.9597 6.17814 27.3413 7.57505C32.7874 7.55151 32.6936 9.34082 36.794 8.80718C36.9348 8.79148 37.0208 8.96414 36.9113 9.05831C36.8487 9.11323 36.7781 9.16033 36.7234 9.20742C36.1054 9.69398 35.2053 10.2904 33.5152 9.94511C29.9939 9.20742 30.4401 7.7477 25.9093 8.5482C29.4383 8.64237 29.1958 10.0157 32.8189 10.3532C32.8189 10.3532 32.8189 10.3532 32.8265 10.3532C33.0222 10.3767 33.0771 10.6357 32.9127 10.7456C32.7874 10.8319 32.6465 10.8947 32.5136 10.9496C29.8688 11.9777 28.6402 8.65022 25.3928 9.39577C27.7169 9.5998 27.529 10.3846 29.6262 10.9575C29.853 11.0203 29.8297 11.3263 29.5792 11.3499C27.0909 11.601 27.3101 9.92157 25.7841 9.85878C25.3772 9.84309 25.0016 10.0628 24.7981 10.4238C24.1956 11.4754 24.4381 12.4721 24.399 13.0136C24.5398 13.5787 24.7513 14.1281 24.759 14.7244C24.7669 15.1404 24.7278 15.572 24.5946 15.9722C24.3442 16.8041 24.0939 17.6361 23.8356 18.4759C23.7809 18.6484 23.7886 18.8367 23.8512 19.0016C23.9451 19.2528 24.0392 19.496 24.0783 19.7628C24.1721 20.2101 24.1095 20.6731 23.953 21.1048C23.6244 21.9131 23.2956 22.7214 22.967 23.5376C22.9044 23.6866 22.8576 23.8438 22.7479 23.9693C22.5837 24.0007 22.5993 23.7888 22.6149 23.6866C22.9358 20.6652 23.2409 17.6438 23.5539 14.6224L23.8044 13.9004C23.3114 14.3242 23.0923 14.9127 22.7714 15.4386C22.7323 15.5641 22.5446 15.5876 22.5055 15.4465C22.5367 14.9206 22.607 14.3949 22.6228 13.869C22.6696 13.3354 22.662 12.7939 22.842 12.2838C23.0453 11.7658 23.4365 11.3499 23.7418 10.9026C24.2425 10.259 24.6181 9.52917 24.8763 8.76008C25.0328 8.28922 25.3616 7.87328 25.7841 7.6143C27.2474 6.68825 28.1002 5.88776 29.4853 4.83615C30.7608 3.87085 31.7467 3.11745 32.3103 2.88988C34.8847 1.8304 40.057 2.96836 44.4859 0.0803438C44.5954 0.0175552 44.7363 0.143111 44.6503 0.323609C44.2356 1.37524 43.7426 2.05015 42.5687 2.6309C39.1883 4.3025 35.3071 3.23518 33.5778 3.72176Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M23.3114 5.53435C23.3114 5.53435 23.0217 5.02423 22.3175 4.96145C21.7854 4.91437 21.543 5.09487 21.543 5.09487C21.543 5.09487 22.1846 4.90652 22.6855 5.35385C23.1861 5.80117 22.9123 6.18573 22.9123 6.18573C22.9123 6.18573 23.46 5.86396 23.3114 5.53435Z" fill="#EFEFEF" data-v-3eb63d49></path><path d="M23.28 5.46431C23.28 5.46431 22.9123 5.07193 22.161 5.04053C22.161 5.04053 22.607 5.15039 22.6619 5.39368C22.7558 5.85671 22.349 6.47669 22.2707 6.77492C22.2081 7.04174 23.28 5.46431 23.28 5.46431Z" fill="#EFEFEF" data-v-3eb63d49></path></svg><svg class="opacity-0 invisible w-0 ml-2 footer-text transition-all duration-500" data-v-82c499f6="" width="91" height="21" viewBox="0 0 91 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3eb63d49><path data-v-82c499f6="" d="M47.8634 16.1741C46.4974 16.3996 45.1145 16.5041 43.7305 16.4867C41.1347 16.4867 38.3511 14.7773 38.3511 10.0045V7.21105C38.3511 2.15027 41.2692 0.710917 43.9145 0.710917C45.2366 0.699117 46.5573 0.7966 47.8634 1.00234C48.0474 1.02368 48.2175 1.10542 48.2175 1.3151V2.35638C48.2175 2.50209 48.136 2.56609 47.9482 2.56609H47.8668C46.6413 2.463 45.6854 2.42035 43.918 2.42035C41.988 2.42035 40.2421 3.46166 40.2421 7.21105V10.0045C40.2421 13.4448 41.8005 14.7988 43.7339 14.7988C44.9984 14.7988 45.8588 14.717 46.3474 14.6742V8.71438C46.3431 8.66178 46.3494 8.60881 46.3664 8.55878C46.383 8.50876 46.4099 8.46267 46.4449 8.42342C46.4802 8.38413 46.5229 8.35248 46.5708 8.33042C46.6187 8.30833 46.6703 8.29628 46.7228 8.29502H47.8456C47.9522 8.30051 48.0529 8.34722 48.126 8.42539C48.1994 8.50353 48.2395 8.6071 48.2387 8.71438V15.7156C48.2418 15.8247 48.2054 15.9313 48.1366 16.0156C48.0675 16.0999 47.9703 16.1561 47.8634 16.1741Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M55.9801 6.33666C55.0132 6.29817 54.0452 6.36851 53.0939 6.54633V15.9252C53.099 16.0269 53.0652 16.1266 52.9992 16.2037C52.9333 16.2811 52.8407 16.3303 52.7397 16.3409H51.6596C51.555 16.3354 51.4569 16.2886 51.3864 16.2109C51.3161 16.1329 51.2794 16.0303 51.2843 15.9252V5.79644C51.2903 5.69179 51.3279 5.59142 51.3915 5.50839C51.4555 5.42537 51.5426 5.36351 51.6419 5.33089C52.8246 4.80847 54.2591 4.74805 55.9801 4.74805C56.2527 4.74805 56.4193 4.76936 56.4193 5.06078V6.01681C56.4193 6.2336 56.3769 6.33666 55.9801 6.33666Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M62.8716 16.4866C59.8191 16.4866 58.2679 14.4647 58.2679 11.4011V9.81601C58.2679 6.75254 59.826 4.73389 62.8716 4.73389C65.9172 4.73389 67.4756 6.75254 67.4756 9.81601V11.4011C67.4756 14.4647 65.9066 16.4866 62.8716 16.4866ZM65.6764 9.81601C65.6764 7.68365 64.8231 6.33672 62.8716 6.33672C60.9204 6.33672 60.088 7.67299 60.088 9.81601V11.4011C60.088 13.5333 60.9204 14.8838 62.8716 14.8838C64.8231 14.8838 65.6764 13.5476 65.6764 11.4011V9.81601Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M74.4024 16.4864H74.2043C72.7875 16.4864 69.9263 15.6939 69.9263 11.5892V5.29521C69.9217 5.24218 69.9283 5.18881 69.9455 5.1385C69.9627 5.08816 69.9902 5.04199 70.0263 5.00288C70.0622 4.96379 70.1058 4.93262 70.1545 4.91137C70.2033 4.89011 70.2557 4.87923 70.3085 4.8794H71.3889C71.4411 4.8802 71.493 4.8918 71.5406 4.91348C71.5885 4.93517 71.6312 4.96648 71.6664 5.00548C71.7017 5.04448 71.7284 5.09033 71.7453 5.14016C71.7622 5.19001 71.7685 5.24278 71.7642 5.29521V11.5892C71.7642 14.0771 72.8266 14.8836 74.2149 14.8836H74.4024C75.7908 14.8836 76.8531 14.0911 76.8531 11.5892V5.29521C76.8488 5.24307 76.8551 5.19059 76.8717 5.14099C76.8884 5.09139 76.9147 5.04571 76.9497 5.00676C76.9844 4.96782 77.0268 4.93642 77.0742 4.91454C77.1215 4.89262 77.1728 4.88068 77.225 4.8794H78.3051C78.3575 4.8802 78.4092 4.8918 78.457 4.91348C78.5046 4.93517 78.5476 4.96648 78.5829 5.00548C78.6179 5.04448 78.6448 5.09033 78.6618 5.14016C78.6784 5.19001 78.685 5.24278 78.6804 5.29521V11.5892C78.6804 15.6939 75.812 16.4864 74.4024 16.4864Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M85.7597 16.4868C84.9451 16.4759 84.1328 16.3999 83.3303 16.2593V20.0301C83.3303 20.0821 83.3202 20.1332 83.3004 20.1812C83.2807 20.2289 83.2517 20.2724 83.2153 20.3092C83.1786 20.3458 83.1353 20.3749 83.0877 20.3946C83.0398 20.4143 82.9888 20.4246 82.9372 20.4246H81.8748C81.8241 20.4241 81.7739 20.4135 81.7275 20.3935C81.681 20.3732 81.6392 20.3438 81.6042 20.3069C81.5689 20.2703 81.5417 20.2266 81.5239 20.1792C81.5058 20.1318 81.4975 20.0809 81.4995 20.0301V5.68647C81.4995 5.41639 81.5632 5.29199 81.9351 5.21025C83.1866 4.90572 84.4686 4.74478 85.7563 4.73047C88.8512 4.73047 90.2857 6.74909 90.2857 9.87656V11.3728C90.2892 14.6531 88.791 16.4868 85.7597 16.4868ZM88.4581 9.88011C88.4581 7.69089 87.8173 6.27642 85.7597 6.27642C84.9457 6.28116 84.1334 6.35007 83.3303 6.48256V14.7348C84.1337 14.8671 84.9457 14.9374 85.7597 14.9445C87.7961 14.9445 88.4581 13.6117 88.4581 11.3905V9.88011Z" fill="#B0ACAB" data-v-3eb63d49></path><path data-v-82c499f6="" d="M11.7163 16.3161C10.7813 16.4619 8.17466 16.6467 7.27175 16.6467C3.263 16.6467 0.543091 15.6373 0.543091 10.5838V1.37196C0.543951 1.31859 0.555423 1.26596 0.576928 1.21711C0.598433 1.16828 0.629109 1.1242 0.667817 1.08748C0.706239 1.05074 0.75183 1.02209 0.801434 1.0032C0.851324 0.984315 0.904371 0.975573 0.957416 0.977459H4.3431C4.39615 0.975087 4.44948 0.983487 4.49937 1.0022C4.54926 1.02091 4.59514 1.04951 4.63385 1.08634C4.67227 1.12317 4.70324 1.16745 4.72446 1.21651C4.74567 1.26559 4.75685 1.31845 4.75743 1.37196V10.5838C4.75743 12.4602 5.38078 13.0715 6.85743 13.0715C7.52407 13.0694 8.18986 13.0266 8.85134 12.9436V1.37196C8.85163 1.31845 8.86281 1.26559 8.88403 1.21651C8.90524 1.16745 8.93621 1.12317 8.97492 1.08634C9.01363 1.04951 9.05922 1.02091 9.10911 1.0022C9.159 0.983487 9.21233 0.975087 9.26566 0.977459H12.6298C12.7397 0.972602 12.8466 1.01129 12.9283 1.08508C13.0098 1.15891 13.0591 1.26196 13.0654 1.37196V14.7099C13.0654 15.8756 12.7113 16.1704 11.7163 16.3161Z" fill="#EFEFEF" data-v-3eb63d49></path><path data-v-82c499f6="" d="M19.5853 16.4618H16.1784C16.0694 16.4592 15.9659 16.4138 15.8896 16.3353C15.8137 16.257 15.7709 16.1518 15.7709 16.0427V1.37193C15.7721 1.31918 15.7833 1.26716 15.8042 1.21879C15.8251 1.17042 15.8555 1.12665 15.8934 1.09002C15.9312 1.05339 15.9757 1.02459 16.0247 1.00528C16.0734 0.985966 16.1259 0.976509 16.1784 0.977451H19.5853C19.6383 0.975051 19.6917 0.983452 19.7415 1.00217C19.7914 1.02088 19.8373 1.04951 19.8757 1.08633C19.9144 1.12313 19.9454 1.16742 19.9666 1.2165C19.9878 1.26556 19.999 1.31844 19.9996 1.37193V16.0427C19.9999 16.0975 19.9896 16.1518 19.9689 16.2027C19.9483 16.2535 19.9179 16.2998 19.8795 16.339C19.8407 16.3778 19.7952 16.4087 19.7444 16.4298C19.6939 16.451 19.6398 16.4618 19.5853 16.4618Z" fill="#EFEFEF" data-v-3eb63d49></path><path data-v-82c499f6="" d="M31.6294 16.2734C30.6846 16.5436 29.7043 16.6696 28.7219 16.6465C24.9007 16.6465 22.3262 14.564 22.3262 9.79103V7.65867C22.3262 2.8715 24.9007 0.78891 28.7219 0.78891C29.7043 0.76774 30.684 0.893507 31.6294 1.16207C31.9623 1.26869 32.0864 1.32909 32.0864 1.62054V4.28954C32.0864 4.55962 31.9623 4.68402 31.7323 4.68402H31.6684C30.7032 4.57085 29.7327 4.50917 28.7609 4.49922C27.6384 4.49922 26.636 4.99678 26.636 7.64444V9.7768C26.636 12.4031 27.6347 12.9256 28.7609 12.9256C29.7327 12.9146 30.7032 12.8518 31.6684 12.7372H31.7074C31.9554 12.7372 32.0615 12.8616 32.0615 13.1317V15.8148C32.0864 16.0851 31.9623 16.1702 31.6294 16.2734Z" fill="#EFEFEF" data-v-3eb63d49></path></svg>',2),e1=[Xe];function t1(o,l){return d(),h("a",Je,e1)}const a1=M(Qe,[["render",t1],["__scopeId","data-v-3eb63d49"]]),s1=[{text:"about_us_title",url:"/#about"},{text:"countries",url:"/#country"},{text:"religions",url:"/#religion"},{text:"heritage_map",url:"/map"},{text:"help",url:"/help"}],n1={class:"absolute top-0 left-0 pt-20 pb-6 h-screen w-full bg-dark text-white z-30"},l1={class:"container h-full flex flex-col justify-between overflow-y-auto"},o1={class:"mt-6 space-y-6"},i1={class:"flex items-center justify-between mt-10"},r1={class:"text-white text-sm font-normal leading-130"},c1=k({__name:"Mobile",emits:["handleMenu"],setup(o,{emit:l}){const e=l,t=W(),i=H(()=>t.destinationsSearch),a=E(""),r=async s=>{a.value=s,await t.fetchDestinations(a.value,void 0,void 0)},f=()=>{e("handleMenu")},c=()=>{a.value=""};return(s,g)=>{const n=G,p=A,_=q;return d(),h("div",n1,[u("div",l1,[u("div",null,[v(n,{class:"max-w-full","wrapper-class":"relative left-0 w-full",search:a.value,"search-trigger":!0,"search-content":i.value,onHandleUpdateSearch:r,onClear:c},null,8,["search","search-content"]),u("ul",o1,[(d(!0),h(O,null,L(I(s1),(C,y)=>(d(),h("li",{key:y},[v(p,{onClick:f,to:C==null?void 0:C.url,class:"text-white text-2xl font-bold leading-130"},{default:b(()=>[Z(m(s.$t(C==null?void 0:C.text)),1)]),_:2},1032,["to"])]))),128))]),v(_,{isMobile:"",class:"inline-flex mt-6 border border-solid border-white/[8%] rounded-lg p-2","option-styles":"!grid-cols-2 left-0 !-top-[250px] !p-2"})]),u("div",i1,[u("span",r1," © "+m(new Date().getFullYear())+", "+m(s.$t("naming")),1),v(a1)])])])}}}),d1={class:"bg-red-100 overflow-x-hidden flex-y-center transition-200 py-2"},u1=k({__name:"TestMode",setup(o){return(l,e)=>(d(),h("div",d1))}});const h1=M(u1,[["__scopeId","data-v-abf72e15"]]),g1={class:"lg:py-8 py-4 header-gradient relative z-40"},p1={class:"container flex items-center justify-between"},f1={class:"relative lg:flex items-center space-x-6 hidden"},_1=u("hr",{class:"relative w-0.5 h-5 bg-white/10 border-none rounded-[10px]"},null,-1),C1=u("hr",{class:"relative w-0.5 h-5 bg-white/10 border-none rounded-[10px]"},null,-1),E1=k({__name:"Header",props:{loading:{type:Boolean}},emits:["handleShowMobile"],setup(o,{emit:l}){const e=E(!1),t=W(),i=j(),a=H(()=>t.countryList);H(()=>t.religionListWithDestination);const r=H(()=>i.showMobile),f=E([{title:"about_us_title",url:"/about"},{title:"countries",action:"countries",content:a},{title:"heritage_map",url:"/map"},{title:"help",url:"/help"}]),s=re().y,g=E(!1),n=()=>{e.value=!e.value,i.mobileTrigger(e.value)};return ne(()=>s,p=>{p.value?g.value=!0:g.value=!1},{deep:!0}),(p,_)=>{const C=Q,y=A,S=me,x=q,V=Ge,z=c1;return d(),h("header",{class:w(["fixed top-0 left-0 w-full z-[51] !border-b !border-b-transparent transition-all duration-300",[{"!bg-dark/90 !border-b-white/20":g.value},{"bg-dark":e.value}]])},[v(h1),u("div",g1,[u("div",p1,[v(y,{to:p.localePath("/"),class:"inline-block lg:w-[381px] w-[265px]"},{default:b(()=>[(d(),$(C,{key:p.loading}))]),_:1},8,["to"]),u("div",f1,[v(S,{loading:p.loading,navigations:f.value},null,8,["loading","navigations"]),_1,v(x),C1,v(V)]),u("button",{class:"text-white text-[32px] leading-22 block lg:hidden",onClick:n},[v(B,{name:"fade",mode:"out-in",appear:""},{default:b(()=>[u("span",{class:w(["transition-all duration-300",[e.value&&r.value?"icon-xmark":"icon-menu"]])},null,2)]),_:1})])])]),v(B,{name:"fade",mode:"out-in"},{default:b(()=>[e.value&&r.value?(d(),$(z,{key:0,onHandleMenu:n})):F("",!0)]),_:1})],2)}}});export{a1 as U,E1 as _};
