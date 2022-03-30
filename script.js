'use strict';

let title = prompt("Как называется ваш проект?", " КаЛьКулятор Верстки");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
let allServicePrices;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getAllServicePrices = function () {
    allServicePrices = servicePrice1 + servicePrice2;
}

function getFullPricegetFullPrice() {
    fullPrice = screenPrice + allServicePrices;
}

function getTitle() {
    title = title.split('');
    if (title[0] == " ") {
        title.splice(0, 1);
    }
    title = String(title[0]).toUpperCase() + title.splice(1).join('').toLocaleLowerCase();
    console.log(title);
}

function getServicePercentPrices() {
    servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
    console.log(servicePercentPrice);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

getTitle();
getFullPricegetFullPrice();
console.log(getAllServicePrices);
console.log(screens);
console.log(getRollbackMessage());
console.log(getServicePercentPrices());







