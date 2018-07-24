import TreeNode from "./Node";
import Queue from "../Queue";

class Tree{
  constructor(data){
    const node = new TreeNode(data);
    this.root = node;
  }

  // Treveresion methods
  // Depth First
  traverseDF(callback){
    (function recurse(currentNode){
      for(var i = 0, length = currentNode.children.length; i< length; i++ ){
        recurse(currentNode.children[i])
      }

      callback(currentNode);
    })(this.root)
  }

  // Breadth First
  traverseBF(callback){
    const queue = new Queue();
    queue.enqueue(this.root);
    let currentNode = queue.dequeue();

    while(currentNode){
      for(var i = 0, length = currentNode.children.length; i<length; i++){
        queue.enqueue(currentNode.children[i]);
      }

      callback(currentNode);
      currentNode = queue.dequeue()
    }

  }

  contains(callback, traversal){
    traversal.call(this, callback);
  }

  // Inserttion and deletion
  add(data, toData, traversal){
    var child = new TreeNode(data),
      parent = null,
      callback = function(node) {
        if (node.data === toData) {
          parent = node;
        }
      };

    this.contains(callback, traversal);

    if (parent) {
      parent.children.push(child);
      child.parent = parent;
    } else {
      throw new Error('Cannot add node to a non-existent parent.');
    }
  }


  remove(data, fromData, traversal){
    let tree = this,
      parent = null,
      childToRemove = null,
      index;


    const callback = (node)=>{
      if(node.data === fromData){
        parent = node;
      }
    }

    debugger
    this.contains(callback, traversal);

    if(parent){
      index = this.findIndex(parent.children, data);

      if(index === undefined){
        throw new Error("Node to remove doesn't exist")
      }else{
        childToRemove = parent.children.splice(index, 1);
      }
    }else{
      throw new Error("Parent doesnt exist");
    }

    return childToRemove;
  }


  findIndex(arr, data) {
    var index;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].data === data) {
        index = i;
      }
    }

    return index;
  }
}


export default Tree;