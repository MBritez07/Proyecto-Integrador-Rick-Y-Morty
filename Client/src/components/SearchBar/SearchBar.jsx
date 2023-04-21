
import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
   const[id, setId]=useState("");
   const handleChange = (event) => {
   setId(event.target.value)
   }
     return (
       <div className={style.bar}>
       <h1
       className={style.searchmenu1}>Welcome to the Rick and Morty Card Search! Please enter a number and click "Add" to begin.</h1>
   
       <input type="search" onChange={handleChange} value={id} className={style.searchinput} />
       <button 
       className={style.searchbutton}
        onClick={()=> {onSearch(id) ;setId("") }}>Agregar </button> 
   
   </div>
   );
     }