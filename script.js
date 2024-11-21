const button = document.getElementById('btn');
const whiteLamp = document.querySelector('.white-lamp');
const yellowLamp = document.querySelector('.yellow-lamp');

button.addEventListener('click', () => {
   whiteLamp.classList.toggle('d-none');
   yellowLamp.classList.toggle('d-block');
   button.innerHTML = whiteLamp.classList.contains('d-none') ? 'Spegni la lampadina' : 'Accendi la lampadina'
});


