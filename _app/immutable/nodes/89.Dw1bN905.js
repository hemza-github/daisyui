import{e as n,a as t,f as r,t as c}from"../chunks/disclose-version.BlBAdxPG.js";import{l as p,s as h}from"../chunks/props.CsqvDH4B.js";import{M as m}from"../chunks/mdsvex-blog.1XhoSH3y.js";var b=c('<p>For years, making a bidirectional website was a pain. We had to make a LTR style first, then we had to override all the directional styles to make it RTL. But with the introduction of CSS logical properties, it’s now easier than ever to make a bidirectional website.</p> <h2 id="css-logical-properties"><a aria-hidden="true" tabindex="-1" href="#css-logical-properties"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>CSS Logical Properties</h2> <p><a href="https://web.dev/learn/css/logical-properties" rel="nofollow" target="_blank">CSS logical properties</a> are a set of properties that are used to define the logical direction of the content, rather than the physical direction.</p> <p>To use CSS logical properties, you just need to replace directional properties with logical properties. For example, instead of using <code>margin-left</code>, you can use <code>margin-inline-start</code>. This way, the margin will be on the start side of the content, regardless of the direction of the content.</p> <h2 id="its-even-easier-with-tailwind-css-and-daisyui"><a aria-hidden="true" tabindex="-1" href="#its-even-easier-with-tailwind-css-and-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>It’s even easier with Tailwind CSS and daisyUI</h2> <p><a href="https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties" rel="nofollow" target="_blank">Tailwind CSS (3.3+) already supports CSS logical properties</a>. This means that you can use logical properties in your Tailwind CSS classes.</p> <p>And <a href="https://github.com/saadeghi/daisyui/discussions/2507" rel="nofollow" target="_blank">daisyUI 4</a> fully adapts to the logical properties and makes it even easier to make a bidirectional website.</p> <p>All daisyUI components are now bidirectional by default. It means we don’t use <code>left</code> or <code>right</code> anymore, we use <code>start</code> and <code>end</code> instead and it will automatically adapt to the direction of the content.</p> <h2 id="step-1"><a aria-hidden="true" tabindex="-1" href="#step-1"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 1</h2> <p>You need to use Tailwind CSS logical class names instead of directional class names.<br> Here’s a list of some of the most common logical class names.</p> <table><thead><tr><th>❌ Don’t use</th><th>✅ Use</th></tr></thead><tbody><tr><td><code>left-*</code></td><td><code>start-*</code></td></tr><tr><td><code>right-*</code></td><td><code>end-*</code></td></tr><tr><td><code>ml-*</code></td><td><code>ms-*</code></td></tr><tr><td><code>mr-*</code></td><td><code>me-*</code></td></tr><tr><td><code>pl-*</code></td><td><code>ps-*</code></td></tr><tr><td><code>pr-*</code></td><td><code>pe-*</code></td></tr></tbody></table> <p>You can find the full list in the <a href="https://tailwindcss.com/blog/tailwindcss-v3-3#simplified-rtl-support-with-logical-properties" rel="nofollow" target="_blank">Tailwind CSS blog</a>.</p> <h2 id="step-2"><a aria-hidden="true" tabindex="-1" href="#step-2"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 2</h2> <p>Add <code>dir=rtl</code> to the root element of your website for RTL languages. This will automatically change the direction of the content based on the language of the content.</p> <h2 id="step-3"><a aria-hidden="true" tabindex="-1" href="#step-3"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Step 3</h2> <p>That’s it! Now whenever your website is RTL, all spacing and alignments will be automatically adjusted to the RTL direction. daisyUI components are bidirectional by default, so you don’t need to do anything else.</p> <h2 id="conclusion"><a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Conclusion</h2> <p>Making a bidirectional website is now easier than ever.<br> Try to make it a habit to use logical class names (like <code>ps-4</code> ,<code>ms-4</code>,…) instead of directional class names (like <code>pl-4</code>, <code>ml-4</code>,… ) in your CSS and you’ll see how easy it is to make a bidirectional website.</p>',1);const g={title:"How to make a bidirectional site using Tailwind CSS and daisyUI",desc:"Learn how to use CSS logical properties to make a bidirectional website using Tailwind CSS and daisyUI",published:!0,date:"2024-03-01T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/bidirectional.jpg",tags:["daisyUI"]};function S(a,i){const o=p(i,["children","$$slots","$$events"]);var e=n(),s=r(e);m(s,h(()=>o,g,{children:(d,u)=>{var l=b();t(d,l)},$$slots:{default:!0}})),t(a,e)}export{S as component};
