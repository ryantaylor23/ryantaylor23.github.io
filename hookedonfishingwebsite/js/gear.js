"use strict";

$(document).ready( () => {
  let nextSlide = $("#slide img:first-child");

  const runSlideShow = () => {
    $("#caption").fadeOut(1000);
    $("#slide").fadeOut(1000, () => {
      if (nextSlide.next().length == 0) {
        nextSlide = $("#slides img:first-child");
      } 
      else {
        nextSlide = nextSlide.next();
      }
      const nextSlideSource = nextSlide.attr("src");
      const nextCaption = nextSlide.attr("alt");
      $("#slide").attr("src", nextSlideSource).fadeIn(1000);
      $("#caption").text(nextCaption).fadeIn(1000);
    }
    );
};

   let timer1 = setInterval(runSlideShow, 3000);

   $("#slide").click( () => {
       if (timer1 != null) {
       clearInterval(timer1);
       timer1 = null;
    }
     else {
      runSlideShow();
      timer1 = setInterval(runSlideShow, 3000);
    }
  });
});