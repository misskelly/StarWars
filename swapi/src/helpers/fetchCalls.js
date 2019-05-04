import { cleanFilm } from './cleaners.js'
import { mockCleanFilm } from '../helpers/mockData.js';


export const fetchFilm = () => {
  const randomNum = Math.floor(Math.random() * (7 - 1) + 1);
  const url = `https://www.swapi.co/api/films/${randomNum}`
  return fetch(url)
    .then(response => response.json())
    .then(film => cleanFilm(film))
    .catch(mock => cleanFilm(mockCleanFilm))
  }
  