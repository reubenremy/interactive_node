const readline = require('readline')

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readlineInterface.question(`What's your name? :`, function(name) {
    console.log(`Hi ${name}!`);
    readlineInterface.close();
})