let accordion = () => {
    const btn = document.querySelector('.module__info-show .plus__content');
    if (btn) {
        let count = 0;
        document.body.addEventListener('click', event => {
            for (let i = 0; i < btn.querySelectorAll('*').length; i++) {
                if (event.target == btn || event.target == btn.querySelectorAll('*')[i]) {
                    count++;
                    if (count%2 != 0) {
                        let descr = document.createElement('div');
                        descr.classList.add('module__info-descr');
                        document.querySelector('.module__info').insertBefore(descr, document.querySelector('.module__info-show ~ hr'));
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
                            descr.style.height = `${countHeight += height/50}px`;
                            if (countHeight >= height) {
                                descr.style.height = `${height}px`;
                                clearInterval(accordIn);
                            }
                        }
                        let accordIn = setInterval(frame, 10);
                    } else {
                        let descr = document.querySelector('.module__info-show ~ div'),
                            height = descr.getBoundingClientRect().height;
                        let countHeight = height;
                        let frame = () => {
                            descr.style.height = `${countHeight -= height/50}px`;
                            if (countHeight <= 0) {
                                descr.style.height = `0`;
                                clearInterval(accordOut);
                                document.querySelector('.module__info').removeChild(descr);
                            }
                        }
                        let accordOut = setInterval(frame, 10);
                    }
                    break;
                }
            }
        })
    }
}

module.exports = accordion;