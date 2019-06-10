var slide=document.querySelector('.form-block__slide');
var text=document.querySelector('.form-block__output');
text.innerHTML=slide.value;
function fun(){
   var slide=document.querySelector('.form-block__slide');
   var text=document.querySelector('.form-block__output');
   text.innerHTML=slide.value;};

$(document).ready(function(){
   $(".chosen-select").chosen({
      width: "100%",
      disable_search: true,
      // disable_search_threshold: 5,
      // enable_split_word_search: false,
      max_selected_options: 1,
      placeholder_text_single: "Выберите тип системы",
      display_disabled_options: false,
      // display_selected_options: false,
      max_shown_results: Infinity  });

   $(".chosen-results").niceScroll({
	  // opacity when cursor is inactive
	  cursoropacitymin: 1,
	  // opacity when cursor is active
	  cursoropacitymax: 1,
	  // cursor color
	  cursorcolor: "#3e9cdc",
	  // cursor width
	  cursorwidth: "7px",
	  // cursor border properties
	  cursorborder: "0px solid #3e9cdc",
     cursorborderradius: "3px",
	  // background
	  background: "#3d4050",
	  // min height of cursor
	  cursorminheight: 43 });
});