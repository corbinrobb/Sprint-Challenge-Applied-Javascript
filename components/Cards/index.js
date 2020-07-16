// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
    const articles = Object.keys(res.data.articles);

    articles.forEach(title => {
      res.data.articles[title].forEach(cardInfo => {
        document.querySelector('.cards-container').appendChild(createCard(cardInfo, title));
      })
    })
  })
  .catch(err => console.log(err));



function createCard(obj, articleGenre) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.articleGenre = articleGenre;

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = obj.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('img-container');
      author.appendChild(imgContainer);

      const img = document.createElement('img');
      img.src = obj.authorPhoto;
      imgContainer.appendChild(img);

      const name = document.createElement('span');
      name.textContent = `By ${obj.authorName}`;
      author.appendChild(name);

    card.appendChild(author);

  return card;
}