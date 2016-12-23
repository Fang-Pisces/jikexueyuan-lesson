<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');

	if($link){
		if(isset($_POST['newsid'])){
		$newsid = addslashes(htmlspecialchars($_POST['newsid']));



		mysqli_query($link,"SET NAMES utf8");
		$sql = "DELETE FROM `news` WHERE `news`.`id` = {$newsid}";

		mysqli_query($link,$sql);

		echo json_encode(array('删除状态'=>'成功'));
	
	}else{
		$sql = 'SELECT * FROM news';//查询整个表单
				mysqli_query($link,"SET NAMES utf8");

				//传入数据结果
				$result = mysqli_query($link,$sql);

				$senddata = array();
				while($row = mysqli_fetch_assoc($result)){
				//解析得到的每一行信息
				array_push($senddata,array(
						//吐出数组
							'id'=>htmlspecialchars($row['id']),
							'newstype'=>htmlspecialchars($row['newstype']),
							'newstitle'=>htmlspecialchras($row['newstitle']),
							'newsimg'=>htmlspecialchars($row['newsimg']),
							'newstime'=>htmlspecialchars($row['newstime']),
							'newssrc'=>htmlspecialchars($row['newssrc'])

				));
				}
				//发送给前端
					echo json_encode($senddata);
				}

	}
	else{
		mysqli_close();
	}



?>