// import newCard from "./card.js";

export function clickId (target) {
    target.addEventListener('click', (event)=>
        alert(`이 영화의 ID는 ${event.currentTarget.id} 입니다`)
    )
};

export async function clickSubmitButton (target,data){
    target.addEventListener('click', async (event)=>{
        event.preventDefault();
        const $searchInput = document.querySelector('.searchInput');
        const list = document.querySelector('.movieList');
        let searchWord = $searchInput.value;
        if(!searchWord) {
            $searchInput.value = null;
            $searchInput.focus()
            return alert('검색어를 입력해주세요');
        }
        else{
            const searchData = await data.filter(e=>e.title.toLowerCase().includes(searchWord.toLowerCase()))
            if(!searchData.length){
                $searchInput.value = null;
                $searchInput.focus()
                return alert('해당하는 영화가 없습니다.');
            }
            console.log(searchData)
            list.replaceChildren();

            searchData.forEach(e=>{
                const card = newCard();
                const list = document.querySelector('.movieList');
                card.id = e.id;
                e.poster_path
                ? card.querySelector('.poster').src = `https://image.tmdb.org/t/p/original/${e.poster_path}`
                : card.querySelector('.poster').src = `../../images/noImage.jpg`
                card.querySelector('.title').innerText = e.title;
                card.querySelector('.vote_average').innerText = `평점 : ${e.vote_average}`;
                card.querySelector('.overview').innerText = e.overview;
                clickId(card);
                list.appendChild(card);
                return card;
            });
            $searchInput.value = null;
            $searchInput.focus()
        };
    });
};