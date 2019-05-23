let animation = () => {
    const difInfoCards = document.querySelector('.difference__info-cards'),
        difPhoto = document.querySelector('.difference__photo'),
        modInfo = document.querySelector('.modules__info'),
        joinIntro = document.querySelector('.join__intro'),
        joinEvolution = document.querySelector('.join__evolution'),
        feedTitle = document.querySelector('.feed .title'),
        feedColored = document.querySelector('.feed .colored'),
        scheduleWrapper = document.querySelector('.schedule__wrapper'),
        showupWrapper = document.querySelector('.showup__wrapper'),
        showupContent = document.querySelector('.showup__content');

    let fadeWithDelay = (elem) => {
        elem.classList.add('fade');
    }

    fadeWithDelay(difInfoCards);
    fadeWithDelay(difPhoto);
    fadeWithDelay(modInfo);
    fadeWithDelay(joinIntro);
    fadeWithDelay(joinEvolution);
    fadeWithDelay(feedTitle);
    fadeWithDelay(feedColored);
    fadeWithDelay(scheduleWrapper);
    fadeWithDelay(showupWrapper);
    fadeWithDelay(showupContent);

}

module.exports = animation;