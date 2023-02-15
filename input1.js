const readLine = require('readLine-sync');

//1

let answer = readLine.question("Would you like to hear a joke?\nyes or no:");
if (answer == "yes"){
    let answer = readLine.question("Where do you find a cow with no legs?");
    if (answer == "where"){
        console.log(`Right where you left it.`);
    }}

else {
    console.log(`Oh ok`);
}

//2+3
let base = Number(readLine.question("Give me a number:"));
if(base % 2 == 0){{
    console.log(`${base} is divisible by 2`);
}if(base % 3 == 0){
    console.log(`${base} is divisible by 3`);
}if(base % 4 == 0){
    console.log(`${base} is divisible by 4`);
}if(base % 5 == 0){
    console.log(`${base} is divisible by 5`);
}if(base % 6 == 0){
    console.log(`${base} is divisible by 6`);
}}else{
    console.log(`${base} is not divisible by 2, 3, 4,5, or 6`);
}

//4
let secret = Number(readLine.question("Give me a number between 1 through 100:"));
if (secret < 72){
    console.log("Too low.");
}if (secret > 72){
    console.log("Too high.");
}if (secret == 72){
    console.log("You won!!!!!");
}

//5+6
let answer5 = Number(readLine.question("How much did your meal cost:"));
let tax = (answer5 * 0.08);
let newcost = (answer5 + tax).toFixed(2);
if (newcost == tax + answer5){
    console.log (`your total will be ${newcost} with tax.`);
}

//7+8

