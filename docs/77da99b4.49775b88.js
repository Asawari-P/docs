(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(112)),i={id:"mathsapi",title:"Maths APIs",sidebar_label:"Maths APIs",slug:"/"},l={unversionedId:"mathsapi",id:"mathsapi",isDocsHomePage:!1,title:"Maths APIs",description:"Mathematical functions perform standard calculations on the data. Users may perform these calculations on the client-side. However, if more than two clients are performing mathematical operations on the data at the same time, it may lead to data loss or errors. To prevent this scenario, Hypi Maths APIs are designed.",source:"@site/content/mathsapi.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/hypi-universe/docs/edit/master/website/content/mathsapi.md",version:"current",sidebar_label:"Maths APIs"},c=[],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Mathematical functions perform standard calculations on the data. Users may perform these calculations on the client-side. However, if more than two clients are performing mathematical operations on the data at the same time, it may lead to data loss or errors. To prevent this scenario, Hypi Maths APIs are designed."),Object(o.b)("p",null,"Let\u2019s perform mathematical operations on the price field in the data type ",Object(o.b)("inlineCode",{parentName:"p"},"Book"),". ",Object(o.b)("inlineCode",{parentName:"p"},"Price")," is a float value. Mathematical APIs work only on floats and integers, i.e., numerical values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"type Book {\n    authorid:\xa0Int\n    title:\xa0String\n    price:\xa0Float\n}\n")),Object(o.b)("p",null,"Mathematical operations can only be performed on an existing object. The precedence of the mathematical operations follows\xa0",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Order_of_operations"},"BODMAS"),". So, if all fields are specified the precedence is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Division"),Object(o.b)("li",{parentName:"ul"},"Multiplication"),Object(o.b)("li",{parentName:"ul"},"Addition"),Object(o.b)("li",{parentName:"ul"},"Subtraction")),Object(o.b)("p",null,"Let\u2019s perform a mathematical operation as shown in the below code. We are carrying out the operations on hypi id - ",Object(o.b)("inlineCode",{parentName:"p"},"Author2Book1")," generated during ",Object(o.b)("a",{parentName:"p",href:"#"},"Aggregate APIs example"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'mutation {\n     math (\n         values: {\n             Book: [\n             {\n                 price: {\n                     hypi: { id: "Author2Book1" }\n                         div: 3\n                         times: 10\n                         minus: 2\n                         plus: 30\n                        }\n                     }\n                 ]\n             }\n         ) \n    {\n       id\n    }\n}\n')),Object(o.b)("p",null,"Result:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n     "math": [\n         {\n         "id": "Author2Book1"\n         }\n     ]\n   }\n}\n')),Object(o.b)("p",null,"In this example, we are using all the mathematical operators available in the APIs. Notice that the query uses an array (the square brackets) so you can perform math operations on multiple objects (and even multiple types) in one request."),Object(o.b)("p",null,"The order of execution is as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"value = 5.99 (the price of the book with id Author2Book1)"),Object(o.b)("li",{parentName:"ol"},"5.99 / 3 = 1.996666666666667"),Object(o.b)("li",{parentName:"ol"},"1.996666666666667 * 10 = 19.96666666666667"),Object(o.b)("li",{parentName:"ol"},"19.96666666666667 - 2 = 17. 96666666666667"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("ol",{parentName:"li",start:17},Object(o.b)("li",{parentName:"ol"},"96666666666667 + 30 = 47. 96666666666667")))),Object(o.b)("p",null,"Now, query the price value of the book that was originally set to 5.99. Its value has changed to 47.96666666666667."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"{\n find(type: Book, arcql: \"hypi.id = 'Author2Book1'\") {\n     edges {\n         node {\n         ... on Book {\n         price\n         }\n     }\n     cursor\n     }\n   }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n     "find": {\n         "edges": [\n             {\n                 "node": {\n                 "price": 47.96666666666667 },\n                 "cursor": "Author2Book1"\n             }\n         ]\n     }\n  }\n}\n')))}p.isMDXComponent=!0}}]);