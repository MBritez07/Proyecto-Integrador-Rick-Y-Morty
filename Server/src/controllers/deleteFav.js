const { Favorite } = require('../DB_connection');

  const deleteFav = async (req, res) =>{
  const { id } = req.params;

  try {
    // Buscar y eliminar el personaje favorito
    const deletedFavorite = await Favorite.destroy({
      where: { id },
    });

    if (deletedFavorite === 0) {
      // No se encontró un personaje con ese id
      return res.status(404).json({ message: 'Personaje favorito no encontrado' });
    }
    const favorites = await Favorite.findAll();
    return res.json(favorites);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  deleteFav,
};
