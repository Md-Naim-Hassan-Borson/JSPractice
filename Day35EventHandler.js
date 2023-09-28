function myMassage(){
    alert("Welcome to my world! It's Test massage1 bro..");
}

function myMassage1(){
    alert("Welcome to my world! It's Test massage2 bro..");
}


function paragraph(){
    alert("Welcome to my world! It's Test massage3 bro..");
}




var myText = document.getElementById("para");
// var myText = document.querySelector("#para");
function myMassage2(){
    myText.innerHTML = "you have clicked on Navigate Button";
}

function myMassage3(){
    myText.innerHTML = "you have clicked on Care Button";
}



var MyImage = document.querySelector("#imageId");
function image(){
    MyImage.src = "Images/pic4.jpg";
}

function image1(){
    MyImage.src = "Images/pic1.jpg";
}



// Practice:

var link = document.getElementById("aid");

link.innerHTML = "Study with naim";

link.style.textDecoration = "none";
link.style.alignItems = "Center";
link.style.fontFamily = "monospace";
link.style.color = "SlateBlue";
link.style.fontSize = "3vw";


link.href = "https://www.w3schools.com";