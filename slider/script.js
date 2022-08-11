var swiper = new Swiper(".swiper", {
pagination: {
  el: ".swiper-pagination",
  clickable: true
},
spaceBetween: 16,
slidesOffsetBefore: 16,
slidesOffsetAfter: 35,
slidesPerView:'auto',});
    
 const readMoreBrands = document.getElementById('read-more-brands');
 const brandsFlexCont = document.querySelector('.section-brands__flex-for-content-card')
 const brandsCont = document.querySelector('.section-brands__flex-for-content-card');

 readMoreBrands.onclick = function() {
  const text = readMoreBrands.querySelector('span');
  brandsCont.classList.toggle('flex-for-content-card--opened');
  readMoreBrands.querySelector('img').classList.toggle('read-more__logo--rotated');
  if(brandsCont.classList.contains('flex-for-content-card--opened')) {
    text.textContent = 'Скрыть';
  }
  else {
    text.textContent = 'Показать все';
  }
 }