gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 

  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


function box(){
  var animatext = document.querySelector("#animatext")
var box = document.querySelector(".box")
animatext.addEventListener("mouseenter", function(){
  box.style.display = "block"
})
animatext.addEventListener("mouseleave", function(){
  box.style.display = "none"
})
}
box();

function photoEffect(){
  var photos = document.querySelectorAll("#animtext")
photos.forEach(function(l){
  l.addEventListener("mouseenter", function(){
    var link=l.getAttribute("data-img")
    box.style.backgroundImage=`url(${link})`
  })
})
}
photoEffect();

function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
swiper();

function loader(){
  var loader = document.querySelector(".loader")
setTimeout(function(){
  loader.style.top="-100%"
},4000)
}
loader();