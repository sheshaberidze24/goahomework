//////
function create2DArray(rows, cols) {
    let array = [];
    let counter = 1;

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(counter++);
        }
        array.push(row);
    }

    return array;
}

console.log(create2DArray(2, 2));

//?
function printMatrixDetails(matrix) {
    console.log("რიგები:");
    matrix.forEach(row => console.log(row));

    console.log("\nსვეტები:");
    for (let col = 0; col < matrix[0].length; col++) {
        let column = matrix.map(row => row[col]);
        console.log(column);
    }

    console.log("\nდიაგონალები:");
    let mainDiagonal = [];
    let secondaryDiagonal = [];
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal.push(matrix[i][i]);
        secondaryDiagonal.push(matrix[i][matrix.length - 1 - i]);
    }
    console.log("მთავარი დიაგონალი:", mainDiagonal);
    console.log("მეორეული დიაგონალი:", secondaryDiagonal);
}

let matrix = create2DArray(3, 3); // [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log("მატრიცა:");
console.log(matrix);
printMatrixDetails(matrix);
