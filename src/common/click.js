import {searchMovie} from "../api/get.js"
import newCard from "./card.js";

export function clickId (target) {
    target.addEventListener('click', (event)=>
        alert(event.currentTarget.id)
    )
};

export async function clickSubmitButton (target){
    target.addEventListener('click', async (event)=>{
        event.preventDefault();
        const $searchInput = document.querySelector('.searchInput');
        let searchWord = $searchInput.value;
        const searchData = await searchMovie(searchWord);

        const list = document.querySelector('.movieList');
        list.replaceChildren();
        let searchArr = [];
        searchArr = searchData.results.map(e=>{
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
            return card;
        });
        console.log(searchArr);
    });
};