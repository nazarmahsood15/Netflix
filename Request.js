
const API_KEY="c0363ddf3702320a4fb9ff139084abc1";


const requests={
        fatchNetflixOrignals:'/https://api.themoviedb.org/3/discover/tv?api_key=c0363ddf3702320a4fb9ff139084abc1&with_networks=213',
        fetchTrending:'https://api.themoviedb.org/3/movie/top_rated?api_key=c0363ddf3702320a4fb9ff139084abc1&language=en-US&page=1',  
        fetchActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=c0363ddf3702320a4fb9ff139084abc1&with_genres=28',
        fetchComedyMovies:'https://api.themoviedb.org/3/discover/movie?api_key=c0363ddf3702320a4fb9ff139084abc1&with_genres=35',
        fetchHorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=c0363ddf3702320a4fb9ff139084abc1&with_genres=27',
        fetchRomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=c0363ddf3702320a4fb9ff139084abc1&with_genres=10749',
        fetchTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=c0363ddf3702320a4fb9ff139084abc1&language=en-US',
 }
    export default requests;


// https://api.themoviedb.org/3/movie/top_rated?api_key=c0363ddf3702320a4fb9ff139084abc1&language=en-US&page=1
// // fetchTrending: '/trending/all{API_KEY}&language=en-US',


