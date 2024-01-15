const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2UwNTBkOWMyN2MxMDdmYTEyNWZjZThlYTBjZmJiNiIsInN1YiI6IjY1OGQ5ZTYxMjBlNmE1NjA3ZjhiNDg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KmZHgzG37o9llAKngwCHFkA8b_zYN5SCCnUcsAQtT5o"
  }
};

export async function getMovieList() {
  const BASE_URL = "https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1";
  try {
    const result = await fetch(BASE_URL, options);
    const data = await result.json();
    return data;
  } catch (error) {
    alert(error);
  }
}

const receivedData = location.href.split("?")[1];

export async function getMovieDetail() {
  const detailUrl = `https://api.themoviedb.org/3/movie/${receivedData}?language=ko`;
  try {
    const result = await fetch(detailUrl, options);
    const data = await result.json();
    return data;
  } catch (error) {
    alert(error);
  }
}

export async function getCountries() {
  const NATIVE_COUNTRY_URL = "https://api.themoviedb.org/3/configuration/countries?language=ko";
  try {
    const result = await fetch(NATIVE_COUNTRY_URL, options);
    const data = await result.json();
    return data;
  } catch {
    alert(error);
  }
}
