import jQuery from 'jquery';
import { smoothscroll } from './smoothscroll';
import { pagetop } from './pagetop';
import { tab } from './tab';
import { AreaSelector } from './AreaSelector';
import { mainvisual } from './mainvisual';
import { experiencesSlider } from './experiencesSlider';

const $ = jQuery;

mainvisual();
smoothscroll();
pagetop();
tab();
AreaSelector();
experiencesSlider();


$(window).on('load change', function() {
  const bg05 = $('#bg05');
  const bg06 = $('#bg06');
  const bg07 = $('#bg07');
  const plans = $('#plans');
  let posTop = plans.offset().top;

  $('body').css('position', 'relative');

  $(function(){
    setInterval(function(){
      posTop = plans.offset().top;
      bg05.css('top', posTop + 10 + 'px');
      bg06.css('top', posTop - 20 + 'px');
      bg07.css('top', posTop + 280 + 'px');
    }, 1500);
  });

});
