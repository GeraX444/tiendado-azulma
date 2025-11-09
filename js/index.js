
/* index.js */
document.addEventListener('DOMContentLoaded', function(){
  
  const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlide();
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlide();
});

function updateSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[currentSlide].classList.add('active');
}

// Inicializar el carrusel
slides[0].classList.add('active');
setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlide();
}, 5000);

  // basic: mark Inicio link
  document.querySelectorAll('.menu a').forEach(a=>{
    if (a.getAttribute('href') === 'index.html') a.style.fontWeight = '800';
  });
  // simple product click handler
  document.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click', ()=>{
      const titulo = c.querySelector('h3') ? c.querySelector('h3').innerText : 'Producto';
      alert('Seleccionaste: ' + titulo);
    });
  });
});
