const closest = (...arguments) => arguments.sort((a, b) => Math.abs(0 - a) - Math.abs(0 - b))[0];

console.log(closest(-3, -2, 6, 8, -1, 1, 12));
