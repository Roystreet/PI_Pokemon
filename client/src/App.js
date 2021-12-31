import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Components/home";
import { Error } from "./Components/error";
import Detail from "./Components/detail";
import { LandingPage } from "./Components/landingPage";
import { CreatePokemon } from "./Components/createPokemon";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/createpokemon" component={CreatePokemon}></Route>
        <Route exact path="/detalle/:id" component={Detail}></Route>
        <Route path="/*" component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
