//Задание 1.
"use strict";
function parseCount(number) {
    let parsed = Number.parseInt(number);
    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(meaning) {
    try {
        return parseCount(meaning);
    } catch (error) {
        console.log(error);
        console.log("Ошибка ");
        return error;
    }
}

//Задание 2.
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (b + c) < a || (a + c) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = this.getPerimeter() / 2;
        let triangleArea = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(triangleArea.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return getPerimeter(getTriangle);
    } catch (error) {
        console.log("Ошибка! Треугольник не существует");
    }
}


