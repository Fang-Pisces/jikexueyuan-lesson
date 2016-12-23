<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('db.php');

	if($link){
			if(isset($_GET['newsid'])){


			$newsid = $_GET['newsid'];

			mysqli_query($link,"SET NAMES utf8");
			$sql = "SELECT * FROM `news` WHERE `id` = {$newsid}";

			$result = mysqli_query($link,$sql);

			$senddata = array();
			while($row = mysqli_fetch_assoc($result)){
				array_push($senddata,array(
						'id'=>htmlspecialchars_decode($row['id']),
						'newstitle'=>htmlspecialchars_decode($row['newstitle']),
						'newstype'=>htmlspecialchars_decode($row['newstype']),					
						'newsimg'=>htmlspecialchars_decode($row['newsimg']),
						'newstime'=>htmlspecialchars_decode($row['newstime']),
						'newssrc'=>htmlspecialchars_decode($row['newssrc'])
					));
			}
			echo json_encode($senddata);
		}
	// }else{
	// 		echo json_encode(array('success'=>'none'));
	//  	}
			else{


				$sql = 'SELECT * FROM news';//查询整个表单
				mysqli_query($link,"SET NAMES utf8");

				//传入数据结果
				$result = mysqli_query($link,$sql);

				$senddata = array();
				while($row = mysqli_fetch_assoc($result)){
				//解析得到的每一行信息
				array_push($senddata,array(
						//吐出数组
						'id'=>htmlspecialchars_decode($row['id']),
						'newstitle'=>htmlspecialchars_decode($row['newstitle']),
						'newstype'=>htmlspecialchars_decode($row['newstype']),					
						'newsimg'=>htmlspecialchars_decode($row['newsimg']),
						'newstime'=>htmlspecialchars_decode($row['newstime']),
						'newssrc'=>htmlspecialchars_decode($row['newssrc'])

				));
				}
				//发送给前端

					echo json_encode($senddata);
			}
		}else{
			echo json_encode(array('success'=>'none'));
		}
		

	mysqli_close($link);


?>