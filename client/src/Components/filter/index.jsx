import React,{useState} from 'react';
import { useSelector } from 'react-redux';

const Filter= ()=>{

    const types= useSelector((state) => state.types)
    const [filter, setFilter]=useState("")
    const [ filterC, setFilterC]=useState("")
    const handleChangeF= (e)=>{

        setFilter(e.target.value)
    }
    const handleChangeC= (e)=>{

    }

    return (
        <div>
            <form >
               <select value={filter} onChange={handleChangeF}>
                   {types.map(({name})=>{
                       return <option value={name}>{name}</option>
                   })}
               </select>
                <input type="submit" value="Filtrar" />
            </form>
            <form>
                <select name="creado" onChange={handleChangeC}>
                    <option value="--">--</option>
                   <option value="creado">Creado</option>
                   <option value="existente">Existente</option>
                </select>
                <input type="submit" value="buscar" />
            </form>

        </div>
    )
}

export default Filter;