/*
   Filename: complex_program.js
   Content: A complex JavaScript program demonstrating sophisticated features and creative solutions.
*/

// Class representing a Person
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   greet() {
      console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`);
   }
}

// Create some person objects
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
const person3 = new Person("Charlie", 35);

// Custom function to calculate the average age of an array of persons
function calculateAverageAge(persons) {
   let totalAge = persons.reduce((sum, person) => sum + person.age, 0);
   return totalAge / persons.length;
}

// Create an array of persons
const persons = [person1, person2, person3];

// Calculate and display the average age
const averageAge = calculateAverageAge(persons);
console.log(`The average age is ${averageAge.toFixed(2)}.`);

// Async function to fetch data from an API
async function fetchData() {
   try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
   } catch (error) {
      console.error("Error fetching data:", error);
   }
}

// Invoke the fetchData function
fetchData();

// Complex algorithm to find the nth Fibonacci number
function fibonacci(n) {
   if (n <= 1) {
      return n;
   }
   
   let fibPrev = 0;
   let fibCurr = 1;
   
   for (let i = 2; i <= n; i++) {
      let fibNext = fibPrev + fibCurr;
      fibPrev = fibCurr;
      fibCurr = fibNext;
   }
   
   return fibCurr;
}

// Calculate and display the 10th Fibonacci number
const fibonacciNumber = fibonacci(10);
console.log(`The 10th Fibonacci number is ${fibonacciNumber}.`);

// More complex and creative code goes here...
// ...
// ...

// Exporting functions/classes for use in other modules
export { Person, calculateAverageAge };