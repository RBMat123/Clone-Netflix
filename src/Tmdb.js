const API_KEY = '429d28e61e55c0418b089ae8cd0e0c2d';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Originais na Netflix
-recomendados
-em alta
-ação
-comedia
-terror
-romance
-documentários
*/

const buscar= async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                items: await buscar(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-BR`)
            },
            {
                slug: 'tendencia',
                title: 'Recomendados para Você',
                items: await buscar(`/trending/all/week?api_key=${API_KEY}&language=en-BR`)
            },
            {
                slug: 'emalta',
                title: 'Em Alta',
                items: await buscar(`/movie/top_rated?api_key=${API_KEY}&language=en-BR`)
            },
            {
                slug: 'acao',
                title: 'Ação',
                items: await buscar(`/discover/movie?api_key=${API_KEY}&with_geners=28&language=en-BR`)
            },
            {
                slug: 'comedia',
                title: 'Comédia',
                items: await buscar(`/discover/movie?api_key=${API_KEY}&with_geners=35&language=en-BR`)
            },
            {
                slug: 'terror',
                title: 'Terror',
                items: await buscar(`/discover/movie?api_key=${API_KEY}&with_geners=27&language=en-BR`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await buscar(`/discover/movie?api_key=${API_KEY}&with_geners=10479&language=en-BR`)
            },
            {
                slug: 'documentarios',
                title: 'Documentários',
                items: await buscar(`/discover/movie?api_key=${API_KEY}&with_geners=99&language=en-BR`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}

        if(movieId){
            switch(type) {
                case 'movie' :
                    info = await buscar(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv' :
                    info = await buscar(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
 }