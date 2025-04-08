

let ages = [12, 23, 54, 63, 21, 34, 45, 79];

// Object
const student = {
    name: "Ali Joe",
    age: 22,
    courses: ["Math", "Robotics"],
    greet: function(){
        return `Hi there i'm ${this.name}`
    }
}
console.log(student.greet());

////Array operations 
// adding and removing elements
ages.push(89); // [12, 23, 54, 63, 21, 34, 45, 79, 89]\
ages.pop() // only removes the last element:: [12, 23, 54, 63, 21, 34, 45, 79]
ages.unshift(); // adds an element to the fist position 
ages.shift(); // removes the first element
ages.push(90)

// searching and checking elements
console.log(ages);
console.log()
console.log(ages.indexOf(90));
console.log(ages.lastIndexOf(50)); //-1 if not available
console.log(ages.includes(90)); // returns a boolean
console.log(ages.find(x => x > 45)); // returns only the first one
console.log(ages.findIndex(x => x > 45)); // returns only the 

// Iterating and transdorming
console.log(ages.map(x => x * 2)); // Creates a new array by modifying each element	
console.log(ages.filter(x => x > 10)); //Creates a new array with elements that match a condition	
console.log(ages.reduce((sum, x) => sum + x, 0)); // Reduces the array to a single value, here the initial value is 0, then it takes the item one by on an dsum the together.
console.log(ages.some(x => x > 15)); // Checks if at least one element matches a condition	
console.log(ages.every(x => x > 0)); // Checks if all elements match a condition

//sorting
ages.unshift(100)
console.log(ages.sort()); // wrong for numbers
console.log(ages.sort((a, b) => a - b));
console.log(ages.reverse())

// modifying and slicing
console.log(ages.join("-!-"));
console.log(ages.concat([102, 23])); // merge two arrays together

// Note Splice are linke inplace=True
console.log(ages.splice(1, 2)); // .splice(startIndex, deleteCount, item1, item2, ...);
console.log(ages.splice(1, 2, 21, 39)) // remove two elements starting from index 1 and replace them with 21 and 39
console.log(ages.splice(2, 0, 42, 44)) // insert elements at index 2 without removing anything
console.log(ages.slice(1, 4)) // extract from index 1 to 3 excluding 4
console.log(ages.slice()) // copies the whole array

