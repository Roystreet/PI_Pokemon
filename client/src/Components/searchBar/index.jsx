import React,{useState} from "react"
import {useHistory} from "react-router-dom"


 const  SearchBar= ()=>{

    const {push}= useHistory()
    const [search, setSearch]=useState("")

    
    const handleChange=(e)=>{
    
        setSearch(e.target.value)
    }
    
    const handleSubmit= (e)=>{
        e.preventDefault()
       setTimeout(() => {
        push(`/detalle/${search}`)
       },300); 
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"  name="search" value={search} placeholder="Aqui va tu pokemon" onChange={handleChange}></input>
            <input type="submit" value="buscar" />
        </form>
    )
}

export default SearchBar;