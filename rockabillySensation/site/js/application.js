application = function(){
  var doc = $(document);
  var height = $(document).height();
  var scrollage = (window.scrollY/height)*100;
  var brenna = document.getElementById("brenna");
  var brennaImg = document.getElementById("brenna-img");
  var song = document.getElementById("song");
  function triggerAnimation(scroll){
    scroll = scrollage;
    console.log("Scrolled");
    if (scroll >= 10){
      $(brenna).addClass("shrunken");
      $(song).addClass("lightened");
    }
  }
  triggerAnimation();
  console.log(height);
  console.log(scrollage);
}
application();
