// local reviews data
const reviews = [
  {
    id: 1,
    author: "Angela J. Ford",
    date: "March 21, 2021",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1606163801l/56022289._SY475_.jpg",
    title: "Bride of the King",
    content:
      "Upon her father’s death, Nesrin made a vow never to use her magic. But years later, living under the abuse of her step-mother, she breaks said vow and casts three wishes. One for wealth. Another for freedom. And a third for love. The magic is tricky and soon Nesrin finds herself wed to a nomadic king and cast into a new life full of mystery and intrigue.",
  },
  {
    id: 2,
    author: "Dr. Seuss",
    date: "March 22, 2021",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1468890477l/233093._SX318_.jpg",
    title: "The Cat in the Hat",
    content:
      "Poor Sally and her brother. It's cold and wet and they're stuck in the house with nothing to do . . . until a giant cat in a hat shows up, transforming the dull day into a madcap adventure and almost wrecking the place in the process! Written by Dr. Seuss in 1957 in response to the concern that \"pallid primers [with] abnormally courteous...",
  },
  {
    id: 3,
    author: "V.A. McCloud",
    date: "March 23, 2021",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1267263570l/2778599.jpg",
    title: "Harvest of Souls Crossover",
    content:
      "The Harvest of Souls CrossOver is a story that is exciting, vigorous and full of suspense about the fight of good and evil in two realms, the light and dark world. The Howdy family is determined to defeat the world of darkness led by the seemingly undefeatable dark world leader, Shuby. You won't want to put it down.",
  },
  {
    id: 4,
    author: "Jennifer Weiner",
    date: "March 24, 2021",
    img:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585287049l/52755548.jpg",
    title: "Big Summer",
    content:
      "Six years after the fight that ended their friendship, Daphne Berg is shocked when Drue Cavanaugh walks back into her life, looking as lovely and successful as ever, with a massive favor to ask. Daphne hasn’t spoken one word to Drue in all this time—she doesn’t even hate-follow her ex-best friend on social media...",
  },
];

// select items
const img = document.getElementById("book_cover");
const author = document.getElementById("author");
const date = document.getElementById("date");
const title = document.getElementById("title");
const content = document.getElementById("content");

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
const randomBtn = document.querySelector(".random_btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.author;
  date.textContent = item.date;
  title.textContent = item.title;
  content.textContent = item.content;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.author;
  date.textContent = item.date;
  title.textContent = item.title;
  content.textContent = item.content;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
