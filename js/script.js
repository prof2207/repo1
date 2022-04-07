'use strict';

const titleColl = document.getElementsByTagName('h1');
let title1 = titleColl[0];
console.log(title1);


const buttons = document.getElementsByClassName('handler_btn');
let calculate = buttons[0];
let reset = buttons[1];
console.log(calculate);
console.log(reset);

const plusScreen = document.querySelectorAll('.screen-btn');
let plus = plusScreen[0];
console.log(plus);


// две переменные, две коллекци? Если, я правильно понял?
const percent = document.querySelectorAll('.other-items.percent');
console.log(percent);
const number = document.querySelectorAll('.other-items.number');
console.log(number);


const range = document.querySelector('[type="range"]');
console.log(range);

const span = document.querySelector('.rollback > .range-value');
console.log(span);

const aalInput = document.getElementsByClassName('total-input');
let input1 = aalInput[0];
console.log(input1);
let input2 = aalInput[1];
console.log(input2);
let input3 = aalInput[2];
console.log(input3);
let input4 = aalInput[3];
console.log(input4);
let input5 = aalInput[4];
console.log(input5);

let allScreen = document.querySelectorAll('.screen');
console.log(allScreen[0]);



const appData = {
    title: '',

    typeScreen: '',

    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrice();
        appData.getTitle();

        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    isStr: function (str) {
        return ((!isNaN(parseFloat(str)) && isFinite(str)) == false);
    },



    asking: function () {
        // appData.title = prompt("Как называется ваш проект?", " КаЛьКулятор Верстки");

        do {
            appData.title = prompt("Как называется ваш проект?", " КаЛьКулятор Верстки");
        } while (!appData.isStr(appData.title));

        for (let i = 0; i < 2; i++) {
            // let name = prompt("Какие типы экранов нужно разработать?", " Простые, Сложные");
            let name = "";
            do {
                name = prompt("Какие типы экранов нужно разработать?", " Простые, Сложные");
            } while (!appData.isStr(name));
            let price = 0;
            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price));
            appData.screens.push({ id: 1, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            // let name = prompt("Какой дополнительный тип услуги нужен?");
            let name = "";
            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (!appData.isStr(name));

            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));

            appData.services[name] = +price;
        }
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getFullPrice: function () {
        appData.fullPrice = + appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);


    },
};

appData.start();


