import jQuery from 'jquery';

// declear jQuery $
const $ = jQuery;

export function smoothscroll() {
  $('.smoothscroll').on('click', function(){
    var headerHight = 30; //固定ヘッダーの高さ
    var speed = 700;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight; // ※　-headerHightでズレの処理
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
}
