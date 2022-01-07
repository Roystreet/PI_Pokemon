import React,{useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { filterBy, filterCreate, allPokemon, getPage} from '../../Actions'
import styles from "./filter.module.css"

const Filter= ()=>{
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
        dispatch(allPokemon(pokemon))
      
    }

    const handleFiltrar=(e)=>{
        
        let pivote=pokemon.filter((data) => data.types.includes(filter))
        dispatch(filterBy(pivote))
        dispatch(getPage())
    }
    
    const handleBuscar=(e)=>{
          if(filterC==="creado"){
              
              dispatch(filterCreate(pokemon.filter((data) => data.id.length>5)))
              dispatch(getPage())
          }else{
              dispatch(filterCreate(pokemon.filter((data) => data.id<1000)))
              dispatch(getPage())
          }
    }

    return (
        <div className={styles.container}>
            <div>
               <select  onChange={handleChangeF}>
                   <option value="--">--</option>
                   {types.map(({name})=>{
                       return <option key={name} value={name}>{name}</option>
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
                <input type="submit" value="buscar" onClick={handleBuscar}  />
            </div>
            <input type="submit" onClick={handleClear} value="Todos"/>
        </div>
    )
}

export default Filter;