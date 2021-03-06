// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(res => {
    res.data.topics.forEach(topic => {
      const tab = document.createElement('div');
      tab.classList.add('tab');
      tab.textContent = topic;
      
      tab.addEventListener('click', e => {
        const cards = document.querySelectorAll('.card');
        const procTabContent = tab.textContent.replace(/.js/, '');

        cards.forEach(card => {
          if (card.dataset.articleGenre !== procTabContent) {
            card.style.display = 'none';
          } else {
            card.style.display = 'block';
          }
        })
      });

      document.querySelector('.topics').appendChild(tab);
    })
  })
  .catch(err => {
    console.log(err);
  })
