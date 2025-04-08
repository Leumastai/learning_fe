
function print(values) {
    return console.log(values)
}

let names = ["Alice", "Joy", "Farhter", "Rice"]
for (let name of names) {
    console.log(name);
}
console.log(age)

let result = (number % 2 === 0) ? "Even" : "Odd"; //ternary operator
let ages = [12, 23, 54, 63, 21, 34, 45, 79];

// best when you need access to the index
for (let i=0; i < ages.length; i++) {
    console.log(ages[i])
}
console.log();

// best for simple operation on each element
ages.forEach(age => console.log(age));
console.log()
// When writing multiple lines of statement in an arrow function, use a curly braces
ages.forEach(age => {
    if (age % 2 === 0) {
        console.log(age);
    }
});
console.log();

//more readable and consice
for (let age of ages) {
    console.log(age)
};
console.log();

//best when you want to return a new array rahter than modifying the original one
ages.map(age => console.log(age))

//infinte loop
for (;;) {
    print("Love")
}