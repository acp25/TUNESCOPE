const router = require("express").Router();
const { Album, Genre } = require("../models");

router.get("/", async (req, res) => {
  try {
    const albumData = await Album.findAll({
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(albumData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
