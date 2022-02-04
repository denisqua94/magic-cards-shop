const editCard = document.getElementById('editCard');
editCard?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { action } = event.target;

  const body = {
    cardsName: event.target.cardsName.value,
    price: event.target.price.value,
    img: event.target.img1.value,
    condition: event.target.condition.value,
  };
  const response = await fetch(action, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  if (json.status === 'Ok') {
    document.getElementById('alert').innerText = 'Карточка изменена!';
  } else {
    alert('Изменения не сохранены!!!');
  }
});
