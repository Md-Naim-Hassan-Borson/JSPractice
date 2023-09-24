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

document.querySelector("h2").innerHTML = "This Heading tag is also changed bro";






document.querySelector("a").innerHTML = "Welcome Home";
document.querySelector("ul li a").innerHTML = "Blogpost";

// document.querySelector("div a").innerHTML = "Catalog";
document.querySelector(".my-div a").innerHTML = "Footer";


//QuerySelectorAll() Method:
document.querySelectorAll("p")[3].innerHTML = "Hello Bangladesh What's up Polapain";


