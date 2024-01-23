// PI
console.log(Math.PI);

// Euler's Constant
console.log(Math.E);

// Natural Log
console.log("Nat Log of 2:", Math.LN2.toFixed(4), "Nat Log of 10:", Math.LN10.toFixed(4));

// Rounding Methods
const num = 345.45678;
const num2 = 345.65678
//Rounding up to the closest Integer
console.log(Math.ceil(num));
//Rounding down to the closest Integer
console.log(Math.floor(num));
//Rounding up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer
console.log(num, "Rounding: ", Math.round(num));
console.log(num2, "Rounding: ", Math.round(num2));
//Truncating
console.log(num, "Truncating: ", Math.trunc(num));
console.log(num2, "Truncating: ", Math.trunc(num2));

//ARITHMETIC AND CALCULUS 
//Power
console.log("Power of 2 and 3");
function powerNum(a, b){
    console.log(Math.pow(a, b));
}
powerNum(2, 3);

//Squareroot
console.log("Squareroot of 81");
function squareRoot(a){
    var ans = Math.sqrt(a);
    console.log(ans);
}
squareRoot(81);

//Cuberoot
console.log("Cuberoot of 27");
function cubeRoot(a){
    var ans = Math.cbrt(a);
    return ans;
}
var result = cubeRoot(27);
console.log(result);

//Absolute Value of A 
console.log("Absoute value of -232")
var a = -232;
console.log(Math.abs(a));

//Logarithmic
console.log("Logarithmic value of 25 in different bases")
function logValue(a){
    var ans = Math.log(a);
    var ans2 = Math.log2(a);
    var ans3 = Math.log10(a);
    console.log("Log of", a, "is", ans.toFixed(4));
    console.log("Log2 of " + a, "is", ans2.toFixed(4));
    console.log("Log10 of", a, "is", ans3.toPrecision(5));
}
logValue(25);

//Minimum and Maximum
//Maximum
console.log("Max of 9, 4, 2 is:", Math.max(9, 4, 2));
//Mininmum
console.log("Minimum of 9, 4, 2 is:", Math.min(9, 4, 2));

//Trigonometric Expressions
console.log('sin, cos and tan of 180');
function triExp(a){
    var sin = Math.sin(a);
    var cos = Math.cos(a);
    var tan = Math.tan(a);
    console.log("Sin of", a, "is:", sin.toPrecision(4));
    console.log("Cos of", a, "is:", cos.toPrecision(4));
    console.log("Tan of", a, "is:", tan.toPrecision(4));
}
triExp(270);
