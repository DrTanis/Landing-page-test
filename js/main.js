$(document).ready(function(){
   $('.m-menu__btn').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('m-menu__btn_active');
      $('.m-menu__nav').toggleClass('m-menu__nav_active');
   });
});