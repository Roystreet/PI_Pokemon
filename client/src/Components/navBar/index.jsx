import React  from 'react';
import {Link} from 'react-router-dom';
import styles from "./navBar.module.css"
import SearchBar  from "../searchBar/index"

export default  function  NavBar(props) {


    return (
        
        <div  className={styles.navBar}>
            <div>
            <Link to="/home" className={styles.link}> Inicio</Link>
            </div>
            <div>
            <SearchBar/>
            </div>
            <div>
            <Link to="/createpokemon" className={styles.link}> Crear Pokemon </Link>
            </div>
        </div>
    )
}