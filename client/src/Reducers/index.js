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
  ALL_POKEMON,
  GET_PAGE,
  PREV_PAGE,
  NEXT_PAGE,
} from "../Constants/index";

const initialState = {
  pokemons: [],
  pokemonDetail: {},
  filter: [],
  types: [],
  page: 1,
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
    case ALL_POKEMON:
      return { ...state, pokemons: payload };
    case GET_PAGE:
      return { ...state, page: 1 };
    case PREV_PAGE:
      return { ...state, page: payload };
    case NEXT_PAGE:
      return { ...state, page: payload };

    default:
      return state;
  }
}
