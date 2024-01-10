import { getMovieList } from "../api/get.js";
import { showCards } from "./card.js";
import { clickSubmitButton } from "./click.js";

const $searchButton = document.querySelector(".searchButton");
document.addEventListener("DOMContentLoaded", async () => {
  const { results } = await getMovieList();
  const dataArr = [...results];
  showCards(dataArr);
  clickSubmitButton($searchButton, dataArr);
});
