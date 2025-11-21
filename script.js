class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._count = 0;
    this.head = null;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this._count++;
  }
  pop() {
    if(!this.head) return null
    if(!this.head.next){
        this.head = null
        this._count --
        return
    }
    let current;
    current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    this._count--;
  }
  size() {
    return this._count;
  }
  head() {
    return this.head;
  }
  prepend(element) {
    const node = new Node(element);

    node.next = this.head;
    this.head = node;
    this._count++;
  }
  tail() {
    if (!this.head) return null;
    let current;
    current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    if (index >= this._count || index < 0) return null;
    let current;
    current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  contains(value) {
    let current;
    current = this.head;
    for (let i = 0; i < this._count; i++) {
      if (current.element === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  find(value) {
    let current;
    current = this.head;
    for (let i = 0; i < this._count; i++) {
      if (current.element === value) {
        return i;
      }
      current = current.next;
    }
    return null;
  }
  toString() {
    if(this._count === 0){
        return null
    }
    let result = "";
    let current;
    current = this.head;

    for (let i = 0; i < this._count; i++) {
      result += `${current.element} -> `;
      current = current.next;
    }
    result += null;
    return result;
  }

  //going for the extra credits 

  insertAt(value,index){
    if(index === 0){
        return this.prepend(value)
    }
    if(index > this._count){
        return null
    }

    const node = new Node(value)
    let prev
    prev = this.head
    for(let i = 0; i < ( index - 1 ); i++){
        prev = prev.next
    }
    node.next = prev.next
    prev.next = node // im a coding GOD!
    this._count ++
  }
  removeAt(index){
    if(index === 0){
        this.head = this.head.next
        this._count --
        return
    }
    if(index >= this._count){
        return null
    }

     let prev
    prev = this.head
    for(let i = 0; i < ( index - 1 ); i++){
        prev = prev.next
    }
    prev.next = prev.next.next // im a coding GOD(2)
    this._count --
  }
}

const list = new LinkedList();
list.push(10);
console.log(list.head.element); // Should be 10
list.push(15);
list.push("shajid");
console.log(list.head.next.element);
list.prepend(20);
console.log("head node:", list.head.element);
console.log("tail element:", list.tail().element);
console.log("element at 2nd index:", list.at(2).element);
console.log(list.contains(15));
console.log(list.find(20));
list.pop();
console.log(list.tail().element);
console.log(list.toString());
console.log(list);
list.insertAt("shajid",3)
console.log(list.toString());
list.removeAt(3)
console.log(list.toString());


//TOP test 

// example uses class syntax - adjust as necessary
// const list = new LinkedList();

// list.push("dog");
// list.push("cat");
// list.push("parrot");
// list.push("hamster");
// list.push("snake");
// list.push("turtle");

// console.log(list.toString())