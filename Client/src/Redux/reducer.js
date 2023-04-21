import { ADD_FAVORITE, REMOVE_FAVORITE,FILTER,ORDER } from "./action";
const initialState ={
    myFavorites: [],
    allCharacters:[],
};
const rootReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_FAVORITE :
            return {
                ...state, 
                myFavorites:[...state.myFavorites, action.payload],
                allCharacters:[...state.allCharacters, action.payload],
            };

        case REMOVE_FAVORITE:
            return {
                ...state, 
                myFavorites: state.myFavorites.filter((char)=> char.id !== action.payload)
            };

        case FILTER:
            const allCharactersfiltered = state.allCharacters.filter(char => char.gender === action.payload);

            return {
                ...state,
                myFavorites: allCharactersfiltered,
                allCharacters: state.allCharacters,
            }
        
        case ORDER:
            const allCharactersFavCopy = [...state.myFavorites];
            return {
                ...state,
                myFavorites: action.payload==="A"
                    ? allCharactersFavCopy.sort((a,b)=>a.id - b.id)
                    : allCharactersFavCopy.sort((a,b)=>b.id-a.id),
                allCharacters: state.allCharacters,
            }

        default : 
            return {...state};
    }
};
export default rootReducer;