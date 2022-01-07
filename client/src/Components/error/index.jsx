import React from "react";
import NavBar from "../navBar";
import styles from "./error.module.css";
import error from "../../Asset/error_pokemon.png";

const Error = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles}>
          <img className={styles.error} src={error} alt="error"></img>
        </div>
      </div>
    </>
  );
};

export default Error;
