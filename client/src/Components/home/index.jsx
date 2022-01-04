import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getPokemon, clearPokemon} from "../../Actions/index";
import Card from "../../Components/card";
import styles from "./home.module.css";
import { Order } from "../order";
import NavBar from "../navBar";
import Filter from "../filter";
import  SearchBar  from "../searchBar/index";

 const Home= ()=>{

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const [page, setPage] =useState(1)
     
    
    useEffect(() => {
      dispatch(getPokemon());
      dispatch(getTypes());
        return ()=> dispatch(clearPokemon());
    
    }, [dispatch]);


    const handlePage = (e) => { e.target.name === "next" ? setPage(page + 1) : setPage(page - 1) };

    const pagination=(pokemons, page)=>{
      
      // primero determino cuantas paginas voy a tener, rendirazado condicional del paginado 
      
      let paginas=  Math.floor(pokemons.length/12);
      
    if(page===1){
       return pokemons.slice(0,8)
    }else if(page){
        let offset= 12*page-3;
        let initial=offset-12
        return pokemons.slice(initial, offset)

    }
      

    }

    return( <>
    <NavBar/>
    <div>
    <Order/>
    <Filter/>
    <SearchBar/>

    </div>
    <div>
      <button name="prev" onClick={(e=> handlePage(e))}> prev</button> <span>{page}</span> <button name="next" onClick={(e=> handlePage(e))}> next</button>
    </div>
    <div className={styles.grip}>
      { pokemons&& <h2> Cargando..
        
        </h2> && pagination(pokemons,page).map((data) => {
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
  
  </>)
}

export default Home;