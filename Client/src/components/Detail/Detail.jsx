import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Card.module.css";

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '655126203f53.a13a286bc0c531bac065';


const Detail = ()=>{
const {id} = useParams ();
const [character, setCharacter] = useState({});

useEffect(() => {
    console.log("peticion");
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
    return () => setCharacter({});
  }, [id]);
  

 return (
    <div className={style.container}>

    <h2>{character?.name}</h2>
    <h2>{character?.status}</h2>
    <h2>{character?.species}</h2>
    <h2>{character?.gender}</h2>
    <h2>{character?.origin?.name}</h2>
    <img src= {character?.image} alt= { character?.name}></img>
    </div>
 )
 } 
export default Detail;