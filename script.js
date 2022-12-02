const registrarseBtn = document.getElementById('registrar-s');
const iniciarBtn = document.getElementById('iniciar-s');
const main = document.getElementById('main');

registrarseBtn.addEventListener('click', () => {
    main.classList.add('container-derecho-activo')
});


iniciarBtn.addEventListener('click', () => {
    main.classList.remove('container-derecho-activo')
});