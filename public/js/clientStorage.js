if (document.querySelectorAll('.deleteStorageButton')) {
  const buttons = document.querySelectorAll('.deleteStorageButton');

  buttons.forEach((el) => {
    el.addEventListener('click', async (event) => {
      event.preventDefault();

      const storageCard = el.parentElement;
      const storageId = storageCard.id;

      await fetch(`/storage/${storageId}`, {
        method: 'DELETE',
      });

      storageCard.remove();
    });
  });
}
