class Heap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extract() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const removedValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return removedValue;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            const smallestChildIndex = rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex] ? rightChildIndex : leftChildIndex;
            if (this.heap[index] > this.heap[smallestChildIndex]) {
                this.swap(index, smallestChildIndex);
                index = smallestChildIndex;
            } else {
                break;
            }
        }
    }

    heapSort(array) {
        const heap = new Heap();

        array.forEach(element => heap.insert(element));

        const sortedArray = [];

        while (heap.peek() !== null) {
            sortedArray.push(heap.extract());
        }

        return sortedArray;
    }
}

