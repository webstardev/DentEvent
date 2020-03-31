
var count1 = 1;
var count2 = 1;
$( document ).ready(function() {
  $(".submenu").hide();
    if ($(document).width() < 768) {
    $(".searchbox li a.search").click(function() {
      if ($(document).width() < 768) {
          $(".searchbox li a.menus").next(".submenu").hide();
          $(this).next(".submenu").slideDown();
          $(".searchbox li a").removeClass('active');
          $(this).addClass('active');
          count2 = 1;
          if(count1 == 2){
              $(this).next(".submenu").hide();
              $(".searchbox li a").removeClass('active');
              count1 = 0;
          }
          count1++;
      }
    });
    $(".searchbox li a.menus").click(function() {
      if ($(document).width() < 768) {
          $(".searchbox li a.search").next(".submenu").hide();
          $(this).next(".submenu").slideDown();
          $(".searchbox li a").removeClass('active');
          $(this).addClass('active');
          count1 = 1;
          if(count2 == 2){
              $(this).next(".submenu").hide();
              $(".searchbox li a").removeClass('active');
              count2 = 0;
          }
          count2++;
      }
    });
    }else{
      $('.searchbox  div').removeAttr('style');
      $(".submenu").hide();
    }
});

$(window).bind('resize', function() {
    if ($(document).width() >= 768) {
      $('.searchbox  div').removeAttr('style');
      $(".submenu").hide();
    }
});

