class PrintEditionItem {
    constructor(name, releasDate, pagesCount) {
        this.name = name;
        this.releasDate = releasDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state * 1.5;
    }

    set state(number) {
        if (number < 0) {
            this.state = 0;
        }
        else if (number > 100) {
            this.state = 100;
        }
        else {
            this.state = number;
        }
    }
    get state() {
        return this.state;
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name, releasDate, pagesCount) {
        super(name, releasDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releasDate, pagesCount, author) {
        super(name, releasDate, pagesCount, author);
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releasDate, pagesCount, author) {
        super(name, releasDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releasDate, pagesCount, author) {
        super(name, releasDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releasDate, pagesCount, author) {
        super(name, releasDate, pagesCount, author);
        this.type = "detective";
    }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//Задача №2.

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
}

addBook(book) {
    if (state > 30) {
        this.books.push(book); //Под вопросом.
    }
}

findBookBy(type, value) {

}

giveBookByName(bookName)
