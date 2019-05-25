require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let navigation = require('./parts/navigation'),
        slider = require('./parts/slider');
    //к навигации
    let currentPage;
    if (window.location.href.match(/#\d/)) {
        currentPage = +window.location.href.slice(-1);
    } else {
        currentPage = 1;
    }
    //к слайдерам
    let widthShowup = 0,
        widthModules = 0,
        widthFeed = 0;
    if (document.querySelector(`.showup__content-slider`) && document.querySelector(`.modules__content-slider`)) {
        widthShowup = parseFloat(getComputedStyle(document.querySelectorAll(`.showup__content-slider .card`)[1]).width) + 
            parseFloat(getComputedStyle(document.querySelectorAll(`.showup__content-slider .card`)[1]).marginRight);
        widthModules = parseFloat(getComputedStyle(document.querySelectorAll(`.modules__content-slider .card`)[1]).width) + 
            parseFloat(getComputedStyle(document.querySelectorAll(`.modules__content-slider .card`)[1]).marginRight);
        widthFeed = parseFloat(getComputedStyle(document.querySelectorAll(`.feed__slider .feed__item`)[1]).width) + 
            parseFloat(getComputedStyle(document.querySelectorAll(`.feed__slider .feed__item`)[1]).marginRight);
    }
    //подключение
    navigation(currentPage);
    slider('showup__content-slider', 'showup__content-slider .card', 'showup__content-btns', widthShowup, 'card-active');
    slider('modules__content-slider', 'modules__content-slider .card', 'modules__info-btns', widthModules, 'card-active');
    slider('feed__slider', 'feed__item', 'feed__btns', widthFeed, 'feed__item-active');
})