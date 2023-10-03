var len = document.querySelectorAll(".btn").length;

for(var i = 0; i < len; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);

        playAudio(text);
        playAnimation(text);
    });

};

// Key Press listener:
// that means when we click on a in key board then then same work is done if we click on any button using mouse.

document.addEventListener("keypress", function(event){
    var text = event.key;
    playAudio(text);
    playAnimation(text);

});

function playAudio(etext){
    switch(etext){
        case "a":
            var audio = new Audio("Sounds/as.mp3");
            audio.play();
            break;
         
        case "b":
            var audio = new Audio("Sounds/am.mp3");
            audio.play();
            break; 
            
        case "c":
            var audio = new Audio("Sounds/an.mp3");
            audio.play();
            break;

    };
    
};

function playAnimation(text){
    var selectBtn = document.querySelector("." + text);
    selectBtn.classList.add("animation");

    // it used for to set the time how many seconds the effect will be worked.
    setTimeout(function(){
        selectBtn.classList.remove("animation");
    }, 1000);
};


// key press listener for p tag:
document.addEventListener("keypress", function(event){
    var etext= event.key;
    document.querySelector("p").innerHTML = "The world has changed and you pressed " + etext;
});



var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    var pKey = event.key;
    document.querySelector("#p").innerHTML = "The number of character is pressed " + count;
});