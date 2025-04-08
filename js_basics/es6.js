
const student = {
    name: "Alice",
    age: 22,
    courses: ["Math", "Physics"],
    greet: function() {
      return `Hi, I'm ${this.name}`;
    }
  };
  
  const numbers = [1, 2, 3];
  
  const message = `Hello, ${student.name}`
  const { name, courses, course} = student;
  console.log(course); //undefined
  console.log(courses)
  
  const [first, third] = numbers;
  console.log(third); //2
  
  const newNumbers = [...numbers, 5, 6]; //...sprad operator, to copy arrays or object
  console.log(newNumbers);
  
  function sum(...nums) {
      return nums.reduce((a, b) => a + b, 0);
  }
  
  const greet = (name = "Guest") => `Hello, ${name}!`;
  console.log(greet()); // Hello, Guest!
  
  const square = num => num * num; // arrow function
  console.log(square(5))
  
  const fname = "Scott";
  const lname = "Garmy";
  const lage = 23;
  
  const person = {fname, lname, lage};
  console.log(person) //{ fname: 'Scott', lname: 'Garmy', lage: 23 }
  
  // Optional Chaining
  const usr = {profile: {name: "John"}};
  console.log(usr.profile?.name); // John
  console.log(usr.proile?.city); //undefined rahter than throwing an error
  
  //Nullish Coalescing
  console.log(usr.profile.city ?? "Lagos" ); // Lagos as the default if it's not available
  