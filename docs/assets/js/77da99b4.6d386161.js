(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(159)),i=n(163),l=n(164),c={id:"mathsapi",title:"Maths APIs",sidebar_label:"Maths APIs",slug:"/maths-api"},s={unversionedId:"mathsapi",id:"mathsapi",isDocsHomePage:!1,title:"Maths APIs",description:"Mathematical functions perform standard calculations on the data. Users may perform these calculations on the client-side. However, if more than two clients are performing mathematical operations on the data at the same time, it may lead to data loss or errors. To prevent this scenario, Hypi Maths APIs are designed.",source:"@site/content/mathsapi.md",slug:"/maths-api",permalink:"/docs/maths-api",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/mathsapi.md",version:"current",sidebar_label:"Maths APIs",sidebar:"docs",previous:{title:"Aggregation",permalink:"/docs/aggregation"},next:{title:"Hypi Directives",permalink:"/docs/hypi-directives"}},u=[],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Mathematical functions perform standard calculations on the data. Users may perform these calculations on the client-side. However, if more than two clients are performing mathematical operations on the data at the same time, it may lead to data loss or errors. To prevent this scenario, Hypi Maths APIs are designed."),Object(o.b)("p",null,"Let\u2019s perform mathematical operations on the price field in the data type ",Object(o.b)("inlineCode",{parentName:"p"},"Book"),". ",Object(o.b)("inlineCode",{parentName:"p"},"Price")," is a float value. Mathematical APIs work only on floats and integers, i.e., numerical values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"type Book {\n    authorid:\xa0Int\n    title:\xa0String\n    price:\xa0Float\n}\n")),Object(o.b)("p",null,"Mathematical operations can only be performed on an existing object. The precedence of the mathematical operations follows\xa0",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Order_of_operations"},"BODMAS"),". So, if all fields are specified the precedence is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Division"),Object(o.b)("li",{parentName:"ul"},"Multiplication"),Object(o.b)("li",{parentName:"ul"},"Addition"),Object(o.b)("li",{parentName:"ul"},"Subtraction")),Object(o.b)("p",null,"Let\u2019s perform a mathematical operation as shown in the below code. We are carrying out the operations on hypi id - ",Object(o.b)("inlineCode",{parentName:"p"},"Author2Book1")," generated during ",Object(o.b)("a",{parentName:"p",href:"/docs/aggregation"},"Aggregate APIs example"),"."),Object(o.b)(i.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"query",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'mutation {\n     math (\n         values: {\n             Book: [\n             {\n                 price: {\n                     hypi: { id: "Author2Book1" }\n                         div: 3\n                         times: 10\n                         minus: 2\n                         plus: 30\n                        }\n                     }\n                 ]\n             }\n         ) \n    {\n       id\n    }\n}\n'))),Object(o.b)(l.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n     "math": [\n         {\n         "id": "Author2Book1"\n         }\n     ]\n   }\n}\n')))),Object(o.b)("p",null,"In above example, we are using all the mathematical operators available in the APIs. Notice that the query uses an array (the square brackets) so you can perform math operations on multiple objects (and even multiple types) in one request."),Object(o.b)("p",null,"The order of execution is as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"value = 5.99 (the price of the book with id Author2Book1)"),Object(o.b)("li",{parentName:"ol"},"5.99 / 3 = 1.996666666666667"),Object(o.b)("li",{parentName:"ol"},"1.996666666666667 * 10 = 19.96666666666667"),Object(o.b)("li",{parentName:"ol"},"19.96666666666667 - 2 = 17.96666666666667"),Object(o.b)("li",{parentName:"ol"},"17.96666666666667 + 30 = 47.96666666666667")),Object(o.b)("p",null,"Now, query the price value of the book that was originally set to 5.99. Its value has changed to 47.96666666666667."),Object(o.b)(i.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"query",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"{\n find(type: Book, arcql: \"hypi.id = 'Author2Book1'\") {\n     edges {\n         node {\n         ... on Book {\n         price\n         }\n     }\n     cursor\n     }\n   }\n}\n"))),Object(o.b)(l.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n     "find": {\n         "edges": [\n             {\n                 "node": {\n                 "price": 47.96666666666667 },\n                 "cursor": "Author2Book1"\n             }\n         ]\n     }\n  }\n}\n')))))}b.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},161:function(e,t,n){"use strict";var a=n(0),r=n(162);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},162:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(161),i=n(160),l=n(57),c=n.n(l);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,b=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,v=Object(a.useState)(l),y=v[0],O=v[1],g=a.Children.toArray(e.children),j=[];if(null!=b){var w=f[b];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&O(w)}var N=function(e){var t=e.target,n=j.indexOf(t),a=g[n].props.value;O(a),null!=b&&(h(b,a),setTimeout((function(){var e,n,a,r,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case s:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:k,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);