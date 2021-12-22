//------------------------------------------------------------------
//Getting input:

let input = []
const fs = require('fs');

try {
    // read contents of the file
    const data = fs.readFileSync('file.txt', 'UTF-8')

    // split the contents by new line
    const lines = data.split(/\r?\n/)

    // put all lines as int to array
    lines.forEach((line) => {

        let temp = line.split(' -> ')

        input.push(temp)
    })
} catch (err) {
    console.error(err)
}

//--------------------------------------------------------------
//driver code

let area = new Array(10).fill(0);

for(var i = 0; i< area.length; i++){
    area[i] = new Array(10).fill(0)
    console.log(area[i])
}

input.forEach((line) =>{

    //find positions number values
    let startPos = line[0].split(',').map(Number)
    let endPos = line[1].split(',').map(Number)

    
})

let fillArr = (arr, start, end) => {

    
}

//-----------------------------------------------------------------
//output:

const data = JSON.stringify(input)

// write file to disk
fs.writeFile('./out.json', data, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`)
    }
})