import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '093eced159a193fa46a358712eff484b';

export const fetchMovieTrends = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieId = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieName = async searchQuery => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false&language=en-US&page=1`
  );
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieReviews= async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};


