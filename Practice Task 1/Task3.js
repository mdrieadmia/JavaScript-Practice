function countVowel(sentance){
    sentance = sentance.toLowerCase();
    let count = 0;
    for(let i = 0; i < sentance.length; i++){
        let letter = sentance[i];
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
            count++
        }
    }
    return count;
}
const sentance = countVowel("Bangladesh is our motherland. Bangladesh is a small country in the world.");
console.log(sentance);