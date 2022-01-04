import axios from "axios";

import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  FILTER_BY,
  ORDER_BY,
  GET_POKEMON_NAME,
  CLEAR_DETAIL,
  CLEAR_POKEMON,
  FILTER_BY_CREATE,
} from "../Constants/index";
const url = "http://localhost:3001/pokemon?";

export const getPokemon = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/pokemon")
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_POKEMONS, payload: data }));
  };
};

export const getPokemonDetail = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/pokemon/${id}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_POKEMON_DETAIL, payload: data }))
      .catch((data) => dispatch({ type: GET_POKEMON_DETAIL, payload: data }));
  };
};

export const getPokemonName = (name) => {
  return (dispatch) => {
    axios
      .get(`${url}${"name=" + name}`)
      .then((response) => {
        console.log(response.data.name);
        return response.data;
      })
      .then((data) => dispatch({ type: GET_POKEMON_NAME, payload: data }))
      .catch((error) => dispatch({ type: GET_POKEMON_NAME, payload: error }));
  };
};

export const getTypes = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/types")
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_TYPES, payload: data }));
  };
};

export const filterBy = (type) => {
  return { type: FILTER_BY, payload: type };
};

export const filterCreate = (type) => {
  return { type: FILTER_BY_CREATE, payload: type };
};

export const orderBy = (order) => {
  return { type: ORDER_BY, payload: order };
};

export const clearDetail = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_DETAIL, payload: undefined });
  };
};

export const clearPokemon = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_POKEMON });
  };
};
