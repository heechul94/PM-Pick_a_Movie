const options = {
    method: "GET",
    headers: {
        accept: "application/json",
    },
};

export default async function getMovieList () {
    try {
        const result = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1",
            options
        );
        const data = await result.json();
        return data;
    } catch (error) {
        alert(error)
    }
};