
const axios = require('axios');

const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchFromTMDB(endpoint, params = {}) {
  try {
    const API_KEY = process.env.TMDB_API_KEY;
    
    if (!API_KEY) {
      throw new Error('TMDB API key is missing');
    }
    
    const queryParams = {
      api_key: API_KEY,
      ...params
    };
    
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    
    const url = `${BASE_URL}${endpoint}?${queryString}`;
    const response = await axios.get(url);
    
    return {
      data: response.data,
      status: 'success',
      statusCode: response.status
    };
  } catch (error) {
    console.error('Error fetching data from TMDB:', error);
    return {
      data: null,
      status: 'error',
      statusCode: error.response?.status || 500,
      error: error.message
    };
  }
}

export async function fetchMovies(endpoint, params = {}) {
  const response = await fetchFromTMDB(endpoint, params);
  
  if (response.status === 'success') {
    return {
      movies: response.data.results,
      status: 'success'
    };
  }
  
  return {
    movies: [],
    status: 'error',
    error: response.error
  };
}
