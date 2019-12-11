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
    if (number >= 10 || number <= 1) {
        response = "Number is out of range!! Choose another number"
    }
    if (number < 10 && number > 1) {
        response = number * 2;
    return response;
}