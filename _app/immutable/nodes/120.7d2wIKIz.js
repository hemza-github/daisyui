import{t as f,a as w}from"../chunks/DDEDx2Sc.js";import"../chunks/ZIXVROpa.js";import{s as a,f as x,c as s,r as t,b as F}from"../chunks/BAHzCZOW.js";import{h as o}from"../chunks/PNA3GBkg.js";import{l as C,s as A}from"../chunks/B5HJOU4F.js";import{L as D}from"../chunks/Cxz0bTiX.js";const c={title:"Install daisyUI for Astro",desc:"How to install Tailwind CSS and daisyUI in a Astro project"},{title:T,desc:U}=c;var _=f('<h3 id="1-create-a-new-astro-project"><a aria-hidden="true" tabindex="-1" href="#1-create-a-new-astro-project"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>1. Create a new Astro project</h3> <p>Create a new Astro project in the current directory</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <h3 id="2-install-tailwind-css-and-daisyui"><a aria-hidden="true" tabindex="-1" href="#2-install-tailwind-css-and-daisyui"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>2. Install Tailwind CSS and daisyUI</h3> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p>Add Tailwind CSS to Astro config</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">astro.config.mjs</div><!></div> <p>Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">src/assets/app.css</div><!></div> <p>Import the CSS file on top of your astro Layout file</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">src/layouts/Layout.astro</div><!></div> <p>Now you can use daisyUI class names!</p>',1);function L(d,v){const h=C(v,["children","$$slots","$$events","$$legacy"]);D(d,A(()=>h,c,{children:(y,V)=>{var l=_(),n=a(x(l),4),u=a(s(n));o(u,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> create</span><span style="color:var(--shiki-attr-value)"> astro@latest</span><span style="color:var(--shiki-attr-value)"> ./</span></span></code></pre>'),t(n);var i=a(n,4),m=a(s(i));o(m,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> install</span><span style="color:var(--shiki-attr-value)"> tailwindcss@latest</span><span style="color:var(--shiki-attr-value)"> @tailwindcss/vite@latest</span><span style="color:var(--shiki-attr-value)"> daisyui@latest</span></span></code></pre>'),t(i);var e=a(i,4),k=a(s(e));o(k,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-comment);font-style:italic">// @ts-check</span></span>
<span class="line"><span style="color:#7DCFFF">import</span><span style="color:#9ABDF5"> &#123; </span><span style="color:#0DB9D7">defineConfig</span><span style="color:#9ABDF5"> &#125;</span><span style="color:#7DCFFF"> from</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">astro/config</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#7DCFFF">import</span><span style="color:#0DB9D7"> tailwindcss</span><span style="color:#7DCFFF"> from</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">@tailwindcss/vite</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7DCFFF">export</span><span style="color:#7DCFFF"> default</span><span style="color:#7AA2F7"> defineConfig</span><span style="color:#9ABDF5">(&#123;</span></span>
<span class="line"><span style="color:#73DACA">  vite</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:#73DACA">    plugins</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#9ABDF5">[</span><span style="color:#7AA2F7">tailwindcss</span><span style="color:#9ABDF5">()]</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#9ABDF5">  &#125;</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#9ABDF5">&#125;)</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),t(e);var r=a(e,4),g=a(s(r));o(g,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin </span><span style="color:var(--shiki-attr-value)">"daisyui"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),t(r);var p=a(r,4),b=a(s(p));o(b,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">---</span></span>
<span class="line"><span style="color:#7DCFFF">import</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">../assets/app.css</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">---</span></span></code></pre>`),t(p),F(2),w(y,l)},$$slots:{default:!0}}))}export{L as component};
