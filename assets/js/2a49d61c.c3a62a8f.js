"use strict";(self.webpackChunkskydev=self.webpackChunkskydev||[]).push([[5302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:12},i="Graphs",l={unversionedId:"DSA/DS Tutorial/Graphs",id:"DSA/DS Tutorial/Graphs",title:"Graphs",description:"Introduction",source:"@site/docs/DSA/DS Tutorial/Graphs.md",sourceDirName:"DSA/DS Tutorial",slug:"/DSA/DS Tutorial/Graphs",permalink:"/Skydev/docs/DSA/DS Tutorial/Graphs",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Trees",permalink:"/Skydev/docs/DSA/DS Tutorial/Trees"},next:{title:"Topological sorting",permalink:"/Skydev/docs/DSA/DS Tutorial/Topological_Sorting"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Resources",id:"resources",level:2},{value:"Questions",id:"questions",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graphs"},"Graphs"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"A lot of graph problems are covered by DFS, BFS, topo sort in general -> but we\u2019re going to do a general overview of everything related to graphs. There are other algorithms like Djikstra\u2019s, MST, and others - which are covered in the greedy algorithms section.\nA lot of graph problems are synced with other types = dynamic programming, trees, DFS, BFS, topo sort, and much more. You can think of those topics sort of coming under the umbrella of graph theory sometimes."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8"}," A Gentle Introduction To Graph Theory | by Vaidehi Joshi | basecs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mikyla-c-zhang.medium.com/advanced-graph-algorithms-dijkstras-and-prim-s-aad8eef84b23"},"- Advanced Graph Algorithms: Dijkstra's and Prim's | by Mikyla Zhang | Medium")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/10-graph-algorithms-visually-explained-e57faa1336f3"}," 10 Graph Algorithms Visually Explained | by Vijini Mallawaarachchi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/eQA-m22wjTQ?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P"},"Intro: Graph Theory Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/video-lectures/lecture-6-graph-theory-and-coloring/"},"Intro: Lecture 6: Graph Theory and Coloring | Video Lectures | Mathematics for Computer Science | Electrical Engineering and Computer Science"))),(0,o.kt)("h2",{id:"questions"},"Questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/employee-importance/"},"Employee Importance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/redundant-connection/"},"Redundant Connection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/surrounded-regions/"},"130 Surrounded Regions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/accounts-merge/"},"Accounts Merge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/clone-graph/"},"Leetcode-Clone Graph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/word-search/"},"Word Search")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/network-delay-time/"},"Network Delay Time")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/is-graph-bipartite/"},"Is Graph Bipartite?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/find-eventual-safe-states/"},"Find Eventual Safe States")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/keys-and-rooms/"},"Keys and Rooms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/cheapest-flights-within-k-stops/"},"Cheapest Flights Within K Stops")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/number-of-operations-to-make-network-connected/"},"Number of Operations to Make Network Connected"))),(0,o.kt)("p",null,"Here are some famous topics and algorithms under graph theory, which are exciting to know about but aren\u2019t necessarily used directly in coding interviews:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prim\u2019s algorithm"),(0,o.kt)("li",{parentName:"ul"},"Kosaraju\u2019s algorithm"),(0,o.kt)("li",{parentName:"ul"},"Bellman ford"),(0,o.kt)("li",{parentName:"ul"},"Floyd Warshall")))}m.isMDXComponent=!0}}]);