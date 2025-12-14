document.addEventListener('DOMContentLoaded', () => {

  const modal = document.getElementById('enquiryModal');
  const closeModal = document.getElementById('closeModal');
  const productInput = document.getElementById('productName');
  const form = document.getElementById('enquiryForm');

  if (!modal || !closeModal || !form) return;

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      productInput.value = btn.dataset.product || '';
      modal.classList.add('active');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hello, I would like to request the following piece:

Product: ${productInput.value}
Name: ${document.getElementById('name').value}
Email: ${document.getElementById('email').value}
Size: ${document.getElementById('size').value}
Message: ${document.getElementById('message').value}`
    );

    window.open(
      `https://wa.me/233573029246?text=${text}`,
      '_blank'
    );
  });

});

