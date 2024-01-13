 var sliderMain = document.querySelector('.slider-main');
 let item = sliderMain.getElementsByClassName('item');
 function next() {
 	sliderMain.append(item[0]);
 }
 function prev() {
	 	sliderMain.prepend(item[item.length-1]);
 }
  setInterval(
	next, 1500
)

    

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            }
        }
    });


function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
    }

    let myButton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
      if (document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
      }
      else { myButton.style.display = "none"; }
    }
    function topFunction() {
      document.documentElement.scrollTop = 0;
    }
	
$('.testimonials-slides').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	autoplayHoverPause: true,
	autoplay: true,
	mouseDrag: true,
	margin: 30,
	navText: [
		"<i class='bx bx-chevron-left'></i>",
		"<i class='bx bx-chevron-right'></i>"
	],
	responsive: {
		0: {
			items: 1,
		},
		576: {
			items: 2,
		},
		768: {
			items: 2,
		},
		1200: {
			items: 3,
		},
	}
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2100,
  },
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    720: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 5,
    },
  }
});


let value = 1200;
setInterval(() => {
  value += 7;
  odometer.innerHTML = value;
}, 3000);