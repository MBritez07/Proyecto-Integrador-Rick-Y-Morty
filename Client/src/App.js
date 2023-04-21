import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState} from 'react';
import  axios  from 'axios';
import {Routes,Route } from 'react-router-dom'; //necesario para usar el route
import Forms from './components/Forms/Forms';
import Favorites from './components/favorites/favorites';

function App() {
   //!HOOKS
   let [characters, setCharacters]=useState([]);
   const {pathname}=useLocation();
   const [access, setAccess]= useState(false);
   const navigate = useNavigate();

   useEffect(()=>{
      !access && navigate("/");
   },[access]);

   //Credenciales Fake
    const username= "britezmicaela2@gmail.com";
    const password= "MIIIK07";

   //! EVENTHANDLERS
   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => {
          if (response.status === 200) {
            return response.data;
          } else {
            throw new Error('¡No hay personajes con este ID!');
          }
        })
        .then((data) => {
          setCharacters((oldChars) => [...oldChars, data]);
        })
        .catch(error => {
          alert('¡No hay personajes con este ID!');
        });
    }
    
   let onClose = (id) => {
      const characterfiltered= characters.filter(characters=>
      characters.id !==Number(id))
      setCharacters(characterfiltered)}
      
   const login = (userData)=>{
      if (userData.username===username && userData.password===password){
         setAccess(true);
         navigate("/home");
      }
   }; 

   return (
      <div className='App' style = {{padding: "26px",}}>
      <div className={style.navbar}>
     </div> 
     
      {pathname!=="/" && <Nav onSearch={onSearch} access={access} setAccess={setAccess}/>}
      <Routes>
      <Route path = "/" element={<Forms login= {login}/>}/>
      <Route path='/home' element ={ <Cards characters={characters} 
      onClose={onClose}  />} />
      <Route path='/About' element ={<About/>}></Route>
      <Route path='/favorites' element ={<Favorites/>}></Route>

      <Route path='/Detail/:id' element ={<Detail/>}/>
      </Routes>
     <div>
  </div>
  <hr/>
</div>
      
    
   );
   }
export default App;
