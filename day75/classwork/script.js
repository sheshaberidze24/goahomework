class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;  // ანგარიშის მფლობელი
        this.balance = balance;  // საწყისი თანხა
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`💰 ${amount} თანხა დაემატა. მიმდინარე ბალანსი: ${this.balance}`);
        } else {
            console.log("❌ თანხა უნდა იყოს დადებითი!");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`💸 ${amount} გამოტანილია. დარჩენილი ბალანსი: ${this.balance}`);
        } else {
            console.log("❌ თანხა არ არის საკმარისი ან არასწორია!");
        }
    }

    showBalance() {
        console.log(`📌 ${this.owner}: ${this.balance} ₾`);
    }
}

// გამოყენება:
const account = new BankAccount("გიორგი", 100); // მფლობელი: გიორგი, საწყისი თანხა: 100₾

account.deposit(50);     // 50₾ შეტანა
account.withdraw(30);    // 30₾ გამოტანა
account.showBalance();   // ბალანსის ჩვენება