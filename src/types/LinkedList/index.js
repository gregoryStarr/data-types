import Node from './Node';
import Comparator from '../utils/Comparator';

const compare = (a, b)=>{
  if (a === b) {
    return true;
  }

  return false
}

class LinkedList{
  contructor(value, comparatorFunction = null){
    if(!value){
      throw("You must suppliy a value");
    }

    const newNode = new Node(value)

    this.head = newNode;
    this.tail = newNode;
  }

  prepend(value){
    const newNode = new Node(value, this.head);
    this.head = newNode;

    if(!this.tail){
      this.tail = newNode;
    }

    return this;
  }


  append(value){
    const newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;

  }


  delete(value){
    console.log("Deleting : "+ value)
    if(!this.head){
      return null;
    }

    let deletedNode = null;

    while(this.head.next && compare(this.head.value, value)){
      console.log("Compare found "+this.head.next.value+" equal to "+value);
      deletedNode = this.head;
      console.log("DeletedNode: this.head : "+this.head.value)
      this.head = this.head.next;
      console.log("Head head created: value: "+this.head.value)
      return deletedNode;
    }

    let currentNode = this.head;

    if(currentNode !== null){
      console.log("entering traversion process")
      while(currentNode.next){
        if(compare(currentNode.next.value,value)){
          console.log("Compare found "+this.head.next.value+" equal to "+value);
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next
          return deletedNode;
        }else{
          console.log("next node...")
          currentNode =  currentNode.next;
        }
      }
    }

    return deletedNode;
  }


  find( value = undefined) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      console.log("comparing: "+currentNode.value+" AGAINST: "+value)
      if (compare(currentNode.value, value)) {
        console.log("match found")
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }


  deleteTail(){
    if(this.head === this.tail){
      const deletedNode = this.tail;

      this.head = null;
      this.tail = null

      return deletedNode;
    }


    const deletedTail = this.tail;

    // disconnect the tail and replace it with its parent
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }


  deleteHead(){
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if(this.head.next){
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;

  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}

export default LinkedList;