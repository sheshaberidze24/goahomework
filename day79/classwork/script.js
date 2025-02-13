function isFlush(cards) {
    // ვიღებთ პირველი ბარათის მასტის (Suit) სიმბოლოს ბოლო ასოს გარეშე
    let suit = cards[0][cards[0].length - 1];
    
    // `every` მეთოდის გამოყენებით ვამოწმებთ, ყველა ბარათის მასტი ემთხვევა თუ არა პირველ ბარათს
    return cards.every(card => card[card.length - 1] === suit);
}

// ტესტები - ვამოწმებთ ფუნქციის სწორად მუშაობას
console.log(isFlush(["AS", "3S", "9S", "KS", "4S"])); // true - ყველა ბარათი ერთიდაიგივე მასტისაა (S)
console.log(isFlush(["AD", "4S", "7H", "KS", "10S"])); // false - სხვადასხვა მასტებია გამოყენებული
