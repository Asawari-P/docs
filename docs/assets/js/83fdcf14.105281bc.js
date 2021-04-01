(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(138)),i={id:"createdata",title:"Create Data",sidebar_label:"Create Data",slug:"/create-data"},c={unversionedId:"createdata",id:"createdata",isDocsHomePage:!1,title:"Create Data",description:"\u201cCreate\u201d functions as a mutation to insert data in the table. After creating an instance, you may want to add data to it. Just one function does the job of inserting and updating data, i.e. upsert.",source:"@site/content/createdata.md",slug:"/create-data",permalink:"/docs/create-data",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/createdata.md",version:"current",sidebar_label:"Create Data",sidebar:"docs",previous:{title:"CRUD APIs",permalink:"/docs/crud"},next:{title:"Update Data",permalink:"/docs/update-data"}},u=[],l={toc:u};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u201cCreate\u201d functions as a mutation to insert data in the table. After creating an instance, you may want to add data to it. Just one function does the job of inserting and updating data, i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"upsert"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"upsert (values: HypiUpsertUnion!) : [Hypi!] !\n")),Object(o.b)("p",null,"Notice the argument \u2018values\u2019 is plural because it allows you to create or update multiple values in a single request."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Let\u2019s go through an example. ")),Object(o.b)("p",null,"You may use the below format to insert data into an instance (Information related to Authors)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"mutation Upsert($values: HypiUpsertInputUnion!) {\n  upsert(values: $values) {\n    id\n  }\n}\n")),Object(o.b)("p",null,"Put below values in Query variable."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "values": {\n    "Author": [\n    {\n        "name": "Dan Brown",\n        "age": 56,\n        "booklist": [\n          {\n            "title": "Da Vinci Code",\n            "publication": "abc",\n            "available": true\n          },\n          {\n            "title": "The Last Symbol",\n            "publication": "pqr",\n            "available": false\n          }\n        ]\n    },\n    {\n       "name": "Paulo Coelho",\n       "age": 70,\n       "booklist": [\n          {\n            "title": "Alchemist"\n          }         \n        ]\n        }     \n    ]\n  }\n}\n\n')),Object(o.b)("p",null,"\u2018id\u2019 value from the magic hypi object gets returned, when the data gets added successfully."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F0DVHM26HHWS8X8X3NBRSAV6"\n      },\n      {\n        "id": "01F0DVHM2AZCGM0JSR9QRNBWZY"\n      }\n    ]\n  }\n}\n\n')),Object(o.b)("p",null,"For each object i.e. author, an id gets attached automatically. In the above example, we have passed hard-coded data in the form of a query variable. While passing on the data from User Interface, you may pass the data in the form of JSON. Just add JSON data into the variable \u2018values\u2019."))}s.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);