function smallestName(names){
    let smallName = names[0]
    for(const name of names){
        if(name.length < smallName.length){
            smallName = name;
        }
    }
    return smallName;
}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result = smallestName(heights2);
console.log(result);
