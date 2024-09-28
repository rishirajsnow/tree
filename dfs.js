//DFS using stack

// //            a
//             /   \
//            b     c
//           / \    /\
//          d   e     f

class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const dfs=(root)=>{
    if(root===null)return [];
    const result=[];
    let stack=[root];
    while(stack.length>0){
        let current=stack.pop();
        result.push(current.val);
        if(current.right){stack.push(current.right)};
        if(current.left){stack.push(current.left)};
    }
    return result;
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


console.log(dfs(a));
//output expected:[a,b,d,e,c,f]
