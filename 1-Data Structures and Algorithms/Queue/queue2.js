// Implementation #2: Object ব্যবহার করে (Optimized)
class OptimizedQueue {
    constructor() {
      this.items = {};
      this.frontIndex = 0;
      this.backIndex = 0;
    }
  
    enqueue(element) {
      this.items[this.backIndex] = element;
      this.backIndex++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      const item = this.items[this.frontIndex];
      delete this.items[this.frontIndex];
      this.frontIndex++;
      return item;
    }
  
    front() {
      return this.items[this.frontIndex];
    }
  
    isEmpty() {
      return this.backIndex - this.frontIndex === 0;
    }
  
    size() {
      return this.backIndex - this.frontIndex;
    }
  
    print() {
      let result = [];
      for (let i = this.frontIndex; i < this.backIndex; i++) {
        result.push(this.items[i]);
      }
      console.log(result.join(" <- "));
    }
  }