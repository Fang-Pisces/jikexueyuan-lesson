// function changeSkin(skin){
// 		// document.getElementById("hao-nav").style.backgroundColor="plum";
// 		document.body.nav.className=skin;

// 	}


var skincolors = ["plum", "#00ff00", "#ffff00", "#00ffff", "#ff00ff"];
var texts = ["黑体", "微软雅黑", "隶书", "楷体","行楷"];
var fontcolors = ["#e9e9e9", "#358558", "rgb(255, 0, 245)", "#00ffff", "#ff00ff"];
var index = 0;
var fcolor;
var scolor;
var font;
// 换肤
function changeSkin() {
	scolor = skincolors[index++];
	localStorage.setItem("theme",index);
	//localStorage.theme=index;
	document.getElementById("bar1").style.backgroundColor = scolor;
	document.getElementById("bar2").style.backgroundColor = scolor;
	if (index == skincolors.length) {
		index = 0;
	}
	fontFamily();//不可以同时调用几个函数，应该通过一个函数来调用其他的。
	fontColor();
}
// 更改字体
function fontFamily() {
	font = texts[index];
	document.body.style.fontFamily = font;
	if (index == texts.length) {
		index = 0;
	}
	
}
// 变换字体颜色,此处字体颜色为何不变？---未改变a标签
function fontColor() {
	fcolor = fontcolors[index];
	document.body.style.color = fcolor;
	if (index == fontcolors.length) {
		index = 0;
	}
	var a=document.getElementsByTagName("a");
	for(i=0;i<a.length;i++){
		a[i].style.color=fcolor;
	}
	
}

//记录换肤信息
index = localStorage.getItem("theme");
if (index == "NaN" || index == "undefind") {
	index = 0;
} else {
	if (index == 0) {
		index == skincolors.length;
	} else {
		index--;
	}
}
changeSkin();
