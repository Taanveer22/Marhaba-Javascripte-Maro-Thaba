const totalMoney = 500;
const everyTimeCostMoney = 75;

const totalCostTimes = parseInt(totalMoney / everyTimeCostMoney);
console.log(totalCostTimes);

const totalCostMoney = 75 * totalCostTimes;
console.log(totalCostMoney);

const remainingMoney = totalMoney - totalCostMoney;
console.log(remainingMoney);
