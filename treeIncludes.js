//Finding value in binary tree.
// //            a
//             /   \
//            b     c
//           / \    /\
//          d   e     f
//Command to run code :   Node file_name.js
class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const treeIncludes=(root,target)=>{
    if (root===null)return false;// Null node =false
    if(root.val===target)return true;
    return treeIncludes(root.left,target)||treeIncludes(root.right,target);
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

console.log(treeIncludes(a,'e'));
