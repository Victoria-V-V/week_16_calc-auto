(() => {
    engineForm.classList.add('hide');
    colorForm.classList.add('hide');
    interiorForm.classList.add('hide');
    wheelsForm.classList.add('hide');
    optionsForm.classList.add('hide');
})()

engine.onclick = function () {
    colorForm.classList.add('hide');
    interiorForm.classList.add('hide');
    wheelsForm.classList.add('hide');
    optionsForm.classList.add('hide');

    engineForm.classList.toggle('hide');
    engineForm.classList.toggle('active');
    engineButton.classList.add('parameters__button-checked');
}

color.onclick = function () {
    engineForm.classList.add('hide');
    interiorForm.classList.add('hide');
    wheelsForm.classList.add('hide');
    optionsForm.classList.add('hide');

    colorForm.classList.toggle('hide');
    colorForm.classList.toggle('active');
    colorButton.classList.add('parameters__button-checked');
}

interior.onclick = function () {
    engineForm.classList.add('hide');
    colorForm.classList.add('hide');
    wheelsForm.classList.add('hide');
    optionsForm.classList.add('hide');

    interiorForm.classList.toggle('hide');
    interiorForm.classList.toggle('active');
    interiorButton.classList.add('parameters__button-checked');
}

wheels.onclick = function () {
    engineForm.classList.add('hide');
    colorForm.classList.add('hide');
    interiorForm.classList.add('hide');
    optionsForm.classList.add('hide');

    wheelsForm.classList.toggle('hide');
    wheelsForm.classList.toggle('active');
    wheelsButton.classList.add('parameters__button-checked');
}

options.onclick = function () {
    engineForm.classList.add('hide');
    colorForm.classList.add('hide');
    interiorForm.classList.add('hide');
    wheelsForm.classList.add('hide');

    optionsForm.classList.toggle('hide');
    optionsForm.classList.toggle('active');
    optionsButton.classList.add('parameters__button-checked');
}

// window.addEventListener('click', function (e) {
//     if (e.target.id !== 'engine') {
//         engineForm.classList.add('hide');
//         engineForm.classList.remove('active');
//     }
// });

//Вопрос: Если раскомментировать код выше, тогда блок engineForm будет исчезать при любом клике вне блока, что нам  инужно. НО функция engine.onclick = function () будет работать только на gap между title двигатель и кнопка. Почему?

document.getElementById('engineFormInput').onchange = function () {
    const value = document.getElementById('engineFormInput').value;
    if (value == "transmissionAutomatic") {
        engineMKP.classList.add('hide');
        engineAKP.classList.remove('hide');
        engineAKP2.classList.remove('hide');
    } else if (value == "transmissionManual") {
        engineMKP.classList.remove('hide');
        engineAKP.classList.add('hide');
        engineAKP2.classList.add('hide');
    } else {
        engineMKP.classList.remove('hide');
        engineAKP.classList.remove('hide');
        engineAKP2.classList.remove('hide');
    }
}
// document.getElementById('colorFormradiobtn').onchange = function () {
//     if (document.getElementById('color1').checked) {
//         console.log('aaa');
//     } else if (document.getElementById('color2').checked) {
//         console.log('bbb');
//     }
// }


color1.onclick = function () {
    document.getElementById("carImage").src =
        "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220324/ru-RU-ru/0Q0Q/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X0,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GX,4I2,4KC,4L6,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XP,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X2,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9T1,9Z0,9ZX,A8B,AV1,B37,CY9,DG6,E0A,EL0,ER1,G1A,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/4656873da24a20c64f57a440321d9682870a3052f2164c342a5de48889290148.jpg?width=1678";
}

color2.onclick = function () {
    document.getElementById("carImage").src =
        "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220326/ru-RU-ru/7H7H/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X1,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GF,4I2,4KC,4L2,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XN,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X0,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9Z0,9ZX,A8B,AV1,B37,CY9,DG6,E0A,EL0,ER1,G0R,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/59cc2765c34333c5b3e1b87b90a97d6945654c14ebc9436fc8dc2096572ec34e.jpg?width=1678";
}

