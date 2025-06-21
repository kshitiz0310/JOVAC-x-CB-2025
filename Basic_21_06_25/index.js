// Reduce
//const arr = [5, 1, 2, 7, 4];

//let ans = 0;

//for (let i = 0; i < arr.length; i++) {
//    ans += arr[i];
//}
//console.log(ans);

function sumOfArr(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfArr(arr));