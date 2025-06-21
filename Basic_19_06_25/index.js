/*
const data1 = [2, 3, 4, 5];
const data2 = [2, 3, 4, 5];
const calculateDouble = function (data) {
    const output = [];
    for (let i = 0; i < data.length; i++) {
        output.push(data[i] * data[i]);
    }
    return output;
}
console.log(calculateDouble(data1));
console.log(calculateDouble(data2));

const calculateHalf = function (data) {
    const output = [];
    for (let i = 0; i < data.length; i++) {
        output.push(data[i] / 2);
    }
    return output;
}

console.log(calculateHalf(data1));
//nsole.log(calculateHalf(data2));
const doubleData = function (data){

}
const calculate = function(data, logic){
    let output = [];
    for (let i = 0; i < data.length; i++) {
        output.push(logic(data[i]));
    }
    return output;
}

console.log(calculate(data1, doubleData));

const arr = [2, 3, 4, 5];

double = [2, 4, 6, 8, 10];
triple = [3, 6, 9, 12, 15];

function double(x){
    return x * 2;
}
function triple(x){
    return x * 3;
}

const output = arr.map(double);
console.log(output);

const output2 = arr.map(triple);
console.log(output2);
*/
Array.prototype.calculate = function(logic){
    let output = [];
    for(let i = 0; i < this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}
const arr1 = [2, 3, 4, 5];
const arr2 = [1, 2, 3, 4];

const output1 = arr1.calculate(double);
console.log(output1);

const output2 = arr2.calculate(double);
console.log(output2);

