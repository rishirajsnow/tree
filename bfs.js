//Breadth first search

//Always try bfs for BFS.

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

const bfs=(root)=>{
    if(root===null)return [];
    let values=[];
    let queue=[root];
    while(queue.length>0){
        let current=queue.shift();
        values.push(current.val);
        if(current.left!==null)queue.push(current.left);
        if(current.right!==null)queue.push(current.right);
    }

    return values;
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

console.log(bfs(a));

