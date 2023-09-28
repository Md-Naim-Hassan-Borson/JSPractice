

// Find or get an element:
var h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = "Say Hello";

// Creating New HTML element in the div tag:
var heading3 = document.createElement("h1");

// Add new element :
var text = document.createTextNode("This is heading 2");

heading3.appendChild(text);

// Or:
// heading3.innerText="Hello World!"; 
// innerText is used to display text inside an html element, while innerHTML displays complete code of that element  

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

// Add an Element in any places:
var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, heading1);

// Remove an Element:
var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);