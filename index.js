const readline = require('readline')

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readlineInterface.question(`Give me a number between 1 & 10? : `, function(number) {
    console.log(multiplyByTwo(number));
    readlineInterface.close();
})

function multiplyByTwo(number) {
    let response = "";
    if (number > 10) {
        response = "Number is too large!! Choose a number less than 10"
    }
    if (number < 1) {
        response = "Number is too low!! Choose a number greater than 1!"
    }
    if (number < 10 && number > 1) {
        response = number * 2;
    }
    return response;
}