//Linked List


//
// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }
//     append(data) {
//         const node = {
//             data,
//             next: null
//         }
//         if(this.tail) {
//             this.tail.next = node
//         }
//         this.tail = node
//         if(!this.head) {
//             this.head = node
//         }
//     }
//     prepend(data) {
//         const node = {
//             data,
//             next: this.head
//         }
//         this.head = node
//         if(!this.tail) this.tail = node
//     }
// }
// const list = new LinkedList()
// list.append("My")
// list.append("name")
// list.append("is")
// list.prepend("Hi")
// list



var detectCycle = function(head) {
    // Initialize pointers at head of linkedlist...
    var p1 = head, p2 = head;
    // Run a loop until p2 and p2.next is equal to null...
    while (p2 != null && p2.next != null) {
        p1 = p1.next;       // moving p1 by 1
        p2 = p2.next.next;  // moving p2 by 2
        // found the cycle...
        if (p1 == p2)  break;
    }
    // In case there is no cycle or no meeting point...
    if (p2 == null || p2.next == null) return null;
    // run loop until again head & p1 don't collab...
    while (head != p1) {
        head = head.next;   // moving head by 1...
        p1 = p1.next;   // moving p1 by 1 as well...
    }
    return head;       // Or return p1, they both will return the tail where cycle starts...
};

let www = detectCycle(3,2,0,-4)
let aaa;



