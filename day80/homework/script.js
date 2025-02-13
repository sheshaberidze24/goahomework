//? unshift
let arr = [2, 3, 4];
arr.unshift(1);  // ემატება 1 ელემენტი დასაწყისში
console.log(arr);  // [1, 2, 3, 4]
//? shift
// let arr = [1, 2, 3, 4];
let firstElement = arr.shift();  // ამოიღებს პირველი ელემენტს
console.log(arr);  // [2, 3, 4]
console.log(firstElement);  // 1

//? splice
// let arr = [1, 2, 3, 4];
arr.splice(1, 2, 5, 6);  // მასივის მეორე და მესამე ელემენტები იცვლება ახალი ელემენტებით
console.log(arr);  // [1, 5, 6, 4]

//? slice
// let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4);  // ამოიღებს ელემენტებს ინდექსიდან 1 მდე 4
console.log(newArr);  // [2, 3, 4]
console.log(arr);  // [1, 2, 3, 4, 5] (ორიგინალი მასივი არ იცვლება)

//? concat
let arr1 = [1, 2];
let arr2 = [3, 4];
// let newArr = arr1.concat(arr2);  // აერთიანებს ორ მასივს
console.log(newArr);  // [1, 2, 3, 4]

//? sort
// let arr = [4, 2, 5, 1, 3];
arr.sort();  // ალაგებს მასივს ასცendente წესით
console.log(arr);  // [1, 2, 3, 4, 5]

//? join
// let arr = [1, 2, 3, 4];
let str = arr.join('-');  // მიერთდება ელემენტები ხევს შორის "-"
console.log(str);  // "1-2-3-4"

