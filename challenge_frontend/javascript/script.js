document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const bot = document.getElementById('chatbot-icon');
  if (bot) {
    bot.addEventListener('click', () => {
      alert('Você será direcionado para o Dr. José!');
    });
  }
});