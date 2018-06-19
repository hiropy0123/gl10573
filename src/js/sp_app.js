import jQuery from 'jquery';
import { smoothscroll } from './smoothscroll';
import { pagetop } from './pagetop';
import { tab } from './tab';
import { AreaSelector } from './AreaSelector';
import { mainvisual } from './mainvisual';
import Swiper from 'swiper';
// import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

const $ = jQuery;

$(document).ready(function(){
  mainvisual();
  smoothscroll();
  AreaSelector();
  pagetop();
});

// // experiencesSlider for SP w/ Swiper
window.onload = function () {
  tab();
  var mySwiper = new Swiper('.swiper-container', {
    effect: 'slide',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    // width: 1020, // (320 + 20) * 3
    centeredSlides: true,
    // nextButton: '.swiper-button-next',
  	// prevButton: '.swiper-button-prev'
  });
}

// Set TEL link
var tel = $('.accommodation_tel');
tel.each(function(index){
  var tel_num = $(this).text();
  var set_html = `<a href="tel:${tel_num}">${tel_num}</a>`;
  $(this).html(set_html);
});

