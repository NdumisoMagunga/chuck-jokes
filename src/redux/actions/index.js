import { FETCH_CATEGORIES, FETCH_CATEGORY } from './types';

const baseUrl = "https://api.chucknorris.io/jokes";

export const  fetchCategories =  () => async dispatch => { // fetching all categories
    const res = await fetch(baseUrl + '/categories');
    const data = await res.json();
    dispatch({type: FETCH_CATEGORIES, payload: data});
};

export const fetchCategory =(obj) => async dispatch =>{ 
    const res = await fetch(baseUrl + '/random?category=' + obj);
    const data = await res.json();
    dispatch({type: FETCH_CATEGORY, payload: data});
};