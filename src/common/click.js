import { showCards } from "./card.js";

export async function clickSubmitButton(target, data) {
  target.addEventListener("click", async (event) => {
    event.preventDefault();
    const $searchInput = document.querySelector(".searchInput");
    const list = document.querySelector(".movieList");
    let searchWord = $searchInput.value.trim();
    const searchData = await data.filter((e) => {
      if (searchWord.charCodeAt() >= 12593) {
        return e.title.includes(searchWord);
      } else {
        return e.original_title.toLowerCase().includes(searchWord.toLowerCase());
      }
    });

    if (!searchWord) {
      return alert("검색어를 입력해주세요");
    } else if (!searchData.length) {
      return alert("해당하는 영화가 없습니다.");
    } else {
      list.replaceChildren();
      showCards(searchData);
    }
    $searchInput.value = null;
    $searchInput.focus();
  });
}
