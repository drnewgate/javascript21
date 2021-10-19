'use strict';

const title = document.getElementsByTagName('h1')
console.log(title[0])

const handlerBtn = document.getElementsByClassName('handler_btn')
console.log(handlerBtn)

const screenBtn = document.querySelector('.screen-btn')
console.log(screenBtn)

const itemPercent = document.querySelectorAll('.percent')
console.log(itemPercent)

const itemNumber = document.querySelectorAll('.number')
console.log(itemNumber)

const range = document.querySelector('.main-controls__item.rollback input[type="range"]')
console.log(range)

const span = document.querySelector('.rollback .range-value')
console.log(span)

const input = document.getElementsByClassName('total-input')
console.log(input[0])
console.log(input[1])
console.log(input[2])
console.log(input[3])
console.log(input[4])

let blockscreen = document.querySelectorAll('.screen')
console.log(blockscreen)

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  services: {},
  rollback: 10,
  allServicePrices: 0,
  servicePercentPrice: 0,
  fullPrice: 0,
  start: function () {
    appData.asking();
    this.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
  asking: function () {
    
    do {
      appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    } while (!appData.isString(appData.title));
      /* appData.title = appData.getTitle();  */
    
    for (let i = 0; i < 2; i++) {
        let name;
        let price = 0;
      do {
         name = prompt('Какие типы экранов нужно разработать?' , 'Простые, сложные, адаптивные');
      } while (!appData.isString(name)); 

      do {
         price = prompt('Сколько будет стоить данная работа?' , '2000');
      } while (!appData.isNumber(price)); 

      appData.screens.push({ id: i, name: name, price: price })
    }

    for (let i = 0, cost; i < 2; i++) {  
      let name; 

      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while (!isNaN(name));     

      do {
        cost = prompt('Сколько это будет стоить?', '2500');
      }
      while (!appData.isNumber(cost))
      
      appData.services[name] = +cost
    }
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  addPrices: function() {
    for (let screen of appData.screens) {
        appData.screenPrice += +screen.price
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }

  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) 
  }, 
  isString: function (str) {
  return isNaN(+str)
  },
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + +appData.allServicePrices
  },
  getTitle: function () {
    appData.title = appData.title.trim().toLowerCase()
    appData.title = appData.title[0].toUpperCase() + appData.title.slice(1)
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
  },
  getRollbackMessage: function(price) {      
    let message;                               
    if (price >= 30000 ) {
      message = 'Даем скидку в 10%';
    }  else if (price >= 15000 && price < 30000) {
      message = 'Даем скидку в 5%';
    }  else if (price >= 0 && price < 15000) {
      message = 'Скидка не предусмотрена';
    }  else {
      message = 'Что-то пошло не так';
    }
    return message;
  },
  logger(){
    for(let key in appData) {
      console.log('Ключ: ' + key + ' Значение: ' + appData[key])
    }
  } 
}
appData.start();