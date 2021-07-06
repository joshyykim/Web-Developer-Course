const btn = document.querySelector('button')
const head = document.querySelector('h2')

const ranNum = function () {
    let num = Math.floor((Math.random() * 255))
    return num;
}

btn.addEventListener('click', () => {
    color = `rgb(${ranNum()},${ranNum()},${ranNum()})`
    document.body.style.backgroundColor = color;
    head.innerText = `${color}`
});