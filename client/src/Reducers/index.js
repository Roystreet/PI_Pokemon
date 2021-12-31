import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  ADD_POKEMON,
  FILTER_BY,
  ORDER_BY,
  GET_POKEMON_NAME,
  CLEAR_DETAIL,
} from "../Constants/index";

const initialState = {
  pokemons: [],
  pokemonDetail: {},
  types: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POKEMONS:
      return { ...state, pokemons: payload };
    case GET_POKEMON_DETAIL:
      return { ...state, pokemonDetail: payload };
    case GET_POKEMON_NAME:
      return { ...state, pokemonDetail: payload };
    case GET_TYPES:
      return { ...state, types: payload };

    case FILTER_BY:
      break;
    case ORDER_BY:
      return { ...state, pokemons: payload };
    case CLEAR_DETAIL:
      return { ...state, pokemonDetail: payload };
    default:
      return state;
  }
}
