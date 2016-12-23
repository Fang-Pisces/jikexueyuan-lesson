//消息
$(function() {
	$("#news").click(function() {
		$(".icons-news").fadeToggle(300);
	});
});


//换肤
var popBox=$(".pop-box");
var posMaxBox=$(".pos-max-box");
posMaxBox.height($(window).height());
$("#click-change").click(function(){// 声明变量，点击消息弹出换肤框
    posMaxBox.show();
    popBox.animate({
        top: 0,
        opacity: 1
    },450)
});


posMaxBox.click(function(){//点击屏幕换肤框收回
    popBox.animate({
        top: -308,
        opacity: 0
    },450)
    posMaxBox.hide();
});


//记录
var bgImage = localStorage.getItem("bgImage");
if (bgImage) {	
	$(".main").find("img").attr("src", "images/logo_white_fe6da1ec.png");
	$('body').css({
		"background-image": bgImage,
		"background-size": "cover"
	}); 
}
/*$(function(){
	var bgImage = $.cookie("bgImage");
	if ( bgImage== null) {
	$('body').css({
		"background-image": "url(./images/400.jpg) ",
		"background-size": "cover"
	}); 
} else {
	$('body').css({
		"background-image": "url('" + $.cookie("bgImage") + "')"
	});
}
})*/

alert($.cookie("bgImage"));//弹出undefined
//皮肤预览
	function changeHover() {
		var hoverFace = $(".pos-content");
		hoverFace.find("li").hover(function() {
			var path = $(this).find("img").attr("src");
			$(this).click(function() {
				$(".main").find("img").attr("src", "images/logo_white_fe6da1ec.png");
				$('body').css({
					"background-image": "url(" + path + ") ",
					"background-size": "cover"
				}); 
				localStorage.setItem("bgImage","url(" + path + ") ");//记住图片
				//$.cookie("bgImage","url(" + path + ") ",{expires:7},{path:"/images"});

			});
			$(".pos-in-this").find("img").attr("src", path);
		});
	}
	changeHover();
	

//切换换肤标签
$(document).ready(function() {
	$("#facefirst li").each(function(index) {

		var faceNode = $(this); //定义this
		$(this).click(function() {
				$("div.poa-con-block").removeClass("poa-con-block"); //移除内容
				$("#facefirst li.facein").removeClass("facein"); //移除头部标签
				$("div.poa-con").eq(index).addClass("poa-con-block"); //寻找当前div添加内容
				faceNode.addClass("facein").css({
					backgroundColor: '#f9f9f9'
				});
		}).mouseout(function() {
			faceNode.css({
				backgroundColor: '#fff'
			});
		});
		changeHover();
	});
	
});

//不使用皮肤
// $("#nouse").click(function() {
// 	$(".main").find("img").attr("src", "images/logo.png");
// 		$("body").css({
// 			"background": "#fff"
// 		});
// 		localStorage.setItem("nobig","#fff");
// 	})
//收起
$(".hide-but").click(function(){
	popBox.slideUp(1000);
})










//导航下拉菜单
$(function() {
	function navMore(obj) {
		obj.hover(function() {
			$(this).find(".list").toggle();
		});
	};
	navMore($("#more"));
});

$(function() {
	$("#desgin").hover(function() {
		$("#list-desgin").toggle();
	});
	$("#order").hover(function() {
		$("#list-order").toggle();
	})
})


//设置按钮
$(function() {
	$("#tab-btn").click(function() {
		$(".tab-btn").slideToggle();
	})
})

//标签切换
$(document).ready(function() {
	$("#tabfirst li").each(function(index) {
		var LiNode = $(this); //定义this
		$(this).mouseover(function() {
			timeoutid = setTimeout(function() { //设置定时器，延迟移动时间
				$("div.tabcontent").removeClass("tabcontent"); //移除内容
				$("#tabfirst li.tabin").removeClass("tabin"); //移除头部标签
				$("div.tabcontentfrist").eq(index).addClass("tabcontent"); //寻找当前div添加内容
				LiNode.addClass("tabin").css({
					backgroundColor: '#f9f9f9'
				});
			}, 300);
		}).mouseout(function() {
			clearTimeout(timeoutid);
			LiNode.css({
				backgroundColor: '#fff'
			});
		});
	});
});

//设置按钮
$(function() {

})

//推荐
$(function() {
	function navHover(obj) {
		obj.mouseover(function() {
			$(this).find(".rebate").show();
		}).mouseout(function() {
			$(this).find(".rebate").hide();
		})
	}
	navHover($("#nav-item1"));
	navHover($("#nav-item2"));
	navHover($("#nav-item3"));
	navHover($("#nav-item4"));
	navHover($("#nav-item5"));
	navHover($("#nav-item6"));
})

//视频
$(function() {
	$("#s-nav-vedio-one").mouseover(function() {
		$(".tag-sort1").hide();
		$(".tag-sort2").show();
	}).mouseout(function() {
		$(".tag-sort1").show();
		$(".tag-sort2").hide();
	});
	$("#s-nav-vedio-two").mouseover(function() {
		$(".tag-sort3").hide();
		$(".tag-sort4").show();
	}).mouseout(function() {
		$(".tag-sort3").show();
		$(".tag-sort4").hide();
	})
})

$(function() {
	function vedioHover(obj) {
		obj.hover(function() {
			$(this).find(".tag-sort").toggle();
		})
	}
	vedioHover($("#s-nav-vedio2-one"));
	vedioHover($("#s-nav-vedio2-two"));
	vedioHover($("#s-nav-vedio2-three"));
	vedioHover($("#s-nav-vedio2-four"));
})


//返回顶部
$(function() {
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失 
	$(function() {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 50) {
				$("#gotop").fadeIn(1000);
			} else {
				$("#gotop").fadeOut();
			}
		});
		//当点击跳转链接后，回到页面顶部位置 
		$("#gotop").click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});
});