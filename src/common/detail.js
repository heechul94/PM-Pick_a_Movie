import { getMovieDetail } from "../api/get.js";

console.log(location.href);

let tast = await getMovieDetail()
console.log(tast);