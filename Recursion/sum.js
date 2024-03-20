
function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return arr.pop() + sum(arr);
};

console.log(sum([6, 4, 7, 9, 1]));
