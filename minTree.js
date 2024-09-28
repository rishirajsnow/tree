class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const minTree=(root)=>{
    if(root===null)return Infinity;
    return Math.min(minTree(root.left),minTree(root.right),root.val);
}

const a=new Node(1);
const b=new Node(2);
const c=new Node(-1);

a.left=b;
a.right=c;

console.log(minTree(a));


