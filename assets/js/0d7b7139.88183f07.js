"use strict";(self.webpackChunkskydev=self.webpackChunkskydev||[]).push([[4551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:11},o="Trees",i={unversionedId:"DSA/DS Tutorial/Trees",id:"DSA/DS Tutorial/Trees",title:"Trees",description:"Introduction",source:"@site/docs/DSA/DS Tutorial/Trees.md",sourceDirName:"DSA/DS Tutorial",slug:"/DSA/DS Tutorial/Trees",permalink:"/Skydev/docs/DSA/DS Tutorial/Trees",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Dynamic Programming",permalink:"/Skydev/docs/DSA/DS Tutorial/Dynamic_Programming"},next:{title:"Graphs",permalink:"/Skydev/docs/DSA/DS Tutorial/Graphs"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pattern: Traversals",id:"pattern-traversals",level:2},{value:"Inorder traversal",id:"inorder-traversal",level:3},{value:"Pre order traversal",id:"pre-order-traversal",level:3},{value:"Post order traversal",id:"post-order-traversal",level:3},{value:"Additional questions",id:"additional-questions",level:3},{value:"Resources",id:"resources",level:2},{value:"Questions",id:"questions",level:2}],c={toc:u};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"trees"},"Trees"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"I love trees, but actual ones - not these. Just kidding, I love all data structures. Let\u2019s discuss trees.\nThey\u2019re tree-like structures (wow) where we can store different things, for different reasons, and then use them to our advantage. Here\u2019s a nice depiction of how the actually look:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Trees",src:r(5187).Z,width:"645",height:"369"})),(0,n.kt)("p",null,"Recursion is a great way to solve a lot of tree problems, but the iterative ones actually bring out the beauty of them. Making a stack and queue, adding and popping things from that, exploring children, and repeating this would definitely make sure you understand it completely. You should be seeing this visually in your head, when you do it iteratively."),(0,n.kt)("h2",{id:"pattern-traversals"},"Pattern: Traversals"),(0,n.kt)("p",null,"There are 3 major ways to traverse a tree and some other weird ones: let\u2019s discuss them all. The most famous ones are pre, in, and post - order traversals. Remember, in traversals -> it\u2019s not the left or\nright node (but the subtree as a whole)."),(0,n.kt)("h3",{id:"inorder-traversal"},"Inorder traversal"),(0,n.kt)("p",null,"Let\u2019s start with inorder traversal: We define a stack and will traverse the tree iteratively. Recursive solutions to these 3 basic ones are pretty straightforward, so we\u2019ll try to understand them a little more\nwith iterative ones.\nWe start with the root, move until it\u2019s null or the stack is empty. We move to the left if we can, if not -> we pop, add the popped value and then move right."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"List<Integer> res = new ArrayList<>();\nif(root==null) return res;\nStack<TreeNode> stack = new Stack<>();\nTreeNode curr = root;\nwhile(curr!=null || !stack.isEmpty()){\n if(curr!=null){\n stack.push(curr);\n curr = curr.left;\n }else{\n curr = stack.pop();\n res.add(curr.val);\n curr = curr.right;\n }\n}\nreturn res;\n")),(0,n.kt)("h3",{id:"pre-order-traversal"},"Pre order traversal"),(0,n.kt)("p",null,"We add the root, then the left subtree, and then the right subtree. It\u2019s a stack so things work in the opposite direction -> first in last out, so make sure to check that carefully."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Stack<Node> stack = new Stack();\nstack.push(root);\nresult = [];\nwhile (!stack.empty())\n{\n Node curr = stack.pop();\n result.push(curr.data);\n // print node\n if (curr.right != null) {\n stack.push(curr.right);\n }\n if (curr.left != null) {\n stack.push(curr.left);\n }\n}\n")),(0,n.kt)("h3",{id:"post-order-traversal"},"Post order traversal"),(0,n.kt)("p",null,"We visit the left subtree, then the right subtree, and then the root. So we simply add the left item first, then the right item, and the root. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Stack<Node> stack = new Stack();\nstack.push(root);\nresult = []\nwhile (!stack.empty())\n{\n Node curr = stack.pop();\n result.push(curr.data);\n if (curr.left != null) {\n stack.push(curr.left);\n }\n if (curr.right != null) {\n stack.push(curr.right);\n }\n}\n// Print the REVERSE of the result.\n// Or store it in a stack\n")),(0,n.kt)("h3",{id:"additional-questions"},"Additional questions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/binary-tree-level-order-traversal/"}," LeetCode 102 - Binary Tree Level Order Traversal [medium]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/"}," Kth Smallest Element in a BST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/validate-binary-search-tree/"},"- Leetcode #98 Validate Binary Search Tree")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},"- Binary Tree Zigzag Level Order Traversal"))),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/leetcode-patterns/leetcode-pattern-0-iterative-traversals-on-trees-d373568eb0ec"}," Leetcode Pattern 0 | Iterative traversals on Trees | by csgator | Leetcode Patterns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/"},"- Inorder Tree Traversal \u2013 Iterative and Recursive \u2013 Techie Delight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/qH6yxkw0u78"},"- Data structures: Introduction to Trees"))),(0,n.kt)("h2",{id:"questions"},"Questions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-preorder-traversal/"},"- Leetcode - Binary Tree Preorder Traversal"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-inorder-traversal/"},"- Leetcode #94 Binary Tree Inorder Traversal"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-postorder-traversal/"},"- Leetcode #98 Validate Binary Search Tree"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-distance-between-bst-nodes/"},"- 783. Minimum Distance Between BST Nodes"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/symmetric-tree/"}," Symmetric Tree"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-search-tree-iterator/"},"- Binary Search Tree Iterator"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/unique-binary-search-trees/"},"- 96. Unique Binary Search Trees"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/serialize-and-deserialize-bst/"},"- Serialize and Deserialize BST"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-search-tree-iterator/"},"- Binary Search Tree Iterator")))))}p.isMDXComponent=!0},5187:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Trees-47e212eedc9fcb9d728ad8425784c323.png"}}]);