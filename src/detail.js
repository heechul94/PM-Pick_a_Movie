import { getMovieDetail } from "./api/get.js";

let data = await getMovieDetail();
const { genres, production_countries, production_companies } = data;
const genre = genres.map((e) => e.name);
const countries = production_countries.map((e) => e.name);
const companies = production_companies.map((e) => e.name);

console.log(location.href);
console.log(data);

document.querySelector(".backdrop-image").src = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
document.querySelector(".movie-title").innerText = data.title;
document.querySelector(".movie-original-title").innerText = data.original_title;
document.querySelector(".overview").innerText = data.overview;
document.querySelector(".release").innerText = data.release_date;
document.querySelector(".genres").innerText = genre;
document.querySelector(".countries").innerText = countries;
document.querySelector(".runtime").innerText = `${data.runtime} minute`;
document.querySelector(".companies").innerText = companies;
