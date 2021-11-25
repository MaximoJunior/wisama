

const btnToggle = document.getElementById('btn-toggle');
const navBar =  document.getElementById('main-nav-bar');
const header =  document.getElementsByClassName('header')[0];

btnToggle.addEventListener('click', function() {

    this.classList.toggle('btn-toggle-open');
    navBar.classList.toggle('nav-bar-close');

});

// slider
function sliderTimer() {

    var slider = document.getElementsByClassName('kv-slider')[0];
    var slides = document.getElementsByClassName("kv-slider-item");
    var length = slides.length;

    for (let i = 0; i < length; i++) {
        slides[i].classList.remove("kv-slider-item-show-without-animation");
        setBg(slides[i]);
    }

    var current = 1;
    var prev = 0;

    if( length == 1) {
        slides[prev].classList.remove("kv-slider-item-show");
        slides[prev].classList.add("kv-slider-item-show-without-animation");
        return;
    }
     
    
    if( !slides[prev].classList.contains('kv-slider-item-show') ) {
        slides[prev].classList.add("kv-slider-item-show");
    }

    setInterval(() => {

        slider.style.backgroundImage = "url(" + slides[prev].src + ")";
        console.log(slides[prev].src)
        slides[prev].classList.remove("kv-slider-item-show");
        slides[current].classList.add("kv-slider-item-show");

        current += 1;
        current = current < length ? current : 0;
        prev = current - 1;
        prev = prev < 0 ? length - 1 : prev;
      //   console.log(current);
      //   console.log(prev)

    }, 12800);

}

sliderTimer();


function setBg(el) {
    
    var dataImage = el.getAttribute("data-image-name");
    dataImage = dataImage.split('.');
    var name = dataImage[0];
    var ext = "." + dataImage[1];
    console.log("extension:", ext);

    //
    var windowWidth = window.innerWidth;

    var path = "./images/" + name + ext;

    if(windowWidth < 1100 && windowWidth >= 768) {
      path = "./images/" + name + "_tb" + ext;
      el.src = path;
      return;
    }

    if(windowWidth < 768) {
        path = "./images/" + name + "_sp" + ext;
        el.src = path;
        return;
    }

    el.src = path;
}


window.addEventListener('resize', function(){

  var slides = document.getElementsByClassName("kv-slider-item");
  var length = slides.length;

  for (let i = 0; i < length; i++) {
      setBg(slides[i]);
  }

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
