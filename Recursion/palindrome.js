function palindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    return str[0] === str[str.length - 1] && palindrome(str.slice(1, -1));
};

console.log(palindrome("malayalam"));
