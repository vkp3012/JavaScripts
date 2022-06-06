console.log("Hello Vivek");

const students = [
    {name:"harry", subject:"JavaScript"},
    {name:"Rohan",subject:"Machine Learning"}
]

function enrollStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    },3000);
}

function getStudents(){
    setTimeout(function() {
        let str="";

        students.forEach(function(student){
           str += `
                <li> "${student.name}" </li>
           `;
        });

        document.getElementById('students').innerText = str;

        console.log("Students have been fetched");
    },1000);
}

let newStudent={name:"Sunny",subject:"Python"};

enrollStudent(newStudent,getStudents);