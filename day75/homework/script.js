// ? manqana
class Car {
    constructor(brand, model, year, engineVolume) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engineVolume = engineVolume;
    }

    getDescription() {
        return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
    }
}

const myCar = new Car("Toyota", "Prius", 2018, 1.8);
console.log(myCar.getDescription()); // "Toyota Prius, 2018, 1.8L"

// ? wignis
class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }

    dailyReadingPages() {
        return Math.ceil(this.pages / 7); // 7 დღეში დასრულებისთვის საჭიროა დღიური წასაკითხი გვერდები
    }
}

const myBook = new Book("1984", "George Orwell", 350, 1949);
console.log(`${myBook.title} უნდა იკითხოთ დღეში ${myBook.dailyReadingPages()} გვერდი.`);
// "1984 უნდა იკითხოთ დღეში 50 გვერდი."

// ? sporcmenis
class Athlete {
    constructor(name, age, sport, trainingHours) {
        this.name = name;
        this.age = age;
        this.sport = sport;
        this.trainingHours = trainingHours;
    }

    weeklyTrainingGoal() {
        return Math.ceil(this.trainingHours * 7 * 1.2); // 20%-ით გაზრდილი ვარჯიშის ხანგრძლივობა კვირაში
    }
}

const athlete = new Athlete("Michael", 25, "Swimming", 2);
console.log(`${athlete.name}-ს უნდა ივარჯიშოს კვირაში ${athlete.weeklyTrainingGoal()} საათი.`);
