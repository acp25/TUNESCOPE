const router = require("express").Router();
// const { Album, Genre } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render('explore', {layout: 'main'});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;