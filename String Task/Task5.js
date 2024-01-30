let sentance = "Bangladesh is a small country in the world";
let words = sentance.split(" ");
for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
words = words.join(" ");
console.log(words);
