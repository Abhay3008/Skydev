"use strict";(self.webpackChunkskydev=self.webpackChunkskydev||[]).push([[5341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4759:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},s="HashMap/Tables",i={unversionedId:"DSA/DS Tutorial/HashMap",id:"DSA/DS Tutorial/HashMap",title:"HashMap/Tables",description:"Introduction",source:"@site/docs/DSA/DS Tutorial/HashMap.md",sourceDirName:"DSA/DS Tutorial",slug:"/DSA/DS Tutorial/HashMap",permalink:"/Skydev/docs/DSA/DS Tutorial/HashMap",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/Skydev/docs/DSA/DS Tutorial/Arrays"},next:{title:"2 Pointers",permalink:"/Skydev/docs/DSA/DS Tutorial/Twopointers"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Operations on HashMap",id:"basic-operations-on-hashmap",level:2},{value:"Resources",id:"resources",level:2},{value:"Questions",id:"questions",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hashmaptables"},"HashMap/Tables"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"A hash table is a data structure that implements the associative array abstract data type, which can map keys to values. In other words, key value pairs can be used to store anything.",(0,n.kt)("br",{parentName:"p"}),"\n","Example: map<string, string> denotes a hashmap containing string key and value pairs.  "),(0,n.kt)("h2",{id:"basic-operations-on-hashmap"},"Basic Operations on HashMap"),(0,n.kt)("p",null,"The HashMap class provides various methods to perform different operations on hashmaps. We will look at some commonly used arraylist operations in this tutorial:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add elements."),(0,n.kt)("li",{parentName:"ul"},"Access elements."),(0,n.kt)("li",{parentName:"ul"},"Change elements."),(0,n.kt)("li",{parentName:"ul"},"Remove elements.")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/discuss/study-guide/1068545/HASH-TABLE-and-MAP-POWERFUL-GUIDE-"}," Hashmap and Map Powerful Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm"}," Data Structure and Algorithms - Hash Table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/design-hashmap/discuss/?currentPage=1&orderBy=most_votes&query="}," Leetcode discuss: Hashtable implementation"))),(0,n.kt)("h2",{id:"questions"},"Questions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/two-sum/"},"Two Sum")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/jewels-and-stones/"},"Jewels and Stones")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/"},"Leetcode : How Many Numbers Are Smaller Than the Current Number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/partition-labels/"},"Partition Labels"))))}c.isMDXComponent=!0}}]);