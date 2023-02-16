const readLine = require('readLine-sync');

//1
let add1 = Number(readLine.question("Give me a number:"));
let add2 = Number(readLine.question("Give me another number:"));
let sum = add1 + add2
if (sum == add1 + add2) {
    console.log(`The sum of ${add1} and ${add2} is ${sum}`)
}

//2
let sub1 = Number(readLine.question("Give me a number:"));
let sub2 = Number(readLine.question("Give me another number:"));
let diff = sub1 - sub2
if (diff == sub1 - sub2) {
    console.log(`The difference of ${sub1} and ${sub2} is ${diff}`)
}

//3
let mult1 = Number(readLine.question("Give me a number:"));
let mult2 = Number(readLine.question("Give me another number:"));
let product = mult1 * mult2
if (product == mult1 * mult2) {
    console.log(`The product of ${mult1} and ${mult2} is ${product}`)
}

//4
let div1 = Number(readLine.question("Give me a number:"));
let div2 = Number(readLine.question("Give me another number:"));
let quot = div1 / div2
if (quot == div1 / div2) {
    console.log(`The quotient of ${div1} and ${div2} is ${quot}`)
}

//5
let Num1 = Number(readLine.question("Give me a number:"));
let Num2 = Number(readLine.question("Give me another number:"));
let remainder = Num1 % Num2
if (remainder == Num1 % Num2) {
    console.log(`The remainder of ${Num1} and ${Num2} is ${remainder}`)
}

//6
let First = readLine.question("First name:");
let Last = readLine.question("Last name:");
console.log(`Greetings ${Last}, ${First}.`)

//7
let Title = readLine.question("Title:");
let LastName = readLine.question("Last name:");
let Suffix = readLine.question("Suffix:");
console.log(`Welcome ${Title} ${LastName}, ${Suffix}.`)

//8
let SN = readLine.question("Street Number:");
let SM = readLine.question("Street Name:");
let ST = readLine.question("Street Type:");
let C = readLine.question("City:");
let S = readLine.question("State:");
let ZC = readLine.question("Zip Code:");
console.log(`${SN} ${SM} ${ST} \n${C}, ${S} ${ZC}`)

//9
let div12 = Number(readLine.question("Give me a number:"));
let div22 = Number(readLine.question("Give me another number:"));
let quot2 = div12 / div22
let remainder2 = div12 % div22
if (quot2 == div12 / div22) {
    console.log(`The quotient of ${div12} and ${div22} is ${quot2.toFixed(0)} with remainder ${remainder2}`)
}

//10
let Number1 = Number(readLine.question("Give me a number:"));
let Number2 = Number(readLine.question("Give me another number:"));
