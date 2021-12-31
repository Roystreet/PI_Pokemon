import React from "react";
import {Link} from "react-router-dom";
import styles from "./landingPage.module.css"

export  const LandingPage= ()=>{

    return (

        < >
        <div className={styles.container}> 
        <h1 className={styles.title}> Bienvedios a mi proyecto</h1>

        <div className={styles.container_botton}>
        <button><Link to="/home" className={styles.link}> Empezar</Link></button>
        </div>
        </div>
        </>
    )
}