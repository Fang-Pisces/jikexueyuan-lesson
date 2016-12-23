	function fs(){
				var value=document.getElementById('choot').value;
				if(!value.trim() || isNaN(value) || value>100 || value<0){//判断为空trim空格、非数字、大于100、小于0
					alert("请输入0-100之间的数字！");
					return false;
				}
				var shu=parseFloat(value);
				title(shu);
			function title(score){
						if(score>=90){
							alert("一等生");
						}else if(score>=80 && score<90){
							alert("二等生");
						}else if(score>=70 && score<80){
							alert("三等生");
						}else if(score>=60 && score<70){
							alert("四等生");
						}else if(score<60){
							alert("末等生");
						}
				}		
	}
	