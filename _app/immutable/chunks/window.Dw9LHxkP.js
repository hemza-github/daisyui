import{v as C,Z as H,s as p,z as v,B as L,_ as X,c as z,$ as N,a0 as h,a1 as A,y as T,A as b,a2 as Y,a3 as g,R as j,X as q,Y as B}from"./runtime.Uw9oq3Es.js";import{j as D}from"./disclose-version.BlBAdxPG.js";import{l as G}from"./input.D5SJlijD.js";const x=0,d=1,y=2;function Z(a,c,l,n,i){var f=g,e,r,s,o,m=z(void 0),E=z(void 0),w=!1;function _(t,u){w=!0,u&&(N(k),h(k),A(f)),t===x&&l&&(r?T(r):r=v(()=>l(a))),t===d&&n&&(s?T(s):s=v(()=>n(a,m))),t===y&&i&&(o?T(o):o=v(()=>i(a,E))),t!==x&&r&&b(r,()=>r=null),t!==d&&s&&b(s,()=>s=null),t!==y&&o&&b(o,()=>o=null),u&&(A(null),h(null),N(null),Y())}var k=C(()=>{if(e!==(e=c())){if(H(e)){var t=e;w=!1,t.then(u=>{t===e&&(p(m,u),_(d,!0))},u=>{t===e&&(p(E,u),_(y,!0))}),D?l&&(r=v(()=>l(a))):L(()=>{w||_(x,!0)})}else p(m,e),_(d,!1);return X}})}function $(a,c,l){var n=()=>{i=!0,clearTimeout(f),f=setTimeout(e,100),l(window.scrollY)};addEventListener("scroll",n,{passive:!0});var i=!1,f,e=()=>{i=!1},r=!0;j(()=>{var s=c();r?r=!1:!i&&s!=null&&(i=!0,clearTimeout(f),scrollTo(window.scrollX,s),f=setTimeout(e,100))}),q(n),B(()=>{removeEventListener("scroll",n)})}function F(a,c){G(window,["resize"],()=>c(window[a]))}export{Z as a,$ as b,F as c};
