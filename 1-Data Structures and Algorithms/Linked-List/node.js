class Node {
  constructor(data) {
    ((this.data = data), // Data store করে
      (this.next = null)); // পরের node এর reference
  }
}
