// DOM Traversing:

// Downwards traversing:
// Using querySelector() or querySelectorAll():

const studentList = document.querySelector(".students-list");
const studentA = studentList.querySelector(".student-a");

studentA.innerHTML = "Md. Naim Hassan Borson";

// Using Childern:
const StudentB = studentList.children[1];
StudentB.innerHTML = "Rofiq";



// Upwards: (we can see it using console)
// ParentElement:
const studentA = document.querySelector("li");
const studentList1 = studentA.parentElement; 




//Sideways:
// NextElementSibling, PreviousElementSibling:
const studentA = document.querySelector("li");
const studentB = studentA.nextElementSibling;
const studentC = studentB.nextElementSibling;


const studentX = document.querySelectorAll("li")[2];
const studentY = studentX.previousElementSibling;
const studentZ = studentY.previousElementSibling;


//sideways -- parentElement + children + index:
const studentA = document.querySelector("li");
const studentList3 = studentA.parentElement;
const studentc = studentList3.children[2];