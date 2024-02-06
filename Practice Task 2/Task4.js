function findAveragePhonePrice(phones){
    let sumOfPhonePrice = 0;
    for(const phone of phones){
        sumOfPhonePrice = sumOfPhonePrice + phone.price;
    }
    const averagePhonePrice = sumOfPhonePrice / phones.length;
    return averagePhonePrice.toFixed(2);
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const averagePhonePrice = findAveragePhonePrice(phones);
console.log("Average phone price is : ", averagePhonePrice);