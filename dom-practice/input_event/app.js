const input = document.querySelector('input');
const h1 = document.querySelector('h1');


input.addEventListener('input', function (e) {
    switch (input.value) {
        case "":
            h1.innerText = `Enter Your Username`;
            break;
        default:
            h1.innerText = `Welcome, ${input.value}`;
            break;
    }
})

// input.addEventListener('change', function (e) {
//     h2.innerText = input.value;
//     // console.log(e);
// })

