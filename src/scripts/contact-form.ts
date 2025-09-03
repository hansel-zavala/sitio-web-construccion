// src/scripts/contact-form.ts

const contactForm = document.querySelector<HTMLFormElement>('#contact-form');
const successMessage = document.querySelector<HTMLElement>('#success-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    const formData = new FormData(contactForm);
    
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Si el envío fue exitoso...
        if (successMessage && contactForm) {
          successMessage.classList.remove('hidden'); // Muestra el mensaje de éxito
          contactForm.classList.add('hidden');      // Oculta el formulario
        }
      } else {
        // Si hubo un error en el envío...
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      // Si hubo un error de red...
      alert('There was a network error. Please try again.');
    }
  });
}