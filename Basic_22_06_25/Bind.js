//// Bind.js
//// returns a new function and with a  ound this value
//// it does not envoke function immidiatly.
//// vo wale likhte hi ho jate the
//// somehow similar to call

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
