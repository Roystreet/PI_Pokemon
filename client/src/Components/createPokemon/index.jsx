import React,{useState}  from 'react';
import {useSelector} from'react-redux';
import axios from "axios";
import styles from "./createPokemon.module.css"



export const  CreatePokemon= ()=>{

    const  types= useSelector((state)=> state.types)
    const [nombre, setNombre]=useState("")
    const [vida, setVida]=useState("")
    const [defensa,setDefensa]=useState("")
    const [ataque, setAtaque]=useState("")
    const [altura, setAltura]=useState("")
    const [velocidad, setVelocidad]=useState("")
    const [peso, setPeso]=useState("");
    const [imagen, setImagen]=useState("");
    const [type,setType]=useState([])
    
    const handleChange=(e)=>{
        
        switch (e.target.name){
            case 'nombre': setNombre(e.target.value); break;
            case 'vida':  setVida(e.target.value); break;
            case 'defensa':  setDefensa(e.target.value); break;
            case 'ataque':  setAtaque(e.target.value); break;
            case  'altura':  setAltura(e.target.value); break;
            case 'velocidad':  setVelocidad(e.target.value); break;
            case 'peso':  setPeso(e.target.value); break;
            case 'imagen':  setImagen(e.target.value); break;
            case  'type': setType([...type, parseInt(e.target.value)]); break;
            default: break;
                
        }
        
        
    }

    const handleError = (e) => {

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/pokemon",{
            name: nombre,
            img: imagen,
            hp: vida,
            atk: ataque,
            def: defensa,
            vel: velocidad,
            height: altura,
            weight: peso,
            types: type,
        }).then((response)=>alert("Creado Pokemon de manera exitosa ")).then(()=>{
            setNombre("")
            setImagen("")
            setVida("")
            setAtaque("")
            setDefensa("")
            setVelocidad("")
            setAltura("")
            setPeso("")
            setType([])
            
        })
        
    }
    
  return (<>
            <div className={styles.form_pokemon} onSubmit={handleSubmit}>
                <div className={styles.new_pokemon}>
                 <form onSubmit={handleSubmit} className={styles.part_cart} >
                    <h1> Crear Pokemon</h1>
                    <label>Nombre</label> 
                    <input type="text" value={nombre} onChange={handleChange} placeholder="Nombre pokemon" name='nombre' ></input>
                    <label>Vida: {vida}</label> 
                    <input type="range" value={vida} onChange={handleChange} placeholder="Vida del pokemon"  name='vida'  ></input>
                    <label>Defensa:{defensa}</label>
                    <input type="range" value={defensa} onChange={handleChange} placeholder="Defensa del pokemon" name='defensa'   ></input>
                    <label>Ataque:{ataque}</label>
                    <input type="range" value={ataque} onChange={handleChange} placeholder="Ataque del pokemon"  name='ataque'  ></input>
                    <label>Altura:{altura}</label>
                    <input type="range" value={altura} onChange={handleChange} placeholder="Altura del pokemon"  name='altura'  ></input>
                    <label>velocidad:{velocidad}</label>
                    <input type="range" value={velocidad} onChange={handleChange} placeholder="Velocidad del pokemon" name='velocidad'  ></input>
                    <label>peso:{peso}</label>
                    <input type="range" value={peso} onChange={handleChange} placeholder="peso del pokemon"  name='peso'  ></input>
                    <label>imagen</label>
                    <input type="text" value={imagen} onChange={handleChange} placeholder="Imagen del pokemon" name='imagen'></input>
                    <form onSubmit={handleSubmit} className={styles.types}>
                        {types.map(({id, name})=>{
                            return( <div key={id}>
                                <input type="checkbox" 
                                value={id} 
                                name="type" 
                                onChange={handleChange} /> 
                                <label name={name}>{name}</label>
                            </div>)
                        })}
                         
                    </form  >
                    <input type="submit" value="crear pokemon" />
                </form>
                </div>
                
                
             
             </div>
    
    </>)
}