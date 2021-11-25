//共通パーツ読み込み
$('.in-right').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__bounceInRight');
  } else {
    //$(this).removeClass('animate__animated animate__bounceInRight');
  }
});
$('.in-left').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__bounceInLeft');
  } else {
    //$(this).removeClass('animate__animated animate__bounceInRight');
  }
});
$('.in-down').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__bounceInDown');
  } else {
    //$(this).removeClass('animate__animated animate__bounceInRight');
  }
});