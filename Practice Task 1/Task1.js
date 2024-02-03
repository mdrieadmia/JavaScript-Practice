function celsiusToFarenheit (celsius){
    const farenheit = celsius * (9 / 5) + 32;
    return farenheit;
}
const farenheit = celsiusToFarenheit(23.31).toFixed(2);
console.log('Result is : ',farenheit);