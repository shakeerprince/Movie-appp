export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3', 
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
   }

   export const fetchMovies = async({ query } : {query: string})=>{
         const endpoint = query
         ? `${TMDB_CONFIG.BASE_URL}/search/movies?query=${encodeURIComponent(query)}`
         : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

         const response = await fetch(endpoint, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
         });

         if(!response.ok){
            throw new Error(`Failed to fetch movies: ${response.statusText}`);
         }

         const data =await response.json();

         return data.results;

   } 



// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWVmYzk0ZDhhMzZjZWQ0M2U3N2NkZDM2ZDVjYzg2ZSIsIm5iZiI6MTc0Nzk3ODEyNC4xMzQsInN1YiI6IjY4MzAwNzhjZjZjOGQ0NDgzYjJiNjI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BsHFEDjRMyaevmKlU0osjJ2AkvwePB4sKJjF7zShyTQ'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));