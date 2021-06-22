// import bootstrap from './node_modules/bootstrap/dist/js/bootstrap.bundle';
import * as bootstrap from 'bootstrap';

// import Swiper JS
import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/swiper-bundle.css';

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup:4,
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// window.addEventListener('DOMContentLoaded',function(event) {

//     // Navbar shrink function
//     let navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

// });

///???????????? 
    // import bootstrap from './node_modules/bootstrap/dist/js/bootstrap.bundle';   
    // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         console.log('-_-;');

//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             offset: 72,
//         });
//     };
// });

// 코드 치다가, 취소선이 나올 떄가 있다.. 혼나는 건가요?
// -> 넵, 혼나는 겁니다.
// -> 이런걸 deprecated 된 코드, deprecated된 API, deprecated된 함수라고 합니다.
// -> 이런 저런 이유로 (보통 보안이나 성능상의 이유로) 더 좋은걸 마련해놨으니, 그걸 쓰세요!
// -> 머지 않아 얘는 이제 동작조차 안 하게 될거니 그리 아슈!
// $(document).ready(function() {
// 	$('#myCarousel').carousel({
// 	interval: 10000
// 	});
// });
// $(function() {
//     console.log('-_-!!');
// 	$('#myCarousel').carousel({
// 	    interval: 10000
// 	});
// });