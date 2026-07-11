
const transactions = [
    { id: 1, buyer: 'Ayu', category: 'Buku', amount: 85000 },
    { id: 2, buyer: 'Budi', category: 'Elektronik', amount: 450000 },
    { id: 3, buyer: 'Ayu', category: 'Buku', amount: 60000 },
    { id: 4, buyer: 'Citra', category: 'Elektronik', amount: 320000 },
    { id: 5, buyer: 'Dani', category: 'Buku', amount: 75000 },
    { id: 6, buyer: 'Budi', category: 'Fashion', amount: 130000 },
];

function totalRevenue(transactions){
    return transactions.reduce((a,b) => a + b.amount,0); // should return number
}

function revenueByCategory(transactions){
    const grouppedObjectByRevenue = []; // should return    
    for(const item of transactions){
        const findIndexByName = grouppedObjectByRevenue.findIndex((detail) => detail.category === item.category);
        if(findIndexByName > -1) {
            grouppedObjectByRevenue[findIndexByName].amount += item.amount;
        } else {
            grouppedObjectByRevenue.push({
                 category: item.category,
                 amount: item.amount
            });
        }
    }

    return grouppedObjectByRevenue;
}

function repeatBuyers(transactions){
    const repeatBuyer = [];
    const mapDuplicateBuyer = transactions.map((item) => {
         const findExistingIndex = repeatBuyer.findIndex((detail) => item.buyer.toLowerCase() === detail.buyer.toLowerCase());
         if(findExistingIndex > -1){
            repeatBuyer[findExistingIndex].count += 1;
        } else {
             repeatBuyer.push({ buyer: item.buyer, count:0  });
         }
    });

    return repeatBuyer;
}

function topCategory(transactions){
   /** sum duplicate category first first */
   const values = revenueByCategory(transactions);
   return values.sort((a,b) => b.amount - a.amount);
}

console.log(totalRevenue(transactions));
console.log(revenueByCategory(transactions));
console.log(repeatBuyers(transactions));
console.log(topCategory(transactions));

module.exports = { topCategory,repeatBuyers, totalRevenue,revenueByCategory}