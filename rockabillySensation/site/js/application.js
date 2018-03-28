application = function(){
  var doc = $(document);
  var height = $(document).height();
  var scrollage = (window.scrollY/height)*100;
  var brenna = document.getElementById("brenna");
  var brennaImg = document.getElementById("brenna-img");
  var song = document.getElementById("song");
  var x = 0;
  //trigger animations based on scroll placement using CSS keyframe animations
  function triggerAnimation(scroll){
    scroll = scrollage;
    console.log("Scrolled");
    if (scroll >= 10){
      $(brenna).addClass("shrunken");
      $(song).addClass("lightened");
    }
  }
  //first attempt at ScrollMagic
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    offset: 0,
    //you are still abstracting the math to make this last the appropriate amount of time
    duration: "30%",
    reverse: true
  });
  //disabled core function for now, trying to see if I can get something to work
//  triggerAnimation();

//uhhh not sure what to do with this while loop but I'll crush it tonight, right me? Thanks, me
while (x = 0){
  brenna.style.height = scrollage + "%";
};
  console.log(height);
  console.log(scrollage);

}
application();
