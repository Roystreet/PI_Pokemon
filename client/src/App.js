import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getPokemon } from "./Actions/index";
import "./App.css";
import Card from "./Components/card/Card.jsx";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hey");
    dispatch(getPokemon());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <div className="Grip">
        {pokemons.map((data) => {
          return (
            <Card name={data.name} img={data.img} types={data.types}></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
