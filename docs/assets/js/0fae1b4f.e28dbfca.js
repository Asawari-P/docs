(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),o=(a(0),a(143)),c={id:"crud",title:"CRUD APIs",sidebar_label:"CRUD APIs",slug:"/crud"},i={unversionedId:"crud",id:"crud",isDocsHomePage:!1,title:"CRUD APIs",description:"CRUD is the acronym commonly used for Create, Read, Update, Delete. Hypi automatically generates CRUD API from the app\u2019s schema.",source:"@site/content/crud.md",slug:"/crud",permalink:"/docs/crud",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/crud.md",version:"current",sidebar_label:"CRUD APIs",sidebar:"docs",previous:{title:"Magic Hypi Object",permalink:"/docs/magic-hypi-object"},next:{title:"Create Data",permalink:"/docs/create-data"}},l=[],p={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"CRUD is the acronym commonly used for Create, Read, Update, Delete. Hypi automatically generates CRUD API from the app\u2019s schema."),Object(o.b)("p",null,"Every app has one or more releases. Each release has its own schema. A schema is a set of GraphQL type definitions that defines the app\u2019s data model. When you define a schema, Hypi automatically generates several APIs for you. CRUD APIs are one of them! They allow you to get data in and out of your apps."),Object(o.b)("p",null,"To carry out CRUD operations, you should have a basic understanding of ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQL")," type definitions. You should also be aware of ",Object(o.b)("inlineCode",{parentName:"p"},"ArcQL")," query language. GraphQL type definitions give structure to data models. ArcQL helps to filter and sort data on the Hypi platform. Also, get acquainted with ",Object(o.b)("inlineCode",{parentName:"p"},"Hypi Magic Object"),". It gets created in the schema automatically. Hypi object helps to perform simple data operations."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You may check out these Guides.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/arcql"},"ArcQL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/magic-hypi-object"},"Magic Hypi Object")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://graphql.org/learn/schema/#type-system"},"GraphQL type definitions"))),Object(o.b)("p",null,"Let\u2019s look at ",Object(o.b)("inlineCode",{parentName:"p"},"CRUD")," operations in detail. While you perform Query operations to get data from the database, you perform Mutations to create or update data in the database. Create, Update and Delete are mutations. Read is the Query."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We will work with the below schemas to perform CRUD operations.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"  \n  type Books {\n      title: String\n      publication: String\n      available: Boolean\n  }\n\n  type Author {\n      name: String!\n      age: Int\n      count: Int\n      booklist: [Books!]\n  }\n\n")),Object(o.b)("p",null,"Data type ",Object(o.b)("inlineCode",{parentName:"p"},"Books")," holds the information of a book like a title, publication, etc. It checks its availability in the library with the help of Boolean value. Data type ",Object(o.b)("inlineCode",{parentName:"p"},"Author")," holds data of an Author like name, age, count of books, and list of books."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Now take a look at the below operations one by one!")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/docs/create-data"},"Create"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/docs/update-data"},"Update"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/docs/read-data"},"Read"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/docs/delete-data"},"Delete")))))}u.isMDXComponent=!0}}]);