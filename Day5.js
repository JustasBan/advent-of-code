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
    lines.map((line) => {

        input.push(line.split(' -> '))
        
    })
} catch (err) {
    console.error(err)
}
//finding maximum length of area in this hell of an object
let max_len = -99999999999

input.map(x =>{
    
    let nums = x.map(y => y.split(',').map(Number))

    nums.map(z => {
        let maxii = Math.max(...z)

        if(max_len < maxii){
        max_len = maxii

        }
    })
} )

//defining area
let area = new Array(max_len+1).fill(0);

for(var i = 0; i< area.length; i++){
    area[i] = new Array(max_len+1).fill(0)
}

console.log(max_len);

//--------------------------------------------------------------
//driver code

let fillArr = (start, end) => {

    if(start[0] == end[0]){
        fillVert(start[1], end[1], start[0])
        
    }
    else{

        if(start[1] == end[1]){
            fillHoriz(start[0], end[0], start[1])
        }
    }
}

//filling horizontal:
let fillHoriz = (start, end, line) => {

    if(start<end){
        loopHelperHoriz(start, end, line)
    }
    else{
        loopHelperHoriz(end, start, line)
    }
}

let loopHelperHoriz = (first, final, line) => {

    for (let index = first; index <= final; index++) {
        
        area[line][index]++
    }
}

//filling vertical:
let fillVert = (start, end, col) => {

    if(start<end){
        loopHelperVert(start, end, col)
    }
    else{
        loopHelperVert(end, start, col)
    }
}

let loopHelperVert = (first, final, col) => {
    
    for (let index = first; index <= final; index++) {
        
        area[index][col]++
    }
}

input.forEach((line) =>{

    //find positions number values
    let startPos = line[0].split(',').map(Number)
    let endPos = line[1].split(',').map(Number)
    fillArr(startPos, endPos)
})

let count = 0

area.map(x => {
    x.map(x => {
        if(2 <= x){
            count++
        }
    })
})

console.log(count);

//-----------------------------------------------------------------
//output:

const data = JSON.stringify(area.filter(x => x.filter(y => y!=0)))

// write file to disk
fs.writeFile('./out.json', data, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`)
    }
})