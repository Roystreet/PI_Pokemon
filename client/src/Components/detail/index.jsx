
import  React,{ useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getPokemonName, getPokemonDetail} from "../../Actions"
import NavBar from "../navBar";
import Spinner from "../spinner";
import styles from "./detail.module.css"
import Error from "../../Asset/error_pokemon.png"
 const  Detail= ()=>{
    
    const {id}=useParams();
  
    const dispatch= useDispatch();
    const character= useSelector((state) => state.pokemonDetail)
    
    
    useEffect(()=>{
           if(id.length>10){
                dispatch(getPokemonDetail(id))
           }else{
            dispatch(getPokemonName(id))
           }
            
        return ()=>{
            dispatch(clearDetail())
        }

    },[dispatch, id])
    
 return (
        <>
        <NavBar/>
        <div className={styles.container}>
            { character.name 
                ? <div className={styles.pokemon_detail} >
                        { character.name==="Error"?  <div className={styles.error}> <img src={Error} alt="error"></img> </div>
                        : <div>
                                < img src={character.img} alt={character.name}></img>
                                     <span>
                                         <h2> {character.name} </h2>
                                         <h3> {character.id}</h3>
                                     </span>
                                <div className={styles.grip_propiedades}>
                                    <span>Vida : {character.hp}</span>
                                    <span> Defensa: {character.def}</span>
                                    <span>Peso: {character.weight}</span>
                                    <span>Ataque: {character.atk}</span>
                                    <span>Velocidad: {character.vel}</span>
                                    <span>Altura: {character.height}</span>
                                </div>
                                     <h3> Tipos </h3>
                                <div className={styles.container_types}>
                                    {character.types && character.types.map((data)=> <span key={data}>{data+" "}</span>)}
                                </div>
                        </div>
                    }
                    
                  
                 </div> 
                : <Spinner/>
                    }
        </div>
        </>
 )
}

export default Detail;