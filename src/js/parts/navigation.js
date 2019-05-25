let navigation = (currentPage, teach) => {

    const page = document.querySelector('.page'),
        sidecontrol = document.querySelectorAll('.sidecontrol'),
        moduleapp = document.querySelector('.moduleapp'),
        plus = document.querySelector('.showup__content-explore .plus'),
        slider = document.querySelector('.showup__content-slider'),
        moduleControl = document.querySelectorAll('.module__info-controls');

    // установка значений страниц на навигационной панели
    let setNum = (currentPage) => {
        if (currentPage == 1) {
            moduleControl[currentPage - 1].querySelector('.prev__counter').textContent = `0${moduleapp.children.length}`;
            moduleControl[currentPage - 1].querySelector('.next__counter').textContent = `0${currentPage + 1}`;
        } else if (currentPage == moduleapp.children.length) {
            moduleControl[currentPage - 1].querySelector('.prev__counter').textContent = `0${currentPage - 1}`;
            moduleControl[currentPage - 1].querySelector('.next__counter').textContent = `0${1}`;
        } else {
            moduleControl[currentPage - 1].querySelector('.prev__counter').textContent = `0${currentPage - 1}`;
            moduleControl[currentPage - 1].querySelector('.next__counter').textContent = `0${currentPage + 1}`;
        }
    }
    //функция загрузки контента
    let loadContent = (pageStr, currentPage) => {
        //Показать нужную страницу
        let showPage = (n) => {
            let pageNames = document.querySelectorAll(`.${pageStr.className} > *`);
    
            // скрываем все страницы
            pageNames.forEach(item => {
                item.classList.add('hidePage');
                item.classList.remove('activePage');
            });

            // показываем нужную страницу
            pageNames[n - 1].classList.add('activePage');
            pageNames[n - 1].classList.remove('hidePage');
        }
        showPage(currentPage);
        //смена экранов
        //поднимаем контрольную панель выше страниц
        sidecontrol.forEach(item => {
            item.style.zIndex = '20';
            item.querySelector('a').style.zIndex = '30'
        })
        //делегируем события на элементы боковой панели и на нижнюю панель навигации
        document.body.addEventListener('click', event => {

            let movePage = (elem, n) => {
                for (let i = 0; i < elem.querySelectorAll('*').length; i++) {
                    if (event.target == elem || event.target == elem.querySelectorAll('*')[i]) {
                        currentPage = currentPage + n;
                        if (currentPage >= 1 && currentPage <= pageStr.children.length) {
                            showPage(currentPage);
                        } else if (currentPage < 1) {
                            currentPage = page.children.length;
                            showPage(currentPage);
                        } else {
                            currentPage = 1;
                            showPage(currentPage);
                        }
                        // активация всплытия окна учителя на 3 странице
                        if (pageStr == page && currentPage == 3) {
                            teach();                            
                        } 
                        break;
                    }
                }
            }

            sidecontrol[currentPage - 1].querySelectorAll('*').forEach(itemAll => {
                if (event.target == sidecontrol[currentPage - 1] || event.target == itemAll) {
                    const icon = sidecontrol[currentPage - 1].querySelectorAll('a')[0];
                    icon.querySelectorAll('*').forEach(item => {
                        if (event.target == icon || event.target == item) {
                            event.preventDefault();
                            let link = document.createElement('a');
                            link.setAttribute('href', 'index.html');
                            link.click();
                            link.remove();
                        }
                    });

                    const arrow = sidecontrol[currentPage - 1].querySelectorAll('a')[1];
                    movePage(arrow, 1);
                }
            });

            if (moduleControl.length > 0) {
                movePage(moduleControl[currentPage - 1].querySelector('.prev'), -1);
                movePage(moduleControl[currentPage - 1].querySelector('.next'), 1);
                setNum(currentPage);
            };
        });
    }

    if (page) {
        loadContent(page, 1);
        // переход по плюсику на слайдере первого экрана
        document.body.addEventListener('click', event => {
            plus.querySelectorAll('*').forEach(item => {
                if (event.target == item || event.target == plus) {
                    let link = document.createElement('a');
                    link.setAttribute('href', 'modules.html');
                    link.click();
                    link.remove();
                }
            })
        });
        // переход по слайдам на слайдере первого экрана
        slider.addEventListener('click', (event) => {
            slider.querySelectorAll('.showup__content-slider .card').forEach(itemCard => {
                if (!itemCard.classList.contains('onmove')) {
                    for (let i = 0; i < itemCard.querySelectorAll('*').length; i++) {
                        if (event.target == itemCard || event.target == itemCard.querySelectorAll('*')[i]) {
                            event.preventDefault();
                            let pageLink = +itemCard.getAttribute('href').slice(-1);
                            let link = document.createElement('a');
                            link.setAttribute('href', `modules.html#${pageLink}`);
                            link.click();
                            link.remove();
                            break;
                        }
                    }
                }
            })
        });
    } else if (moduleapp) {
        loadContent(moduleapp, currentPage);
        setNum(currentPage);
    }
}

module.exports = navigation;