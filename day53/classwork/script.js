function countArea(shape, ...args) {
    if (shape === "rectangle") {
        if (args.length !== 2) {
            return "მართკუთხედი მოითხოვს 2 არგუმენტს (სიგანე და სიმაღლე).";
        }
        const [width, height] = args;
        return width * height;
    } 
    
    else if (shape === "circle") {
        if (args.length !== 1) {
            return "წრე მოითხოვს 1 არგუმენტს (რადიუსი).";
        }
        const radius = args[0];
        return Math.PI * Math.pow(radius, 2);
    } 
    
    else if (shape === "triangle") {
        if (args.length !== 3) {
            return "სამკუთხედი მოითხოვს 3 არგუმენტს (გვერდები a, b, c).";
        }
        const [a, b, c] = args;
        const s = (a + b + c) / 2; // ნახევრად პერიმეტრი
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } 
    
    else {
        return "უცნობი ფორმის ტიპი.";
    }
}