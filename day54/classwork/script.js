function cum(first, second) {
    return first > second;
}

console.log(sum(5, 3));
console.log(sum(2, 4));
console.log(cum(7, 7));

// 2
function isInRange(start, end, number) {
    return number >= start && number <= end;
}

console.log(isInRange(5, 10, 7));  
console.log(isInRange(6, 10, 4));  
console.log(isInRange(5, 10, 10)); 

// 3
function needCum(string1, string2) {
    if (string1.length < 2 || string2.length < 2) {
        return false; // თუ რომელიმე სტრინგის სიგრძე ნაკლებია 2-ზე
    }
    return string1[0] === string2[0] && string1[1] === string2[1];
}

console.log(needCum("hello", "heaven"));  
console.log(needCum("hello", "world"));  
console.log(needCum("hi", "hills"));       
// 4
function inputType(input) {
    if (typeof input === "string") {
        return input.length;
    } else if (typeof input === "number") {
        return input > 100;
    } else if (typeof input === "boolean") {
        return !input;
    } else {
        return "Unsupported type"; 
    }
}


console.log(inputType("hello")); 
console.log(inputType(150));        
console.log(inputType(50));        
console.log(inputType(true));     
console.log(inputType(false));      
console.log(inputType([1, 2, 3])); 
 