const API_KEY = "c7074e67595e683bf514b7158dd4dbdf";
const requests= {
    fetchTrending: `/trending/all/week?api_key=c7074e67595e683bf514b7158dd4dbdf&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=c7074e67595e683bf514b7158dd4dbdf&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=c7074e67595e683bf514b7158dd4dbdf&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=c7074e67595e683bf514b7158dd4dbdf&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=c7074e67595e683bf514b7158dd4dbdf&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=c7074e67595e683bf514b7158dd4dbdf&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=c7074e67595e683bf514b7158dd4dbdf&Swith_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=c7074e67595e683bf514b7158dd4dbdf&with_genres=99`,
};
export default requests;

