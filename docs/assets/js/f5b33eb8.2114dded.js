(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(143)),i={id:"gql-crud-tutorial",title:"Hypi GraphQL CRUD Tutorial",sidebar_label:"Hypi GraphQL CRUD Tutorial",slug:"/gql-crud-tutorial"},l={unversionedId:"gql-crud-tutorial",id:"gql-crud-tutorial",isDocsHomePage:!1,title:"Hypi GraphQL CRUD Tutorial",description:"In this tutorial we\u2019re going to show you how to use our GraphQL API to perform CRUD operations on your app.",source:"@site/content/gql-crud-tutorial.md",slug:"/gql-crud-tutorial",permalink:"/docs/gql-crud-tutorial",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/gql-crud-tutorial.md",version:"current",sidebar_label:"Hypi GraphQL CRUD Tutorial",sidebar:"docs",previous:{title:"GraphQL Schema and Types",permalink:"/docs/gql-schema-types"},next:{title:"Timeseries Aggregations with Date Granularity",permalink:"/docs/time-series-aggregations"}},p=[{value:"Create",id:"create",children:[]},{value:"Update",id:"update",children:[]},{value:"Read",id:"read",children:[]},{value:"Delete",id:"delete",children:[]}],c={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this tutorial we\u2019re going to show you how to use our GraphQL API to perform CRUD operations on your app."),Object(o.b)("p",null,"For the purpose of this tutorial, we\u2019ve created an app with the name hypi-tutorials, and in the  ",Object(o.b)("strong",{parentName:"p"},"Editor")," section we\u2019ve created a simple ",Object(o.b)("strong",{parentName:"p"},"schema")," for our application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"interface Employee{\n    name: String!\n    age: Int!\n    colleagues: [Employee!]\n}\n\ntype Actor implements Employee{\n    name: String!\n    age: Int!\n    colleagues: [Employee!]\n    starsIn: [Episode!]\n}\n\ntype Director implements Employee{\n    name: String!\n    age: Int!\n    colleagues: [Employee!]\n    hasDirected: [Episode!]\n}\n\nenum Episode{\n    S01E01\n    S01E02\n    S01E03\n    S01E04\n    S01E05\n    S01E06\n}\n")),Object(o.b)("p",null,"Now, with a created instance of the app, navigate to the Api Editor of the instance, or do it programmatically with a http request to:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"#"},"https://api.hypi.app/graphql")),Object(o.b)("p",null,"with the http headers"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'"Authorization": "", - your authorization token\n"hypi-domain": "" \u2013the domain of your Hypi app\n')),Object(o.b)("p",null,"Let\u2019s start performing some operations on your Hypi app. For the purpose of this tutorial, we will use the  ",Object(o.b)("strong",{parentName:"p"},"Api Editor.")),Object(o.b)("p",null,"Documentation for the queries and mutations mentioned in this tutorial can be found on the right side of the Api Editor under the \u201cDOCS\u201d tab."),Object(o.b)("h2",{id:"create"},"Create"),Object(o.b)("p",null,"For this tutorial we would like to create an ",Object(o.b)("inlineCode",{parentName:"p"},"Actor")," object with the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," \u201cWill Smith\u201d, ",Object(o.b)("inlineCode",{parentName:"p"},"age")," 17, and he stars in episodes 1, 2 and 3. The mutation will look like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n    upsert(values: {\n            Actor: {\n            name: "Will Smith",\n            age: 17,\n            starsIn: [S01E01, S01E02, S01E03]\n            }\n        }\n    ) {\n        id\n    }\n}\n')),Object(o.b)("p",null,"As you can see, if you are familiar with ",Object(o.b)("strong",{parentName:"p"},"GraphQL")," , the call is pretty simple, you pass in the object that you want to create as a ",Object(o.b)("inlineCode",{parentName:"p"},"values")," parameter to the ",Object(o.b)("inlineCode",{parentName:"p"},"upsert")," mutation, and specify what fields of the ",Object(o.b)("strong",{parentName:"p"},"Magic Hypi object")," you want in the response."),Object(o.b)("p",null,"You can look into all of the fields that the ",Object(o.b)("strong",{parentName:"p"},"Magic Hypi object")," contains under its section in the Hypi GraphQL API documentation, here we just return the ",Object(o.b)("inlineCode",{parentName:"p"},"id"),"."),Object(o.b)("p",null,"As expected, the response looks like this"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01ED4X75AG1G96PDC8A231KTC8"\n      }\n    ]\n  }\n}\n')),Object(o.b)("p",null,"So, we have successfully used the upsert method to create an ",Object(o.b)("inlineCode",{parentName:"p"},"Actor")," in our database."),Object(o.b)("p",null,"Next, let\u2019s see how we can update that actor."),Object(o.b)("h2",{id:"update"},"Update"),Object(o.b)("p",null,"As the \u201cDOCS\u201d say, to update an existing value, we should provide the ",Object(o.b)("inlineCode",{parentName:"p"},"hypi.id"),"for the object along with the data that we want to save for that object."),Object(o.b)("p",null,"Let\u2019s say that we want to update the ",Object(o.b)("inlineCode",{parentName:"p"},"age")," of the actor we just created."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"mutation")," will look like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n    upsert(values: {\n            Actor: {\n                age: 18,\n                hypi: {\n                    id: "01ED4X75AG1G96PDC8A231KTC8"\n                }\n            }\n        }\n    ) {\n        id\n    }\n}\n')),Object(o.b)("p",null,"As you can see, the difference between the create and the update is that the update contains"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'hypi: {\n    id: "01ED4X75AG1G96PDC8A231KTC8"\n}\n')),Object(o.b)("p",null,"Which is the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," that we got back in the create response. As expected, the response remains the same as create."),Object(o.b)("h2",{id:"read"},"Read"),Object(o.b)("p",null,"For reading the data, we will show you two queries that Hypi provides out of the box for any object"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1","."," get()")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"get")," ",Object(o.b)("inlineCode",{parentName:"p"},"query")," provides a way to get a single object by its ",Object(o.b)("inlineCode",{parentName:"p"},"hypi.id"),". The query will like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'query {\n    get(type: Actor, id: "01ED4X75AG1G96PDC8A231KTC8") {\n        ... on Actor {\n            name\n            age\n        }\n    }\n}\n')),Object(o.b)("p",null,"As you can see the get query accepts ",Object(o.b)("inlineCode",{parentName:"p"},"type")," and ",Object(o.b)("inlineCode",{parentName:"p"},"id")," as parameters and it returns whatever fields you specify for the type that you are using it for."),Object(o.b)("p",null,"The response from this query will be"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "get": {\n      "name": "Will Smith",\n      "age": 18\n    }\n  }\n}\n')),Object(o.b)("p",null,"As we expected, we got the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"age")," of the ",Object(o.b)("inlineCode",{parentName:"p"},"Actor")," with ",Object(o.b)("inlineCode",{parentName:"p"},"id")," \u201c01ED4X75AG1G96PDC8A231KTC8\u201d."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2","."," find()")),Object(o.b)("p",null,"The",Object(o.b)("strong",{parentName:"p"},"find")," ",Object(o.b)("inlineCode",{parentName:"p"},"query")," is used to search through your data, for the purpose of this tutorial we\u2019ve created a few more actors in the database."),Object(o.b)("p",null,"The find query accepts two mandatory parameters ",Object(o.b)("inlineCode",{parentName:"p"},"Type")," and ",Object(o.b)("inlineCode",{parentName:"p"},"arcql"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"Type")," is the type of object you want to query, and the ",Object(o.b)("inlineCode",{parentName:"p"},"arcql")," parameter is the query that you want to use for searching though the data."),Object(o.b)("p",null,"To learn more about ",Object(o.b)("strong",{parentName:"p"},"Arcql")," , please refer to the ",Object(o.b)("strong",{parentName:"p"},"Developer Hub")," under the section",Object(o.b)("strong",{parentName:"p"},"\u201cArc Query Language\u201d"),"."),Object(o.b)("p",null,"In this tutorial we will cover listing of all of the actors and searching them by ",Object(o.b)("inlineCode",{parentName:"p"},"name"),"."),Object(o.b)("p",null,"For getting all of the actors we will send the wildcard \u201c","*","\u201d as the ",Object(o.b)("inlineCode",{parentName:"p"},"arcql")," parameter, indicating that I want all of the actors. In the response, we want the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," of the actor along with his ",Object(o.b)("inlineCode",{parentName:"p"},"hypi.id"),". The query will look like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'query {\n    find(type: Actor, arcql: "*") {\n        ... on HypiFilterConnection {\n            edges {\n                node {\n                    ... on Actor {\n                        name\n                        hypi {\n                            id\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')),Object(o.b)("p",null,"As expected, the response is a list of all of the edges of type ",Object(o.b)("inlineCode",{parentName:"p"},"Actor")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Will Smith",\n            "hypi": {\n              "id": "01ED4X75AG1G96PDC8A231KTC8"\n            }\n          }\n        },\n        {\n          "node": {\n            "name": "Alfonso Ribeiro",\n            "hypi": {\n              "id": "01ED4ZCASYQ57YK2VV3WCM3D0E"\n            }\n          }\n        },\n        {\n          "node": {\n            "name": "Will Werrell",\n            "hypi": {\n              "id": "01ED506E9GQ3Z75RHE0609RNYN"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(o.b)("p",null,"Next, we will use ",Object(o.b)("strong",{parentName:"p"},"Arcql")," to create a typical auto-complete query for the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," field. The arcql will look like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u201cname ^ \u2018Will\u2019\u201d\n")),Object(o.b)("p",null,"And the query will look like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"query {\n    find(type: Actor, arcql: \"name ^ 'Will'\") {\n        ... on HypiFilterConnection {\n            edges {\n                node {\n                    ... on Actor {\n                        name\n                        hypi {\n                            id\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n")),Object(o.b)("p",null,"As expected, the response contains only the actors with the names starting with \u2018Will\u2019"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "find": {\n      "edges": [\n        {\n          "node": {\n            "name": "Will Smith",\n            "hypi": {\n              "id": "01ED4X75AG1G96PDC8A231KTC8"\n            }\n          }\n        },\n        {\n          "node": {\n            "name": "Will Werrell",\n            "hypi": {\n              "id": "01ED506E9GQ3Z75RHE0609RNYN"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(o.b)("h2",{id:"delete"},"Delete"),Object(o.b)("p",null,"Hypi offers ",Object(o.b)("strong",{parentName:"p"},"soft delete")," and ",Object(o.b)("strong",{parentName:"p"},"hard delete")," of objects."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1","."," Soft Delete")),Object(o.b)("p",null,"Soft deleting an object in the ",Object(o.b)("strong",{parentName:"p"},"Hypi Universe")," , is referred to as  \u2018trashing\u2019 an object."),Object(o.b)("p",null,"The field \u201ctrashed\u201d, which is a part of the ",Object(o.b)("strong",{parentName:"p"},"Magic Hypi object")," is used to track that."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"trash")," ",Object(o.b)("inlineCode",{parentName:"p"},"mutation")," accepts two parameters, the ",Object(o.b)("inlineCode",{parentName:"p"},"Type")," of the object and an ",Object(o.b)("inlineCode",{parentName:"p"},"arcql")," query. It will trash up to 25 of the objects that match the query. The mutation call looks like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"mutation {\n    trash(type: Actor, arcql: \"hypi.id='01ED4X75AG1G96PDC8A231KTC8'\")\n}\n")),Object(o.b)("p",null,"The trash mutation returns the number of trashed items"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "trash": 1\n  }\n}\n')),Object(o.b)("p",null,"We can verify that the item has been trashed by calling the ",Object(o.b)("strong",{parentName:"p"},"get")," query with the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of the trashed object."),Object(o.b)("p",null,"It should not return any data."),Object(o.b)("p",null,"You can find include the trashed items in searches by calling find with the parameter",Object(o.b)("inlineCode",{parentName:"p"},"\u201cincludeTrashed: True\u201d")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"untrash")," ",Object(o.b)("inlineCode",{parentName:"p"},"mutation")," accepts two parameters, the ",Object(o.b)("inlineCode",{parentName:"p"},"Type")," of the object and an ",Object(o.b)("inlineCode",{parentName:"p"},"arcql")," query. It will untrash all of the objects that match the query."),Object(o.b)("p",null,"The mutation call looks like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"mutation {\n    untrash(type: Actor, arcql: \"hypi.id='01ED4X75AG1G96PDC8A231KTC8'\")\n}\n")),Object(o.b)("p",null,"The untrash mutation returns the number of untrashed items"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "untrash": 1\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2","."," Hard Delete")),Object(o.b)("p",null,"Hard delete is done by calling the ",Object(o.b)("strong",{parentName:"p"},"delete")," ",Object(o.b)("inlineCode",{parentName:"p"},"mutation"),". The delete mutation accepts two parameters, the",Object(o.b)("inlineCode",{parentName:"p"},"Type"),"of the object and an ",Object(o.b)("inlineCode",{parentName:"p"},"arcql")," query. It will delete up to 25 of the objects that match the query. The mutation call looks like this."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"mutation {\n    delete(type: Actor, arcql: \"hypi.id='01ED4X75AG1G96PDC8A231KTC8'\")\n}\n")),Object(o.b)("p",null,"The delete mutation returns the number of deleted items"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "delete": 1\n  }\n}\n')),Object(o.b)("p",null,"Once an object has been hard deleted, there is no way to recover it."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In this tutorial you learned about how to perform CRUD operations on your Hypi GraphQL API. Next you can navigate to your instance\u2019s Api Editor and try these operations out for yourself")))}b.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,h=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);