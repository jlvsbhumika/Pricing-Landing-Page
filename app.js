const cards = document.getElementsByClassName("card1");
const cardzzzz = document.querySelector(".section-two");

const highlight = (event, index) => {
  cards[index].classList.remove("card");
  cards[index].classList.add("card_hover");
  cards[index].children[2].style.backgroundColor = "white";
  cards[index].children[2].style.color = "#010002";
  for (let i = 0; i < 6; i++) {
    cards[index].children[3].children[i].children[0].style.backgroundColor =
      "#8d4b8ac4";
  }
};

const unhighlight = (event, index) => {
  cards[index].classList.add("card");
  cards[index].classList.remove("card_hover");
  cards[index].children[2].style.backgroundColor = "#010002";
  cards[index].children[2].style.color = "white";
  for (let i = 0; i < 6; i++) {
    cards[index].children[3].children[i].children[0].style.backgroundColor =
      "#a614c0";
  }
};
cards[0].addEventListener("mouseover", (event) => highlight(event, 0));
cards[0].addEventListener("mouseout", (event) => unhighlight(event, 0));

cards[1].addEventListener("mouseover", (event) => highlight(event, 1));
cards[1].addEventListener("mouseout", (event) => unhighlight(event, 1));

cards[2].addEventListener("mouseover", (event) => highlight(event, 2));
cards[2].addEventListener("mouseout", (event) => unhighlight(event, 2));

// nav bar

const burger = document.querySelector(".burger");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {
  links.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});
