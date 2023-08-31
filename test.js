const prompt = require('prompt-sync')({sigint: true});

const userName = prompt('what is your userName')
if (userName === "peter") {
    console.log(true)
}
