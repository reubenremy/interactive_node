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
    return number * 2;
}