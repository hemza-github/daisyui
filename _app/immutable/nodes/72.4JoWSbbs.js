import{e as X,a as _,f as y,t as Z,c as n,b as a}from"../chunks/disclose-version.BlBAdxPG.js";import{h as t}from"../chunks/html.CAZA5-yU.js";import{l as aa,s as na}from"../chunks/props.CsqvDH4B.js";import{M as sa}from"../chunks/mdsvex.BX1P0EAG.js";import{T as s}from"../chunks/Translate.DdjITVHE.js";var ta=Z('<p><!></p> <p><!></p> <ul><li><!></li></ul> <pre class="language-html"><!></pre> <button class="btn">Button</button> <ol><li><!></li></ol> <pre class="language-html"><!></pre> <button class="btn btn-primary">One</button> <button class="btn btn-secondary">Two</button> <button class="btn btn-accent btn-outline">Three</button> <ol start="2"><li><!></li></ol> <pre class="language-html"><!></pre> <button class="rounded-full btn">One</button> <button class="px-16 rounded-none btn">Two</button> <ol start="3"><li><!></li></ol> <pre class="language-css"><!></pre> <ol start="4"><li><!></li></ol> <ul><li><a href="/theme-generator"><!></a></li> <li><!></li></ul>',1);const oa={title:"Customize daisyUI components",desc:"How to customize daisyUI?",published:!0};function ia(h,f){const x=aa(f,["children","$$slots","$$events"]);var o=X(),w=y(o);sa(w,na(()=>x,oa,{children:(T,pa)=>{var p=ta(),e=y(p),$=n(e);s($,{text:"daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything."});var l=a(a(e,!0)),z=n(l);s(z,{text:"But you can still customize components in many ways."});var u=a(a(l,!0)),q=n(u),I=n(q);s(I,{text:"Let's say, you want to customize this button:"});var c=a(a(u,!0)),U=n(c);t(U,()=>'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>');var O=a(a(c,!0)),r=a(a(O,!0)),Y=n(r),B=n(Y);s(B,{text:"You can use daisyUI utility classes:"});var i=a(a(r,!0)),C=n(i);t(C,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-accent btn-outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`);var M=a(a(i,!0)),S=a(a(M,!0)),A=a(a(S,!0)),k=a(a(A,!0)),H=n(k),L=n(H);s(L,{text:"You can use Tailwind's utility classes:"});var d=a(a(k,!0)),P=n(d);t(P,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn rounded-full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn rounded-none px-16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`);var j=a(a(d,!0)),D=a(a(j,!0)),b=a(a(D,!0)),E=n(b),F=n(E);s(F,{text:"You can customize components on your CSS file, using Tailwind's @apply directive:"});var v=a(a(b,!0)),G=n(v);t(G,()=>`<code class="language-css"><span class="token selector">.btn</span> <span class="token punctuation">&#123;</span>
  <span class="token atrule"><span class="token rule">@apply</span> rounded-full<span class="token punctuation">;</span></span>
<span class="token punctuation">&#125;</span></code>`);var g=a(a(v,!0)),J=n(g),K=n(J);s(K,{text:"You can also:"});var N=a(a(g,!0)),m=n(N),Q=n(m),R=n(Q);s(R,{text:"Add your own theme."});var V=a(a(m,!0)),W=n(V);s(W,{text:"Opt out of daisyUI's design decisions, and <a href='/docs/config/'>only use an unstyled (skeleton) version of daisyUI</a>."}),_(T,p)},$$slots:{default:!0}})),_(h,o)}export{ia as component};
