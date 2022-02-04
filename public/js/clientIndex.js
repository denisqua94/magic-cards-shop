if (document.querySelectorAll('.addButton')) {
  const buttons = document.querySelectorAll('.addButton');

  buttons.forEach((el) => {
    el.addEventListener('click', async (event) => {
      event.preventDefault();

      const cardId = el.parentElement.id;
      console.log(cardId);

      // await fetch(`/basket/${basketId}`, {
      // //   method: 'DELETE',
      // });

      // basketCard.remove();
    });
  });
}
