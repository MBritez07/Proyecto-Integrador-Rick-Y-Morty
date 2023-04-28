
const users = require('../utils/users');

const login = (req,res) =>{
 const {email,password} =req.query;


 const userFound =users.find ((user)=> user.email === email && user.password === password)

//return userFound
//  ?res.status(200)json ({ access:true0})
//  :res.status(404).json({ access: false})
if (userFound) return res.status(200).json({access:true}); // si userFound es true se retora access:true (se retorna 202)
return res.status(404).json({access:false});//de lo contrario (evitar poner else, asique se hace esta forma) se retorna error 404

}



module.exports={
    login
}