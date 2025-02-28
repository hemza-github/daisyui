import{t as $,a as I}from"../chunks/DDEDx2Sc.js";import"../chunks/ZIXVROpa.js";import{p as X,a as aa,c as n,s as a,r as s,b as M,t as sa,g as D,f as wa}from"../chunks/BAHzCZOW.js";import{s as q}from"../chunks/B6n-Wx1G.js";import{h as e}from"../chunks/PNA3GBkg.js";import{i as _a}from"../chunks/8IrbCJBk.js";import{l as Ha,p as Va,s as Aa}from"../chunks/B5HJOU4F.js";import{L as Fa}from"../chunks/Cxz0bTiX.js";import{e as Ea,i as Ca}from"../chunks/Bcy5O3es.js";import{s as W}from"../chunks/BA0YhVVk.js";import{o as Ba}from"../chunks/azuKD6E8.js";import{t as za}from"../chunks/CDCYwW2f.js";import{T as t}from"../chunks/XW6xbX-8.js";var Za=$('<div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent" data-act-class="outline-base-content!"><div class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div> <div class="bg-base-300 col-start-1 row-start-3"></div> <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2"><div class="font-bold"> </div> <div class="flex flex-wrap gap-1"><div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-primary-content text-sm font-bold">A</div></div> <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-secondary-content text-sm font-bold">A</div></div> <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-accent-content text-sm font-bold">A</div></div> <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-neutral-content text-sm font-bold">A</div></div></div></div></div></div></div>'),Ta=$('<div class=" rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"></div>');function Da(u,o){X(o,!0),Ba(()=>{za.themeChange(!1)});var p=Ta();Ea(p,21,()=>o.themes,Ca,(c,h)=>{var d=Za(),i=n(d),l=n(i),v=a(n(l),4),r=n(v),y=n(r,!0);s(r),M(2),s(v),s(l),s(i),s(d),sa(()=>{W(d,"data-set-theme",D(h)),W(i,"data-theme",D(h)),q(y,D(h))}),I(c,d)}),s(p),I(u,p),aa()}const na={title:"daisyUI themes",desc:"How to use daisyUI themes?"},{title:Oa,desc:Qa}=na;var Ia=$('<p> <br> You can also create your own custom themes or customize built-in themes.</p> <p>You can manage themes by adding brackets in front of <code>@plugin "daisyui"</code> in your CSS file.</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <p><code>themes</code> is a comma-separated list of theme names you want to enable.<br> You can set <code>--default</code> flag for a theme to make it the default theme.<br> You can also set <code>--prefersdark</code> flag for a theme to make it the default theme for dark mode (prefers-color-scheme: dark).</p> <h2 id="enable-a-built-in-theme"><a aria-hidden="true" tabindex="-1" href="#enable-a-built-in-theme"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>Enable a built-in theme</h2> <p>By default, <code>light</code> and <code>dark</code> themes are enabled. Let’s enable <code>cupcake</code> theme:</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <p>And set <code>cupcake</code> theme for the page:</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">index.html</div><!></div> <blockquote class="alert not-italic items-start text-xs leading-loose *:m-0!"><p><svg class="size-4 ms-2 inline-block text-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" stroke-width="2"></circle></g></svg> <span><!></span></p></blockquote> <h2 id=""><!></h2> <!> <!> <h2 id="enable-all-themes"><a aria-hidden="true" tabindex="-1" href="#enable-all-themes"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>Enable all themes</h2> <p> <code>themes</code> to <code>all</code>:</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <h2 id="disable-a-theme"><a aria-hidden="true" tabindex="-1" href="#disable-a-theme"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>Disable a theme</h2> <p>To disable <code>dark</code> theme for example, remove it from the list. Now only light theme is included:</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <p>If for some reason you want to disable all themes and remove all daisyUI colors, set <code>themes</code> to <code>false</code>:</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <h2 id="-1"><a aria-hidden="true" tabindex="-1" href="#-1"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><!></h2> <!> <!> <!> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">index.html</div><!></div> <h2 id="-2"><a aria-hidden="true" tabindex="-1" href="#-2"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><!></h2> <p>To add a new theme, use <code>@plugin "daisyui/theme" &#123;&#125;</code> in your CSS file, with the following structure:</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <h2 id="-3"><a aria-hidden="true" tabindex="-1" href="#-3"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><!></h2> <p>To customize a built-in theme, you can use the same structure as adding a new theme, but with the same name as the built-in theme. For example, to customize the <code>light</code> theme:</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <p>All the other values will be inherited from the original theme.</p> <h2 id="-4"><a aria-hidden="true" tabindex="-1" href="#-4"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><!></h2> <!> <!> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <h2 id="-5"><a aria-hidden="true" tabindex="-1" href="#-5"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><!></h2> <!> <!> <!> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">app.css</div><!></div> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">index.html</div><!></div>',1);function Ra(u,o){const p=Ha(o,["children","$$slots","$$events","$$legacy"]);X(o,!1);let c=Va(o,"data",8);_a(),Fa(u,Aa(()=>p,na,{children:(h,d)=>{var i=Ia(),l=wa(i),v=n(l);M(2),s(l);var r=a(l,4),y=a(n(r));e(y,()=>`<pre class="shiki-diff shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span class="shiki-punctuation" style="color:var(--shiki-punctuation)">  @import "tailwindcss";</span></span>
<span class="line"><span class="select-none" style="color:var(--shiki-punctuation)">-</span><span class="shiki-deleted" style="color:var(--shiki-deleted)"> @plugin "daisyui";</span></span>
<span class="line"><span class="select-none" style="color:var(--shiki-punctuation)">+</span><span class="shiki-added" style="color:var(--shiki-added)"> @plugin "daisyui" &#123;</span></span>
<span class="line"><span class="select-none" style="color:var(--shiki-punctuation)">+</span><span class="shiki-added" style="color:var(--shiki-added)">   themes: light --default, dark --prefersdark;</span></span>
<span class="line"><span class="select-none" style="color:var(--shiki-punctuation)">+</span><span class="shiki-added" style="color:var(--shiki-added)"> &#125;</span></span></code></pre>`),s(r);var m=a(r,8),ta=a(n(m));e(ta,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">tailwindcss</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin</span><span style="color:var(--shiki-punctuation)"> "daisyui" </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  themes: light --default, dark --prefersdark, cupcake;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#125;</span></span></code></pre>`),s(m);var k=a(m,4),ea=a(n(k));e(ea,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;html</span><span style="color:var(--shiki-attr-name)"> data-theme</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">cupcake</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">>&#x3C;/html></span></span></code></pre>'),s(k);var g=a(k,2),U=n(g),Y=a(n(U),2),oa=n(Y);t(oa,{text:"I suggest using <a href='https://github.com/saadeghi/theme-change'>theme-change</a>, so you can switch themes and save selected theme in local storage."}),s(Y),s(U),s(g);var b=a(g,2),ia=n(b);t(ia,{text:"List of themes"}),s(b);var j=a(b,2);t(j,{text:"Try them:"});var L=a(j,2);Da(L,{get themes(){return c().themes}});var f=a(L,4),la=n(f);M(4),s(f);var x=a(f,2),ra=a(n(x));e(ra,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">tailwindcss</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin</span><span style="color:var(--shiki-punctuation)"> "daisyui" </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  themes: all;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#125;</span></span></code></pre>`),s(x);var w=a(x,6),pa=a(n(w));e(pa,()=>`<pre class="shiki-diff shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span class="shiki-punctuation" style="color:var(--shiki-punctuation)"> @import "tailwindcss";</span></span>
<span class="line"><span class="shiki-punctuation" style="color:var(--shiki-punctuation)"> @plugin "daisyui" &#123;</span></span>
<span class="line"><span class="select-none" style="color:var(--shiki-punctuation)">-</span><span class="shiki-deleted" style="color:var(--shiki-deleted)">  themes: light --default, dark --prefersdark;</span></span>
<span class="line"><span class="select-none" style="color:var(--shiki-punctuation)">+</span><span class="shiki-added" style="color:var(--shiki-added)">  themes: light --default;</span></span>
<span class="line"><span class="shiki-punctuation" style="color:var(--shiki-punctuation)"> &#125;</span></span></code></pre>`),s(w);var _=a(w,4),ca=a(n(_));e(ca,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">tailwindcss</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin</span><span style="color:var(--shiki-punctuation)"> "daisyui" </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  themes: false;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#125;</span></span></code></pre>`),s(_);var H=a(_,2),ha=a(n(H));t(ha,{text:"How to use a theme only for a section of a page?"}),s(H);var S=a(H,2);t(S,{text:"Add <code>data-theme='THEME_NAME'</code> to any element and everything inside will have your theme."});var N=a(S,2);t(N,{text:"You can nest themes and there is no limit!"});var P=a(N,2);t(P,{text:"You can force a section of your HTML to only use a specific theme."});var V=a(P,2),da=a(n(V));e(da,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;html</span><span style="color:var(--shiki-attr-name)"> data-theme</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">dark</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;div</span><span style="color:var(--shiki-attr-name)"> data-theme</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">light</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-token)">    This div will always use light theme</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">    &#x3C;span</span><span style="color:var(--shiki-attr-name)"> data-theme</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">retro</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">This span will always use retro theme!</span><span style="color:var(--shiki-punctuation)">&#x3C;/span></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;/div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/html></span></span></code></pre>`),s(V);var A=a(V,2),va=a(n(A));t(va,{text:"How to add a new custom theme?"}),s(A);var F=a(A,4),ua=a(n(F));e(ua,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">tailwindcss</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin</span><span style="color:var(--shiki-punctuation)"> "daisyui";</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin</span><span style="color:var(--shiki-punctuation)"> "daisyui/theme" </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  name: "mytheme";</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  default: true; </span><span style="color:var(--shiki-comment);font-style:italic">/* set as default */</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  prefersdark: false; </span><span style="color:var(--shiki-comment);font-style:italic">/* set as default dark mode (prefers-color-scheme:dark) */</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  color-scheme: light; </span><span style="color:var(--shiki-comment);font-style:italic">/* color of browser-provided UI */</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-base-100: oklch(98% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">02</span><span style="color:var(--shiki-punctuation)"> 240);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-base-200: oklch(95% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">03</span><span style="color:var(--shiki-punctuation)"> 240);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-base-300: oklch(92% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">04</span><span style="color:var(--shiki-punctuation)"> 240);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-base-content: oklch(20% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">05</span><span style="color:var(--shiki-punctuation)"> 240);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-primary: oklch(55% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">3</span><span style="color:var(--shiki-punctuation)"> 240);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-primary-content: oklch(98% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">01</span><span style="color:var(--shiki-punctuation)"> 240);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-secondary: oklch(70% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">25</span><span style="color:var(--shiki-punctuation)"> 200);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-secondary-content: oklch(98% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">01</span><span style="color:var(--shiki-punctuation)"> 200);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-accent: oklch(65% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">25</span><span style="color:var(--shiki-punctuation)"> 160);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-accent-content: oklch(98% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">01</span><span style="color:var(--shiki-punctuation)"> 160);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-neutral: oklch(50% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">05</span><span style="color:var(--shiki-punctuation)"> 240);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-neutral-content: oklch(98% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">01</span><span style="color:var(--shiki-punctuation)"> 240);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-info: oklch(70% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">2</span><span style="color:var(--shiki-punctuation)"> 220);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-info-content: oklch(98% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">01</span><span style="color:var(--shiki-punctuation)"> 220);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-success: oklch(65% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">25</span><span style="color:var(--shiki-punctuation)"> 140);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-success-content: oklch(98% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">01</span><span style="color:var(--shiki-punctuation)"> 140);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-warning: oklch(80% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">25</span><span style="color:var(--shiki-punctuation)"> 80);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-warning-content: oklch(20% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">05</span><span style="color:var(--shiki-punctuation)"> 80);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-error: oklch(65% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">3</span><span style="color:var(--shiki-punctuation)"> 30);</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-error-content: oklch(98% 0</span><span style="color:#E0AF68">.</span><span style="color:var(--shiki-attr-value)">01</span><span style="color:var(--shiki-punctuation)"> 30);</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-comment);font-style:italic">  /* border radius */</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --radius-selector: 1rem;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --radius-field: 0.25rem;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --radius-box: 0.5rem;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-comment);font-style:italic">  /* base sizes */</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --size-selector: 0.25rem;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --size-field: 0.25rem;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-comment);font-style:italic">  /* border size */</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --border: 1px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-comment);font-style:italic">  /* effects */</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --depth: 1;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --noise: 0;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#125;</span></span></code></pre>`),s(F);var E=a(F,2),ya=a(n(E));t(ya,{text:"How to customize an existing theme?"}),s(E);var C=a(E,4),ma=a(n(C));e(ma,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">tailwindcss</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin</span><span style="color:var(--shiki-punctuation)"> "daisyui";</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin</span><span style="color:var(--shiki-punctuation)"> "daisyui/theme" </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  name: "light";</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  default: true;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-primary: blue;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  --color-secondary: teal;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#125;</span></span></code></pre>`),s(C);var B=a(C,4),ka=a(n(B));t(ka,{text:"How to add custom styles for a specific theme?"}),s(B);var G=a(B,2);t(G,{text:"You can write custom style for your elements only for a specific theme."});var J=a(G,2);t(J,{text:"In this example, .my-btn class only will have this style on light theme."});var z=a(J,2),ga=a(n(z));e(ga,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">[</span><span style="color:var(--shiki-attr-name)">data-theme</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">light</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">] </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:#9ABDF5">  .my-btn &#123;</span></span>
<span class="line"><span style="color:#7AA2F7">    background-color</span><span style="color:var(--shiki-punctuation)">:</span><span style="color:var(--shiki-token)"> #1EA1F1</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#7AA2F7">    border-color</span><span style="color:var(--shiki-punctuation)">:</span><span style="color:var(--shiki-token)"> #1EA1F1</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#9ABDF5">  &#125;</span></span>
<span class="line"><span style="color:#E0AF68">  .</span><span style="color:var(--shiki-attr-value)">my-btn</span><span style="color:#E0AF68">:</span><span style="color:var(--shiki-attr-name)">hover</span><span style="color:#9ABDF5"> &#123;</span></span>
<span class="line"><span style="color:#7AA2F7">    background-color</span><span style="color:var(--shiki-punctuation)">:</span><span style="color:var(--shiki-token)"> #1C96E1</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#7AA2F7">    border-color</span><span style="color:var(--shiki-punctuation)">:</span><span style="color:var(--shiki-token)"> #1C96E1</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#9ABDF5">  &#125;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#125;</span></span></code></pre>`),s(z);var Z=a(z,2),ba=a(n(Z));t(ba,{text:"How to apply Tailwind's 'dark:' selector for specific themes"}),s(Z);var K=a(Z,2);t(K,{text:"daisyUI can be configured to use Tailwind's `dark:` prefix"});var O=a(K,2);t(O,{text:"For example if you want a padding only for a daisyUI dark theme you can use `dark:p-10`"});var Q=a(O,2);t(Q,{text:"In the example below, 'night' is darkmode theme so we add it to `@variant dark`"});var T=a(Q,2),fa=a(n(T));e(fa,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">tailwindcss</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin</span><span style="color:var(--shiki-punctuation)"> "daisyui" </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  themes: winter --default, night --prefersdark;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@custom-variant</span><span style="color:var(--shiki-punctuation)"> dark (&#x26;:where([data-theme=night], [data-theme=night] *));</span></span></code></pre>`),s(T);var R=a(T,2),xa=a(n(R));e(xa,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">p-10 dark:p-20</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-token)">  I will have 10 padding on winter theme and 20 padding on night theme</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),s(R),sa(()=>{q(v,`daisyUI comes with ${c().themes.length??""} built-in themes that instantly transform your website’s entire look - a time-saver that lets you focus on building rather than deciding on colors.`),q(la,`Enable all ${c().themes.length??""} built-in themes by setting `)}),I(h,i)},$$slots:{default:!0}})),aa()}export{Ra as component};
