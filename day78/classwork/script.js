function matrixElementLengths(matrix) {
    return matrix.map(row => row.map(element => String(element).length));
}

const matrix = [["hello", "world"], ["python", "rocks"], ["GIVI", "GOCHA"]];
const result = matrixElementLengths(matrix);
console.log(result); 
