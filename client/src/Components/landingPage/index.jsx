import React from "react";
import {Link} from "react-router-dom";
import styles from "./landingPage.module.css"

 const LandingPage= ()=>{

    return (

        < >
        <div className={styles.container}> 

        <div className={styles.container_botton}>
        <button><Link to="/home" className={styles.link}> Bienvenido!</Link></button>
        </div>
        </div>
        </>
    )
}

export default LandingPage;