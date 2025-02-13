function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;  // ციფრის მიღება
        number = Math.floor(number / 10);  // რიცხვის შემცირება
    }
    return sum;
}

let number = 123;  
console.log(sumDigits(number));


//? codewars "Multiplication table for number"
function multiTable(n) {
    let res = '';
    for(let i = 1; i <= 10; i++){
      res += `${i} * ${n} = ${i * n}`;
      if(i < 10)  res +='\n';
    }
    return res;
  }