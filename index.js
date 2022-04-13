const engineForm = document.querySelector('#engineForm');
const colorForm = document.querySelector('#colorForm');
const interiorForm = document.querySelector('#interiorForm');
const wheelsForm = document.querySelector('#wheelsForm');
const optionsForm = document.querySelector('#optionsForm');

(() => {
    engineForm.classList.add('hide');
    colorForm.classList.add('hide');
    interiorForm.classList.add('hide');
    wheelsForm.classList.add('hide');
    optionsForm.classList.add('hide');
})()

const engineButtonNav = document.querySelector('.engine');
engineButtonNav.addEventListener("click", () => {
    colorForm.classList.add('hide');
    interiorForm.classList.add('hide');
    wheelsForm.classList.add('hide');
    optionsForm.classList.add('hide');
    //Хочется оптимизировать код и убрать хотя бы первые 4 строки, в этой фукнции (и аналогично для color,interior,wheels,options), но не получается, см. вопрос ниже.

    engineForm.classList.toggle('hide');
    engineForm.classList.toggle('active');
    document.querySelector('#engineButton').classList.add('parameters__button-checked');
});

const colorButtonNav = document.querySelector('.color');
colorButtonNav.addEventListener("click", () => {
    engineForm.classList.add('hide');
    interiorForm.classList.add('hide');
    wheelsForm.classList.add('hide');
    optionsForm.classList.add('hide');

    colorForm.classList.toggle('hide');
    colorForm.classList.toggle('active');
    document.querySelector('#colorButton').classList.add('parameters__button-checked');
});

const interiorButtonNav = document.querySelector('.interior');
interiorButtonNav.addEventListener("click", () => {
    engineForm.classList.add('hide');
    colorForm.classList.add('hide');
    wheelsForm.classList.add('hide');
    optionsForm.classList.add('hide');

    interiorForm.classList.toggle('hide');
    interiorForm.classList.toggle('active');
    document.querySelector('#interiorButton').classList.add('parameters__button-checked');
});

const wheelsButtonNav = document.querySelector('.wheels');
wheelsButtonNav.addEventListener("click", () => {
    engineForm.classList.add('hide');
    colorForm.classList.add('hide');
    interiorForm.classList.add('hide');
    optionsForm.classList.add('hide');

    wheelsForm.classList.toggle('hide');
    wheelsForm.classList.toggle('active');
    document.querySelector('#wheelsButton').classList.add('parameters__button-checked');
});

const optionsButtonNav = document.querySelector('.options');
optionsButtonNav.addEventListener("click", () => {
    engineForm.classList.add('hide');
    colorForm.classList.add('hide');
    interiorForm.classList.add('hide');
    wheelsForm.classList.add('hide');

    optionsForm.classList.toggle('hide');
    optionsForm.classList.toggle('active');
    document.querySelector('#optionsButton').classList.add('parameters__button-checked');
});

// window.addEventListener('click', function (e) {
//     if (e.target.id !== 'engine') {
//         engineForm.classList.add('hide');
//         engineForm.classList.remove('active');
//     }
// });
// Вопрос: Если раскомментировать код выше, тогда блок engineForm будет исчезать при любом клике вне блока, что нам и нужно. НО функция engineButtonNav.addEventListener будет работать только при клике на gap (в css это .engine {row-gap: 15px;}) между title двигатель и кнопка. Связано ли это со всплытием и погружением событий?

//upd. Вопрос про gap остался, но использовать здесь такой вариант не получается, т.к. при выборе опций(мотора), клик же идет на область вне кнопки engine, и окно выбора закрывается (что в общем-то и логично, потому что написанная функция и должна это делать:))





//События для выбора мотора и цвета без учета в стоимость (для изменения текста и картинки) Подумать, как объединить с расчетом цены, чтобы не повторяться.
document.querySelector('.engineForm__select').addEventListener("change", () => {
    const engineMKP = document.querySelector('#engineMKP');
    const engineAKP = document.querySelector('#engineAKP');
    const engineAKP2 = document.querySelector('#engineAKP2');
    const engineType = document.querySelector('.engineForm__select').value;
    if (engineType == "transmissionAutomatic") {
        engineMKP.classList.add('hide');
        engineAKP.classList.remove('hide');
        engineAKP2.classList.remove('hide');
    } else if (engineType == "transmissionManual") {
        engineMKP.classList.remove('hide');
        engineAKP.classList.add('hide');
        engineAKP2.classList.add('hide');
    } else {
        engineMKP.classList.remove('hide');
        engineAKP.classList.remove('hide');
        engineAKP2.classList.remove('hide');
    }
});

