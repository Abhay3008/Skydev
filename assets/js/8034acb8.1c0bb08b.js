"use strict";(self.webpackChunkskydev=self.webpackChunkskydev||[]).push([[2313],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,d=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:6},o="Binary Search",l={unversionedId:"DSA/DS Tutorial/Binary_Search",id:"DSA/DS Tutorial/Binary_Search",title:"Binary Search",description:"Introduction",source:"@site/docs/DSA/DS Tutorial/Binary_Search.md",sourceDirName:"DSA/DS Tutorial",slug:"/DSA/DS Tutorial/Binary_Search",permalink:"/Skydev/docs/DSA/DS Tutorial/Binary_Search",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Sliding Window",permalink:"/Skydev/docs/DSA/DS Tutorial/Sliding_Window"},next:{title:"Recursion",permalink:"/Skydev/docs/DSA/DS Tutorial/Recursion"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"Recursive approach",id:"recursive-approach",level:3},{value:"Resources",id:"resources",level:2},{value:"Questions",id:"questions",level:2}],m={toc:c};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-search"},"Binary Search"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"When the array is sorted (min, max) and has a definite space, we use binary search to reduce search time complexity. It has some really useful implementations, and some of the biggest companies are still asking questions about it.\nThe idea is that if the array is sorted, finding an element should not necessitate iterating over every element where the cost is O. (N). We can bypass some elements and still find the element in O(logn) time."),(0,a.kt)("h2",{id:"algorithm"},"Algorithm"),(0,a.kt)("p",null,"We start with 2 pointers by keeping a low and high -> finding the mid and then comparing that with the number we want to find. If the target number is bigger, we move right -> as we know the array is sorted. If it\u2019s smaller, we move left because it can\u2019t be on the right side, where all the numbers are bigger than the mid value.\nHere\u2019s an iterative way to write the Binary search algorithm:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int left = 0, right = A.length - 1;\n// loop till the search space is exhausted\nwhile (left <= right)\n{\n // find the mid-value in the search space and\n // compares it with the target\n int mid = (left + right) / 2;\n // overflow can happen. Use:\n // int mid = left + (right - left) / 2;\n // int mid = right - (right - left) / 2;\n // key is found\n if (x == A[mid]) {\n return mid;\n }\n // discard all elements in the right search space,\n // including the middle element\n else if (x < A[mid]) {\n right = mid - 1;\n }\n // discard all elements in the left search space,\n // including the middle element\n else {\n left = mid + 1;\n }\n}\n")),(0,a.kt)("h3",{id:"recursive-approach"},"Recursive approach"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"def binarySearch (arr, l, r, x):\n # Check base case\n if r >= l:\n mid = l + (r - l) // 2\n\n # If element is present at the middle itself\n if arr[mid] == x:\n return mid\n\n # If element is smaller than mid, then it\n # can only be present in left subarray\n elif arr[mid] > x:\n return binarySearch(arr, l, mid-1, x)\n\n # Else the element can only be present\n # in right subarray\n else:\n return binarySearch(arr, mid + 1, r, x)\n\n else:\n # Element is not present in the array\n return -1\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-5-binary-search-trees-bst-sort/"},"Lecture 5 MIT : Binary Search Trees, BST Sort | Lecture Videos")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/swlh/binary-search-cheat-sheet-for-coding-interviews-9c5425af357e"}," Binary search cheat sheet for coding interviews. | by Tuan Nhu Dinh | The Startup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/swlh/binary-search-algorithm-101-53e564659d82"}," Binary Search Algorithm 101 | by Tom Sanderson | The Startup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/6ysjqCUv3K4"}," Introduction to Binary Search (Data Structures & Algorithms #10)"))),(0,a.kt)("h2",{id:"questions"},"Questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/binary-search/"},"Leetcode - Binary Search")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/intersection-of-two-arrays/"},"Leetcode - Intersection of Two Arrays")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/first-bad-version/"},"Leetcode-First Bad Version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/arranging-coins/"},"Arranging Coins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/search-insert-position/"},"Search Insert Position")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/search-in-rotated-sorted-array/"},"Leetcode - Search in Rotated Sorted Array")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"},"Find First and Last Position of Element in Sorted Array")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"},"Leetcode - Kth Smallest Element in a BST")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/find-peak-element/"},"Find Peak Element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/split-array-largest-sum/"},"Leetcode Split Array Largest Sum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/koko-eating-bananas/"},"Koko Eating Bananas")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/"},"Leetcode - Minimum Number of Days to Make m Bouquets"))))}h.isMDXComponent=!0}}]);