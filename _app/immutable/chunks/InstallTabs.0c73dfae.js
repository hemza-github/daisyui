import{s as H,e as _,a as E,c as p,b as u,d as y,h as f,i as m,j as A,k as d,n as b,v as I,m as g,H as N,r as S}from"./scheduler.20d7cd23.js";import{e as v}from"./each.e59479a4.js";import{S as T,i as C}from"./index.33a562d6.js";import{p as D}from"./stores.853db583.js";import{t as P}from"./i18n.79186792.js";function k(r,t,l){const n=r.slice();return n[3]=t[l].name,n[4]=t[l].href,n}function w(r){let t,l,n=r[1](r[3])+"",o,c;return{c(){t=_("a"),l=new N(!1),o=E(),this.h()},l(a){t=p(a,"A",{href:!0,class:!0});var e=u(t);l=S(e,!1),o=y(e),e.forEach(f),this.h()},h(){l.a=o,m(t,"href",r[4]),m(t,"class",c=`tab ${r[0].url.pathname==r[4]?"tab-active":""}`)},m(a,e){A(a,t,e),l.m(n,t),d(t,o)},p(a,e){e&2&&n!==(n=a[1](a[3])+"")&&l.p(n),e&1&&c!==(c=`tab ${a[0].url.pathname==a[4]?"tab-active":""}`)&&m(t,"class",c)},d(a){a&&f(t)}}}function V(r){let t,l,n,o,c=v(r[2]),a=[];for(let e=0;e<c.length;e+=1)a[e]=w(k(r,c,e));return{c(){t=_("div"),l=_("nav");for(let e=0;e<a.length;e+=1)a[e].c();n=E(),o=_("span"),this.h()},l(e){t=p(e,"DIV",{class:!0});var i=u(t);l=p(i,"NAV",{class:!0});var s=u(l);for(let h=0;h<a.length;h+=1)a[h].l(s);n=y(s),o=p(s,"SPAN",{class:!0}),u(o).forEach(f),s.forEach(f),i.forEach(f),this.h()},h(){m(o,"class","tab"),m(l,"class","tabs tabs-lifted xl:tabs-lg"),m(t,"class","not-prose mb-10 overflow-x-auto")},m(e,i){A(e,t,i),d(t,l);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(l,null);d(l,n),d(l,o)},p(e,[i]){if(i&7){c=v(e[2]);let s;for(s=0;s<c.length;s+=1){const h=k(e,c,s);a[s]?a[s].p(h,i):(a[s]=w(h),a[s].c(),a[s].m(l,n))}for(;s<a.length;s+=1)a[s].d(1);a.length=c.length}},i:b,o:b,d(e){e&&f(t),I(a,e)}}}function $(r,t,l){let n,o;return g(r,D,a=>l(0,n=a)),g(r,P,a=>l(1,o=a)),[n,o,[{name:"Tailwind Plugin",href:"/docs/install/"},{name:"Use CDN",href:"/docs/cdn/"}]]}class F extends T{constructor(t){super(),C(this,t,$,V,H,{})}}export{F as I};
