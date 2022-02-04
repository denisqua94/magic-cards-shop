const addCard = document.getElementById('addCard');
addCard?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { action } = event.target;
  const body = {
    cardsName: event.target.cardsName.value,
    img: event.target.img1.value,
    condition: event.target.condition.value,
    price: event.target.price.value,
  };

  const response = await fetch(action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  if (json.status === 'Ok') {
    addCard.cardsName.value = '';
    addCard.img1.value = '';
    addCard.condition.value = '';
    addCard.price.value = '';
    document.getElementById('alert').innerText = 'Карточка добавлена!';
  } else {
    alert('Ошибка ввода данных!');
  }
});
