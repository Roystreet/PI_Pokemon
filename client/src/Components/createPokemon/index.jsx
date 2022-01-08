import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./createPokemon.module.css";
import NavBar from "../navBar";
import { useHistory } from "react-router-dom";

const CreatePokemon = () => {
  const types = useSelector((state) => state.types);
  const { push } = useHistory();
  const [nombre, setNombre] = useState("");
  const [vida, setVida] = useState("");
  const [defensa, setDefensa] = useState("");
  const [ataque, setAtaque] = useState("");
  const [altura, setAltura] = useState("");
  const [velocidad, setVelocidad] = useState("");
  const [peso, setPeso] = useState("");
  const [imagen, setImagen] = useState("");
  const [type, setType] = useState([]);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "nombre":
        setNombre(e.target.value);
        break;
      case "vida":
        setVida(e.target.value);
        break;
      case "defensa":
        setDefensa(e.target.value);
        break;
      case "ataque":
        setAtaque(e.target.value);
        break;
      case "altura":
        setAltura(e.target.value);
        break;
      case "velocidad":
        setVelocidad(e.target.value);
        break;
      case "peso":
        setPeso(e.target.value);
        break;
      case "imagen":
        setImagen(e.target.value);
        break;
      case "type":
        setType([...type, parseInt(e.target.value)]);
        break;
      default:
        break;
    }
  };

  const handleBlur = (e) => {
    if (!nombre) {
      setError({
        ...error,
        [e.target.name]: `El campo ${e.target.name} no puede estar vacio`,
      });
    } else {
      setError({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "") {
      return alert("el campo nombre no puede estar vacio");
    } else if (vida === "") {
      return alert("el campo vida no puede estar vacio");
    } else if (ataque === "") {
      return alert("el campo ataque no puede estar vacio");
    } else if (defensa === "") {
      return alert("el campo defensa no puede estar vacio");
    } else if (velocidad === "") {
      return alert("el campo velocidad no puede estar vacio");
    } else if (altura === "") {
      return alert("el campo altura no puede estar vacio");
    } else if (peso === "") {
      return alert("el campo peso no puede estar vacio");
    } else if (types.lenght <= 0) {
      return alert("el campo types no puede estar vacio");
    } else {
      axios
        .post("http://localhost:3001/pokemon", {
          name: nombre,
          img: imagen,
          hp: vida,
          atk: ataque,
          def: defensa,
          vel: velocidad,
          height: altura,
          weight: peso,
          types: type,
        })
        .then(() => alert("Creado Pokemon de manera exitosa "))
        .then(() => {
          setNombre("");
          setImagen("");
          setVida("");
          setAtaque("");
          setDefensa("");
          setVelocidad("");
          setAltura("");
          setPeso("");
          setType([]);
        })
        .then(() => push("/home"));
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.form_pokemon}>
        <div className={styles.new_pokemon}>
          <form onSubmit={handleSubmit} className={styles.part_cart}>
            <h1> Crear Pokemon</h1>
            <label>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Nombre pokemon"
              name="nombre"
            ></input>
            {error.nombre && (
              <p className={styles.msg_error}> {error.nombre}</p>
            )}
            <label>Vida: {vida}</label>
            <input
              type="range"
              value={vida}
              onChange={handleChange}
              placeholder="Vida del pokemon"
              name="vida"
              min="0"
              max="100"
            ></input>
            <label>Defensa:{defensa}</label>
            <input
              type="range"
              value={defensa}
              onChange={handleChange}
              placeholder="Defensa del pokemon"
              name="defensa"
            ></input>
            <label>Ataque:{ataque}</label>
            <input
              type="range"
              value={ataque}
              onChange={handleChange}
              placeholder="Ataque del pokemon"
              name="ataque"
            ></input>
            <label>Altura:{altura}</label>
            <input
              type="range"
              value={altura}
              onChange={handleChange}
              placeholder="Altura del pokemon"
              name="altura"
            ></input>
            <label>velocidad:{velocidad}</label>
            <input
              type="range"
              value={velocidad}
              onChange={handleChange}
              placeholder="Velocidad del pokemon"
              name="velocidad"
            ></input>
            <label>peso:{peso}</label>
            <input
              type="range"
              value={peso}
              onChange={handleChange}
              placeholder="peso del pokemon"
              name="peso"
            ></input>
            <label>imagen</label>
            <input
              type="text"
              value={imagen}
              onChange={handleChange}
              placeholder="Imagen del pokemon"
              name="imagen"
            ></input>
            <div className={styles.types}>
              {types.map(({ id, name }) => {
                return (
                  <div key={id}>
                    <input
                      type="checkbox"
                      value={id}
                      name="type"
                      onChange={handleChange}
                    />
                    <label name={name}>{name}</label>
                  </div>
                );
              })}
            </div>
            <div className={styles.container_flex}>
              <input
                className={styles.create}
                type="submit"
                value="crear pokemon"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePokemon;
