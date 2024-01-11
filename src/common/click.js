import { showCards } from "./card.js";

export function clickId(target) {
  // target.addEventListener("click", (event) => alert(`이 영화의 ID는 ${event.currentTarget.id} 입니다`));
  // const aTag = document.querySelector('a');
  target.addEventListener("click", (event) => {
    location.href = `detail.html?${event.currentTarget.id}`});
    console.log(location.href);
}

export async function clickSubmitButton(target, data) {
  target.addEventListener("click", async (event) => {
    event.preventDefault();
    const $searchInput = document.querySelector(".searchInput");
    const list = document.querySelector(".movieList");
    let searchWord = $searchInput.value.trim();
    const searchData = await data.filter((e) => e.title.toLowerCase().includes(searchWord.toLowerCase()));
    console.log("인풋 : " + searchWord);
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
