function sumTwoLargest(arr) {
    if (arr.length < 2) {
        return null; // თუ სიაში 2-ზე ნაკლები ელემენტია, ჯამი არ აქვს აზრი
    }

    let max1 = Math.max(...arr); // ვპოულობთ უდიდეს რიცხვს
    arr.splice(arr.indexOf(max1), 1); // ვშლით მას სიიდან, რომ შემდეგ უდიდესი ვიპოვოთ
    let max2 = Math.max(...arr); // ვპოულობთ სიაში დარჩენილ უდიდესს

    return max1 + max2; // ვაბრუნებთ ორ უდიდეს რიცხვს ჯამში
}

// ტესტები:
console.log(sumTwoLargest([3, 7, 2, 9, 5]));  // მოსალოდნელი შედეგი: 16 (9 + 7)
console.log(sumTwoLargest([10, 10, 5, 3]));   // მოსალოდნელი შედეგი: 20 (10 + 10)

// ?
function sumTwoLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let sortedArr = [...arr].sort((a, b) => b - a); // ვალაგებთ კლებადობით
    return sortedArr[0] + sortedArr[1]; // ვაბრუნებთ ორ უდიდესს
}

// ტესტები:
console.log(sumTwoLargest([3, 7, 2, 9, 5]));  // 16 (9 + 7)
console.log(sumTwoLargest([10, 10, 5, 3]));   // 20 (10 + 10)