color3.onclick = function () {
    document.getElementById("carImage").src =
        "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220326/ru-RU-ru/0A0A/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X0,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GF,4I2,4KC,4L2,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XN,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X0,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9Z0,9ZX,A8B,AV1,B37,CQ9,DG6,E0A,EL0,ER1,G1A,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/8cfb53188ecb2da6b6c06ae0ccc19ef1f73d8f2519d1159e8c4c5c08c243cf8b.jpg?width=1678";
}

// let colorRadioArr = document.querySelectorAll('input[name="colorRadio"]');
// if (colorRadioArr[0].checked) {
//     document.getElementById("carImage").src =
//         "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220324/ru-RU-ru/0Q0Q/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X0,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GX,4I2,4KC,4L6,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XP,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X2,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9T1,9Z0,9ZX,A8B,AV1,B37,CY9,DG6,E0A,EL0,ER1,G1A,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/4656873da24a20c64f57a440321d9682870a3052f2164c342a5de48889290148.jpg?width=1678";
// } else if (colorRadioArr[1].checked) {
//     document.getElementById("carImage").src =
//         "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220326/ru-RU-ru/7H7H/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X1,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GF,4I2,4KC,4L2,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XN,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X0,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9Z0,9ZX,A8B,AV1,B37,CY9,DG6,E0A,EL0,ER1,G0R,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/59cc2765c34333c5b3e1b87b90a97d6945654c14ebc9436fc8dc2096572ec34e.jpg?width=1678";
// } else {
//     document.getElementById("carImage").src =
//         "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220326/ru-RU-ru/0A0A/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X1,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GF,4I2,4KC,4L2,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XN,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X0,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9Z0,9ZX,A8B,AV1,B37,CY9,DG6,E0A,EL0,ER1,G0R,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/eca4a036d866f9391b6aea4f9538685f8f1b88152d837457e8b02e7ae2e0be1f.jpg?width=559";
// }




//     .colorForm_radio_btn input[type = radio]: checked

// if (document.getElementById('color3').checked) {
//     document.getElementById("carImage").src =
//         "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220326/ru-RU-ru/0A0A/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X1,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GF,4I2,4KC,4L2,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XN,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X0,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9Z0,9ZX,A8B,AV1,B37,CY9,DG6,E0A,EL0,ER1,G0R,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/eca4a036d866f9391b6aea4f9538685f8f1b88152d837457e8b02e7ae2e0be1f.jpg?width=559";
// }



// if (document.getElementById('color1').value == 0) {
//     document.getElementById("carImage").src =
//         "https://r-media.volkswagen.com/v1/VW/55R/2022/MP1/20220324/ru-RU-ru/0Q0Q/GZ/0B3,0ES,0K0,0MR,0NB,0RE,1A5,1D0,1G9,1SK,1X0,1ZK,2EI,2FM,2H5,2J0,3CA,3FA,3GB,3H0,3L3,3LM,3QT,3S2,3T2,3ZU,4A3,4E0,4GX,4I2,4KC,4L6,4UF,4X3,4ZE,5C0,5KN,5MA,5RQ,5SL,5XJ,5ZF,6E2,6FF,6I0,6K2,6M0,6NA,6Q2,6XP,7AA,7B3,7L3,7M5,7MM,7N0,7P0,7Q0,7W0,7X2,7Y0,8G0,8IR,8N6,8Q1,8S6,8SK,8T6,8TB,8WA,9E5,9I5,9JA,9M0,9P9,9S6,9T1,9Z0,9ZX,A8B,AV1,B37,CY9,DG6,E0A,EL0,ER1,G1A,GP1,I8I,K8G,KA0,KH7,KL1,L0L,N4C,NZ3,Q1A,QJ0,QK0,QQ0,QV0,TL1,U9B,UH2,UK1,VF0/D6MainStageExterior/b19d7b4a-df80-487c-908a-47785dbb35fc/4656873da24a20c64f57a440321d9682870a3052f2164c342a5de48889290148.jpg?width=1678";

// }