let accordion = () => {
    const btn = document.querySelectorAll('.module__info-show .plus');
    if (btn.length != 0) {
        let count = [];
        for (let i = 0; i < btn.length; i++) {
            count[i] = 0;
        }
        document.body.addEventListener('click', event => {
            for (let j = 0; j < btn.length; j++) {
                for (let i = 0; i < btn[j].querySelectorAll('*').length; i++) {
                    if (event.target == btn[j] || event.target == btn[j].querySelectorAll('*')[i]) {
                        //запрещаем быстрые нажатия
                        if (!btn[j].classList.contains('onmove')) {
                            count[j]++;
                            if (count[j]%2 != 0) {
                                btn[j].classList.add('onmove');
                                let descr = document.createElement('div');
                                descr.classList.add('module__info-descr');
                                document.querySelectorAll('.module__info')[j].insertBefore(descr, document.querySelectorAll('.module__info-show ~ hr')[j]);
                                descr.textContent = `This module focuses on how to leverage your local muscle and 
                                        generate leads in your local community. Topics include areas to develop 
                                        like: your local gym, church, favorite local restaurant or bar, etc.. 
                                        Along with local business networking groups, community involvement and 
                                        charity work, local businesses (lender express and lender advantage), local 
                                        lunch n learns, first time homebuyer education, VA and or Reno events, and 
                                        more.`;
                                //анимация появления
                                let height = descr.getBoundingClientRect().height;
                                descr.style.height = '0';
                                descr.style.overflow = 'hidden';
                                let countHeight = 0;
                                let frame = () => {
                                    descr.style.height = `${countHeight += height/30}px`;
                                    if (countHeight >= height) {
                                        descr.style.height = `${height}px`;
                                        clearInterval(accordIn);
                                        btn[j].classList.remove('onmove');
                                    }
                                }
                                let accordIn = setInterval(frame, 10);
                            } else {
                                btn[j].classList.add('onmove');
                                let descr = document.querySelectorAll('.module__info')[j].querySelector('.module__info-show ~ div'),
                                    height = descr.getBoundingClientRect().height;
                                let countHeight = height;
                                let frame = () => {
                                    descr.style.height = `${countHeight -= height/30}px`;
                                    if (countHeight <= 0) {
                                        descr.style.height = `0`;
                                        clearInterval(accordOut);
                                        document.querySelectorAll('.module__info')[j].removeChild(descr);
                                        btn[j].classList.remove('onmove');
                                    }
                                }
                                let accordOut = setInterval(frame, 10);
                            }
                            break;
                        }
                    }
                }
            } 
        })
    }
}

module.exports = accordion;