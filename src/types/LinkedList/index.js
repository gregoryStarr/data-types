import Node from './Node';
import Comparator from '../utils/Comparator';

class LinkedList{
  contructor(comparatorFunction){
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction)
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
    if(!this.head){
      return null;
    }

    let deletedNode = null;

    while(this.head.next && this.compare.equal(this.head.value, value)){
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if(currentNode != null){
      while(currentNode.next){
        if(this.compare.equal(currentNode.next.value,value)){
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next
        }else{
          currentNode =  currentNode.next;
        }
      }
    }

    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }


  find( value = undefined) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
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


    let currentNode = this.head;

    while(currentNode.next){
      if(!currentNode.next.next){
        currentNode.next = null;
      }else{
        currentNode = currentNode.next;
      }
    }

  }


  deleteHead(){
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if(this.head.next){
      this.head = this.head.next;
    }else{
      this.head = null;
      this.tail = null;
    }

    return deletedHead;

  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}

export default LinkedList;