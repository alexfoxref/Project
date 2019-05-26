let form = (formBlock) => {
    if (formBlock) {
        const formBtn = formBlock.querySelector('.btn');

        let sendForm = (formBlock) => {
            formBlock.addEventListener('submit', event => {
                event.preventDefault();
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
                            
                        } else {
                            
                        }
                    })
                    .catch(() => {
                        console.error('Неуспех');
                    })
    
            })
        }
        sendForm(formBlock);
    }
}

module.exports = form;