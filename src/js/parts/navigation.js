let navigation = () => {

    const page = document.querySelector('.page'),
        sidecontrol = document.querySelectorAll('.sidecontrol'),
        showupContent = document.querySelector('.showup__content');

    let currentPage = 1;

    //Отображение элементов страницы
    if (page.getBoundingClientRect().height < 960) {
        page.style.height = '960px';
        window.addEventListener('scroll', () => {
            sidecontrol.forEach(item => {
                item.style.top = `${document.documentElement.scrollTop}px`;
            });
        });
        showupContent.style.position = 'fixed';
    }
    //Показать нужную страницу
    let showPage = (n) => {
        let pageNames = [];

        page.childNodes.forEach(item => {
            if (item.classList) {
                pageNames.push(item.className);
            }
        });
        // скрываем все страницы
        pageNames.forEach(item => {
            document.querySelector(`.${item}`).style.display = 'none';
        });
        // показываем нужную страницу
        document.querySelector(`.${pageNames[n - 1]}`).style.display = 'block';
    }
    showPage(currentPage);
    //смена экранов
    document.body.addEventListener('click', event => {
        if (event.target == sidecontrol[currentPage - 1].querySelector('a') ||
                event.target == sidecontrol[currentPage - 1].querySelector('svg') ||
                event.target == sidecontrol[currentPage - 1].querySelectorAll('path')[0] ||
                event.target == sidecontrol[currentPage - 1].querySelectorAll('path')[1]) {
            currentPage = 1;
            showPage(currentPage);
        } else {
            if (currentPage < page.children.length) {
                currentPage++;
                showPage(currentPage);
            } else {
                currentPage = 1;
                showPage(currentPage);
            }
        }
    });    

    // document.querySelector('.difference__info').classList.add('fade');

}

module.exports = navigation;