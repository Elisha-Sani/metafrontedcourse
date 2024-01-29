//Function for looping
function Loop(arguments) {
    for (var i = 0; i < arguments.length; i++) {
        console.log('idx', i, 'is', arguments[i]);
    }
}

//Loop Through an Array
var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
Loop(letters);
console.log("\n")


//Loop over string
var strings = "abdef";
Loop(strings);
Loop();

