const router = require('express').Router();

const { Card } = require('../db/models');

router.get('/', (req, res) => {
  if (req.session.isAuthorized) {
    return res.render('addcard', { isAuthorized: req.session.isAuthorized });
  }
  res.redirect('/');
});

router.post('/', async (req, res) => {
  const {
    cardsName, img, condition, price,
  } = req.body;
  try {
    await Card.create({
      cardsName,
      img,
      condition,
      price,
      userId: req.session.user.id,
    });
    res.json({ status: 'Ok' });
  } catch (error) {
    res.json({ status: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const oneCard = await Card.findOne({
    where: { id },
    raw: true,
  });
  res.render('edit', { oneCard });
});

router.put('/:id', async (req, res) => {
  const {
    cardsName, price, img, condition,
  } = req.body;
  try {
    await Card.update({
      cardsName,
      price,
      img,
      condition,
    }, {
      where: { id: req.params.id },
    });
    res.json({ status: 'Ok' });
  } catch (error) {
    res.json({ status: error.message });
  }
});

router.get('/:id', async (req, res, next) => {
  const cards = await Card.findOne({
    where: { id: req.params.id },
    raw: true,
  });
  res.redirect('edit', { cards });
});

router.delete('/delete/:id', async (req, res, next) => {
  await Card.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
