//Chicken Monkey
//Write a program that prints the numbers from 1 to 100. But for multiples of five 
//(5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of 
//seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both 
//five and seven print "ChickenMonkey".

//If numbers are divisible by 5, print "Chicken"
//If numbers divisible by 7, print "Monkey"
//If numbers divisible by 5 and 7, print "ChickenMonkey"

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey"); // numbers divisible by 5 and 7 will appear
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken"); // Only numbers divisible by 5 will appear
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey"); // Only numbers divisible by 7
    } else {
        console.log(currentNumber);
    }
}

//Take a Number - Battle of the Bands

//Assign each band a number
//write a function that accepts any band name as an argument. 
//The function will increment a global variable by one each time it is invoked, 
//and return that number, and the band name concatenated together.

let bandNumber = 1;

const takeNumber = function(bandName) {
    let bandOrder = `${bandNumber}. ${bandName}`;
    bandNumber++;
    return bandOrder;
}


