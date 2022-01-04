import React  from 'react';
import {Link} from 'react-router-dom';
import styles from "./navBar.module.css"

export default  function  NavBar(props) {


    return (
        
        <div  className={styles.navBar}>
            <div>
            <Link to="/home"> Inicio</Link>
            </div>
            <div>
            <Link to="/createpokemon"> Crear Pokemon </Link>
            </div>
            <div>
            
            </div>
        </div>
    )
}