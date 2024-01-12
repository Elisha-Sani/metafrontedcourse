var arrOfKeys = ['speed', 'altitude', 'color'];

var drone = {
    speed: 50,
    altitude: 150,
    color: "red"
}

for (var i = 0; i < arrOfKeys.length; i++){
    console.log(drone[arrOfKeys[i]]);
}

/*
The value of i was 0 

The value of arrOfKeys[i] was arrOfKeys[0], which was "speed" 

Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100
*/