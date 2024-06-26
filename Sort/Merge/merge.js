function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
    let res = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }

    return [...res, ...left, ...right];
};

console.log(mergeSort([6, 7, 3, 9, 2]));
