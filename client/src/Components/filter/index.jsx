import React,{useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getPokemon, filterBy, filterCreate} from '../../Actions'

const Filter= ()=>{
    const {push}= useHistory()
    const dispatch = useDispatch()
    const types= useSelector((state) => state.types)
    const pokemon= useSelector((state) => state.filter)
    const [filter, setFilter]=useState("")
    const [ filterC, setFilterC]=useState("")
    const handleChangeF= (e)=>{
      setFilter(e.target.value)

    }
    const handleChangeC= (e)=>{
        setFilterC(e.target.value)
    }
    const handleClear= (e)=>{
        dispatch(getPokemon())
        setTimeout(() => {
            push("/home")
        },300);
    }

    const handleFiltrar=(e)=>{
        
        let pivote=pokemon.filter((data) => data.types.includes(filter))
        console.log(pivote)
        dispatch(filterBy(pivote))
    }
    
    const handleBuscar=(e)=>{
        
    }

    return (
        <div>
            <div>
               <select onChange={handleChangeF}>
                   {types.map(({name})=>{
                       return <option value={name}>{name}</option>
                   })}
               </select>
                <input  type="submit"  onClick={handleFiltrar} value="Filtrar" />
            </div>
            <div>
                <select name="creado" onChange={handleChangeC}>
                    <option value="--">--</option>
                   <option value="creado">Creado</option>
                   <option value="existente">Existente</option>
                </select>
                <input type="submit" value="buscar" />
            </div>
            <button  onClick={handleClear}>AllPokemon</button>
        </div>
    )
}

export default Filter;