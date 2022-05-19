const hamburger = document.getElementById("hamburger");
//const body = document.getElementById(".main")
function menu() {
  hamburger.classList.toggle("change");
  //document.body.classList.toggle('no-scroll');
  const show = document.getElementById("nav-links");
  if (show.style.display === "flex") {
    show.style.display = "none";
  } else {
    show.style.display = "flex";
  }
}
hamburger.addEventListener("click", menu);
//body.addEventListener("click", menu);
const dishes = {
  0: {
    name: 'Ndole',
    photo: 'images/food2.jpg',
    title: 'Ndole',
    content:'sit amet consectetur adipisicing iste neque optio earum labore, ipsam',
    description: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  1: {
    name: 'Achu',
    photo: 'images/food3.jpg',
    title: 'Achu',
    content:'sit amet consectetur adipisicing iste neque optio earum labore, ipsam',
    description: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  2: {
    name: 'Kokki',
    photo: 'images/food4.jpg',
    title: 'kokki',
    content:'sit amet consectetur adipisicing iste neque optio earum labore, ipsam',
    description: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  3: {
    name: 'Njama-njama',
    photo: 'images/food5.jpg',
    title: 'Njama-njama',
    content:'sit amet consectetur adipisicing iste neque optio earum labore, ipsam',
    description: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  4: {
    name: 'Egusi-Pudding',
    photo: 'images/food6.jpg',
    title: 'Egusi-pudding',
    content:'sit amet consectetur adipisicing iste neque optio earum labore, ipsam',
    description: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  5: {
    name: 'Waterfufu-eru',
    photo: 'images/food9.jpg',
    title: 'Waterfufu-eru',
    content:'sit amet consectetur adipisicing iste neque optio earum labore, ipsam',
    description: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
};

function displayDishes() {
  const dishesDiv = document.getElementById('get-dishes');
  const dishKeys = Object.keys(dishes);
  let buildHTML = '';
  for (let i = 0; i < dishKeys.length; i += 1) {
    const dish = dishes[dishKeys[i]];
    buildHTML
      += `
      <div class="col-12 col-lg-6 col-xl-6 mb-lg-5 mb-xl-5 ${(i > 1) ? 'm-hide' : ''}">
        <div class="dishes-slider ">
          <div class="dish-item d-flex">
            <div class="dish-img me-3">
              <img class="" src="${dish.photo}" alt="Speaker">
            </div>
            <div class="speaker-info">
              <h3 class="speaker-name fw-bold">
                <a href="#" class="text-decoration-none">
                  <span>${dish.name}</span>
                </a>
              </h3>
              <p class="speaker-designation fst-italic orange-text">
                <span>${dish.title}</span>
              </p>
              <p class="speaker-description">${dish.content}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  dishesDiv.innerHTML = buildHTML;
}

window.onload = () => {
  displayDishes();
};

// get the show speakers button
const showDishes = document.querySelector('.show-more-dishes');
// add click event to the show speakers button
showDishes.addEventListener('click', (e) => {
  e.preventDefault();
  showDishes.remove();
  // get elements with m-hide class
  const hide = document.querySelectorAll('.m-hide');
  // loop through the elements with m-hide class
  for (let i = 0; i < hide.length; i += 1) {
    // remove the class m-hide
    hide[i].classList.remove('m-hide');
  }
}, false);