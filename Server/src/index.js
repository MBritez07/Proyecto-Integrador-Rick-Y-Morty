// const {getChardById} = require('./controllers/getCharById');

const express = require('express');
const server = express();
const router =require('./routes/index')
const morgan =require('morgan')
const PORT =3001;

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use('/rickandmorty',router);

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});


// server.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });

// server.get('/rickandmorty/character/:id', (req, res) => {
//   const id = req.params.id;
//   getChardById(res, +id);
// });





////////////////////////////////////////////////////////////////////////////////

// const http = require('http');
// const {getChardById} = require('./controllers/getCharById');


// http
// .createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // Verifica si la url incluye "/rickandmorty/character"
//     if (req.url.includes('/rickandmorty/character')) {
//       const id= req.url.split('/').at(-1);
//       getChardById(res,+id);
//     }
// })

// server.get("/rickandmorty/character",(req,res)=>{
//   const id= req.url.split('/').at(-1);
//   res.send (getChardById(res,+id))
// })

// .listen(3001, '0.0.0.0', () => {
//   console.log('Server running at http://0.0.0.0:3001/');
// });

