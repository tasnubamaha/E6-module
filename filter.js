const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
console.log(tiny);


const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const{price} = product;
console.log(price);