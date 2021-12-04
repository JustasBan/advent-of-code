let numbers = [ 7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1 ]

let boardProps = {
    isMarked: false,
    number: undefined
}

//Getting boards input:
let boardsInput = []
const fs = require('fs');

try {
    // read contents of the file
    const data = fs.readFileSync('file.txt', 'UTF-8')

    // split the contents by new line
    const lines = data.split(/\r?\n/)

    // put all lines as int to array
    lines.forEach((line) => {

        boardsInput.push(line.split(' ').filter( (n) => { return (n !== '') }).map(Number))   
    })
} catch (err) {
    console.error(err)
}

console.log(boardsInput)