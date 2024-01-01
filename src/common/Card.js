export default function newCard (){

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
