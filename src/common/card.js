import { clickId } from "./click.js";

export function newCard (){

    const $newCard = document.createElement("li");
    const $newPoster = document.createElement("img");
    const $newTitle = document.createElement("h2");
    const $newRate = document.createElement("span");
    const $newContent = document.createElement("p");

    $newCard.classList.add('movieCard');
    $newPoster.classList.add('poster');
    $newTitle.classList.add('title');
    $newRate.classList.add('vote_average');
    $newContent.classList.add('overview');
    $newCard.append($newPoster, $newTitle, $newRate, $newContent);

    return $newCard;
}

export function showCards (data){
    data.forEach( e => {
        const card = newCard();
        const list = document.querySelector('.movieList');
        card.id = e.id;
        e.poster_path
        ? card.querySelector('.poster').src = `https://image.tmdb.org/t/p/w500/${e.poster_path}`
        : card.querySelector('.poster').src = `../../images/noImage.jpg`
        card.querySelector('.title').innerText = e.title;
        card.querySelector('.vote_average').innerText = `평점 : ${e.vote_average}`;
        card.querySelector('.overview').innerText = e.overview;
        clickId(card);
        list.appendChild(card);
        return card;
    });
}