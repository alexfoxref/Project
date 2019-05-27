let play = () => {
    let btns = document.querySelectorAll('.play__circle'),
        blocks = document.querySelectorAll('.play'),
        overlay = document.querySelector('.overlay');

    let numBtn;

    //подключаем iframe api и создаем плеер
    let player;

    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    window.onYouTubeIframeAPIReady = function(){
        player = new YT.Player('frame', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
            }
        });
    };

    //создаем iframe
    let onPlayerReady = e => {
        let iframe = player.getIframe();
        iframe.setAttribute('width', '720');
        iframe.setAttribute('height', '480');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        iframe.setAttribute('heiallowfullscreenght', '');
        iframe.setAttribute('autoplay', '0');
        iframe.setAttribute('enablejsapi', '1');
        if (window.location.href.match(/modules\.html/)) {
            iframe.setAttribute('autoplay', '1');
        }
        //по нажатию на кнопки загружаем видео
        if (btns.length != 0) {
            document.body.addEventListener('click', event => {
                for (let i = 0; i < btns.length; i++) {
                    for (let j = 0; j < btns[i].querySelectorAll('*').length; j++) {
                        if (event.target == btns[i] || event.target == btns[i].querySelectorAll('*')[j]) {
                            if (!btns[i].classList.contains('closed')) {
                                overlay.style.display = 'flex';
                                numBtn = i;
                                player.loadVideoByUrl(`${blocks[i].getAttribute('data-url')}`);
                                if (iframe.getAttribute('autoplay') == '0') {
                                    e.target.stopVideo();
                                }
                                break;
                            }
                        }
                    }
                }
                if (event.target == overlay.querySelector('.close')) {
                    overlay.style.display = 'none';
                    player.stopVideo();
                }
            })   
        }
    }
    //блок для открытия заблокированного видео после окончания предыдущего
    let onPlayerStateChange = event => {
        if (event.data == YT.PlayerState.ENDED) {
            if (window.location.href.match(/modules\.html/)) {
                if (document.querySelectorAll('.module__video-item')[numBtn + 1] && btns[numBtn + 1].classList.contains('closed')) {
                    document.querySelectorAll('.module__video-item')[numBtn + 1].style.filter = 'none';
                    document.querySelectorAll('.module__video-item')[numBtn + 1].style.opacity = '1';
                    let dataUrl = blocks[numBtn + 1].getAttribute('data-url');
                    document.querySelectorAll('.module__video-item')[numBtn + 1].removeChild(blocks[numBtn + 1]);
                    let block = document.createElement('div');
                    block.classList.add('play');
                    block.setAttribute('data-url', `${dataUrl}`);
                    block.innerHTML = `
                        <div class="play__circle">
                            <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8L0 16V0L14 8Z" fill="#6D53AF"/>
                            </svg>
                        </div>
                        <div class="play__text">play video</div>
                    `;
                    document.querySelectorAll('.module__video-item')[numBtn + 1].appendChild(block);        
                    btns = document.querySelectorAll('.play__circle');
                    blocks = document.querySelectorAll('.play');
                }
            }
        }
    }
    
}

module.exports = play;