const router = require('express').Router();
const { Card, User } = require('../db/models');
const addCityKey = require('../helpers/addCityKey');

router.route('/')
  .get(async (req, res) => {
    // вытаскиваем все карты

    const cards = await Card.findAll({
      raw: true,
      include: {
        model: User,
        attributes: ['city'],
      },
    });

    addCityKey(cards);

    res.render('index', {
      isAuthorized: req.session.isAuthorized,
      cards,
    });
  });

module.exports = router;
