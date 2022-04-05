'use strict';



const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    start: function () {
        appData.asking();
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrice();
        appData.getTitle();
        appData.getRollbackMessage();
        appData.logger();
    },

    asking: function () {
        appData.title = prompt("Как называется ваш проект?", " КаЛьКулятор Верстки");
        appData.screens = prompt("Какие типы экранов нужно разработать?", " Простые, Сложные");
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice));
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let price = 0;
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));
            sum += +price;
        }
        return sum;
    },
    getFullPrice: function () {
        return + appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrice: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
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
        console.log(appData.getAllServicePrices());
        console.log(appData.getFullPrice());
        console.log(appData.getServicePercentPrice());

        // for (let prop in appData) {
        //     console.log("appData." + prop + " = " + appData[prop]);
        // }
    },
    // allServicePrices = getAllServicePrices(),
    // fullPrice = getFullPrice(),
    // servicePercentPrice = getServicePercentPrice(),
};

appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice();
appData.servicePercentPrice = appData.getServicePercentPrice();


appData.start();





