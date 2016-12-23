
    $(window).on("load",function(){
        imgLocation();
        //模拟网络加载
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"}]};
        //获取新加载图片
        window.onscroll = function(){
            if(scrollside()){
                $.each(dataImg.data,function(index,value){//获取图片信息
                    var box = $("<div>").addClass("box").appendTo($("#container"));//模拟box的div
                    var content = $("<div>").addClass("content").appendTo(box);//模拟content的div
                    // console.log("./img/"+$(value).attr("src"));
                     //最后一步，获取图片并加到content中
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        };
        window.onresize = function(){
            imgLocation();//屏幕变小时，重新定位
        };
    });


//鼠标滚动函数
function scrollside(){
    var box = $(".box");
    //获取到最后一张照片 到顶部的距离 + 最后一个照片的高度的一半，floor转化为整数
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
     //当最后图片位置小于鼠标滑动高度+屏幕高度时，加载true，否则不加载
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}


//图片位置摆放的函数
function imgLocation(){
    var box = $(".box");//获取box
    var boxWidth = box.eq(0).width();//获取盒子宽度
    var num = Math.floor($(window).width()/boxWidth);//计算一排能放几张图片
    var boxArr=[];//创建数组
    box.each(function(index,value){
//        console.log(index+"--"+value);
        value.style.cssText = '';//初始化
        var boxHeight = box.eq(index).height();//获取盒子高度
        if(index<num){
            boxArr[index]= boxHeight;
//            console.log(boxHeight);
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);//寻找最小的高度
//            console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight,boxArr);//获取位置
//            console.log(minboxIndex);
//            console.log(value);
            $(value).css({//摆放图片位置
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();//重图片高度新计算高度，最小高度+当前
        }
    });
}