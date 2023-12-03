//Q4. Generate numbers between any 2 given numbers.

// Ex
// const num1 = 10
// const num2 = 25;

// Output: 11, 12, 13, …., 25

const min_num = 10;
const max_num = 25;

const random_num = Math.floor(Math.random() * (max_num - min_num)) + min_num;
console.log(random_num);
