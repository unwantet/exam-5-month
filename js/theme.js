
const mode = document.getElementById('theme');

mode.addEventListener('click', function() {

    const body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
        mode.src = '../static/dark-mode.png';

    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
        mode.src = '../static/light-mode.png';
    }
});
