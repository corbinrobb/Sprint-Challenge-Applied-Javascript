/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let currentIndex = 0;

function createCarousel() {
  const carousel = document.createElement('div')
  carousel.classList.add('carousel');

    const leftButton = document.createElement('div');
    leftButton.classList.add('left-button');
    carousel.appendChild(leftButton);

    leftButton.addEventListener('click', e => {
      currentIndex = (currentIndex === 0) ? 3 : --currentIndex;
      displayImage();
    });

    const mountains = document.createElement('img');
    mountains.src = './assets/carousel/mountains.jpeg';
    mountains.dataset.index = 0;
    carousel.appendChild(mountains);

    const computer = document.createElement('img');
    computer.src = './assets/carousel/computer.jpeg';
    computer.dataset.index = 1;
    carousel.appendChild(computer);

    const trees = document.createElement('img');
    trees.src = './assets/carousel/trees.jpeg';
    trees.dataset.index = 2;
    carousel.appendChild(trees);

    const turntable = document.createElement('img');
    turntable.src = './assets/carousel/turntable.jpeg';
    turntable.dataset.index = 3;
    carousel.appendChild(turntable);

    const rightButton = document.createElement('div');
    rightButton.classList.add('right-button');
    carousel.appendChild(rightButton);

    rightButton.addEventListener('click', e => {
      currentIndex = (currentIndex === 3) ? 0 : ++currentIndex;
      displayImage();
    });

  return carousel;
}

document.querySelector('.carousel-container').appendChild(createCarousel());





function displayImage() {
  const imgs = document.querySelectorAll('.carousel img');
  imgs.forEach(img => {
    if(img.dataset.index == currentIndex) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  })
}

displayImage();