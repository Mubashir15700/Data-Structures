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
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        if (index === 0) {
            return;
        }

        const parentIndex = this.getPIndex(index);

        if (this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            this.heapifyUp(parentIndex);
        }
    }

    extract() {
        if (!this.heap.length) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(this.heap, this.heap.length, 0);
        return item;
    }

    heapifyDown(heap, length, index) {
        if (index >= length) {
            return;
        }

        let smallestChildIndex = index;
        const leftChildIndex = this.getLChild(index);
        const rightChildIndex = this.getRChild(index);

        if (leftChildIndex < length && heap[leftChildIndex] < heap[smallestChildIndex]) {
            smallestChildIndex = leftChildIndex
        }

        if (rightChildIndex < length && heap[rightChildIndex] < heap[leftChildIndex]) {
            smallestChildIndex = rightChildIndex;
        }

        if (index !== smallestChildIndex) {
            this.swap(index, smallestChildIndex)
            this.heapifyDown(heap, length, smallestChildIndex);
        }
    }

    heapSort(arr) {
        const length = arr.length;

        for (let i = Math.floor((length / 2) - 1); i >= 0; i--) {
            this.heapifyDown(arr, length, i);
        }

        for (let i = length - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            this.heapifyDown(arr, i, 0);
        }

        return arr;
    }
}
