let download = () => {

    downloadBtns = document.querySelectorAll('.download');

    if (downloadBtns.length != 0) {
        document.body.addEventListener('click', event => {
            for (let i = 0; i < downloadBtns.length; i++) {
                for (let j = 0; j < downloadBtns[i].querySelectorAll('*').length; j++) {
                    if (event.target == downloadBtns[i] || event.target == downloadBtns[i].querySelectorAll('*')[j]) {
                        let downloadFrame = document.createElement('iframe');
                        document.body.appendChild(downloadFrame);
                        downloadFrame.style.position = 'fixed';
                        downloadFrame.style.width = '100%';
                        downloadFrame.style.height = '100%';
                        downloadFrame.style.top = '0';
                        downloadFrame.style.left = '0';
                        downloadFrame.style.zIndex = '40';
                        downloadFrame.setAttribute('src', './dist/download/ECMAScript.pdf');
                        let downloadClose = document.createElement('div');
                        document.body.appendChild(downloadClose);
                        downloadClose.innerHTML = `&times;`;
                        downloadClose.classList.add('close__pdf');
                        downloadClose.style.zIndex = '50';
                        let closePdf = () => {
                            document.body.removeChild(downloadFrame);
                            downloadClose.removeEventListener('click', closePdf);
                            document.body.removeChild(downloadClose);
                        }
                        downloadClose.addEventListener('click', closePdf);
                        break;
                    }
                }
            }
        })
    }

}

module.exports = download;