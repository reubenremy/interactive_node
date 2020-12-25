const readline = require('readline')

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readlineInterface.question(`Enter Transaction: `, (transaction) => {
    console.log('you typed', transaction)
    readlineInterface.close();
})

// const multiplyByTwo = number => {
//     let response = "";
//     if (number >= 10 || number <= 1) {
//         response = "Number is out of range!! Choose another number"
//     }
//     if (number < 10 && number > 1) {
//         response = number * 2;
//     return response;
//     }
// }