// Reduce
/*const arr = [5, 1, 2, 7, 4];

let ans = 0;

for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
}
console.log(ans);*/



/*function sumOfArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5];

console.log(sumOfArr(arr)); // Output: 15
*/

// OBJECTS

/*const user = [
    {
        firstName: "Final",
        lastName: "Boss",
        age: 21
    },
    {
        firstName: "Suraj",
        lastName: "Neech",
        age: 22
    },
    {
        firstName: "Manuj",
        lastName: "Saxesena",
        age: 19,

    }
]

// lets get full name of each user

const output = user.map(user => user.firstName + " " + user.lastName);
console.log(output); // for multiple user

//console.log(output[0]); // for single user

// lets get average age of all users

const output2 = user.reduce(function(acc,curr){
    acc = acc+curr.age;
    return acc;
},0);*/

/*const outputFilter = user
    .filter(user => user.age < 20)
    .map(namee => namee.lastName);
console.log(outputFilter);
  // Output*/

/////////////////////////////////////////////////////////////////

// Promises

const cart = ["shoes", "watch", "pants", "glasses", "deodrants", "shirts"];

//callback
createOrder(cart, function (orderId) {
    proceedTopayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            upadteWallet();
        });
    });    
});


// promises
createOrder(cart)
.then(function (orderId) {
    return proceedTopayment(orderId);
})
.then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return upadteWallet(paymentInfo);
})
