import{S as K,i as L,s as V,a as k,e as C,k as A,q as B,y as D,c as h,a3 as X,h as p,l as N,m as U,r as x,z as M,b as d,F as O,A as Q,g as v,d as w,f as Y,B as j,G as J,a5 as W,$ as Z,a0 as ee,C as E,n as q,v as te}from"../chunks/index.beed8506.js";import"../chunks/paths.5e779438.js";import{p as G,r as P}from"../chunks/stores.eab1436c.js";import{Q as ie}from"../chunks/Tabs.svelte_svelte_type_style_lang.a924ac6d.js";import{C as le}from"../chunks/Prismjs.0ab142eb.js";import{D as re,C as H}from"../chunks/Column.9701f2f3.js";function oe(u){var r;let t,o=(a.title??((r=a.og)==null?void 0:r.title))+"",e;return{c(){t=A("h1"),e=B(o)},l(i){t=N(i,"H1",{});var f=U(t);e=x(f,o),f.forEach(p)},m(i,f){d(i,t,f),O(t,e)},p:E,d(i){i&&p(t)}}}function ne(u){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:E,p:E,d:E}}function ae(u){var r;let t,o,e;return document.title=t=a.title??((r=a.og)==null?void 0:r.title),{c(){o=k(),e=A("meta"),this.h()},l(i){o=h(i),e=N(i,"META",{property:!0,content:!0}),this.h()},h(){var i;q(e,"property","og:title"),q(e,"content",((i=a.og)==null?void 0:i.title)??a.title)},m(i,f){d(i,o,f),d(i,e,f)},p(i,f){var l;f&0&&t!==(t=a.title??((l=a.og)==null?void 0:l.title))&&(document.title=t)},d(i){i&&p(o),i&&p(e)}}}function fe(u){var i,f;let t,o,e=(a.description||((i=a.og)==null?void 0:i.description))&&se(),r=((f=a.og)==null?void 0:f.image)&&ce();return{c(){e&&e.c(),t=k(),r&&r.c(),o=C()},l(l){e&&e.l(l),t=h(l),r&&r.l(l),o=C()},m(l,s){e&&e.m(l,s),d(l,t,s),r&&r.m(l,s),d(l,o,s)},p(l,s){var _,y;(a.description||(_=a.og)!=null&&_.description)&&e.p(l,s),(y=a.og)!=null&&y.image&&r.p(l,s)},d(l){e&&e.d(l),l&&p(t),r&&r.d(l),l&&p(o)}}}function se(u){let t,o,e;return{c(){t=A("meta"),o=k(),e=A("meta"),this.h()},l(r){t=N(r,"META",{name:!0,content:!0}),o=h(r),e=N(r,"META",{property:!0,content:!0}),this.h()},h(){var r,i;q(t,"name","description"),q(t,"content",a.description??((r=a.og)==null?void 0:r.description)),q(e,"property","og:description"),q(e,"content",((i=a.og)==null?void 0:i.description)??a.description)},m(r,i){d(r,t,i),d(r,o,i),d(r,e,i)},p:E,d(r){r&&p(t),r&&p(o),r&&p(e)}}}function ce(u){let t;return{c(){t=A("meta"),this.h()},l(o){t=N(o,"META",{property:!0,content:!0}),this.h()},h(){var o;q(t,"property","og:image"),q(t,"content",(o=a.og)==null?void 0:o.image)},m(o,e){d(o,t,e)},p:E,d(o){o&&p(t)}}}function R(u){let t,o;return t=new ie({props:{pageQueries:u[0].evidencemeta.queries,queryID:"top_articles",queryResult:u[0].top_articles}}),{c(){D(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,r){Q(t,e,r),o=!0},p(e,r){const i={};r&1&&(i.pageQueries=e[0].evidencemeta.queries),r&1&&(i.queryResult=e[0].top_articles),t.$set(i)},i(e){o||(v(t.$$.fragment,e),o=!0)},o(e){w(t.$$.fragment,e),o=!1},d(e){j(t,e)}}}function ue(u){let t,o,e,r,i,f;return t=new H({props:{id:"article_social_image",contentType:"image",width:"100px",align:"center",title:"Social Image"}}),e=new H({props:{id:"days_trending",title:"Days",align:"left"}}),i=new H({props:{id:"url",contentType:"link",linkLabel:"article_headline",title:"Article",align:"left"}}),{c(){D(t.$$.fragment),o=k(),D(e.$$.fragment),r=k(),D(i.$$.fragment)},l(l){M(t.$$.fragment,l),o=h(l),M(e.$$.fragment,l),r=h(l),M(i.$$.fragment,l)},m(l,s){Q(t,l,s),d(l,o,s),Q(e,l,s),d(l,r,s),Q(i,l,s),f=!0},p:E,i(l){f||(v(t.$$.fragment,l),v(e.$$.fragment,l),v(i.$$.fragment,l),f=!0)},o(l){w(t.$$.fragment,l),w(e.$$.fragment,l),w(i.$$.fragment,l),f=!1},d(l){j(t,l),l&&p(o),j(e,l),l&&p(r),j(i,l)}}}function me(u){var I;let t,o,e,r,i,f,l,s,_,y,$=typeof a<"u"&&(a.title||((I=a.og)==null?void 0:I.title))&&a.hide_title!==!0&&oe();function F(n,m){var g;return typeof a<"u"&&(a.title||(g=a.og)!=null&&g.title)?ae:ne}let T=F()(u),b=typeof a=="object"&&fe(),c=u[0].top_articles&&R(u);return _=new re({props:{data:u[1],link:"url",rows:"50",$$slots:{default:[ue]},$$scope:{ctx:u}}}),{c(){$&&$.c(),t=k(),T.c(),o=C(),b&&b.c(),e=C(),r=k(),i=A("p"),f=B("Data in 2018 starts in mid-November."),l=k(),c&&c.c(),s=k(),D(_.$$.fragment)},l(n){$&&$.l(n),t=h(n);const m=X("svelte-6vkw4y",document.head);T.l(m),o=C(),b&&b.l(m),e=C(),m.forEach(p),r=h(n),i=N(n,"P",{});var g=U(i);f=x(g,"Data in 2018 starts in mid-November."),g.forEach(p),l=h(n),c&&c.l(n),s=h(n),M(_.$$.fragment,n)},m(n,m){$&&$.m(n,m),d(n,t,m),T.m(document.head,null),O(document.head,o),b&&b.m(document.head,null),O(document.head,e),d(n,r,m),d(n,i,m),O(i,f),d(n,l,m),c&&c.m(n,m),d(n,s,m),Q(_,n,m),y=!0},p(n,[m]){var z;typeof a<"u"&&(a.title||(z=a.og)!=null&&z.title)&&a.hide_title!==!0&&$.p(n,m),T.p(n,m),typeof a=="object"&&b.p(n,m),n[0].top_articles?c?(c.p(n,m),m&1&&v(c,1)):(c=R(n),c.c(),v(c,1),c.m(s.parentNode,s)):c&&(te(),w(c,1,1,()=>{c=null}),Y());const g={};m&2&&(g.data=n[1]),m&64&&(g.$$scope={dirty:m,ctx:n}),_.$set(g)},i(n){y||(v(c),v(_.$$.fragment,n),y=!0)},o(n){w(c),w(_.$$.fragment,n),y=!1},d(n){$&&$.d(n),n&&p(t),T.d(n),p(o),b&&b.d(n),p(e),n&&p(r),n&&p(i),n&&p(l),c&&c.d(n),n&&p(s),j(_,n)}}}const a={title:"The 50 longest-trending Buzzfeed News articles in 2018"};function pe(u,t,o){let e;J(u,P,_=>o(4,e=_));let{data:r}=t,{data:i={},customFormattingSettings:f}=r;W(P,e="05a7aa0ba5d7312ef56652440e031bfa",e),Z(le,{getCustomFormats:()=>f.customFormats||[]});const l=function(_){var $,F;let y=($=_.evidencemeta)==null?void 0:$.queries;if(y)for(let S=0;S<y.length;S++){let T=_[y[S].id],b=(F=_.evidencemeta)==null?void 0:F.queries[S].columnTypes;for(let c=0;c<T.length;c++)b&&Object.defineProperty(T[c],"_evidenceColumnTypes",{enumerable:!1,value:b})}};ee(()=>{l(i)});let{top_articles:s}=i;return u.$$set=_=>{"data"in _&&o(2,r=_.data)},u.$$.update=()=>{u.$$.dirty&4&&o(0,{data:i={},customFormattingSettings:f}=r,i),u.$$.dirty&1&&(Object.keys(i).length>0?G.set(!0):G.set(!1)),u.$$.dirty&1&&o(1,{top_articles:s}=i,s)},[i,s,r]}class ke extends K{constructor(t){super(),L(this,t,pe,me,V,{data:2})}}export{ke as default,a as metadata};