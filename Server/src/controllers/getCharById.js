const axios = require('axios');
const URL =  "https://rickandmortyapi.com/api/character/"

const getChardById = async(req,res)=>{
  try {
    const {id} = req.params;
    const {data}= await axios(`${URL}/${id}`) // Por defoult axios hace . get, otra forma de hacer esto es = axios.get(`http://rickandmortyapi.com/api/character/${id}`) y significa lo mismo

    if (!data.name) throw new Error(`ID: ${id} Not found`);
    const character={
        id:data.id,
        name:data.name,
        species:data.species,
        origin:data.origin,
        image:data.image,
        gender:data.gender,
        status:data.status

    }
return res.status(200).json(character)

  } catch (error) {
    error.messange.incluides = (`ID`)
    ?res.status(404).send (error.messange) 
    :res.status(500).send(error.messange)  
  }
}


module.exports = 
{getChardById};