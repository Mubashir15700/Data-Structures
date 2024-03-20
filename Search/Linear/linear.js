function linear(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
        return -1;
    }
};

console.log(linear([5, 6, 3, 2], 5));
