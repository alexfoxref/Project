let teach = () => {

    const hanson = document.querySelector('.hanson');

    let moveTeach = ms => {
        let listener = () => {
            moveTeach(15000);
        }
        hanson.removeEventListener('click', listener);
        hanson.style.bottom = `-${hanson.offsetHeight}px`;
        setTimeout(() => {
            let position = -hanson.offsetHeight;
            let moveFrame = () => {
                hanson.style.bottom = `${position += hanson.offsetHeight/50}px`;
                if (position >= 0) {
                    hanson.style.bottom = '0';
                    clearInterval(moveBlock);
                }
            }
            let moveBlock = setInterval(moveFrame, 10);
        }, ms);
        
        hanson.addEventListener('click', listener)
    }
    
    moveTeach(3000);

}

module.exports = teach;