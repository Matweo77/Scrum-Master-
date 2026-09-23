// script.js — Morguez Coffee Shop
// Interactividad: menú móvil, año dinámico y envío de pedido con saludo

document.addEventListener('DOMContentLoaded', () => {

  // 1. Año automático en el footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Menú móvil (hamburguesa)
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // 3. Formulario de pedido: saludo con alert + mensaje en pantalla
  const orderForm = document.getElementById('orderForm');
  const formMsg = document.getElementById('formMsg');

  if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const pedido = document.getElementById('pedido').value;

      if (!nombre || !pedido) {
        formMsg.textContent = 'Por favor completa tu nombre y elige un pedido ☕';
        formMsg.style.color = '#c0392b';
        return;
      }

      // Saludo dinámico al usuario
      alert(`¡Hola, ${nombre}! 👋 Tu pedido de "${pedido}" fue recibido. En 15-25 minutos estará en tu puerta.`);

      formMsg.textContent = `Gracias, ${nombre}. Tu pedido se está preparando ☕🔥`;
      formMsg.style.color = '#2e7d32';

      orderForm.reset();
    });
  }

});
