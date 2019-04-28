// 加载
// var root = "http://localhost:8888/";
// var loader = new resLoader({
//     resources: [
//         root + 'images/fmsy_bg.jpg',
//         root + 'images/find_bg.jpg',
//         root + 'images/hdkd_bg.jpg',
//         root + 'images/bnhg_bg.jpg',
//         root + 'images/mtbd_bg.jpg',
//         root + 'images/banner.jpg', 
//     ],
//     onStart: function (total) {
//         // 开始的回调
//         // console.log('start:' + total);
//     },
//     onProgress: function (current, total) {
//         // 加载中的回调
//         // console.log(current + '/' + total);
//         var percent = current / total * 100;
//         $('.progressbar').css('width', percent + '%');
//     },
//     onComplete: function (total) {
//         // 加载完的回调
//         // console.log('加载完毕:' + total + '个资源');
//        // $('.js_start_layer').show();
//         // if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
//         //     new WOW().init();
//         // }
//         $('#progress').fadeOut(1500, function () {
//             setTimeout(function () {
                
//             }, 2300)
//         });

//     }
// });
//loader.start();
$(function () {
// tab切换
  function tabCtrl(ele) {
      $(ele + ' .tabContents .tabContent').hide().eq(0).show();
      $(ele + ' .tabs .tab').eq(0).addClass('active');
      $(ele + ' .tabs .tab').click(function (e) {
          e.stopPropagation();
          e.preventDefault();
          if ($(this).hasClass('active')) {
              return;
          }
          $(this).addClass('active').siblings().removeClass('active');
          let me = $(this);
          let index = 0;
          $(ele + ' .tabs .tab').each(function (i) {
              if (me.get(0) === $(this).get(0)) {
                  index = i;
              }
          });
          $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
      });
  }
  tabCtrl('.qd');
  tabCtrl('.ysts');
  tabCtrl('.ysw');
  tabCtrl('.syj');
//收音机年份
var deg = 0;
var num=0;
$('.syj_right').click(function(){
    if(deg>360||deg==360){     
        deg = 0
    }
    deg=deg+20;
    $(this).animate({},function(){
        $(this).css('transform', 'rotate('+deg+'deg)');
    });
    if(num<31){
        num = $('.syj .tabs .active').index()+1;
    }else{
        num=0; 
    }  
    $('.syj .tabs .tab').eq(num).addClass('active').siblings().removeClass('active');
    $('.syj .tabContents .tabContent').hide().eq(num).fadeIn();
   
});
$('.syj_left').click(function(){
    if(deg>360||deg==360){     
        deg = 0
    }
    deg=deg+20;
    $(this).animate({},function(){
        $(this).css('transform', 'rotate('+-deg+'deg)')
    });
    if(num>0){
        num = $('.syj .tabs .active').index()-1;
    }else{
        num=31; 
    }  
    $('.syj .tabs .tab').eq(num).addClass('active').siblings().removeClass('active');
    $('.syj .tabContents .tabContent').hide().eq(num).fadeIn();

});
//返回
$('.top').click(function(){
    $('html,body').animate( {scrollTop: 0}, 500);
});

var vh = 1000;
  $(window).scroll(function(){
  var this_scrollTop = $(this).scrollTop();
  if(this_scrollTop>vh ){
  $(".top").show();
  }else{
      $(".top").fadeOut();
  }
});
//演出看点
$('.yckd ul li').eq(0).fadeIn();
var Index=0;
$('.swiper-button-next1').click(function(){
   if(Index<3){
    Index=Index+1;
   }else{
    Index=3; 
   }
  // $('.yckd ul li').eq(Index).slideDown().siblings().slideUp();
  $('.yckd ul li').eq(Index).fadeIn().siblings().fadeOut();
});
$('.swiper-button-prev1').click(function(){
    if(Index>0){
     Index=Index-1;
    }else{
     Index=0; 
    }
    //$('.yckd ul li').eq(Index).slideDown().siblings().slideUp();
    $('.yckd ul li').eq(Index).fadeIn().siblings().fadeOut();
 });
//音乐
let music = document.getElementById('aud');
let music1 = document.getElementById('aud1');
let music2 = document.getElementById('aud2');
let music3 = document.getElementById('aud3');
let music4 = document.getElementById('aud4');
$('.music_bg').click(function(){
            if($(this).hasClass('play')){
                music.pause();
                $(this).find('img').attr("src","images/play.png");
                $(this).removeClass('play');
            }else{
                music.play(); 
                music1.pause();
                music2.pause();
                music3.pause();
                music4.pause();
                $(this).addClass('play'); 
                $(this).find('img').attr("src","images/music.png");
                $('.music1').find('img').attr("src","images/play.png");
                $('.music1').removeClass('play');
            }
            
});
$('.swiper-button-prev1').click(function(){
    music1.pause();
    music2.pause(); 
    music3.pause(); 
    music4.pause(); 
    $('.music1,.music2,.music3,.music4').removeClass('play');
    $('.music1,.music2,.music3,.music4').find('img').attr("src","images/play.png");
});
$('.swiper-button-next1').click(function(){
    music1.pause();
    music2.pause(); 
    music3.pause(); 
    music4.pause(); 
    $('.music1,.music2,.music3,.music4').removeClass('play');
    $('.music1,.music2,.music3,.music4').find('img').attr("src","images/play.png");
});

$('.music1').click(function(){
    music.pause(); 
    music2.pause();
    music3.pause();
    music4.pause();
    $('.music_bg').removeClass('play');
    if($(this).hasClass('play')){
        $(this).find('img').attr("src","images/play.png");
    //    $('.music_bg').find('img').attr("src","images/music.png");
        $(this).removeClass('play');
        music1.pause();
    }else{
        $(this).addClass('play'); 
        $(this).find('img').attr("src","images/music.png");
        $('.music_bg').find('img').attr("src","images/play.png");
        music1.play();
    }
    
});
$('.music2').click(function(){
    music.pause(); 
    music1.pause();
    music3.pause();
    music4.pause();
    $('.music_bg').removeClass('play');
    if($(this).hasClass('play')){
        $(this).find('img').attr("src","images/play.png");
    //    $('.music_bg').find('img').attr("src","images/music.png");
        $(this).removeClass('play');
        music2.pause();
    }else{
        $(this).addClass('play'); 
        $(this).find('img').attr("src","images/music.png");
        $('.music_bg').find('img').attr("src","images/play.png");
        music2.play();
    }
    
});
$('.music3').click(function(){
    music.pause(); 
    music1.pause();
    music2.pause();
    music4.pause();
    $('.music_bg').removeClass('play');
    if($(this).hasClass('play')){
        $(this).find('img').attr("src","images/play.png");
    //    $('.music_bg').find('img').attr("src","images/music.png");
        $(this).removeClass('play');
        music3.pause();
    }else{
        $(this).addClass('play'); 
        $(this).find('img').attr("src","images/music.png");
        $('.music_bg').find('img').attr("src","images/play.png");
        music3.play();
    }
    
});
$('.music4').click(function(){
    music.pause(); 
    music1.pause();
    music3.pause();
    music2.pause();
    $('.music_bg').removeClass('play');
    if($(this).hasClass('play')){
        $(this).find('img').attr("src","images/play.png");
    //    $('.music_bg').find('img').attr("src","images/music.png");
        $(this).removeClass('play');
        music4.pause();
    }else{
        $(this).addClass('play'); 
        $(this).find('img').attr("src","images/music.png");
        $('.music_bg').find('img').attr("src","images/play.png");
        music4.play();
    }
    
});
//信箱动画
	setInterval(function(){
        $('.email .xin').animate({top:"132px"},300,rowBack);
	},300);
	function rowBack(){
		if($('.email .xin').css('top')=='132px'){
            $('.email .xin').animate({top:"136px"});
        }else if($('.email .xin').css('top')=='136px'){
            $('.email .xin').animate({top:"132px"});
        }   
    }
//弹窗
var scrollTop = null;
$('.swiper-container3 .swiper-slide').click(function(event){
    $('.fly').fadeIn();
    mySwiper4.slideTo($(this).index()); 

    scrollTop = window.scrollY;
    document.body.style.position = 'fixed';
    $("body").css("top",-scrollTop);

}); 
$('.close').click(function(){
  
    $('.fly').fadeOut();
    document.body.style.position = '';
    $("body").css("top",'');
    window.scrollTo(0, scrollTop); 
});
//导航跳转
$('.logo li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('html,body').animate({scrollTop:$('.'+$(this).attr('data')).offset().top-100}, 800);
}); 
$(window).scroll(function () {
    var t = $(document).scrollTop();
        if (t < $('.fmsy').offset().top-100) {
            $('.logo li').eq(0).addClass('active').siblings().removeClass('active');
        }else if(t < $('.find').offset().top-200){
            $('.logo li').eq(1).addClass('active').siblings().removeClass('active');
        }else if(t < $('.yckd').offset().top-200){
            $('.logo li').eq(2).addClass('active').siblings().removeClass('active');
        }else if(t < $('.ysnb').offset().top-200){
            $('.logo li').eq(3).addClass('active').siblings().removeClass('active');
        }else if(t < $('.bnhg').offset().top-200){
            $('.logo li').eq(4).addClass('active').siblings().removeClass('active');
        }else if(t < $('.mtbd').offset().top-200){
            $('.logo li').eq(5).addClass('active').siblings().removeClass('active');
        }else{
            $('.logo li').eq(6).addClass('active').siblings().removeClass('active');
        }
        console.log($('.fmsy').offset().top);
        console.log(t);
});
// new CusScrollBar({
    //   contentSelector: '.scroll_cont0', //滚动内容区
    //   barSelector: '.scroll_bar0', //滚动条
    //   sliderSelector: '.scroll_slider0' //滚动滑块
    // });
    new CusScrollBar({
        contentSelector: '.scroll_cont1', //滚动内容区
        barSelector: '.scroll_bar1', //滚动条
        sliderSelector: '.scroll_slider1' //滚动滑块
      });
      new CusScrollBar({
        contentSelector: '.scroll_cont2', //滚动内容区
        barSelector: '.scroll_bar2', //滚动条
        sliderSelector: '.scroll_slider2' //滚动滑块
      });
      new CusScrollBar({
        contentSelector: '.scroll_cont3', //滚动内容区
        barSelector: '.scroll_bar3', //滚动条
        sliderSelector: '.scroll_slider3' //滚动滑块
      });
});