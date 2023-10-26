import axios from 'axios';
//BASE DA URL:https://api.themoviedb.org/3/
//URL DA API:/movie/now_playing?api_key=902f46cbf58522f5bef547dae61c12fb&language=pt-BR

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;

