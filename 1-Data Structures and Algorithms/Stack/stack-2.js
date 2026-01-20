class Stack {
    constructor() {
      this.stack = {};
      this.count = 0;
    }
  
    push(value) {
      this.stack[this.count] = value;
      this.count++;
    }
  
    pop() {
      if (this.count === 0) return undefined;
      this.count--;
      let result = this.stack[this.count];
      delete this.stack[this.count];
      return result;
    }
  
    peek() {
      return this.stack[this.count - 1];
    }
  }
  

/* 

নিশ্চয়ই 😊
আমি তোমাকে **এই Stack কোডটা একদম সহজ ও পরিষ্কারভাবে বাংলায়** ব্যাখ্যা করছি, যেন তুমি interview + বাস্তব ব্যবহার দুইটাই বুঝতে পারো।

---

## 🔥 Stack কী?

**Stack হলো একটি ডাটা স্ট্রাকচার**, যেটা কাজ করে
👉 **LIFO (Last In, First Out)** নিয়মে

মানে:

* যেটা শেষে ঢুকবে
* সেটাই আগে বের হবে

উদাহরণ:
প্লেটের স্তূপ (plate stack)
শেষে যে প্লেট রাখো → আগে সেটাই উঠাও

---

## 📌 এখন কোডটা লাইন বাই লাইন বুঝি

```js
class Stack {
```

এখানে আমরা একটি **Stack class** বানাচ্ছি
যেটা দিয়ে আমরা stack তৈরি করবো।

---

```js
constructor() {
  this.stack = {};
  this.count = 0;
}
```

### 🔹 constructor কী করছে?

যখন নতুন Stack তৈরি হবে, তখন:

* `this.stack = {}`
  → এখানে আমরা ডাটা রাখবো (object ব্যবহার করা হয়েছে)

* `this.count = 0`
  → stack-এ কয়টা element আছে সেটা ট্র্যাক করবে

---

## 🟢 push(value) → ডাটা ঢোকানো

```js
push(value) {
  this.stack[this.count] = value;
  this.count++;
}
```

### কী হচ্ছে এখানে?

ধরো তুমি লিখলে:

```js
stack.push(10);
```

তখন:

```js
this.stack[0] = 10;
this.count = 1;
```

আবার push করলে:

```js
stack.push(20);
```

তখন:

```js
this.stack[1] = 20;
this.count = 2;
```

📦 Stack এখন:

```js
{
  0: 10,
  1: 20
}
```

👉 নতুন ডাটা সবসময় উপরে যোগ হচ্ছে

---

## 🔴 pop() → ডাটা বের করা

```js
pop() {
  if (this.count === 0) return undefined;
  this.count--;
  let result = this.stack[this.count];
  delete this.stack[this.count];
  return result;
}
```

### ধাপে ধাপে:

#### 1️⃣ যদি stack খালি হয়:

```js
if (this.count === 0) return undefined;
```

#### 2️⃣ count কমানো:

```js
this.count--;
```

#### 3️⃣ শেষ element নেওয়া:

```js
let result = this.stack[this.count];
```

#### 4️⃣ object থেকে delete করা:

```js
delete this.stack[this.count];
```

#### 5️⃣ element return করা:

```js
return result;
```

---

### উদাহরণ:

```js
stack.pop();
```

Stack আগে ছিল:

```js
{
  0: 10,
  1: 20
}
count = 2
```

pop করার পর:

```js
return 20
```

Stack এখন:

```js
{
  0: 10
}
count = 1
```

👉 শেষ ঢোকানো element আগে বের হচ্ছে (LIFO)

---

## 🔵 peek() → উপরের element দেখা (বের না করে)

```js
peek() {
  return this.stack[this.count - 1];
}
```

এটা শুধু **শেষ element দেখায়**, remove করে না

```js
stack.peek(); // 10
```

---

## 🧠 কেন object ব্যবহার করা হয়েছে, array না?

কারণ:

* Object দিয়ে index control করা সহজ
* delete করলে performance ভালো
* interview-তে বুঝানো যায় যে তুমি internal working জানো

---

## ✅ সম্পূর্ণ ব্যবহার উদাহরণ:

```js
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.pop());  // 20
console.log(stack.pop());  // 10
```

---

## 🎯 বাস্তব ব্যবহার:

Stack ব্যবহার হয়:

* Undo / Redo
* Browser history
* Function call stack
* Expression evaluation
* Backtracking algorithm

---

## 🧑‍💻 Interview লাইনে বলার মতো কথা:

> “Stack follows LIFO principle, and I implemented it using an object with a count pointer for efficient push and pop operations.”

---

যদি তুমি চাও আমি এটা দিয়ে:

* ✔️ array version
* ✔️ interview প্রশ্ন
* ✔️ visualization
* ✔️ LeetCode practice
* ✔️ real project example

সব বানিয়ে দিতে পারি 👍
বললেই হবে!


*/