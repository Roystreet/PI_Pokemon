
import  React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getPokemonDetail, clearDetail} from "../../Actions"

 const  Detail= ()=>{
    
    const {id}=useParams();
    const dispatch= useDispatch();
    const character= useSelector((state) => state.pokemonDetail)
    console.log(character)
    useEffect(()=>{

        dispatch(getPokemonDetail(id))

        return ()=>{
            clearDetail()
        }

    },[dispatch,id])
    
 return (
    <>
 
    </>
 )
}

export default Detail;