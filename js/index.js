
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
        // console.log(slides[prev].src)
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

    var baseUrl = el.getAttribute('src');
    console.log( baseUrl );

    var lastSlashIndex = baseUrl.lastIndexOf('/');
    

    var baseUrl = baseUrl.substring(0, lastSlashIndex ) + "/";

    var path = baseUrl + name + ext;

    //
    var windowWidth = window.innerWidth;

    if(windowWidth < 1100 && windowWidth >= 768) {
      path = baseUrl + name + "_tb" + ext;
      el.src = path;
      return;
    }

    if(windowWidth < 768) {
        path = baseUrl + name + "_sp" + ext;
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

