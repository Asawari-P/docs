(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),l=(a(0),a(159)),o=a(163),c=a(164),i={id:"deletedata",title:"Delete Data",sidebar_label:"Delete Data",slug:"/delete-data"},s={unversionedId:"deletedata",id:"deletedata",isDocsHomePage:!1,title:"Delete Data",description:"The hypi platform supports two types of deletions. The first one is a Soft Delete that does not actually delete data but \u2018marks\u2019 it as deleted. Use the trash function to perform a soft delete. You may reverse the soft delete to restore data.",source:"@site/content/deletedata.md",slug:"/delete-data",permalink:"/docs/delete-data",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/deletedata.md",version:"current",sidebar_label:"Delete Data",sidebar:"docs",previous:{title:"Read Data",permalink:"/docs/read-data"},next:{title:"Creating and removing one-to-one and one-to-many references",permalink:"/docs/references"}},b=[{value:"trash",id:"trash",children:[]},{value:"untrash",id:"untrash",children:[]},{value:"delete",id:"delete",children:[]},{value:"deleteScalars",id:"deletescalars",children:[]}],u={toc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The hypi platform supports two types of deletions. The first one is a ",Object(l.b)("strong",{parentName:"p"},"Soft Delete")," that does not actually delete data but \u2018marks\u2019 it as deleted. Use the ",Object(l.b)("inlineCode",{parentName:"p"},"trash")," function to perform a soft delete. You may reverse the soft delete to restore data."),Object(l.b)("p",null,"The second type of delete is irreversible. The data is permanently deleted from the system and cannot be undone. Use the ",Object(l.b)("inlineCode",{parentName:"p"},"delete")," or ",Object(l.b)("inlineCode",{parentName:"p"},"deleteScalars")," functions to delete data permanently."),Object(l.b)("p",null,"So, there are four functions related to deletion."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Let's check them out!")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#trash"},"trash")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#untrash"},"untrash")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#delete"},"delete")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#deletescalars"},"deleteScalars"))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"trash"},"trash"),Object(l.b)("p",null,'In some cases, you want your data to \u2018appear\u2019 deleted. But you may restore it if required. Take an example of an email application. There is often a "recycle" or "trash" folder. By using the\xa0',Object(l.b)("inlineCode",{parentName:"p"},"trash"),"\xa0function, you can put unwanted data in Trash."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"trash(type: HypiMutationType!, arcql: String!): Int!\n")),Object(l.b)("p",null,"The function returns the number of records that were marked as trash."),Object(l.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"query",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"mutation {\n  trash(type: Author, \n  arcql: \"hypi.id = '01F0DN278W6NMQFRW4TVRCA52V'\")\n}\n"))),Object(l.b)(c.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "trash": 1\n  }\n}\n')))),Object(l.b)("p",null,"If you use the\xa0\u2018get\u2019\xa0or\xa0\u2018find\u2019\xa0queries now, the result will not display the trashed object by default. You must set the\xa0\u2018includeTrashed\u2019\xa0parameter to\xa0\u2018true\u2019\xa0to get the object."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"untrash"},"untrash"),Object(l.b)("p",null,"The opposite of the\xa0trash\xa0function is\xa0",Object(l.b)("inlineCode",{parentName:"p"},"untrash"),". Use this function to remove the marker from the data that was previously marked as trash."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"untrash(type: HypiMutationType!, arcql: String!): Int!\n")),Object(l.b)("p",null,"The function returns the number of records that were marked untrashed."),Object(l.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"query",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"mutation {\n  untrash(\n  type: Author, arcql: \"hypi.id = '01F0DN278W6NMQFRW4TVRCA52V'\")\n}\n"))),Object(l.b)(c.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "untrash": 1\n  }\n}\n')))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"delete"},"delete"),Object(l.b)("p",null,"If you want to delete data permanently, use the\xa0",Object(l.b)("inlineCode",{parentName:"p"},"delete"),"\xa0function."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"\ndelete(type: HypiMutationType!, arcql: String!,clearArrayReferences:Boolean=false): Int!\n\n")),Object(l.b)("p",null,"The function returns the number of records that were marked deleted. You may delete the records using the ArcQL query. The ",Object(l.b)("inlineCode",{parentName:"p"},"arcql")," parameter takes the query. Maximum 25 records will be deleted in one request."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," parameter is used to implement deletion of the array fields with one-to-many references. (See ",Object(l.b)("a",{parentName:"p",href:"/docs/references"},"References"),".)"),Object(l.b)("p",null,"Hypi supports \u201clightweight\u201d ",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Referential_integrity"},"Referential\xa0Integrity")," on array fields. The referential integrity check can be forcibly disabled by setting the ",Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," when deleting objects. The default is set to 'false' which means if there are existing references to an object, you cannot delete it. But setting ",Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," to true removes the references by unlinking the referenced objects and then deletes the object specified by 'arcql' query."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Setting ",Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," to true only removes references to data in array fields as the name implies and it does not delete the referenced objects in the array. Only the object specified by the 'arcql' field will get deleted."))),Object(l.b)("p",null,"Let's look at the example from our Author and Books data types now. If you try to delete data from Books without setting ",Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," values, it would result in an error. As the references exist between Author and Books table through the 'booklist' field, the Books records cannot be deleted without removing the references."),Object(l.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"query",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"mutation {\n  delete(type: Books, arcql: \"hypi.id = '01F2X8203XKRFR7G62T6SP1MW4'\")\n}\n"))),Object(l.b)(c.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": null,\n  "errors": [\n    {\n      "message": "There are at least 1 references to the data being deleted. A sample of references found is included.",\n      "extensions": {}\n    },\n    {\n      "message": "Author.booklist links to Books. Use unlink to remove the reference before deleting",\n      "extensions": {}\n    },\n    {\n      "message": "Cannot return null for non-nullable type: \'Int\' within parent \'Mutation\' (/delete)",\n      "path": [\n        "delete"\n      ]\n    }\n  ]\n}\n')))),Object(l.b)("p",null,"Setting parameter ",Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," will remove the object. "),Object(l.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"query",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"mutation {\n  delete(type: Books, arcql: \"hypi.id = '01F2X8203XKRFR7G62T6SP1MW4'\",\n  clearArrayReferences:true)\n}\n"))),Object(l.b)(c.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "delete": 1\n  }\n}\n')))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," can lead to an inconsistent state if your app re-uses object IDs. Hypi never re-use an object ID but if you specify your IDs manually make sure not to re-use them. Otherwise using ",Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," and then using an ID that was deleted will result in the new object reappearing on non-array fields but pointing to the new data. This is because ",Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," only removes references to data in array fields as the name implies."))),Object(l.b)("p",null,"Please note that you may remove the references using the ",Object(l.b)("a",{parentName:"p",href:"/docs/references"},"unlink")," function and then delete the object without setting ",Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," field.  You may not set ",Object(l.b)("inlineCode",{parentName:"p"},"clearArrayReferences")," if you are deleting objects that do not deal with an object- array or have one-to-many references."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"deletescalars"},"deleteScalars"),Object(l.b)("p",null,"Array fields in Hypi are not stored directly with the other scalar fields in an object. This allows you to add an unlimited number of items to an array field. So, if you want to delete data permanently from a scalar array, use the ",Object(l.b)("inlineCode",{parentName:"p"},"deleteScalars")," function."),Object(l.b)("p",null,"If there is an array that references another type, note that deleteScalars will not delete scalar data from that array. \u2018link\u2019 function is used for that purpose."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"deleteScalars(\n    type:\xa0HypiMutationType!\n    field:\xa0String!\n    values:\xa0[String!]!\n    arcql:\xa0String!\n):\xa0Int!\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Parameter")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Description")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Example")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"type")),Object(l.b)("td",{parentName:"tr",align:null},"The type (table) to delete scalar array values from"),Object(l.b)("td",{parentName:"tr",align:null},"Message, Author")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"field")),Object(l.b)("td",{parentName:"tr",align:null},"The name of the array field"),Object(l.b)("td",{parentName:"tr",align:null},"Number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"values")),Object(l.b)("td",{parentName:"tr",align:null},"The values to be deleted"),Object(l.b)("td",{parentName:"tr",align:null},"[","2,5,6","]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"arcql")),Object(l.b)("td",{parentName:"tr",align:null},"The id of the object to delete values from"),Object(l.b)("td",{parentName:"tr",align:null},"arcql: \"hypi.id=  '01F0FW9XYQWQNNEDYV3S5P2WGQ'\"")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Consider the data type \u2018Question\u2019 which holds question-answer keys for a test.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"type Question\xa0{\n    hypi:\xa0Hypi\n    question:\xa0[Int!]\n    answer:\xa0[String!]\xa0\xa0\n}\n")),Object(l.b)("p",null," The below example shows the use of the \u2018deleteScalars\u2019 function to delete data from scalar arrays. In the example, from an \u2018ans\u2019 field from Question, string values (\u201cb\u201d and \u201cc\u201d) are deleted. The function returns the number of records affected by the deletion."),Object(l.b)("p",null,"Frame arcql query to select the object and get an id. In the example, hypi id has been hardcoded."),Object(l.b)(o.a,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"query",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'mutation{\n  deleteScalars(\n    type:Question,\n    field:"ans",\n    values:["b","c"],\n    arcql:"hypi.id =\'01F0FW9XYQWQNNEDYV3S5P2WGQ\'"\n  )\n}\n'))),Object(l.b)(c.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "deleteScalars": 2\n  }\n}\n')))))}d.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(a),p=n,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},160:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},161:function(e,t,a){"use strict";var n=a(0),r=a(162);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},162:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(161),o=a(160),c=a(57),i=a.n(c);var s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=Object(l.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,y=Object(n.useState)(c),j=y[0],O=y[1],v=n.Children.toArray(e.children),g=[];if(null!=d){var N=h[d];null!=N&&N!==j&&u.some((function(e){return e.value===N}))&&O(N)}var w=function(e){var t=e.target,a=g.indexOf(t),n=v[a].props.value;O(n),null!=d&&(f(d,n),setTimeout((function(){var e,a,n,r,l,o,c,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,o=window,c=o.innerHeight,s=o.innerWidth,a>=0&&l<=s&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i.a.tabItemActive),setTimeout((function(){return t.classList.remove(i.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case b:var n=g.indexOf(e.target)+1;a=g[n]||g[0];break;case s:var r=g.indexOf(e.target)-1;a=g[r]||g[g.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},p)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:T,onFocus:w,onClick:w},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);