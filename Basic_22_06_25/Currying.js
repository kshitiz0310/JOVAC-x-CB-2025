/////Currying Approach

function FirstNumber(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}
console.log(FirstNumber(10)(20)(30)); // Output: 60

const answer = FirstNumber(5);
const answer2 = answer(10);

console.log(answer2(30)); // Output: 45