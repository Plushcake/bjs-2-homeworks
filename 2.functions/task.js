// Задание 1
"use strict";
debugger;
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  //Если элемент больше предыдущего максимума, то максимум становится равен элементу.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max)
      max = arr[i];
    //Если элемент меньше предыдущего минимума, то минимум становится равен элементу.
    if (arr[i] < min)
      min = arr[i];
    //Добавляем элемент к сумме sum для последующего вычисления среднего.
    sum = arr[i] + sum;
  }
  //Чтобы вычислить среднее надо сумму элементов поделить на их количество.
  //avgCalculation = (sum / arr.length).toFixed(2);
  //avg = Number(avgCalculation);
  avg = Number((sum / arr.length).toFixed(2));
  //avg = Number(avg);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) { //Насадка.
  let sum = [];
  for (i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {//Мясорубка. Принимает входные данные - массив массивов (мясо) и функцию worker. MakeWork функция высшего порядка.
  let max = [];
  for (i = 0; i < arrOfArr.length; i++) {
    
  }

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
