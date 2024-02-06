function salaryCalculator(employees){
    for(let i = 0; i < employees.length; i++){
        let incrementSalary = employees[i].experience * employees[i].increment;
        let currentSalary = employees[i].starting + incrementSalary;
        let eachEmpolyeeSalary = `Name : ${employees[i].name} Current Salary : ${currentSalary}`;
        console.log(eachEmpolyeeSalary);
    }
}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
salaryCalculator(employees);
