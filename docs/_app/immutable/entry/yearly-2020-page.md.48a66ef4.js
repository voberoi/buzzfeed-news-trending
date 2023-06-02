import{S as X,i as Y,s as J,a as A,e as T,c as C,a2 as L,h as p,b,F as j,g as q,d as w,f as H,D as W,G as Z,a4 as x,_ as ee,$ as te,k as Q,q as ie,l as S,m as le,r as re,C as M,n as $,y as P,z as U,A as K,B as V,v as R}from"../chunks/index.b6ea0941.js";import"../chunks/paths.67a1cd4b.js";import{p as z,r as B}from"../chunks/stores.eeff9bba.js";import"../chunks/Tabs.svelte_svelte_type_style_lang.c5aad4df.js";import{C as oe}from"../chunks/Prismjs.svelte_svelte_type_style_lang.6179febb.js";/* empty css                                                       */import{Q as ne}from"../chunks/QueryViewer.07bb5bc9.js";import{A as ae}from"../chunks/ArticleRow.c1c39eab.js";function G(a,t,r){const e=a.slice();return e[6]=t[r],e}function ce(a){var l;let t,r=(n.title??((l=n.og)==null?void 0:l.title))+"",e;return{c(){t=Q("h1"),e=ie(r)},l(i){t=S(i,"H1",{});var _=le(t);e=re(_,r),_.forEach(p)},m(i,_){b(i,t,_),j(t,e)},p:M,d(i){i&&p(t)}}}function se(a){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:M,p:M,d:M}}function fe(a){var l;let t,r,e;return document.title=t=n.title??((l=n.og)==null?void 0:l.title),{c(){r=A(),e=Q("meta"),this.h()},l(i){r=C(i),e=S(i,"META",{property:!0,content:!0}),this.h()},h(){var i;$(e,"property","og:title"),$(e,"content",((i=n.og)==null?void 0:i.title)??n.title)},m(i,_){b(i,r,_),b(i,e,_)},p(i,_){var s;_&0&&t!==(t=n.title??((s=n.og)==null?void 0:s.title))&&(document.title=t)},d(i){i&&p(r),i&&p(e)}}}function ue(a){var i,_;let t,r,e=(n.description||((i=n.og)==null?void 0:i.description))&&_e(),l=((_=n.og)==null?void 0:_.image)&&me();return{c(){e&&e.c(),t=A(),l&&l.c(),r=T()},l(s){e&&e.l(s),t=C(s),l&&l.l(s),r=T()},m(s,m){e&&e.m(s,m),b(s,t,m),l&&l.m(s,m),b(s,r,m)},p(s,m){var h,E;(n.description||(h=n.og)!=null&&h.description)&&e.p(s,m),(E=n.og)!=null&&E.image&&l.p(s,m)},d(s){e&&e.d(s),s&&p(t),l&&l.d(s),s&&p(r)}}}function _e(a){let t,r,e;return{c(){t=Q("meta"),r=A(),e=Q("meta"),this.h()},l(l){t=S(l,"META",{name:!0,content:!0}),r=C(l),e=S(l,"META",{property:!0,content:!0}),this.h()},h(){var l,i;$(t,"name","description"),$(t,"content",n.description??((l=n.og)==null?void 0:l.description)),$(e,"property","og:description"),$(e,"content",((i=n.og)==null?void 0:i.description)??n.description)},m(l,i){b(l,t,i),b(l,r,i),b(l,e,i)},p:M,d(l){l&&p(t),l&&p(r),l&&p(e)}}}function me(a){let t;return{c(){t=Q("meta"),this.h()},l(r){t=S(r,"META",{property:!0,content:!0}),this.h()},h(){var r;$(t,"property","og:image"),$(t,"content",(r=n.og)==null?void 0:r.image)},m(r,e){b(r,t,e)},p:M,d(r){r&&p(t)}}}function I(a){let t,r;return t=new ne({props:{pageQueries:a[0].evidencemeta.queries,queryID:"top_articles",queryResult:a[0].top_articles}}),{c(){P(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,l){K(t,e,l),r=!0},p(e,l){const i={};l&1&&(i.pageQueries=e[0].evidencemeta.queries),l&1&&(i.queryResult=e[0].top_articles),t.$set(i)},i(e){r||(q(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}function D(a){let t,r;return t=new ae({props:{rank:a[6].rank,image_url:a[6].article_social_image,days_trending:a[6].days_trending,headline:a[6].article_headline,article_url:a[6].url}}),{c(){P(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,l){K(t,e,l),r=!0},p(e,l){const i={};l&2&&(i.rank=e[6].rank),l&2&&(i.image_url=e[6].article_social_image),l&2&&(i.days_trending=e[6].days_trending),l&2&&(i.headline=e[6].article_headline),l&2&&(i.article_url=e[6].url),t.$set(i)},i(e){r||(q(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){V(t,e)}}}function pe(a){var F;let t,r,e,l,i,_,s,m=typeof n<"u"&&(n.title||((F=n.og)==null?void 0:F.title))&&n.hide_title!==!0&&ce();function h(o,c){var g;return typeof n<"u"&&(n.title||(g=n.og)!=null&&g.title)?fe:se}let v=h()(a),y=typeof n=="object"&&ue(),u=a[0].top_articles&&I(a),k=a[1],f=[];for(let o=0;o<k.length;o+=1)f[o]=D(G(a,k,o));const N=o=>w(f[o],1,1,()=>{f[o]=null});return{c(){m&&m.c(),t=A(),v.c(),r=T(),y&&y.c(),e=T(),l=A(),u&&u.c(),i=A();for(let o=0;o<f.length;o+=1)f[o].c();_=T()},l(o){m&&m.l(o),t=C(o);const c=L("svelte-6vkw4y",document.head);v.l(c),r=T(),y&&y.l(c),e=T(),c.forEach(p),l=C(o),u&&u.l(o),i=C(o);for(let g=0;g<f.length;g+=1)f[g].l(o);_=T()},m(o,c){m&&m.m(o,c),b(o,t,c),v.m(document.head,null),j(document.head,r),y&&y.m(document.head,null),j(document.head,e),b(o,l,c),u&&u.m(o,c),b(o,i,c);for(let g=0;g<f.length;g+=1)f[g].m(o,c);b(o,_,c),s=!0},p(o,[c]){var g;if(typeof n<"u"&&(n.title||(g=n.og)!=null&&g.title)&&n.hide_title!==!0&&m.p(o,c),v.p(o,c),typeof n=="object"&&y.p(o,c),o[0].top_articles?u?(u.p(o,c),c&1&&q(u,1)):(u=I(o),u.c(),q(u,1),u.m(i.parentNode,i)):u&&(R(),w(u,1,1,()=>{u=null}),H()),c&2){k=o[1];let d;for(d=0;d<k.length;d+=1){const O=G(o,k,d);f[d]?(f[d].p(O,c),q(f[d],1)):(f[d]=D(O),f[d].c(),q(f[d],1),f[d].m(_.parentNode,_))}for(R(),d=k.length;d<f.length;d+=1)N(d);H()}},i(o){if(!s){q(u);for(let c=0;c<k.length;c+=1)q(f[c]);s=!0}},o(o){w(u),f=f.filter(Boolean);for(let c=0;c<f.length;c+=1)w(f[c]);s=!1},d(o){m&&m.d(o),o&&p(t),v.d(o),p(r),y&&y.d(o),p(e),o&&p(l),u&&u.d(o),o&&p(i),W(f,o),o&&p(_)}}}const n={title:"The 50 longest-trending Buzzfeed News articles in 2020"};function de(a,t,r){let e;Z(a,B,h=>r(4,e=h));let{data:l}=t,{data:i={},customFormattingSettings:_}=l;x(B,e="5dbbcf3de0b7611a27da2883ce0abe7a",e),ee(oe,{getCustomFormats:()=>_.customFormats||[]});const s=function(h){var v,y;let E=(v=h.evidencemeta)==null?void 0:v.queries;if(E)for(let u=0;u<E.length;u++){let k=h[E[u].id],f=(y=h.evidencemeta)==null?void 0:y.queries[u].columnTypes;for(let N=0;N<k.length;N++)f&&Object.defineProperty(k[N],"_evidenceColumnTypes",{enumerable:!1,value:f})}};te(()=>{s(i)});let{top_articles:m}=i;return a.$$set=h=>{"data"in h&&r(2,l=h.data)},a.$$.update=()=>{a.$$.dirty&4&&r(0,{data:i={},customFormattingSettings:_}=l,i),a.$$.dirty&1&&(Object.keys(i).length>0?z.set(!0):z.set(!1)),a.$$.dirty&1&&r(1,{top_articles:m}=i,m)},[i,m,l]}class $e extends X{constructor(t){super(),Y(this,t,de,pe,J,{data:2})}}export{$e as default,n as metadata};
