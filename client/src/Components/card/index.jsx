import React from "react";
import styles from "./card.module.css"
import {Link} from "react-router-dom"


export  default function Card({name, img, types, key, id}){

    return (

        <div className={styles.container_pokemon} key={key}>
            <img  className={styles.img_pokemon} alt={name}  src={img}></img>
            <Link  to={"/detalle/"+id}  > <h3> {name} </h3></Link>
            <h3>Tipo</h3>
            <div className={styles.container_type}>
            {types.map((data)=>{
                return <span className={styles.type}>{data} </span>
            })}</div>

        </div>
    )
}