<?php

	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('localhost','root','','baidunews',3306);
	//服务器名、用户名、密码、文件名、端口

	if($link){
	//执行成功的过程


		if(isset($_GET['newstype'])){//判断get、post有没有传递过来
			$newstype = $_GET['newstype'];

			$sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}'";//查询整个表单
			mysqli_query($link,"SET NAMES utf8");

			//传入数据结果
			$result = mysqli_query($link,$sql);

			$senddata = array();
			while($row = mysqli_fetch_assoc($result)){
			//解析得到的每一行信息
				array_push($senddata,array(
							//吐出数组
						'id'=>$row['id'],
						'newstitle'=>$row['newstitle'],
						'newstype'=>$row['newstype'],					
						'newsimg'=>$row['newsimg'],
						'newstime'=>$row['newstime'],
						'newssrc'=>$row['newssrc']

				));
				}

	//发送给前端			
		echo json_encode($senddata);
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
						'id'=>$row['id'],
						'newstitle'=>$row['newstitle'],
						'newstype'=>$row['newstype'],					
						'newsimg'=>$row['newsimg'],
						'newstime'=>$row['newstime'],
						'newssrc'=>$row['newssrc']

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