document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
})

const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log(e.code);
})

// input.addEventListener('keyup', function () {
//     console.log("key..up.....");
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('arrow up');
            break;
        case 'ArrowDown':
            console.log('arrow down');
            break;
        case 'ArrowLeft':
            console.log('arrow left');
            break;
        case 'ArrowRight':
            console.log('arrow right');
            break;
        default:
            console.log('No arrrows!');
            break;
    }
})