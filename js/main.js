
const btnToggle = document.getElementById('btn-toggle');
const navBar =  document.getElementById('main-nav-bar');
const header =  document.getElementsByClassName('header')[0];

btnToggle.addEventListener('click', function() {

    this.classList.toggle('btn-toggle-open');
    navBar.classList.toggle('nav-bar-close');

});

window.addEventListener("scroll", effectsHeader);

//Header Effects
function effectsHeader() {
    var heigthHeader = header.offsetHeight;
  
     var distance = header.nextElementSibling.getBoundingClientRect().top;

    if ( distance < heigthHeader) {
        
        if (header.classList.contains("header-bottom-shadow")) {
            return;
        }
  
        header.classList.add("header-bottom-shadow");
  
    }else{
        header.classList.remove("header-bottom-shadow");
    }
    
  }
