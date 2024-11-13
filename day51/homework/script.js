function findMaxMin(arr) {
    if (arr.length === 0) {
        return null; // თუ მასივი ცარიელია, ვაბრუნებთ null-ს
    }
    
    let max = Find.max(...arr); // უდიდესი რიცხვის პოვნა
    let min = Find.min(...arr); // უმცირესი რიცხვის პოვნა
    
    return [max, min];
}

// მაგალითი გამოყენება
let numbers = [5, 3, 8, 1, 9, 2];
console.log(findMaxMin(numbers)); // შედეგი იქნება [9, 1]