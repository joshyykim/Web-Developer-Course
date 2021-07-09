const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const score = document.querySelector('h1');
const matchPoint = document.querySelector('select');
let p1Score = document.querySelector('#p1Score');
let p2Score = document.querySelector('#p2Score');

player1.addEventListener('click', function () {
    let temp = parseInt(p1Score.innerText) + 1;
    p1Score.textContent = temp;
    console.log(temp, p1Score.innerText)
    if (p1Score.innerText == matchPoint.value) {
        gameSet();
    } else {
        score.innerText = `${p1Score.innerText} to ${p2Score.innerText}`;
    }
})

player2.addEventListener('click', function () {
    let temp = parseInt(p2Score.innerText) + 1;
    p2Score.textContent = temp;
    console.log(temp, p2Score.innerText)
    if (p2Score.innerText == matchPoint.value) {
        gameSet();
    } else {
        score.innerText = `${p1Score.innerText} to ${p2Score.innerText}`;
    }
})

reset.addEventListener('click', function () {
    player1.disabled = false;
    player2.disabled = false;
    p1Score.style.color = "black"
    p2Score.style.color = "black"
    p1Score.innerText = "0";
    p2Score.innerText = "0";
})

const gameSet = () => {
    if (p1Score.innerText > p2Score.innerText) {
        p1Score.style.color = "red";
        p2Score.style.color = "green"
    } else {
        p1Score.style.color = "green";
        p2Score.style.color = "red"
    }
    p1Score.style.color = "red";
    p2Score.style.color = "green";
    document.querySelector('h1').remove();
    const finalScore = document.createElement('h1');
    finalScore.append(p1Score);
    finalScore.append(" to ");
    finalScore.append(p2Score);
    document.querySelector('#currentScore').append(finalScore)
    player1.disabled = true;
    player2.disabled = true;
}