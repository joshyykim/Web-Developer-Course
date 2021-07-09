const button = document.querySelector('#newColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = generateRandColor();
    e.stopPropagation();
})

container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

const generateRandColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}