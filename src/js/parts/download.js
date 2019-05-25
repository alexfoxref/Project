let download = () => {

    downloadBtns = document.querySelectorAll('.download');

    if (downloadBtns.length != 0) {
        document.body.addEventListener('click', event => {
            for (let i = 0; i < downloadBtns.length; i++) {
                for (let j = 0; j < downloadBtns[i].querySelectorAll('*').length; j++) {
                    if (event.target == downloadBtns[i] || event.target == downloadBtns[i].querySelectorAll('*')[j]) {
                        let link = document.createElement('a');
                        link.setAttribute('href', './dist/download/ECMAScript.pdf');
                        link.setAttribute('download', '');
                        link.click();
                        link.remove();
                        break;
                    }
                }
            }
        })
    }

}

module.exports = download;