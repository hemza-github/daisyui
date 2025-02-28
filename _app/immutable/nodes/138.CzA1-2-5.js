import{t as d,a as c}from"../chunks/DDEDx2Sc.js";import"../chunks/ZIXVROpa.js";import{s as a,f as h,c as p,r as m,b as g}from"../chunks/BAHzCZOW.js";import{h as u}from"../chunks/PNA3GBkg.js";import{l as b,s as v}from"../chunks/B5HJOU4F.js";import{L as w}from"../chunks/Cxz0bTiX.js";const t={title:"Install daisyUI for WordPress",desc:"How to install Tailwind CSS and daisyUI in a WordPress project"},{title:I,desc:_}=t;var y=d(`<h3 id="1-create-a-new-wordpress-project"><a aria-hidden="true" tabindex="-1" href="#1-create-a-new-wordpress-project"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>1. Create a new WordPress project</h3> <p>Install WordPress according to the <a href="https://wordpress.org/download/" rel="nofollow" target="_blank">Official WordPress guide</a>.</p> <h3 id="2-install-the-windpress-plugin"><a aria-hidden="true" tabindex="-1" href="#2-install-the-windpress-plugin"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>2. Install the WindPress plugin</h3> <p>In this guide, we will use the <a href="https://wind.press" rel="nofollow" target="_blank">WindPress</a> plugin to install Tailwind CSS and daisyUI in a WordPress project.</p> <p>Navigate to the <code>Plugins → Add New Plugin</code> sub-menu.</p> <img class="mx-auto rounded-box" src="http://img.daisyui.com/images/docs/install/windpress/screenshot-1.webp" alt="WordPress Plugins Add New screen"> <p>Search for the WordPress plugin by typing <code>WindPress</code> in the search bar.</p> <img class="mx-auto rounded-box" src="http://img.daisyui.com/images/docs/install/windpress/screenshot-2.webp" alt="WordPress Plugins search bar"> <p>Click the <code>Install Now</code> button to install the WordPress plugin.</p> <img class="mx-auto rounded-box" src="http://img.daisyui.com/images/docs/install/windpress/screenshot-3.webp" alt="WordPress Plugins result screen"> <p>Once the plugin is installed, click the <code>Activate</code> button to activate the WindPress plugin.</p> <img class="mx-auto rounded-box" src="http://img.daisyui.com/images/docs/install/windpress/screenshot-4.webp" alt="Activate the WordPress plugin"> <h3 id="3-install-daisyui"><a aria-hidden="true" tabindex="-1" href="#3-install-daisyui"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a>3. Install daisyUI</h3> <p>Navigate to the WindPress dashboard by clicking the <code>WindPress</code> menu item in the WordPress admin sidebar.
Then, click the <code>main.css</code> file on the explorer sidebar to open the file editor.</p> <img class="mx-auto rounded-box" src="http://img.daisyui.com/images/docs/install/windpress/screenshot-5.webp" alt="WindPress dashboard"> <p>Add daisyUI at the end of code in the <code>main.css</code> file</p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">main.css</div><!></div> <p>Now you can use daisyUI class names!</p>`,1);function $(r,o){const i=b(o,["children","$$slots","$$events","$$legacy"]);w(r,v(()=>i,t,{children:(n,f)=>{var e=y(),s=a(h(e),32),l=a(p(s));u(l,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@plugin </span><span style="color:var(--shiki-attr-value)">"https://esm.run/daisyui@latest"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>'),m(s),g(2),c(n,e)},$$slots:{default:!0}}))}export{$ as component};
