// KilometerToMeter

function KilometerToMeter(n) {
    var meter = n * 1000;
    return meter;
}
var result = KilometerToMeter(5);
console.log(result);


//budgetCalculator

function budgetCalculator(num1) {
    var clockPrice = num1 * 50;
    return clockPrice;
}
var clockTotalPrice = budgetCalculator(2);

function budgetCalculator2(num2) {
    var phonePrice = num2 * 100;
    return phonePrice;
}
var phoneTotalPrice = budgetCalculator2(2);

function budgetCalculator3(num3) {
    var laptopPrice = num3 * 500;
    return laptopPrice;
}
var laptopTotalPrice = budgetCalculator3(2);

var totalBudget = clockTotalPrice + phoneTotalPrice + laptopTotalPrice;
console.log(totalBudget);

//budgetCalculator second way
/** 
function budgetCalculator(clock, phone, laptop) {
    var totalSum = clock * 50 + phone * 100 + laptop * 500;
    return totalSum;
}
var result = budgetCalculator(5, 5, 6);
console.log(result);
*/

//hotalCost 

function hotalCost(day) {
    var cost = 0;
    if (day <= 10) {
        totalcost = day * 100;
    } else if (day <= 20) {
        var firstCost = 10 * 100;
        var emptyCost = day - 10;
        var secondCost = emptyCost * 80;
        totalcost = firstCost + secondCost;
    } else {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var emptyCost = day - 20;
        var thirdCost = emptyCost * 50;
        totalcost = firstCost + secondCost + thirdCost;
    }
    return totalcost;
}
var result = hotalCost(30);
console.log(result);

// magaFriend

function megaFriend(listOfFriends = ["Karim", " Shishir", " Asad", " Mohsin", "Fahmidul Islam"]) {

    var mega = listOfFriends[0];
    for (i = 0; i < listOfFriends.length; i++) {
         if (listOfFriends[i].length > mega.length) {
            mega = listOfFriends[i];
        }
    }
    return mega;
}
 var result = megaFriend(listOfFriends = ["Mobin", "Mobarok Hossain", " Mobarok Hossain Mobin"]);
 console.log(result);





