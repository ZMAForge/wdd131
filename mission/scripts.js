
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.querySelector('body').style.backgroundColor = '#333333';
        document.querySelector('#content').style.backgroundColor = '#333333';
        document.querySelector('#content').style.border = '3px solid white';
        document.querySelector('#content').style.color = 'white';
        document.querySelector('#content h2').style.color = '#bae0f7';
        logo.setAttribute('src', 'images/byui-logo-dark-mode.png');
    } else {
        document.querySelector('body').style.backgroundColor = 'antiquewhite';
        document.querySelector('#content').style.backgroundColor = 'white';
        document.querySelector('#content').style.border = '3px solid black';
        document.querySelector('#content').style.color = 'black';
        document.querySelector('#content h2').style.color = '#3469a9';
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
    }
}           
                    