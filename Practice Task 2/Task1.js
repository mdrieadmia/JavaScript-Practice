function lowestNumber(numbers){
    let lowestNum = numbers[0];
    for(const num of numbers){
        if(num < lowestNum){
            lowestNum = num;
        }
    }
    return lowestNum;
}
const heights2 = [167, 190, 120, 165, 137];
const lowest = lowestNumber(heights2);
console.log(lowest);