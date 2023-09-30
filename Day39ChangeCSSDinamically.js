// Style using JS:
// function addStyle(){
//     var myVar = document.querySelector(".para-style");
//     myVar.style.color = "red";
//     myVar.style.fontSize = "3rem";
//     myVar.style.fontWeight = "bold";
//     myVar.style.fontStyle = "italic";
// }

// function removeStyle(){
//     var myVar = document.querySelector(".para-style");
//     myVar.style.color = "";
//     myVar.style.fontSize = "";
//     myVar.style.fontWeight = "";
//     myVar.style.fontStyle = "";
// }



// Another Way: Here in CSS we have to create a class for the style we want then in add method write the class name created in CSS.     for remove the process is same.
function addStyle(){
    var myVar = document.querySelector(".para-style");
    myVar.classList.add("p-Style");
    
}

function removeStyle(){
    var myVar = document.querySelector(".para-style");
    myVar.classList.remove("p-Style");

}