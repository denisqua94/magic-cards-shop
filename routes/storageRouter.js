const router = require('express').Router();
const { Card, User } = require('../db/models');
const addCityKey = require('../helpers/addCityKey');

router.get('/', async (req, res) => {
  if (req.session.isAuthorized) {
    const userId = req.session.user.id;
    console.log(userId);
    const cards = await Card.findAll({
      where: { userId },
      raw: true,
      include: {
        model: User,
        attributes: ['city'],
      },
    });
    addCityKey(cards);

    return res.render('storage', {
      isAuthorized: req.session.isAuthorized,
      cards,
    });
  }

  res.redirect('/');
});

router.delete('/:id', async (req, res) => {
  if (req.session.isAuthorized) {
    const { id } = req.params;
    console.log(id);
    await Card.destroy({
      where: { id },
    });
    return res.status(201).end();
  }
  res.redirect('/');
});

module.exports = router;
