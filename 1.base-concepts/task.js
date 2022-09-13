//Требуется написать программу для решения квадратных уравнений (ax^2+bx+c = 0 ).
//Дискриминант (D=b2-4ac).
//(если D <0, то нет корней, если D=0, то один корень, если D>0, то два корня)
"use strict"
// Задача №1
function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c; // Рассчитываем дискриминант

  if (discriminant > 0) {   //Дискриминант больше нуля
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  }
  else if (discriminant === 0) {   //Дискриминант равен нулю
    let x1 = -b / (2 * a);
    arr.push(x1);
  }
  //else if (discriminant < 0) {   //Дискриминант меньше нуля
  //}
  return arr;
}

//Задача №2.
//Калькулятор для расчета выплат по ипотеке.
//Ежемесячная оплата рассчитывается по формуле: Платеж = S * (P + (P / (((1 + P)^n) - 1)))
//где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1)
//n - количество месяцев ^ - возведение в степень
//P - процентная ставка должна быть дробным числом, следовательно, входные данные нужно разделить на 100.
//под 12% годовых сроком на 24 месяца. Чтобы вычислить значение P, разделите размер ставки на 100 и затем на 12:
//Параметр <название параметра> содержит неправильное значение <значение параметра>
//Округлите результат до двух значений после запятой.
function calculateTotalMortgage(percent, contribution, amount, date) {
  debugger;
  const totalAmount = 0;
  const interestRate = percent / 12 / 100; //Процентная ставка. или /100/12
  const downPayment = contribution; //Сумма первоначального взноса.
  const loanАmount = amount; //Сумма кредита.


  if (interestRate < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение  ${percent}`;
  }
  else if (downPayment < 0) {
    return `Параметр начальный взнос содержит неправильное значение ${contribution}`;
  }
  else if (loanАmount < 0) {
    return `Параметр общая стоимость содержит неправильное значение ${amount}`;
  }
  else {
    const timeOfConclusion = new Date();
    const tern = date.getMonth() - timeOfConclusion.getMonth() + (12 * (date.getFullYear() - timeOfConclusion.getFullYear()));//Срок на который был выдан кредит(месяцах).
    //Метод getMonth Получить месяц, от 0 до 11.
    //Метод getFullYear Получить год (4 цифры).
    const loanBody = loanАmount - downPayment; //Тело кредита.
    const payment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** tern) - 1))); //Ежемесячная оплата.
    const totalSum = (payment * tern).toFixed(2);//Общая сумма, которую придется заплатить клиенту.
    const totalAmount = Number(totalSum);
    console.log("Общая сумма " + totalAmount);
    return totalAmount;
  }
}
// =^.^=

