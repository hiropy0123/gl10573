import jQuery from 'jquery';
import './Backstretch';
// declear jQuery $
const $ = jQuery;

export function mainvisual() {
  $(function(){
  $('#main_visual').backstretch(
  	[
  	  "./images/mainvisual.jpg",
      "./images/mainvisual2.jpg",
      "./images/mainvisual3.jpg",
    ],
  	{duration: 5000, fade: 1200}
  );
  });
}
