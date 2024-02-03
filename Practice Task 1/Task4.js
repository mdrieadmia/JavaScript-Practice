function findLongestWord(sentance){
    let santance = sentance.split(" ");
    let longestWord = " ";
    for(let word of santance){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}
const santance = findLongestWord("I am learning Programming to become a programmer");
console.log(santance);