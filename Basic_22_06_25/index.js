/*nst finalbossAssignment = new Promise(funaction(resolve, reject){
    setTimeout(()=>{
        console.log(`Final boss assignment completed`);
       },5000);
});*/

/*

console.log("class started");


const projectsubmittedbyfinalboss = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log(`Final boss assignment completed`);
        resolve("Work done by Final boss");

    }, 5000);
});

async function projectEvaluation(){
    const fileofFinalBoss = await projectsubmittedbyfinalboss;
    console.log("file receved and checked", fileofFinalBoss);
    console.log("class completed");
}

projectEvaluation();
console.log("class ended");

*/
/*
const data = fetch('https://dummyjson.com/products/')
.then(response => response.json())
.then(data=>console.log(data));
*/

/*

console.log("Start");
async function getproducts(){
    try{
    const res = await fetch('https://dummyjson.com/products/');
    const resData = await res.json();
    console.log(resData);
    }catch(error){
        console.log(error);
    }
}
console.log("End");
getproducts();

*/

//////////////////////////////// Call.js

/*

function admissionProcess(greet, fees){
    console.log(greet + this.name + fees);

}
const student = {name: "Final Boss"};
const student2 = {name: "Manuj Sexysena"};

//admissionProcess("Hello Boss","1 Aand");

admissionProcess.call(student, "Hello Boss", " 1 Aand");
admissionProcess.call(student2, "Hello Manuj", " 2 Aand");


*/


/////////////// Bind.js

/*

function admissionProcess(greet, fees){
    console.log(greet + this.name + fees);

}
const student = {name: "Final Boss"};
const student2 = {name: "Manuj Sexysena"};

//admissionProcess("Hello Boss","1 Aand");

const studentData = admissionProcess.bind(student, ["Hello Boss", " 1 Aand"]);
const studentData2= admissionProcess.bind(student2, ["Hello Manuj", " 2 Aand"]);

studentData();
studentData2();

*/

/////////////////apply.js

/*

function admissionProcess(greet, fees){
    console.log(greet + this.name + fees);

}
const student = {name: "Final Boss"};
const student2 = {name: "Manuj Sexysena"};

//admissionProcess("Hello Boss","1 Aand");

admissionProcess.apply(student, ["Hello Boss", " 1 Aand"]);
admissionProcess.apply(student2, ["Hello Manuj", " 2 Aand"]);


//////apply aur call me itna hi farak hai ki
//apply me arguments array ke form me pass karte hai

*/

/////Currying Approach

/*

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

*/

/////////////////////
//EVENT CAPTURE AND BUBBLING
/////////////////////


