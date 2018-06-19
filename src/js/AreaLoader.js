import jQuery from 'jquery';

// declear jQuery $
const $ = jQuery;

const countNum = $('#area-count-numerator'); // 分子
const more = $('#view-more-load');
let hotel = $('.accommodation_info');
let countInt = 0;

export function AreaLoader(area) {

  // Variables
  let showNum = 8;

  // --------------------------------
  //   メソッド
  // --------------------------------
  // 初期化
  function init() {
    countInt = 0;
    showNum = 8;
    // hidden
    hotel.attr({
      'data-hidden': 'hidden',
    });
    hotel.hide();

    // hide or show more button
    if ( showNum >= hotel.length ) {
      more.hide();
    } else {
      more.show();
    }
  }

  function areaContentView(area) {
    // hidden
    hotel.attr({
      'data-hidden': 'hidden',
    });
    hotel.hide();

    let tag = `.accommodation_info[data-area="${area}"]`;
    $(tag).each(function(index, element){
      if (index > (showNum - 1)) {
        return true;
      }
      $(element).show();
      $(element).attr({
        'data-hidden': 'show',
      });
    });
  }

  // --------------------------------
  //   Area load function
  // --------------------------------

    // 初期化
    init();
    // 初回のタブクリック時の処理
    if ( area === 'tokamachi' ) {
      areaContentView('tokamachi');
    }
      else if ( area === 'kawanishi' ) {
      areaContentView('kawanishi');
    }
      else if ( area === 'nakasato' ) {
      areaContentView('nakasato');
    }
      else if ( area === 'matsudai' ) {
      areaContentView('matsudai');
    }
      else if ( area === 'matsunoyama' ) {
      areaContentView('matsunoyama');
    }
      else {
        // 初回ロード時の処理 （ALL）
        showNum = 8;
        hotel.each(function(index, element){
          if (index > (showNum - 1)) {
            return true;
          }
          $(element).show();
          $(element).attr({
            'data-hidden': 'show',
          });

        });

        // update count
        countInt = $('[data-hidden="show"]').length;
        countNum.text(String(countInt));

        // hide more button
        if ( showNum >= hotel.length ) {
          more.hide();
        }
    }

  // --------------------------------
  //   Click more button (Event)
  // --------------------------------

  more.on('click', function(){

    if ( $('.area-selector[data-area="all"]').hasClass('active') ) {
      // エリアセレクターがall　全エリアを指定しているとき
      showNum += 8;
      hotel.each(function(index, element){
        if (index > (showNum - 1)) {
          return true;
        }
        $(element).show();
        $(element).attr({
          'data-hidden': 'show',
        });

      });

      // update count
      countInt = $('[data-hidden="show"]').length;
      countNum.text(String(countInt));

      // hide more button
      if ( showNum >= hotel.length ) {
        more.hide();
      }
    }
    else if ( $('.area-selector[data-area="tokamachi"]').hasClass('active') ) {

      $('.accommodation_info[data-area="tokamachi"]').each(function(i,e){
        $(e).show();
        $(e).attr({
          'data-hidden': 'show',
        });
      });
      // update count
      countInt = $('[data-hidden="show"]').length;
      countNum.text(String(countInt));
      more.hide();

      // alert('tokamachi で 「もっと見る」 クリックしました');

      // clickMore('tokamachi');
    }
    else if ( $('.area-selector[data-area="kawanishi"]').hasClass('active') ) {

      $('.accommodation_info[data-area="kawanishi"]').each(function(i,e){
        $(e).show();
        $(e).attr({
          'data-hidden': 'show',
        });
      });
      // update count
      countInt = $('[data-hidden="show"]').length;
      countNum.text(String(countInt));
      more.hide();

      // alert('kawanishi で 「もっと見る」 クリックしました');


      // clickMore('kawanishi');
    }
    else if ( $('.area-selector[data-area="nakasato"]').hasClass('active') ) {

      $('.accommodation_info[data-area="nakasato"]').each(function(i,e){
        $(e).show();
        $(e).attr({
          'data-hidden': 'show',
        });
      });
      // update count
      countInt = $('[data-hidden="show"]').length;
      countNum.text(String(countInt));
      more.hide();

      // alert('nakasato で 「もっと見る」 クリックしました');


      // clickMore('nakasato');
    }
    else if ( $('.area-selector[data-area="matsudai"]').hasClass('active') ) {

      $('.accommodation_info[data-area="matsudai"]').each(function(i,e){
        $(e).show();
        $(e).attr({
          'data-hidden': 'show',
        });
      });
      // update count
      countInt = $('[data-hidden="show"]').length;
      countNum.text(String(countInt));
      more.hide();

      // alert('matsudai で 「もっと見る」 クリックしました');


      // clickMore('matsudai');
    }
    else if ( $('.area-selector[data-area="matsunoyama"]').hasClass('active') ) {

      $('.accommodation_info[data-area="matsunoyama"]').each(function(i,e){
        $(e).show();
        $(e).attr({
          'data-hidden': 'show',
        });
      });
      // update count
      countInt = $('[data-hidden="show"]').length;
      countNum.text(String(countInt));
      more.hide();

      // alert('matsunoyama で 「もっと見る」 クリックしました');

      // clickMore('matsunoyama');
    }

  });


}
