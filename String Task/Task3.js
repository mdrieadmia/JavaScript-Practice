let sentence = "A quick brown fox jumps over the lazy dog";
sentence = sentence.toLowerCase();
console.log(sentence);
let count = 0;
for(let i = 0; i < sentence.length; i++){
    if(sentence[i]==="a" || sentence[i]==="e" || sentence[i]==="i" || sentence[i]==="o" || sentence[i]==="u"){
        count++
    }
}
console.log("total vowel : ", count);