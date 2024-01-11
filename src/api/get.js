const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2UwNTBkOWMyN2MxMDdmYTEyNWZjZThlYTBjZmJiNiIsInN1YiI6IjY1OGQ5ZTYxMjBlNmE1NjA3ZjhiNDg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KmZHgzG37o9llAKngwCHFkA8b_zYN5SCCnUcsAQtT5o"
  }
};

export async function getMovieList() {
  try {
    const result = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
    const data = await result.json();
    return data;
  } catch (error) {
    alert(error);
  }
}

const receivedData = location.href.split('?')[1];


fetch(`https://api.themoviedb.org/3/movie/${receivedData}?language=ko`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));