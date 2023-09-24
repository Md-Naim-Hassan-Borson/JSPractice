

// IIFEs (Immediately Invokeable Function Expressions)


// Normally fucntion call :
function display(){
    console.log('I am a function'); // this is the output of console log

}

display();



// Imediately fucntion call :

(function display(){
    console.log("I am an Immediately invoked function");
})();

(function display(message){
    console.log(message);
})("I am an Immediately invoked function too");





// Task 7 : create an IIFEs that print sum of 2 numbers.

(function addition(num1, num2){
    sum = num1 + num2;
    console.log(sum);
    
})(20,50);


var a = parseFloat(prompt("Enter valur of a:"));
var b = parseFloat(prompt("Enter valur of b:"));

(function sum(){

    var sum= a+b;
    document.write("Sum of your value="+ sum);
})();




// Function Expressions: put the function into a variable that is function expression.

var display2 = function displayMassage(msg){
    console.log(msg);
};
display2("I am a Massage");


var display3 = function displayMassage(){
    console.log("Hi I am a massage too");
};
display3();
