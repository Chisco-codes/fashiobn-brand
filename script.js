document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     MODAL LOGIC
  ========================= */

  const modal = document.getElementById('enquiryModal');
  const closeModal = document.getElementById('closeModal');
  const productInput = document.getElementById('productName');
  const modalPrice = document.getElementById('modalPrice');

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      productInput.value = btn.dataset.product;
      modalPrice.textContent = btn.dataset.price;

      modal.classList.add('active');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  /* =========================
     WHATSAPP SUBMISSION
  ========================= */

  document.getElementById('enquiryForm').addEventListener('submit', e => {
    e.preventDefault();

    const product = productInput.value;
    const price = modalPrice.textContent;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const size = document.getElementById('size').value;
    const message = document.getElementById('message').value;
const text =
  `Hello, I would like to request a piece.%0A%0A` +
  `Product: ${product}%0A` +
  `Price: ${price}%0A` +
  `Size: ${size}%0A%0A` +
  `Customer Details:%0A` +
  `Name: ${name}%0A` +
  `Phone: ${phone}%0A` +
  `Email: ${email}%0A%0A` +
  `Message:%0A${message}`;

    /* 🔴 CHANGE NUMBER HERE */
    const phoneNumber = '233XXXXXXXXX';

    window.open(
      `https://wa.me/${phoneNumber}?text=${text}`,
      '_blank'
    );
  });

  /* =========================
     IMAGE SWAP GALLERY
  ========================= */

  document.querySelectorAll('.product-gallery').forEach(gallery => {
    const mainImage = gallery.querySelector('.main-image');
    const thumbs = gallery.querySelectorAll('.thumbs img');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;

        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  });

});

