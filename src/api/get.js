const options = {
    method: "GET",
    headers: {
        accept: "application/json",

    },
};

export async function getMovieList () {
    try {
        const result = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1",
            options
        );
        const data = await result.json();
        return data;
    } catch (error) {
        alert(error);
    }
};

export async function searchMovie (word) {
    if( typeof word !== 'string'&& !word.length ) return;
    try{
        const result = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=ko&page=1`,
            options
        );
        const data = await result.json();
        console.log(data);
        return data;
    }catch (error) {
        alert(error);
    }
}