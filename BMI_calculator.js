var weight = 62;
var height = 1.67;
var bmi = weight / height**2;
console.log(bmi.toFixed(2));
if(bmi<18.5){
    console.log("You'r Underweight");
}
else if(bmi >= 18.5 && bmi <=24.9){
    console.log("You'r Normal");
}
else if(bmi >=25 && bmi <= 29.9){
    console.log("You'r Overweight");
}
else{
    console.log("You'r Obese");
}

