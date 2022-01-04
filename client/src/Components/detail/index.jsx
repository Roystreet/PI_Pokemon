
import  React,{ useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getPokemonName, getPokemonDetail} from "../../Actions"
import NavBar from "../navBar";
import styles from "./detail.module.css"
const errorUrl="https://cdn.dribbble.com/users/4040675/screenshots/10545158/media/85a3329e4202059593616d3b42f16e8d.png?compress=1&resize=800x600"
 const  Detail= ()=>{
    
    const {id}=useParams();
  
    const dispatch= useDispatch();
    const character= useSelector((state) => state.pokemonDetail)
    console.log(character)
    
    useEffect(()=>{
        console.log(id)

           if(id.length>10){
                dispatch(getPokemonDetail(id))
           }else{
            dispatch(getPokemonName(id))
           }
            
        return ()=>{
            dispatch(clearDetail())
        }

    },[dispatch, id ])
    
 return (
        <>
        <NavBar/>
        <div className={styles.container}>
                <div className={styles.pokemon_detail} >
                        { character.name==="Error"?  <div className={styles.error}> <img src={errorUrl} alt="error"></img> </div>: <div>
                        < img src={character.img} alt={character.name}></img>
                            <span><h2> {character.name} </h2> </span>
                                <div className={styles.grip_propiedades}>
                                    <span>Vida : {character.hp}</span>
                                    <span> Defensa: {character.def}</span>
                                    <span>Peso: {character.weight}</span>
                                    <span>Ataque: {character.atk}</span>
                                    <span>Velocidad: {character.vel}</span>
                                    <span>Altura: {character.height}</span>
                                </div>
                                 <div>
                       
                                </div>
                        </div>
                    }
                    
                  
                 </div>

        </div>
        </>
 )
}

export default Detail;