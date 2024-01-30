// Subtask - 1
let sumOfOdd = 0;
for(let i = 91; i <= 129; i+=2){
    sumOfOdd = sumOfOdd + i;
}
console.log(sumOfOdd);

// Subtask - 2
let sumOfEven = 0;
for(let i = 51; i <= 85; i++){
    if(i % 2 === 0){
        sumOfEven = sumOfEven + i;
    }
}
console.log(sumOfEven);