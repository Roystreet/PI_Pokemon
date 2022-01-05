import React,{useState, useEffect} from "react";
import styles from "./nav.module.css"
import utils  from "../../Utils"
import { useDispatch, useSelector } from "react-redux";
import { orderBy } from "../../Actions";
import {useHistory} from "react-router-dom"


export const Order=()=>{

     const [order, setOrder]=useState("A-Z");
     const dispatch = useDispatch()
     const pokemons= useSelector((state)=> state.filter)
    const {push} = useHistory()

    const handleChange=(e)=>{
        setOrder(e.target.value)
        dispatch(orderBy(utils(order, pokemons)))
        setTimeout(() => {
            push("/home")
        }, 30);
                    
    }
   


    return(
   
            <div className={styles.item}>
                <label>Ordenar </label>
                <select defaultValue="--"  onChange={handleChange}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Fuerza Asc">Fuerza Asc</option>
                    <option value="Fuerza Desc">Fuerza Desc</option>
                </select>
            </div>

    )
}