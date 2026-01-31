/* ৫. Basic Operations (Step by Step)


🔹 Operation 1: শেষে Node যোগ করা (Append) */

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // শেষে নতুন node add করা
  append(data) {
    const newNode = new Node(data);

    // যদি list খালি থাকে
    if (this.head === null) {
      this.head = newNode;
    } else {
      // শেষ node খুঁজে বের করা
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      // শেষ node এর next এ নতুন node যোগ করা
      current.next = newNode;
    }
    this.size++;
  }

  // List print করা
  print() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " → ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

// ব্যবহার করা:
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 → 20 → 30 → null
