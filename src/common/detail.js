import { getMovieDetail } from "../api/get.js";

console.log(location.href);

let data = await getMovieDetail()
console.log(data);




const list = document.querySelector(".movie-content-wrap");

function detailList(data) {
        const {genres} = data;
        document.querySelector(".backdrop-image").src = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
        document.querySelector(".movie-title").innerText = data.original_title;
        const genre = genres.map( e => e.name);
        const {production_countries} = data;
        const countries = production_countries.map(e => e.name);
        const {production_companies} =data;
        const companies = production_companies.map(e => e.name);
        document.querySelector(".overview").innerText = data.overview;
        document.querySelector(".release").innerText = data.release_date;
        document.querySelector(".genres").innerText = genre;
        document.querySelector(".countries").innerText = countries;
        document.querySelector(".runtime").innerText = `${data.runtime} minute`;
        document.querySelector(".companies").innerText = companies;
    };

detailList(data);