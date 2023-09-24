var num = 20;

num = toString(num);

console.log(typeof(num));


var num1 = "11";
num1 = parseInt(num1);

console.log(typeof(num1))

var num1 = "11.5";
num1 = parseFloat(num1);

console.log(typeof(num1))


var number = 11.23568;

console.log(number.toFixed()) //it will show the round figure.
console.log(number.toFixed(3)) // it will show after the(.)how many number we want to see.
console.log(number.toPrecision())// it will show the whole number.

console.log(number.toPrecision(5))// it will show how many digit we want to see from the number.


// Number method:
console.log(Number("18"));

console.log(typeof(Number("18")));

console.log(Number("18.5"));

console.log(Number("13      "));
console.log(Number("    11"));

console.log(Number("   8   "));


console.log(Number(true));
console.log(Number(false));
