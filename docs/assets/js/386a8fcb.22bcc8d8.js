(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6014],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7927:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),l=["components"],r={id:"actions-nodejs",title:"JavaScript actions",sidebar_label:"JavaScript actions",slug:"/actions-nodejs"},s=void 0,p={unversionedId:"actions-nodejs",id:"actions-nodejs",isDocsHomePage:!1,title:"JavaScript actions",description:"The process of creating JavaScript actions is similar to that of other actions.",source:"@site/content/actions-nodejs.md",sourceDirName:".",slug:"/actions-nodejs",permalink:"/docs/actions-nodejs",editUrl:"https://github.com/hypi-universe/docs/edit/master/content/actions-nodejs.md",version:"current",frontMatter:{id:"actions-nodejs",title:"JavaScript actions",sidebar_label:"JavaScript actions",slug:"/actions-nodejs"},sidebar:"docs",previous:{title:"GitHub Package",permalink:"/docs/openwhisk-github"},next:{title:"Python actions",permalink:"/docs/actions-python"}},c=[{value:"Creating asynchronous actions",id:"creating-asynchronous-actions",children:[]},{value:"Using actions to call an external API",id:"using-actions-to-call-an-external-api",children:[]},{value:"Packaging actions as Node.js modules with NPM libraries",id:"packaging-actions-as-nodejs-modules-with-npm-libraries",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The process of creating JavaScript actions is similar to that of ",(0,o.kt)("a",{parentName:"p",href:"/docs/openwhisk-actions#the-basics"},"other actions"),"."),(0,o.kt)("p",null,"The following sections guide you through creating and invoking a single JavaScript action,\nand demonstrate how to bundle multiple JavaScript files and third party dependencies."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a JavaScript file with the following content. For this example, the file name is ",(0,o.kt)("inlineCode",{parentName:"li"},"hello.js"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function main() {\n  return { msg: 'Hello world' };\n}\n")),(0,o.kt)("p",null,"The JavaScript file might contain additional functions.\nHowever, by convention, a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," must exist to provide the entry point for the action."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create an action from the following JavaScript function. For this example, the action is called ",(0,o.kt)("inlineCode",{parentName:"li"},"hello"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action create hello hello.js\nok: created action hello\n")),(0,o.kt)("p",null,"The CLI automatically infers the type of the action by using the source file extension.\nFor ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," source files, the action runs by using a Node.js runtime. You may specify\nthe Node.js runtime to use by explicitly specifying the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--kind nodejs:14"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--kind nodejs:12"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"--kind nodejs:10"),"."),(0,o.kt)("h3",{id:"creating-asynchronous-actions"},"Creating asynchronous actions"),(0,o.kt)("p",null,"JavaScript functions that run asynchronously may need to return the activation result after the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function has returned. You can accomplish this by returning a Promise in your action."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Save the following content in a file called ",(0,o.kt)("inlineCode",{parentName:"li"},"asyncAction.js"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function main(args) {\n   return new Promise(function(resolve, reject) {\n     setTimeout(function() {\n       resolve({ done: true });\n     }, 2000);\n  })\n}\n")),(0,o.kt)("p",null,"Notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function returns a Promise, which indicates that the activation hasn't completed yet, but is expected to in the future."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout()")," JavaScript function in this case waits for two seconds before calling the callback function.  This represents the asynchronous code and goes inside the Promise's callback function."),(0,o.kt)("p",null,"The Promise's callback takes two arguments, resolve and reject, which are both functions.  The call to ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve()")," fulfills the Promise and indicates that the activation has completed normally."),(0,o.kt)("p",null,"A call to ",(0,o.kt)("inlineCode",{parentName:"p"},"reject()")," can be used to reject the Promise and signal that the activation has completed abnormally."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Run the following commands to create the action and invoke it:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action create asyncAction asyncAction.js\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action invoke --result asyncAction\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "done": true\n}\n')),(0,o.kt)("p",null,"Notice that you performed a blocking invocation of an asynchronous action."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Fetch the activation log to see how long the activation took to complete:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk activation list --limit 1 asyncAction\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Datetime            Activation ID                    Kind      Start Duration   Status  Entity\n2019-03-16 19:46:43 64581426b44e4b3d981426b44e3b3d19 nodejs:6  cold  2.033s     success guest/asyncAction:0.0.1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk activation get 64581426b44e4b3d981426b44e3b3d19\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "start": 1552762003015,\n  "end":   1552762005048,\n  ...\n}\n')),(0,o.kt)("p",null,"Comparing the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," time stamps in the activation record, you can see that this activation took slightly over two seconds to complete."),(0,o.kt)("h3",{id:"using-actions-to-call-an-external-api"},"Using actions to call an external API"),(0,o.kt)("p",null,"The examples so far have been self-contained JavaScript functions. You can also create an action that calls an external API."),(0,o.kt)("p",null,"This example invokes a Yahoo Weather service to get the current conditions at a specific location."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Save the following content in a file called ",(0,o.kt)("inlineCode",{parentName:"li"},"weather.js"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var request = require('request');\n\nfunction main(params) {\n  var location = params.location || 'Vermont';\n  var url = 'https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"' + location + '\")&format=json';\n\n  return new Promise(function(resolve, reject) {\n      request.get(url, function(error, response, body) {\n          if (error) {\n              reject(error);\n          }\n          else {\n              var condition = JSON.parse(body).query.results.channel.item.condition;\n              var text = condition.text;\n              var temperature = condition.temp;\n              var output = 'It is ' + temperature + ' degrees in ' + location + ' and ' + text;\n              resolve({msg: output});\n          }\n      });\n  });\n}\n")),(0,o.kt)("p",null,"Note that the action in the example uses the JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," library to make an HTTP request to the Yahoo Weather API, and extracts fields from the JSON result."),(0,o.kt)("p",null,"This example also shows the need for asynchronous actions. The action returns a Promise to indicate that the result of this action is not available yet when the function returns. Instead, the result is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," callback after the HTTP call completes, and is passed as an argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve()")," function."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create an action from the ",(0,o.kt)("inlineCode",{parentName:"li"},"weather.js")," file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action create weather weather.js\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Use the following command to run the action, and observe the output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'wsk action invoke --result weather --param location "Brooklyn, NY"\n')),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--result")," flag means that the value returned from the action is shown as output on the command-line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "msg": "It is 28 degrees in Brooklyn, NY and Cloudy"\n}\n')),(0,o.kt)("p",null,"This example also passed a parameter to the action by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--param")," flag and a value that can be changed each time the action is invoked. Find out more about parameters in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/openwhisk-parameters"},"Working with parameters")," section."),(0,o.kt)("h3",{id:"packaging-actions-as-nodejs-modules-with-npm-libraries"},"Packaging actions as Node.js modules with NPM libraries"),(0,o.kt)("p",null,"Instead of writing all your action code in a single JavaScript source file, actions can be deployed from a zip file containing a ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/docs/latest-v10.x/api/modules.html#modules_modules"},"Node.js module"),"."),(0,o.kt)("p",null,"Archive zip files are extracted into the runtime environment and dynamically imported using ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," during initialisation. ",(0,o.kt)("strong",{parentName:"p"},"Actions packaged as a zip file MUST contain a valid ",(0,o.kt)("inlineCode",{parentName:"strong"},"package.json")," with a ",(0,o.kt)("inlineCode",{parentName:"strong"},"main")," field used to denote the ",(0,o.kt)("a",{parentName:"strong",href:"https://nodejs.org/docs/latest-v10.x/api/modules.html#modules_folders_as_modules"},"module index file")," to return.")),(0,o.kt)("p",null,"Including a ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," folder in the zip file means external NPM libraries can be used on the platform."),(0,o.kt)("h4",{id:"simple-example"},"Simple Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create the following ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"name": "my-action",\n"main": "index.js",\n"dependencies" : {\n"left-pad" : "1.1.3"\n}\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create the following ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function myAction(args) {\nconst leftPad = require("left-pad")\nconst lines = args.lines || [];\nreturn { padded: lines.map(l => leftPad(l, 30, ".")) }\n}\n\nexports.main = myAction;\n')),(0,o.kt)("p",null,"Functions are exported from a module by setting properties on the ",(0,o.kt)("inlineCode",{parentName:"p"},"exports")," object. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--main")," property on the action can be used to configure the module function invoked by the platform (this defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install module dependencies using NPM.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},".zip")," archive containing all files (including all dependencies).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zip -r action.zip *\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note: Using the Windows Explorer action for creating the zip file will result in an incorrect structure. OpenWhisk zip actions must have ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," at the root of the zip, while Windows Explorer will put it inside a nested folder. The safest option is to use the command line ",(0,o.kt)("inlineCode",{parentName:"p"},"zip")," command as shown above.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create the action from the zip file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action create packageAction --kind nodejs:10 action.zip\n")),(0,o.kt)("p",null,"When creating an action from a ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," archive with the CLI tool, you must explicitly provide a value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"--kind")," flag by using ",(0,o.kt)("inlineCode",{parentName:"p"},"nodejs:12"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"nodejs:10"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Invoke the action as normal.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'wsk action invoke --result packageAction --param lines "[\\"and now\\", \\"for something completely\\", \\"different\\" ]"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"padded": [\n    ".......................and now",\n    "......for something completely",\n    ".....................different"\n]\n}\n')),(0,o.kt)("h4",{id:"handling-npm-libraries-with-native-dependencies"},"Handling NPM Libraries with Native Dependencies"),(0,o.kt)("p",null,"Node.js libraries can import native dependencies needed by the modules. These native dependencies are compiled upon installation to ensure they work in the local runtime. Native dependencies for NPM libraries must be compiled for the correct platform architecture to work in Apache OpenWhisk."),(0,o.kt)("p",null,"There are two approaches to using libraries with native dependencies..."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," inside a Docker container from the platform images."),(0,o.kt)("li",{parentName:"ol"},"Building custom runtime image with libraries pre-installed.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The first approach is easiest but can only be used when a zip file containing all source files and libraries is less than the action size limit (48MB).")),(0,o.kt)("h4",{id:"running-npm-install-inside-runtime-container"},"Running ",(0,o.kt)("inlineCode",{parentName:"h4"},"npm install")," inside runtime container"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the following command to bind the local directory into the runtime container and run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -it -v $PWD:/nodejsAction openwhisk/action-nodejs-v10 "npm install"\n')),(0,o.kt)("p",null,"This will leave a ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," folder with native dependencies compiled for correct runtime."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Zip up the action source files including ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zip -r action.zip *\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create new action with action archive.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action create my-action --kind nodejs:10 action.zip\n")),(0,o.kt)("h4",{id:"building-custom-runtime-image"},"Building custom runtime image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile")," with the ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," command run during build.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FROM openwhisk/action-nodejs-v10\n\nRUN npm install <LIB_WITH_NATIVE_DEPS>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build and push the image to Docker Hub.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker build -t <USERNAME>/custom-runtime .\n$ docker push <USERNAME>/custom-runtime\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create new action using custom runtime image.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action create my-action --docker <USERNAME>/custom-runtime action.zip\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make sure the ",(0,o.kt)("inlineCode",{parentName:"strong"},"node_modules")," included in the ",(0,o.kt)("inlineCode",{parentName:"strong"},"action.zip")," does not include the same libraries folders.")),(0,o.kt)("h4",{id:"using-javascript-bundlers-to-package-action-source-files"},"Using JavaScript Bundlers to package action source files"),(0,o.kt)("p",null,"Using a JavaScript module bundler can transform application source files (with external dependencies) into a single compressed JavaScript file. This can lead to faster deployments, lower cold-starts and allow you to deploy large applications where individual sources files in a zip archive are larger than the action size limit."),(0,o.kt)("p",null,'Here are the instructions for how to use three popular module bundlers with the Node.js runtime. The "left pad" action example will be used as the source file for bundling along with the external library.'),(0,o.kt)("h4",{id:"using-rollupjs-httpsrollupjsorg"},"Using rollup.js (",(0,o.kt)("a",{parentName:"h4",href:"https://rollupjs.org"},"https://rollupjs.org"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Re-write the ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," to use ES6 Modules, rather than CommonJS module format.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import leftPad from 'left-pad';\n\nfunction myAction(args) {\nconst lines = args.lines || [];\nreturn { padded: lines.map(l => leftPad(l, 30, \".\")) }\n}\n\nexport const main = myAction\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Make sure you export the function using the ",(0,o.kt)("inlineCode",{parentName:"em"},"const main = ...")," pattern. Using ",(0,o.kt)("inlineCode",{parentName:"em"},"export {myAction as main}")," does not work due to tree-shaking. See this ",(0,o.kt)("a",{parentName:"em",href:"https://boneskull.com/rollup-for-javascript-actions-on-openwhisk/"},"blog post")," for full details on why this is necessary.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create the Rollup.js configuration file in ",(0,o.kt)("inlineCode",{parentName:"li"},"rollup.config.js")," with the following contents.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import commonjs from 'rollup-plugin-commonjs';\nimport resolve from 'rollup-plugin-node-resolve';\n\nexport default {\ninput: 'index.js',\noutput: {\nfile: 'bundle.js',\nformat: 'cjs'\n},\nplugins: [\nresolve(),\ncommonjs()\n]\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Rollup.js library and plugins using NPM.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install rollup rollup-plugin-commonjs rollup-plugin-node-resolve --save-dev\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the Rollup.js tool using the configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx rollup --config\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an action using the bundle source file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action create my-action bundle.js --kind nodejs:10\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Invoke the action as normal. Results should be the same as the example above.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'wsk action invoke my-action --result --param lines "[\\"and now\\", \\"for something completely\\", \\"different\\" ]"\n')),(0,o.kt)("h4",{id:"using-webpack-httpswebpackjsorg"},"Using webpack (",(0,o.kt)("a",{parentName:"h4",href:"https://webpack.js.org/"},"https://webpack.js.org/"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," to export the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," function using as a global reference.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const leftPad = require('left-pad');\n\nfunction myAction(args) {\nconst lines = args.lines || [];\nreturn { padded: lines.map(l => leftPad(l, 30, \".\")) }\n}\n\nglobal.main = myAction\n")),(0,o.kt)("p",null,'This allows the bundle source to "break out" of the closures Webpack uses when defining the modules.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create the Webpack configuration file in ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack.config.js")," with the following contents.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\nentry: './index.js',\ntarget: 'node',\noutput: {\nfilename: 'bundle.js'\n}\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Webpack library and CLI using NPM.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install webpack-cli --save-dev\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the Webpack tool using the configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx webpack --config webpack.config.js\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an action using the bundle source file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action create my-action dist/bundle.js --kind nodejs:10\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Invoke the action as normal. Results should be the same as the example above.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'wsk action invoke my-action --result --param lines "[\\"and now\\", \\"for something completely\\", \\"different\\" ]"\n')),(0,o.kt)("h4",{id:"using-parcel-httpsparceljsorg"},"Using parcel (",(0,o.kt)("a",{parentName:"h4",href:"https://parceljs.org/"},"https://parceljs.org/"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," to export the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," function using as a global reference.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const leftPad = require('left-pad');\n\nfunction myAction(args) {\nconst lines = args.lines || [];\nreturn { padded: lines.map(l => leftPad(l, 30, \".\")) }\n}\n\nglobal.main = myAction\n")),(0,o.kt)("p",null,'This allows the bundle source to "break out" of the closures Parcel uses when defining the modules.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Parcel library using NPM.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install parcel-bundler --save-dev\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the Parcel tool using the configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx parcel index.js\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an action using the bundle source file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsk action create my-action dist/index.js --kind nodejs:10\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Invoke the action as normal. Results should be the same as the example above.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'wsk action invoke my-action --result --param lines "[\\"and now\\", \\"for something completely\\", \\"different\\" ]"\n')),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("p",null,"JavaScript actions can be executed in Node.js version 8, 10, 12 or 14.\nCurrently actions are executed by default in a Node.js version 10 environment."),(0,o.kt)("h4",{id:"nodejs-version-10-environment"},"Node.js version 10 environment"),(0,o.kt)("p",null,"The Node.js version 10 environment is used if the ",(0,o.kt)("inlineCode",{parentName:"p"},"--kind")," flag is explicitly specified with a value of 'nodejs:10' when creating or updating an Action."),(0,o.kt)("p",null,"The following packages are pre-installed in the Node.js version 10 environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/openwhisk"},"openwhisk")," - JavaScript client library for the OpenWhisk platform. Provides a wrapper around the OpenWhisk APIs.")),(0,o.kt)("h4",{id:"nodejs-version-12-environment"},"Node.js version 12 environment"),(0,o.kt)("p",null,"The Node.js version 12 environment is used if the ",(0,o.kt)("inlineCode",{parentName:"p"},"--kind")," flag is explicitly specified with a value of 'nodejs:12' when creating or updating an Action."),(0,o.kt)("p",null,"The following packages are pre-installed in the Node.js version 12 environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/openwhisk"},"openwhisk")," - JavaScript client library for the OpenWhisk platform. Provides a wrapper around the OpenWhisk APIs.")),(0,o.kt)("h4",{id:"nodejs-version-14-environment"},"Node.js version 14 environment"),(0,o.kt)("p",null,"The Node.js version 14 environment is used if the ",(0,o.kt)("inlineCode",{parentName:"p"},"--kind")," flag is explicitly specified with a value of 'nodejs:14' when creating or updating an Action."),(0,o.kt)("p",null,"The following packages are pre-installed in the Node.js version 12 environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/openwhisk"},"openwhisk")," - JavaScript client library for the OpenWhisk platform. Provides a wrapper around the OpenWhisk APIs.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Large portions of this page is copied from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/tree/master/docs"},"Apache OpenWhisk documentation")," on April 23rd 2021 - where there have been customisations to match Hypi's deployment this has been noted. Apache OpenWhisk and the Apache name are the property of the Apache Foundation and licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/blob/master/LICENSE.txt"},"Apache V2 license")," ."))))}d.isMDXComponent=!0}}]);