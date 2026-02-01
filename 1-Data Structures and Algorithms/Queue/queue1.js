// Implementation #1: Array ব্যবহার করে (সহজ)

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Element যোগ করা (শেষে)
    enqueue(element) {
      this.items.push(element);
      console.log(`${element} যোগ হয়েছে`);
    }
  
    // Element বের করা (প্রথম থেকে)
    dequeue() {
      if (this.isEmpty()) {
        return "Queue খালি!";
      }
      return this.items.shift();
    }
  
    // প্রথম element দেখা
    front() {
      if (this.isEmpty()) {
        return "Queue খালি!";
      }
      return this.items[0];
    }
  
    // Queue খালি কিনা
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Queue এর size
    size() {
      return this.items.length;
    }
  
    // সব elements দেখা
    print() {
      console.log(this.items.toString());
    }
  
    // Queue clear করা
    clear() {
      this.items = [];
    }
  }
  
  // ব্যবহার:
  const queue = new Queue();
  queue.enqueue("রহিম");
  queue.enqueue("করিম");
  queue.enqueue("জামাল");
  queue.print(); // রহিম,করিম,জামাল
  
  console.log("প্রথম ব্যক্তি:", queue.front()); // রহিম
  console.log("বের হলো:", queue.dequeue()); // রহিম
  queue.print(); // করিম,জামাল