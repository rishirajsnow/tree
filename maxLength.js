class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

//null node=-Infinity
const maxLength=(root)=>{
    if(root===null)return -Infinity;
    if(root.left===null && root.right===null)return root.val;
    return root.val+Math.max(maxLength(root.left),maxLength(root.right));
}

const a=new Node(1);
const b=new Node(2);
const c=new Node(3);

a.left=b;
a.right=c;


console.log(maxLength(a));

