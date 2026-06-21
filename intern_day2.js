// <---------------- Sectiopn 1: Single Object -------------------->
console.log("Single object");
const student = {
    name: "Sujit Thokar",
    age: 22,
    semester:"7th",
    college:"Hetauda City College",
    skills:["HTML","CSS","JavaScript","React","Figma"],
};
console.log("Name:",student.name);
console.log("Age:",student.age);
console.log("Semester:",student.semester);
console.log("College:",student.college);
console.log("Skills:",student.skills);
console.log("Array with student objects:");
// <---------------- Sectiopn 2: Array of Objects -------------------->
const human = [
    {id: 1, name:"Sujit Tamang", cllege:"Hetuada City College", isIntern: true, semester:"7th"},
    {id:2, name:"Rahul Ojahiya", college:"Hetauda City College", isIntern: false, semester:"7th"},
    {id:3, name:"Prajeena Bhlon", college:"Hetuada City College", isIntern: false, semester:"8th"}

]
//<---------------- Sectiopn 3: Function -------------------->

// Function to greet the student
function greetStudent(name){
    return `Yohh what's up Doggg, ${name}! Welcome to the internship program.`;
}
console.log(greetStudent("Sujit"))

//fucntiopn to calulate result of student
function calcResult(math, scinece, english, social,science){
    const totalMarks = math + scinece + english + social + science;
    const percentage = totalMarks/500 *100;
    return {totalMarks,percentage};
}
const result = calcResult(90, 85, 95, 80, 75);
console.log("Total Marks: " + result.totalMarks + " Percentage: " + result.percentage);
//functiopm to cjecl studemt is passed or failed
function isPassed(percentage){
    if(percentage>0){
        if(percentage>=32){
            return "Passed";
        }
    }
    return "Failed";
}
console.log("Result: " + isPassed(result.percentage));