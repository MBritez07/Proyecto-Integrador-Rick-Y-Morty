

const { getChardById } = require("../controllers/getCharById")
const  {postFav,deleteFav} = require("../controllers/handleFavorites" )
const { login } = require( "../controllers/login")
const router = require ('express').Router();

router.get('/character/:id' , (req,res)=> { //otra forma de hacer estas lineas es la siguiente :
    getChardById(req,res);                   //router.get('/getCharById', getCahrById); ya que estariamos invocando/redireccionando a getCharById (req,res) en su respectivo archivo

})
router.get("/login",login);

router.post("/fav" , (req,res)=>{
postFav (req,res);
})
router.delete("/fav/:id",(req,res) =>{
deleteFav (req,res); 
});


module.exports =  router;