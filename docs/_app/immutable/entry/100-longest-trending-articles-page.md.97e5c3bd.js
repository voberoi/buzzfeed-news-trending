import{S as J,i as W,s as Z,a as h,e as j,k as C,q as z,y as F,c as k,a3 as ee,h as u,l as N,m as B,r as U,z as D,b as $,F as M,A as G,g as v,d as q,f as te,B as H,G as ie,a5 as re,$ as le,a0 as ne,C as O,n as E,v as oe}from"../chunks/index.beed8506.js";import"../chunks/paths.5e779438.js";import{p as K,r as L}from"../chunks/stores.eab1436c.js";import{Q as ae}from"../chunks/Tabs.svelte_svelte_type_style_lang.a924ac6d.js";import{C as fe}from"../chunks/Prismjs.0ab142eb.js";import{D as se,C as R}from"../chunks/Column.9701f2f3.js";function ue(p){var r;let t,o=(f.title??((r=f.og)==null?void 0:r.title))+"",e;return{c(){t=C("h1"),e=z(o)},l(i){t=N(i,"H1",{});var s=B(t);e=U(s,o),s.forEach(u)},m(i,s){$(i,t,s),M(t,e)},p:O,d(i){i&&u(t)}}}function me(p){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:O,p:O,d:O}}function pe(p){var r;let t,o,e;return document.title=t=f.title??((r=f.og)==null?void 0:r.title),{c(){o=h(),e=C("meta"),this.h()},l(i){o=k(i),e=N(i,"META",{property:!0,content:!0}),this.h()},h(){var i;E(e,"property","og:title"),E(e,"content",((i=f.og)==null?void 0:i.title)??f.title)},m(i,s){$(i,o,s),$(i,e,s)},p(i,s){var a;s&0&&t!==(t=f.title??((a=f.og)==null?void 0:a.title))&&(document.title=t)},d(i){i&&u(o),i&&u(e)}}}function ce(p){var i,s;let t,o,e=(f.description||((i=f.og)==null?void 0:i.description))&&_e(),r=((s=f.og)==null?void 0:s.image)&&de();return{c(){e&&e.c(),t=h(),r&&r.c(),o=j()},l(a){e&&e.l(a),t=k(a),r&&r.l(a),o=j()},m(a,_){e&&e.m(a,_),$(a,t,_),r&&r.m(a,_),$(a,o,_)},p(a,_){var l,c;(f.description||(l=f.og)!=null&&l.description)&&e.p(a,_),(c=f.og)!=null&&c.image&&r.p(a,_)},d(a){e&&e.d(a),a&&u(t),r&&r.d(a),a&&u(o)}}}function _e(p){let t,o,e;return{c(){t=C("meta"),o=h(),e=C("meta"),this.h()},l(r){t=N(r,"META",{name:!0,content:!0}),o=k(r),e=N(r,"META",{property:!0,content:!0}),this.h()},h(){var r,i;E(t,"name","description"),E(t,"content",f.description??((r=f.og)==null?void 0:r.description)),E(e,"property","og:description"),E(e,"content",((i=f.og)==null?void 0:i.description)??f.description)},m(r,i){$(r,t,i),$(r,o,i),$(r,e,i)},p:O,d(r){r&&u(t),r&&u(o),r&&u(e)}}}function de(p){let t;return{c(){t=C("meta"),this.h()},l(o){t=N(o,"META",{property:!0,content:!0}),this.h()},h(){var o;E(t,"property","og:image"),E(t,"content",(o=f.og)==null?void 0:o.image)},m(o,e){$(o,t,e)},p:O,d(o){o&&u(t)}}}function V(p){let t,o;return t=new ae({props:{pageQueries:p[0].evidencemeta.queries,queryID:"top_articles",queryResult:p[0].top_articles}}),{c(){F(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){G(t,e,r),o=!0},p(e,r){const i={};r&1&&(i.pageQueries=e[0].evidencemeta.queries),r&1&&(i.queryResult=e[0].top_articles),t.$set(i)},i(e){o||(v(t.$$.fragment,e),o=!0)},o(e){q(t.$$.fragment,e),o=!1},d(e){H(t,e)}}}function $e(p){let t,o,e,r,i,s,a,_;return t=new R({props:{id:"article_social_image",contentType:"image",width:"75px",align:"center",title:"Social Image"}}),e=new R({props:{id:"moment_trended_yyyy",title:"Year",align:"left"}}),i=new R({props:{id:"days_trending",title:"Days",align:"left"}}),a=new R({props:{id:"url",contentType:"link",",":!0,linkLabel:"article_headline",title:"Article",align:"left"}}),{c(){F(t.$$.fragment),o=h(),F(e.$$.fragment),r=h(),F(i.$$.fragment),s=h(),F(a.$$.fragment)},l(l){D(t.$$.fragment,l),o=k(l),D(e.$$.fragment,l),r=k(l),D(i.$$.fragment,l),s=k(l),D(a.$$.fragment,l)},m(l,c){G(t,l,c),$(l,o,c),G(e,l,c),$(l,r,c),G(i,l,c),$(l,s,c),G(a,l,c),_=!0},p:O,i(l){_||(v(t.$$.fragment,l),v(e.$$.fragment,l),v(i.$$.fragment,l),v(a.$$.fragment,l),_=!0)},o(l){q(t.$$.fragment,l),q(e.$$.fragment,l),q(i.$$.fragment,l),q(a.$$.fragment,l),_=!1},d(l){H(t,l),l&&u(o),H(e,l),l&&u(r),H(i,l),l&&u(s),H(a,l)}}}function ye(p){var Y;let t,o,e,r,i,s,a,_,l,c,Q,S,b,g,A,y=typeof f<"u"&&(f.title||((Y=f.og)==null?void 0:Y.title))&&f.hide_title!==!0&&ue();function X(n,m){var w;return typeof f<"u"&&(f.title||(w=f.og)!=null&&w.title)?pe:me}let I=X()(p),T=typeof f=="object"&&ce(),d=p[0].top_articles&&V(p);return g=new se({props:{data:p[1],",":!0,link:"url",rows:"100",$$slots:{default:[$e]},$$scope:{ctx:p}}}),{c(){y&&y.c(),t=h(),I.c(),o=j(),T&&T.c(),e=j(),r=h(),i=C("p"),s=C("strong"),a=z("8,952"),_=z(" unique articles appeared in the trending strip from mid-November 2018 onward."),l=h(),c=C("p"),Q=z("This table shows the year each article was written along with the # of days it spent in the trending strip."),S=h(),d&&d.c(),b=h(),F(g.$$.fragment)},l(n){y&&y.l(n),t=k(n);const m=ee("svelte-6vkw4y",document.head);I.l(m),o=j(),T&&T.l(m),e=j(),m.forEach(u),r=k(n),i=N(n,"P",{});var w=B(i);s=N(w,"STRONG",{});var P=B(s);a=U(P,"8,952"),P.forEach(u),_=U(w," unique articles appeared in the trending strip from mid-November 2018 onward."),w.forEach(u),l=k(n),c=N(n,"P",{});var x=B(c);Q=U(x,"This table shows the year each article was written along with the # of days it spent in the trending strip."),x.forEach(u),S=k(n),d&&d.l(n),b=k(n),D(g.$$.fragment,n)},m(n,m){y&&y.m(n,m),$(n,t,m),I.m(document.head,null),M(document.head,o),T&&T.m(document.head,null),M(document.head,e),$(n,r,m),$(n,i,m),M(i,s),M(s,a),M(i,_),$(n,l,m),$(n,c,m),M(c,Q),$(n,S,m),d&&d.m(n,m),$(n,b,m),G(g,n,m),A=!0},p(n,[m]){var P;typeof f<"u"&&(f.title||(P=f.og)!=null&&P.title)&&f.hide_title!==!0&&y.p(n,m),I.p(n,m),typeof f=="object"&&T.p(n,m),n[0].top_articles?d?(d.p(n,m),m&1&&v(d,1)):(d=V(n),d.c(),v(d,1),d.m(b.parentNode,b)):d&&(oe(),q(d,1,1,()=>{d=null}),te());const w={};m&2&&(w.data=n[1]),m&64&&(w.$$scope={dirty:m,ctx:n}),g.$set(w)},i(n){A||(v(d),v(g.$$.fragment,n),A=!0)},o(n){q(d),q(g.$$.fragment,n),A=!1},d(n){y&&y.d(n),n&&u(t),I.d(n),u(o),T&&T.d(n),u(e),n&&u(r),n&&u(i),n&&u(l),n&&u(c),n&&u(S),d&&d.d(n),n&&u(b),H(g,n)}}}const f={title:"The 100 all-time longest-trending Buzzfeed News articles"};function be(p,t,o){let e;ie(p,L,l=>o(4,e=l));let{data:r}=t,{data:i={},customFormattingSettings:s}=r;re(L,e="7526ed23f0e60d8a0d7725315befa5a2",e),le(fe,{getCustomFormats:()=>s.customFormats||[]});const a=function(l){var Q,S;let c=(Q=l.evidencemeta)==null?void 0:Q.queries;if(c)for(let b=0;b<c.length;b++){let g=l[c[b].id],A=(S=l.evidencemeta)==null?void 0:S.queries[b].columnTypes;for(let y=0;y<g.length;y++)A&&Object.defineProperty(g[y],"_evidenceColumnTypes",{enumerable:!1,value:A})}};ne(()=>{a(i)});let{top_articles:_}=i;return p.$$set=l=>{"data"in l&&o(2,r=l.data)},p.$$.update=()=>{p.$$.dirty&4&&o(0,{data:i={},customFormattingSettings:s}=r,i),p.$$.dirty&1&&(Object.keys(i).length>0?K.set(!0):K.set(!1)),p.$$.dirty&1&&o(1,{top_articles:_}=i,_)},[i,_,r]}class Ee extends J{constructor(t){super(),W(this,t,be,ye,Z,{data:2})}}export{Ee as default,f as metadata};
