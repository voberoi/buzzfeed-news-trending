import{S as X,i as Y,s as J,a as T,e as O,k as S,q as z,y as j,c as v,a3 as L,h as p,l as A,m as P,r as B,z as F,b as d,F as M,A as D,g as w,d as C,f as W,B as G,G as Z,a5 as ee,$ as te,a0 as re,C as N,n as E,v as ie}from"../chunks/index.beed8506.js";import"../chunks/paths.5e779438.js";import{p as x,r as K}from"../chunks/stores.eab1436c.js";import{Q as oe}from"../chunks/Tabs.svelte_svelte_type_style_lang.a924ac6d.js";import{C as ne}from"../chunks/Prismjs.0ab142eb.js";import{D as le,C as R}from"../chunks/Column.9701f2f3.js";function se(a){var o;let t,n=(s.title??((o=s.og)==null?void 0:o.title))+"",e;return{c(){t=S("h1"),e=z(n)},l(r){t=A(r,"H1",{});var f=P(t);e=B(f,n),f.forEach(p)},m(r,f){d(r,t,f),M(t,e)},p:N,d(r){r&&p(t)}}}function fe(a){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:N,p:N,d:N}}function ae(a){var o;let t,n,e;return document.title=t=s.title??((o=s.og)==null?void 0:o.title),{c(){n=T(),e=S("meta"),this.h()},l(r){n=v(r),e=A(r,"META",{property:!0,content:!0}),this.h()},h(){var r;E(e,"property","og:title"),E(e,"content",((r=s.og)==null?void 0:r.title)??s.title)},m(r,f){d(r,n,f),d(r,e,f)},p(r,f){var i;f&0&&t!==(t=s.title??((i=s.og)==null?void 0:i.title))&&(document.title=t)},d(r){r&&p(n),r&&p(e)}}}function ue(a){var r,f;let t,n,e=(s.description||((r=s.og)==null?void 0:r.description))&&pe(),o=((f=s.og)==null?void 0:f.image)&&me();return{c(){e&&e.c(),t=T(),o&&o.c(),n=O()},l(i){e&&e.l(i),t=v(i),o&&o.l(i),n=O()},m(i,m){e&&e.m(i,m),d(i,t,m),o&&o.m(i,m),d(i,n,m)},p(i,m){var _,g;(s.description||(_=s.og)!=null&&_.description)&&e.p(i,m),(g=s.og)!=null&&g.image&&o.p(i,m)},d(i){e&&e.d(i),i&&p(t),o&&o.d(i),i&&p(n)}}}function pe(a){let t,n,e;return{c(){t=S("meta"),n=T(),e=S("meta"),this.h()},l(o){t=A(o,"META",{name:!0,content:!0}),n=v(o),e=A(o,"META",{property:!0,content:!0}),this.h()},h(){var o,r;E(t,"name","description"),E(t,"content",s.description??((o=s.og)==null?void 0:o.description)),E(e,"property","og:description"),E(e,"content",((r=s.og)==null?void 0:r.description)??s.description)},m(o,r){d(o,t,r),d(o,n,r),d(o,e,r)},p:N,d(o){o&&p(t),o&&p(n),o&&p(e)}}}function me(a){let t;return{c(){t=S("meta"),this.h()},l(n){t=A(n,"META",{property:!0,content:!0}),this.h()},h(){var n;E(t,"property","og:image"),E(t,"content",(n=s.og)==null?void 0:n.image)},m(n,e){d(n,t,e)},p:N,d(n){n&&p(t)}}}function V(a){let t,n;return t=new oe({props:{pageQueries:a[0].evidencemeta.queries,queryID:"top_reporters",queryResult:a[0].top_reporters}}),{c(){j(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,o){D(t,e,o),n=!0},p(e,o){const r={};o&1&&(r.pageQueries=e[0].evidencemeta.queries),o&1&&(r.queryResult=e[0].top_reporters),t.$set(r)},i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){C(t.$$.fragment,e),n=!1},d(e){G(t,e)}}}function ce(a){let t,n,e,o,r,f;return t=new R({props:{id:"author_image",contentType:"image",width:"50px",align:"center",title:"Image"}}),e=new R({props:{id:"days_trending",title:"Days Trending",align:"center"}}),r=new R({props:{id:"author_name",title:"Name",align:"left"}}),{c(){j(t.$$.fragment),n=T(),j(e.$$.fragment),o=T(),j(r.$$.fragment)},l(i){F(t.$$.fragment,i),n=v(i),F(e.$$.fragment,i),o=v(i),F(r.$$.fragment,i)},m(i,m){D(t,i,m),d(i,n,m),D(e,i,m),d(i,o,m),D(r,i,m),f=!0},p:N,i(i){f||(w(t.$$.fragment,i),w(e.$$.fragment,i),w(r.$$.fragment,i),f=!0)},o(i){C(t.$$.fragment,i),C(e.$$.fragment,i),C(r.$$.fragment,i),f=!1},d(i){G(t,i),i&&p(n),G(e,i),i&&p(o),G(r,i)}}}function _e(a){var U;let t,n,e,o,r,f,i,m,_,g,b,q,$=typeof s<"u"&&(s.title||((U=s.og)==null?void 0:U.title))&&s.hide_title!==!0&&se();function H(l,u){var y;return typeof s<"u"&&(s.title||(y=s.og)!=null&&y.title)?ae:fe}let h=H()(a),k=typeof s=="object"&&ue(),c=a[0].top_reporters&&V(a);return b=new le({props:{data:a[1],",":!0,rows:"100",$$slots:{default:[ce]},$$scope:{ctx:a}}}),{c(){$&&$.c(),t=T(),h.c(),n=O(),k&&k.c(),e=O(),o=T(),r=S("p"),f=S("strong"),i=z("463"),m=z(" reporters had articles show up on the trending strip from November 2018 onward."),_=T(),c&&c.c(),g=T(),j(b.$$.fragment)},l(l){$&&$.l(l),t=v(l);const u=L("svelte-6vkw4y",document.head);h.l(u),n=O(),k&&k.l(u),e=O(),u.forEach(p),o=v(l),r=A(l,"P",{});var y=P(r);f=A(y,"STRONG",{});var Q=P(f);i=B(Q,"463"),Q.forEach(p),m=B(y," reporters had articles show up on the trending strip from November 2018 onward."),y.forEach(p),_=v(l),c&&c.l(l),g=v(l),F(b.$$.fragment,l)},m(l,u){$&&$.m(l,u),d(l,t,u),h.m(document.head,null),M(document.head,n),k&&k.m(document.head,null),M(document.head,e),d(l,o,u),d(l,r,u),M(r,f),M(f,i),M(r,m),d(l,_,u),c&&c.m(l,u),d(l,g,u),D(b,l,u),q=!0},p(l,[u]){var Q;typeof s<"u"&&(s.title||(Q=s.og)!=null&&Q.title)&&s.hide_title!==!0&&$.p(l,u),h.p(l,u),typeof s=="object"&&k.p(l,u),l[0].top_reporters?c?(c.p(l,u),u&1&&w(c,1)):(c=V(l),c.c(),w(c,1),c.m(g.parentNode,g)):c&&(ie(),C(c,1,1,()=>{c=null}),W());const y={};u&2&&(y.data=l[1]),u&64&&(y.$$scope={dirty:u,ctx:l}),b.$set(y)},i(l){q||(w(c),w(b.$$.fragment,l),q=!0)},o(l){C(c),C(b.$$.fragment,l),q=!1},d(l){$&&$.d(l),l&&p(t),h.d(l),p(n),k&&k.d(l),p(e),l&&p(o),l&&p(r),l&&p(_),c&&c.d(l),l&&p(g),G(b,l)}}}const s={title:"The 100 all-time longest-trending Buzzfeed News reporters"};function de(a,t,n){let e;Z(a,K,_=>n(4,e=_));let{data:o}=t,{data:r={},customFormattingSettings:f}=o;ee(K,e="e6f10eaa68a5e158ad7855a2b4a57983",e),te(ne,{getCustomFormats:()=>f.customFormats||[]});const i=function(_){var b,q;let g=(b=_.evidencemeta)==null?void 0:b.queries;if(g)for(let $=0;$<g.length;$++){let H=_[g[$].id],I=(q=_.evidencemeta)==null?void 0:q.queries[$].columnTypes;for(let h=0;h<H.length;h++)I&&Object.defineProperty(H[h],"_evidenceColumnTypes",{enumerable:!1,value:I})}};re(()=>{i(r)});let{top_reporters:m}=r;return a.$$set=_=>{"data"in _&&n(2,o=_.data)},a.$$.update=()=>{a.$$.dirty&4&&n(0,{data:r={},customFormattingSettings:f}=o,r),a.$$.dirty&1&&(Object.keys(r).length>0?x.set(!0):x.set(!1)),a.$$.dirty&1&&n(1,{top_reporters:m}=r,m)},[r,m,o]}class Te extends X{constructor(t){super(),Y(this,t,de,_e,J,{data:2})}}export{Te as default,s as metadata};
