function admissionProcess(greet, fees){
    console.log(greet + this.name + fees);

}
const student = {name: "Final Boss"};
const student2 = {name: "Manuj Sexysena"};

//admissionProcess("Hello Boss","1 Aand");

admissionProcess.call(student, "Hello Boss", " 1 Aand");
admissionProcess.call(student2, "Hello Manuj", " 2 Aand");