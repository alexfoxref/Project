require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let navigation = require('./parts/navigation'),
        animation = require('./parts/animation');

    navigation();
    animation();
})