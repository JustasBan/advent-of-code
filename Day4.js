let numbers = [ 73,42,95,35,13,40,99,92,33,30,83,1,36,93,59,90,55,25,77,44,37,62,41,47,80,23,51,61,21,20,76,8,71,34,58,5,52,22,39,57,17,2,26,0,10,72,19,3,64,65,82,46,31,63,91,24,18,12,9,79,50,98,69,4,78,54,43,68,87,7,67,48,28,89,94,53,85,81,49,88,6,96,29,56,97,66,38,16,32,70,74,27,84,86,45,75,60,15,14,11 ]

//------------------------------------------------------------------
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

//------------------------------------------------------------------
//setting up boards to contain an object(boolean and int):

let boards = []
let board = []

boardsInput.forEach( (row) => {
    
    if(row.length === 0){

        boards.push(board)
        board = []
    }
    else{

        let alteredRow = []

        row.forEach( (col) => {

            let replacement = {
                isMarked: false,
                number: col
            }

            alteredRow.push(replacement)
        })

        board.push(alteredRow)
    }

})

//-----------------------------------------------------------------
//business logic:

//finding position in 2D array
let position = (arr, find) => {

    let x=-1, y=-1

    arr.forEach( (value, index, array) => {

        value.forEach( (value2, index2, array2) => {
            
            if(value2.number === find){

                x = index
                y = index2
            }
        })
    })

    return ({
        row: x,
        col: y
    })
}

let checkCol = arr => {
    
    let y=-1
    let n = 0

    for (let i = 0; i < 5; i++) {
        
        for (let j = 0; j < 5; j++) {
            
            if(arr[j][i].isMarked === true){
                n++
            }
        }

        if(n === 5){

            y = j
            break
        }
        
        n = 0
    }

    return y
}

let checkRow = arr => {
    
    let x=-1
    let n = 0

    for (let i = 0; i < 5; i++) {
        
        for (let j = 0; j < 5; j++) {
            
            if(arr[i][j].isMarked === true){
                n++
            }
        }

        if(n === 5){

            x = i
            break
        }
        
        n = 0
    }

    return x
}

let boardWinner, propsWinner, won = false

numbers.forEach( (number) => {

    //search for number:

    boards.forEach( (boards_val) => {

        let found = position(boards_val, number)

        //if we find number in board, we mark it
        if(found.col > -1 && found.row > -1  && won === false){

            boards_val[found.row][found.col].isMarked = true;

            //then we check for marked rows
            let row_result = checkRow(boards_val)

            if(row_result > -1 && won === false){

                boardWinner = boards_val
                propsWinner = number

                won = true
            }

            //check for marked cols
            let col_result = checkCol(boards_val)

            if(col_result > -1 && won === false){

                boardWinner = boards_val
                propsWinner = number

                won = true
            }
        }
    })
})

//finding sum of unmarked winner board values
let sum = 0

boardWinner.map( (elements) => {

    elements.map((innerElem) => {

        if(innerElem.isMarked === false){
            sum += innerElem.number
        }
    })
})

console.log(sum*propsWinner);

//-----------------------------------------------------------------
//output:

// convert JSON object to a string
const data = JSON.stringify(boards);

// write file to disk
fs.writeFile('./out.json', data, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`)
    }
})