class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}


const treeSum=(root)=>{
    if(root===null)return 0;// Null node =0
    return root.val+treeSum(root.left)+treeSum(root.right);
}

const a=new Node(1);
const b=new Node(2);
const c=new Node(3);

a.left=b;
a.right=c;


console.log(treeSum(a));