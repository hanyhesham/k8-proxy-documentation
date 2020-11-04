(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{138:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/manual-install-1-e90048adbfc279e243eab257b0f1f0e5.png"},139:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/manual-install-2-98ee272018855114dadae15df449448b.png"},140:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/manual-install-3-e09ba42b713cbb61e10f32325eb81c95.png"},141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/manual-install-4-b652b0d216a11d9126de5b5fd8318343.png"},142:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/manual-install-5-5c0659d0e4cd20924bdae2d962310bd2.png"},143:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/manual-install-6-a56dad2fbb8ea725d37340b567ac43bd.png"},144:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/manual-install-7-214aae948f0ff6a1f63ed89acdd31d2f.png"},145:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/manual-install-8-461c0862bec052ba08a46fb9caf4354b.png"},146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/manual-install-9-d3273634c7346acc113a52b16ce7422f.png"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),l=(n(0),n(97)),s={title:"Sharepoint Self-Hosted Manual Install",sidebar_label:"Manual Install"},o={unversionedId:"websites/sharepoint/self-hosted/manual-install",id:"websites/sharepoint/self-hosted/manual-install",isDocsHomePage:!1,title:"Sharepoint Self-Hosted Manual Install",description:"Version: Sharepoint 2019",source:"@site/docs/websites/sharepoint/self-hosted/manual-install.md",slug:"/websites/sharepoint/self-hosted/manual-install",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/manual-install",version:"current",sidebar_label:"Manual Install",sidebar:"someSidebar",previous:{title:"Sharepoint Self-Hosted Overview",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/overview"},next:{title:"Sharepoint Self-Hosted Http Module",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/http-module"}},i=[{value:"Version: Sharepoint 2019",id:"version-sharepoint-2019",children:[]},{value:"Topology: Single Server Farm",id:"topology-single-server-farm",children:[]},{value:"Target: Azure VM",id:"target-azure-vm",children:[]}],c={rightToc:i};function u(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"version-sharepoint-2019"},"Version: Sharepoint 2019"),Object(l.b)("h2",{id:"topology-single-server-farm"},"Topology: Single Server Farm"),Object(l.b)("h2",{id:"target-azure-vm"},"Target: Azure VM"),Object(l.b)("h1",{id:"steps"},"Steps"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Launch and attempt to set up Sharepoint Product Configuration Wizard:\n",Object(l.b)("img",{alt:"step 1",src:n(138).default}))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"We need to enable server level feature, AD Domain Services,"))),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 2",src:n(139).default})),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 3",src:n(140).default})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Next go to AD DS \u2192 select the the new Server")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 4",src:n(141).default})),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Select action \u2192 Promote this server to a domain controller.")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 5",src:n(142).default})),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Provide a root domain name and password and proceed.")),Object(l.b)("p",null,"Server will restart at the end of set up, after the restart there will be a long process of setting up Group Police Client, we should wait for it to finish itself. Once all finished, you will see AD DS up and live:"),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 6",src:n(143).default})),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Let\u2019s re-launch Sharepoint Product Configuration Wizard:")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 7",src:n(144).default})),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 8",src:n(145).default})),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 9",src:n(146).default})),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Setup Complete")))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||b[d]||l;return n?r.a.createElement(f,o(o({ref:t},c),{},{components:n})):r.a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);