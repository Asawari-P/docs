(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(135)),l={id:"hypiobject",title:"Magic Hypi Object",sidebar_label:"Magic Hypi Object",slug:"/magic-hypi-object"},o={unversionedId:"hypiobject",id:"hypiobject",isDocsHomePage:!1,title:"Magic Hypi Object",description:"We like simple and automated things in the world of programming. One such thing is Magic Hypi Object. You will not create it and still, you will get it. That\u2019s why it\u2019s a magic object! It automatically gets attached to every data type. It allows the programmer to do pretty powerful things.",source:"@site/content/hypiobject.md",slug:"/magic-hypi-object",permalink:"/docs/magic-hypi-object",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/hypiobject.md",version:"current",sidebar_label:"Magic Hypi Object",sidebar:"docs",previous:{title:"ArcQL filtering",permalink:"/docs/arcql"},next:{title:"CRUD APIs",permalink:"/docs/crud"}},c=[{value:"Available fields",id:"available-fields",children:[{value:"id",id:"id",children:[]},{value:"impl",id:"impl",children:[]}]}],b={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We like simple and automated things in the world of programming. One such thing is ",Object(i.b)("inlineCode",{parentName:"p"},"Magic Hypi Object"),". You will not create it and still, you will get it. That\u2019s why it\u2019s a magic object! It automatically gets attached to every data type. It allows the programmer to do pretty powerful things. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Let\u2019s take an example.")),Object(i.b)("p",null,"We have the following data type."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"type Author\xa0{\n    name:\xa0String\n    age:\xa0Int\n    count:\xa0Int\n    booklist:\xa0[String!]\n}\n")),Object(i.b)("p",null,"The above data type stores information of an author. The data fields are name, age, book count, and list of books, etc.  Insert this data in the form of a table.  A hypi object gets added to it automatically."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"type Author\xa0{\n    hypi:\xa0Hypi\n    name:\xa0String\n    age:\xa0Int\n    count:\xa0Int\n    booklist:\xa0[String!]\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Let\u2019s look at its structure."),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"type Hypi {\n    id:ID\n    impl:String\n    created:DateTime\n    updated:DateTime\n    trashed:DateTime\n    createdBy:ID\n}\n"))),Object(i.b)("h2",{id:"available-fields"},"Available fields"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Field")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Data Type")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"id")),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Unique identification (ID) of a data type")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"impl")),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Name of the implementation of an interface")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"trashed")),Object(i.b)("td",{parentName:"tr",align:null},"DateTime"),Object(i.b)("td",{parentName:"tr",align:null},"The date on which the object was marked as trashed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"updated")),Object(i.b)("td",{parentName:"tr",align:null},"DateTime"),Object(i.b)("td",{parentName:"tr",align:null},"The last date when the object was updated.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"created")),Object(i.b)("td",{parentName:"tr",align:null},"DateTime"),Object(i.b)("td",{parentName:"tr",align:null},"The date when the object was created.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"createdBy")),Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"The ID of the\xa0User Account\xa0which created the object.")))),Object(i.b)("p",null,"Hypi updates some of the fields automatically like ",Object(i.b)("inlineCode",{parentName:"p"},"trashed"),", ",Object(i.b)("inlineCode",{parentName:"p"},"updated"),", ",Object(i.b)("inlineCode",{parentName:"p"},"created"),",",Object(i.b)("inlineCode",{parentName:"p"},"createdBy"),"."),Object(i.b)("p",null,"A field like \u2018id\u2019 may get generated automatically. But you may set it as well. \u2019impl\u2019 field value has to be set. Let\u2019s look at these two fields in detail."),Object(i.b)("h3",{id:"id"},"id"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"id:")," => Specify the value of this field during mutation. Otherwise, Hypi will generate a unique ID number automatically. It is a mandatory field during \u2018upsert\u2019 (update) to locate the object to be updated. Specify it in the ArcQL query to find objects by ID. Check CRUD operations to understand the utilization of an id."),Object(i.b)("h3",{id:"impl"},"impl"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"impl:"),"  => An app may consist of various interfaces. The \u2018impl\u2019 field stores value of the name of the implementation of an interface. Let\u2019s say you have social media interfaces like Instagram, Twitter, Facebook. The \u2018impl\u2019 field should be set to \u201cTwitter\u201d to use the \u2018Twitter\u2019 interface. Hypi cannot automatically decide the implementation of an interface on which you intend to perform a mutation. If you do not provide the \u2018impl\u2019 value, the mutation will fail."))}p.isMDXComponent=!0},135:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,s=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?r.a.createElement(s,o(o({ref:t},b),{},{components:a})):r.a.createElement(s,o({ref:t},b))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);