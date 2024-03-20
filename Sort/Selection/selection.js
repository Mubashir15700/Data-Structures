function selection(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
};

console.log(selection([5, 3, 6, 7, 3]));
