const categories = [
  {
    key: 1,
    img_src: "images/food2.jpg",
    img_atr: "Ndole",
    title: "Ndole",
    description: "necessitatibus tenetur. Ea, numquam cupiditate.",
    content:
      "sit amet consectetur adipisicing iste neque optio earum labore, ipsam",
  },
  {
    key: 2,
    img_src: "images/food3.jpg",
    img_atr: "Kokki",
    title: "Kokki",
    description: "Lorem ipsum dolossumenda maaceat voluptatem asperiores",
    content:
      "repellat iste neque optio earum labore,   necessitatibus. Ea, numquam cupiditate.",
  },
  {
    key: 3,
    img_src: "images/food4.jpg",
    img_atr: "Achu",
    title: "Achu",
    description: "Pariatur fugiatneque  voes eos illum necessitatibus tenetur.",
    content: "ipsum dolor sit . Pariatur e optio earum labore, ipsam facilis ",
  },
  {
    key: 4,
    img_src: "images/food5.jpg",
    img_atr: "Njama-njama",
    title: "Njama-njama",
    description: "Pariatur fugiatneque  voes eos illum necessitatibus tenetur.",
    content:
      " dolor sit amet consectetur adipisbore, ipsam facilis assumenda magni",
  },
  {
    key: 5,
    img_src: "images/food6.jpg",
    img_atr: "Egusi-pudding",
    title: "Egusi-pudding",
    description:
      "Lorem ipsum dolnsectetur adipisicing elit.giat repellat iste neque optio",
    content:
      "voluptatem asperiores eos illum necesnetur. Ea, numquam cupiditate.",
  },
  {
    key: 6,
    img_src: "images/food9.jpg",
    img_atr: "Waterfufu-eru",
    title: "Waterfufu-eru",
    description:
      "Lorem ipsum dolnsectetur adipisicing elit.giat repellat iste neque optio",
    content:
      "voluptatem asperiores eos illum necesnetur. Ea, numquam cupiditate.",
  },
];
const hamburger = document.getElementById("hamburger");
//const body = document.getElementById(".main")
function menu() {
  hamburger.classList.toggle("change");
  //document.body.classList.toggle('no-scroll');
  const show = document.getElementById("myLinks");
  if (show.style.display === "flex") {
    show.style.display = "none";
  } else {
    show.style.display = "flex";
  }
}
hamburger.addEventListener("click", menu);
//body.addEventListener("click", menu);

const CategoriesWrap = document.querySelector("#categories");
const lunchCategories = () => {
  categories.forEach((element) => {
    // CREATE PROJECT ITEM
    const list = document.createElement("li");
    list.classList.add("category");
    // CREATE PROJECT IMAGE
    const catImg = document.createElement("img");
    catImg.classList.add("cat-img");
    catImg.src = element.img_src;
    catImg.alt = element.img_atr;
    catImg.id = element.key;
    list.appendChild(catImg);
    const catbody = document.createElement("div");
    catbody.classList.add("cat-body");
    // CREATE PROJECT HEADING
    const catHead = document.createElement("h2");
    catHead.classList.add("cat-title");
    catHead.innerText = element.title;
    catbody.appendChild(catHead);
    // CREATE PROJECT DESCRIPTION
    const catDescription = document.createElement("p");
    catDescription.classList.add("cat-text");
    catDescription.innerText = element.description;
    catbody.appendChild(catDescription);
    // CREATE PROJECT SMALL LINE
    const catLine = document.createElement("div");
    catLine.classList.add("cat-line");
    catbody.appendChild(catLine);
    // CREATE PROJECT CONTENT
    const catContent = document.createElement("p");
    catContent.classList.add("cat-content");
    catContent.innerText = element.content;
    catbody.appendChild(catContent);
    list.appendChild(catbody);
    CategoriesWrap.appendChild(list);
  });
};
lunchCategories();
