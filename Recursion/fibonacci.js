function fibonacci(num) {
    if (num <= 1) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(7));
