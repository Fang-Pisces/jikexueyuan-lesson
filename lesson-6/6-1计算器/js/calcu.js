var num = 0;
var reslute = 0; //判断结果
var numshow = 0;
var operate = 0; //判断输入状态
var calcu = 0;
//var flg=1;
//判断commmand,输入0或00时屏幕不变，否则返回当前值
function command(num) {
	var str = String(document.calculator.numScreen.value); //获得当前显示值
	str = (str != "0") ? ((operate == 0 ? str : "")) : ""; //判断如果当前值不是0，且状态为0，则返回输入值，否则返回空值
	str = str + String(num); //追加输入状态
	document.calculator.numScreen.value = str; //刷新
	operate = 0; //重置
}

//判断00
function dzero() {
	var str = String(document.calculator.numScreen.value);
	str = (str != 0) ? ((operate == 0) ? str + "00" : "0") : "0"; //判断如果当前值不是0，且状态为0，则返回str+00，否则返回0
	document.calculator.numScreen.value = str;
	operate = 0; //重置
}

//C清空数据
function clearscreen() {
	num = 0;
	reslute = 0;
	numshow = "0";
	document.calculator.numScreen.value = "0";
}

//退格
function del() {
	var str = String(document.calculator.numScreen.value);
	str = (str != "0") ? str : ""; //判断当前值为零则显示当前值，否则删除最后一个数字
	str = str.substr(0, str.length - 1);
	str = (str != "") ? str : "0"; //判断退格后若不为空则返回当前值，否则返回0
	document.calculator.numScreen.value = str;
}

//小数点
function dot() {
	var str = String(document.calculator.numScreen.value);
	str = (str != 0) ? ((operate == 0) ? str : "0") : "0";
	for (var i = 0; i <= str.length; i++) { //判断如果已经有小数点则不再插入
		if (str.substr(i, 1) == ".") {
			return false;
		}
	}
	str = str + ".";
	document.calculator.numScreen.value = str;
}

//计算函数
function calculate() {
	numshow = parseFloat(Number(document.calculator.numScreen.value));
	if (num != 0) { //判断前一个输入值的状态
		switch (calcu) {
			case 1: //加法
				reslute = parseFloat((num + numshow).toFixed(8));
				break;
			case 2: //减法
				reslute = parseFloat((num - numshow).toFixed(8));
				break;
			case 3: //乘法
				reslute = parseFloat((num * numshow).toFixed(8));
				break;
			case 4: //除法
				if (numshow != 0) {
					reslute = parseFloat((num / numshow).toFixed(8));
				} else {
					reslute = "wrong";
					document.getElementById("note").innerHTML = "被除数不能为零！";
					setTimeout(clearnote, 3000)
				}
				break;
			case 5: //求余
				reslute = parseFloat((num % numshow).toFixed(8));
				break;
			case 6: //sin
				reslute = Math.sin(numshow).toFixed(8);
				break;
			case 7: //cos
				reslute = Math.cos(numshow).toFixed(8);
				break;
			case 8: //tan
				reslute = Math.tan(numshow).toFixed(8);
				break;
			case 9: //指数
				reslute = Math.pow(num,numshow).toFixed(8);
				break;
			case 10: //log
				reslute = Math.log(numshow).toFixed(8);
				break;
		}

	} else {
		reslute = numshow;
	}
	numshow = String(reslute);
	document.calculator.numScreen.value = numshow;
	num = reslute; //存储当前值
}

//清空提示
function clearnote() {
	document.getElementById("note").innerHTML = "";
}

//加法
function plus() {
	calculate();
	calcu = 1;
	operate = 1;
}
//减法
function minus() {
	calculate();
	calcu = 2;
	operate = 1;
}
//乘法
function times() {
	calculate();
	calcu = 3;
	operate = 1;
}
//除法
function divide() {
	calculate();
	calcu = 4;
	operate = 1;
}
//求余
function persent() {
	calculate();
	calcu = 5;
	operate = 1;
}
//求sin
function sin() {
	calculate();
	calcu = 6;
	operate = 1;
	// var str = String(document.calculator.numScreen.value);
	// str = Math.sin(str).toFixed(8);
	// document.calculator.numScreen.value = str;
	// operate = 0;
}
//求cos
function cos() {
	calculate();
	calcu = 7;
	operate = 1;
}
//求tan
function tan() {
	calculate();
	calcu = 8;
	operate = 1;
}
//求指数
function pow() {
	calculate();
	calcu = 9;
	operate = 1;
}
//求log
function log() {
	calculate();
	calcu = 10;
	operate = 1;
}
//等于
function equal() {
	calculate();
	num = 0;
	reslute = 0;
	numshow = "0";
	operate = 1;
}