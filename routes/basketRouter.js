const router = require('express').Router();
const { Card, User } = require('../db/models');
const addCityKey = require('../helpers/addCityKey');

router.route('/')
  .get(async (req, res) => {
    let cards;

    if (req.session.isAuthorized) {
      const userId = req.session.user.id;
      // вытаскивается из базы данных Basket
      // не забыть поменять, Cards в тестовом режиме
      cards = await Card.findAll({
        where: {
          userId,
        },
        raw: true,
        include: {
          model: User,
          attributes: ['city'],
        },
      });

      addCityKey(cards);
    }

    res.render('basket', {
      isAuthorized: req.session.isAuthorized,
      cards,
    });
  });

router.route('/:id')
  .delete(async (req, res) => {
    if (req.session.isAuthorized) {
      const { id } = req.params;
      // удаляется из базы данных Basket
      // не забыть поменять, Cards в тестовом режиме

      await Card.destroy({
        where: { id },
      });
      return res.status(201);
    }
    res.status(404).redirect('/');
  });

// router.route('add/:id')
//   .post(async (req, res) => {
//     if (req.session.isAuthorized) {
//       const { cardId, userId } = req.body;

//       await Card.cra({
//         where: { id },
//       });
//       return res.send('ok');
//     }
//     res.status(404).redirect('/');
//   });

module.exports = router;
