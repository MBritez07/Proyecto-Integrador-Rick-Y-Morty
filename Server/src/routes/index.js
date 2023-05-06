

const { getChardById } = require("../controllers/getCharById")
const  {postFav} = require("../controllers/postFav")
const  {deleteFav} = require("../controllers/deleteFav")
const { login } = require( "../controllers/login")
const router = require ('express').Router();
const {PostUser} = require('../controllers/postUser')




router.get('/character/:id' , (req,res)=> { //otra forma de hacer estas lineas es la siguiente :
    getChardById(req,res);                   //router.get('/getCharById', getCahrById); ya que estariamos invocando/redireccionando a getCharById (req,res) en su respectivo archivo

})
router.get("/login",login);

router.post("/login" , (req,res)=>{
    PostUser (req,res);
    })

router.post("/fav" , (req,res)=>{
postFav (req,res);
})
router.delete("/fav/:id",(req,res) =>{
deleteFav (req,res); 
});


module.exports =  router;