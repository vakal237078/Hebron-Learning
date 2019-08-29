function reverseNumber(num) {
    num = num + "";
    return parseFloat(num.split("").reverse().join("")) * Math.sign(num);
}

console.log(reverseNumber(21345));
