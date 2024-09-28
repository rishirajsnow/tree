//DFS using recursion

// //            a
//             /   \
// [b,d,e]    b     c  [c,f]
//           / \    /\
//          d   e     f   [f]

class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const depthFirstValues=(root)=>{
    if(root===null)return [];//Base case
    const leftVal=depthFirstValues(root.left);
    const rightVal=depthFirstValues(root.right);
    return [root.val,...leftVal,...rightVal];
}

const a=new Node('a');
const b=new Node('b');
const c=new Node('c');
const d=new Node('d');
const e=new Node('e');
const f=new Node('f');


a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;

console.log(depthFirstValues(a));