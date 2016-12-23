//消息
// $(function() {
// 	$("#news").click(function() {
// 		$(".icons-news").fadeToggle(300);
// 	});
// });

//单例——消息框(将点击消息框弹出放到topnews的命名空间，方便查看属性，一看就知道那部分的哪个功能。)
$(function(){
	var topnews={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			var news=this;
			news.$top=$("#news");
		},
		bind:function(){
			var news=this;			
			news.$top.click(function(){
				$(".icons-news").slideToggle();
			});
		}
	}
	//全部初始化
	function init(){
		topnews.init();
	};
	init();
})


//换肤
// var popBox=$(".pop-box");
// var posMaxBox=$(".pos-max-box");
// posMaxBox.height($(window).height());
// $("#click-change").click(function(){// 声明变量，点击消息弹出换肤框
//     posMaxBox.show();
//     popBox.animate({
//         top: 0,
//         opacity: 1
//     },450)
// });

// //点击屏幕换肤框收回
// posMaxBox.click(function(){
//     popBox.animate({
//         top: -308,
//         opacity: 0
//     },450)
//     posMaxBox.hide();
// });


//收起
// $(".hide-but").click(function(){
// 	popBox.slideUp(1000);
// });


//单例——换肤框(将换肤框的弹出和收回合并到一个空间里，不再像之前一样写两部分看起来很乱，同时保护了各自的属性，让代码的逻辑更加清晰。)
$(function(){
	var faceWrapper={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			var clickChange=this;
			clickChange.$face = $("#click-change");			
		},
		bind:function(){
			var popBox=$(".pop-box");
			var posMaxBox=$(".pos-max-box");
			posMaxBox.height($(window).height());	
			var clickChange=this;
			clickChange.$face.click(function(){
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
			
		}
	}
	//全部初始化
	function init(){
		faceWrapper.init();
	};
	init();
})


//记录
var bgImage = localStorage.getItem("bgImage");
if (bgImage) {	
	$(".main").find("img").attr("src", "images/logo_white_fe6da1ec.png");
	$('body').css({
		"background-image": bgImage,
		"background-size": "cover"
	}); 
}


//皮肤预览
	// function changeHover() {
	// 	var hoverFace = $(".pos-content");
	// 	hoverFace.find("li").hover(function() {
	// 		var path = $(this).find("img").attr("src");
	// 		$(this).click(function() {
	// 			$(".main").find("img").attr("src", "images/logo_white_fe6da1ec.png");
	// 			$('body').css({
	// 				"background-image": "url(" + path + ") ",
	// 				"background-size": "cover"
	// 			}); 
	// 			localStorage.setItem("bgImage","url(" + path + ") ");//记住图片

	// 		});
	// 		$(".pos-in-this").find("img").attr("src", path);
	// 	});
	// }
	// changeHover();



//切换换肤标签
// $(document).ready(function() {
// 	$("#facefirst li").each(function(index) {
// 		var faceNode = $(this); //定义this
// 		$(this).click(function() {
// 				$("div.poa-con-block").removeClass("poa-con-block"); //移除内容
// 				$("#facefirst li.facein").removeClass("facein"); //移除头部标签
// 				$("div.poa-con").eq(index).addClass("poa-con-block"); //寻找当前div添加内容
// 				faceNode.addClass("facein").css({
// 					backgroundColor: '#f9f9f9'
// 				});
// 		}).mouseout(function() {
// 			faceNode.css({
// 				backgroundColor: '#fff'
// 			});
// 		});
// 		changeHover();
// 	});
	
// });



//单例函数——皮肤预览(将皮肤预览和皮肤标签分别封装到各自的命名空间，同时将初始化设置全部放到一起，并实现两者的通信，当皮肤标签切换的同时皮肤预览也改变。)
$(function(){
	var faceLook={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			this.$hoverFace = $(".pos-content").find("li");
		},
		bind:function(){
			var me=this;
			me.$hoverFace.hover(function(){
				var path = $(this).find("img").attr("src");
				$(this).click(function() {
					$(".main").find("img").attr("src", "images/logo_white_fe6da1ec.png");
					$('body').css({
						"background-image": "url(" + path + ") ",
						"background-size": "cover"
					}); 
					localStorage.setItem("bgImage","url(" + path + ") ");//记住图片

				});
				$(".pos-in-this").find("img").attr("src", path);
			});
		}
	}

	//全部初始化
	function init(){
		faceLook.init();
	};
	init();
})


//单例函数——皮肤标签切换
$(function(){
	var faceTab={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			var facetab=this;
			this.$changetab= $("#facefirst li");
		},
		bind:function(){
			var facetab=this;	
			facetab.$changetab.each(function(index){
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
				
			});
		}
	},
	test=function(){
		faceLook.init();//与皮肤预览通信
	}	
	//全部初始化
	function init(){
		faceTab.init();
	};
	init();
})




//导航下拉菜单
// $(function() {
// 	function navMore(obj) {
// 		obj.hover(function() {
// 			$(this).find(".list").toggle();
// 		});
// 	};
// 	navMore($("#more"));
// });


//单例——导航下拉(将右侧导航菜单单独封装，业务逻辑更加清晰，便于查找，一目了然)
$(function(){
	var hoverMore={
		init:function(){
			this.bind();
		},
		bind:function(){
			var me=this;
			me.hovermore = $("#more");
			me.hovermore.hover(function(){
				$(this).find(".list").toggle();
			});
		}
	}
	//全部初始化
	function init(){
		hoverMore.init();
	};
	init();
})


//导航登陆设置悬停
$(function() {
	$("#desgin").hover(function() {
		$("#list-desgin").toggle();
	});
	$("#order").hover(function() {
		$("#list-order").toggle();
	})
})


//设置按钮
// $(function() {
// 	$("#tab-btn").click(function() {
// 		$(".tab-btn").slideToggle();
// 	})
// })



//单例——按钮
$(function(){
	var setting={
		init:function(){
			this.bind();
		},
		bind:function(){
			var setbtn=this;
			setbtn.clickbtn = $("#tab-btn");
			setbtn.clickbtn.click(function(){
				$(".tab-btn").slideToggle();
			});
		}
	}
	//全部初始化
	function init(){
		setting.init();
	};
	init();
})




//标签切换
// $(document).ready(function() {
// 	$("#tabfirst li").each(function(index) {
// 		var LiNode = $(this); //定义this
// 		$(this).mouseover(function() {
// 			timeoutid = setTimeout(function() { //设置定时器，延迟移动时间
// 				$("div.tabcontent").removeClass("tabcontent"); //移除内容
// 				$("#tabfirst li.tabin").removeClass("tabin"); //移除头部标签
// 				$("div.tabcontentfrist").eq(index).addClass("tabcontent"); //寻找当前div添加内容
// 				LiNode.addClass("tabin").css({
// 					backgroundColor: '#f9f9f9'
// 				});
// 			}, 300);
// 		}).mouseout(function() {
// 			clearTimeout(timeoutid);
// 			LiNode.css({
// 				backgroundColor: '#fff'
// 			});
// 		});
// 	});
// });

//单例——标签切换(将主题内容的标签切换单独封装，保护了属性和方法，也使代码更加有条理。)
$(function(){
	var changTab={
		init:function(){
			this.render();
			this.bind();
		},
		render:function(){
			var tab =this;
			tab.$changetab = $("#tabfirst li");
		},
		bind:function(){
			var tab=this;			
			tab.$changetab.each(function(index){
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
		}
	}
	//全部初始化
	function init(){
		changTab.init();
	};
	init();
})



//导航返利
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