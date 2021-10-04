'use strict';
 
const title =  prompt('Как называется ваш проект?' , 'Типы данных, операторы, методы и свойства');
console.log(typeof title);
console.log (title);

const screens = prompt("Какие типы экранов нужно разработать?");
console.log (screens);
console.log('Простые, Сложные, Интерактивные'.toLowerCase());
console.log(screens.length);
console.log(screens.split(","));

const screenPrice = prompt("Сколько будет стоить данная работа?")
console.log (parseInt(screenPrice));
if (true) console.log (screenPrice);

let fullPrice = servicePrice1 + servicePrice2;
let rollback = 95; 
console.log('"Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани” и “Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани”');
let servicePercentPrice = Math.ceil(fullPrice * (rollback/100));
console.log(fullPrice);

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

if (fullPrice > 30000 ) {
  console.log ('Даем скидку 10%');

switch(true) {
  case 15000 <= fullPrice && fullPrice <= 30000;
    console.log ('Даем скидку 5%'); 
      break
  case  0 <= fullPrice && fullPrice <= 15000;
    console.log ('Скидка не предусмотрена');
      break
  default:
    console.log ('Что-то пошло не так');
}
