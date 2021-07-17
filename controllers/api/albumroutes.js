const router = require('express').Router();
const {Album, Comment, Genre, Playlist, Tag, User} = require('../../models');

router.get('/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
      const albumData = await Album.findByPk(req.params.id, {
        include: [Genre, Tag, Comment]
      });
  
      if (!albumData) {
        res.status(404).json({ message: 'No album found with this id!' });
        return;
      }
  
      res.status(200).json(albumData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
