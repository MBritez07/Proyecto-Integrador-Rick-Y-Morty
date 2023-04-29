import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./favorite.module.css";
import { filterCards, orderCards, removeFav } from "../../Redux/action";

const Favorites = ({ myFavorites, isEmpty }) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => dispatch(orderCards(event.target.value));
  const handleFilter = (event) => dispatch(filterCards(event.target.value));

  const removeFromFavorites = (id) => {
    dispatch(removeFav(id));
  };

  return (
    <div className={isEmpty ? style.fondo1 : ""}>
      <div className="fondo-contenedor">
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
  
        <select onChange={handleOrder}>
          <option value="A">
            <p>Ascendente</p>
          </option>
          <option value="D">
            <p>Descendente</p>
          </option>
        </select>
  
        {isEmpty ? null : (
          myFavorites?.map((fav) => (
            <div className={style.fondo}>
              <div>
                <div className={style.container}>
                  <Card
                    id={fav.id}
                    name={fav.name}
                    status={fav.status}
                    species={fav.species}
                    gender={fav.gender}
                    origin={fav.origin}
                    image={fav.image}
                    onClose={() => removeFromFavorites(fav.id)} // Pass a function that calls removeFromFavorites with the id as an argument
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
  }

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    isEmpty: state.myFavorites.length === 0
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderCards: (order) => dispatch(orderCards(order)),
    filterCards: (filter) => dispatch(filterCards(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
