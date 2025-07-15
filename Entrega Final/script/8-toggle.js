// oscuro -claro
document.addEventListener('DOMContentLoaded', () =>{
    const toggleButton = document.getElementById('toggle-theme');
    const icono = document.getElementById('icono');
    const temaGuardado = localStorage.getItem('tema') || 'light';

    document.body.setAttribute('data-bs-theme', temaGuardado);
    icono.classList.remove('fa-sun', 'fa-moon');
    icono.classList.add(temaGuardado === 'dark' ? 'fa-sun' : 'fa-moon');

    toggleButton.addEventListener('click', () =>{
        const temaActual = document.body.getAttribute('data-bs-theme');
        const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-bs-theme', nuevoTema);
        localStorage.setItem('tema', nuevoTema);

        icono.classList.remove('fa-sun','fa-moon');
        icono.classList.add(nuevoTema === 'dark' ? 'fa-sun' : 'fa-moon');
    });
});
