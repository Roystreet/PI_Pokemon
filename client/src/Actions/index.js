import axios from "axios";
import { orderAlfabe, orderAtk } from "../Utils/index";
import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  FILTER_BY,
  ORDER_BY,
  GET_POKEMON_NAME,
  CLEAR_DETAIL,
} from "../Constants/index";

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
      .then((data) => dispatch({ type: GET_POKEMON_DETAIL, payload: data }));
  };
};

export const getPokemonName = (name) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/pokemon?${name}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_POKEMON_NAME, payload: data }));
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

export const orderBy = (order) => {
  return { type: ORDER_BY, payload: order };
};

export const clearDetail = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_DETAIL, payload: undefined });
  };
};
