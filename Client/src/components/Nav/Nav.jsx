import SearchBar from "../SearchBar/SearchBar";
import { NavLink,useNavigate } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ onSearch,access,setAccess}) => {
  const navigate =useNavigate();

const handleLogOut=() => {
  setAccess(false)
  navigate('/')
  }


  return (
    <div className={style.bar1}>
      <SearchBar onSearch={onSearch} />
      <button className={style.myButton}>
        <NavLink to="/about" className={style.link}>About</NavLink> 
      </button>
      <button className={style.myButton}>
        <NavLink to="/home" className={style.link} >Home</NavLink>
      </button>
      <button className={style.myButton}>
        <NavLink to="/favorites" className={style.link} >Favorites</NavLink>
      </button>
      <button onClick={handleLogOut}
      className={style.myButton}>LogOut
      </button>
    </div>
  );
};

export default Nav;