import React from "react";


export  default function Card({name, img, types}){

    return (

        <div>
            <h3> {name} </h3>
            <img alt={name}  src={img}></img>
            {types.map((data)=>{
                return <span>{data}</span>
            })}

        </div>
    )
}