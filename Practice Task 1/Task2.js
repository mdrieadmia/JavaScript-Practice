function countRepeatedNumber (numbers, findNumber){
    founded = 0;
    for(let num of numbers){
        if(num === findNumber){
            founded++;
        }
    }
    return founded;
}
const numbers = [5,6,11,12,98, 5]
const result = countRepeatedNumber(numbers, 25);
console.log("Founded : ", result);