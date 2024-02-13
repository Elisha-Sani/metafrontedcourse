function letterFinder(word, match){

    var condition1 = typeof(word) == 'string' && word.length >= 2;

    var condition2 = typeof(match) == 'string' && match.length == 1;

    if (condition1 && condition2 == true) {

        for(var i = 0; i < word.length; i++){
            if (word[i] == match){
                console.log('found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }

    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder(4, 7); // wrong data types
letterFinder("cat", "a"); // should print that no matches were found at index 0 and then find the a at index  1
letterFinder('hello', 'h'); // should print "found the h at 0"