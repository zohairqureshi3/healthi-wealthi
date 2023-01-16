(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0)
}());

$(document).ready(function () {
  $('.product-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: "<div class='custom-prev'> <span class='arrows'><img src='images/left-arrow.svg' alt='image'/></span></div>",
    nextArrow: " <div class=' custom-next'> <span class='arrows'><img src='images/right-arrow.svg' alt='image'/></span></div>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        }
      }
    ]
  });
});

// Animated Text On Scroll 
// $(document).ready(function () {
//   var controller = new ScrollMagic.Controller();
//   var tlFirstScroll = new TimelineMax();
//   tlFirstScroll
//     .to('.anime-1', 6, { right: "26%" }, "-=6")
//     .to('.anime-2', 6, { left: "25%" }, "-=6")
//   var scene = new ScrollMagic.Scene({
//     triggerElement: ".big-plan",
//     duration: 500,
//     scrub: true,
//   })
//     .setTween(tlFirstScroll)
//     .setPin(".big-plan")
//     .addTo(controller);
//   // Second Animation
//   var txFirstScroll = new TimelineMax();
//   txFirstScroll
//     .to('.anime-3', 6, { right: "26%" }, "-=6")
//     .to('.anime-4', 6, { left: "25%" }, "-=6")
//   var scene = new ScrollMagic.Scene({
//     triggerElement: ".big-plan-1",
//     triggerHook: 0,
//     duration: 500,
//     scrub: true,
//   })
//     .setTween(txFirstScroll)
//     .setPin(".big-plan-1")
//     .addTo(controller);
//     if ($(window).width() < 367) {
//       var txSirstScroll = new TimelineMax();
//       txSirstScroll
//         .to('.anime-3', 1, { right: "-5%" }, "-=3")
//         .to('.anime-4', 1, { left: "5%" }, "-=3")
//       var scene = new ScrollMagic.Scene({
//         triggerElement: ".big-plan-1",
//         triggerHook: 0,
//         duration: 100,
//         scrub: true,
//       })
//         .setTween(txSirstScroll)
//         .setPin(".big-plan-1")
//         .addTo(controller);
//     }
// });


