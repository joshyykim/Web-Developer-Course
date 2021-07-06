const btn = document.querySelector('#v2');
const head = document.querySelector('h1');

btn.onclick = function () {
    console.log("Awwww!!! clicked!");
}

function scream() {
    console.log("AHHHHHHH!");
}

btn.onmouseenter = scream;
head.onmouseenter = scream;

const password = document.querySelector('#password');

password.oninput = () => {
    console.log('length of password should be at least 10');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function () {
    alert("clicked he?");
})

function twist() {
    console.log("Twist!")
}

function shout() {
    console.log("Shout!!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = shout;
// tasButton.onclick = twist;

tasButton.addEventListener('click', shout, { once: true });
tasButton.addEventListener('click', twist);