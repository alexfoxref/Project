require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let navigation = require('./parts/navigation'),
        animation = require('./parts/animation');

    let currentPage;
    if (window.location.href.match(/#\d/)) {
        currentPage = +window.location.href.slice(-1);
    } else {
        currentPage = 1;
    }
    
    navigation(currentPage);
    animation();
})