let form = (formBlock) => {
    if (formBlock) {

        //маска на email и дату
        let email = formBlock.querySelector('input[name="e-mail"]'),
            date = formBlock.querySelector('input[name="date"]');
        document.body.addEventListener('input', event => {
            if (event.target == email) {
                email.value = email.value.replace(/[а-яА-Яё]/, '');
            } else if (date && event.target == date) {
                date.value = date.value.replace(/[^\d\/\.]/, '');
            }
        });
        let sendForm = (formBlock) => {
            formBlock.addEventListener('submit', event => {
                event.preventDefault();

                let resp = (message) => {
                    respMessage = document.createElement('p');
                    document.querySelector('.form__message-window').appendChild(respMessage);
                    respMessage.classList.add('form__message');
                    if (message == 'success') {
                        respMessage.innerHTML = 'Your data was successfully send!';
                    } else if (message == 'failure') {
                        respMessage.innerHTML = 'Error server! Try it later.';
                    }
                    document.querySelector('.overlay__form').style.display = 'flex';
                    let listener = () => {
                        document.querySelector('.overlay__form').style.display = 'none';
                        document.querySelector('.form__message-window').removeChild(respMessage);
                        document.body.removeEventListener('click', listener);
                    }
                    document.body.addEventListener('click', listener);
                }

                let countInput = 0; 
                formBlock.querySelectorAll('input').forEach(item => {
                    if (item.value != '') {
                        item.style.backgroundColor = 'rgba(216, 216, 216, 0.3)';
                        countInput++;
                    }
                })
                //если все инпуты заполнены, то отправляем форму
                if (countInput == formBlock.querySelectorAll('input').length) {
                    //создаем данные в формате json
                    let formData = new FormData(formBlock),
                        obj = {};
                    formData.forEach((value, key) => {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    //отправляем форму
                    fetch('server.php',{
                            method: "POST",
                            headers: {'Content-Type': 'application/json'},
                            body: json
                    })
                        .then(response => {
                            if (response.status == 200) {
                                resp('success');
                            } else {
                                resp('failure');
                            }
                        })
                        .catch(() => {
                            console.error('Неуспех');
                        })
                } else {
                    //если не все инпуты заполнены, то помечаем их
                    formBlock.querySelectorAll('input').forEach(item => {
                        if (item.value == '') {
                            item.style.backgroundColor = 'rgba(207, 83, 83, 0.3)';
                        }
                    })
                }
            })
        }

        sendForm(formBlock);
    }
}

module.exports = form;