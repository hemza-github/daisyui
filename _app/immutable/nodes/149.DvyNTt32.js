import{t as u,a as c}from"../chunks/DDEDx2Sc.js";import{p as k,f as C,a as U,s as p,c as s,t as z,g as t,r as a}from"../chunks/BAHzCZOW.js";import{s as _}from"../chunks/B6n-Wx1G.js";import{e as B,i as E}from"../chunks/Bcy5O3es.js";import{j as w,s as i,h as F}from"../chunks/BA0YhVVk.js";import{S as O}from"../chunks/CBWvEiZ3.js";var Y=u('<a class="rounded-box group relative flex flex-col gap-6 overflow-hidden p-2"><figure class="rounded-field grid aspect-video place-content-center overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"><img loading="lazy" class="w-full"></figure> <div class="flex items-center justify-between gap-4"><div class="grow"><h2 class="font-semibold text-xs"> </h2> <p class="text-base-content/60 mt-2 text-[0.6875rem]"> </p></div></div></a>'),$=u('<div class="lg:col-span-2 flex justify-center items-center font-bold text-base-content/20">Coming soon…</div>'),q=u('<!> <div class="flex flex-col items-center gap-6"><h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl xl:text-6xl">daisyUI community videos</h1> <p class="text-base-content/60 text-xs italic">If you have a YouTube video about daisyUI, <a href="https://github.com/saadeghi/daisyui/blob/master/src/docs/src/lib/data/youtube.js" target="_blank" rel="noopener, noreferrer" class="link">add it here</a></p></div> <div class="py-20"><div class="grid gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div></div>',1);function L(S,v){k(v,!0);var f=q(),m=C(f);O(m,{title:"daisyUI community videos",desc:"Best Tailwind CSS video tutorials and Free Tailwind CSS video courses"});var g=p(m,4),h=s(g);B(h,21,()=>v.data.videos,E,(l,e)=>{var r=Y(),o=s(r),d=s(o);a(o);var x=p(o,2),b=s(x),n=s(b),j=s(n,!0);a(n);var y=p(n,2),I=s(y,!0);a(y),a(b),a(x),a(r),z(T=>{i(r,"href",T),i(r,"target",t(e).status.embeddable==!1?"_blank":null),i(r,"rel",t(e).status.embeddable==!1?"noopener noreferrer":null),i(d,"src",t(e).snippet.thumbnails.high.url),i(d,"alt",t(e).snippet.title),_(j,t(e).snippet.title),_(I,t(e).snippet.channelTitle)},[()=>t(e).status.embeddable==!0?`/resources/videos/${w(t(e).snippet.title)}-${w(t(e).id)}`:`https://www.youtube.com/watch?v=${t(e).id}`]),F(d),c(l,r)},l=>{var e=$();c(l,e)}),a(h),a(g),c(S,f),U()}export{L as component};
