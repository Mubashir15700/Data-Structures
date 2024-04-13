function recLinear(arr, val) {
    if (!arr.length) {
        return -1;
    }

    if (val === arr[arr.length - 1]) {
        return arr.length - 1;
    }

    return recLinear(arr.slice(0, -1), val);
};

console.log(recLinear([5, 6, 7, 8, 9, 0], 0));
