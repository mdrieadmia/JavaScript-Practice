function odd_even(number){
    if(number % 2 === 0){
        return "Even";
    }
    else{
        return "Odd"
    }
}
const result = odd_even(12);
console.log("Number is : ", result);