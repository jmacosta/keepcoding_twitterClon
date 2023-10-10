// 1.- Modelo de datos con los teweets
const tweets = [
  {
    handler: '@usuario1',
    date: new Date().toISOString(),
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio? Vitae illum, quo non debitis quasi sed dolore, rem facilis facere cumque ea neque inventore, dolor sunt laborum reiciendis eius.',
    likes: 40
  },
  {
    handler: '@usuario2',
    date: new Date().toISOString(),
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio? Vitae illum, quo non debitis quasi sed dolore, rem facilis facere cumque ea neque inventore, dolor sunt laborum reiciendis eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio? Vitae illum, quo non debitis quasi sed dolore, rem facilis facere cumque ea neque inventore, dolor sunt laborum reiciendis eius.',
    likes: 20
  },
  {
    handler: '@usuario3',
    date: new Date().toISOString(),
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio? Vitae illum, quo non debitis quasi sed dolore, rem facilis facere cumque ea neque inventore, dolor sunt laborum reiciendis eius.',
    likes: 30
  },
  {
    handler: '@usuario1',
    date: new Date().toISOString(),
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio? Vitae illum, quo non debitis quasi sed dolore, rem facilis facere cumque ea neque inventore, dolor sunt laborum reiciendis eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio? Vitae illum, quo non debitis quasi sed dolore, rem facilis facere cumque ea neque inventore, dolor sunt laborum reiciendis eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio? Vitae illum, quo non debitis quasi sed dolore, rem facilis facere cumque ea neque inventore, dolor sunt laborum reiciendis eius.',
    likes: 50
  },
  {
    handler: '@usuario4',
    date: new Date().toISOString(),
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio? Vitae illum, quo non debitis quasi sed dolore, rem facilis facere cumque ea neque inventore, dolor sunt laborum reiciendis eius.',
    likes: 400
  }
];

// 2.- recorrer el array de tweets
tweets.forEach(tweet => {
  // 3.- Crear la estructura HTML del tweet
  // 3.1 contendor donde iran todos los datos del tweet
  const tweetContainer = document.createElement('div');
  //3.2 relelenar contenedor con los datos del tweet
  tweetContainer.innerHTML = `
  <span>${tweet.handler}</span>
  <span>${tweet.date}</span>
  <p>${tweet.message}</p>
  <p>${tweet.likes} likes</p>
  `;
  // 4.- Añadimos al dom
  const tweetList = document.getElementById('tweets');
  tweetList.appendChild(tweetContainer);
});
