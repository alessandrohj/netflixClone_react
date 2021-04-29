const API_KEY = 'a1b2f514b71b98f4fdeabd6fae26bd24';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originals
- recommended / trending
- top 10
- action
- comedy
- horror
- romance
- docs
*/

const getData = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: await getData(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Your Recommendations',
                items: await getData(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await getData(`/movie/top_rated?api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await getData(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await getData(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await getData(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await getData(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentaries',
                items: await getData(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            },
        ];
    }
}