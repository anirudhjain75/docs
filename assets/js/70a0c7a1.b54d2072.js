"use strict";(self.webpackChunkkeploy_docs=self.webpackChunkkeploy_docs||[]).push([[142,4249,4026,9751],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},9877:function(e,t,n){n(7294),n(2389),n(3725)},5084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=(n(8215),n(9877),["components"]),s={id:"what-are-keploy-features",title:"Keploy Features?",sidebar_label:"Keploy",description:"Keploy platform automatically mocks application dependencies and safely replay writes. It does accurate noise detection and statistical de-duplication.",tags:["explanation"]},l=void 0,p={unversionedId:"concepts/what-are-keploy-features",id:"concepts/what-are-keploy-features",title:"Keploy Features?",description:"Keploy platform automatically mocks application dependencies and safely replay writes. It does accurate noise detection and statistical de-duplication.",source:"@site/docs/concepts/what-are-keploy-features.md",sourceDirName:"concepts",slug:"/concepts/what-are-keploy-features",permalink:"/docs/concepts/what-are-keploy-features",editUrl:"https://github.com/keploy/docs/blob/master/docs/concepts/what-are-keploy-features.md",tags:[{label:"explanation",permalink:"/docs/tags/explanation"}],version:"current",frontMatter:{id:"what-are-keploy-features",title:"Keploy Features?",sidebar_label:"Keploy",description:"Keploy platform automatically mocks application dependencies and safely replay writes. It does accurate noise detection and statistical de-duplication.",tags:["explanation"]},sidebar:"sidebarConcepts",previous:{title:"Keploy",permalink:"/docs/concepts/what-is-keploy"},next:{title:"Keploy SDK",permalink:"/docs/concepts/what-is-keploy-sdk"}},c={},d=[{value:"1. Convert API calls from anywhere to Test-Case",id:"1-convert-api-calls-from-anywhere-to-test-case",level:3},{value:"2. Automatically mock Mutations",id:"2-automatically-mock-mutations",level:3},{value:"3. Accurate Noise Detection",id:"3-accurate-noise-detection",level:3},{value:"4. Native interoperability",id:"4-native-interoperability",level:3},{value:"5. Easy Integration Framework for new Libraries",id:"5-easy-integration-framework-for-new-libraries",level:3}],u={toc:d};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-convert-api-calls-from-anywhere-to-test-case"},"1. Convert API calls from anywhere to Test-Case"),(0,r.kt)("p",null,"Keploy captures all the API calls and subsequent network traffic served by the application. You can use any existing API management tools like ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),", ",(0,r.kt)("a",{parentName:"p",href:"https://hoppscotch.io/"},"Hoppscotch"),", ",(0,r.kt)("a",{parentName:"p",href:"https://curl.se/"},"Curl")," to generate test-case.  "),(0,r.kt)("img",{src:"/img/api-tools.png?raw=true",width:"50%",alt:"API Tools"}),(0,r.kt)("h3",{id:"2-automatically-mock-mutations"},"2. Automatically mock Mutations"),(0,r.kt)("p",null,"Keploy automatically mocks network/external dependencies for ",(0,r.kt)("strong",{parentName:"p"},"all CRUD operations")," with correct responses."),(0,r.kt)("p",null,"Now you'll not require data dumps or mocks for dependencies like DBs, internal services, or third party services like twilio, shopify or stripe."),(0,r.kt)("img",{src:"/img/mock-dependencies.png?raw=true",width:"50%",alt:"Mock Application Dependencies"}),(0,r.kt)("p",null,"Please check list of currently supported dependencies in ",(0,r.kt)("a",{parentName:"p",href:"/docs/go/supported-frameworks"},"Go"),"."),(0,r.kt)("p",null,"With Keploy you can safely replay writes or mutations by capturing from local or other environments."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Idempotency")," guarantees are also ",(0,r.kt)("strong",{parentName:"p"},"not required")," in the application. Multiple Reads after write operations can be replicated automatically too."),(0,r.kt)("h3",{id:"3-accurate-noise-detection"},"3. Accurate Noise Detection"),(0,r.kt)("p",null,"Keploy identifies noisy fields in the responses accurately like (timestamps, random values) to ensure high quality tests."),(0,r.kt)("p",null,"As the application serves the API, Keploy re-run that API request with the captured dependency mocks."),(0,r.kt)("img",{src:"/img/noise-filtration.png?raw=true",alt:"Keploy noise filtration"}),(0,r.kt)("p",null,"Keploy then compares if the responses of the API requests disagree with each other.\nIf any of the fields of the API responses are different they are marked as random/non-deterministic fields."),(0,r.kt)("h3",{id:"4-native-interoperability"},"4. Native interoperability"),(0,r.kt)("p",null,"Keploy has native integrations with popular testing libraries like ",(0,r.kt)("inlineCode",{parentName:"p"},"go-test"),".\nCode coverage will be reported with existing and Keploy recorded test cases and can also be integrated in\nexisting CI pipelines easily."),(0,r.kt)("img",{src:"/img/unit-test.gif?raw=true",alt:"Keploy Integration with Testing Libraries"}),(0,r.kt)("h3",{id:"5-easy-integration-framework-for-new-libraries"},"5. Easy Integration Framework for new Libraries"),(0,r.kt)("p",null,"Keploy has Instrumentation/Integration framework to easily add the new libraries/drivers within ~100 lines of code.\nPlease check-out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/devtools/sdk-contrib-guide"},"contribution guide"),"."))}y.isMDXComponent=!0},4879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=(n(8215),n(9877),["components"]),s={id:"what-is-keploy-sdk",title:"What is Keploy SDK",sidebar_label:"Keploy SDK",description:"Keploy SDK is a language-specific library that captures and replays API calls and subsequent network interactions.",tags:["explanation","sdk"]},l=void 0,p={unversionedId:"concepts/what-is-keploy-sdk",id:"concepts/what-is-keploy-sdk",title:"What is Keploy SDK",description:"Keploy SDK is a language-specific library that captures and replays API calls and subsequent network interactions.",source:"@site/docs/concepts/what-is-a-keploy-sdk.md",sourceDirName:"concepts",slug:"/concepts/what-is-keploy-sdk",permalink:"/docs/concepts/what-is-keploy-sdk",editUrl:"https://github.com/keploy/docs/blob/master/docs/concepts/what-is-a-keploy-sdk.md",tags:[{label:"explanation",permalink:"/docs/tags/explanation"},{label:"sdk",permalink:"/docs/tags/sdk"}],version:"current",frontMatter:{id:"what-is-keploy-sdk",title:"What is Keploy SDK",sidebar_label:"Keploy SDK",description:"Keploy SDK is a language-specific library that captures and replays API calls and subsequent network interactions.",tags:["explanation","sdk"]},sidebar:"sidebarConcepts",previous:{title:"Keploy",permalink:"/docs/concepts/what-are-keploy-features"},next:{title:"Keploy SDK Modes",permalink:"/docs/concepts/what-are-keploy-sdk-modes"}},c={},d=[],u={toc:d};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Keploy SDK is a language-specific library that offers APIs to do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Capture all the network calls like "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"API Request"),(0,r.kt)("li",{parentName:"ul"},"Dependency calls"),(0,r.kt)("li",{parentName:"ul"},"API Response"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replay the API request with captured dependency mocks to identify noisy fields. Read more about how ",(0,r.kt)("a",{parentName:"p",href:"/docs/keploy-explained/introduction#3-accurate-noise-detection"},"Keploy de-noising"),"  works.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replay all the test-cases captured and mock the dependencies for the application"))),(0,r.kt)("p",null,"Comparing the expected and actual responses for an API call happens at the ",(0,r.kt)("a",{parentName:"p",href:"docs/server/introduction"},"Keploy Server"),". "),(0,r.kt)("p",null,"A Keploy SDK enables you to not call the external dependencies while testing APIs, eliminating the need to setup test-environment.\nThis allows the application to use the full power of the programming language, and isolate itself from external dependencies."))}y.isMDXComponent=!0},1321:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=(n(8215),n(9877),["components"]),s={id:"what-is-keploy",title:"What is Keploy?",sidebar_label:"Keploy",description:"Keploy is a no-code testing platform that generates tests from API calls.",tags:["explanation"]},l=void 0,p={unversionedId:"concepts/what-is-keploy",id:"concepts/what-is-keploy",title:"What is Keploy?",description:"Keploy is a no-code testing platform that generates tests from API calls.",source:"@site/docs/concepts/what-is-keploy.md",sourceDirName:"concepts",slug:"/concepts/what-is-keploy",permalink:"/docs/concepts/what-is-keploy",editUrl:"https://github.com/keploy/docs/blob/master/docs/concepts/what-is-keploy.md",tags:[{label:"explanation",permalink:"/docs/tags/explanation"}],version:"current",frontMatter:{id:"what-is-keploy",title:"What is Keploy?",sidebar_label:"Keploy",description:"Keploy is a no-code testing platform that generates tests from API calls.",tags:["explanation"]},sidebar:"sidebarConcepts",previous:{title:"Concepts",permalink:"/docs/concepts/"},next:{title:"Keploy",permalink:"/docs/concepts/what-are-keploy-features"}},c={},d=[],u={toc:d};function y(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Keploy is a no-code testing platform that generates tests from API calls."),(0,r.kt)("p",null,"It converts API calls into testcases. Mocks are automatically generated with the actual request/responses."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Test Case Generation",src:n(2789).Z,width:"1920",height:"1080"})))}y.isMDXComponent=!0},8996:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=(n(8215),n(9877),n(1321)),s=n(5084),l=n(4879),p=["components"],c={id:"introduction",title:"Introduction to Keploy",sidebar_label:"Introduction"},d=void 0,u={unversionedId:"keploy-explained/introduction",id:"keploy-explained/introduction",title:"Introduction to Keploy",description:"Keploy Features",source:"@site/docs/keploy-explained/introduction.md",sourceDirName:"keploy-explained",slug:"/keploy-explained/introduction",permalink:"/docs/keploy-explained/introduction",editUrl:"https://github.com/keploy/docs/blob/master/docs/keploy-explained/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction to Keploy",sidebar_label:"Introduction"},sidebar:"sidebarExplained",next:{title:"How Keploy Works?",permalink:"/docs/keploy-explained/how-keploy-works"}},y={},m=[{value:"Keploy Features",id:"keploy-features",level:2},{value:"Keploy SDK",id:"keploy-sdk",level:2},{value:"Integrate SDK",id:"integrate-sdk",level:3}],k={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"WhatIsKeploy"}),(0,r.kt)("h2",{id:"keploy-features"},"Keploy Features"),(0,r.kt)(s.default,{mdxType:"WhatAreKeployFeatures"}),(0,r.kt)("h2",{id:"keploy-sdk"},"Keploy SDK"),(0,r.kt)(l.default,{mdxType:"WhatIsAKeploySDK"}),(0,r.kt)("h3",{id:"integrate-sdk"},"Integrate SDK"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Choose programming language to integrate ",(0,r.kt)("a",{parentName:"strong",href:"/application-development"},"Keploy SDK"),".")))}f.isMDXComponent=!0},2789:function(e,t,n){t.Z=n.p+"assets/images/record-testcase-05beb0cedd19e47092f347e8352fcd14.gif"}}]);