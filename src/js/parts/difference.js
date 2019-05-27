let difference = column => {
    if (column) {
        column.querySelectorAll('.officer__card-item').forEach(item => {
            column.removeChild(item);
        })

        //функция создания новых карточек
        const cardNames = ['First', 'Second', 'Third'];
        let createCard = n => {
            let card = document.createElement('div'),
                margin,
                moveLength;
            card.classList.add('officer__card-item');
            //начальная позиция создается без анимации
            if (n == 1) {
                card.innerHTML = `
                <div class="card__counter">
                    <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.34" filter="url(#filter0_d)">
                        <path d="M4.824 11.6716V7.37561H6.048C8.12 7.37561 9.156 6.85161 9.156 5.80361C9.156 4.79561 8.128 4.28361 6.072 4.26761C5.44 4.26761 4.86 4.29961 4.332 4.36361L4.116 0.619608C4.9 0.515608 5.764 0.463608 6.708 0.463608C8.772 0.463608 10.384 0.907609 11.544 1.79561C12.712 2.68361 13.296 3.89161 13.296 5.41961C13.296 6.75561 12.88 7.85161 12.048 8.70761C11.216 9.55561 10.008 10.1316 8.424 10.4356L8.34 11.6716H4.824ZM6.576 12.9436C7.232 12.9436 7.804 13.1876 8.292 13.6756C8.788 14.1636 9.036 14.7396 9.036 15.4036C9.036 16.0756 8.788 16.6636 8.292 17.1676C7.804 17.6636 7.232 17.9116 6.576 17.9116C5.904 17.9116 5.32 17.6676 4.824 17.1796C4.336 16.6836 4.092 16.0956 4.092 15.4156C4.092 14.7516 4.336 14.1756 4.824 13.6876C5.32 13.1916 5.904 12.9436 6.576 12.9436Z" fill="#BEBEBE"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="0.0917969" y="0.463867" width="17.204" height="25.448" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </div>
                <div class="card__click">
                    <div>Click to show </div>
                    <div class="plus">
                        <div class="plus__content">
                            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.16699 1.00033C5.16699 0.540088 5.54009 0.166992 6.00033 0.166992C6.46056 0.166992 6.83366 0.540088 6.83366 1.00033V11.0003C6.83366 11.4606 6.46056 11.8337 6.00033 11.8337C5.54009 11.8337 5.16699 11.4606 5.16699 11.0003V1.00033Z" fill="white"/>
                                <path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                `;
                column.appendChild(card);
            } else if (n > 1 && n <= 4) {
                //функция добавления карточек с анимацией
                let cardMove = n => {
                    column.classList.add('onmove');
                    moveLength = column.children[1].getBoundingClientRect().height;
                    margin = column.children[1].getBoundingClientRect().top - column.children[0].getBoundingClientRect().bottom;
                    let position = margin;
                    let lastCardOpacity = 1;
                    // console.log(margin, moveLength);
                    let firstFrame = () => {
                        column.lastChild.style.marginTop = `${position += (margin + moveLength)/30}px`;
                        if (n == 4) {column.lastChild.style.opacity = `${lastCardOpacity -= 1/30}`};
                        if (position >= (margin + (margin + moveLength)/2)) {
                            clearInterval(firstMove);
                            column.lastChild.style.marginTop = `${margin + (margin + moveLength)/2}px`;
                            if (n == 4) {column.lastChild.style.opacity = `0.5`};
                            card.innerHTML = `
                                <div class="card__counter">0${n-1}</div>
                                <div class="card__descr">
                                    ${cardNames[n-2]} step with some text
                                    and explanation
                                </div>
                            `;
                            column.insertBefore(card, column.lastChild);
                            card.style.position = 'absolute';
                            card.style.marginTop = `${margin - (margin + moveLength)}px`;
                            card.style.opacity = '0';
                            if (n == 4) {
                                column.lastChild.style.position = 'absolute';
                                lastCardOpacity = 0.5;
                            }
                            position = margin + (margin + moveLength)/2;
                            let cardPosition = margin - (margin + moveLength),
                                cardOpacity = 0;
                            let secondFrame = () => {
                                card.style.marginTop = `${cardPosition += (margin + moveLength)/15}px`;
                                card.style.opacity = `${cardOpacity += 1/15}`;
                                column.lastChild.style.marginTop = `${position += (margin + moveLength)/30}px`;
                                if (n == 4) {column.lastChild.style.opacity = `${lastCardOpacity -= 1/30}`;}
                                if (position >= (2*margin + moveLength)) {
                                    clearInterval(secondMove);
                                    column.lastChild.style.marginTop = `${margin}px`;
                                    card.style.marginTop = `${margin}px`;
                                    card.style.opacity = '1';
                                    card.style.position = '';
                                    if (n == 4) {
                                        column.lastChild.style.opacity = `0`;
                                        column.removeChild(column.lastChild);
                                    }
                                    column.classList.remove('onmove');
                                }
                            }
                            let secondMove = setInterval(secondFrame, 10);
                        }
                    }
                    let firstMove = setInterval(firstFrame, 10);
                }
                cardMove(n);
            }
        }

        //добавим кликательную карточку в колонку
        createCard(column.children.length);
        
        document.body.addEventListener('click', event => {
            for (let i = 0; i < column.querySelectorAll('.plus *').length; i++) {
                if (event.target == column.querySelector('.plus') || 
                        event.target == column.querySelectorAll('.plus *')[i]) {
                    //запрещаем быстрые нажатия
                    if (!column.classList.contains('onmove')) {
                        createCard(column.children.length);
                    }
                    break;
                }
            }
        });
    }
}

module.exports = difference;