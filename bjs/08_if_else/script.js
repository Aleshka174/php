let minValue;
let maxValue;
let answerNumber;
let orderNumber;
let gameRun;
let number = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'];
let desemberNumber = ['', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let desember = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let hungred = ['', 'сто', 'двести', 'тристо', 'четыресто', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
let minus = 'минус';
let buttonOk= document.getElementById('btnOk');
buttonOk.addEventListener('click', function () {
    const inputWindowMin = document.getElementById('inputWindowMin').value;
    const inputWindowMax = document.getElementById('inputWindowMax').value;
    const windowText = document.getElementById('windowText');
    minValue = parseInt(inputWindowMin);
    maxValue = parseInt(inputWindowMax);
    minValue = minValue || 0;
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = maxValue || 100;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    windowText.innerText=`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`; 
    answerNumber  = Math.floor(minValue + maxValue) / 2;
    orderNumber = 1;
    gameRun = true;
    let resultHungred = parseInt(Math.abs(answerNumber/100));
    let resultDes = parseInt(Math.abs((answerNumber - parseInt(answerNumber/100)*100)/10));
    let resultNumber = parseInt(Math.abs((answerNumber%10)));
    let allText; 
    const i= resultHungred;
    const a= resultDes;
    const b= resultNumber;
    if (answerNumber < 0){
        if(a==1){
        allText = `${minus} ${hungred[i]} ${desemberNumber[b]}`;
        }else {allText = `${minus} ${hungred[i]} ${desember[a]} ${number[b]}`;} 
    }else {
        if(a==1){
        allText = `${hungred[i]} ${desemberNumber[b]}`;
        }else {allText = `${hungred[i]} ${desember[a]} ${number[b]}`;}
    };
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    if (allText.length<20){
        answerField.innerText = `Вы загадали число ${allText}?`;
    }else {answerField.innerText = `Вы загадали число ${answerNumber}?`};
 });

document.getElementById('btnRetry').addEventListener('click', function () {
    windowText.innerText=`Игра угадайка!!!`;
    document.getElementById('inputWindowMin').value = `Введите минимальное число`;
    document.getElementById('inputWindowMax').value = `Введите максимальное число`;
    gameRun = false;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom == 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let resultHungred = parseInt(Math.abs(answerNumber/100));
            let resultDes = parseInt(Math.abs((answerNumber - parseInt(answerNumber/100)*100)/10));
            let resultNumber = parseInt(Math.abs((answerNumber%10)));
            let allText; 
            const i= resultHungred;
            const a= resultDes;
            const b= resultNumber;
            if (answerNumber < 0){
                if(a==1){
                allText = `${minus} ${hungred[i]} ${desemberNumber[b]}`;
                }else {allText = `${minus} ${hungred[i]} ${desember[a]} ${number[b]}`;} 
            }else {
                if(a==1){
                allText = `${hungred[i]} ${desemberNumber[b]}`;
                }else {allText = `${hungred[i]} ${desember[a]} ${number[b]}`;}
            };
            const phraseRandom = Math.round( Math.random()*3);
            let answerText;  
            if (allText.length<20){
                if (phraseRandom == 1) { answerText =`Вы загадали число ${allText }?`
                }else if (phraseRandom == 2) { answerText =`Да это легко! Ты загадал ${allText }, верно?`
                }else { answerText =`Наверное, это число ${allText }?`};
            }else {
                if (phraseRandom == 1) { answerText =`Вы загадали число ${answerNumber }?`
                }else if (phraseRandom == 2) { answerText =`Да это легко! Ты загадал ${answerNumber }, верно?`
                }else { answerText =`Наверное, это число ${answerNumber }?`};
            }; 
            const answerPhrase = answerText;
            answerField.innerText = answerPhrase;        
               
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom == 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let resultHungred = parseInt(Math.abs(answerNumber/100));
            let resultDes = parseInt(Math.abs((answerNumber - parseInt(answerNumber/100)*100)/10));
            let resultNumber = parseInt(Math.abs((answerNumber%10)));
            let allText; 
            const i= resultHungred;
            const a= resultDes;
            const b= resultNumber;
            if (answerNumber < 0){
                if(a==1){
                allText = `${minus} ${hungred[i]} ${desemberNumber[b]}`;
                }else {allText = `${minus} ${hungred[i]} ${desember[a]} ${number[b]}`;} 
            }else {
                if(a==1){
                allText = `${hungred[i]} ${desemberNumber[b]}`;
                }else {allText = `${hungred[i]} ${desember[a]} ${number[b]}`;}
            };
            const phraseRandom = Math.round( Math.random()*3);
            let answerText;  
            if (allText.length<20){
                if (phraseRandom == 1) { answerText =`Вы загадали число ${allText }?`
                }else if (phraseRandom == 2) { answerText =`Да это легко! Ты загадал ${allText }, верно?`
                }else { answerText =`Наверное, это число ${allText }?`};
            }else {
                if (phraseRandom == 1) { answerText =`Вы загадали число ${answerNumber }?`
                }else if (phraseRandom == 2) { answerText =`Да это легко! Ты загадал ${answerNumber }, верно?`
                }else { answerText =`Наверное, это число ${answerNumber }?`};
            }; 
            const answerPhrase = answerText;
            answerField.innerText = answerPhrase; 
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*3);
        let answerText;            
        if (phraseRandom == 1) { answerText =`Я всегда угадываю\n\u{1F60E}`
        }else if (phraseRandom == 2) { answerText =`Я же говорю, что легко\n\u{1F60E}`
        }else { answerText =`Может загадаешь, что-нибудь по-сложнее\n\u{1F60E}`};
        const answerPhrase = answerText;
        answerField.innerText = answerPhrase;        
        gameRun = false;
    }
})

