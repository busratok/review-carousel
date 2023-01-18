const reviews = [
  {
    img: "./images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
    name: "Alexander Hipp",
    title: "Web Developer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod eaque tempore dolorem earum, similique laudantium iste ipsa optio eveniet, quas asperiores tempora? Ipsa asperiores aperiam dicta accusantium, quibusdam sed rerum?",
  },
  {
    img: "./images/jake-nackos-IF9TK5Uy-KI-unsplash.jpg",
    name: "Melissa Nackos",
    title: "Software Developer",
    review:
      "Dolor sit, amet consectetur adipisicing elit. Quod eaque tempore dolorem earum, similique laudantium iste ipsa optio eveniet, quas asperiores tempora? Ipsa asperiores aperiam dicta accusantium, quibusdam sed rerum?",
  },
  {
    img: "./images/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg",
    name: "Linda Liverani",
    title: "DevOps Engineer",
    review:
      "Similique laudantium iste ipsa optio eveniet, quas asperiores tempora? Ipsa asperiores aperiam dicta accusantium, quibusdam sed rerum?",
  },

  {
    img: "./images/ludovic-migneault-4uj3iZ5m084-unsplash.jpg",
    name: "Ludovic Mignea",
    title: "Data Analyst",
    review:
      "Eaque tempore dolorem earum, similique laudantium iste ipsa optio eveniet, quas asperiores tempora? Ipsa asperiores aperiam dicta accusantium, quibusdam sed rerum?",
  },
];
const imageBox = document.getElementById("image-box");
const nameBox = document.getElementById("name-box");
const titleBox = document.getElementById("title-box");
const reviewBox = document.getElementById("review-box");
const buttons = document.querySelector(".buttons");

window.addEventListener("DOMContentLoaded", () => {
  imageBox.src = reviews[0].img;
  nameBox.textContent = reviews[0].name;
  titleBox.textContent = reviews[0].title;
  reviewBox.textContent = reviews[0].review;
});

function filler() {
  imageBox.src = reviews[i].img;
  nameBox.textContent = reviews[i].name;
  titleBox.textContent = reviews[i].title;
  reviewBox.textContent = reviews[i].review;
}

let i = 0;
buttons.addEventListener("click", (e) => {
  if (e.target.id === "forward") {
    i === reviews.length - 1 ? (i = 0) : i++;
    filler();
  } else if (e.target.id === "backward") {
    i === 0 ? (i = reviews.length - 1) : i--;
    filler();
  } else if (e.target.id === "random") {
    i = Math.floor(Math.random() * reviews.length);
    filler();
  }
});
