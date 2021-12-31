import React,{useState} from "react"


export const  SearchBar= ()=>{

    const [search, setSearch]=useState("")

    
    const handleChange=(e)=>{
    
        setSearch(e.target.value)
    }

    return(
        <form>
            <input type="text"  name="search" value={search} placeholder="Aqui va tu pokemon" onChange={handleChange}></input>
            <input type="submit" value="buscar" />
        </form>
    )
}