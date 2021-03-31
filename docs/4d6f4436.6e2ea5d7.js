(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||s[u]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(135)),o={id:"readdata",title:"Read Data",sidebar_label:"Read Data",slug:"/read-data"},c={unversionedId:"readdata",id:"readdata",isDocsHomePage:!1,title:"Read Data",description:"Read the inserted data by using query functions. get and find are the two functions that return the data. If you need a single record, use the get function. For getting multiple records, use the find function.",source:"@site/content/readdata.md",slug:"/read-data",permalink:"/docs/read-data",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/readdata.md",version:"current",sidebar_label:"Read Data",sidebar:"docs",previous:{title:"Update Data",permalink:"/docs/update-data"},next:{title:"Delete Data",permalink:"/docs/delete-data"}},b=[{value:"Get",id:"get",children:[]},{value:"Find",id:"find",children:[]}],l={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Read the inserted data by using query functions. ",Object(i.b)("inlineCode",{parentName:"p"},"get")," and ",Object(i.b)("inlineCode",{parentName:"p"},"find")," are the two functions that return the data. If you need a single record, use the ",Object(i.b)("inlineCode",{parentName:"p"},"get")," function. For getting multiple records, use the ",Object(i.b)("inlineCode",{parentName:"p"},"find")," function."),Object(i.b)("h2",{id:"get"},"Get"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"get")," function returns a single record using the \u2018id\u2019 of an object. You may use the \u2018id\u2019 received after creating the record. The magic hypi object also contains the \u2018id\u2019 of the object (",Object(i.b)("inlineCode",{parentName:"p"},"hypi.id"),")."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"get(type:\xa0HypiMutationType!, id:\xa0String!):\xa0HypiRootAggregate\n")),Object(i.b)("p",null,"Let\u2019s pass the ",Object(i.b)("inlineCode",{parentName:"p"},"Author")," data type as an argument to fetch the data. Get the records in the fields like name, booklist, hypi id, created date, updated date. You can get titles and availability of books from the array booklist. You may use the fields from which you want to fetch the data."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  get(type: Author, id: "01F0DVHM26HHWS8X8X3NBRSAV6"){\n    ... on Author {\n      hypi{\n        id\n        created\n        updated\n      }\n      name\n      booklist{\n        title\n        available\n      }\n    }\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "get": {\n      "hypi": {\n        "id": "01F0DVHM26HHWS8X8X3NBRSAV6"\n      },\n      "name": "Dan Brown",\n      "booklist": [\n        {\n          "title": "Da Vinci Code",\n          "available": true\n        },\n        {\n          "title": "The Last Symbol",\n          "available": false\n        },\n        {\n          "title": "Inferno",\n          "available": true\n        }\n      ]\n    }\n  }\n}\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"find"},"Find"),Object(i.b)("p",null,"The second approach to getting data out of an instance is by using the",Object(i.b)("inlineCode",{parentName:"p"},"find"),"\xa0\nfunction. Unlike the\xa0",Object(i.b)("inlineCode",{parentName:"p"},"get"),"\xa0function, this returns a list of objects matching the arcql filter provided."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"find(\n    type:\xa0HypiMutationType!\n    arcql:\xa0String!\n    first:\xa0Int\n    after:\xa0String\n    last:\xa0Int\n    before:\xa0String\n    includeTrashed:\xa0Boolean\n):\xa0HypiFilterConnection!\n")),Object(i.b)("p",null,"This function has many parameters. Let\u2019s look at this table to understand them."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},Object(i.b)("strong",{parentName:"th"},"Parameter")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Description")),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"th"},"Example")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("strong",{parentName:"td"},"type")),Object(i.b)("td",{parentName:"tr",align:null},"The type (table) to find data from"),Object(i.b)("td",{parentName:"tr",align:null},"Message, Author")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("strong",{parentName:"td"},"arcql")),Object(i.b)("td",{parentName:"tr",align:null},"Query to filter the data"),Object(i.b)("td",{parentName:"tr",align:null},"arcql: \"hypi.id='01F0FW9XYQWQNNEDYV3S5P2WGQ'\"")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("strong",{parentName:"td"},"first")),Object(i.b)("td",{parentName:"tr",align:null},"Limit the number of records in the results. Used with the \u2018after\u2019 parameter."),Object(i.b)("td",{parentName:"tr",align:null},"12")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("strong",{parentName:"td"},"after")),Object(i.b)("td",{parentName:"tr",align:null},"Return records after an object with this ID"),Object(i.b)("td",{parentName:"tr",align:null},"\u201c01F0FW9XYQWQNNEDYV3S5P2WGQ\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("strong",{parentName:"td"},"last")),Object(i.b)("td",{parentName:"tr",align:null},"Limit the number of records in the results. Used with the \u2018before\u2019 parameter."),Object(i.b)("td",{parentName:"tr",align:null},"6")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("strong",{parentName:"td"},"before")),Object(i.b)("td",{parentName:"tr",align:null},"Return records before an object with this ID"),Object(i.b)("td",{parentName:"tr",align:null},"\u201c01F0FW9XYQWQNNEDYV3S5P2WGQ\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("strong",{parentName:"td"},"includeTrashed")),Object(i.b)("td",{parentName:"tr",align:null},"Display Trashed objects in the record. \u2018false\u2019 by default"),Object(i.b)("td",{parentName:"tr",align:null},"False")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u2018first\u2019 and \u2018after\u2019 parameters work together. \u2018last\u2019 and \u2018before\u2019 work together.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u2018first\u2019 and \u2018last\u2019 are the limits i.e. the max results to return (up to 25)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u2018before\u2019 and \u2018after\u2019 are the ID of objects to return results before or after.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If \u2018before\u2019 is set, then results matching the arcql query are returned before this id")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If \u2018after\u2019 is set, then results matching the arcql query are returned after this id")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u2018includeTrashed\u2019 is false by default. \u2018find\u2019 does not return the objects which were trashed using the \u2018trash\u2019 function. But if you set this parameter to true or use the untrash method then \u2018find\u2019 returns those objects."))),Object(i.b)("p",null,"Let\u2019s check the below example. Records from an ",Object(i.b)("inlineCode",{parentName:"p"},"Author")," object are received using the ",Object(i.b)("inlineCode",{parentName:"p"},"find")," function. Records of Hypi IDs, updated date, name of the authors, and count of books are returned."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"{  \n   find (\n        type: Author, \n        arcql: \"hypi.id = '01F0DVHM2AZCGM0JSR9QRNBWZY'\"\n   ) \n   {\n    edges {\n      cursor\n      node {\n        ... on Author {\n          hypi {\n            id\n            updated\n          }\n          name\n          count\n        }\n      }\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      startCursor\n      endCursor\n      pageLimit\n      previousOffsets\n      nextOffsets\n    }\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "cursor": "01F0DVHM2AZCGM0JSR9QRNBWZY",\n          "node": {\n            "hypi": {\n              "id": "01F0DVHM2AZCGM0JSR9QRNBWZY",\n              "updated": "2021-03-10T10:58:59Z"\n            },\n            "name": "Paulo Coelho",\n            "count": 30\n          }\n        }\n      ],\n      "pageInfo": {\n        "hasPreviousPage": false,\n        "hasNextPage": false,\n        "startCursor": "FIRST",\n        "endCursor": "LAST",\n        "pageLimit": 25,\n        "previousOffsets": [],\n        "nextOffsets": []\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);