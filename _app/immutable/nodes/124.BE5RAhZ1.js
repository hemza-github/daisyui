import{t as x,a as F}from"../chunks/DDEDx2Sc.js";import"../chunks/ZIXVROpa.js";import{s as a,f as C,c as s,r as n,b as A}from"../chunks/BAHzCZOW.js";import{h as t}from"../chunks/PNA3GBkg.js";import{l as D,s as V}from"../chunks/B5HJOU4F.js";import{L as H}from"../chunks/Cxz0bTiX.js";const v={title:"Install daisyUI for Laravel",desc:"How to install Tailwind CSS and daisyUI in a Laravel project"},{title:Z,desc:U}=v;var _=x(`<h3 id="1-create-a-new-laravel-project"><a aria-hidden="true" tabindex="-1" href="#1-create-a-new-laravel-project"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>1. Create a new Laravel project</h3> <p>Install PHP, Composer and Laravel Installer according to the <a href="https://laravel.com/docs/11.x/installation#creating-a-laravel-project" rel="nofollow" target="_blank">official Laravel documentation</a></p> <p>Create a new Laravel project</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <h3 id="2-install-tailwind-css-and-daisyui"><a aria-hidden="true" tabindex="-1" href="#2-install-tailwind-css-and-daisyui"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>2. Install Tailwind CSS and daisyUI</h3> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p>Add Tailwind CSS to Vite config</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">vite.config.js</div><!></div> <p>Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)
Add the template files you want as source. <a href="https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources" rel="nofollow" target="_blank">Learn more about Tailwind CSS <code>@source</code> directive</a>.</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">resources/css/app.css</div><!></div> <h3 id="3-run-your-project"><a aria-hidden="true" tabindex="-1" href="#3-run-your-project"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>3. Run your project</h3> <p>Run your Laravel project</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p>And on another terminal tab, run Vite</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p>Now you can use daisyUI class names!</p>`,1);function z(d,h){const u=D(h,["children","$$slots","$$events","$$legacy"]);H(d,V(()=>u,v,{children:(y,B)=>{var p=_(),o=a(C(p),6),m=a(s(o));t(m,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">laravel</span><span style="color:var(--shiki-attr-value)"> new</span><span style="color:var(--shiki-attr-value)"> my-app</span></span>
<span class="line"><span style="color:#0DB9D7">cd</span><span style="color:var(--shiki-attr-value)"> my-app</span></span></code></pre>`),n(o);var e=a(o,4),k=a(s(e));t(k,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> install</span><span style="color:var(--shiki-attr-value)"> tailwindcss@latest</span><span style="color:var(--shiki-attr-value)"> @tailwindcss/vite@latest</span><span style="color:var(--shiki-attr-value)"> daisyui@latest</span></span></code></pre>'),n(e);var i=a(e,4),g=a(s(i));t(g,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#7DCFFF">import</span><span style="color:#9ABDF5"> &#123; </span><span style="color:#0DB9D7">defineConfig</span><span style="color:#9ABDF5"> &#125;</span><span style="color:#7DCFFF"> from</span><span style="color:var(--shiki-punctuation)"> '</span><span style="color:var(--shiki-attr-value)">vite</span><span style="color:var(--shiki-punctuation)">'</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#7DCFFF">import</span><span style="color:#0DB9D7"> tailwindcss</span><span style="color:#7DCFFF"> from</span><span style="color:var(--shiki-punctuation)"> '</span><span style="color:var(--shiki-attr-value)">@tailwindcss/vite</span><span style="color:var(--shiki-punctuation)">'</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#7DCFFF">import</span><span style="color:#0DB9D7"> laravel</span><span style="color:#7DCFFF"> from</span><span style="color:var(--shiki-punctuation)"> '</span><span style="color:var(--shiki-attr-value)">laravel-vite-plugin</span><span style="color:var(--shiki-punctuation)">'</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7DCFFF">export</span><span style="color:#7DCFFF"> default</span><span style="color:#7AA2F7"> defineConfig</span><span style="color:#9ABDF5">(&#123;</span></span>
<span class="line"><span style="color:#73DACA">    plugins</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#9ABDF5">[</span></span>
<span class="line"><span style="color:#7AA2F7">        tailwindcss</span><span style="color:#9ABDF5">()</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#7AA2F7">        laravel</span><span style="color:#9ABDF5">(&#123;</span></span>
<span class="line"><span style="color:#73DACA">            input</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#9ABDF5">[</span><span style="color:var(--shiki-punctuation)">'</span><span style="color:var(--shiki-attr-value)">resources/css/app.css</span><span style="color:var(--shiki-punctuation)">'</span><span style="color:var(--shiki-punctuation)">, </span><span style="color:var(--shiki-punctuation)">'</span><span style="color:var(--shiki-attr-value)">resources/js/app.js</span><span style="color:var(--shiki-punctuation)">'</span><span style="color:#9ABDF5">]</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#73DACA">            refresh</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#FF9E64">true</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#9ABDF5">        &#125;)</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#9ABDF5">    ]</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#9ABDF5">&#125;)</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),n(i);var r=a(i,4),b=a(s(r));t(b,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@source </span><span style="color:var(--shiki-attr-value)">"../views"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin </span><span style="color:var(--shiki-attr-value)">"daisyui"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),n(r);var l=a(r,6),w=a(s(l));t(w,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">php</span><span style="color:var(--shiki-attr-value)"> artisan</span><span style="color:var(--shiki-attr-value)"> serve</span></span></code></pre>'),n(l);var c=a(l,4),f=a(s(c));t(f,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> run</span><span style="color:var(--shiki-attr-value)"> dev</span></span></code></pre>'),n(c),A(2),F(y,p)},$$slots:{default:!0}}))}export{z as component};
