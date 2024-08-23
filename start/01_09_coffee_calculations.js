// Write your code here

// reduce is the same as aggregate in c# linq

function calculateBill(orders, price) {
  // on first iteration of reduce the running total is not zero, it's element 1.
  // so that's why we cant do total + (currentOrder*price), as the first time through total will not have
  // been a multiplied by price
  const totalNumber = orders.reduce(
    (runningTotal, currentOrder) => runningTotal + currentOrder
  );
  return `The total bill is ${totalNumber * price}.`;
}

const coffeePrice = 1.25;
coffeeOrders = [2, 5, 7, 1, 4];
console.log(calculateBill(coffeeOrders, coffeePrice));
