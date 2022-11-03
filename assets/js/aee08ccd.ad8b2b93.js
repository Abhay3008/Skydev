"use strict";(self.webpackChunkskydev=self.webpackChunkskydev||[]).push([[2962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,f=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:7},a="Recursion",l={unversionedId:"DSA/DS Tutorial/Recursion",id:"DSA/DS Tutorial/Recursion",title:"Recursion",description:"Introduction",source:"@site/docs/DSA/DS Tutorial/Recursion.md",sourceDirName:"DSA/DS Tutorial",slug:"/DSA/DS Tutorial/Recursion",permalink:"/Skydev/docs/DSA/DS Tutorial/Recursion",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Binary Search",permalink:"/Skydev/docs/DSA/DS Tutorial/Binary_Search"},next:{title:"Backtracking",permalink:"/Skydev/docs/DSA/DS Tutorial/Backtrack"}},s={},u=[{value:"Introduction",id:"introduction",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recursion"},"Recursion"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Consider it as solving smaller problems in order to eventually solve a larger problem. So, if you want to climb Mount Everest, you can climb the smaller parts recursively until you reach the summit.\nAnother example is that you want to eat '15 butter naan,' so eating them all at once is not possible. Instead, you would divide them into 1 at a time and enjoy it on the way."),(0,o.kt)("p",null,"Solving a lot of recursive problems will help you understand 3 core concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recursion"),(0,o.kt)("li",{parentName:"ul"},"Backtracking"),(0,o.kt)("li",{parentName:"ul"},"Dynamic programming")),(0,o.kt)("p",null,"These are some questions when we look at a recursive question/solution.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What happens when the function is called in the middle of the whole recursive function?"),(0,o.kt)("li",{parentName:"ul"},"What happens to the stuff below it?"),(0,o.kt)("li",{parentName:"ul"},"What do we think of the base case?"),(0,o.kt)("li",{parentName:"ul"},"How do we figure out when to return ?"),(0,o.kt)("li",{parentName:"ul"},"How do we save the value, specially in the true/false questions?"),(0,o.kt)("li",{parentName:"ul"},"How does backtracking come into place, wrt recursion?  ")),(0,o.kt)("p",null,"Let\u2019s try to answer these one by one. A recursive function means that we\u2019re breaking the problem down into a smaller one. So if we\u2019re saying function(x/2) -> we\u2019re basically calling the function again with the same parameters."),(0,o.kt)("p",null,"So if there\u2019s something below the recursive function -> that works with the same parameter. For\ninstance, calling function(x/2) with x=10 and then printing (x) after that would print 10 and then 5 and so on. Think of it as going back to the top of the function, but with different parameters.",(0,o.kt)("br",{parentName:"p"}),"\n","The return statements are tricky with recursive functions. You can study about those things, but practice will help you get over it. For instance, you have fibonacci, where we want to return the sum of the last 2 elements for the current element -> the code is something like fib(n) + fib(n-1) where fib() is the recursive function. So this is solving the smaller problem until when? -> Until the base case. And the base case will return 1 -> because eventually we want the fib(n) to return a number. This is a basic example, but it helps you gain some insights on the recursive part of it."))}p.isMDXComponent=!0}}]);