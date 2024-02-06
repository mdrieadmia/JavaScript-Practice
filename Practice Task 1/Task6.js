function countFibonacci(number){
    let fibo = 0;
    for(let i = 1; i <= number; i++){
        fibo = fibo , (fibo + i);
    }
    return fibo;
}
const result = countFibonacci(5);
console.log(result);