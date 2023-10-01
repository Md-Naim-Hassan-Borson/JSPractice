

var len = document.querySelectorAll(".myBtn").length;
for(var i = 0; i < len; i++){
    document.querySelectorAll(".myBtn")[i].addEventListener("click", function(){
     var text = this.innerHTML;
     console.log(text);// to check the button is properly working or not.


    addAudio(text);

    });
        
};

function addAudio(text){
    switch(text){
        case "a":
            var audio = new Audio("Sounds/a.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("Sounds/b.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("Sounds/c.mp3");
            audio.play();
            break;
    };
};

