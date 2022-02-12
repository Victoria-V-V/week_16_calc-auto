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