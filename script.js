let popapObject = document.querySelector('.popap');
let buttons = document.querySelector('.button');
let btnClose = document.getElementsByClassName('popap__close')[0];

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         popapObject.style.display = "block"
//     })
// }
buttons.onclick = function () {
    popapObject.style.display = "block"
}

btnClose.onclick = function () {
    popapObject.style.display = "none";
}

window.onclick = function () {
    if (event.target == popapObject) {
        popapObject.style.display = "none";
    }
}