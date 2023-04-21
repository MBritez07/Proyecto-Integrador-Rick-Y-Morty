const http = require('http');
const {getChardById} = require('./controllers/getCharById');


http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Verifica si la url incluye "/rickandmorty/character"
    if (req.url.includes('/rickandmorty/character')) {
      const id= req.url.split('/').at(-1);
      getChardById(res,+id);
    }
})
.listen(3001, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:3001/');
});