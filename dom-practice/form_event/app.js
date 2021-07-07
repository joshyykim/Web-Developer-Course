const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username
    const tweetInput = tweetForm.elements.tweet
    addTweet(usernameInput, tweetInput);
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const boldTag = document.createElement('b');
    boldTag.append(username.value);
    newTweet.append(boldTag);
    newTweet.append(` said ${tweet.value}`);
    console.log(newTweet);
    tweetsContainer.append(newTweet);
    username.value = '';
    tweet.value = '';
}
