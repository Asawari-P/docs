(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(7),a=(n(0),n(119)),i={id:"webhooks",title:"Web Hooks",sidebar_label:"Web Hooks",slug:"/webhooks"},l={unversionedId:"webhooks",id:"webhooks",isDocsHomePage:!1,title:"Web Hooks",description:"Webhooks provide a way for external APIs to notify you when some event has occured in their system. That is a typical usecase for this API.",source:"@site/content/webhook.md",slug:"/webhooks",permalink:"/docs/webhooks",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/webhook.md",version:"current",sidebar_label:"Web Hooks",sidebar:"docs",previous:{title:"Workflow",permalink:"/docs/workflow"},next:{title:"File Upload",permalink:"/docs/fileupload"}},s=[{value:"Defined types",id:"defined-types",children:[]},{value:"Example",id:"example",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Webhooks provide a way for external APIs to notify you when some event has occured in their system. That is a typical usecase for this API."),Object(a.b)("p",null,"These APIs are generally not secure. Different providers have different mechanisms for proving to you that the request is genuinely from them. Hypi provides you access to all the data sent in the request, this enables you to perform verification as you see fit."),Object(a.b)("p",null,"On this page, the following schema is used:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'type Query {\n  myInlineFn(payload: WebhookPayload): \n    WebhookResponse @tan(type:Groovy, inline: """\n    return [\n      "status": 200,\n      "headers": payload.headers,\n      "body": payload.url.host + ":" + \n              payload.url.port + payload.url.path + "?" \n              + payload.url.queryParams + "<>" + payload.body\n    ]\n  """)\n}\n')),Object(a.b)("h3",{id:"defined-types"},"Defined types"),Object(a.b)("p",null,"A function must be defined which will process the Webhook request. Hypi defines both the argument and response type that this function must use."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The function signature MUST be",Object(a.b)("inlineCode",{parentName:"p"},"(payload: WebhookPayload): WebhookResponse"),"for the webhook to work correctly.")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"A simple webhook example looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'mutation Upsert($values: HypiUpsertInputUnion!) {\n  upsert(values: $values) {\n    id\n  }\n}\n# Data\n{\n  "values": {\n    "Webhook": [\n             {\n              "hypi": {\n              "id": "wid"\n              },\n             "name": "wh1",\n            "query": {\n            "type": "Query",\n            "field": "myInlineFn"\n            }\n          }\n       ]\n    }\n}\n')),Object(a.b)("p",null,"Once a Webhook is created, it can be called by making a request to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://api.hypi.app/webhook/%7Bdomain%7D/%7Bwebhook"},"https://api.hypi.app/webhook/{domain}/{webhook"),"name}")),Object(a.b)("p",null,"where",Object(a.b)("inlineCode",{parentName:"p"},"{domain}"),"is the instance domain for you app and",Object(a.b)("inlineCode",{parentName:"p"},"{webhook name}"),"is the name of the webhook to be executed. In the example on this page, the name is",Object(a.b)("inlineCode",{parentName:"p"},"wh1"),"."))}c.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(h,l(l({ref:t},p),{},{components:n})):r.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);