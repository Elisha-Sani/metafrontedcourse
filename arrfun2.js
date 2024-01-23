function arrayBuilder2(one, two, three){
    var array = [];
    array.push(one);
    array.push(two);
    array.push(three);
    return array;
}

var simpleArray = arrayBuilder2('apple', 'mango', 'banana');
console.log(simpleArray);