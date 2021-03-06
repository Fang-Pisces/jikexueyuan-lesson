//1、打开后台页面，发送请求，刷新新闻列表
$(document).ready(function() {
	var $newsTable = $('#newstable tbody');	
	refreshNews();

	//添加新闻  begin
	$('#btnsubmit').click(function(e){
		e.preventDefault();//阻止点击提交

		//输入判断
		if($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" ||$('#newssrc').val() === ""){
			if($('#newstitle').val() === ""){
				$('#newstitle').parent().addClass('has-error');
			}else{
				$('#newstitle').parent().removeClass('has-error');
			}

			if($('#newsimg').val() === ""){
				$('#newsimg').parent().addClass('has-error');
			}else{
				$('#newsimg').parent().removeClass('has-error');
			}

			if($('#newstime').val() === ""){
				$('#newstime').parent().addClass('has-error');
			}else{
				$('#newstime').parent().removeClass('has-error');
			}

			if($('#newssrc').val() === ""){
				$('#newssrc').parent().addClass('has-error');
			}else{
				$('#newssrc').parent().removeClass('has-error');
			}
		}else{
			var jsonNews = {
				newstitle:$('#newstitle').val(),
				newstype:$('#newstype').val(),
				newsimg:$('#newsimg').val(),
				newstime:$('#newstime').val(),
				newssrc:$('#newssrc').val(),
			}


			//提交添加
			$.ajax({
				url:'/admin/insert',
				type:'post',
				data:jsonNews,
				datatype:'json',
				success:function(data){
					console.log(data);
					$('#newstitle').val(''),
					$('#newstype').val(''),
					$('#newsimg').val(''),
					$('#newstime').val(''),
					$('#newssrc').val(''),
					refreshNews();
				}
			});
		}

	});

	//添加新闻  end


	//事件委托
	//删除新闻  begin
	var deleteId = null;
	$newsTable.on('click','.btn-danger',function(e){
		$('#deleteModal').modal('show');
		deleteId = $(this).parent().prevAll().eq(3).html();
	});

	$('#deleteModal #confirmDelete').click(function(e){
		if(deleteId){
			$.ajax({
				url:'/admin/delete',
				type:'post',
				data:{newsid:deleteId},
				success:function(data){
					console.log("删除成功");
					$('#deleteModal').modal('hide');
					refreshNews();
				}
			});
		}

	});
	//删除新闻   end




	//修改新闻  begin
	var updateId = null;
	$newsTable.on('click','.btn-primary',function(e){
		$('#updateModal').modal('show');
		updateId = $(this).parent().prevAll().eq(3).html();

		$.ajax({
				url:'/admin/curnews',
				type:'get',
				datatype:'json',
				data:{newsid:updateId},
				success:function(data){
					console.log(data);
					$('#unewstitle').val(data[0].newstitle);
					$('#unewstype').val(data[0].newstype);
					$('#unewsimg').val(data[0].newsimg);
					$('#unewssrc').val(data[0].newssrc);
					//$('#unewstime').val(data[0].newstime);
					var utime = data[0].newstime.split('T')[0];
					$('#unewstime').val(utime);
				},
				error:function(e){
				console.log(e);//打印出错误
			}
			});
	});

	$('#updateModal #confirmUpdate').click(function(e){
		$.ajax({
			url:'/admin/update',
			type:'post',
			data:{
				newstitle:$('#unewstitle').val(),
				newstype:$('#unewstype').val(),
				newsimg:$('#unewsimg').val(),
				newstime:$('#unewstime').val(),
				newssrc:$('#unewssrc').val(),
				id:updateId
			},
			success:function(data){
				console.log("修改成功");
				$('#updateModal').modal('hide');
				refreshNews();

			}
		});

	});
	//修改新闻   end











	function refreshNews() {
		//2、清空新闻
		$newsTable.empty();
		$.ajax({
			type: 'get',
			url: '/admin/getnews',
			datatype: 'json',
			success: function(data) {
				data.forEach(function(item, index, array) {
					var $tdid = $('<td>').html(item.id);
					var $tdtype = $('<td>').html(item.newstype);
					var $tdtitle = $('<td>').html(item.newstitle);
					var $tdimg = $('<td>').html(item.newsimg);
					var $tdsrc = $('<td>').html(item.newssrc);
					var $tdtime = $('<td>').html(item.newstime);
					var $tdctrl = $('<td>');
					var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html("修改");
					var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html("删除");
					$tdctrl.append($btnupdate, $btndelete);
					var $tRow = $('<tr>');
					$tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
					$newsTable.append($tRow);
					

				})

			},
			error:function(e){
				console.log(e);//打印出错误
			}

		});

	}

});





