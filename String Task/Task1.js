const sentance = "Bangladesh is a small country in the world";
let count = 0;
for (let i = 0; i <= sentance.length; i++) {
    if(sentance[i]==="a"){
        count++
    }
}
console.log(count);