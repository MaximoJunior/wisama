
 const kvTitle = document.getElementsByClassName("kv-title")[0];
 const sliderTitle1 = document.getElementById("slider-title-1");
 const sliderTitle2 = document.getElementById("slider-title-2");

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

        // Set slider title
        const title1 = slides[prev].getAttribute("data-title-1");
        const title2 = slides[prev].getAttribute("data-title-2");
        setSliderTitles( title1, title2 );
        
        // Remove animation 
        kvTitle.style.animationName = "none";

        return;
        
    }
     
    
    if( !slides[prev].classList.contains('kv-slider-item-show') ) {
        slides[prev].classList.add("kv-slider-item-show");
        
        // Set slider title
        const title1 = slides[prev].getAttribute("data-title-1");
        const title2 = slides[prev].getAttribute("data-title-2");
        setSliderTitles( title1, title2 );
    }

    setInterval(() => {

        slider.style.backgroundImage = "url(" + slides[prev].src + ")";
        // console.log(slides[prev].src)
        slides[prev].classList.remove("kv-slider-item-show");
        slides[current].classList.add("kv-slider-item-show");

        // Set slider title
        const title1 = slides[current].getAttribute("data-title-1");
        const title2 = slides[current].getAttribute("data-title-2");
        setSliderTitles( title1, title2 );

        current += 1;
        current = current < length ? current : 0;
        prev = current - 1;
        prev = prev < 0 ? length - 1 : prev;


    }, 12800);

}

sliderTimer();


function setBg(el) {
    
    var baseUrl = el.getAttribute('src');

    var lastSlashIndex = baseUrl.lastIndexOf('/');

    var dataImage = baseUrl.substring(lastSlashIndex + 1 );
    dataImage = dataImage.split('.');

    var name = dataImage[0];

    name = name.replace( /\_(sp|tb)$/, "");

    var ext = "." + dataImage[1];

    // console.log( dataImage )

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

function setSliderTitles( title1, title2 ) {
        sliderTitle1.innerHTML = title1;
        sliderTitle2.innerHTML = title2;
        // console.log("Set Slider")
}


window.addEventListener('resize', function(){

  var slides = document.getElementsByClassName("kv-slider-item");
  var length = slides.length;

  for (let i = 0; i < length; i++) {
      setBg(slides[i]);
  }

});

