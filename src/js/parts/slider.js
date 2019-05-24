let slider = () => {
    
    const slides = document.querySelectorAll('.showup__content-slider .card'),
        slider = document.querySelector('.showup__content-slider'),
        width = slider.querySelector('.card:nth-child(2)').getBoundingClientRect().left - 
                slider.querySelector('.card:nth-child(1)').getBoundingClientRect().left;

    //функция для делегирования события на элемент со всеми его потомками
    let clickElem = (elem, func) => {
        for (let i = 0; i < elem.querySelectorAll('*').length; i++) {
            if (event.target == elem || event.target == elem.querySelectorAll('*')[i]) {
                func();
                break;        
            }
        }
    }
    // перемещение слайдов
    let moveSlide = (n) => {
        // запретим по классу onmove нажатие на контрольные кнопки и на ссылку первого слайда
        document.querySelector('.showup__content-btns').classList.add('onmove');
        if (n > 0) {
            // при нажатии на next последний элемент добавляем в начало и причесываем классы
            slider.insertBefore(slider.querySelector('.card:last-child'), slider.querySelector('.card:first-child'));
            slider.querySelector('.card:first-child').style.marginLeft = `-${width}px`;
            slider.querySelector('.card:first-child').style.opacity = '0';
            slider.querySelector('.card:first-child').classList.add('onmove');
            slider.querySelector('.card:first-child').classList.add('card-active');
            slider.querySelector('.card:nth-child(2)').classList.remove('card-active');
            // анимация для next
            let countNext = +`-${width}`,
                countFade = 0;

            let frameNext = () => {
                slider.querySelector('.card:first-child').style.marginLeft = `${countNext += parseFloat((width/50)*n)}px`;
                slider.querySelector('.card:first-child').style.opacity = `${countFade += parseFloat((1/50)*n)}`;
                if (countNext >= 0) {
                    slider.querySelector('.card:first-child').style.marginLeft = '0';
                    clearInterval(moveNextAnimation);
                    slider.querySelector('.card:first-child').classList.remove('onmove');
                    document.querySelector('.showup__content-btns').classList.remove('onmove');
                }
            }
            let moveNextAnimation = setInterval(frameNext, 10);

        } else if (n < 0) {
            // при нажатии на prev сначала делаем анимацию, а затем перемещение первого слайда в конец
            slider.querySelector('.card:first-child').style.marginLeft = `0`;
            slider.querySelector('.card:first-child').style.opacity = '1';
            slider.querySelector('.card:first-child').classList.add('onmove');
            slider.querySelector('.card:first-child').classList.remove('card-active');
            slider.querySelector('.card:nth-child(2)').classList.add('card-active');
            // анимация для prev
            let countPrev = 0,
                countHide = 1;
            let framePrev = () => {
                slider.querySelector('.card:first-child').style.marginLeft = `${countPrev += parseFloat((width/50)*n)}px`;
                slider.querySelector('.card:first-child').style.opacity = `${countHide += parseFloat((1/50)*n)}`;
                if (countPrev <= -width) {
                    clearInterval(movePrevAnimation);
                    slider.querySelector('.card:first-child').classList.remove('onmove');
                    slider.querySelector('.card:first-child').style.marginLeft = `0`;
                    slider.querySelector('.card:first-child').style.opacity = '1';
                    slider.appendChild(slider.querySelector('.card:first-child'));
                    document.querySelector('.showup__content-btns').classList.remove('onmove');
                }
            }

            let movePrevAnimation = setInterval(framePrev, 10);
        }
    }
    //если слайды есть и на кнопках не висит onmove, то по клику на кнопки перемещаем слайды
    if (slides.length > 0) {
        document.querySelector('.showup__content-btns').addEventListener('click', event => {
            if (!document.querySelector('.showup__content-btns').classList.contains('onmove')) {
                clickElem(document.querySelector('.showup__content-btns .slick-prev'), () => {
                    moveSlide(-1);
                });
                clickElem(document.querySelector('.showup__content-btns .slick-next'), () => {
                    moveSlide(1);
                });
            }
        });
    }
}

module.exports = slider;