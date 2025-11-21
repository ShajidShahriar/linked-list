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

//uncomment to test (test created by gemini 3.0)

// const testList = new LinkedList();

// console.log("--- LEVEL 1: CREATION & BASIC POPULATION ---");
// console.log("1. List starts empty?", testList.toString() === null); // Should be true (or empty string depending on your implementation)
// testList.push("Dog");
// testList.push("Cat");
// testList.prepend("Parrot");
// console.log("2. Sequence correct (Parrot -> Dog -> Cat)?");
// console.log(testList.toString()); 
// console.log("3. Size is 3?", testList.size() === 3);


// console.log("\n--- LEVEL 2: INSPECTION GADGET ---");
// console.log("4. Head is Parrot?", testList.head.element === "Parrot");
// console.log("5. Tail is Cat?", testList.tail().element === "Cat");
// console.log("6. Index 1 is Dog?", testList.at(1).element === "Dog");
// console.log("7. Index 50 returns null?", testList.at(50) === null); // Edge case check


// console.log("\n--- LEVEL 3: SEARCH & RESCUE ---");
// console.log("8. Contains 'Cat'?", testList.contains("Cat") === true);
// console.log("9. Contains 'Dinosaur'?", testList.contains("Dinosaur") === false); // Negative check
// console.log("10. Find 'Dog' index?", testList.find("Dog") === 1);
// console.log("11. Find 'Ghost' index?", testList.find("Ghost") === null);


// console.log("\n--- LEVEL 4: SURGERY (The Hard Stuff) ---");
// // Current: Parrot -> Dog -> Cat
// testList.insertAt("Snake", 1); 
// // Expected: Parrot -> Snake -> Dog -> Cat
// console.log("12. Inserted Snake at 1?");
// console.log(testList.toString());

// testList.removeAt(2); 
// // Removed Dog. Expected: Parrot -> Snake -> Cat
// console.log("13. Removed Dog at index 2?");
// console.log(testList.toString());


// console.log("\n--- LEVEL 5: EDGE CASE CHAOS ---");
// testList.removeAt(0); 
// // Removing Head (Parrot). Expected: Snake -> Cat
// console.log("14. Removed Head (Parrot)?"); 
// console.log(testList.toString());
// console.log("   New Head is Snake?", testList.head.element === "Snake");

// testList.insertAt("Hamster", 50); 
// console.log("15. Insert at 50 returned null?", testList.size() === 2); // Size should not change


// console.log("\n--- LEVEL 6: THE APOCALYPSE (Pop until death) ---");
// // Current: Snake -> Cat
// testList.pop();
// console.log("16. Popped Cat. Left:", testList.toString()); // Should be Snake -> null

// testList.pop();
// console.log("17. Popped Snake (Last Item). Left:", testList.toString()); // Should be null/empty

// // THE CRASH TEST
// try {
//     testList.pop();
//     console.log("18. Popped empty list (Did it survive?) YES.");
// } catch (e) {
//     console.log("18. Popped empty list? CRASHED 💥", e);
// }





