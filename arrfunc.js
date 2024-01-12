//Building a function that will accept an array and iterate through it
function listArrayItems(arr){
    //Looping through the array and iterate through each array item
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "Red"){
            console.log(i*100, "Tomato!");
        }else{
            console.log(i*100, arr[i]);
        }
    }
}

//Ivoking or calling our functions in different test scenarios
var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
listArrayItems(colors);