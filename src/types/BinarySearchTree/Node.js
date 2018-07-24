export default class Node{
  constructor(value = null){
    this.left=null;
    this.right=null;
    this.parent=null;
    this.value=value;
  }


  get leftHeight(){
    if(!this.left){
      return 0;
    }

    return this.left.height+1;
  }

  get rightHeight(){
    if(!this.right){
      return 0;
    }

    return this.right.height +1;
  }


  get height(){
    return Math.max(this.left.height, this.right.height)
  }


  get balanceFactor(){
    return this.leftHeight - this.rightHeight;
  }

  get uncle(){
    if(!this.parent){
      return undefined;
    }


    if(!this.parent.parent){
      return undefined;
    }


  }
}