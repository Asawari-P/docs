(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=a,d=b["".concat(i,".").concat(f)]||b[f]||p[f]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/UI-GraphQLConfig-1-cd06412daab663460a6af56dcd03a133.PNG"},215:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/UI-GraphQLConfig-2-61329ebfdf634adecf5e4d20c528a620.PNG"},216:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/UI-GraphQLConfig-3-c2eff87b2c660eb27b0d82da62283f0e.PNG"},217:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/UI-GraphQLConfig-4-6d935f89ffd99e3d3dc47aaeff6dd4af.PNG"},218:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/UI-GraphQLConfig-5-09508e1fbf5bd2890300b2b3b2f10a72.PNG"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),o=(n(0),n(155)),i={id:"ui-gql-config",title:"GraphQL configuration of an Instance",sidebar_label:"GraphQL configuration of an Instance",slug:"/ui-gql-config"},c={unversionedId:"ui-gql-config",id:"ui-gql-config",isDocsHomePage:!1,title:"GraphQL configuration of an Instance",description:"1. Go to the Instances tab. Select an Instance from the list. Click on API Console. Further, select the GraphQL Config tab to check the GraphQL configurations.",source:"@site/content/ui-gql-config.md",slug:"/ui-gql-config",permalink:"/docs/ui-gql-config",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/ui-gql-config.md",version:"current",sidebar_label:"GraphQL configuration of an Instance",sidebar:"docs",previous:{title:"API configurations of an Instance",permalink:"/docs/ui-instance-api-config"},next:{title:"GraphQL Playground",permalink:"/docs/ui-gql-playground"}},l=[],s={toc:l};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to the ",Object(o.b)("inlineCode",{parentName:"li"},"Instances")," tab. Select an Instance from the list. Click on ",Object(o.b)("inlineCode",{parentName:"li"},"API Console"),". Further, select the ",Object(o.b)("inlineCode",{parentName:"li"},"GraphQL Config")," tab to check the GraphQL configurations.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"GQLConfig",src:n(214).default})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"You can note the following settings under GraphQL configurations.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"An ",Object(o.b)("inlineCode",{parentName:"p"},"endpoint")," is a unique URL that represents an object or collection of objects within the Hypi domain. You will point your HTTP client at this endpoint to interact with Hypi data resources.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Websocket URL allows you to subscribe to updates on an instance via ",Object(o.b)("inlineCode",{parentName:"p"},"WebSockets"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"HTTP request headers")," contain information about the request context so that the server can tailor the response. Hypi HTTP request header has two fields,\xa0",Object(o.b)("inlineCode",{parentName:"p"},"hypi-domain"),", and\xa0",Object(o.b)("inlineCode",{parentName:"p"},"Authorization"),"."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hypi-domain"),": The domain name of the instance to make API requests to"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Authorization"),": A valid token obtained from running a login query")),Object(o.b)("p",null,"Check more about these fields ",Object(o.b)("a",{parentName:"p",href:"/docs/apisetup"},"here"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"GQLConfig",src:n(215).default})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Below the HTTP request header, you can find the ",Object(o.b)("inlineCode",{parentName:"li"},"Methods")," (APIs) available under Hypi. Click on the inverted triangle button to get the list. A pop-up menu will be opened.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"GQLConfig",src:n(216).default})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Select the method from the list to get details about the Method.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"GQLConfig",src:n(217).default})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"On the UI, you get the ",Object(o.b)("inlineCode",{parentName:"li"},"input parameters")," for the method to execute. Below that ",Object(o.b)("inlineCode",{parentName:"li"},"Response fields")," are also enlisted.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"GQLConfig",src:n(218).default})))}u.isMDXComponent=!0}}]);