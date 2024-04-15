class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    recursiveReverse(currentNode = this.head) {
        // Base case: if the current node is null or the next node is null (end of list),
        // return the current node which becomes the new head of the reversed list
        if (currentNode === null || currentNode.next === null) {
            this.head = currentNode; // Update the head to the last node (new first node) of the reversed list
            return currentNode;
        }

        // Recursively reverse the sublist starting from the next node
        let reversedTail = this.recursiveReverse(currentNode.next);

        // Reverse the pointers: make the next node point to the current node
        reversedTail.next = currentNode;
        // Set the current node's next pointer to null to make it the new tail
        currentNode.next = null;

        // Return the current node (which becomes the previous node in the reversed list)
        return currentNode;
    }

    mergeTwoLists(l1, l2) {
        let dummy = new Node(-1);
        let curr = dummy;

        while (l1 !== null && l2 !== null) {
            if (l1.value <= l2.value) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        if (l1 !== null) {
            curr.next = l1;
        }

        if (l2 !== null) {
            curr.next = l2;
        }

        while (curr.next !== null) {
            curr = curr.next;
        }

        return { head: dummy.next, tail: curr };
    };

    print() {
        let res = [];
        let curr = this.head
        while (curr) {
            res.push(curr.value);
            curr = curr.next;
        }
        return res;
    }
}

const list1 = new LinkedList();
list1.insert(1);
list1.insert(3);
list1.insert(5);
list1.insert(7);

console.log("Original list1: ", list1.print());
// list1.reverse();
list1.recursiveReverse();
console.log("Reversed list1: ", list1.print());

const list2 = new LinkedList();
list2.insert(2);
list2.insert(3);
list2.insert(4);
list2.insert(6);
list2.insert(8);

// Call mergeTwoLists function on list1 instance
console.log("New head and tail: ", list1.mergeTwoLists(list1.head, list2.head));
console.log("Merged list:", list1.print());
