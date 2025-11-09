
// bebidas.js - script for Bebidas
document.addEventListener('DOMContentLoaded', function(){
  // highlight current menu link
  const links = document.querySelectorAll('.menu a');
  links.forEach(a=> {
    if (a.getAttribute('href') === 'bebidas.html') a.style.fontWeight = '800';
  });

  // click on product card shows a simple alert (placeholder for modal)
  document.querySelectorAll('.card').forEach((c,i)=>{
    c.addEventListener('click', ()=> {
      const title = c.querySelector('h3') ? c.querySelector('h3').innerText : 'producto';
      alert('Seleccionaste: ' + title + '\nPrecio: ' + (c.querySelector('p')? c.querySelector('p').innerText : '---'));
    });
  });
});
