import { tweets } from './tweetListModel.js';
import { buildTweet } from './tweetListView.js';
export const tweetListController = tweetList => {
  tweets.forEach(tweet => {
    const tweetContainer = document.createElement('div');
    tweetContainer.innerHTML = buildTweet(tweet);
    tweetList.appendChild(tweetContainer);
  });
};
