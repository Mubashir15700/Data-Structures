function binary(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === val) {
            return mid;
        }
        if (val < mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
};

console.log(binary([6, 3, 7, 5, 2], 5));
