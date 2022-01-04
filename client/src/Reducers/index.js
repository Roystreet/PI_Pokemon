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

const initialState = {
  pokemons: [],
  pokemonDetail: {},
  filter: [],
  types: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POKEMONS:
      return { ...state, pokemons: payload, filter: payload };
    case GET_POKEMON_DETAIL:
      return { ...state, pokemonDetail: payload };
    case GET_POKEMON_NAME:
      return { ...state, pokemonDetail: payload };
    case GET_TYPES:
      return { ...state, types: payload };
    case FILTER_BY_CREATE:
      return { ...state, pokemons: payload };
    case FILTER_BY:
      return { ...state, pokemons: payload };
    case ORDER_BY:
      return { ...state, pokemons: payload };
    case CLEAR_DETAIL:
      return { ...state, pokemonDetail: {} };
    case CLEAR_POKEMON:
      return { ...state, pokemons: [] };
    default:
      return state;
  }
}
