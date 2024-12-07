const arrays = [
    42,
    true,
    "hello world ! ",
    {
        name: "john",
        age: 25,
        isStudent: false,
    },
    false,
    3.14,
    "javascript is fun !",
];

// Qno 1

let stringArr = arrays.map((e) => {
    return  String(e)
});

console.log(stringArr);

// Qno 2

let numArr = arrays.filter((e) => {
    return typeof e === "number";
})

console.log(numArr);

// Qno 3

arrays.forEach((e) => {
    console.log(typeof e);
});

// Qno 4
const sum = arrays.reduce((e,i) => {
    return Number.isFinite(i) ? e + i : e;
}, 0);

console.log(sum);

// Qno 5
let findArr = arrays.find((e,i) => {
    return  typeof e === "boolean";
});
console.log(findArr);

// Qno 6
let findIndex = arrays.findIndex((e,i) => {
    return typeof e === "object";
});
console.log(findIndex);

// Qno 7
let containsNumber = arrays.some(e => typeof e === "number");

console.log(containsNumber);

// Qno 8 
let everyStr = arrays.every((e,i) => {
    return typeof e === "string";
});
console.log(everyStr);











