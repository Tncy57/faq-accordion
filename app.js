const plusIcons = document.querySelectorAll('.icon-plus');

plusIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    const minus = icon.nextElementSibling; 
    const parent = icon.parentElement;
    const p = parent.nextElementSibling;

    p.style.display = 'block';
    icon.style.display = 'none'; 
    minus.style.display = 'block'; 
  });
});

const minusIcons = document.querySelectorAll('.icon-minus');

minusIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    const parent = icon.parentElement;
    const p = parent.nextElementSibling; 

    p.style.display = 'none';
    icon.style.display = 'none'; 
    icon.previousElementSibling.style.display = 'block'; 
  });
});
