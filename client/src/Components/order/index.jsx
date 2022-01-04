import React,{useState, useEffect} from "react";
import styles from "./nav.module.css"
import utils  from "../../Utils"
import { useDispatch, useSelector } from "react-redux";
import { orderBy } from "../../Actions";
import {useHistory} from "react-router-dom"


export const Order=()=>{

     const [order, setOrder]=useState("A-Z");
     const dispatch = useDispatch()
     const pokemons= useSelector((state)=> state.pokemons)
    const {push} = useHistory()

    const handleChange=(e)=>{
        setOrder(e.target.value)
        setTimeout(() => {
            push("/home")
        }, 30);
                    
    }
     useEffect(() => {
         dispatch(orderBy(utils(order, pokemons)))
     },[dispatch, pokemons,order])


    return(
   
            <div className={styles.item}>
                <label>Ordenar </label>
                <select defaultValue={order}  onChange={handleChange}>

                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Fuerza Asc">Fuerza Asc</option>
                    <option value="Fuerza Desc">Fuerza Desc</option>
                </select>
            </div>

    )
}