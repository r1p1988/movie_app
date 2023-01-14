const API = `https://api.themoviedb.org/3/tv/popular?api_key=596d86bfcc6d8b3a429b1a0de647aa1f&language=en-US`;
const Img = `https://api.themoviedb.org/3/tv`;
const KEY = `?api_key=596d86bfcc6d8b3a429b1a0de647aa1f`;
const GENRE = `https://api.themoviedb.org/3/genre/tv/list`;

export const getMovies = () => fetch(API).then((data) => data.json());

export const getMoviesImg = (id) =>
  fetch(Img + `/${id}/images` + KEY).then((data) => data.json());

export const getMovie = (id) =>
  fetch(Img + `/${id}` + KEY).then((data) => data.json());

export const getGenres = () => fetch(GENRE + KEY).then((data) => data.json());

export const getCasts = (id) =>
  fetch(Img + `/${id}/credits` + KEY).then((data) => data.json());
