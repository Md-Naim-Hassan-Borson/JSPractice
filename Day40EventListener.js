var btn = document.querySelector("button")
btn.addEventListener("click", function(){// Here is the function is a anonimous function
    alert("Welcome to the new world");
});




var para = document.querySelector("p")
para.addEventListener("mouseover",mfun);

function mfun(){
    para.classList.add("p:hover");

};

para.addEventListener("mouseout",mfun);
function mfun(){
    para.classList.remove("p:hover");
};



var heading = document.querySelector("h1")
// heading.addEventListener("click", function(){
//     alert("I can see that");
// });

heading.addEventListener("mouseover", function(){
    heading.classList.add("my-style");
});

heading.addEventListener("mouseout", function(){
    heading.classList.remove("my-style");
});



