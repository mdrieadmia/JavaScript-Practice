const price = [350, 220, 180, 30, 126, 233, 568]
const filterdPrice = [];
for(let i of price){
    if(i > 200){
        let discount = i * (10 / 100);
        filterdPrice.push(i-discount);
    }
    else{
        filterdPrice.push(i)
    }
}
console.log(filterdPrice);