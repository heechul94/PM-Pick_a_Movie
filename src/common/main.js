import getMovieList from "../api/get.js"
import newCard from "./Card.js"

const data = await getMovieList();
let dataArr = data.results;
dataArr.forEach( e =>{
    const card = newCard();
    const list = document.querySelector('.movieList');
    card.id = e.id;
    card.querySelector('.poster').src = `https://image.tmdb.org/t/p/original/${e.poster_path}`
    card.querySelector('.title').innerText = e.title;
    card.querySelector('.vote_average').innerText = e.vote_average;
    card.querySelector('.overview').innerText = e.overview;
    list.appendChild(card);
})