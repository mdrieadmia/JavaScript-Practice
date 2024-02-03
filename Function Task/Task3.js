function make_avg(numbers){
    sumOfNumber = 0;
    for(num of numbers){
        sumOfNumber = sumOfNumber + num;
    }
    return sumOfNumber / numbers.length;
}
const result = make_avg([10,20,30]);
console.log("Average is : ", result);