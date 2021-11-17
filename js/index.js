

const btnToggle = document.getElementById('btn-toggle');
const navBar =  document.getElementById('main-nav-bar');

btnToggle.addEventListener('click', function() {

    this.classList.toggle('btn-toggle-open');
    navBar.classList.toggle('nav-bar-close');

})