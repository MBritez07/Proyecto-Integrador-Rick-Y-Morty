import { connect,useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./favorite.module.css";
import { filterCards, orderCards } from "../../Redux/action";



const Favorites =({myFavorites})=>{
    const dispatch = useDispatch();
    const handleOrder = (event)=>
    dispatch(orderCards(event.target.value));
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value));
    }

    return (
        <>
           
                  <select onChange={handleFilter}>
                         <option value="Male">Male</option>
                         <option value="Female">Female</option>
                         <option value="Genderless">Genderless</option>
                             <option value="unknown">unknown</option>
                                </select>
                                
                    <select onChange={handleOrder}>
                        <option value="A"><p>Ascendente</p></option>
                        <option value="D"><p>Descendente</p></option>
                    </select>

            {myFavorites?.map(fav => (
                <div className={style.fondo}>
                 <div>
                <div className={style.container} >
              
                    <Card
                        id={fav.id}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        origin={fav.origin}
                        image={fav.image}
                        onClose={fav.onClose}
                    />
                </div>
            </div>
                </div>
            ))}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        orderCards: (order) => dispatch(orderCards(order)),
        filterCards: (filter) => dispatch(filterCards(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);