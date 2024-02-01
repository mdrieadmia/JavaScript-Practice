const statement = 'I am a hard working person';
const statementArr = statement.split(" ");
const newStatementArr = [];
for(let i of statementArr){
    newStatementArr.unshift(i);
}
console.log(newStatementArr.join(" "));