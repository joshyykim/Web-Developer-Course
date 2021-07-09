const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')

// failed to remove elements
// const oldLi = document.querySelectorAll('li');
// for (let li of oldLi) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }

tweetsContainer.addEventListener('click', function (e) {
    console.dir(e.target);
    // remove only situation that clicked element is li
    e.target.nodeName === 'LI' && e.target.remove();
})

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username
    const tweetInput = tweetForm.elements.tweet
    addTweet(usernameInput, tweetInput);
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const boldTag = document.createElement('b');
    boldTag.append(username.value);
    newTweet.append(boldTag);
    newTweet.append(` : ${tweet.value}`);
    console.log(newTweet);
    tweetsContainer.append(newTweet);
    username.value = '';
    tweet.value = '';
}
