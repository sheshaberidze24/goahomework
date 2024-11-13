// task 1
function printPositions(rows, cols) {
    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            console.log(`row: ${row}, col: ${col}`);
        }
    }
}

printPositions(2, 2);

// task 2
function generateMultiplicationTable() {
    const table = [];

    for (let i = 1; i <= 10; i++) {
        const row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j); // ვამატებთ გამრავლების შედეგს
        }
        table.push(row); // ვამატებთ რიგს მთავარ მასივში
    }

    return table;
}

const multiplicationTable = generateMultiplicationTable();
console.log(multiplicationTable);
// task 3
function printGreaterPairs(n) {
    // პირველი რიცხვი i გადის 1-დან n-მდე
    for (let i = 1; i <= n; i++) {
        // მეორე რიცხვი j იწყება i+1-დან, რათა j > i
        for (let j = i + 1; j <= n; j++) {
            console.log(`(${i}, ${j})`);
        }
    }
}

printGreaterPairs(3);