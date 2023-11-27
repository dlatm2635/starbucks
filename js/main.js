const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //gsap.to (요소, 지속시간, 옵션) : gsap
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    gsap.to(toTopEl, .2, {
      x:0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    gsap.to(toTopEl, .2, {
      x:100
    });
  }
}, 300));
// _.throttle(함수, 시간) : loadash

// 클릭 시 상단으로
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0
  })
})

// 비쥬얼 이미지
const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, .1, {
    delay:(index + 1) * .5,
    opacity:1
  });
});

// 클릭시 프로모션 영역 사라지게
const toggleEl = document.querySelector('.notice-line .toggle_promotion');
const promotionEl = document.querySelector('.notice .promotion');
let isHidePromotion = false;

toggleEl.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion //!는 값을 반대로 반환
  if(isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
});

// 영상영역 둥둥 떠다니는거
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject (selector, delay, size) {
  gsap.to(selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간 
    { //옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    delay: random(0, delay),
  });
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

// 스크롤할때 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .9
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
});


// swiper
new Swiper(".notice-line .mySwiper", {
  direction: 'vertical',
  loop: 'true',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
new Swiper(".promotion .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});
new Swiper(".awards .mySwiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
})

