function recLinear(arr, ind, val) {
    if (arr.length < ind) {
        return -1;
    }
    if (arr[ind] === val) {
        return ind;
    }

    return recLinear(arr, ind + 1, val);
};

console.log(recLinear([5, 6, 7, 8, 9, 0], 0, 17));
