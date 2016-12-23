function cale() {
    //验证输入非空、数字
    var value = document.getElementById('num1', 'num2').value;
    if (!value.trim() || isNaN(value)) {
        alert("请输入数字!");
        return false;
    }
    var shu = parseFloat(value);
    cale(shu);
    //满足以上条件调用下列函数
    function cale() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var operator = document.getElementById('op').value;
        var sum = jisuan(num1, num2, operator);
        document.getElementById('result').innerText = sum;
    }

    function jisuan(n1, n2, oper) {
        switch (oper) {
            case '+':
                return parseFloat(((n1) + (n2)).toFixed(8));
            case '-':
                return parseFloat(((n1) - (n2)).toFixed(8));
            case '*':
                return parseFloat(((n1) * (n2)).toFixed(8));
            case '/':
                if (n2 == 0) {
                    alert("除数不能为零，请重新输入！");
                } else {
                    return parseFloat(((n1) / (n2)).toFixed(8));
                }
            default:
                return '未知';
        }
    }
}
