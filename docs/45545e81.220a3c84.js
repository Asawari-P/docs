(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=s(t),b=a,d=g["".concat(i,".").concat(b)]||g[b]||p[b]||o;return t?r.a.createElement(d,l(l({ref:n},c),{},{components:t})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),o=(t(0),t(112)),i={id:"aggregation",title:"Aggregation",sidebar_label:"Aggregation",slug:"/aggregation"},l={unversionedId:"aggregation",id:"aggregation",isDocsHomePage:!1,title:"Aggregation",description:"Aggregation performs a calculation on a set of values and returns a single value. Aggregations are powerful functions. Their results provide insight into the gathered values in the database.",source:"@site/content/aggregation.md",slug:"/aggregation",permalink:"/docs/aggregation",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/aggregation.md",version:"current",sidebar_label:"Aggregation",sidebar:"docs",previous:{title:"Maths APIs",permalink:"/docs/maths-api"}},u=[{value:"Examples:",id:"examples",children:[]},{value:"Aggregate Matching Rows",id:"aggregate-matching-rows",children:[]}],c={toc:u};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aggregation performs a calculation on a set of values and returns a single value. Aggregations are powerful functions. Their results provide insight into the gathered values in the database."),Object(o.b)("p",null,"You can aggregate any scalar field in at least one way. String fields can only be counted or grouped. But, you can perform aggregations on numerical fields like Integers and Floats. You can perform the following aggregations with Hypi."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"avg"),"\xa0- Calculates the average of a set of values from a field"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"count"),"\xa0- Counts the number of records from a field"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sum"),"\xa0\u2013 Calculates the sum of a set of values from a field"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"max"),"\xa0\u2013 Returns maximum from a set of values"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"min"),"\xa0\u2013 Returns minimum from a set of values")),Object(o.b)("p",null,"We will use the following schema to work with aggregate functions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"type Book {\n    authorid:\xa0Int\n    title:\xa0String\n    price:\xa0Float\n}\n\ntype Author\xa0{\n    name:\xa0String\n    age:\xa0Int\n    booklist:\xa0[Book!]\n}\n")),Object(o.b)("h3",{id:"examples"},"Examples:"),Object(o.b)("p",null,"Let\u2019s add some data in an object to perform aggregations."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"mutation Upsert($values: HypiUpsertInputUnion!) {\n    upsert(values: $values) {\n    id\n    }\n}\n")),Object(o.b)("p",null,"Data:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "values": {\n "Author": [\n     {\n     "hypi": {"id": "Author1"},\n     "name": "Dan Brown",\n     "age": 56,\n     "booklist":[\n         {\n         "hypi": {"id": "Author1Book1"},\n         "title": "Da Vinci Code",\n         "price": 12.99,\n         "authorid": 1\n         },\n         {\n         "hypi": {"id": "Author1Book2"},\n         "title": "The Last Symbol",\n         "price": 10,\n         "authorid": 1\n         },\n         {\n         "hypi": {"id": "Author1Book3"},\n         "title": "Inferno",\n         "price": 5.99,\n         "authorid": 1\n         }\n         ]\n     },\n {\n     "hypi": {"id": "Author2"},\n     "name": "Paulo Coelho",\n     "age": 70,\n     "booklist":[\n         {\n         "hypi": {"id": "Author2Book1"},\n         "title": "Alchemist",\n         "price": 5.99,\n         "authorid": 2\n         },\n        {\n         "hypi": {"id": "Author2Book2"},\n         "title": "Warriors of light",\n         "price": 12.99,\n         "authorid": 2\n         }\n         ]\n     }\n   ]\n }\n}\n')),Object(o.b)("p",null,"Result:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n     "data": {\n     "upsert": [\n         {\n         "id": "Author1"\n         },\n         {\n         "id": "Author2"\n         }\n        ]\n    }\n}\n')),Object(o.b)("p",null,"Here author\u2019s age and price of the book are numerical fields. So, we will perform operations on these two fields. Aggregation operations can be performed with or without filters. Filters may have ",Object(o.b)("inlineCode",{parentName:"p"},"distinct"),", ",Object(o.b)("inlineCode",{parentName:"p"},"group-by")," or ",Object(o.b)("inlineCode",{parentName:"p"},"where")," clauses, etc. They are similar to SQL-type database queries."),Object(o.b)("h4",{id:"aggregate-with-no-filter"},"Aggregate with No Filter"),Object(o.b)("p",null,"The below example demonstrates aggregation without any filters. Here, we are simply aggregating values from age and price fields. The function returns the average value, the number of records(count), minimum value, maximum value, and the sum of the values from both fields."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"{\n aggregate{\n     author{\n         age{\n             avg\n             count\n             max\n             min\n             sum\n         }\n     }\n     book{\n         price{\n             avg\n             count\n             max\n             min\n             sum\n         }\n     }\n   }\n}\n\n")),Object(o.b)("p",null,"Result:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n     "aggregate": {\n         "author": {\n             "age": {\n             "avg": 63,\n             "count": 2,\n             "max": 70,\n             "min": 56,\n             "sum": 126\n         }\n     },\n         "book": {\n             "price": {\n             "avg": 9.592000000000002,\n             "count": 5,\n             "max": 12.99,\n             "min": 5.99,\n             "sum": 47.96000000000001\n             }\n         }\n      }\n   }\n}\n')),Object(o.b)("p",null,"You may not select a field or an aggregation function, if it's not needed, Hypi will perform calculations only if you select the field or specify the aggregate function. This means you get faster queries by specifying less."),Object(o.b)("h4",{id:"aggregate-distinct-rows"},"Aggregate Distinct Rows"),Object(o.b)("p",null,"You may aggregate unique rows by specifying the filter \u2018distinct\u2019 as true. Hypi considers repeated values as just one value. Hence, the count of books has gone down to 3. Only three unique prices have been selected for aggregation. (12.99,5.99,10)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"{\n aggregate{\n     book{\n         price{\n         avg(distinct: true)\n         count(distinct: true)\n         sum(distinct: true)\n         }\n     }\n }\n}\n")),Object(o.b)("p",null,"Result"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n     "aggregate": {\n         "book": {\n             "price": {\n             "avg": 9.660000000000002,\n             "count": 3,\n             "sum": 28.980000000000004\n             }\n         }\n     }\n   }\n}\n')),Object(o.b)("h3",{id:"aggregate-matching-rows"},"Aggregate Matching Rows"),Object(o.b)("p",null,"You may select matching rows ( records with the specific field value) and perform aggregation on those rows. The below example shows the aggregation of prices of books with ",Object(o.b)("inlineCode",{parentName:"p"},"authorid")," equal to \u20182\u2019.",Object(o.b)("inlineCode",{parentName:"p"},"where")," clause have been used for row selection. The result returns aggregate values of prices of books of the second author.,i.e. Paulo Coelho"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"{\n     aggregate{\n         book(where: \"authorid='2'\")\n         {\n             price{\n             avg\n             count\n             sum\n             }\n         }\n     }\n}\n")),Object(o.b)("p",null,"Result:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n     "aggregate": {\n         "book": {\n             "price": {\n                 "avg": 9.49,\n                 "count": 2,\n                 "sum": 18.98\n                 }\n             }\n         }\n     }\n}\n')),Object(o.b)("h4",{id:"aggregate-with-groupby"},"Aggregate with groupBy"),Object(o.b)("p",null,"You may make specific groups of records and perform aggregate operations on them. Use ",Object(o.b)("inlineCode",{parentName:"p"},"groupBy")," clause as a filter. The below example makes two groups by specifying ",Object(o.b)("inlineCode",{parentName:"p"},"authorid")," as groupBy field. There are two groups of books with 2 distinct authorids. So, authorid is a key with values 1 and 2."),Object(o.b)("p",null,"\u2018With\u2019 gets attached to the data type to form the aggregate query function. Use the function ",Object(o.b)("inlineCode",{parentName:"p"},"bookWith")," for using the groupby clause. (Here data type is ",Object(o.b)("inlineCode",{parentName:"p"},"book"),"). You may specify the order to sort the key values,i.e. ascending or descending. (ASC/DESC). The ",Object(o.b)("inlineCode",{parentName:"p"},"bookWith")," function returns the aggregate prices of books of two authors."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"{\n aggregate {\n     bookWith(groupBy: [{ field: authorid, order: DESC }]) {\n         price {\n             avg\n             count\n             sum\n             groupValues {\n                 key\n                 value\n             }\n         }\n      }\n   }\n}\n")),Object(o.b)("p",null,"Result:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n "aggregate": {\n "bookWith": [\n     {\n         "price": {\n             "avg": 9.49,\n             "count": 2,\n             "sum": 18.98,\n             "groupValues": [\n                 {\n                 "key": "authorid",\n                 "value": "2"\n                 }\n              ]\n           }\n     },\n     {\n     "price": {\n         "avg": 9.660000000000002,\n         "count": 3,\n         "sum": 28.980000000000004,\n         "groupValues": [\n             {\n             "key": "authorid",\n             "value": "1"\n             }\n             ]\n         }\n       }\n     ]\n    }\n  }\n}\n')),Object(o.b)("h4",{id:"aggregate-by-date"},"Aggregate by Date"),Object(o.b)("p",null,"You may group the fields based upon the ",Object(o.b)("inlineCode",{parentName:"p"},"dateTime")," field. Hypi object has the dateTime fields like ",Object(o.b)("inlineCode",{parentName:"p"},"hypi_created")," or ",Object(o.b)("inlineCode",{parentName:"p"},"hypi_updated"),". The below example has groups based upon the date of creation of objects. dateGranularity can be set to DAYS, HOURS, MINUTES, or SECONDS."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"{\n aggregate {\n     bookWith(groupBy: [{ field: hypi_created, dateGranularity: MINUTES }]\n     ) {\n         price {\n                 avg\n                 count\n                 sum\n                 groupValues {\n                     key\n                     value\n                 }\n             }\n         }\n     }\n}\n")),Object(o.b)("p",null,"Result:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n "aggregate": {\n     "bookWith": [\n         {\n             "price": {\n                 "avg": 2.99,\n                 "count": 1,\n                 "sum": 2.99,\n                 "groupValues":[\n                     {\n                     "key": "hypi_created",\n                     "value": "2021-03-15 10:52"\n                     }\n                 ]\n             }\n         },\n         {\n             "price": {\n                 "avg": 9.592000000000002,\n                 "count": 5,\n                 "sum": 47.96000000000001,\n                 "groupValues": [\n                     {\n                     "key": "hypi_created",\n                     "value": "2021-03-15 10:39"\n                     }\n                 ]\n             }\n         }\n       ]\n     }\n  }\n}\n')))}s.isMDXComponent=!0}}]);