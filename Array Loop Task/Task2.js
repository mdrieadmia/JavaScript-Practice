const numbers = [12, 98, 5, 41, 23, 78, 46];
const newNumbers = [];
for(let i of numbers){
    if(i % 2 === 0){
        newNumbers.push(i);
    }
}
console.log(newNumbers);