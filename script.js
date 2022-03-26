let title = "Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 20;
let rollback = 50;
let fullPrice = 100;
let adaptive = true;

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);

let price1 = " Стоимость верстки экранов ";
let price2 = " рублей / долларов / гривен / юани";
let price = price1 + screenPrice + price2;
console.log(price);

let full1 = " Стоимость разработки сайта ";
let full2 = " рублей / долларов / гривен / юани";
let full = full1 + fullPrice + full2;
console.log(full);

console.log(screens.toLowerCase().split(", "));

let otkat1 = "Процент отката посреднику за работу";
let otkat2 = fullPrice * (rollback / 100);
let otkat = otkat1 + otkat2;
console.log(otkat);








