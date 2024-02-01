const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const newColors = [];
for(let i of colors){
    newColors.unshift(i);
}
console.log(newColors);