
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
      };

    case FILTER:
      const allCharactersfiltered = state.allCharacters.filter(
        (char) => char.gender === payload
      );

      return {
        ...state,
        myFavorites: allCharactersfiltered,
        allCharacters: state.allCharacters,
      };

    case ORDER:
      const allCharactersFavCopy = [...state.myFavorites];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
        allCharacters: state.allCharacters,
      };

    default:
      return { ...state };
  }
};

export default reducer;

// import { ADD_FAVORITE, REMOVE_FAVORITE,FILTER,ORDER } from "./action";
// const initialState ={
//     myFavorites: [],
//     allCharacters:[],
// };
// const reducer = (state=initialState,{type, payLoad}) =>{
//     switch(type){
//         case ADD_FAVORITE :
//             return {
//                 ...state, 
//                 myFavorites: payLoad,
//                 allCharacters: payLoad
//             };

//         case REMOVE_FAVORITE:
//             return {
//                 ...state, 
//                 myFavorites: payLoad
//             };

//         case FILTER:
//             const allCharactersfiltered = state.allCharacters.filter(char => char.gender === payLoad);

//             return {
//                 ...state,
//                 myFavorites: allCharactersfiltered,
//                 allCharacters: state.allCharacters,
//             }
        
//         case ORDER:
//             const allCharactersFavCopy = [...state.myFavorites];
//             return {
//                 ...state,
//                 myFavorites: payLoad==="A"
//                     ? allCharactersFavCopy.sort((a,b)=>a.id - b.id)
//                     : allCharactersFavCopy.sort((a,b)=>b.id-a.id),
//                 allCharacters: state.allCharacters,
//             }

//         default : 
//             return {...state};
//     }
// };
// export default reducer;