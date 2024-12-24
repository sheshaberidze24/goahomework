function getEvenNumbers(matrix) {
    const evenNumbers = [];
    matrix.forEach(row => {
        row.forEach(number => {
            // თუ რიცხვი ლუწია, დაამატე evenNumbers მასივში
            if (number % 2 === 0) {
                evenNumbers.push(number);
            }
        });
    });

    return evenNumbers;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = getEvenNumbers(matrix);
console.log(result); // [2, 4, 6, 8]
