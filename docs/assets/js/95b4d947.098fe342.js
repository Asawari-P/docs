(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8989],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=o(),v=f.tabGroupChoices,h=f.setTabGroupChoices,y=(0,r.useState)(a),g=y[0],b=y[1],k=r.Children.toArray(e.children),N=[];if(null!=d){var w=v[d];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&b(w)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;b(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,o,s,i,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,u=s.innerWidth,n>=0&&o<=u&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case u:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},7819:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=n(5064),i=n(8215),l=["components"],u={id:"serverlessfunction",title:"Serverless Function",sidebar_label:"Serverless Function",slug:"/serverlessfunction"},c=void 0,p={unversionedId:"serverlessfunction",id:"serverlessfunction",isDocsHomePage:!1,title:"Serverless Function",description:"Serverless technology are a means of adding custom behaviour without having to worry too much about infrastructure, deployment or maintenance. Serverless functions are single purpose, programmatic funcions that are hosted by cloud computing platforms. You may access serverless functions from Hypi platform. You need to have a docker image of the function created on the platform like OpenFaaS.",source:"@site/content/serverlessfunction.md",sourceDirName:".",slug:"/serverlessfunction",permalink:"/docs/serverlessfunction",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/serverlessfunction.md",version:"current",frontMatter:{id:"serverlessfunction",title:"Serverless Function",sidebar_label:"Serverless Function",slug:"/serverlessfunction"}},d=[{value:"Create an App",id:"create-an-app",children:[]},{value:"Get App ID",id:"get-app-id",children:[]},{value:"Create Serverless",id:"create-serverless",children:[]},{value:"Define tan directive",id:"define-tan-directive",children:[]},{value:"Trigger Function",id:"trigger-function",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Serverless technology are a means of adding custom behaviour without having to worry too much about infrastructure, deployment or maintenance. Serverless functions are single purpose, programmatic funcions that are hosted by cloud computing platforms. You may access serverless functions from Hypi platform. You need to have a docker image of the function created on the platform like OpenFaaS.  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"How to setup and use a serverless?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-an-app"},"Create an App")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-app-id"},"Get App ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-serverless"},"Create Serverless")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#define-tan-directive"},"Define tan directive")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#trigger-function"},"Trigger Function"))),(0,o.kt)("h3",{id:"create-an-app"},"Create an App"),(0,o.kt)("p",null,"App is the basic building block of Hypi platform. Check more about App ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview"},"here"),". Create an App using ",(0,o.kt)("a",{parentName:"p",href:"/docs/get-started"},"this")," guide."),(0,o.kt)("h3",{id:"get-app-id"},"Get App ID"),(0,o.kt)("p",null,"Run the following GraphQL query to retrieve the App ID available as ",(0,o.kt)("inlineCode",{parentName:"p"},"hypi.id"),". Note that the query returns multiple apps in your realm, so pick the one related the App that you have just created in the previous step."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'{\n  find(type: App, arcql:"*"){\n    edges{\n      node{\n        ... on App {\n          name\n          releases{\n            hypi {\n              id\n            }\n            name\n          }\n        }\n      }\n      cursor\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"create-serverless"},"Create Serverless"),(0,o.kt)("p",null,"At this point, you are ready to create the Serverless function. In order to create a serverless you should already have a containerized image ready to deploy available either in a public or a private docker registry."),(0,o.kt)("p",null,"Under the query variables, you can supply the actual parameters. Note that the parameters are a typical JSON payload. The values supplied here are for illustrative purposes only, and you need to edit them to match your use case."),(0,o.kt)(s.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"mutation upsert($values:HypiUpsertInputUnion!) {\n  upsert(values:$values){\n    id\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"data",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "values": {\n    "App": {\n      "name": "test-serverless",\n      "hypi": {\n        "id": "01EJX6A9VWTV3EMDKRMW9G757X"\n      },\n      "releases": [\n        {\n          "name": "initial",\n          "hypi": {\n            "id": "01EJX6BHM5YDNX30DWTNWJB5DH"\n          },\n          "serverless": {\n            "hypi": {\n              "impl": "OpenFaaSFn"\n            },\n            "image": "functions/alpine:latest",\n            "name": "echo-app",\n            "credentials": {\n              "server": "hub.docker.com",\n              "username": "example",\n              "password": "example"\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Verify that the serverless was created")),(0,o.kt)("p",null,"In order to double check that the serverless was created successfully, then run the following GraphQL query and make sure that the serverless name exists in the retrieved list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  find(type: App, arcql:"*"){\n    edges{\n      node{\n        ... on App {\n          name\n          releases{\n            name\n            serverless{\n              ... on OpenFaaSFn{\n                name\n                image\n                credentials {\n                  server\n                  username\n                  password\n                }\n              }\n            }\n          }\n        }\n      }\n      cursor\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"define-tan-directive"},"Define tan directive"),(0,o.kt)("p",null,"Before you start using the serverless function, you need to define a GraphQL query type that provides the parameters of the function. Here is an example definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'type Query {\n    f1(a:String!, b: Int!, c:Boolean!):EchoType @tan(type:OpenFaaS, name:"echoit", handler:"cat")\n}\ntype EchoType {\n        a: String\n        b: Int\n        c: Boolean\n}\n')),(0,o.kt)("p",null,"This has just defined a @tan function that accepts 3 parameters of types String, Integer, and Boolean. It returns a JSON object. The @tan directive has a few options; type, name, handler, and saveAs. They are explained below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type:"),"  instructs the system on which serverless backend to use, currently OpenFaaS is available as well as inline scripts written in Groovy or Velocity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name:"),'  the name field should match the name provided under the GraphQL "serverless" object.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"handler:"),'  is the script/entrypoint to execute inside the container. For example, "python main.py -env=prod" or "go run quickstart.go" ... etc.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"saveAs:"),'  instructs the Hypi platform to persist the result of the serverless function call as a GraphQL type in the database. For example, saveAs: "ServerlessResponse".')),(0,o.kt)("p",null,'Observe here how the @tan directive is instructed to return payload of user-defined type "EchoType". Thus, any user-defined type can be returned.'),(0,o.kt)("h3",{id:"trigger-function"},"Trigger Function"),(0,o.kt)("p",null,"It is now time to run the function and pass some real values and obtain the results. Using a query like this."),(0,o.kt)(s.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'query{\n    f1(a:"Hello, @tan", b:2329, c:true) {\n        a\n        b\n        c\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "f1": {\n      "a": "Hello, @tan",\n      "b": 2329,\n      "c": true\n    }\n  }\n}\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);