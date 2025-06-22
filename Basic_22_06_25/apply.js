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