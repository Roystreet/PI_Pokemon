import React,{useState, useEffect}  from 'react';
import {useDispatch, useSelector} from'react-redux';



const  CreatePokemon= ()=>{

    const [nombre, setNombre]=useState("")
    const [vida, setVida]=useState("")
    const [defensa,setDefensa]=useState("")
    const [ataque, setAtaque]=useState("")
    const [altura, setAltura]=useState("")
    const [velocidad, setVelocidad]=useState("")
    const [peso, setPeso]=useState("")
    const [tipos,setTipos]=useState([])


    const handlChange= (e)=>{

        switch (e.target.name){
            case nombre:
                setNombre(e.target.value)
                break;

            case vida:
                setVida(e.target.value)
                break;
            case defensa:
                setDefensa(e.target.value)
                break;
            case ataque:
                setAtaque(e.target.value)
                break
            case altura:
                setAltura(e.target.value);
                break
            case peso:
                setPeso(e.target.value);
                break;
            case tipos:
                setTipos([...tipos, e.target.value])
                break
            case velocidad:
                setVelocidad(e.target.value)
                break
            default:
                break;



        }
    }

    const handlSubmit=(e)=>{
        e.prevenDefault()

    }
    return <>
    
        <h1> Crea tu pokemon</h1>

        <form >
         <label>Nombre</label>
            <input type="text" name="name" value={nombre}  onChange={handlChange} placeholder="nombre"></input>
         <label>Vida</label>
            <input type="text" name="name" value={vida}  onChange={handlChange} placeholder="vida"></input>
         <label>Defensa</label>

            <input type="text" name="name" value={defensa}  onChange={handlChange} placeholder="defensa"></input>

         <label>Ataque</label>
            <input type="text" name="name" value={ataque}  onChange={handlChange} placeholder="ataque"></input>
         <label>Velocidad</label>
            <input type="text" name="name" value={velocidad}  onChange={handlChange} placeholder="velocidad"></input>
         <label>Altura</label>
            <input type="text" name="name" value={altura}  onChange={handlChange} placeholder="altura "></input>
         <label>Peso</label>
            <input type="text" name="name" value={peso}  onChange={handlChange} placeholder="peso"></input>
         <label>Tipos</label>
            <input type="checkbox" > </input>
    

        </form>
    
    
    </>
}

export default CreatePokemon