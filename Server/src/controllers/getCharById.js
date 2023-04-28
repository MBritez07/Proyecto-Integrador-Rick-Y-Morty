const axios = require('axios');
const URL =  "https://rickandmortyapi.com/api/character/"

const getChardById=(req,res)=>{
    const {id} = req.params;

// Por defoult axios hace . get, otra forma de hacer esto es = axios.get(`http://rickandmortyapi.com/api/character/${id}`) y significa lo mismo
axios(`${URL}/${id}`) 
.then(response=>response.data)  // en esta response me quedo con data (response.data)
.then(({id, status, name, species, origin, image, gender})=>{
    if (name){
    const character={
        id,
        name,
        species,
        origin,
        image,
        gender,
        status

    }
return res.status(200).json(character)
}
return res.status(404).send("Not found");
  
})
.catch(error=> res.status(500).send(error.messange))
}


module.exports = 
{getChardById};