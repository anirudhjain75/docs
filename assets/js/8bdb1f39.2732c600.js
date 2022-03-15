"use strict";(self.webpackChunkkeploy_docs=self.webpackChunkkeploy_docs||[]).push([[646],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),y=o,k=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},9877:function(e,t,n){n(7294),n(2389),n(3725)},6496:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=(n(8215),n(9877),["components"]),i={id:"how-keploy-works",title:"How Keploy Works?",sidebar_label:"How Keploy Works?",tags:["explanation"]},s=void 0,p={unversionedId:"keploy-explained/how-keploy-works",id:"keploy-explained/how-keploy-works",title:"How Keploy Works?",description:"Keploy is added as a middleware to your application that captures and replays all network interaction served to application from any source.",source:"@site/docs/keploy-explained/how-keploy-works.md",sourceDirName:"keploy-explained",slug:"/keploy-explained/how-keploy-works",permalink:"/docs/keploy-explained/how-keploy-works",editUrl:"https://github.com/keploy/docs/blob/master/docs/keploy-explained/how-keploy-works.md",tags:[{label:"explanation",permalink:"/docs/tags/explanation"}],version:"current",frontMatter:{id:"how-keploy-works",title:"How Keploy Works?",sidebar_label:"How Keploy Works?",tags:["explanation"]},sidebar:"sidebarExplained",previous:{title:"Introduction",permalink:"/docs/keploy-explained/introduction"},next:{title:"Why Keploy?",permalink:"/docs/keploy-explained/why-keploy"}},c={},u=[{value:"Step 1 : Record Unique Network Interactions as Test Case",id:"step-1--record-unique-network-interactions-as-test-case",level:3},{value:"Step 2 :  Replay Test-Cases",id:"step-2---replay-test-cases",level:3}],d={toc:u};function y(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Keploy is added as a middleware to your application that captures and replays all network interaction served to application from any source."),(0,a.kt)("h3",{id:"step-1--record-unique-network-interactions-as-test-case"},"Step 1 : Record Unique Network Interactions as Test Case"),(0,a.kt)("p",null,"Once you start the application in record mode to capture API calls as test cases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export KEPLOY_MODE="record"\n')),(0,a.kt)("p",null,"Now, when the application serves an API, all the unique network interactions are stored within Keploy server as a test-case."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"How it works",src:n(7736).Z,width:"2174",height:"958"})),(0,a.kt)("h3",{id:"step-2---replay-test-cases"},"Step 2 :  Replay Test-Cases"),(0,a.kt)("p",null,"Let's say you developed new application version(v2). To test locally, start the application after setting Keploy SDK mode to test mode to replay all recorded API calls/test cases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export KEPLOY_MODE="test"\n')),(0,a.kt)("p",null,"Now, when the application starts: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Keploy will download all the previously recorded test-cases/API calls with a 5 sec delay(configurable application build time)."),(0,a.kt)("li",{parentName:"ul"},"When the application will try to talk to any dependencies like DBs, Routers, vendor services, Keploy will intercept and provide the previously recorded dependency response.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You didn't need to setup test-environment here. \ud83d\ude45\ud83c\udffb\u200d\u2640\ufe0f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Keploy will compare the API response to the previously captured response and a report will be generated on the Keploy console.")),(0,a.kt)("p",null,"You can test with Keploy locally or can integrate Keploy with popular testing-frameworks and existing CI pipelines. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: You can generate test cases from any environment which has all the infrastructure dependencies setup. Please consider using this to generate tests from low-traffic environments first. The deduplication feature necessary for high-traffic environments is currently experimental.")))}y.isMDXComponent=!0},7736:function(e,t,n){t.Z=n.p+"assets/images/how-it-works-ff58b6643ba03a0bbce3d7ca2c1ed8f2.png"}}]);