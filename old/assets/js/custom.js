$(document).ready(function () {
  $(".header-container li.navs").click(function (e) {
    $(".header-container li.navs").removeClass("active");
    $(this).addClass("active");
  })
});
function LoadScripts(){
  $(document).ready(function(){
  $('.ui.accordion').accordion();
  })
}