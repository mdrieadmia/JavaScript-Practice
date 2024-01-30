const sentance = "A brown cat is eating the food on the table";
let count = 0;
for (let i = 0; i <= sentance.length; i++) {
    if(sentance[i]==="a" || sentance[i]==="A"){
        count++
    }
}
console.log(count);