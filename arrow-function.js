const add = (first, second) => first + second;
const result = add(20, 30);
 console.log(result);

//  arrow function 
const doubleIt = x => x * 2;
const calculateSalary = (salary, tax, bonus) => salary - salary * tax + bonus;


// spread
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 24, 23];

// destructuring 
const {x, y, z, ...c} = {x: 45, y: 12, z: 33, name: 'sakib', salary: 45000}
const [a, b, ...r] = [12, 45, 21, 65, 98];