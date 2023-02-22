products = [
    {id:2, name: 'laptop', price: 43000},
    {id:2, name: 'watch', price: 45000},
    {id:2, name: 'mobile', price: 73000},
    {id:2, name: 'phone', price: 33000},

];

const cheap = products.find(products => products.price < 40000);
console.log(cheap);