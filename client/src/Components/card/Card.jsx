import React from "react";
import styles from "./card.module.css"


export  default function Card({name, img, types}){

    return (

        <div className={styles.container_pokemon}>
            <h3> {name} </h3>
            <img  className={styles.img_pokemon} alt={name}  src={img}></img>
            <h3>Tipo</h3>
            <div className={styles.container_type}>
            {types.map((data)=>{
                return <span className={styles.type}>{data} </span>
            })}</div>

        </div>
    )
}