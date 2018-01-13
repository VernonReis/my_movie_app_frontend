const express = require('express');
const router = express.Router();

// ==============
// MIDDLEWARE
// ==============

router.use(express.urlencoded({ extended: false}));
router.use(express.json());
router.use(express.static('public'));


// ==============
// ROUTES
// ==============

router.get('/', (req, res) => {
  res.render("movies.ejs");
});

router.get('/:id', (req, res) => {
  req.session.activeMovie = req.params.id;
  res.render("movies.ejs");
});

router.get('/activemovie', (req, res) => {
  res.send(req.session.activemovie);
});

module.exports = router;
