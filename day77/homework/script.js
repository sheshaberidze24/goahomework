function createObject(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i] !== undefined ? values[i] : null; // ! თუ მნიშვნელობა არ არსებობს, ვიყენებთ null-ს
    }
    return obj;
}

const keys = ["name", "age", "city"];
const values = ["Nika", 17, "Aspindza"];

console.log(createObject(keys, values));
// შედეგი: { name: 'Nika', age: 17, city: 'Aspindza' }
