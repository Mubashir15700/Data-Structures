function recBinary(arr, val) {
    const sorted = arr.sort((a, b) => a - b);
    return binarySearch(sorted, 0, arr.length - 1, val)
};

function binarySearch(arr, left, right, val) {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (val === arr[mid]) {
        return mid;
    }
    if (val < arr[mid]) {
        return binarySearch(arr, left, mid - 1, val);
    }
    return binarySearch(arr, mid + 1, right, val);
}

console.log(recBinary([5, 8, 3, 5, 9], 9));
