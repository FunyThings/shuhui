 $(document).ready(function() {
 	
 	$("#mytab a").click(function(e){
	    e.preventDefault();
	    $(this).tab("show");
    })
		
	//回到顶部按钮样式改变
   $(".tophome").hover(function(){
		$(".tophome>img").attr("src","imgs/arrow-up-a(1).png");
		$(".tophome").css({"background-color":"#666"});
    },function(){
		$(".tophome>img").attr("src","imgs/arrow-up-a.png");
		$(".tophome").css({"background-color":"#e7e7e7"});
	    }
    )

 	
    //回到顶部按钮隐藏和显示
    $(".tophome").hide();
        //当滚动条的位置处于距顶部300像素以下时，跳转链接出现，否则消失
        $(function() {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 300) {
                    $(".tophome").fadeIn(500);
                } else {
                    $(".tophome").fadeOut(500);
                }
            });
            //当点击跳转链接后，回到页面顶部位置
            $(".tophome").click(function() {
                $('body,html').animate({
                    scrollTop: 0
                },
                100);
                return false;
            });
        });
    }
 
 
 
 );