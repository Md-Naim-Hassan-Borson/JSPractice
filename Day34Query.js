// getElementById()
// getElemenstByClassName()
// getElementsByTagName()


// Above 3 method do the work we can do the same work using  querySelector() 
// querySelector()

document.getElementById("pid").innerHTML = "This is changed";

// in querySelector for ID = we have to use ("#pid")


document.querySelector("#pid").innerHTML = "This text is again changed";


// for Class = (".pid")
document.querySelector(".pclass").innerHTML = "This text is again changed too.";




// for tagName =("p") we have to only write the tag name

document.querySeletor("h2")[1].innerHTML = "This Heading tag is also changed bro";