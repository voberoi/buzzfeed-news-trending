import{S as G,i as R,s as B,a as k,e as E,y as A,c as h,a3 as P,h as p,z as S,b as _,F as O,A as M,g,d as v,f as U,B as Q,G as x,a5 as K,$ as L,a0 as V,k as j,q as X,l as F,m as Y,r as J,C as q,n as y,v as W}from"../chunks/index.beed8506.js";import"../chunks/paths.5e779438.js";import{p as H,r as I}from"../chunks/stores.eab1436c.js";import{Q as Z}from"../chunks/Tabs.svelte_svelte_type_style_lang.a924ac6d.js";import{C as ee}from"../chunks/Prismjs.0ab142eb.js";import{D as te,C as N}from"../chunks/Column.9701f2f3.js";function ie(m){var r;let t,n=(a.title??((r=a.og)==null?void 0:r.title))+"",e;return{c(){t=j("h1"),e=X(n)},l(i){t=F(i,"H1",{});var f=Y(t);e=J(f,n),f.forEach(p)},m(i,f){_(i,t,f),O(t,e)},p:q,d(i){i&&p(t)}}}function le(m){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:q,p:q,d:q}}function re(m){var r;let t,n,e;return document.title=t=a.title??((r=a.og)==null?void 0:r.title),{c(){n=k(),e=j("meta"),this.h()},l(i){n=h(i),e=F(i,"META",{property:!0,content:!0}),this.h()},h(){var i;y(e,"property","og:title"),y(e,"content",((i=a.og)==null?void 0:i.title)??a.title)},m(i,f){_(i,n,f),_(i,e,f)},p(i,f){var l;f&0&&t!==(t=a.title??((l=a.og)==null?void 0:l.title))&&(document.title=t)},d(i){i&&p(n),i&&p(e)}}}function ne(m){var i,f;let t,n,e=(a.description||((i=a.og)==null?void 0:i.description))&&oe(),r=((f=a.og)==null?void 0:f.image)&&ae();return{c(){e&&e.c(),t=k(),r&&r.c(),n=E()},l(l){e&&e.l(l),t=h(l),r&&r.l(l),n=E()},m(l,s){e&&e.m(l,s),_(l,t,s),r&&r.m(l,s),_(l,n,s)},p(l,s){var d,T;(a.description||(d=a.og)!=null&&d.description)&&e.p(l,s),(T=a.og)!=null&&T.image&&r.p(l,s)},d(l){e&&e.d(l),l&&p(t),r&&r.d(l),l&&p(n)}}}function oe(m){let t,n,e;return{c(){t=j("meta"),n=k(),e=j("meta"),this.h()},l(r){t=F(r,"META",{name:!0,content:!0}),n=h(r),e=F(r,"META",{property:!0,content:!0}),this.h()},h(){var r,i;y(t,"name","description"),y(t,"content",a.description??((r=a.og)==null?void 0:r.description)),y(e,"property","og:description"),y(e,"content",((i=a.og)==null?void 0:i.description)??a.description)},m(r,i){_(r,t,i),_(r,n,i),_(r,e,i)},p:q,d(r){r&&p(t),r&&p(n),r&&p(e)}}}function ae(m){let t;return{c(){t=j("meta"),this.h()},l(n){t=F(n,"META",{property:!0,content:!0}),this.h()},h(){var n;y(t,"property","og:image"),y(t,"content",(n=a.og)==null?void 0:n.image)},m(n,e){_(n,t,e)},p:q,d(n){n&&p(t)}}}function z(m){let t,n;return t=new Z({props:{pageQueries:m[0].evidencemeta.queries,queryID:"top_articles",queryResult:m[0].top_articles}}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,r){M(t,e,r),n=!0},p(e,r){const i={};r&1&&(i.pageQueries=e[0].evidencemeta.queries),r&1&&(i.queryResult=e[0].top_articles),t.$set(i)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function fe(m){let t,n,e,r,i,f;return t=new N({props:{id:"article_social_image",contentType:"image",width:"100px",align:"center",title:"Social Image"}}),e=new N({props:{id:"days_trending",title:"Days",align:"left"}}),i=new N({props:{id:"url",contentType:"link",linkLabel:"article_headline",title:"Article",align:"left"}}),{c(){A(t.$$.fragment),n=k(),A(e.$$.fragment),r=k(),A(i.$$.fragment)},l(l){S(t.$$.fragment,l),n=h(l),S(e.$$.fragment,l),r=h(l),S(i.$$.fragment,l)},m(l,s){M(t,l,s),_(l,n,s),M(e,l,s),_(l,r,s),M(i,l,s),f=!0},p:q,i(l){f||(g(t.$$.fragment,l),g(e.$$.fragment,l),g(i.$$.fragment,l),f=!0)},o(l){v(t.$$.fragment,l),v(e.$$.fragment,l),v(i.$$.fragment,l),f=!1},d(l){Q(t,l),l&&p(n),Q(e,l),l&&p(r),Q(i,l)}}}function se(m){var C;let t,n,e,r,i,f,l,s=typeof a<"u"&&(a.title||((C=a.og)==null?void 0:C.title))&&a.hide_title!==!0&&ie();function d(o,u){var w;return typeof a<"u"&&(a.title||(w=a.og)!=null&&w.title)?re:le}let b=d()(m),$=typeof a=="object"&&ne(),c=m[0].top_articles&&z(m);return f=new te({props:{data:m[1],link:"url",rows:"50",$$slots:{default:[fe]},$$scope:{ctx:m}}}),{c(){s&&s.c(),t=k(),b.c(),n=E(),$&&$.c(),e=E(),r=k(),c&&c.c(),i=k(),A(f.$$.fragment)},l(o){s&&s.l(o),t=h(o);const u=P("svelte-6vkw4y",document.head);b.l(u),n=E(),$&&$.l(u),e=E(),u.forEach(p),r=h(o),c&&c.l(o),i=h(o),S(f.$$.fragment,o)},m(o,u){s&&s.m(o,u),_(o,t,u),b.m(document.head,null),O(document.head,n),$&&$.m(document.head,null),O(document.head,e),_(o,r,u),c&&c.m(o,u),_(o,i,u),M(f,o,u),l=!0},p(o,[u]){var D;typeof a<"u"&&(a.title||(D=a.og)!=null&&D.title)&&a.hide_title!==!0&&s.p(o,u),b.p(o,u),typeof a=="object"&&$.p(o,u),o[0].top_articles?c?(c.p(o,u),u&1&&g(c,1)):(c=z(o),c.c(),g(c,1),c.m(i.parentNode,i)):c&&(W(),v(c,1,1,()=>{c=null}),U());const w={};u&2&&(w.data=o[1]),u&64&&(w.$$scope={dirty:u,ctx:o}),f.$set(w)},i(o){l||(g(c),g(f.$$.fragment,o),l=!0)},o(o){v(c),v(f.$$.fragment,o),l=!1},d(o){s&&s.d(o),o&&p(t),b.d(o),p(n),$&&$.d(o),p(e),o&&p(r),c&&c.d(o),o&&p(i),Q(f,o)}}}const a={title:"The 50 longest-trending Buzzfeed News articles in 2020"};function ce(m,t,n){let e;x(m,I,d=>n(4,e=d));let{data:r}=t,{data:i={},customFormattingSettings:f}=r;K(I,e="5dbbcf3de0b7611a27da2883ce0abe7a",e),L(ee,{getCustomFormats:()=>f.customFormats||[]});const l=function(d){var b,$;let T=(b=d.evidencemeta)==null?void 0:b.queries;if(T)for(let c=0;c<T.length;c++){let C=d[T[c].id],o=($=d.evidencemeta)==null?void 0:$.queries[c].columnTypes;for(let u=0;u<C.length;u++)o&&Object.defineProperty(C[u],"_evidenceColumnTypes",{enumerable:!1,value:o})}};V(()=>{l(i)});let{top_articles:s}=i;return m.$$set=d=>{"data"in d&&n(2,r=d.data)},m.$$.update=()=>{m.$$.dirty&4&&n(0,{data:i={},customFormattingSettings:f}=r,i),m.$$.dirty&1&&(Object.keys(i).length>0?H.set(!0):H.set(!1)),m.$$.dirty&1&&n(1,{top_articles:s}=i,s)},[i,s,r]}class be extends G{constructor(t){super(),R(this,t,ce,se,B,{data:2})}}export{be as default,a as metadata};
