<<<<<<<< HEAD:_nuxt/news.88b4334f.js
import{V as a}from"./entry.e1b59000.js";import{$ as o}from"./useFetcher.72e389f6.js";const u=a("newsStre",{state:()=>({newsList:[],newsLoading:!1,newsCount:0}),actions:{fetchNewsList(t=0,e=12){return this.newsLoading=!0,new Promise((n,i)=>{o.$get("/news/NewsList",{params:{offset:t,limit:e}}).then(s=>{this.newsCount=s.count,this.newsList=s.results,n(s)}).catch(s=>{i(s)}).finally(()=>{this.newsLoading=!1})})}},getters:{}});export{u};
========
import{V as a}from"./entry.cf20d4e6.js";import{$ as o}from"./useFetcher.12c76293.js";const u=a("newsStre",{state:()=>({newsList:[],newsLoading:!1,newsCount:0}),actions:{fetchNewsList(t=0,e=12){return this.newsLoading=!0,new Promise((n,i)=>{o.$get("/news/NewsList",{params:{offset:t,limit:e}}).then(s=>{this.newsCount=s.count,this.newsList=s.results,n(s)}).catch(s=>{i(s)}).finally(()=>{this.newsLoading=!1})})}},getters:{}});export{u};
>>>>>>>> ec4950c (fix):_nuxt/news.1a296ff9.js
