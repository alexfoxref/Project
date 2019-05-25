//можно ввести параметр стиль анимации, а не сравнивать параметр с классом, но пока так
let slider = (slider, card, control, width, active) => {
    
    const sliderWin = document.querySelector(`.${slider}`),
        controlWin = document.querySelector(`.${control}`);

    //функция для делегирования события на элемент со всеми его потомками
    let clickElem = (elem, func) => {
        for (let i = 0; i < elem.querySelectorAll('*').length; i++) {
            if (event.target == elem || event.target == elem.querySelectorAll('*')[i]) {
                func();
                break;        
            }
        }
    }
    let moveLength = 0;
    if (sliderWin && card == 'feed__item') {
        moveLength = parseFloat(getComputedStyle(document.querySelectorAll(`.feed__slider .feed__item`)[0]).width) + 
            parseFloat(getComputedStyle(document.querySelectorAll(`.feed__slider .feed__item`)[0]).marginRight);
    }
    // перемещение слайдов
    let moveSlide = (n) => {
        // запретим по классу onmove нажатие на контрольные кнопки и на ссылку первого слайда
        controlWin.classList.add('onmove');
        let countBtn,
            countHide,
            countIn = 0;
        if (n > 0) {
            // при нажатии на prev последний элемент добавляем в начало и причесываем классы
            sliderWin.insertBefore(sliderWin.querySelector(`.${card}:last-child`), sliderWin.querySelector(`.${card}:first-child`));
            if (card == 'feed__item') {
                sliderWin.querySelector(`.${card}:first-child`).style.marginLeft = `${width}px`;
                sliderWin.querySelector(`.${card}:first-child`).style.position = 'absolute';
                sliderWin.querySelector(`.${card}:nth-child(2)`).style.marginLeft = `0`;
            } else {
                sliderWin.querySelector(`.${card}:first-child`).style.marginLeft = `-${width}px`;
            }
            sliderWin.querySelector(`.${card}:first-child`).classList.add(active);
            sliderWin.querySelector(`.${card}:nth-child(2)`).classList.remove(active);
            sliderWin.querySelector(`.${card}:first-child`).style.opacity = '0';
            sliderWin.querySelector(`.${card}:first-child`).classList.add('onmove');
            // анимация для prev
            countHide = 0;
            if (card == 'feed__item') {
                countIn = 0;
                countBtn = +`${width}`;
            } else {
                countBtn = +`-${width}`;
            }

            let framePrev = () => {
                if (card == 'feed__item') {
                    sliderWin.querySelector(`.${card}:first-child`).style.marginLeft = `${countBtn -= parseFloat((width/50)*n)}px`;
                    sliderWin.querySelector(`.${card}:nth-child(2)`).style.marginLeft = `${countIn += parseFloat((moveLength/50)*n)}px`;
                } else {
                    sliderWin.querySelector(`.${card}:first-child`).style.marginLeft = `${countBtn += parseFloat((width/50)*n)}px`;
                }
                sliderWin.querySelector(`.${card}:first-child`).style.opacity = `${countHide += parseFloat((1/50)*n)}`;
                if ((card != 'feed__item' && countBtn >= 0) ||
                        (card == 'feed__item' && countIn >= moveLength)) {
                    if (card == 'feed__item') {
                        sliderWin.querySelector(`.${card}:first-child`).style.position = '';
                        sliderWin.querySelector(`.${card}:nth-child(2)`).style.marginLeft = `0`;

                    }
                    sliderWin.querySelector(`.${card}:first-child`).style.marginLeft = '0';
                    clearInterval(movePrevAnimation);
                    sliderWin.querySelector(`.${card}:first-child`).classList.remove('onmove');
                    controlWin.classList.remove('onmove');
                }
            }
            let movePrevAnimation = setInterval(framePrev, 10);

        } else if (n < 0) {
            // при нажатии на next сначала делаем анимацию, а затем перемещение первого слайда в конец
            sliderWin.querySelector(`.${card}:first-child`).style.marginLeft = `0`;
            sliderWin.querySelector(`.${card}:first-child`).style.opacity = '1';
            sliderWin.querySelector(`.${card}:first-child`).classList.add('onmove');
            sliderWin.querySelector(`.${card}:first-child`).classList.remove(active);
            sliderWin.querySelector(`.${card}:nth-child(2)`).classList.add(active);
            if (card == 'feed__item') {
                sliderWin.querySelector(`.${card}:first-child`).style.position = 'absolute';
                sliderWin.querySelector(`.${card}:nth-child(2)`).style.marginLeft = moveLength;
            }
            // анимация для next
            countBtn = 0;
            countHide = 1;
            if (card == 'feed__item') {
                countIn = moveLength;
            }
            let frameNext = () => {
                if (card == 'feed__item') {
                    sliderWin.querySelector(`.${card}:first-child`).style.marginLeft = `${countBtn -= parseFloat((width/50)*n)}px`;
                    sliderWin.querySelector(`.${card}:nth-child(2)`).style.marginLeft = `${countIn += parseFloat((moveLength/50)*n)}px`;
                } else {
                    sliderWin.querySelector(`.${card}:first-child`).style.marginLeft = `${countBtn += parseFloat((width/50)*n)}px`;
                }
                sliderWin.querySelector(`.${card}:first-child`).style.opacity = `${countHide += parseFloat((1/50)*n)}`;
                if ((card != 'feed__item' && countBtn <= -width) ||
                        (card == 'feed__item' && countIn <= 0)) {
                    clearInterval(moveNextAnimation);
                    sliderWin.querySelector(`.${card}:first-child`).classList.remove('onmove');
                    sliderWin.querySelector(`.${card}:first-child`).style.marginLeft = `0`;
                    sliderWin.querySelector(`.${card}:first-child`).style.opacity = '1';
                    if (card == 'feed__item') {
                        sliderWin.querySelector(`.${card}:nth-child(2)`).style.marginLeft = `0`;
                        sliderWin.querySelector(`.${card}:first-child`).style.position = '';
                    }
                    sliderWin.appendChild(sliderWin.querySelector(`.${card}:first-child`));
                    controlWin.classList.remove('onmove');
                }
            }

            let moveNextAnimation = setInterval(frameNext, 10);
        }
    }
    //если слайды есть и на кнопках не висит onmove, то по клику на кнопки перемещаем слайды
    if (document.querySelectorAll(`.${card}`).length > 0) {
        controlWin.addEventListener('click', event => {
            if (!controlWin.classList.contains('onmove')) {
                clickElem(controlWin.querySelector('.slick-prev'), () => {
                    moveSlide(1);
                });
                clickElem(controlWin.querySelector('.slick-next'), () => {
                    moveSlide(-1);
                });
            }
        });
    }
}

module.exports = slider;