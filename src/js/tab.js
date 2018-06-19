import jQuery from 'jquery';

// declear jQuery $
const $ = jQuery;

export function tab() {
  $(document).ready(function() {
    $('.tab-content').hide();
    $('.tab-list').attr('data-tab-active','off');
    $('.tab-list:first').addClass('active').attr('data-tab-active','on').show();
    $('.tab-content:first').show();


    $('.tab-list').on('click', function() {  // この場合アロー関数は使えない
      $('.tab-list').removeClass('active').attr('data-tab-active','off');
      $(this).addClass('active').attr('data-tab-active','on');

      $('[data-tab-active="off"]').find('img').each(function(){
        $(this).attr('src', $(this).attr('src').replace(/on/g,'off'));
      });

      var status = $(this).attr('data-tab-active');
      if (status === 'on') {
        // [data-tab-active] === on , replace 'off' -> 'on'
        $(this).find('img').attr('src', $(this).find('img').attr('src').replace(/off/g,'on'));
      }
      $('.tab-content').hide();
      var activeTab = $(this).find("a").attr("href");
      $(activeTab).stop(true).hide().fadeIn();

      return false;
    });
  });
}
