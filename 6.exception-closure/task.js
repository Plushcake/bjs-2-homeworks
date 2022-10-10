//Задание 1.
"use strict";
function parseCount(number) {
    let parsed = Number.parseInt(number);
    if (parsed === NaN) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(meaning) {
    try {
        const parsedCo = parseCount(meaning);
    } catch {
        console.log("Ошибка");
    }
    return parseCo;
}

//Задание 2.
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.a = sideA;
        this.b = sideB;
        this.c = sideC;

        if ((a + b) < c || (b + c) < a || (a + c) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        halfPerimeter = this.getPerimeter() / 2;
        this.p = halfPerimeter;
        triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return triangleArea.toFixed(3);
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return Triangle();
    } catch {
        return getArea();
        console.log("Ошибка! Треугольник не существует");
    }
}


