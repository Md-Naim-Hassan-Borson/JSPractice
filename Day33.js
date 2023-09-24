


// getElementById:
var myheading = document.getElementById("heading1");

myheading.innerHTML = "Hello World!";



document.getElementById("heading2").innerHTML = "This is a test case for me";



var myheading1 = document.getElementById("para");

myheading1.innerHTML = "Happy Learning";



//getElementByTagName:
document.getElementsByTagName("h1")[2].innerHTML = "This a tag name test case Amar mone bose na shohore it pathor er nogor e tai to eimal sagor e tai to eilam sagore";

document.getElementsByTagName("h1")[3].innerHTML = "See you guys next time!";

// getElementByClassName:
document.getElementsByClassName('week')[0].style.color="red";

document.getElementsByClassName('week')[1].innerHTML = "I stated my early schooling from Fulbari Government Primary School";
document.getElementsByClassName('week')[1].style.color="purple";


const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(20, -100) ; // x and y coordinates of the end point
ctx.lineTo(70, 100);
ctx.lineTo(-10, 100);
ctx.lineTo(10, -100);
ctx.strokeStyle = "red";
ctx.stroke();


document.getElementsByTagName("a")[0].innerHTML = "Click Here for W3School";