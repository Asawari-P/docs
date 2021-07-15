(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7621],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(7294),a=t(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(6010),i="tabItem_1uMI",u="tabItemActive_2DSg";var s=37,p=39;var d=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,d=e.values,c=e.groupId,m=e.className,k=o(),f=k.tabGroupChoices,h=k.setTabGroupChoices,b=(0,r.useState)(a),y=b[0],g=b[1],v=r.Children.toArray(e.children),N=[];if(null!=c){var T=f[c];null!=T&&T!==y&&d.some((function(e){return e.value===T}))&&g(T)}var w=function(e){var n=e.currentTarget,t=N.indexOf(n),r=d[t].value;g(r),null!=c&&(h(c,r),setTimeout((function(){var e,t,r,a,o,l,i,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,s=l.innerWidth,t>=0&&o<=s&&a<=i&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},j=function(e){var n,t;switch(e.keyCode){case p:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case s:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},m)},d.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":y===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:w,onClick:w},t)}))),n?(0,r.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},6399:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),l=t(5064),i=t(8215),u=["components"],s={id:"references",title:"Creating and removing one-to-one and one-to-many references",sidebar_label:"References",slug:"/references"},p=void 0,d={unversionedId:"references",id:"references",isDocsHomePage:!1,title:"Creating and removing one-to-one and one-to-many references",description:"Hypi can provide one-to-one or one-to-many references for tables.",source:"@site/content/references.md",sourceDirName:".",slug:"/references",permalink:"/docs/references",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/references.md",version:"current",frontMatter:{id:"references",title:"Creating and removing one-to-one and one-to-many references",sidebar_label:"References",slug:"/references"},sidebar:"docs",previous:{title:"ArcQL filtering",permalink:"/docs/arcql"},next:{title:"Authorisation",permalink:"/docs/authorisation"}},c=[{value:"Examples",id:"examples",children:[{value:"One-to-One Reference",id:"one-to-one-reference",children:[]},{value:"One-to-Many Reference:",id:"one-to-many-reference",children:[]}]}],m={toc:c};function k(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hypi can provide ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-one")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-many")," references for tables."),(0,o.kt)("p",null,"Let\u2019s say you want to connect Table A to Table B through one common field \u2018C\u2019. So, table A has this field C of type B. This is the one-to-one reference. If field C is an array or list of type B, it is a one-to-many kind of reference."),(0,o.kt)("p",null,"For creating a reference, Hypi has the built-in function ",(0,o.kt)("inlineCode",{parentName:"p"},"link"),". The references can be removed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"unlink")," function."),(0,o.kt)("p",null,"Let\u2019s check the signatures of link and unlink functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"link(\n    from:HypiMutationType!\n    to:HypiMutationType!\n    via:String!\n    whereFromID:String!\n    andToID:String!\n):Boolean!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"unlink(\n    from:HypiMutationType!\n    to:HypiMutationType!\n    via:String!\n    whereFromID:String!\n    andToID:String!\n):Boolean!\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Example")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"from")),(0,o.kt)("td",{parentName:"tr",align:null},"The data type from where reference needs to be created"),(0,o.kt)("td",{parentName:"tr",align:null},"from: \u2018Author\u2019")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"to")),(0,o.kt)("td",{parentName:"tr",align:null},"The data type to be referred"),(0,o.kt)("td",{parentName:"tr",align:null},"to: \u2018Book\u2019")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"via")),(0,o.kt)("td",{parentName:"tr",align:null},"The field of object \u2018to\u2019 in the object \u2018from\u2019"),(0,o.kt)("td",{parentName:"tr",align:null},"Booklist")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"whereFromID")),(0,o.kt)("td",{parentName:"tr",align:null},"Hypi ID of the Object of type \u2018from\u2019 that needs an entry of object \u2018to\u2019"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2018Author1\u2019")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"andToID")),(0,o.kt)("td",{parentName:"tr",align:null},"Hypi ID of the Object of type \u2018to\u2019 that needs to be entered into the object of type \u2018from\u2019"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2018Book1\u2019")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"To go through examples, we will need below schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"type Book {\n    title:\xa0String\n    authorid:\xa0Int\n    price:\xa0Float\n}\n\ntype Author\xa0{\n    name:\xa0String\n    age:\xa0Int\n    bestbook:\xa0Book\n    booklist:\xa0[Book!]\n}\n")),(0,o.kt)("p",null,"Here, the field ",(0,o.kt)("inlineCode",{parentName:"p"},"bestbook")," will be used to generate ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-one reference")," between table ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," and table ",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),". Also, the field ",(0,o.kt)("inlineCode",{parentName:"p"},"booklist")," will be used to generate ",(0,o.kt)("inlineCode",{parentName:"p"},"one-to-many")," kind of references."),(0,o.kt)("p",null,"Let\u2019s add data in the table Author and table Book as follows."),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\nmutation Upsert($values: HypiUpsertInputUnion!) {\n  upsert(values: $values) {\n    id\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"data",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'#Author Table\n{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Dan Brown",\n            "age": 56,\n            "bestbook": {\n              "title": "Inferno",\n              "authorid": 1\n            },\n            "booklist": [\n              {\n                "title": "Da Vinci Code",\n                "authorid": 1\n              },\n              {\n                "title": "The Last Symbol",\n                "authorid": 1\n              }\n            ]\n          },\n          "cursor": "Author1"\n        }\n      ]\n    }\n  }\n}\n\n#Book Table\n\n{\n  "values": {\n    "Book": [\n      {\n        "hypi": {"id": "Book1"},\n        "title":  "Inferno",\n        "authorid": 1\n      }       \n    ]\n  }\n}      \n')))),(0,o.kt)("h3",{id:"one-to-one-reference"},"One-to-One Reference"),(0,o.kt)("p",null,"If you want to enter ",(0,o.kt)("inlineCode",{parentName:"p"},"Book1")," as the bestbook of Author1, you may link Author1 with Book1 via field ",(0,o.kt)("inlineCode",{parentName:"p"},"bestbook"),"."),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'mutation {\n    link(from:Author,to:Book,\n    via:"bestbook",whereFromID:"Author1",andToID:"Book1")\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "link": true\n  }\n}\n')))),(0,o.kt)("p",null,"Linking the tables results in the insertion of data from Book1 into the field Bestbook of Author1. Now, retrieve data of Author using find function and verify."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Dan Brown",\n            "age": 56,\n            //Book1 Inserted\n            "bestbook": {\n              "title": "Inferno",\n              "authorid": 1\n            },\n            "booklist": [\n              {\n                "title": "Da Vinci Code",\n                "authorid": 1\n              },\n              {\n                "title": "The Last Symbol",\n                "authorid": 1\n              }\n            ]\n          },\n          "cursor": "Author1"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"You may remove the reference using the unlink function."),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'mutation{\n    unlink(from:Author,to:Book,\n    via:"bestbook",whereFromID:"Author1",andToID:"Book1")\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "unlink": true\n  }\n}\n')))),(0,o.kt)("p",null,"This results in the setting of the value of bestbook as null. Book1 data remains as it is. But the object simply gets removed from the field bestbook of object Author1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Dan Brown",\n            "age": 56,\n             //Book1 entry removed\n            "bestbook": null,\n            "booklist": [\n              {\n                "title": "Da Vinci Code",\n                "authorid": 1\n              },\n              {\n                "title": "The Last Symbol",\n                "authorid": 1\n              },\n              {\n                "title": "Inferno",\n                "authorid": 1\n              }\n            ]\n          },\n          "cursor": "Author1"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"one-to-many-reference"},"One-to-Many Reference:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," function works on an array as well. You may link to the booklist field from the Author1 object to Book1. So an entry of Book1 gets added into the booklist array of Author1."),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'mutation{\n    link(from:Author,to:Book,\n    via:"booklist",whereFromID:"Author1",andToID:"Book1")\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "link": true\n  }\n}\n')))),(0,o.kt)("p",null,"You may retrieve data from Author1 using find function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Dan Brown",\n            "age": 56,\n            "bestbook": null,\n            "booklist": [\n              {\n                "title": "Da Vinci Code",\n                "authorid": 1\n              },\n              {\n                "title": "The Last Symbol",\n                "authorid": 1\n              },\n                //Book1 inserted in the array\n              {\n                "title": "Inferno",\n                "authorid": 1\n              }\n            ]\n          },\n          "cursor": "Author1"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Unlinking the reference would simply remove the entry Book1 from the booklist. The Book1 object would not get deleted from the platform. But its entry would be removed from the array. "),(0,o.kt)(l.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'mutation{\n    unlink(from:Author,to:Book,\n    via:"booklist",whereFromID:"Author1",andToID:"Author1Book1")\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "unlink": true\n  }\n}\n')))),(0,o.kt)("p",null,"Retrieve Author1 data to get following result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "values": {\n    "Author": [\n      {\n        "hypi": {"id": "Author1"},\n        "name": "Dan Brown",\n        "age": 56,\n        "booklist":[\n          {\n            "hypi": {"id": "Author1Book1"},\n            "title": "Da Vinci Code",\n            "price": 12.99,\n            "authorid": 1\n          },\n          {\n            "hypi": {"id": "Author1Book2"},\n            "title": "The Last Symbol",\n            "price": 10,\n            "authorid": 1\n          }          \n        ] \n      }       \n    ]\n  }\n}      \n\n')),(0,o.kt)("p",null,"Using link and unlink function you may add or remove objects from the array of objects."))}k.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);