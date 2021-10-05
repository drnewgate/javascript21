'use strict';
 
const title =  prompt('Как называется ваш проект?' , 'Типы данных, операторы, методы и свойства');
console.log(typeof title);
console.log (title);

const screens = prompt("Какие типы экранов нужно разработать?");
console.log (screens);
console.log('Простые, Сложные, Интерактивные'.toLowerCase());
console.log(screens.length);
console.log(screens.split(","));

const screenPrice = prompt("Сколько будет стоить данная работа?");
console.log (parseInt(screenPrice));
if (true) {
  console.log (screenPrice);
}



let rollback = 95; 

let fullPrice;
console.log('"Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани” и “Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани”');

let adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = prompt("Сколько это будет стоить?");
console.log(servicePrice2);


fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice * (rollback/100));
console.log(servicePercentPrice);

if (fullPrice > 30000 ) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 15000 && fullPrice <30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}
