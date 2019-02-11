$(function () {
  // tab切换
  function tabCtrl(ele) {
      $(ele + ' .tabContents .tabContent').hide().eq(0).show();
      $(ele + ' .tabs .tab').eq(0).addClass('active');
      $(ele + ' .tabs .tab').hover(function (e) {
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
  function tabCtrl1(ele) {
    $(ele + ' .tabContents1 .tabContent1').hide().eq(0).show();
    $(ele + ' .tabs1 .tab1').eq(0).addClass('active');
    $(ele + ' .tabs1 .tab1').hover(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings().removeClass('active');
        let me = $(this);
        let index = 0;
        $(ele + ' .tabs1 .tab1').each(function (i) {
            if (me.get(0) === $(this).get(0)) {
                index = i;
            }
        });
        $(ele + ' .tabContents1 .tabContent1').hide().eq(index).fadeIn();
    });
}
function tabCtrl2(ele) {
    $(ele + ' .glue').hide().eq(0).show();
    $(ele + ' .abig .big').eq(0).addClass('active');
    $(ele + ' .abig .big').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings().removeClass('active');
        let me = $(this);
        let index = 0;
        $(ele + ' .abig .big').each(function (i) {
            if (me.get(0) === $(this).get(0)) {
                index = i;
            }
        });
        $(ele + ' .glue').hide().eq(index).fadeIn();
    });
}
  tabCtrl('.navbar');
  tabCtrl('.ycap');
  tabCtrl('.ysj');
  tabCtrl('.gl_1');

  tabCtrl1('.so');

//  tabCtrl2('.kfr');
  //$('html,body').animate({scrollTop: $(this.hash).offset().top - 100}, 600);
//   $(".nav a").bind("click touch",function(){
//     //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
//     $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top)},500,function(){
//      // $(document).addEventListener('mousewheel', function(event, delta) {return false;});  
//       //火狐浏览器必须用addEventListener！addEventListener绑定的事件需要通过event下面的preventDefault();
//     });
    
//   });

// $(document).on('mousewheel DOMMouseScroll', onMouseScroll);
// function onMouseScroll(e){
//     e.preventDefault();
//     var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
//     var delta = Math.max(-1, Math.min(1, wheel) );
//     if(delta<0){//向下滚动
//       $('.swip').addClass("anit");
//       $('.swipp').addClass("anitt");
//       setTimeout(function(){$('.top').fadeOut()},200);
      
//     }else{//向上滚动
//     //   $('.swip').removeClass("anit");
//     //   $('.swipp').removeClass("anitt");
//     //   $('.top').fadeIn();
//     }    
// }
    $('.top').click(function(){
        $('.swip').addClass("anit");
        $('.swipp').addClass("anitt");
        $('.show').css("display","block");
        //$('#s0').css("display","block");
        setTimeout(function(){$('.top').fadeOut()},200);
    });
    $('.nav li a').click(function(){
        $('.wo1').css("display","none");
        var cl = $(this).attr('id');
        var cli = '.'+cl;
        $(cli).css("display","block");
        $('#s0').css("display","block");
    });
    $('#s0').click(function(){
        $('.wo1').css("display","none");
        $('.s0').css("display","block");
        $('#s0').css("display","none");
    });
    $('.go').click(function(){
        $('.wo1').css("display","none");
        $('.s3').css("display","block");
        //$('#s0').css("display","none");
    });
    $('.a5').hover(function(){
        $('.wrap img').animate({width:"100%",bottom:"0"},800);
    },function(){
    });
    $('.more').slideUp();
    // 活动
    $('.hd h5').click(function(){
        // alert(1);
        //$('.more').slideDown();
        $('.more').slideUp();
        $('.hd li').removeClass('active');
        $(this).parent().addClass('active').find('.more').slideDown();
    });
   //特殊轮播
// var cArr=["p7","p6","p5","p4","p3","p2","p1"];
            //获取li 的 类名
            var cArr =[];
           var at =  $('.box li').attr('class');
           $('.box li').each(function(){
            var cc = $(this).attr('class')
               cArr.push(cc);
           });
            var len = cArr.length-1;
            
			var index=0;
			$(".next").click(
				function(){
				nextimg();
				}
			)
			$(".prev").click(
				function(){
				previmg();
				}
            )
            //自动生成指示器s

            var bt = '';
            for(var i=0;i<len;i++){
                bt += '<a href="javascript:;"><span></span></a>';
            }
            $('.box .buttons').append(bt);
            $('.box .buttons a').first().find('span').addClass('blue');
            //自动生成指示器end
            var $a=$(".buttons a");
			var $s=$(".buttons span");
			//上一张
			function previmg(){
				cArr.unshift(cArr[len]);
				cArr.pop();
				//i是元素的索引，从0开始
				//e为当前处理的元素
				//each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
				$(".box li").each(function(i,e){
					$(e).removeClass().addClass(cArr[i]);
				})
				index--;
				if (index<0) {
					index=len;
				}
				show();
			}
			
			//下一张
			function nextimg(){
				cArr.push(cArr[0]);
				cArr.shift();
				$(".box li").each(function(i,e){
					$(e).removeClass().addClass(cArr[i]);
				})
				index++;
				if (index>len) {
					index=0;
				}
				show();
			}
			
			//改变底下按钮的背景色
			function show(){
				$($s).eq(index).addClass("blue").parent().siblings().children().removeClass("blue");
			}
			
			//点击class为p2的元素触发上一张照片的函数
			$(document).on("click",".p2",function(){
				previmg();
				return false;//返回一个false值，让a标签不跳转
			});
			
			//点击class为p4的元素触发下一张照片的函数
			$(document).on("click",".p4",function(){
				nextimg();
				return false;
			});
	    // $('.all').click(function(){
        //     $('#tip3 .kfr').height(860);
        //     $('#tip3 .kfr').css("background","url(images/kfr_bg1.png) no-repeat 0% 88%");
        // });
        // $('.ring').click(function(){
        //     $('#tip3 .kfr').height(638);
        //     $('#tip3 .kfr').css("background","url(images/kfr_bg.png) no-repeat 100% 102%");
        // });


        //
        let music = document.getElementById('aud');
        $('.music').click(function(){
            if($(this).hasClass('play')){
                music.pause();
                $(this).find('img').attr("src","images/play.png");
                $(this).removeClass('play');
            }else{
                music.play(); 
                $(this).addClass('play'); 
                $(this).find('img').attr("src","images/music.png")
            }
            
        });
        $('.cany .cy').click(function(){          
           $('.cany .flay').eq($(this).index()-1).css("display","block");
           //stopScroll();
           $('.logo').css('zIndex',"9");
           var scroll=$(window).scrollTop(); 
           $('html').css({'overflow':'hidden','position':'fixed','top':-scroll+'px'}) 

        });
        $('.cany .close').click(function(){
            $('.cany .flay').css("display","none");
            //recoverScroll();
            $('.logo').css('zIndex',"99");

            $('html').css({'overflow':'auto','position':'static'}); 
            $(window).scrollTop(scroll);
        });
        //阻止弹窗滚动 
        function stopScroll() { 
            // 弹出时 
            $('body').on('touchmove', preventDefaultFn); $('body').css({ 'overflow': 'hidden' }) } 
         function recoverScroll() 
            { // 隐藏时 
            $('body').off('touchmove', preventDefaultFn); $('body').css({ 'overflow': 'auto' }) } 
        
        function preventDefaultFn(event) { event.preventDefault(); }

});