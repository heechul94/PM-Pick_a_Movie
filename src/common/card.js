function newCard() {
  const newCard = document.createElement("li");
  const newPoster = document.createElement("img");
  const newTitle = document.createElement("h2");
  const newRate = document.createElement("span");
  const newContent = document.createElement("p");
  const cardAnchor = document.createElement("a");
  newCard.classList.add("movieCard");
  newPoster.classList.add("poster");
  newTitle.classList.add("title");
  newRate.classList.add("vote_average");
  newContent.classList.add("overview");
  cardAnchor.classList.add("cardAnchor");
  cardAnchor.append(newPoster, newTitle, newRate, newContent);
  newCard.append(cardAnchor);
  return newCard;
}

const list = document.querySelector(".movieList");

export function showCards(data) {
  const cards = data.map((e) => {
    const card = newCard();
    card.querySelector(".cardAnchor").href = `detail.html?${e.id}`;
    e.poster_path
      ? (card.querySelector(".poster").src = `https://image.tmdb.org/t/p/w500/${e.poster_path}`)
      : (card.querySelector(".poster").src = `../../assets/noImage.jpg`);
    card.querySelector(".title").innerText = e.title;
    card.querySelector(".vote_average").innerText = `평점 : ${e.vote_average}`;
    card.querySelector(".overview").innerText = e.overview;
    return card;
  });
  cards.forEach((card) => {
    list.appendChild(card);
  });
}
