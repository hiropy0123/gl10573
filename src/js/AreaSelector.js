import jQuery from 'jquery';
import { AreaLoader } from './AreaLoader';

// declear jQuery $
const $ = jQuery;

export function AreaSelector() {
  // Variables
  const areaName = $('#area-display');
  const countNum = $('#area-count-numerator'); // 分子
  const countDen = $('#area-count-denominator'); // 分母
  const hotel = $('.accommodation_info');
  const more = $('#view-more-load');

  let countInt = 0;


  // メソッド
  const showCount = () => {
    countInt = $('[data-hidden="show"]').length;
    countNum.text(String(countInt));
  }

  const getTag = (a) => {
    let tag = `.accommodation_info[data-area="${a}"]`;
  }

  const showCountDen = (a) => {
    let tag = `.accommodation_info[data-area="${a}"]`;
    countDen.text(String($(tag).length));
  }


  // hidden
  function clickInit() {
    hotel.attr({
      'data-hidden': 'hidden',
    });
    hotel.hide();
  }


  // ロード時
  $(window).on('load', function() {
    areaName.text('全エリア');
    countDen.text(hotel.length);
    countNum.text('8');
    AreaLoader('all');
  });

  // クリック時
  $('.area-selector').on('click', function() {
    $('.area-selector').removeClass('active');
    $(this).addClass('active');
    countInt = 0;

    var area = $(this).attr('data-area');

    clickInit();

    if ( area === 'all') {
      $('#area-display').text('全エリア');
      AreaLoader('all');
      countDen.text(hotel.length);
      showCount();
      if ( hotel.length <= 8 ) {
        more.hide();
        return false;
      }

    } else if ( area === 'tokamachi') {
      $('#area-display').text('十日町エリア');
      AreaLoader('tokamachi');
      showCountDen('tokamachi');
      showCount();
      if ( $('.accommodation_info[data-area="tokamachi"]').length <= 8 ) {
        more.hide();
        return false;
      }


    } else if ( area === 'kawanishi') {
      $('#area-display').text('川西エリア');
      AreaLoader('kawanishi');
      showCountDen('kawanishi');
      showCount();
      if ( $('.accommodation_info[data-area="kawanishi"]').length <= 8 ) {
        more.hide();
        return false;
      }


    } else if ( area === 'nakasato') {
      $('#area-display').text('中里エリア');
      AreaLoader('nakasato');
      showCountDen('nakasato');
      showCount();
      if ( $('.accommodation_info[data-area="nakasato"]').length <= 8 ) {
        more.hide();
        return false;
      }


    } else if ( area === 'matsudai') {
      $('#area-display').text('松代エリア');
      AreaLoader('matsudai');
      showCountDen('matsudai');
      showCount();
      if ( $('.accommodation_info[data-area="matsudai"]').length <= 8 ) {
        more.hide();
        return false;
      }


    } else if ( area === 'matsunoyama') {
      $('#area-display').text('松之山エリア');
      AreaLoader('matsunoyama');
      showCountDen('matsunoyama');
      showCount();
      if ( $('.accommodation_info[data-area="matsunoyama"]').length <= 8 ) {
        more.hide();
        return false;
      }

    }

  });
}
