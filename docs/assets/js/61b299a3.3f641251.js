(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),i=(n(0),n(155)),o=n(159),c=n(160),s={id:"gql-interfaces",title:"GraphQL Interfaces",sidebar_label:"GraphQL Interfaces",slug:"/gql-interfaces"},l={unversionedId:"gql-interfaces",id:"gql-interfaces",isDocsHomePage:!1,title:"GraphQL Interfaces",description:"GraphQL supports interfaces similar to other type systems. Interfaces are abstract types that hold a certain set of fields. A type must include these fields to implement the interface.",source:"@site/content/gql-interfaces.md",slug:"/gql-interfaces",permalink:"/docs/gql-interfaces",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/gql-interfaces.md",version:"current",sidebar_label:"GraphQL Interfaces",sidebar:"docs",previous:{title:"GraphQL Directives",permalink:"/docs/gql-directives"},next:{title:"Hypi GraphQL CRUD Tutorial",permalink:"/docs/gql-crud-tutorial"}},p=[],u={toc:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GraphQL supports ",Object(i.b)("inlineCode",{parentName:"p"},"interfaces")," similar to other type systems. Interfaces are abstract types that hold a certain set of fields. A type must include these fields to implement the interface."),Object(i.b)("p",null,"Interfaces are powerful, and a great way to build and use GraphQL schemas through the use of abstraction. Abstract types can't be used directly in schema, but can be used as building blocks for creating explicit types."),Object(i.b)("p",null,"Example, you could have an interface Car that represents any model of a Car in a trade show:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"interface Car {\n  id: ID!\n  name: String!\n  model: String\n}\n")),Object(i.b)("p",null,"This means that any type that implements Car needs to have these exact fields, with these arguments and return types."),Object(i.b)("p",null,"For example, here are some types of brands that might implement Car:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"type Audi implements Car {\n  id: ID!\n  name: String!\n  model: String\n}\ntype Bentley implements Car {\n  id: ID!\n  name: String!\n  model: String\n}\n")),Object(i.b)("p",null,"Now it can be used in another type like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"type Customer {\n    owns: [Car!]\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"owns")," field uses the ",Object(i.b)("inlineCode",{parentName:"p"},"Car")," interface. This allows ",Object(i.b)("inlineCode",{parentName:"p"},"owns")," to have values of type ",Object(i.b)("inlineCode",{parentName:"p"},"Audi")," and  ",Object(i.b)("inlineCode",{parentName:"p"},"Bently"),"."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"IMPORTANT")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"When creating or updating a customer object, the ",Object(i.b)("inlineCode",{parentName:"p"},"hypi.impl")," field MUST be specified on each object in the ",Object(i.b)("inlineCode",{parentName:"p"},"owns")," array.  Each object of type ",Object(i.b)("inlineCode",{parentName:"p"},"owns")," must tell Hypi if it is an Audi or a Bently. "),Object(i.b)("p",{parentName:"div"},"The",Object(i.b)("inlineCode",{parentName:"p"},"hypi.impl"),"field is needed for upsert, not for queries. For queries on each implementation, you MUST use an inline fragment i.e.",Object(i.b)("inlineCode",{parentName:"p"},"... on <Impl> { <impl specific fields> }")))),Object(i.b)("p",null,"Here follows the example that inserts data in Customer object using an interface Car."),Object(i.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"query",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"mutation Upsert($values: HypiUpsertInputUnion!) {\n    upsert(values: $values) {\n      id\n    }\n}\n"))),Object(i.b)(c.a,{value:"data",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "values": {\n      "Customer": {\n        "owns": [\n          { \n            "hypi": \n            { \n                "impl": "Audi" \n            },\n            "id": 1, \n            "name": "Audi Class", \n            "model": "aux" \n          },\n          {\n            "hypi": \n                { \n                "impl": "Bentley" \n              },\n            "id": 2,\n            "name": "Bentley Class",\n            "model": "vx"\n          }\n        ]\n      }\n    }\n}\n'))),Object(i.b)(c.a,{value:"response",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F2NDF0BJ8T5YK8SW1JWKX8QW"\n      }\n    ]\n  }\n}\n')))),Object(i.b)("p",null,"Check the use of inline fragments to retrieve interface data. (... on Audi { model })"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'{\n  find(type: Customer, arcql: "*") {\n    edges {\n      node {\n        ... on Customer {\n         owns {\n             //Retrieve data from interfaces\n            ... on Audi { model }\n            ... on Bentley { model }\n            name\n          }\n        }\n      }\n      cursor\n    }\n  }\n}\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"There is a limitation that sub-queries cannot be used on interface fields. (arcql: \"owns.model = 'vx'\" is not valid). So, arcql statements cannot be framed with types that implement interfaces."))))}m.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},156:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},157:function(e,t,n){"use strict";var a=n(0),r=n(158);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},158:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(157),o=n(156),c=n(57),s=n.n(c);var l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,m=e.groupId,b=e.className,d=Object(i.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,h=Object(a.useState)(c),y=h[0],O=h[1],j=a.Children.toArray(e.children),g=[];if(null!=m){var N=f[m];null!=N&&N!==y&&u.some((function(e){return e.value===N}))&&O(N)}var w=function(e){var t=e.target,n=g.indexOf(t),a=j[n].props.value;O(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,r,i,o,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var a=g.indexOf(e.target)+1;n=g[a]||g[0];break;case l:var r=g.indexOf(e.target)-1;n=g[r]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:C,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},160:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);