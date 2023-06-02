import{S as le,i as oe,s as ne,a as $,e as q,k as C,q as z,c as N,a2 as ae,h as c,l as S,m as B,r as I,b as d,F as j,g as E,d as R,f as K,D as se,G as fe,a4 as ce,_ as ue,$ as pe,C as G,n as A,y as Z,z as x,A as ee,B as te,v as V}from"../chunks/index.b6ea0941.js";import"../chunks/paths.67a1cd4b.js";import{p as X,r as Y}from"../chunks/stores.eeff9bba.js";import"../chunks/Tabs.svelte_svelte_type_style_lang.c5aad4df.js";import{C as _e}from"../chunks/Prismjs.svelte_svelte_type_style_lang.6179febb.js";/* empty css                                                       */import{Q as me}from"../chunks/QueryViewer.07bb5bc9.js";import{A as de}from"../chunks/ArticleRow.c1c39eab.js";function J(s,t,o){const e=s.slice();return e[6]=t[o],e}function he(s){var l;let t,o=(a.title??((l=a.og)==null?void 0:l.title))+"",e;return{c(){t=C("h1"),e=z(o)},l(r){t=S(r,"H1",{});var p=B(t);e=I(p,o),p.forEach(c)},m(r,p){d(r,t,p),j(t,e)},p:G,d(r){r&&c(t)}}}function ge(s){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:G,p:G,d:G}}function ye(s){var l;let t,o,e;return document.title=t=a.title??((l=a.og)==null?void 0:l.title),{c(){o=$(),e=C("meta"),this.h()},l(r){o=N(r),e=S(r,"META",{property:!0,content:!0}),this.h()},h(){var r;A(e,"property","og:title"),A(e,"content",((r=a.og)==null?void 0:r.title)??a.title)},m(r,p){d(r,o,p),d(r,e,p)},p(r,p){var f;p&0&&t!==(t=a.title??((f=a.og)==null?void 0:f.title))&&(document.title=t)},d(r){r&&c(o),r&&c(e)}}}function be(s){var r,p;let t,o,e=(a.description||((r=a.og)==null?void 0:r.description))&&ke(),l=((p=a.og)==null?void 0:p.image)&&we();return{c(){e&&e.c(),t=$(),l&&l.c(),o=q()},l(f){e&&e.l(f),t=N(f),l&&l.l(f),o=q()},m(f,g){e&&e.m(f,g),d(f,t,g),l&&l.m(f,g),d(f,o,g)},p(f,g){var h,y;(a.description||(h=a.og)!=null&&h.description)&&e.p(f,g),(y=a.og)!=null&&y.image&&l.p(f,g)},d(f){e&&e.d(f),f&&c(t),l&&l.d(f),f&&c(o)}}}function ke(s){let t,o,e;return{c(){t=C("meta"),o=$(),e=C("meta"),this.h()},l(l){t=S(l,"META",{name:!0,content:!0}),o=N(l),e=S(l,"META",{property:!0,content:!0}),this.h()},h(){var l,r;A(t,"name","description"),A(t,"content",a.description??((l=a.og)==null?void 0:l.description)),A(e,"property","og:description"),A(e,"content",((r=a.og)==null?void 0:r.description)??a.description)},m(l,r){d(l,t,r),d(l,o,r),d(l,e,r)},p:G,d(l){l&&c(t),l&&c(o),l&&c(e)}}}function we(s){let t;return{c(){t=C("meta"),this.h()},l(o){t=S(o,"META",{property:!0,content:!0}),this.h()},h(){var o;A(t,"property","og:image"),A(t,"content",(o=a.og)==null?void 0:o.image)},m(o,e){d(o,t,e)},p:G,d(o){o&&c(t)}}}function L(s){let t,o;return t=new me({props:{pageQueries:s[0].evidencemeta.queries,queryID:"top_articles",queryResult:s[0].top_articles}}),{c(){Z(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,l){ee(t,e,l),o=!0},p(e,l){const r={};l&1&&(r.pageQueries=e[0].evidencemeta.queries),l&1&&(r.queryResult=e[0].top_articles),t.$set(r)},i(e){o||(E(t.$$.fragment,e),o=!0)},o(e){R(t.$$.fragment,e),o=!1},d(e){te(t,e)}}}function W(s){let t,o;return t=new de({props:{rank:s[6].rank,image_url:s[6].article_social_image,days_trending:s[6].days_trending,headline:s[6].article_headline,article_url:s[6].url,when:s[6].year_trended}}),{c(){Z(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,l){ee(t,e,l),o=!0},p(e,l){const r={};l&2&&(r.rank=e[6].rank),l&2&&(r.image_url=e[6].article_social_image),l&2&&(r.days_trending=e[6].days_trending),l&2&&(r.headline=e[6].article_headline),l&2&&(r.article_url=e[6].url),l&2&&(r.when=e[6].year_trended),t.$set(r)},i(e){o||(E(t.$$.fragment,e),o=!0)},o(e){R(t.$$.fragment,e),o=!1},d(e){te(t,e)}}}function ve(s){var U;let t,o,e,l,r,p,f,g,h,y,F,M,w,v,O,b=typeof a<"u"&&(a.title||((U=a.og)==null?void 0:U.title))&&a.hide_title!==!0&&he();function ie(i,n){var k;return typeof a<"u"&&(a.title||(k=a.og)!=null&&k.title)?ye:ge}let H=ie()(s),T=typeof a=="object"&&be(),_=s[0].top_articles&&L(s),Q=s[1],u=[];for(let i=0;i<Q.length;i+=1)u[i]=W(J(s,Q,i));const re=i=>R(u[i],1,1,()=>{u[i]=null});return{c(){b&&b.c(),t=$(),H.c(),o=q(),T&&T.c(),e=q(),l=$(),r=C("p"),p=C("strong"),f=z("8,952"),g=z(" unique articles appeared in the trending strip from mid-November 2018 onward."),h=$(),y=C("p"),F=z("This table shows the year each article was written along with the # of days it spent in the trending strip."),M=$(),_&&_.c(),w=$();for(let i=0;i<u.length;i+=1)u[i].c();v=q()},l(i){b&&b.l(i),t=N(i);const n=ae("svelte-6vkw4y",document.head);H.l(n),o=q(),T&&T.l(n),e=q(),n.forEach(c),l=N(i),r=S(i,"P",{});var k=B(r);p=S(k,"STRONG",{});var m=B(p);f=I(m,"8,952"),m.forEach(c),g=I(k," unique articles appeared in the trending strip from mid-November 2018 onward."),k.forEach(c),h=N(i),y=S(i,"P",{});var P=B(y);F=I(P,"This table shows the year each article was written along with the # of days it spent in the trending strip."),P.forEach(c),M=N(i),_&&_.l(i),w=N(i);for(let D=0;D<u.length;D+=1)u[D].l(i);v=q()},m(i,n){b&&b.m(i,n),d(i,t,n),H.m(document.head,null),j(document.head,o),T&&T.m(document.head,null),j(document.head,e),d(i,l,n),d(i,r,n),j(r,p),j(p,f),j(r,g),d(i,h,n),d(i,y,n),j(y,F),d(i,M,n),_&&_.m(i,n),d(i,w,n);for(let k=0;k<u.length;k+=1)u[k].m(i,n);d(i,v,n),O=!0},p(i,[n]){var k;if(typeof a<"u"&&(a.title||(k=a.og)!=null&&k.title)&&a.hide_title!==!0&&b.p(i,n),H.p(i,n),typeof a=="object"&&T.p(i,n),i[0].top_articles?_?(_.p(i,n),n&1&&E(_,1)):(_=L(i),_.c(),E(_,1),_.m(w.parentNode,w)):_&&(V(),R(_,1,1,()=>{_=null}),K()),n&2){Q=i[1];let m;for(m=0;m<Q.length;m+=1){const P=J(i,Q,m);u[m]?(u[m].p(P,n),E(u[m],1)):(u[m]=W(P),u[m].c(),E(u[m],1),u[m].m(v.parentNode,v))}for(V(),m=Q.length;m<u.length;m+=1)re(m);K()}},i(i){if(!O){E(_);for(let n=0;n<Q.length;n+=1)E(u[n]);O=!0}},o(i){R(_),u=u.filter(Boolean);for(let n=0;n<u.length;n+=1)R(u[n]);O=!1},d(i){b&&b.d(i),i&&c(t),H.d(i),c(o),T&&T.d(i),c(e),i&&c(l),i&&c(r),i&&c(h),i&&c(y),i&&c(M),_&&_.d(i),i&&c(w),se(u,i),i&&c(v)}}}const a={title:"The 100 all-time longest-trending Buzzfeed News articles"};function Te(s,t,o){let e;fe(s,Y,h=>o(4,e=h));let{data:l}=t,{data:r={},customFormattingSettings:p}=l;ce(Y,e="7526ed23f0e60d8a0d7725315befa5a2",e),ue(_e,{getCustomFormats:()=>p.customFormats||[]});const f=function(h){var F,M;let y=(F=h.evidencemeta)==null?void 0:F.queries;if(y)for(let w=0;w<y.length;w++){let v=h[y[w].id],O=(M=h.evidencemeta)==null?void 0:M.queries[w].columnTypes;for(let b=0;b<v.length;b++)O&&Object.defineProperty(v[b],"_evidenceColumnTypes",{enumerable:!1,value:O})}};pe(()=>{f(r)});let{top_articles:g}=r;return s.$$set=h=>{"data"in h&&o(2,l=h.data)},s.$$.update=()=>{s.$$.dirty&4&&o(0,{data:r={},customFormattingSettings:p}=l,r),s.$$.dirty&1&&(Object.keys(r).length>0?X.set(!0):X.set(!1)),s.$$.dirty&1&&o(1,{top_articles:g}=r,g)},[r,g,l]}class Qe extends le{constructor(t){super(),oe(this,t,Te,ve,ne,{data:2})}}export{Qe as default,a as metadata};