
var photos = ["Images/pic1.jpg","Images/pic2.jpg", "Images/pic3.jpg", "Images/pic4.jpg", "Images/pic5.jpg", "Images/pic6.jpg"];

var img = document.querySelector("img");


count = 0;


function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        img.src = photos[count];
    }else{
        img.src = photos[count];
    }
    

} 

function prev(){
    count--;
    if(count < 0){
        count = photos.length-1;
        img.src = photos[count];
    }else{
        img.src = photos[count];
    }

}