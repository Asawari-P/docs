(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||r;return t?i.a.createElement(m,l(l({ref:n},u),{},{components:t})):i.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(114)),o={id:"userdefinedfunctions",title:"User Defined Functions",sidebar_label:"User Defined Functions",slug:"/"},l={unversionedId:"userdefinedfunctions",id:"userdefinedfunctions",isDocsHomePage:!1,title:"User Defined Functions",description:"User Defined functions provide a lightweight way to implement custom behaviour outside of what Hypi offers. The functions are executed on the same server where the query gets processed.",source:"@site/content/userdefinedfunctions.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/hypi-universe/docs/edit/master/website/content/userdefinedfunctions.md",version:"current",sidebar_label:"User Defined Functions"},c=[],u={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"User Defined functions provide a lightweight way to implement custom behaviour outside of what Hypi offers. The functions are executed on the same server where the query gets processed."),Object(r.b)("p",null,"Currently, you may use two programming language for the user defined functions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Groovy: The entire Groovy syntax is available on the hypi platform. Groovy is general a general programming language. Adding custom behaviour using Groovy becomes quick, easy and performant.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Velocity: The velocity template language is in place to output text. This text may execute dynamic behaviour. E.g., customizing the body of an email, substituting receiver\u2019s name from a variable etc."))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Let\u2019s check how to implement user defined functions. ")),Object(r.b)("p",null,"We will start with a simple schema as follows: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'type Query {\n    inlineGroovyFunction(a: String, b: Int, c: Boolean):Json @tan(type:Groovy, inline: """\n        def map = new java.util.LinkedHashMap()\n        map.put("a", a)\n        map.put("b", b)\n        map.put("c", c)\n        return map\n    """)\n    inlineVelocityFunction(a: String, b: Int, c: Boolean):\n    String @tan(type:Velocity, inline: "$a,$b,$c")\n}\n')),Object(r.b)("p",null,"The schema has two user defined functions. ",Object(r.b)("inlineCode",{parentName:"p"},"inlineGroovyFunction")," and ",Object(r.b)("inlineCode",{parentName:"p"},"inlineVelocityFunction")," You may define the user defined functions either inline or through a script. ",Object(r.b)("inlineCode",{parentName:"p"},"@tan")," directive is used to add the functions. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"inlineGroovyFunction")," function puts value of variables a,b and c in a LinkedHashMap and the map is returned in the form of JSON data. ",Object(r.b)("inlineCode",{parentName:"p"},"inlineVelocityFunction")," uses velocity template to return the formatted string output of variables a,b, and c. You may execute the user defined function as any other GraphQL query."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'{\n  inlineGroovyFunction(a:"val1", b:23, c: true)\n}\nOR\n{\n  inlineVelocityFunction(a:"val1", b:23, c: true)\n}\n\n')),Object(r.b)("p",null,"Result:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "inlineGroovyFunction": {\n      "a": "val1",\n      "b": 23,\n      "c": true\n    }\n  }\n}\nOR\n{\n  "data": {\n    "inlineVelocityFunction": "val1,23,true"\n  }\n}\n')),Object(r.b)("p",null,"You may pass the variable parameters to the function as well. Just like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"query inlineVelocityFunction($a: String, $b: Int, $c: Boolean){\n  inlineVelocityFunction(a: $a, b: $b, c: $c)\n}\n")),Object(r.b)("p",null,"As you can see in ",Object(r.b)("inlineCode",{parentName:"p"},"inlineGroovyFunction"),", Java classes are also available to use inline. You may also use a simple Groovy like version as follows."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'inlineGroovyFunction(a: String, b: Int, c: Boolean):Json @tan(type:Groovy, inline: """\n     return [\n     a: a,\n     b: b,\n     c: c\n     ]\n """)\n')),Object(r.b)("h4",{id:"function-gql"},"Function \u2018gql\u2019"),Object(r.b)("p",null,"The function 'gql' is available to execute inside the user defined function. Using this function you may perform mutation or query operations inside the user defined function. The result depends upon the type of operation. If you perform an ",Object(r.b)("inlineCode",{parentName:"p"},"upsert")," mutation, it will return id, createdBy etc. (Just like the normal ",Object(r.b)("inlineCode",{parentName:"p"},"upsert"),"in Hypi) If you perform a ",Object(r.b)("inlineCode",{parentName:"p"},"find")," query, it will return a list."),Object(r.b)("p",null,"Let\u2019s check a few examples of how to use this function. Add the following schema in GraphQL."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'type Mutation {\n  SetBookInfo(a: String, b: Float, c: Int):Json @tan(type:Groovy, inline: """\n    return [ gql(\\"""\n    mutation {\n        upsert(\n            values: { \n                Book: [\n                    { \n                        title: "$a",\n                        price: $b,\n                        authorid: $c\n                    }\n                ] \n            }\n        ) {\n            id\n        }\n    }\\"""\n    )\n    ]\n  """)\n}\ntype Query {\n  GetAuthorInfo(a: String):Json @tan(type:Groovy, inline: """\n    return [ gql(\\"""\n    query {\n           get(type: Author, id: "$a"){\n            ... on Author {\n            hypi{\n                id               \n            }\n            name\n            booklist{\n                title               \n                price\n                authorid \n            }\n        }\n        \n    }\n    }\\"""\n    )\n    ]\n  """)\n}                                                         \n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"SetBookInfo")," is a user defined function to set parameter values inside the table ",Object(r.b)("inlineCode",{parentName:"p"},"Book"),". Upon successful creation of the object, the ",Object(r.b)("inlineCode",{parentName:"p"},"hypi.id")," is returned."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'mutation {\n  SetBookInfo(a:"Ikigai", b:6.99, c: 7)\n}\n')),Object(r.b)("p",null,"Result:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'{\n  "data": {\n    "SetBookInfo": [\n      {\n        "data": {\n          "upsert": [\n            {\n              "id": "01F1F23WERW6V4JQYDRW4QQRBQ"\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\n')),Object(r.b)("p",null,"Let's retrieve ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," table data using ",Object(r.b)("inlineCode",{parentName:"p"},"GetAthorInfo"),". Pass the Author id as ",Object(r.b)("inlineCode",{parentName:"p"},"Author1")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'query{\n  GetAuthorInfo(a:"Author1")\n}\n')),Object(r.b)("p",null,"It returns the author infomation with id 'Author1'"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "GetAuthorInfo": [\n      {\n        "data": {\n          "get": {\n            "hypi": {\n              "id": "Author1"\n            },\n            "name": "Dan Brown",\n            "booklist": [\n              {\n                "title": "Da Vinci Code",\n                "price": 12.99,\n                "authorid": 1\n              }\n            ]\n          }\n        }\n      }\n    ]\n  }\n}\n')),Object(r.b)("p",null,"The",Object(r.b)("inlineCode",{parentName:"p"},"gql"),"function accepts two parameters."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"query"),": String - the GraphQL query to execute"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"values"),": Map - a map containing the set of variables used in",Object(r.b)("inlineCode",{parentName:"li"},"query"))),Object(r.b)("p",null,"In the above examples, we have just used GraphQL query string. Let's modify the ",Object(r.b)("inlineCode",{parentName:"p"},"SetBookInfo")," function with Map values."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"type Mutation {\n  SetBookInfo(a: String, b: Float, c: Int):Json @tan(type:Groovy, inline: \"\"\"\n    return gql('''\n    mutation CreateBook($p: String, $q: Float, $r: Int){\n        upsert(\n            values: { \n                Book: [\n                    { \n                        title: $p,\n                        price: $q,\n                        authorid: $r\n                    }\n                ] \n            }\n        ) {\n            id\n        }\n    }''', ['p':a , 'q': b, 'r': c])\n  \"\"\")\n}\n")),Object(r.b)("p",null,"Notice few changes here:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Replaced the",Object(r.b)("inlineCode",{parentName:"li"},'\\"""'),"with just",Object(r.b)("inlineCode",{parentName:"li"},"'''"),". Using three",Object(r.b)("inlineCode",{parentName:"li"},"'"),"in Groovy, we have the same effect as",Object(r.b)("inlineCode",{parentName:"li"},'"""'),". without string interpolation. It means that",Object(r.b)("inlineCode",{parentName:"li"},"$a"),"is not evaluated as a Groovy variable and remains as a part of the string."),Object(r.b)("li",{parentName:"ul"},"Added GraphQL variables",Object(r.b)("inlineCode",{parentName:"li"},"CreateBook($p: String, $q: Float, $r: Int)")),Object(r.b)("li",{parentName:"ul"},"Added variable values",Object(r.b)("inlineCode",{parentName:"li"},"['p':a, 'q': b, 'r': c]")," in the map. Now, the variables",Object(r.b)("inlineCode",{parentName:"li"},"$p"),",",Object(r.b)("inlineCode",{parentName:"li"},"$q"),"and",Object(r.b)("inlineCode",{parentName:"li"},"$r"),"are GraphQL variables not Groovy variables.")),Object(r.b)("p",null,"With these changes, the result is the same as the previous example!"))}p.isMDXComponent=!0}}]);