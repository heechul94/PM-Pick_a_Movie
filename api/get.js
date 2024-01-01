const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2UwNTBkOWMyN2MxMDdmYTEyNWZjZThlYTBjZmJiNiIsInN1YiI6IjY1OGQ5ZTYxMjBlNmE1NjA3ZjhiNDg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KmZHgzG37o9llAKngwCHFkA8b_zYN5SCCnUcsAQtT5o",
    },
};

fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    options
).then((response) => response.json())
 .then((data) => {
        console.log(data)
        let list = document.querySelector('.list');
        let title = document.createElement("li")
        list.appendChild(title)
        // title.textContent=data.results[0].name;
 }).catch((err) => console.error(err));
