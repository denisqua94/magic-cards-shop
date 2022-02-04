if (document.querySelectorAll('.deleteBasketButton')) {
  const buttons = document.querySelectorAll('.deleteBasketButton');

  buttons.forEach((el) => {
    el.addEventListener('click', async (event) => {
      event.preventDefault();

      const basketCard = el.parentElement;
      const basketId = basketCard.id;

      await fetch(`/basket/${basketId}`, {
        method: 'DELETE',
      });

      basketCard.remove();
    });
  });
}
