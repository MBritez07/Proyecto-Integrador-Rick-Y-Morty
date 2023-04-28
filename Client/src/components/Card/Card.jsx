import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/action";
import { useState } from "react";
import { useEffect } from "react";


const Card=({id, name, status, species, gender, origin, image, onClose,addFav,removeFav,myFavorites })=>{
const [isFavorite,setIsFavorite]=useState(false);

const handleFavorites = () => {
  if (isFavorite) {
    setIsFavorite(false);
    removeFav(id);
  } else {
    if (!isFavorite) {
      setIsFavorite(true);
      addFav({
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
         <button onClick={() => onClose(id)} className={style.closebutton}>X</button>

      </div>
   );
}
const mapDispatchToProps = (dispatch)=>{
return {
   addFav: (character)=>{ dispatch(addFav(character))
   },
   removeFav: (id) => { dispatch(removeFav(id));
   },
 };
};
const mapStateToProps = (state)=>{
   return {myFavorites: state.myFavorites,}
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
