/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const myMap = new Map();

  for(let i = 0 ; i < transactions.length; i++){
    if(myMap.has(transactions[i].category)){
      myMap.set(transactions[i].category, myMap.get(transactions[i].category) + transactions[i].price)
    }
    else{
      myMap.set(transactions[i].category, transactions[i].price);
    }
  }
  console.log("ouput : ", myMap)

 const result = Array.from(myMap, ([category, totalSpent]) => ({
  category, totalSpent
 }))
 
 console.log("result : ", result)

  return result;
}

module.exports = calculateTotalSpentByCategory;
