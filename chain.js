const user = {
    id: 3445,
    name: 'thomas',
    address: {
        street: {
            first: '65no road lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address?.street?.second;
console.log(userFloor);