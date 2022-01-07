import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypes,
  getPokemon,
  clearPokemon,
  prevPage,
  nextPage,
} from "../../Actions/index";
import Card from "../../Components/card";
import styles from "./home.module.css";
import { Order } from "../order";
import NavBar from "../navBar";
import Filter from "../filter";
import Spinner from "../spinner";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(getPokemon());
    dispatch(getTypes());
    return () => dispatch(clearPokemon());
  }, [dispatch]);

  const handlePage = (e) => {
    if (e.target.name === "prev") {
      if (page !== 1) return dispatch(prevPage(page - 1));
    } else {
      return dispatch(nextPage(page + 1));
    }
  };

  const pagination = (pokemons, page) => {
    // primero determino cuantas paginas voy a tener, rendirazado condicional del paginado

    let paginas = Math.floor(pokemons.length / 12); // para paginado

    if (page === 1) {
      return pokemons.slice(0, 9);
    } else if (page) {
      let offset = 12 * page - 3;
      let initial = offset - 12;
      return pokemons.slice(initial, offset);
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.flex_filtros}>
        <Order />
        <Filter />
      </div>
      <div>
        <button name="prev" onClick={(e) => handlePage(e)}>
          {" "}
          prev
        </button>{" "}
        <span>{page}</span>{" "}
        <button name="next" onClick={(e) => handlePage(e)}>
          {" "}
          next
        </button>
      </div>
      {pokemons ? (
        <div className={styles.grip}>
          {pagination(pokemons, page).map((data) => {
            return (
              <Card
                id={data.id}
                key={data.id}
                name={data.name}
                img={data.img}
                types={data.types}
              ></Card>
            );
          })}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
