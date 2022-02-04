const addCityKey = (cards) => {
  cards.map((card) => {
    card.city = card['User.city'];
    delete card['User.city'];
  });
};

module.exports = addCityKey;
