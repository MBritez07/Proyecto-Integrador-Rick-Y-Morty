import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../Redux/action";
import { useState } from "react";
import { useEffect } from "react";


const Card=({id, name, status, species, gender, origin, image, onClose,addFavorite,removeFavorite,myFavorites })=>{
const [isFavorite,setIsFavorite]=useState(false);

const handleFavorites = () => {
  if (isFavorite) {
    setIsFavorite(false);
    removeFavorite(id);
  } else {
    if (!isFavorite) {
      setIsFavorite(true);
      addFavorite({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
      });
    }
  }
};


useEffect(() =>{
   myFavorites.forEach((favorite)=>{
      if (favorite.id === id){
         setIsFavorite(true);
   }});
}, [myFavorites]);


    return (
      <div className={style.container}>
     
         <img src={image} alt='' />

      {isFavorite ? (
            <button  onClick={handleFavorites}class={style.favbutton}>✪</button>
            ):(
            <button  onClick={handleFavorites}class={style.favbutton}>☆</button>)}

         <NavLink to={`/Detail/${id}`} className={style.link}>
         <h2>{name}</h2>
         </NavLink>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
         <button onClick={()=>onClose(id)} class={style.closebutton}>X</button>

      </div>
   );
}
const mapDispatchToProps = (dispatch)=>{
return {
   addFavorite: (character)=>{ dispatch(addFavorite(character))
   },
   removeFavorite: (id) => { dispatch(removeFavorite(id));
   },
 };
};
const mapStateToProps = (state)=>{
   return {myFavorites: state.myFavorites,}
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
