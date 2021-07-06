const btns = document.querySelectorAll('button')
const spans = document.querySelectorAll('span');

const ranNum = function () {
    return Math.floor((Math.random() * 256))
}

function colorize() {
    const textColor = `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`
    const backgroundColor = `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`
    this.style.color = textColor;
    this.style.backgroundColor = backgroundColor;
}

for (let button of btns) {
    button.addEventListener('click', colorize);
}


for (let span of spans) {
    span.addEventListener('click', colorize);
}