(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7091],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,m=e.groupId,c=e.className,h=o(),f=h.tabGroupChoices,k=h.setTabGroupChoices,y=(0,a.useState)(r),g=y[0],b=y[1],N=a.Children.toArray(e.children),w=[];if(null!=m){var v=f[m];null!=v&&v!==g&&d.some((function(e){return e.value===v}))&&b(v)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;b(a),null!=m&&(k(m,a),setTimeout((function(){var e,n,a,r,o,s,i,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,s=window,i=s.innerHeight,p=s.innerWidth,n>=0&&o<=p&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case p:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},c)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},2917:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),s=n(5064),i=n(8215),l=["components"],p={id:"workflow",title:"Workflow",sidebar_label:"Workflow",slug:"/workflow"},u=void 0,d={unversionedId:"workflow",id:"workflow",isDocsHomePage:!1,title:"Workflow",description:"Workflow is deprecated and will be removed. Use serverless sequences or conductors instead.",source:"@site/content/workflow.md",sourceDirName:".",slug:"/workflow",permalink:"/docs/workflow",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/workflow.md",version:"current",frontMatter:{id:"workflow",title:"Workflow",sidebar_label:"Workflow",slug:"/workflow"},sidebar:"docs",previous:{title:"User Defined Functions",permalink:"/docs/user-defined-function"},next:{title:"Triggers",permalink:"/docs/triggers"}},m=[{value:"Example",id:"example",children:[]}],c={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Workflow is deprecated and will be removed. Use serverless ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hypi.app/docs/openwhisk-sequences/"},"sequences")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hypi.app/docs/openwhisk-conductors/"},"conductors")," instead."))),(0,o.kt)("p",null,"Workflows are useful to handle sequential events. Let\u2019s say you want to execute one function after the other and you need results of the first function to execute the second function. The ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow")," will handle these kinds of events for you."),(0,o.kt)("p",null,"Design the steps of the workflow and create an order of events. Execute the functions (work) inside the steps. Get the result after sequential processing of steps or functions. You may check the results of individual steps as well."),(0,o.kt)("p",null,"Hypi provides below given ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," data type for the implementation of the sequence of steps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"type Workflow {\n    name:\xa0String!\n    cronSchedule:\xa0String\n    execAs:\xa0String\n    async:\xa0Boolean\n    parallel:\xa0Boolean\n    maxExecutionTime:\xa0String\n    steps(...):\xa0[WorkflowStep!]\n}\n")),(0,o.kt)("p",null,"The parameters are as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the workflow")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"cronSchedule")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"If present, this is a ","`","cron","`"," schedule to automatically execute this Workflow The syntax as defined at ",(0,o.kt)("a",{parentName:"td",href:"https://www.manpagez.com/man/5/crontab/"},"https://www.manpagez.com/man/5/crontab/")," NOTE: The special strings @hourly, @daily, etc are NOT supported")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"execAs")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"An ArcQL query to find the account e.g. hypi.id = 'user123' to find by id or username = 'blah' to find by username.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If present, execution of the steps in the Workflow will be done as this account. If not specified, it defaults to the account making the request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"async")),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Set to ","`","true","`"," for asynchronous processing")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"parallel")),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"If present AND true, all steps in the workflow are executed at the same time.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"maxExecutionTime")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Specifies the max time an async task should be allowed to execute. When this time has elapsed the task will be killed.",(0,o.kt)("br",null),(0,o.kt)("br",null),"The format is ISO8601 durations ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/ISO_8601"},"https://en.wikipedia.org/wiki/ISO_8601"),(0,o.kt)("br",null),(0,o.kt)("br",null),"#Durations e.g. P1M is 1 month and PT1M is 1 minute")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"steps")),(0,o.kt)("td",{parentName:"tr",align:null},"WorkflowStep"),(0,o.kt)("td",{parentName:"tr",align:null},"Holds details of each workflow step")))),(0,o.kt)("p",null,"Let\u2019s look into WorkflowStep as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"type WorkflowStep {\n    name:\xa0String\n    fn:\xa0GraphQLRef!\n    order:\xa0Int!\n}\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the step")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"fn")),(0,o.kt)("td",{parentName:"tr",align:null},"GraphQLRef"),(0,o.kt)("td",{parentName:"tr",align:null},"The function to execute for this step. The data returned by the step can subsequently be used in other steps. Set the type of the functions as query, mutation, or Subscription. Set the field to step name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"order")),(0,o.kt)("td",{parentName:"tr",align:null},"Int"),(0,o.kt)("td",{parentName:"tr",align:null},"Order of the step")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Let\u2019s take an example from a Library system. You go to the library to borrow a book. You get a list of authors. You choose an author and then you get a list of books by the author. You select the book from the list. The book becomes unavailable for others."),(0,o.kt)("p",null,"Below are the steps for designing the schema:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Step-a:" Welcome to library"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step-b: Query: Get Author list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step-c: Query: Get a booklist by an author of your choice")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step-d: Query: Get the ID of the selected book from the list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step-e: Mutation: Select the book with retrieved ID and update its availability "))),(0,o.kt)("p",null,"Here is the schema for this Workflow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'type LibraryWork\xa0{\n    a:\xa0String\n    previous:\xa0Json\n    session:\xa0WorkflowSession,\n    params:\xa0Json\n}\n\ntype Query\xa0{\n    stepa:\xa0String@tan(type:Groovy,\xa0inline:\xa0"return\xa0\'Welcome\xa0to\xa0Library!\'")\n    stepb:\xa0Json@tan(type:Groovy,inline:"""\n      return\xa0gql(\\"""\n        query {\n                find\xa0(\n                type:\xa0Author,\xa0\n                arcql:\xa0"*")\n                {\n                    edges\xa0{\n                    cursor\n                    node\xa0{\n                        ...\xa0onAuthor\xa0{\n                        hypi\xa0{\n                           id\n                        }\n                        name\n                        }\n                     }\n                  }\n               }\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n           }\xa0\xa0\n    \\"""\n        )\n    """)\xa0\xa0\n    stepc(a:String):\xa0Json@tan(type:Groovy,\xa0inline:\xa0"""\n      return\xa0\xa0gql(\\"""\n        query\xa0{\n            get(type:\xa0Author,\xa0id:\xa0"$a"){\n                ...\xa0onAuthor\xa0{\n                    hypi {\n                        id\n                    }\n                    name\n                booklist{\n                    title\n                    price\n                    authorid\n                }\n            }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0}\\"""\n\xa0\xa0\xa0\xa0)\n    """)\n    stepd(b:\xa0String):\xa0[String!]\xa0@tan(type:Groovy,\xa0inline:\xa0"""\n    def\xa0results\xa0=\xa0\xa0gql(\\"""\n    query\xa0{\n        find\xa0(\n            type:\xa0Book,\xa0\n            arcql:\xa0"title\xa0=\xa0\'$b\'"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\xa0{\n                edges\xa0{\n                    cursor\n                    node\xa0{\n                    ...\xa0onBook\xa0{\n                        hypi\xa0{\n                        id\n                        }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n   \\"""\n\xa0\xa0\xa0)\xa0\n\xa0\xa0\xa0return\xa0results.data.find.edges.stream()\n\xa0\xa0 .map({o\xa0->\xa0o.node.hypi.id})\n\xa0\xa0\xa0.collect(java.util.stream.Collectors.toList())\xa0\xa0\n""")\xa0\xa0\n   stepf(a:\xa0String,\xa0previous:\xa0String,\xa0session:\xa0WorkflowSessionInput,\xa0\n   params:\xa0Json):\xa0\n   LibraryWork@tan(type:Groovy,\xa0inline:\xa0"""\n\xa0\xa0 return\xa0[\n\xa0\xa0\xa0\xa0"a":\xa0a,\n\xa0\xa0\xa0\xa0"previous":\xa0previous,\n\xa0\xa0\xa0\xa0"session":\xa0session,\n\xa0\xa0\xa0\xa0"params":\xa0params\n\xa0\xa0]\n""")\n   BorrowBook(a:\xa0String,b:\xa0String):\xa0LibraryWork@workflow(name:\xa0"BorrowBook")\n}\n\ntype Mutation\xa0{\n  # It is entirely\xa0up\xa0to\xa0the\xa0author\xa0to\xa0decide\xa0if\xa0their\xa0custom\xa0function\xa0\n  is\xa0mutation\xa0or\xa0not\n  stepe(previous:[String!]):\xa0Json@tan(type:Groovy,\xa0inline:\xa0"""\n      return\xa0gql(\\"""\n        mutation\xa0{\n        upsert(\n            values:\xa0{\xa0\n                Book:\xa0[\n                {\xa0\n                    hypi:{\n                        id:"${previous[0]}"\n                    }\n                    available:\xa0false\n                    }\n                 ]\xa0\n            })\xa0{\n                id\n            }\n        }\\"""\n    )\n""")\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Important notes to understand the schema!")),(0,o.kt)("p",null,"The first step can have any parameters you want. For the other steps, some rules are defined how the system maps parameters to the function in these steps."),(0,o.kt)("p",null,"These rules are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Any step (including the first step) can have a parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"params: Json")," i.e. name = params and type is ",(0,o.kt)("inlineCode",{parentName:"p"},"Json"),"."),(0,o.kt)("p",{parentName:"li"},"  The ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," is a map of the arguments passed to the first function in the Workflow. For example, if the function was defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"step1(a: Int, b: Json, c: MyType): T"),"."),(0,o.kt)("p",{parentName:"li"},"  In this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," (Json) object would have the fields a, b, and c set to the values the function was executed with.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Any step can have a parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"session: WorkflowSession"),". This is the current workflow session and contains the results of all steps before the current one. You can identify the results for a specific step by finding the result using the step's name in the session's data array.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Except for the first step, a parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"previous: T")," can be used. ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," is the result type of the previous step from the workflow. "),(0,o.kt)("p",{parentName:"li"},"  In this case, the platform will use the output of the previous function for this parameter. Note that if the type is not the same as the last step's output type then the workflow will fail if the field is not optional. If the field is optional then the platform will not provide it and it would therefore be null if you try to use it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Except for the first step, pass-through is possible. The parameters from the first step are passed through to other steps by name and type. Example"),(0,o.kt)("p",{parentName:"li"},"  step1(a: Int, b: String): String\nstep2(a: Int): ID"),(0,o.kt)("p",{parentName:"li"},'  In this case, the variable "a" in both step1 and step2 will have the same value that step1 was executed with. Incidentally, this is the same as getting "a" from the "params" (Json)'))),(0,o.kt)("p",null,"The last step in the schema is given for the illustration purpose only to understand the usage of various parameters."),(0,o.kt)("p",null,"To use the workflow, first create the workflow object in the system. The name of the workflow is important. Notice it is used in the function definition",(0,o.kt)("inlineCode",{parentName:"p"},'@workflow(name: "BorrowBook")'),". This is the same name used in the object created. "),(0,o.kt)(s.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'{\n "values": {\n     "Workflow": [\n         {\n         "name": "BorrowBook",\n         "steps": [\n             {\n                 "name": "stepa",\n                 "order": 0,\n                 "fn": {\n                 "type": "Query",\n                     "field": "stepa"\n                 }\n             },\n             {\n                 "name": "stepb",\n                 "order": 1,\n                 "fn": {\n                     "type": "Query",\n                     "field": "stepb"\n                 }\n             },\n             {\n                 "name": "stepc",\n                 "order": 2,\n                 "fn": {\n                     "type": "Query",\n                     "field": "stepc"\n                 }\n             },\n             {\n                 "name": "stepd",\n                 "order": 3,\n                 "fn": {\n                     "type": "Query",\n                     "field": "stepd"\n                 }\n             },\n             {\n                 "name": "stepe",\n                 "order": 4,\n                 "fn": {\n                     "type": "Mutation",\n                     "field": "stepe"\n                 }\n             },\n             {\n                 "name": "stepf",\n                 "order": 5,\n                 "fn": {\n                     "type": "Query",\n                     "field": "stepf",\n                     "selection": "a previous params session\n                     {data{stepName,stepResult}}"\n                 }\n                 }\n             ]\n             }\n         ]\n     }\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsert": [\n      {\n        "id": "01F1KYB7MG7PZEKGNQEF1D70EY"\n      }\n    ]\n  }\n}\n')))),(0,o.kt)("p",null,"To use this workflow execute it like any other function. And verify the results."),(0,o.kt)(s.Z,{defaultValue:"query",values:[{label:"GraphQL Query",value:"query"},{label:"Input Data",value:"data"},{label:"Response",value:"response"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"query",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"query Q($a: String, $b: String){BorrowBook1(a: $a, b:$b){\n a previous params\n     session{\n         data{\n             stepName\n             stepResult\n         }\n     }\n  }\n}\n"))),(0,o.kt)(i.Z,{value:"data",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n "a": "Author1",\n "b": "Inferno"\n}\n'))),(0,o.kt)(i.Z,{value:"response",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "BorrowBook1": {\n      "a": "Author1",\n      "previous": null,\n      "params": {\n        "a": "Author1",\n        "b": "Inferno"\n      },\n      "session": {\n        "data": [\n          {\n            "stepName": "stepa",\n            "stepResult": "Welcome to Library!"\n          },\n          {\n            "stepName": "stepb",\n            "stepResult": {\n              "data": {\n                "find": {\n                  "edges": [\n                    {\n                      "cursor": "Author1",\n                      "node": {\n                        "hypi": {\n                          "id": "Author1"\n                        },\n                        "name": "Dan Brown"\n                      }\n                    },\n                    {\n                      "cursor": "Author2",\n                      "node": {\n                        "hypi": {\n                          "id": "Author2"\n                        },\n                        "name": "Paulo Coelho"\n                      }\n                    },\n                    {\n                      "cursor": "Author3",\n                      "node": {\n                        "hypi": {\n                          "id": "Author3"\n                        },\n                        "name": "Sudha Murti"\n                      }\n                    }\n                  ]\n                }\n              }\n            }\n          },\n          {\n            "stepName": "stepc",\n            "stepResult": {\n              "data": {\n                "get": {\n                  "hypi": {\n                    "id": "Author1"\n                  },\n                  "name": "Dan Brown",\n                  "booklist": [\n                    {\n                      "title": "Da Vinci Code",\n                      "price": 12.99,\n                      "authorid": 1\n                    },\n                    {\n                      "title": "The Last Symbol",\n                      "price": 10,\n                      "authorid": 1\n                    },\n                    {\n                      "title": "Inferno",\n                      "price": 5.99,\n                      "authorid": 1\n                    }\n                  ]\n                }\n              }\n            }\n          },\n          {\n            "stepName": "stepd",\n            "stepResult": [\n              "Author1Book3"\n            ]\n          },\n          {\n            "stepName": "stepe",\n            "stepResult": {\n              "data": {\n                "upsert": [\n                  {\n                    "id": "Author1Book3"\n                  }\n                ]\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')))))}h.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);