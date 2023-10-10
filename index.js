import { tweetListController } from './tweetlist/tweetListController.js';

const loadTweetsButton = document.getElementById('loadTweets');

loadTweetsButton.addEventListener('click', () => {
  const tweetList = document.getElementById('tweets');
  tweetListController(tweetList);
});
