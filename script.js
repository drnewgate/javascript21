 'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let rollback = 50;
let allServicePrices;
let servicePercentPrice;
let fullPrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) 
}

const asking = function() {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные, интерактивные');

    do {
      screenPrice = prompt('Сколько будет стоить данная работа?');
    }
    while (!isNumber(screenPrice)) 

    screenPrice = Number(screenPrice);
    
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0, t; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

      do {
      t = prompt('Сколько это будет стоить?');
    }
    while (!isNumber(j))
    sum += +t;
  }
  return sum;
}


function getFullPrice () {
  return screenPrice + allServicePrices
}

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

const getTitle = function() {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase() 
}

let percent = fullPrice * (rollback/100);

function getServicePercentPrices() {
  return fullPrice - percent
}

const getRollbackMessage = function(price) {
  if (price >= 30000 ) {
    return 'Даем скидку в 10%'
  } else if (price >= 15000 && price <30000) {
    return 'Даем скидку в 5%'
  } else if (price < 15000 && price >= 0) {
    return 'Скидка не предусмотрена'
  } else {
    return 'Что-то пошло не так'
  }
}

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);   
showTypeOf(screenPrice);  
showTypeOf(adaptive);

console.log (getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log('Стоимость верстки экранов ' + screenPrice + ' долларов и стоимость разработки сайта ' + fullPrice + ' долларов');