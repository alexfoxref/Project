let play = () => {
    const btns = document.querySelectorAll('.play'),
        overlay = document.querySelector('.overlay');
        let video;
    if (btns.length != 0) {

        document.body.addEventListener('click', event => {
            for (let i = 0; i < btns.length; i++) {
                for (let j = 0; j < btns[i].querySelectorAll('*').length; j++) {
                    if (event.target == btns[i] || event.target == btns[i].querySelectorAll('*')[j]) {
                        overlay.style.display = 'flex';
                        overlay.querySelector('iframe').setAttribute('src', btns[i].getAttribute('data-url'));
                        video = document.querySelector('video');
                        console.log(video);
                    }
                }
            }
            if (event.target == overlay.querySelector('.close')) {
                overlay.style.display = 'none';
                overlay.querySelector('iframe').setAttribute('src', 'none');
            }
        })

        if (window.location.href.match(/modules\.html/)) {

        }
    }
    
}

module.exports = play;