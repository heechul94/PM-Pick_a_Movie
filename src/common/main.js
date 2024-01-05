import {getMovieList} from "../api/get.js";
import newCard from "./card.js";
import {clickId, clickSubmitButton,} from "./click.js";

const data = await getMovieList();
let dataArr = [];
dataArr = data.results;

dataArr.forEach( e =>{
    const card = newCard();
    const list = document.querySelector('.movieList');
    card.id = e.id;
    e.poster_path
        ? card.querySelector('.poster').src = `https://image.tmdb.org/t/p/original/${e.poster_path}`
        : card.querySelector('.poster').src = `/public/noImage.jpg`
    card.querySelector('.title').innerText = e.title;
    card.querySelector('.vote_average').innerText = `평점 : ${e.vote_average}`;
    card.querySelector('.overview').innerText = e.overview;
    clickId(card);
    list.appendChild(card);
});

const $searchButton = document.querySelector('.searchButton');
clickSubmitButton($searchButton,dataArr);

