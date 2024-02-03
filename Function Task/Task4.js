function count_zero(number){
    let count = 0;
    for(let i = 0; i < number.length; i++){
       if(parseInt(number[i]) === 0){
        count ++;
       }
    }
    return count;
}
const result = count_zero("10100010110110")
console.log(result);