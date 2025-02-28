import{t as i,a as t,c as p}from"../chunks/DDEDx2Sc.js";import"../chunks/ZIXVROpa.js";import{s as l,f as o}from"../chunks/BAHzCZOW.js";import{h as r}from"../chunks/PNA3GBkg.js";import{l as g,s as _}from"../chunks/B5HJOU4F.js";import{L as f}from"../chunks/Cwlg3-ds.js";import{C as c}from"../chunks/CFBeSuoH.js";const $={title:"Pagination",desc:"Pagination is a group of buttons that allow the user to navigate between a set of related content.",layout:"components",classnames:{component:[{class:"join",desc:"For grouping multiple items"}],part:[{class:"join-item",desc:"Item inside join. Can be a button, input, etc."}],direction:[{class:"join-vertical",desc:"Show items vertically"},{class:"join-horizontal",desc:"Show items horizontally"}]}},{title:G,desc:H,layout:J,classnames:K}=$;var P=i('<div class="join"><button class="join-item btn">1</button> <button class="join-item btn btn-active">2</button> <button class="join-item btn">3</button> <button class="join-item btn">4</button></div>'),q=i('<div class="flex flex-col gap-2 items-center"><div class="join"><button class="join-item btn btn-xs">1</button> <button class="join-item btn btn-xs btn-active">2</button> <button class="join-item btn btn-xs">3</button> <button class="join-item btn btn-xs">4</button></div> <div class="join"><button class="join-item btn btn-sm">1</button> <button class="join-item btn btn-sm btn-active">2</button> <button class="join-item btn btn-sm">3</button> <button class="join-item btn btn-sm">4</button></div> <div class="join"><button class="join-item btn btn-md">1</button> <button class="join-item btn btn-md btn-active">2</button> <button class="join-item btn btn-md">3</button> <button class="join-item btn btn-md">4</button></div> <div class="join"><button class="join-item btn btn-lg">1</button> <button class="join-item btn btn-lg btn-active">2</button> <button class="join-item btn btn-lg">3</button> <button class="join-item btn btn-lg">4</button></div> <div class="join"><button class="join-item btn btn-xl">1</button> <button class="join-item btn btn-xl btn-active">2</button> <button class="join-item btn btn-xl">3</button> <button class="join-item btn btn-xl">4</button></div></div>'),w=i('<div class="join"><button class="join-item btn">1</button> <button class="join-item btn">2</button> <button class="join-item btn btn-disabled">...</button> <button class="join-item btn">99</button> <button class="join-item btn">100</button></div>'),z=i('<div class="join"><button class="join-item btn">«</button> <button class="join-item btn">Page 22</button> <button class="join-item btn">»</button></div>'),N=i('<div class="join grid grid-cols-2"><button class="join-item btn btn-outline">Previous page</button> <button class="join-item btn btn-outline">Next</button></div>'),S=i('<div class="join"><input class="join-item btn btn-square" type="radio" name="options" aria-label="1" checked="checked"> <input class="join-item btn btn-square" type="radio" name="options" aria-label="2"> <input class="join-item btn btn-square" type="radio" name="options" aria-label="3"> <input class="join-item btn btn-square" type="radio" name="options" aria-label="4"></div>'),F=i('<blockquote class="alert not-italic items-start text-xs leading-loose *:m-0!"><p>For pagination, we use <a href="/components/join">join component</a> to show multiple links or buttons next to each other.</p></blockquote> <!> <!> <!> <!> <!> <!>',1);function M(m,d){const x=g(d,["children","$$slots","$$events","$$legacy"]);f(m,_(()=>x,$,{children:(j,L)=>{var u=F(),v=l(o(u),2);c(v,{title:"Pagination with an active button",desc:"",html:s=>{var a=p(),n=o(a);r(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">1</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-active</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">2</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">3</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">4</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(s,a)},children:(s,a)=>{var n=P();t(s,n)},$$slots:{html:!0,default:!0}});var h=l(v,2);c(h,{title:"Sizes",desc:"",html:s=>{var a=p(),n=o(a);r(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-xs</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">1</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-xs $$btn-active</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">2</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-xs</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">3</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-xs</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">4</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-sm</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">1</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-sm $$btn-active</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">2</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-sm</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">3</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-sm</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">4</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-md</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">1</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-md $$btn-active</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">2</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-md</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">3</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-md</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">4</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-lg</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">1</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-lg $$btn-active</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">2</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-lg</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">3</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-lg</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">4</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-xl</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">1</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-xl $$btn-active</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">2</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-xl</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">3</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-xl</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">4</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(s,a)},children:(s,a)=>{var n=q();t(s,n)},$$slots:{html:!0,default:!0}});var k=l(h,2);c(k,{title:"With a disabled button",desc:"",html:s=>{var a=p(),n=o(a);r(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">1</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">2</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-disabled</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">...</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">99</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">100</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(s,a)},children:(s,a)=>{var n=w();t(s,n)},$$slots:{html:!0,default:!0}});var y=l(k,2);c(y,{title:"Extra small buttons",desc:"",html:s=>{var a=p(),n=o(a);r(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">«</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Page 22</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">»</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(s,a)},children:(s,a)=>{var n=z();t(s,n)},$$slots:{html:!0,default:!0}});var b=l(y,2);c(b,{title:"Nex/Prev outline buttons with equal width",desc:"",html:s=>{var a=p(),n=o(a);r(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join grid grid-cols-2</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-outline</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Previous page</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;button</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-outline</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span><span style="color:var(--shiki-token)">Next</span><span style="color:var(--shiki-punctuation)">&#x3C;/button></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(s,a)},children:(s,a)=>{var n=N();t(s,n)},$$slots:{html:!0,default:!0}});var C=l(b,2);c(C,{title:"Using radio inputs",desc:"",html:s=>{var a=p(),n=o(a);r(n,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;div</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;input</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">    class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-square</span><span style="color:var(--shiki-punctuation)">"</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">    type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">radio</span><span style="color:var(--shiki-punctuation)">"</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">    name</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">options</span><span style="color:var(--shiki-punctuation)">"</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">    aria-label</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">1</span><span style="color:var(--shiki-punctuation)">"</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">    checked</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">checked</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;input</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-square</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">radio</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> name</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">options</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> aria-label</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">2</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;input</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-square</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">radio</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> name</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">options</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> aria-label</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">3</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">  &#x3C;input</span><span style="color:var(--shiki-attr-name)"> class</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">$$join-item $$btn $$btn-square</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">radio</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> name</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">options</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> aria-label</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">4</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /></span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&#x3C;/div></span></span></code></pre>`),t(s,a)},children:(s,a)=>{var n=S();t(s,n)},$$slots:{html:!0,default:!0}}),t(j,u)},$$slots:{default:!0}}))}export{M as component};
