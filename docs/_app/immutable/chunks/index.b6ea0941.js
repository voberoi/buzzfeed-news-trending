function N(){}const V=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function $t(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ot(t){return t()}function st(){return Object.create(null)}function A(t){t.forEach(ot)}function D(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Jt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function xt(t){return Object.keys(t).length===0}function wt(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t,e,n){t.$$.on_destroy.push(wt(e,n))}function Qt(t,e,n,i){if(t){const r=ut(t,e,n,i);return t[0](r)}}function ut(t,e,n,i){return t[1]&&i?bt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)u[c]=e.dirty[c]|r[c];return u}return e.dirty|r}return e.dirty}function Xt(t,e,n,i,r,u){if(r){const s=ut(e,n,i,u);t.p(s,r)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function te(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ee(t){return t??""}function ne(t,e,n){return t.set(n),e}function ie(t){return t&&D(t.destroy)?t.destroy:N}const lt=typeof window<"u";let X=lt?()=>window.performance.now():()=>Date.now(),Y=lt?t=>requestAnimationFrame(t):N;const j=new Set;function at(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&Y(at)}function Z(t){let e;return j.size===0&&Y(at),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}let G=!1;function kt(){G=!0}function vt(){G=!1}function Et(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:Et(1,r,d=>e[n[d]].claim_order,l))-1;i[o]=n[_]+1;const f=_+1;n[f]=o,r=Math.max(f,r)}const u=[],s=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);u.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<u.length&&s[o].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(s[o],_)}}function St(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=dt("style");return Ct(ft(t),e),e.sheet}function Ct(t,e){return St(t.head||t,e),e.sheet}function jt(t,e){if(G){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function re(t,e,n){G&&!n?jt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function _t(t){t.parentNode&&t.parentNode.removeChild(t)}function se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function dt(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function ce(){return tt(" ")}function oe(){return tt("")}function ue(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function le(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ae(t,e){for(const n in e)Dt(t,n,e[n])}function fe(t){return t===""?null:+t}function Tt(t){return Array.from(t.childNodes)}function Pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ht(t,e,n,i,r=!1){Pt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function mt(t,e,n,i){return ht(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||u.push(c.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function _e(t,e,n){return mt(t,e,n,dt)}function de(t,e,n){return mt(t,e,n,Mt)}function qt(t,e){return ht(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>tt(e),!0)}function he(t){return qt(t," ")}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pe(t,e){t.value=e??""}function ye(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ge(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function be(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function $e(t,e,n){t.classList[n?"add":"remove"](e)}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function xe(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function we(t,e){return new t(e)}const F=new Map;let I=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:At(e),rules:{}};return F.set(t,n),n}function U(t,e,n,i,r,u,s,c=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const g=e+(n-e)*u(m);l+=m*100+`%{${s(g,1-g)}}
`}const _=l+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Ot(_)}_${c}`,d=ft(t),{stylesheet:a,rules:h}=F.get(d)||Rt(d,t);h[f]||(h[f]=!0,a.insertRule(`@keyframes ${f} ${_}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${r}ms 1 both`,I+=1,f}function W(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),I-=r,I||Lt())}function Lt(){Y(()=>{I||(F.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&_t(e)}),F.clear())})}let O;function E(t){O=t}function C(){if(!O)throw new Error("Function called outside component initialization");return O}function ke(t){C().$$.before_update.push(t)}function ve(t){C().$$.on_mount.push(t)}function Ee(t){C().$$.after_update.push(t)}function Ne(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=pt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}function Se(t,e){return C().$$.context.set(t,e),e}function Ae(t){return C().$$.context.get(t)}const q=[],ct=[],B=[],K=[],yt=Promise.resolve();let Q=!1;function gt(){Q||(Q=!0,yt.then(et))}function Ce(){return gt(),yt}function M(t){B.push(t)}function je(t){K.push(t)}const J=new Set;let z=0;function et(){const t=O;do{for(;z<q.length;){const e=q[z];z++,E(e),zt(e.$$)}for(E(null),q.length=0,z=0;ct.length;)ct.pop()();for(let e=0;e<B.length;e+=1){const n=B[e];J.has(n)||(J.add(n),n())}B.length=0}while(q.length);for(;K.length;)K.pop()();Q=!1,J.clear(),E(t)}function zt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let P;function nt(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function S(t,e,n){t.dispatchEvent(pt(`${e?"intro":"outro"}${n}`))}const H=new Set;let k;function Bt(){k={r:0,c:[],p:k}}function Ht(){k.r||A(k.c),k=k.p}function it(t,e){t&&t.i&&(H.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),k.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const rt={duration:0};function Me(t,e,n){const i={direction:"in"};let r=e(t,n,i),u=!1,s,c,o=0;function l(){s&&W(t,s)}function _(){const{delay:d=0,duration:a=300,easing:h=V,tick:p=N,css:m}=r||rt;m&&(s=U(t,0,1,a,d,h,m,o++)),p(0,1);const g=X()+d,v=g+a;c&&c.abort(),u=!0,M(()=>S(t,!0,"start")),c=Z(b=>{if(u){if(b>=v)return p(1,0),S(t,!0,"end"),l(),u=!1;if(b>=g){const $=h((b-g)/a);p($,1-$)}}return u})}let f=!1;return{start(){f||(f=!0,W(t),D(r)?(r=r(i),nt().then(_)):_())},invalidate(){f=!1},end(){u&&(l(),u=!1)}}}function De(t,e,n){const i={direction:"out"};let r=e(t,n,i),u=!0,s;const c=k;c.r+=1;function o(){const{delay:l=0,duration:_=300,easing:f=V,tick:d=N,css:a}=r||rt;a&&(s=U(t,1,0,_,l,f,a));const h=X()+l,p=h+_;M(()=>S(t,!1,"start")),Z(m=>{if(u){if(m>=p)return d(0,1),S(t,!1,"end"),--c.r||A(c.c),!1;if(m>=h){const g=f((m-h)/_);d(1-g,g)}}return u})}return D(r)?nt().then(()=>{r=r(i),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),u&&(s&&W(t,s),u=!1)}}}function Te(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,c=null,o=null,l=null;function _(){l&&W(t,l)}function f(a,h){const p=a.b-s;return h*=Math.abs(p),{a:s,b:a.b,d:p,duration:h,start:a.start,end:a.start+h,group:a.group}}function d(a){const{delay:h=0,duration:p=300,easing:m=V,tick:g=N,css:v}=u||rt,b={start:X()+h,b:a};a||(b.group=k,k.r+=1),c||o?o=b:(v&&(_(),l=U(t,s,a,p,h,m,v)),a&&g(0,1),c=f(b,p),M(()=>S(t,a,"start")),Z($=>{if(o&&$>o.start&&(c=f(o,p),o=null,S(t,c.b,"start"),v&&(_(),l=U(t,s,c.b,c.duration,0,m,u.css))),c){if($>=c.end)g(s=c.b,1-s),S(t,c.b,"end"),o||(c.b?_():--c.group.r||A(c.group.c)),c=null;else if($>=c.start){const T=$-c.start;s=c.a+c.d*m(T/c.duration),g(s,1-s)}}return!!(c||o)}))}return{run(a){D(u)?nt().then(()=>{u=u(r),d(a)}):d(a)},end(){_(),c=o=null}}}function Pe(t,e){const n=e.token={};function i(r,u,s,c){if(e.token!==n)return;e.resolved=c;let o=e.ctx;s!==void 0&&(o=o.slice(),o[s]=c);const l=r&&(e.current=r)(o);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==u&&f&&(Bt(),Ft(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),Ht())}):e.block.d(1),l.c(),it(l,1),l.m(e.mount(),e.anchor),_=!0),e.block=l,e.blocks&&(e.blocks[u]=l),_&&et()}if($t(t)){const r=C();if(t.then(u=>{E(r),i(e.then,1,e.value,u),E(null)},u=>{if(E(r),i(e.catch,2,e.error,u),E(null),!e.hasCatch)throw u}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function qe(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Oe(t,e){t.d(1),e.delete(t.key)}function Re(t,e,n,i,r,u,s,c,o,l,_,f){let d=t.length,a=u.length,h=d;const p={};for(;h--;)p[t[h].key]=h;const m=[],g=new Map,v=new Map;for(h=a;h--;){const y=f(r,u,h),x=n(y);let w=s.get(x);w?i&&w.p(y,e):(w=l(x,y),w.c()),g.set(x,m[h]=w),x in p&&v.set(x,Math.abs(h-p[x]))}const b=new Set,$=new Set;function T(y){it(y,1),y.m(c,_),s.set(y.key,y),_=y.first,a--}for(;d&&a;){const y=m[a-1],x=t[d-1],w=y.key,R=x.key;y===x?(_=y.first,d--,a--):g.has(R)?!s.has(w)||b.has(w)?T(y):$.has(R)?d--:v.get(w)>v.get(R)?($.add(w),T(y)):(b.add(R),d--):(o(x,s),d--)}for(;d--;){const y=t[d];g.has(y.key)||o(y,s)}for(;a;)T(m[a-1]);return m}function Le(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],c=e[u];if(c){for(const o in s)o in c||(i[o]=1);for(const o in c)r[o]||(n[o]=c[o],r[o]=1);t[u]=c}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ze(t){return typeof t=="object"&&t!==null?t:{}}function Be(t,e,n,i){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,i===void 0&&n(t.$$.ctx[r]))}function He(t){t&&t.c()}function Fe(t,e){t&&t.l(e)}function It(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||M(()=>{const s=t.$$.on_mount.map(ot).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),u.forEach(M)}function Ut(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(q.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ie(t,e,n,i,r,u,s,c=[-1]){const o=O;E(t);const l=t.$$={fragment:null,ctx:[],props:u,update:N,not_equal:r,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:st(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,d,...a)=>{const h=a.length?a[0]:d;return l.ctx&&r(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&Wt(t,f)),d}):[],l.update(),_=!0,A(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){kt();const f=Tt(e.target);l.fragment&&l.fragment.l(f),f.forEach(_t)}else l.fragment&&l.fragment.c();e.intro&&it(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),vt(),et()}E(o)}class Ue{$destroy(){Ut(this,1),this.$destroy=N}$on(e,n){if(!D(n))return N;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ke as $,It as A,Ut as B,N as C,se as D,ee as E,jt as F,Kt as G,Mt as H,de as I,$e as J,ue as K,ie as L,D as M,A as N,Be as O,je as P,M as Q,Me as R,Ue as S,De as T,Qt as U,Xt as V,Yt as W,Vt as X,Ne as Y,et as Z,Se as _,ce as a,Ae as a0,wt as a1,xe as a2,Jt as a3,ne as a4,bt as a5,Le as a6,ze as a7,Zt as a8,pe as a9,fe as aa,Te as ab,V as ac,ae as ad,te as ae,be as af,ge as ag,le as ah,Pe as ai,qe as aj,Re as ak,Oe as al,re as b,he as c,Ft as d,oe as e,Ht as f,it as g,_t as h,Ie as i,Ee as j,dt as k,_e as l,Tt as m,Dt as n,ve as o,ye as p,tt as q,qt as r,Gt as s,Ce as t,me as u,Bt as v,ct as w,we as x,He as y,Fe as z};