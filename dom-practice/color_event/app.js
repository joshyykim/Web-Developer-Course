const btn = document.querySelector('button')
const head = document.querySelector('h2')

const ranNum = function () {
    return Math.floor((Math.random() * 256))
}

btn.addEventListener('click', () => {
    const color = `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`
    document.body.style.backgroundColor = color;
    head.innerText = `${color}`
});