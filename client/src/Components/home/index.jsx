import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getPokemon } from "../../Actions/index";
import Card from "../../Components/card";
import styles from "./home.module.css";
import { Order } from "../order";

export const Home= ()=>{

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const [pagination, setPagination] =useState(1)
    
    useEffect(() => {
      dispatch(getPokemon());
      dispatch(getTypes());
    }, [dispatch]);
  
    const handlePagination = (e)=>{


    }


    return( <>
    <Order></Order>
    <div className={styles.grip}>
      { !pokemons? <h2> Cargando...</h2> : pokemons.map((data) => {
        return (
          <Card
            key={data.id}
            name={data.name}
            img={data.img}
            types={data.types}
          ></Card>
        );
      })}
    </div>
  
  </>)
}
