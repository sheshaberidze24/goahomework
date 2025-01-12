function getUniqueElements(array) {
    // შექმენით ობიექტი ელემენტების რაოდენობის დასათვლელად
    const elementCount = {};

    // დათვალეთ თითოეული ელემენტი მასივში
    array.forEach(element => {
        elementCount[element] = (elementCount[element] || 0) + 1;
    });

    // დატოვეთ მხოლოდ უნიკალური ელემენტები
    return array.filter(element => elementCount[element] === 1);
}

// გამოყენების მაგალითი
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueElements = getUniqueElements(inputArray);
console.log(uniqueElements); // [1, 3, 5]
