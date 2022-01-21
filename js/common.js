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
$('.zoom-right').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__zoomInRight');
  } else {
    //$(this).removeClass('animate__animated animate__bounceInRight');
  }
});
$('.zoom-down').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__zoomInDown');
  } else {
    //$(this).removeClass('animate__animated animate__bounceInRight');
  }
});
$('.in-roll').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__rollIn');
  } else {
    //$(this).removeClass('animate__animated animate__bounceInRight');
  }
});

$('.ef01 .special-img').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('special-efect');
  } else {
    (this).removeClass('special-efect');
  }
});
$('.ef02 .special-img').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('special-efect02');
   $(this).removeClass('special-efect');
  } else {
    (this).removeClass('special-efect02');
  }
});
$(document).ready(function(){
    //$("#bannar01").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() < 0) {
            $("#bannar01").fadeIn("fast");
        } else {
            $("#bannar01").fadeOut("fast");
        }
        scrollHeight = $(document).height(); //ドキュメントの高さ 
        scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
        footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
        if ( scrollHeight - scrollPosition  <= footHeight ) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
            $("#bannar01").css({
                "top":"-10px",
                "opacity":0, //pisitionをabsolute（親：wrapperからの絶対値）に変更
                "bottom": footHeight + 0 //下からfooterの高さ + 20px上げた位置に配置
            });
        } else { //それ以外の場合は
            $("#bannar01").css({
                "opacity":1,
                "position":"fixed", //固定表示
                "top": "150px" //下から20px上げた位置に
            });
        }
    });

});