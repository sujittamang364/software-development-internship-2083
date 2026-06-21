// <------------------------- Student Management System ------------------------->
let students = [];

// <------------------------- Add Student ------------------------->
function addStudent(id, name, subjects, semester, college, skills, isEnterEligible) {
    const student = {
        id: id,
        name: name,
        subjects:subjects,
        semester: semester,
        college: college,
        skills: skills,
        isEnterEligible: isEnterEligible
    };

    students.push(student);
    console.log(`Student ${student.name} added successfully!`);
}

// <------------------------- Remove Student ------------------------->
function removeStudent(id) {
    let index = -1;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Student with ID ${id} removed successfully!`);
    } else {
        console.log(`Student with ID ${id} not found!`);
    }
}

// <------------------------- Search Student ------------------------->
function searchStudent(id) {
    for (let student of students) {
        if (student.id === id) {
            console.log(`Student found: ${student.name}`);
            return student;
        }
    }

    console.log(`Student with ID ${id} not found!`);
    return null;
}

// <------------------------- Display All Students ------------------------->
function displayStudents() {
    if (students.length === 0) {
        console.log("No students found!");
        return;
    }

    console.log("\nAll Students");

    for (let student of students) {
        console.log(
            `ID: ${student.id}, Name: ${student.name}, Marks: ${student.marks}, College: ${student.college}, Semester: ${student.semester}`
        );
    }
}
// <------------------------- Calculate Statistics ------------------------->
function calculateStatistics() {
    if (students.length === 0) {
        console.log("No student data available.");
        return;
    }

    let totalMarks = 0;
    let highest = students[0];
    let lowest = students[0];

    for (let student of students) {
        totalMarks += student.marks;

        if (student.marks > highest.marks) {
            highest = student;
        }

        if (student.marks < lowest.marks) {
            lowest = student;
        }
    }

    let average = totalMarks / students.length;

    console.log("\nStatistics");
    console.log(`Total Students: ${students.length}`);
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(
        `Highest Marks: ${highest.name} (${highest.marks})`
    );
    console.log(
        `Lowest Marks: ${lowest.name} (${lowest.marks})`
    );
}
//filter in only intern eligible students
function filterInternEligibleStudents() {
    for (let student of students) {
        if (student.isEnterEligible) {
            console.log(`Intern Eligible Student: ${student.name}`);
        }
    }
}
// <------------------------- Test Data ------------------------->
addStudent(
    1,
    "Sujit Thokar",
    85,
    "7th",
    "Hetauda City College",
    ["HTML", "CSS", "JavaScript"],
    true
);

addStudent(
    2,
    "Rahul Ojahiya",
    78,
    "7th",
    "Hetauda City College",
    ["HTML", "CSS"],
    false
);

addStudent(
    3,
    "Prajeena Bhalon",
    92,
    "8th",
    "Hetauda City College",
    ["HTML", "CSS", "JavaScript", "React"],
    true
);


// Display all students
displayStudents();
// Filter intern eligible students
filterInternEligibleStudents();
// Calculate statistics
calculateStatistics();

// Search student
searchStudent(2);

// Remove student
removeStudent(2);

// Display updated list
displayStudents();
