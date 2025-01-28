// 1) ობიექტის შექმნა და property-ის კონსოლში გამოტანა
const person = {
    name: "John",
    age: 30,
    gender: "Male",
    profession: "Engineer",
    country: "Georgia",
  };
  
  // გამოვიტანთ age property-ს
  console.log(person.age);
  
  // 2) ობიექტის შექმნა ორი key-value წყვილით და მასივების ელემენტებზე გადავლა
  const numbers = {
    row_0: [2, 4, 6, 8, 10], // ლუწი რიცხვები
    row_1: [1, 3, 5, 7, 9],  // კენტი რიცხვები
  };
  
  // გადავლა ერთდროულად ორივე მასივზე
  for (let i = 0; i < Math.max(numbers.row_0.length, numbers.row_1.length); i++) {
    if (i < numbers.row_0.length) {
      console.log(`Row 0 Element: ${numbers.row_0[i]}`);
    }
    if (i < numbers.row_1.length) {
      console.log(`Row 1 Element: ${numbers.row_1[i]}`);
    }
  }
  
  // 3) ფუნქცია ობიექტიდან quantity და element-ის წაკითხვისთვის
  function generateArrayFromObject(obj) {
    const { quantity, element } = obj;
    return Array(quantity).fill(element);
  }
  
  // მაგალითი
  const inputObject = {
    quantity: 5,
    element: "apple",
  };
  
  const resultArray = generateArrayFromObject(inputObject);
  console.log(resultArray);
  