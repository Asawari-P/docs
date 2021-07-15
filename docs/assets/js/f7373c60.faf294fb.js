(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(8),i=(a(0),a(191)),r={id:"react-todo-app",title:"A React ToDo App using low code API\u2019s of Hypi",sidebar_label:"ReactJS",slug:"/react-todo-app"},c={unversionedId:"react-todo-app",id:"react-todo-app",isDocsHomePage:!1,title:"A React ToDo App using low code API\u2019s of Hypi",description:"Hypi\u2019s low code APIs can be used to develop various kinds of data-driven applications.",source:"@site/content/react-todo-app.md",slug:"/react-todo-app",permalink:"/docs/react-todo-app",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/react-todo-app.md",version:"current",sidebar_label:"ReactJS",sidebar:"docs",previous:{title:"Core",permalink:"/docs/core"},next:{title:"Hypi + Angular",permalink:"/docs/hypi-angular"}},s=[{value:"API Set up",id:"api-set-up",children:[]},{value:"Create Account",id:"create-account",children:[]},{value:"Log in to Account",id:"log-in-to-account",children:[]},{value:"Add Task details",id:"add-task-details",children:[]},{value:"Retrieve the ToDo list",id:"retrieve-the-todo-list",children:[]},{value:"Edit/Delete task details",id:"editdelete-task-details",children:[]}],l={toc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hypi\u2019s low code APIs can be used to develop various kinds of data-driven applications."),Object(i.b)("p",null,"Here, let\u2019s look at ",Object(i.b)("inlineCode",{parentName:"p"},"React ToDo app")," developed using low code APIs of Hypi. The ToDo App\u2019s front end provides the below functions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#create-account"},"Create Account")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#log-in-to-account"},"Log in to Account")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#add-task-details"},"Add Tasks")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#add-task-details"},"Add task details like Person responsible to do the task, Status of the task, etc.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#retrieve-the-todo-list"},"Retrieve the todo list")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#edit/delte-task-details"},"Edit/ Delete task details"))),Object(i.b)("h3",{id:"api-set-up"},"API Set up"),Object(i.b)("p",null,"Hypi\u2019s command-line interface facilitates using Hypi APIs with the client application. Check this ",Object(i.b)("a",{parentName:"p",href:"/docs/hypi-cli-intro"},"Hypi CLI guide")," on how to synchronize Hypi APIs with the client application."),Object(i.b)("h3",{id:"create-account"},"Create Account"),Object(i.b)("p",null,"To start using ToDo App, you need to create an Account with Hypi. Provide username, password, and email id to create an account. Authentication takes place using Hypi\u2019s ",Object(i.b)("a",{parentName:"p",href:"/docs/authentication#createaccount"},"createAccount")," mutation."),Object(i.b)("h3",{id:"log-in-to-account"},"Log in to Account"),Object(i.b)("p",null,"After creating the account with Hypi, you can login to ToDo App. Login into the Hypi account using saved credentials. Hypi\u2019s ",Object(i.b)("a",{parentName:"p",href:"/docs/authentication#loginbyemail"},"loginByEmail")," function is used to login into the account and start the session."),Object(i.b)("h3",{id:"add-task-details"},"Add Task details"),Object(i.b)("p",null,"Add task details like ",Object(i.b)("inlineCode",{parentName:"p"},"task title"),", ",Object(i.b)("inlineCode",{parentName:"p"},"person"),", ",Object(i.b)("inlineCode",{parentName:"p"},"status")," and save the data on Hypi\u2019s low code backend. The details are stored in ",Object(i.b)("a",{parentName:"p",href:"/docs/gql-schema-types#type-language"},"GraphQL data type")," - ToDos."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"type  Todos {\n title: String\n person: String\n date: DateTime\n status: String\n}\n")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/create-data"},"upsert")," mutation is used to create the data."),Object(i.b)("h3",{id:"retrieve-the-todo-list"},"Retrieve the ToDo list"),Object(i.b)("p",null,"The list of ToDo tasks gets displayed on the front end. Hypi\u2019s ",Object(i.b)("a",{parentName:"p",href:"/docs/read-data#find"},"find")," function is used to retrieve the entered data from ToDos objects."),Object(i.b)("h3",{id:"editdelete-task-details"},"Edit/Delete task details"),Object(i.b)("p",null,"You may edit a task to update the status or other details. ",Object(i.b)("a",{parentName:"p",href:"/docs/create-data"},"Upsert")," mutation is used to edit the saved ToDo data."),Object(i.b)("p",null,"You may delete a task as well. The task gets deleted using the ",Object(i.b)("a",{parentName:"p",href:"/docs/delete-data#delete"},"delete")," function of Hypi."),Object(i.b)("h4",{id:"important-files"},"Important files"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Graphql/queries.js")," : Consists of graphql queries and mutation"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Views/ AddToDOForm.js, Dashboard.js, Login.js, SignUp.js")," : Consist of implementation of important functions discussed above."),Object(i.b)("p",null,"The full code of React ToDo is available on Github. The live application is embedded here. You can fork and use it as a starting point."),Object(i.b)("iframe",{src:"https://codesandbox.io/embed/hypi-lowcode-todo-app-q6mjs?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"Hypi lowcode todo app",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/hypi-universe/example-apps/tree/main/reactjs/todo/v1"},"https://github.com/hypi-universe/example-apps/tree/main/reactjs/todo/v1")))}p.isMDXComponent=!0},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,m=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return a?o.a.createElement(m,c(c({ref:t},l),{},{components:a})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);