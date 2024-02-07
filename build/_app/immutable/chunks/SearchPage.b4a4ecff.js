import{s as q,f as g,g as w,j as _,i as d,Z as P,L as T,n as I,d as m,q as S,N as V,_ as j,o as M,P as Q,a as W,h as y,c as Z,$ as z,Q as A,R as B,S as F}from"./scheduler.7a274a43.js";import{S as C,i as E,b as L,d as D,m as R,a as b,t as v,e as U,f as G}from"./index.28409b7f.js";import{C as H}from"./CommonPage.f97790b3.js";import{p as J}from"./stores.58cef254.js";import{b as K}from"./paths.931425e5.js";function O(s){let e,t,n;return{c(){e=g("input"),this.h()},l(o){e=w(o,"INPUT",{placeholder:!0,class:!0}),this.h()},h(){_(e,"placeholder",s[1]),_(e,"class","text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em]  svelte-c0g44u")},m(o,l){d(o,e,l),s[4](e),P(e,s[0]),t||(n=T(e,"input",s[5]),t=!0)},p(o,[l]){l&2&&_(e,"placeholder",o[1]),l&1&&e.value!==o[0]&&P(e,o[0])},i:I,o:I,d(o){o&&m(e),s[4](null),t=!1,n()}}}function X(s,e,t){let{value:n=""}=e,{placeholder:o=""}=e,l;function f(){l.focus()}function p(u){S[u?"unshift":"push"](()=>{l=u,t(2,l)})}function h(){n=this.value,t(0,n)}return s.$$set=u=>{"value"in u&&t(0,n=u.value),"placeholder"in u&&t(1,o=u.placeholder)},[n,o,l,f,p,h]}class Y extends C{constructor(e){super(),E(this,e,X,O,q,{value:0,placeholder:1,focus:3})}get focus(){return this.$$.ctx[3]}}function $(s){let e,t,n,o,l,f;function p(a){s[7](a)}let h={placeholder:"Search..."};s[0]!==void 0&&(h.value=s[0]),t=new Y({props:h}),s[6](t),S.push(()=>G(t,"value",p));const u=s[5].default,r=Q(u,s,s[8],null);return{c(){e=g("div"),L(t.$$.fragment),o=W(),l=g("div"),r&&r.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var c=y(e);D(t.$$.fragment,c),c.forEach(m),o=Z(a),l=w(a,"DIV",{class:!0});var i=y(l);r&&r.l(i),i.forEach(m),this.h()},h(){_(e,"class","w-100% row"),_(l,"class","w-100% col flex-1")},m(a,c){d(a,e,c),R(t,e,null),d(a,o,c),d(a,l,c),r&&r.m(l,null),f=!0},p(a,c){const i={};!n&&c&1&&(n=!0,i.value=a[0],z(()=>n=!1)),t.$set(i),r&&r.p&&(!f||c&256)&&A(r,u,a,a[8],f?F(u,a[8],c,null):B(a[8]),null)},i(a){f||(b(t.$$.fragment,a),b(r,a),f=!0)},o(a){v(t.$$.fragment,a),v(r,a),f=!1},d(a){a&&(m(e),m(o),m(l)),s[6](null),U(t),r&&r.d(a)}}}function x(s){let e,t;return e=new H({props:{title:s[1],$$slots:{default:[$]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,o){R(e,n,o),t=!0},p(n,[o]){const l={};o&2&&(l.title=n[1]),o&261&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){U(e,n)}}}function ee(s,e,t){let n;V(s,J,i=>t(4,n=i));let{$$slots:o={},$$scope:l}=e,{title:f="Title"}=e,{search:p=""}=e,h;const u=j();let r=!1;M(()=>{let i=new URLSearchParams(window.location.search);t(0,p=i.get("q")??""),t(3,r=!0)});function a(i){S[i?"unshift":"push"](()=>{h=i,t(2,h)})}function c(i){p=i,t(0,p)}return s.$$set=i=>{"title"in i&&t(1,f=i.title),"search"in i&&t(0,p=i.search),"$$scope"in i&&t(8,l=i.$$scope)},s.$$.update=()=>{if(s.$$.dirty&1&&u("search",{search:p.trim().toLowerCase()}),s.$$.dirty&29&&r){let i=new URLSearchParams(window.location.search);i.set("q",p);const k=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${i.toString()}`,N=window.history.state;window.history.replaceState(N,"",k),n.url.pathname.startsWith(`${K}/search`)&&h&&h.focus()}},[p,f,h,r,n,o,a,c,l]}class le extends C{constructor(e){super(),E(this,e,ee,x,q,{title:1,search:0})}}export{le as S};
