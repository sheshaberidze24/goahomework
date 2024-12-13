//! js
function generateMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = new Array(n).fill(0); // ქმნის ნულის შემცველ მასივს
        row[i] = 1; // დიაგონალზე მოთავსებს 1-ს
        matrix.push(row); // ამატებს მასივს მატრიცაში
    }
    return matrix;
}

// ტესტირება
console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(5));

// გამოთვალე გამოსახულებები თუ A = 1 B = 0 და C = 0
// 1(A&&!B)||(B&&!A)
// 2(B&&C)&&(A||B)
// 3(A&&!C)||(B&&!A)||(B&&!C)

let N 