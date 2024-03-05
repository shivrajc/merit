var Zt=Object.defineProperty;var en=(t,e,n)=>e in t?Zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var nt=(t,e,n)=>(en(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function I(){}function Gt(t){return t()}function xt(){return Object.create(null)}function we(t){t.forEach(Gt)}function He(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tn(t){return Object.keys(t).length===0}function nn(t,...e){if(t==null){for(const i of e)i(void 0);return I}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(nn(e,n))}function c(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function pe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function j(){return v(" ")}function ln(){return v("")}function Ae(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function sn(t){return Array.from(t.childNodes)}function y(t,e){e=""+e,t.data!==e&&(t.data=e)}function D(t,e,n){t.classList.toggle(e,!!n)}function rn(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}let ke;function $e(t){ke=t}function an(){if(!ke)throw new Error("Function called outside component initialization");return ke}function qe(){const t=an();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const r=rn(e,n,{cancelable:i});return l.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function lt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const je=[],Tt=[];let be=[];const Dt=[],cn=Promise.resolve();let st=!1;function on(){st||(st=!0,cn.then(Jt))}function rt(t){be.push(t)}const it=new Set;let ge=0;function Jt(){if(ge!==0)return;const t=ke;do{try{for(;ge<je.length;){const e=je[ge];ge++,$e(e),un(e.$$)}}catch(e){throw je.length=0,ge=0,e}for($e(null),je.length=0,ge=0;Tt.length;)Tt.pop()();for(let e=0;e<be.length;e+=1){const n=be[e];it.has(n)||(it.add(n),n())}be.length=0}while(je.length);for(;Dt.length;)Dt.pop()();st=!1,it.clear(),$e(t)}function un(t){if(t.fragment!==null){t.update(),we(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}function dn(t){const e=[],n=[];be.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),be=e}const Fe=new Set;let de;function ct(){de={r:0,c:[],p:de}}function ot(){de.r||we(de.c),de=de.p}function P(t,e){t&&t.i&&(Fe.delete(t),t.i(e))}function L(t,e,n,i){if(t&&t.o){if(Fe.has(t))return;Fe.add(t),de.c.push(()=>{Fe.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function z(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function G(t){t&&t.c()}function F(t,e,n){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),rt(()=>{const r=t.$$.on_mount.map(Gt).filter(He);t.$$.on_destroy?t.$$.on_destroy.push(...r):we(r),t.$$.on_mount=[]}),l.forEach(rt)}function H(t,e){const n=t.$$;n.fragment!==null&&(dn(n.after_update),we(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pn(t,e){t.$$.dirty[0]===-1&&(je.push(t),on(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,i,l,r,o=null,s=[-1]){const u=ke;$e(t);const a=t.$$={fragment:null,ctx:[],props:r,update:I,not_equal:l,bound:xt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:xt(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};o&&o(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(d,g,...f)=>{const h=f.length?f[0]:g;return a.ctx&&l(a.ctx[d],a.ctx[d]=h)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](h),_&&pn(t,d)),g}):[],a.update(),_=!0,we(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){const d=sn(e.target);a.fragment&&a.fragment.l(d),d.forEach(M)}else a.fragment&&a.fragment.c();e.intro&&P(t.$$.fragment),F(t,e.target,e.anchor),Jt()}$e(u)}class R{constructor(){nt(this,"$$");nt(this,"$$set")}$destroy(){H(this,1),this.$destroy=I}$on(e,n){if(!He(n))return I;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!tn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fn);function _n(t){let e;return{c(){e=p("div"),e.innerHTML='<h2 class="title svelte-1foj99f">COMPANY NAME</h2>',m(e,"class","title-container")},m(n,i){T(n,e,i)},p:I,i:I,o:I,d(n){n&&M(e)}}}class mn extends R{constructor(e){super(),K(this,e,null,_n,U,{})}}function hn(t){let e,n;return e=new mn({}),{c(){G(e.$$.fragment)},m(i,l){F(e,i,l),n=!0},p:I,i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){L(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}class gn extends R{constructor(e){super(),K(this,e,null,hn,U,{})}}function Lt(t,e,n){const i=t.slice();return i[5]=e[n],i}function Et(t){let e,n=t[5]+"",i,l,r,o;function s(){return t[3](t[5])}return{c(){e=p("div"),i=v(n),l=j(),m(e,"class","item svelte-d803pk"),D(e,"selected",t[1]===t[5])},m(u,a){T(u,e,a),c(e,i),c(e,l),r||(o=Ae(e,"click",s),r=!0)},p(u,a){t=u,a&1&&n!==(n=t[5]+"")&&y(i,n),a&3&&D(e,"selected",t[1]===t[5])},d(u){u&&M(e),r=!1,o()}}}function vn(t){let e,n=z(t[0]),i=[];for(let l=0;l<n.length;l+=1)i[l]=Et(Lt(t,n,l));return{c(){e=p("div");for(let l=0;l<i.length;l+=1)i[l].c();m(e,"class","item-container svelte-d803pk")},m(l,r){T(l,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(l,[r]){if(r&7){n=z(l[0]);let o;for(o=0;o<n.length;o+=1){const s=Lt(l,n,o);i[o]?i[o].p(s,r):(i[o]=Et(s),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:I,o:I,d(l){l&&M(e),pe(i,l)}}}function jn(t,e,n){const i=qe();let{menuItems:l}=e,{selectedItem:r}=e;function o(u){i("menu-change",{item:u})}const s=u=>o(u);return t.$$set=u=>{"menuItems"in u&&n(0,l=u.menuItems),"selectedItem"in u&&n(1,r=u.selectedItem)},[l,r,o,s]}class bn extends R{constructor(e){super(),K(this,e,jn,vn,U,{menuItems:0,selectedItem:1})}}const ve=[];function Qt(t,e=I){let n;const i=new Set;function l(s){if(U(t,s)&&(t=s,n)){const u=!ve.length;for(const a of i)a[1](),ve.push(a,t);if(u){for(let a=0;a<ve.length;a+=2)ve[a][0](ve[a+1]);ve.length=0}}}function r(s){l(s(t))}function o(s,u=I){const a=[s,u];return i.add(a),i.size===1&&(n=e(l,r)||I),s(t),()=>{i.delete(a),i.size===0&&n&&(n(),n=null)}}return{set:l,update:r,subscribe:o}}const Xt=Qt([{project_id:"p-1",project_name:"Business Intelligence Architect",project_description:"The BI Architect is responsible for designing and implementing comprehensive business intelligence solutions to support the organization's data-driven decision-making process. This role involves understanding business requirements, analyzing data sources, and designing scalable and efficient BI systems.",project_detailed_description:"The BI Architect is responsible for designing and implementing comprehensive business intelligence solutions to support the organization's data-driven decision-making process. This role involves understanding business requirements, analyzing data sources, and designing scalable and efficient BI systems.",skills_required:["Power BI","Tableau","data architecture design","BI","Visualization"],min_exp_reqd:10,max_exp_reqd:12,status:"active",created_by:"Adam",company_id:"c-1",applications:[],hired_contractors:[],expected_pay:50,expected_pay_currency:"USD",expected_pay_duration:"hour",created_on:"3/2/2024",modified_on:"3/2/2024",min_duration_months:"8",max_duration_months:"12"},{project_id:"p-2",project_name:"AI/Machine Learning Mentor",project_description:"We're seeking an AI/ML Technology Mentor/Advisor with a rich background in artificial intelligence and machine learning to guide our development team. This role is perfect for someone passionate about leveraging their expertise to make a meaningful impact in the EdTech sector.",project_detailed_description:"We're seeking an AI/ML Technology Mentor/Advisor with a rich background in artificial intelligence and machine learning to guide our development team. This role is perfect for someone passionate about leveraging their expertise to make a meaningful impact in the EdTech sector.",skills_required:["Data Mining","Data Science","Machine Learning","Artificial Intelligence (AI)"],min_exp_reqd:4,max_exp_reqd:6,status:"completed",created_by:"Adam",company_id:"c-1",applications:[],hired_contractors:[],expected_pay:60,expected_pay_currency:"USD",expected_pay_duration:"hour",created_on:"2/24/2024",modified_on:"3/1/2024",min_duration_months:"4",max_duration_months:"6"},{project_id:"p-3",project_name:"AI/Machine Learning Mentor",project_description:"We're seeking an AI/ML Technology Mentor/Advisor with a rich background in artificial intelligence and machine learning to guide our development team. This role is perfect for someone passionate about leveraging their expertise to make a meaningful impact in the EdTech sector.",skills_required:["Data Mining","Data Science","Machine Learning","Artificial Intelligence (AI)"],min_exp_reqd:4,max_exp_reqd:6,status:"closed",created_by:"Adam",company_id:"c-1",applications:[],hired_contractors:[],expected_pay:60,expected_pay_currency:"USD",expected_pay_duration:"hour",created_on:"2/24/2024",modified_on:"3/1/2024",min_duration_months:"4",max_duration_months:"6"},{project_id:"p-4",project_name:"AI/Machine Learning Mentor",project_description:"We're seeking an AI/ML Technology Mentor/Advisor with a rich background in artificial intelligence and machine learning to guide our development team. This role is perfect for someone passionate about leveraging their expertise to make a meaningful impact in the EdTech sector.",project_detailed_description:"We're seeking an AI/ML Technology Mentor/Advisor with a rich background in artificial intelligence and machine learning to guide our development team. This role is perfect for someone passionate about leveraging their expertise to make a meaningful impact in the EdTech sector.",skills_required:["Data Mining","Data Science","Machine Learning","Artificial Intelligence (AI)"],min_exp_reqd:4,max_exp_reqd:6,status:"archived",created_by:"Adam",company_id:"c-1",applications:[],hired_contractors:[],expected_pay:60,expected_pay_currency:"USD",expected_pay_duration:"hour",created_on:"2/24/2024",modified_on:"3/1/2024",min_duration_months:"4",max_duration_months:"6"},{project_id:"p-5",project_name:"AI/Machine Learning Mentor",project_description:"We're seeking an AI/ML Technology Mentor/Advisor with a rich background in artificial intelligence and machine learning to guide our development team. This role is perfect for someone passionate about leveraging their expertise to make a meaningful impact in the EdTech sector.",skills_required:["Data Mining","Data Science","Machine Learning","Artificial Intelligence (AI)"],min_exp_reqd:4,max_exp_reqd:6,status:"active",created_by:"Adam",company_id:"c-1",applications:[],hired_contractors:[],expected_pay:60,expected_pay_currency:"USD",expected_pay_duration:"hour",created_on:"2/24/2024",modified_on:"3/1/2024",min_duration_months:"",max_duration_months:""},{project_id:"p-6",project_name:"AI/Machine Learning Mentor",project_description:"We're seeking an AI/ML Technology Mentor/Advisor with a rich background in artificial intelligence and machine learning to guide our development team. This role is perfect for someone passionate about leveraging their expertise to make a meaningful impact in the EdTech sector.",skills_required:["Data Mining","Data Science","Machine Learning","Artificial Intelligence (AI)"],min_exp_reqd:4,max_exp_reqd:6,status:"active",created_by:"Adam",company_id:"c-1",applications:[],hired_contractors:[],expected_pay:60,expected_pay_currency:"USD",expected_pay_duration:"hour",created_on:"2/24/2024",modified_on:"3/1/2024",min_duration_months:"",max_duration_months:""},{project_id:"p-7",project_name:"Business Intelligence Architect",project_description:"The BI Architect is responsible for designing and implementing comprehensive business intelligence solutions to support the organization's data-driven decision-making process. This role involves understanding business requirements, analyzing data sources, and designing scalable and efficient BI systems.",project_detailed_description:"The BI Architect is responsible for designing and implementing comprehensive business intelligence solutions to support the organization's data-driven decision-making process. This role involves understanding business requirements, analyzing data sources, and designing scalable and efficient BI systems.",skills_required:["Power BI","Tableau","data architecture design","BI","Visualization"],min_exp_reqd:10,max_exp_reqd:12,status:"completed",created_by:"Adam",company_id:"c-1",applications:[],hired_contractors:[],expected_pay:50,expected_pay_currency:"USD",expected_pay_duration:"hour",created_on:"3/2/2024",modified_on:"3/2/2024",min_duration_months:"8",max_duration_months:"12"}]);function Ct(t,e,n){const i=t.slice();return i[4]=e[n],i}function Nt(t){let e,n=t[4]+"",i;return{c(){e=p("span"),i=v(n),m(e,"class","skill svelte-fxrxqy")},m(l,r){T(l,e,r),c(e,i)},p(l,r){r&1&&n!==(n=l[4]+"")&&y(i,n)},d(l){l&&M(e)}}}function yn(t){let e,n,i=t[0].project_name+"",l,r,o,s,u=t[0].project_description+"",a,_,d,g,f,h=t[0].min_exp_reqd+"",k,N,W=t[0].max_exp_reqd+"",E,q,te,ne,re,J,ie=(t[0].duration===""?"NA":t[0].duration)+"",fe,le,Q,ae,se,_e,X=z(t[0].skills_required.slice(0,4)),A=[];for(let $=0;$<X.length;$+=1)A[$]=Nt(Ct(t,X,$));return{c(){e=p("div"),n=p("p"),l=v(i),r=j(),o=p("div"),s=p("p"),a=v(u),_=j(),d=p("p"),g=v("Experience: "),f=p("span"),k=v(h),N=v(" to "),E=v(W),q=v(" yrs"),te=j(),ne=p("p"),re=v("Duration: "),J=p("span"),fe=v(ie),le=j(),Q=p("p"),ae=v(`Key Skills:\r
            `);for(let $=0;$<A.length;$+=1)A[$].c();m(n,"class","heading svelte-fxrxqy"),m(s,"class","description svelte-fxrxqy"),m(f,"class","value svelte-fxrxqy"),m(d,"class","experience content-header svelte-fxrxqy"),m(J,"class","value svelte-fxrxqy"),m(ne,"class","duration content-header svelte-fxrxqy"),m(Q,"class","skills content-header svelte-fxrxqy"),m(o,"class","content svelte-fxrxqy"),m(e,"class","container svelte-fxrxqy")},m($,B){T($,e,B),c(e,n),c(n,l),c(e,r),c(e,o),c(o,s),c(s,a),c(o,_),c(o,d),c(d,g),c(d,f),c(f,k),c(f,N),c(f,E),c(f,q),c(o,te),c(o,ne),c(ne,re),c(ne,J),c(J,fe),c(o,le),c(o,Q),c(Q,ae);for(let w=0;w<A.length;w+=1)A[w]&&A[w].m(Q,null);se||(_e=Ae(n,"click",t[2]),se=!0)},p($,[B]){if(B&1&&i!==(i=$[0].project_name+"")&&y(l,i),B&1&&u!==(u=$[0].project_description+"")&&y(a,u),B&1&&h!==(h=$[0].min_exp_reqd+"")&&y(k,h),B&1&&W!==(W=$[0].max_exp_reqd+"")&&y(E,W),B&1&&ie!==(ie=($[0].duration===""?"NA":$[0].duration)+"")&&y(fe,ie),B&1){X=z($[0].skills_required.slice(0,4));let w;for(w=0;w<X.length;w+=1){const me=Ct($,X,w);A[w]?A[w].p(me,B):(A[w]=Nt(me),A[w].c(),A[w].m(Q,null))}for(;w<A.length;w+=1)A[w].d(1);A.length=X.length}},i:I,o:I,d($){$&&M(e),pe(A,$),se=!1,_e()}}}function $n(t,e,n){const i=qe();let{project:l}=e;function r(s){i("project-click",{projectView:"Project Card",projectID:s})}const o=()=>r(l.project_id);return t.$$set=s=>{"project"in s&&n(0,l=s.project)},[l,r,o]}class kn extends R{constructor(e){super(),K(this,e,$n,yn,U,{project:0})}}function Bt(t,e,n){const i=t.slice();return i[4]=e[n],i[6]=n,i}function zt(t){let e,n=t[4]+"",i,l,r,o;return{c(){e=p("li"),i=v(n),l=j(),m(e,"class","list-item svelte-7wrq4y"),D(e,"selected-item",t[1]===t[4]),D(e,"first",t[6]===0),D(e,"last",t[6]===t[0].length-1),D(e,"middle",t[6]!==0&&t[6]!==t[0].length-1)},m(s,u){T(s,e,u),c(e,i),c(e,l),r||(o=Ae(e,"click",function(){He(t[2](t[4]))&&t[2](t[4]).apply(this,arguments)}),r=!0)},p(s,u){t=s,u&1&&n!==(n=t[4]+"")&&y(i,n),u&3&&D(e,"selected-item",t[1]===t[4]),u&1&&D(e,"last",t[6]===t[0].length-1),u&1&&D(e,"middle",t[6]!==0&&t[6]!==t[0].length-1)},d(s){s&&M(e),r=!1,o()}}}function wn(t){let e,n,i,l,r,o,s,u,a=z(t[0]),_=[];for(let d=0;d<a.length;d+=1)_[d]=zt(Bt(t,a,d));return{c(){e=p("div"),n=p("p"),n.textContent="Projects",i=j(),l=p("div"),r=p("button"),r.innerHTML='<span class="btn-plus-text svelte-7wrq4y">+</span>  Add a Project',o=j(),s=p("div"),u=p("ul");for(let d=0;d<_.length;d+=1)_[d].c();m(n,"class","header svelte-7wrq4y"),m(r,"class","btn-new-project svelte-7wrq4y"),m(u,"class","status-filters svelte-7wrq4y"),m(s,"class","nav-items"),m(l,"class","nav-items-container svelte-7wrq4y"),m(e,"class","container svelte-7wrq4y")},m(d,g){T(d,e,g),c(e,n),c(e,i),c(e,l),c(l,r),c(l,o),c(l,s),c(s,u);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(u,null)},p(d,[g]){if(g&7){a=z(d[0]);let f;for(f=0;f<a.length;f+=1){const h=Bt(d,a,f);_[f]?_[f].p(h,g):(_[f]=zt(h),_[f].c(),_[f].m(u,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=a.length}},i:I,o:I,d(d){d&&M(e),pe(_,d)}}}function An(t,e,n){const i=qe();let{projectStatus:l}=e,{selectedStatus:r}=e;function o(s){i("status-filter",{status:s})}return t.$$set=s=>{"projectStatus"in s&&n(0,l=s.projectStatus),"selectedStatus"in s&&n(1,r=s.selectedStatus)},[l,r,o]}class qn extends R{constructor(e){super(),K(this,e,An,wn,U,{projectStatus:0,selectedStatus:1})}}function Vt(t,e,n){const i=t.slice();return i[6]=e[n],i}function Ot(t){let e,n;return e=new kn({props:{project:t[6]}}),e.$on("project-click",t[5]),{c(){G(e.$$.fragment)},m(i,l){F(e,i,l),n=!0},p(i,l){const r={};l&3&&(r.project=i[6]),e.$set(r)},i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){L(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function In(t){let e,n,i,l,r;n=new qn({props:{projectStatus:t[2],selectedStatus:t[0]}}),n.$on("status-filter",t[3]);let o=z(t[1].filter(t[4])),s=[];for(let a=0;a<o.length;a+=1)s[a]=Ot(Vt(t,o,a));const u=a=>L(s[a],1,1,()=>{s[a]=null});return{c(){e=p("div"),G(n.$$.fragment),i=j(),l=p("div");for(let a=0;a<s.length;a+=1)s[a].c();m(e,"class","navigation svelte-1lqu1kw"),m(l,"class","container svelte-1lqu1kw")},m(a,_){T(a,e,_),F(n,e,null),T(a,i,_),T(a,l,_);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(l,null);r=!0},p(a,[_]){const d={};if(_&1&&(d.selectedStatus=a[0]),n.$set(d),_&3){o=z(a[1].filter(a[4]));let g;for(g=0;g<o.length;g+=1){const f=Vt(a,o,g);s[g]?(s[g].p(f,_),P(s[g],1)):(s[g]=Ot(f),s[g].c(),P(s[g],1),s[g].m(l,null))}for(ct(),g=o.length;g<s.length;g+=1)u(g);ot()}},i(a){if(!r){P(n.$$.fragment,a);for(let _=0;_<o.length;_+=1)P(s[_]);r=!0}},o(a){L(n.$$.fragment,a),s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)L(s[_]);r=!1},d(a){a&&(M(e),M(i),M(l)),H(n),pe(s,a)}}}function Sn(t,e,n){let i;at(t,Xt,a=>n(1,i=a));const l=[...new Set(i.map(a=>a.status))];let r="active";function o(a){n(0,r=a.detail.status)}const s=a=>a.status===r;function u(a){lt.call(this,t,a)}return[r,i,l,o,s,u]}class Pn extends R{constructor(e){super(),K(this,e,Sn,In,U,{})}}const Mn=Qt([{application_id:"a-1",project_id:"p-1",contractor_id:"f-1",status:"active",acceptance_status:"review",created_on:"3/2/2024",modified_on:"3/2/2024",comment:"NA"},{application_id:"a-2",project_id:"p-5",contractor_id:"f-1",status:"active",acceptance_status:"rejected",created_on:"3/2/2024",modified_on:"3/2/2024",comment:"NA"},{application_id:"a-4",project_id:"p-1",contractor_id:"f-4",status:"active",acceptance_status:"rejected",created_on:"3/2/2024",modified_on:"3/2/2024",comment:"NA"},{application_id:"a-3",project_id:"p-5",contractor_id:"f-2",status:"active",acceptance_status:"review",created_on:"3/2/2024",modified_on:"3/2/2024",comment:"NA"}]);function Ut(t,e,n){const i=t.slice();return i[4]=e[n],i[6]=n,i}function Wt(t){let e,n=t[4]+"",i,l,r,o;return{c(){e=p("li"),i=v(n),l=j(),m(e,"class","list-item svelte-1emavp5"),D(e,"selected-item",t[1]===t[4]),D(e,"first",t[6]===0),D(e,"last",t[6]===t[0].length-1),D(e,"middle",t[6]!==0&&t[6]!==t[0].length-1)},m(s,u){T(s,e,u),c(e,i),c(e,l),r||(o=Ae(e,"click",function(){He(t[2](t[4]))&&t[2](t[4]).apply(this,arguments)}),r=!0)},p(s,u){t=s,u&1&&n!==(n=t[4]+"")&&y(i,n),u&3&&D(e,"selected-item",t[1]===t[4]),u&1&&D(e,"last",t[6]===t[0].length-1),u&1&&D(e,"middle",t[6]!==0&&t[6]!==t[0].length-1)},d(s){s&&M(e),r=!1,o()}}}function xn(t){let e,n,i=z(t[0]),l=[];for(let r=0;r<i.length;r+=1)l[r]=Wt(Ut(t,i,r));return{c(){e=p("div"),n=p("ul");for(let r=0;r<l.length;r+=1)l[r].c();m(n,"class","status-filters svelte-1emavp5"),m(e,"class","nav-items svelte-1emavp5")},m(r,o){T(r,e,o),c(e,n);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(n,null)},p(r,[o]){if(o&7){i=z(r[0]);let s;for(s=0;s<i.length;s+=1){const u=Ut(r,i,s);l[s]?l[s].p(u,o):(l[s]=Wt(u),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=i.length}},i:I,o:I,d(r){r&&M(e),pe(l,r)}}}function Tn(t,e,n){const i=qe();let{applicationStatus:l}=e,{selectedStatus:r}=e;function o(s){i("status-filter",{status:s})}return t.$$set=s=>{"applicationStatus"in s&&n(0,l=s.applicationStatus),"selectedStatus"in s&&n(1,r=s.selectedStatus)},[l,r,o]}class Dn extends R{constructor(e){super(),K(this,e,Tn,xn,U,{applicationStatus:0,selectedStatus:1})}}function Ft(t,e,n){const i=t.slice();return i[6]=e[n],i}function Ht(t){let e,n,i=t[6].contractor_id+"",l,r,o,s=t[6].application_id+"",u,a,_,d=t[6].created_on+"",g,f,h,k=t[6].comment+"",N,W;return{c(){e=p("div"),n=p("span"),l=v(i),r=j(),o=p("span"),u=v(s),a=j(),_=p("span"),g=v(d),f=j(),h=p("span"),N=v(k),W=j(),m(e,"class","application-wrapper svelte-et0rb3")},m(E,q){T(E,e,q),c(e,n),c(n,l),c(e,r),c(e,o),c(o,u),c(e,a),c(e,_),c(_,g),c(e,f),c(e,h),c(h,N),c(e,W)},p(E,q){q&2&&i!==(i=E[6].contractor_id+"")&&y(l,i),q&2&&s!==(s=E[6].application_id+"")&&y(u,s),q&2&&d!==(d=E[6].created_on+"")&&y(g,d),q&2&&k!==(k=E[6].comment+"")&&y(N,k)},d(E){E&&M(e)}}}function Ln(t){let e,n,i,l,r,o,s,u;r=new Dn({props:{applicationStatus:t[2],selectedStatus:t[0]}}),r.$on("status-filter",t[3]);let a=z(t[1]),_=[];for(let d=0;d<a.length;d+=1)_[d]=Ht(Ft(t,a,d));return{c(){e=p("div"),n=p("div"),i=p("p"),i.textContent="Application Details",l=j(),G(r.$$.fragment),o=j(),s=p("div");for(let d=0;d<_.length;d+=1)_[d].c();m(i,"class","application-details-header svelte-et0rb3"),m(n,"class","application-nav svelte-et0rb3"),m(s,"class","application-list svelte-et0rb3"),m(e,"class","container")},m(d,g){T(d,e,g),c(e,n),c(n,i),c(n,l),F(r,n,null),c(e,o),c(e,s);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(s,null);u=!0},p(d,[g]){const f={};if(g&1&&(f.selectedStatus=d[0]),r.$set(f),g&2){a=z(d[1]);let h;for(h=0;h<a.length;h+=1){const k=Ft(d,a,h);_[h]?_[h].p(k,g):(_[h]=Ht(k),_[h].c(),_[h].m(s,null))}for(;h<_.length;h+=1)_[h].d(1);_.length=a.length}},i(d){u||(P(r.$$.fragment,d),u=!0)},o(d){L(r.$$.fragment,d),u=!1},d(d){d&&M(e),H(r),pe(_,d)}}}function En(t,e,n){let i,l;at(t,Mn,a=>n(5,l=a));let{projectID:r}=e;const o=["review","accepted","rejected"];let s="review";function u(a){n(0,s=a.detail.status)}return t.$$set=a=>{"projectID"in a&&n(4,r=a.projectID)},t.$$.update=()=>{t.$$.dirty&49&&n(1,i=l.filter(a=>a.acceptance_status===s&&a.project_id===r))},[s,i,o,u,r,l]}class Cn extends R{constructor(e){super(),K(this,e,En,Ln,U,{projectID:4})}}function Kt(t,e,n){const i=t.slice();return i[4]=e[n],i[6]=n,i}function Rt(t){let e,n=t[4]+"",i,l=t[0].skills_required.length-1===t[6]?"":", ",r,o;return{c(){e=p("span"),i=v(n),r=v(l),o=j(),m(e,"class","skill")},m(s,u){T(s,e,u),c(e,i),c(e,r),c(e,o)},p(s,u){u&1&&n!==(n=s[4]+"")&&y(i,n),u&1&&l!==(l=s[0].skills_required.length-1===s[6]?"":", ")&&y(r,l)},d(s){s&&M(e)}}}function Nn(t){let e,n,i,l,r,o,s,u=t[0].project_name+"",a,_,d,g,f,h,k,N=t[0].project_name+"",W,E,q,te,ne,re,J=t[0].project_id+"",ie,fe,le,Q,ae,se=t[0].created_on+"",_e,X,A,$,B,w=t[0].created_by+"",me,ut,ye,dt,Ie,Se=t[0].status+"",Ke,pt,Pe,ft,V,Me,xe=t[0].project_description+"",Re,_t,ce,Te,mt,ht,Z,De,gt,Le=t[0].min_exp_reqd+"",Ye,vt,Ee=t[0].max_exp_reqd+"",Ge,jt,bt,ee,Ce,yt,Ne=t[0].min_duration_months+"",Je,$t,Be=t[0].max_duration_months+"",Qe,kt,wt,Y,ze,At,Ve=t[0].expected_pay+"",Xe,qt,Oe=t[0].expected_pay_currency+"",Ze,It,Ue=t[0].expected_pay_duration+"",et,St,We,oe,x,tt,Pt,he=z(t[0].skills_required),C=[];for(let b=0;b<he.length;b+=1)C[b]=Rt(Kt(t,he,b));return oe=new Cn({props:{projectID:t[0].project_id}}),{c(){e=p("div"),n=p("div"),i=p("span"),i.textContent="Projects",l=j(),r=p("span"),r.textContent=">",o=j(),s=p("span"),a=v(u),_=j(),d=p("div"),g=p("div"),f=p("div"),h=p("div"),k=p("p"),W=v(N),E=j(),q=p("div"),te=p("span"),ne=v("ID: "),re=p("span"),ie=v(J),fe=j(),le=p("span"),Q=v("Posted on: "),ae=p("span"),_e=v(se),X=j(),A=p("span"),$=v("Posted by: "),B=p("span"),me=v(w),ut=j(),ye=p("span"),dt=v("Status: "),Ie=p("span"),Ke=v(Se),pt=j(),Pe=p("div"),Pe.innerHTML='<div class="action-button svelte-5dsuxy">Actions  <span class="action-down-arrow svelte-5dsuxy">▼</span></div>',ft=j(),V=p("div"),Me=p("p"),Re=v(xe),_t=j(),ce=p("p"),Te=p("span"),Te.textContent="Key skills required:",mt=j();for(let b=0;b<C.length;b+=1)C[b].c();ht=j(),Z=p("p"),De=p("span"),De.textContent="Experience required:",gt=j(),Ye=v(Le),vt=v(" to "),Ge=v(Ee),jt=v(" years"),bt=j(),ee=p("p"),Ce=p("span"),Ce.textContent="Project Duration:",yt=j(),Je=v(Ne),$t=v(" to "),Qe=v(Be),kt=v(" months"),wt=j(),Y=p("p"),ze=p("span"),ze.textContent="Expected Pay:",At=j(),Xe=v(Ve),qt=j(),Ze=v(Oe),It=v("/"),et=v(Ue),St=j(),We=p("div"),G(oe.$$.fragment),m(i,"class","project-link svelte-5dsuxy"),m(n,"class","breadcrumb svelte-5dsuxy"),m(k,"class","project-header-name svelte-5dsuxy"),m(re,"class","value svelte-5dsuxy"),m(te,"class","label svelte-5dsuxy"),m(ae,"class","value svelte-5dsuxy"),m(le,"class","label svelte-5dsuxy"),m(B,"class","value svelte-5dsuxy"),m(A,"class","label svelte-5dsuxy"),m(Ie,"class","value svelte-5dsuxy"),m(ye,"class","label svelte-5dsuxy"),m(q,"class","project-sub-header svelte-5dsuxy"),m(h,"class","project-header"),m(Pe,"class","project-actions"),m(f,"class","project-header-container svelte-5dsuxy"),m(Me,"class","project-description svelte-5dsuxy"),m(Te,"class","label svelte-5dsuxy"),m(ce,"class","project-skills"),m(De,"class","label svelte-5dsuxy"),m(Z,"class","project-experience"),m(Ce,"class","label svelte-5dsuxy"),m(ee,"class","project-duration"),m(ze,"class","label svelte-5dsuxy"),m(Y,"class","project-pay"),m(V,"class","project-details-container svelte-5dsuxy"),m(g,"class","project-details svelte-5dsuxy"),m(We,"class","application-details svelte-5dsuxy"),m(d,"class","project-content svelte-5dsuxy"),m(e,"class","container svelte-5dsuxy")},m(b,S){T(b,e,S),c(e,n),c(n,i),c(n,l),c(n,r),c(n,o),c(n,s),c(s,a),c(e,_),c(e,d),c(d,g),c(g,f),c(f,h),c(h,k),c(k,W),c(h,E),c(h,q),c(q,te),c(te,ne),c(te,re),c(re,ie),c(q,fe),c(q,le),c(le,Q),c(le,ae),c(ae,_e),c(q,X),c(q,A),c(A,$),c(A,B),c(B,me),c(q,ut),c(q,ye),c(ye,dt),c(ye,Ie),c(Ie,Ke),c(f,pt),c(f,Pe),c(g,ft),c(g,V),c(V,Me),c(Me,Re),c(V,_t),c(V,ce),c(ce,Te),c(ce,mt);for(let ue=0;ue<C.length;ue+=1)C[ue]&&C[ue].m(ce,null);c(V,ht),c(V,Z),c(Z,De),c(Z,gt),c(Z,Ye),c(Z,vt),c(Z,Ge),c(Z,jt),c(V,bt),c(V,ee),c(ee,Ce),c(ee,yt),c(ee,Je),c(ee,$t),c(ee,Qe),c(ee,kt),c(V,wt),c(V,Y),c(Y,ze),c(Y,At),c(Y,Xe),c(Y,qt),c(Y,Ze),c(Y,It),c(Y,et),c(d,St),c(d,We),F(oe,We,null),x=!0,tt||(Pt=Ae(i,"click",t[2]),tt=!0)},p(b,[S]){if((!x||S&1)&&u!==(u=b[0].project_name+"")&&y(a,u),(!x||S&1)&&N!==(N=b[0].project_name+"")&&y(W,N),(!x||S&1)&&J!==(J=b[0].project_id+"")&&y(ie,J),(!x||S&1)&&se!==(se=b[0].created_on+"")&&y(_e,se),(!x||S&1)&&w!==(w=b[0].created_by+"")&&y(me,w),(!x||S&1)&&Se!==(Se=b[0].status+"")&&y(Ke,Se),(!x||S&1)&&xe!==(xe=b[0].project_description+"")&&y(Re,xe),S&1){he=z(b[0].skills_required);let O;for(O=0;O<he.length;O+=1){const Mt=Kt(b,he,O);C[O]?C[O].p(Mt,S):(C[O]=Rt(Mt),C[O].c(),C[O].m(ce,null))}for(;O<C.length;O+=1)C[O].d(1);C.length=he.length}(!x||S&1)&&Le!==(Le=b[0].min_exp_reqd+"")&&y(Ye,Le),(!x||S&1)&&Ee!==(Ee=b[0].max_exp_reqd+"")&&y(Ge,Ee),(!x||S&1)&&Ne!==(Ne=b[0].min_duration_months+"")&&y(Je,Ne),(!x||S&1)&&Be!==(Be=b[0].max_duration_months+"")&&y(Qe,Be),(!x||S&1)&&Ve!==(Ve=b[0].expected_pay+"")&&y(Xe,Ve),(!x||S&1)&&Oe!==(Oe=b[0].expected_pay_currency+"")&&y(Ze,Oe),(!x||S&1)&&Ue!==(Ue=b[0].expected_pay_duration+"")&&y(et,Ue);const ue={};S&1&&(ue.projectID=b[0].project_id),oe.$set(ue)},i(b){x||(P(oe.$$.fragment,b),x=!0)},o(b){L(oe.$$.fragment,b),x=!1},d(b){b&&M(e),pe(C,b),H(oe),tt=!1,Pt()}}}function Bn(t,e,n){const i=qe();let{project:l}=e;function r(s){i("project-click",{projectView:s})}const o=()=>r("Projects");return t.$$set=s=>{"project"in s&&n(0,l=s.project)},[l,r,o]}class zn extends R{constructor(e){super(),K(this,e,Bn,Nn,U,{project:0})}}function Vn(t){let e,n;return e=new zn({props:{project:t[2].filter(t[4])[0]}}),e.$on("project-click",t[5]),{c(){G(e.$$.fragment)},m(i,l){F(e,i,l),n=!0},p(i,l){const r={};l&6&&(r.project=i[2].filter(i[4])[0]),e.$set(r)},i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){L(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function On(t){let e,n;return e=new Pn({}),e.$on("project-click",t[3]),{c(){G(e.$$.fragment)},m(i,l){F(e,i,l),n=!0},p:I,i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){L(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function Un(t){let e,n,i,l;const r=[On,Vn],o=[];function s(u,a){return u[0]==="Projects"||!u[1]?0:1}return e=s(t),n=o[e]=r[e](t),{c(){n.c(),i=ln()},m(u,a){o[e].m(u,a),T(u,i,a),l=!0},p(u,[a]){let _=e;e=s(u),e===_?o[e].p(u,a):(ct(),L(o[_],1,1,()=>{o[_]=null}),ot(),n=o[e],n?n.p(u,a):(n=o[e]=r[e](u),n.c()),P(n,1),n.m(i.parentNode,i))},i(u){l||(P(n),l=!0)},o(u){L(n),l=!1},d(u){u&&M(i),o[e].d(u)}}}function Wn(t,e,n){let i;at(t,Xt,a=>n(2,i=a));let{selectedProjectView:l="Projects"}=e,{selectedProject:r}=e;function o(a){lt.call(this,t,a)}const s=a=>a.project_id===r;function u(a){lt.call(this,t,a)}return t.$$set=a=>{"selectedProjectView"in a&&n(0,l=a.selectedProjectView),"selectedProject"in a&&n(1,r=a.selectedProject)},[l,r,i,o,s,u]}class Fn extends R{constructor(e){super(),K(this,e,Wn,Un,U,{selectedProjectView:0,selectedProject:1})}}function Yt(t){let e,n;return e=new Fn({props:{selectedProjectView:t[2],selectedProject:t[1]}}),e.$on("project-click",t[4]),{c(){G(e.$$.fragment)},m(i,l){F(e,i,l),n=!0},p(i,l){const r={};l&4&&(r.selectedProjectView=i[2]),l&2&&(r.selectedProject=i[1]),e.$set(r)},i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){L(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function Hn(t){let e,n,i,l,r,o,s,u,a,_,d,g;r=new gn({}),a=new bn({props:{menuItems:t[3],selectedItem:t[0]}}),a.$on("menu-change",t[5]);let f=t[0]===t[3][0]&&Yt(t);return{c(){e=p("main"),n=p("div"),i=p("div"),l=p("div"),G(r.$$.fragment),o=j(),s=p("div"),u=p("div"),G(a.$$.fragment),_=j(),d=p("div"),f&&f.c(),m(l,"class","header-content svelte-14blyv1"),m(i,"class","header svelte-14blyv1"),m(u,"class","nav-bar svelte-14blyv1"),m(d,"class","content"),m(s,"class","main-container svelte-14blyv1"),m(n,"class","header-container svelte-14blyv1"),m(e,"class","svelte-14blyv1")},m(h,k){T(h,e,k),c(e,n),c(n,i),c(i,l),F(r,l,null),c(n,o),c(n,s),c(s,u),F(a,u,null),c(s,_),c(s,d),f&&f.m(d,null),g=!0},p(h,[k]){const N={};k&1&&(N.selectedItem=h[0]),a.$set(N),h[0]===h[3][0]?f?(f.p(h,k),k&1&&P(f,1)):(f=Yt(h),f.c(),P(f,1),f.m(d,null)):f&&(ct(),L(f,1,1,()=>{f=null}),ot())},i(h){g||(P(r.$$.fragment,h),P(a.$$.fragment,h),P(f),g=!0)},o(h){L(r.$$.fragment,h),L(a.$$.fragment,h),L(f),g=!1},d(h){h&&M(e),H(r),H(a),f&&f.d()}}}function Kn(t,e,n){const i=["Projects","Contractors","Applications","Analytics"];let l=i[0],r=null,o=l;function s(a){n(2,o=a.detail.projectView),n(1,r=a.detail.projectID)}function u(a){n(0,l=a.detail.item),n(2,o="Projects")}return[l,r,o,i,s,u]}class Rn extends R{constructor(e){super(),K(this,e,Kn,Hn,U,{})}}new Rn({target:document.getElementById("app")});
