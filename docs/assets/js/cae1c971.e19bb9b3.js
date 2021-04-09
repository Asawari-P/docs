(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(155)),o=n(159),l=n(160),c={id:"gql-queries",title:"GraphQL Queries",sidebar_label:"GraphQL Queries",slug:"/gql-queries"},s={unversionedId:"gql-queries",id:"gql-queries",isDocsHomePage:!1,title:"GraphQL Queries",description:"Every GraphQL schema has a root type for both queries and mutations. The query type defines GraphQL operations that retrieve data from the server.",source:"@site/content/gql-queries.md",slug:"/gql-queries",permalink:"/docs/gql-queries",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/gql-queries.md",version:"current",sidebar_label:"GraphQL Queries",sidebar:"docs",previous:{title:"GraphQL Schema and Types",permalink:"/docs/gql-schema-types"},next:{title:"GraphQL Mutations",permalink:"/docs/gql-mutations"}},u=[{value:"GraphQL API",id:"graphql-api",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Query Variables",id:"query-variables",children:[]},{value:"Nested queries",id:"nested-queries",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Every GraphQL schema has a root type for both queries and mutations. The query type defines GraphQL operations that retrieve data from the server."),Object(i.b)("p",null,"GraphQL queries return only the data you define. To construct a query, you must identify fields within fields ( known as nested subfields) continuously, until you return only scalars."),Object(i.b)("h2",{id:"graphql-api"},"GraphQL API"),Object(i.b)("p",null,"The GraphQL API has a single endpoint: ",Object(i.b)("inlineCode",{parentName:"p"},"https://api.hypi.app/graphql"),". Queries are sent to this endpoint. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note:  Arcql is Hypi's SQL-like query language used to filter, sort and paginate data in the platform.")),Object(i.b)("p",null,"You should construct queries like this:"),Object(i.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"query",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"query getMyTodos($arcql:String) {\n   todos(arcql:$arcql) {\n     hypi {\n        id\n        created\n      }\n     description\n     completed\n   }\n}\n"))),Object(i.b)(l.a,{value:"data",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'{\n    "arcql": "* SORT hypi.updated DESC"\n }\n'))),Object(i.b)(l.a,{value:"response",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n       "data": {\n         "todos": [\n           {\n              "hypi": {\n               "id": "c94144ec-52aa-4337-9d8b-15fa8ec5c979"\n               "created": "2019-11-02T15:45:16Z"\n               }\n              "description": "Buy milk for the office",\n              "completed":"false",\n           },\n           ]\n         }\n }\n')))),Object(i.b)("h2",{id:"authorization"},"Authorization"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:"),"  You need to pass the Authorization ",Object(i.b)("inlineCode",{parentName:"p"},"token")," header before querying to get the results. Here's Example of setting up your header with auth token. Read more about Authorization ",Object(i.b)("a",{parentName:"p",href:"/docs/authorisation"},"here"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://api.hypi.app/graphql/",\n  "headers": {\n       "Authorization":\n        "Auth Token here. It can be copied from the Developer Hub",\n       "hypi-domain": "my-domain.com" // instance API domain\n  }\n}\n')),Object(i.b)("h2",{id:"query-variables"},"Query Variables"),Object(i.b)("p",null,"GraphQL Variables makes queries more dynamic and powerful, and they reduce complexity when passing mutation input objects. ",Object(i.b)("strong",{parentName:"p"},"Here you can see variables in its simplest form.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'query findTodoItem($arcql:String) {\n     todos(arcql: $arcql) {\n       item {\n         description\n         hypi {\n          id\n         }\n       }\n   }\n}\nvariables {\n   "arcql": "hypi.id = \'abc-123\'"\n}\n')),Object(i.b)("p",null,"There are three steps to using variables:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create the variable outside the operation in a ",Object(i.b)("inlineCode",{parentName:"p"},"variables")," object. You can provide variables in the variables box on user interface of Hypi. You need not specify 'variables' keyword for that.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The variable needs to be pass to the operation as an argument: ",Object(i.b)("inlineCode",{parentName:"p"},"query($arcql:String!){"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use the variable within the operation: ",Object(i.b)("inlineCode",{parentName:"p"},"todos(arcql: $arcql) {")))),Object(i.b)("p",null,"This process makes the query argument dynamic. You can change the value in the ",Object(i.b)("inlineCode",{parentName:"p"},"variables")," object and keep the foundation of the query the same."),Object(i.b)("p",null,"Using variables as arguments lets you dynamically update values in the variables object without changing the query and using the Hypi ",Object(i.b)("inlineCode",{parentName:"p"},"arcql")," variable lets you filter, sort and paginate data in the platform."),Object(i.b)("p",null,"When the user sends a request, the UI combines the query and variable to make a JSON object and process the API."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'{  \n  "query: "query findTodoItems...",  \n  "variables": {  \n   "arcql": "hypi.id = ..."  \n  }  \n}\n')),Object(i.b)("h2",{id:"nested-queries"},"Nested queries"),Object(i.b)("p",null,"GraphQL query can have subqueries within it. So,nested queries can be executed.  Check out below example."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'query findTodoItem($filter:String, $subQuery: String) {  \n     todos(arcql: $filter) {  \n       item {  \n         listField(arcql: $subQuery){  \n           f1  \n         }  \n         description  \n         hypi {  \n          id  \n         }  \n       }  \n   }  \n}  \nvariables {  \n   "filter": "hypi.id = \'abc-123\'",  \n   "subQuery": "f1 ^ \'hello\'"  \n}\n')),Object(i.b)("p",null,"Here, both",Object(i.b)("inlineCode",{parentName:"p"},"todos"),"and",Object(i.b)("inlineCode",{parentName:"p"},"listField"),"have an argument called",Object(i.b)("inlineCode",{parentName:"p"},"arcql"),"but the variables that set its value are different (",Object(i.b)("inlineCode",{parentName:"p"},"$filer")," and ",Object(i.b)("inlineCode",{parentName:"p"},"$subQuery"),")"))}b.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},156:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},157:function(e,t,n){"use strict";var a=n(0),r=n(158);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},158:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(157),o=n(156),l=n(57),c=n.n(l);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,y=Object(a.useState)(l),v=y[0],O=y[1],j=a.Children.toArray(e.children),g=[];if(null!=b){var q=h[b];null!=q&&q!==v&&p.some((function(e){return e.value===q}))&&O(q)}var N=function(e){var t=e.target,n=g.indexOf(t),a=j[n].props.value;O(a),null!=b&&(f(b,a),setTimeout((function(){var e,n,a,r,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case u:var a=g.indexOf(e.target)+1;n=g[a]||g[0];break;case s:var r=g.indexOf(e.target)-1;n=g[r]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:w,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},160:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);