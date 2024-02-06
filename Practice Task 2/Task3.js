function totalBudget(laptop, tablet, mobile) {
  const perLaptopPrice = 35000;
  const perTabletPrice = 15000;
  const perMobilePrice = 20000;
  const totalLaptopPrice = perLaptopPrice * laptop;
  const totalTabletPrice = perTabletPrice * tablet;
  const totalMobilePrice = perMobilePrice * mobile;
  const totalBudget = totalLaptopPrice + totalMobilePrice + totalTabletPrice;
  return totalBudget;
}
const budget = totalBudget(3, 2, 5);
console.log("Total budget is : ", budget);
