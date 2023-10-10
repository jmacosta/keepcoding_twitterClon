import { tweets } from './tweetListModel.js';
import { buildTweet } from './tweetListView.js';
export const tweetListController = () => {
  tweets.forEach(tweet => {
    const tweetContainer = document.createElement('div');

    tweetContainer.innerHTML = buildTweet(tweet);

    const tweetList = document.getElementById('tweets');
    tweetList.appendChild(tweetContainer);
  });
};
