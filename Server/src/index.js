const server= require ('./app')
const PORT =3001;
const { conn } = require('./DB_connection');

conn.sync({alter: true}).then(()=>{                    //conectada y sincronizada la DB
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
}) 
.catch(err => console.log("No se ha podido sincronizar la DB con el servidor "));