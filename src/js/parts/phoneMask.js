// Функция телефонной маски, аргументы: элемент, начальные цифры без +
let phoneMask = (input, start) => {
    if (input) {
        let string = '',
            numStr = '';

        let p = ('+' + start).length;

        input.addEventListener('input', () => {
            // Вводим только цифры, пробел и +
            string = input.value;
            while ( /[^\d+]/.exec(string) ) {
                string = string.replace(/[^\d+]/, '');
                input.value = string;
            }
            // + может быть только на первой позиции
            if (/\+/.exec(string) != null) {
                if (/\+/.exec(string).index == 0) {
                    string = string.replace(/\+/g, '');
                    string = '+' + string;
                    input.value = string;
                } else {
                    string = string.replace(/\+/g, '');
                    input.value = string;
                }
            }
            // строка в инпуте всегда показывает в начале +start
            let reg = new RegExp(('\\+' + start), '');
            if (p < 2) {console.log('ошибка')}

            if (reg.exec(string) == null || reg.exec(string).index != 0) {
                if (p >= string.length) {
                    for (let i = 0; i < string.length; i++) {
                        if (string[i] != ('+' + start)[i]) {
                            string = string.replace(string, `+${start} ${string.slice(i)}`);
                            input.value = string;
                            break;
                        }
                    }
                } else {
                    for (let i = 0; i < p; i++) {
                        if (string[i] != ('+' + start)[i]) {
                            string = string.replace(string, `+${start} ${string.slice(i)}`);
                            input.value = string;
                            break;
                        }
                    }
                }
            } else {
                while (reg.exec(string) == null  || reg.exec(string).index != 0) {
                    string = string.replace(string, `+${start} ${string}`);
                }
                string = string.replace(string, `+${start} ${string.slice(p)}`);
                input.value = string;
            }
            // количество чисел в инпуте меньше или равно 11
            numStr = string.replace(/[^\d]/g, '');
            if (numStr.length > 11) {
                numStr = numStr.slice(0, 11);
            }
            // внешний вид в зависимости от длины
            if (numStr.length > 0 && numStr.length <= (p - 1)) {
                string = `+${numStr}`;
                input.value = string;
            }
            if (numStr.length > (p - 1) && numStr.length <= 4) {
                string = numStr.replace(numStr, `+${numStr.slice(0, p - 1)} (${numStr.slice(p - 1)})`);
                input.value = string;
            }
            let numStr4 = numStr.slice(0, 4);
            if (numStr.length > 4 && numStr.length <= 7) {
                string = numStr.replace(/(\d{4})(\d*)/, `+${numStr4.slice(0, p - 1)} (${numStr4.slice(p - 1)}) $2`);
                input.value = string;
            }
            if (numStr.length > 7 && numStr.length <= 9) {
                string = numStr.replace(/(\d{4})(\d{3})(\d*)/, `+${numStr4.slice(0, p - 1)} (${numStr4.slice(p - 1)}) $2-$3`);
                input.value = string;
            }
            if (numStr.length > 9 && numStr.length <= 11) {
                string = numStr.replace(/(\d{4})(\d{3})(\d{2})(\d*)/, `+${numStr4.slice(0, p - 1)} (${numStr4.slice(p - 1)}) $2-$3-$4`);
                input.value = string;
            }
        });
        
        // при нажатии backspace
        input.addEventListener('keydown', (event) => {
            if (event.keyCode == 8) {
                event.preventDefault();
                string = input.value;
                numStr = string.replace(/[^\d]/g, '');
                numStr = numStr.slice(0, numStr.length - 1);

                if (numStr.length == 0) {
                    string = string.slice(0, (string.length - 1));
                    input.value = string;
                }
                if (numStr.length > 0 && numStr.length <= (p - 1)) {
                    string = `+${numStr}`;
                    input.value = string;
                }
                if (numStr.length > (p - 1) && numStr.length <= 4) {
                    string = numStr.replace(numStr, `+${numStr.slice(0, p - 1)} (${numStr.slice(p - 1)})`);
                    input.value = string;
                }
                let numStr4 = numStr.slice(0, 4);
                if (numStr.length > 4 && numStr.length <= 7) {
                    string = numStr.replace(/(\d{4})(\d*)/, `+${numStr4.slice(0, p - 1)} (${numStr4.slice(p - 1)}) $2`);
                    input.value = string;
                }
                if (numStr.length > 7 && numStr.length <= 9) {
                    string = numStr.replace(/(\d{4})(\d{3})(\d*)/, `+${numStr4.slice(0, p - 1)} (${numStr4.slice(p - 1)}) $2-$3`);
                    input.value = string;
                }
                if (numStr.length > 9 && numStr.length <= 11) {
                    string = numStr.replace(/(\d{4})(\d{3})(\d{2})(\d*)/, `+${numStr4.slice(0, p - 1)} (${numStr4.slice(p - 1)}) $2-$3-$4`);
                    input.value = string;
                }
            }
        });
    }
}

module.exports = phoneMask