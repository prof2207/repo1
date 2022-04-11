'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');


const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle();

        startBtn.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {

        // ***** не уверен, с синтаксисом 47 строки
        if (appData.screenPrice == 0 || appData.screens == 0) {
            startBtn.removeEventListener('click', appData.start);
        }
        appData.addScreens();
        appData.addServices();

        appData.addPrices();
        // appData.getServicePercentPrice();

        // appData.getRollback();

        appData.logger();
        appData.showResult();
    },
    showResult: function () {
        total.value = appData.screenPrice;

        // ***** показывает введенное значение, но не добавляет ("+") экраны
        totalCount.value;

        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;

        totalCountRollback.value = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            console.log(input.value);
            totalCount.value = +input.value;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });

        });

    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    // getRollback: function () {
    //     appData.rollback = inputRangeValue.textContent;
    // },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }
        appData.fullPrice = + appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    },
    // ***********данную логику закинул сразу в showResult
    // getServicePercentPrice: function () {
    //     appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    // },




    // ***********бьет ошибку по inputRange.addEventListener не могу понять или синтаксис страдает,
    //  или надо переместить внутрь другого метода???
    // getRange: function (event) {
    //     console.dir(event.type);
    //     inputRangeValue.textContent = event.target.value;
    // },
    // inputRange.addEventListener('input', appData.getRange),
    // inputRange.addEventListener('change', appData.getRange),


    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
};

appData.init();


