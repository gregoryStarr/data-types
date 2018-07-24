class Queue{
  constructor(){
    this.oldestIndex = 1;
    this.newestIndex = 1;
    this.storage = {};
  }

  get size(){
    return this.newestIndex - this.oldestIndex;
  }

  enqueue(data){
    this.storage[this.newestIndex] = data;
    this.newestIndex ++;
  }

  dequeue(data){
    let deletedData = null;

    if(this.oldestIndex !== this.newestIndex){
      deletedData = this.storage[this.oldestIndex];
      delete this.storage[this.oldestIndex];
      this.oldestIndex ++;
      return deletedData;
    }
  }
}

export default Queue;