document.querySelector(".colorForm__radio").addEventListener("change", () => {
    let colorRadioArr = document.querySelectorAll('input[name="colorRadio"]');
    if (colorRadioArr[0].checked) {
        document.getElementById("carImage").src =
            "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220324/ru-RU-ru/0Q0Q/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X0,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GX,4I2,4KC,4L6,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XP,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X2,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9T1,9Z0,9ZX,A8B,AV1,B37,CY9,DG6,E0A,EL0,ER1,G1A,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/4656873da24a20c64f57a440321d9682870a3052f2164c342a5de48889290148.jpg?width=1678";
    } else if (colorRadioArr[1].checked) {
        document.getElementById("carImage").src =
            "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220326/ru-RU-ru/7H7H/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X1,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GF,4I2,4KC,4L2,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XN,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X0,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9Z0,9ZX,A8B,AV1,B37,CY9,DG6,E0A,EL0,ER1,G0R,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/59cc2765c34333c5b3e1b87b90a97d6945654c14ebc9436fc8dc2096572ec34e.jpg?width=1678";
    } else {
        document.getElementById("carImage").src =
            "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220326/ru-RU-ru/0A0A/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X0,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GF,4I2,4KC,4L2,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XN,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X0,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9Z0,9ZX,A8B,AV1,B37,CQ9,DG6,E0A,EL0,ER1,G1A,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/8cfb53188ecb2da6b6c06ae0ccc19ef1f73d8f2519d1159e8c4c5c08c243cf8b.jpg?width=1678";
    }
});

document.querySelector(".engineForm__radio").addEventListener("change", () => {
    const carPrice = document.querySelector('input[name="engineRadio"]:checked').value;
    document.querySelector('.spec__car-price').innerHTML = carPrice + ' руб.';
    if (carPrice == 2134900) {
        document.querySelector('.spec__car-title').innerHTML = 'Tiguan Respect' + ' ' + document.querySelector('.engine1__title-price >.engine__title').innerHTML;
        document.getElementById('carEngineChoosen').innerHTML = document.querySelector('.spec__car-title').innerHTML;

    } else if (carPrice == 2264900) {
        document.querySelector('.spec__car-title').innerHTML = 'Tiguan Respect' + ' ' + document.querySelector('.engine2__title-price >.engine__title').innerHTML;
        document.getElementById('carEngineChoosen').innerHTML = document.querySelector('.spec__car-title').innerHTML;
    } else {
        document.querySelector('.spec__car-title').innerHTML = 'Tiguan Respect' + ' ' + document.querySelector('.engine3__title-price >.engine__title').innerHTML;
        document.getElementById('carEngineChoosen').innerHTML = document.querySelector('.spec__car-title').innerHTML;
    }

});

//Событие для расчета цены
document.querySelector(".main").addEventListener("change", () => {
    let carTotalPrice = 0;
    let carPrice = document.querySelector('input[name="engineRadio"]:checked').value;
    let colorPrice = document.querySelector('input[name="colorRadio"]:checked').value;
    let interiorPrice = document.querySelector('input[name="interiorRadio"]:checked').value;
    let wheelsPrice = document.querySelector('input[name="wheelsRadio"]:checked').value;

    let optionPrices = document.querySelectorAll(".optionsCheckboxPrice");
    let optionPricesSum = 0;
    for (let optionPrice of optionPrices) {
        let currentPrice;
        if (optionPrice.checked) {
            currentPrice = +(optionPrice.value);
        } else {
            currentPrice = 0;
        }
        optionPricesSum = optionPricesSum + currentPrice;
    }

    let additionsPrice = +colorPrice + +interiorPrice + +wheelsPrice + +optionPricesSum;
    document.querySelector('.spec__option-price').innerHTML = additionsPrice + ' руб.';
    carTotalPrice = +carPrice + +additionsPrice;
    document.querySelector(".spec__total-price-price").innerHTML = carTotalPrice + ' руб.';
});