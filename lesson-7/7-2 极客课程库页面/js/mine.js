//搜索框
$(function() {
	$("#search").hide();
	$(".search-icon").click(function() {
		$('#search').animate({
			width: 'toggle'
		},1000);
	});
	$("#close-btn").click(function(){
		$('#search').hide(500);
	});
});

//头部下拉菜单   begin
$(function(){
	function headList(obj){
		obj.hover(function(){
			$(this).find(".menu").toggle();
			$(this).find(".zhuan").css({
				"transform":"rotate(360deg)"
			});
		});
	};
	headList($("#school-list"));
	headList($("#viplesson"));
	headList($("#jikeshequ"));
});
//头部下拉菜单  end

//左侧二级下拉菜单
$(function(){
	function leftList(obj){
		obj.hover(function(){
			$(this).find(".list-show").toggle();
			$(this).css({
				'box-shadow': '2px 2px 4px rgba(0,0,0,.1)'
			});
		}).mouseout(function(){
			$(this).css({
				'box-shadow': 'none'
			});
		});
	};
	leftList($("#list-mobile"));
	leftList($("#list-Web"));
	leftList($("#list-qian"));
	leftList($("#list-jichu"));
	leftList($("#list-yuncal"));
	leftList($("#list-zhineng"));
	leftList($("#list-mysql"));
	leftList($("#list-text"));
	leftList($("#list-It"));
	leftList($("#list-desgin"));
});


//左侧菜单__此处的hover显示时会影响右侧内容部分导航栏的位置？？？
$(document).ready(function() {
	$("#hdlist-zy").hover(function() {
		$("#all-zyljt").toggle();
	});
});
$(document).ready(function() {
	$("#hdlist-zs").hover(function() {
		$("#all-zstxt").toggle();
	});
});
$(document).ready(function() {
	$("#hdlist-xl").hover(function() {
		$("#all-xlkc").toggle();
	});
});
$(document).ready(function() {
	$("#hdlist-bq").hover(function() {
		$("#all-kcbq").toggle();
	});
});



//rightlist下拉  
$(function(){
	function rightList(obj){
		obj.hover(function(){
			$(this).find(".RlistTitle").toggle();
		});
	};
	rightList($("#title-one"));
	rightList($("#title-twe"));
	rightList($("#title-three"));
	rightList($("#title-four"));
});


//内容课程
//隐藏的背景
function rspHide(){
	var rsp = $(".rsp");
	rsp = $(".rsp").hide();
}

$(function(){
	rspHide();
	function backHover(obj){
		obj.hover(function(){
			$(this).find(".rsp").stop().fadeTo(100,0.5)
		},function(){
			$(this).find(".rsp").stop().fadeTo(100,0)
		});
	};
	backHover($("#3173"));
	backHover($("#3142"));
	backHover($("#3141"));
	backHover($("#3140"));
	backHover($("#3139"));
	backHover($("#3138"));
	backHover($("#3137"));
	backHover($("#3136"));
	backHover($("#3135"));
	backHover($("#3097"));
	backHover($("#3096"));
	backHover($("#3095"));
	backHover($("#3094"));
	backHover($("#3063"));
	backHover($("#3076"));
	backHover($("#3129"));
	backHover($("#3122"));
	backHover($("#3107"));
	backHover($("#3101"));
	backHover($("#3180"));
	backHover($("#3075"));
	backHover($("#3070"));
	backHover($("#3073"));
	backHover($("#3072"));
});

//隐藏的图
$(document).ready(function() {
	rspHide();
	function pictureHover(obj){
		obj.hover(function(){
			$(this).find(".user-action,.lessonplay").stop().fadeTo(100,1)
		},function(){
			$(this).find(".user-action,.lessonplay").stop().fadeTo(100,0)
		});
	};
	pictureHover($("#3173"));
	pictureHover($("#3142"));
	pictureHover($("#3141"));
	pictureHover($("#3140"));
	pictureHover($("#3139"));
	pictureHover($("#3138"));
	pictureHover($("#3137"));
	pictureHover($("#3136"));
	pictureHover($("#3135"));
	pictureHover($("#3097"));
	pictureHover($("#3096"));
	pictureHover($("#3095"));
	pictureHover($("#3094"));
	pictureHover($("#3063"));
	pictureHover($("#3076"));
	pictureHover($("#3129"));
	pictureHover($("#3122"));
	pictureHover($("#3107"));
	pictureHover($("#3101"));
	pictureHover($("#3180"));
	pictureHover($("#3075"));
	pictureHover($("#3070"));
	pictureHover($("#3073"));
	pictureHover($("#3072"));
});
//隐藏的字

$(document).ready(function(){
	rspHide(); 
	function mouseHover(obj){
		obj.hover(function(){
			$(this).find("#cpHide1,#cfHide1").hide();
			$(this).find(".timeandicon").stop().fadeTo(100,1);
		},function(){
			$(this).find(".timeandicon").stop().slideUp();
			$(this).find("#cpHide1,#cfHide1").stop().show();
		});

	};
	mouseHover($("#3173"));
	mouseHover($("#3142"));
	mouseHover($("#3141"));
	mouseHover($("#3140"));
	mouseHover($("#3139"));
	mouseHover($("#3138"));
	mouseHover($("#3137"));
	mouseHover($("#3136"));
	mouseHover($("#3135"));
	mouseHover($("#3097"));
	mouseHover($("#3096"));
	mouseHover($("#3095"));
	mouseHover($("#3094"));
	mouseHover($("#3063"));
	mouseHover($("#3076"));
	mouseHover($("#3129"));
	mouseHover($("#3122"));
	mouseHover($("#3107"));
	mouseHover($("#3101"));
	mouseHover($("#3180"));
	mouseHover($("#3075"));
	mouseHover($("#3070"));
	mouseHover($("#3073"));
	mouseHover($("#3072"));
});

//切换菜单
$(function(){
	$(".kuai-icon").click(function(){
		$(".lesson-list").show();
		$(".lesson-list2").hide();
	});
});

$(function() {
	$(".list-icon").click(function() {
		$(".lesson-list").hide();
		$(".lesson-list2").show();
	});
});

//返回顶部一
// $(function(){
//     //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失 
//     $(function(){
//         $(window).scroll(function(){
//             if($(window).scrollTop()>200){
//                 $("#gotop").fadeIn(1000);
//             }else{
//                 $("#gotop").fadeOut();
//             }
//         });
//         //当点击跳转链接后，回到页面顶部位置 
//         $("#gotop").click(function(){
//             $('body,html').animate({scrollTop:0}, 1000);
//             return false;
//         });
//     });
// });


//返回顶部二
window.onload = function(){
    var goTop = document.getElementById('gotop');
    //获取页面可视区域高度
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;
    window.onscroll = function(){
        //获取滚动条高度
        var osTop = document.documentElement.scrollTop ||  window.pageYOffset || document.body.scrollTop;
        //判断滚动条大于可视区域显示按钮
        if(osTop>=clientHeight){
            goTop.style.display = 'block';
        }else{
            goTop.style.display = 'none';
        }
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
    };
    goTop.onclick = function(){
        //设置定时器
        timer = setInterval(function(){
            //获取滚动条距离顶部的高度
            var osTop = document.documentElement.scrollTop ||  window.pageYOffset || document.body.scrollTop;
            var ispeed = Math.floor(-osTop/6);
            document.documentElement.scrollTop = document.body.scrollTop =  window.pageYOffset = osTop+ispeed;
            isTop = true;
            if(osTop === 0){
                clearInterval(timer);
            }
        },30);
    };
};