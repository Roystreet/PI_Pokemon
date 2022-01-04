import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./main.module.css";
import Home from "./Components/home";
import LandingPage from "./Components/landingPage";
import CreatePokemon from "./Components/createPokemon";
import Detail from "./Components/detail";
import Error from "./Components/error";

const App = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/createpokemon" component={CreatePokemon}></Route>
        <Route exact path="/detalle/:id" component={Detail}></Route>
        <Route path="/*" component={Error}></Route>
      </Switch>
    </div>
  );
};

export default App;
