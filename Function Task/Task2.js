function number(num){
    if(num % 2 === 0){
        return num / 2;
    }
    else{
        return num * 2;
    }
}
const result = number(12);
console.log("Result is : ", result);