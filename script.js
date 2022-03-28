'use strict';

let title = prompt("Как называется ваш проект?", "Project");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 1200);
console.log(screenPrice);
let rollback = 10;
let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseInt(prompt("Сколько это будет стоить?", 100));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = parseInt(prompt("Сколько это будет стоить?", 100));
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

// console.log(typeof (title));
// console.log(typeof (fullPrice));
// console.log(typeof (adaptive));
// console.log(screens.length);
// let price1 = " Стоимость верстки экранов ";
// let price2 = " рублей / долларов / гривен / юани";
// let price = price1 + screenPrice + price2;
// console.log(price);
// let full1 = " Стоимость разработки сайта ";
// let full2 = " рублей / долларов / гривен / юани";
// let full = full1 + fullPrice + full2;
// console.log(full);
// console.log(screens.toLowerCase().split(", "));

let otkat1 = "Процент отката посреднику за работу";
let otkat2 = fullPrice * (rollback / 100);
let otkat = otkat1 + otkat2;
console.log(otkat);
let servicePercentPrice = fullPrice - otkat2;
console.log(Math.ceil(servicePercentPrice));
if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}






