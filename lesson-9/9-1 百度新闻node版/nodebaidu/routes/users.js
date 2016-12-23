var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var xss = require('xss');



var connection = mysql.createPool({//连接池
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	database:'baidunews'
});


/* 后台路由页面 */

// 获取所有新闻列表
router.get('/getnews', function(req, res, next) {
  	connection.query('SELECT * FROM `news`',function(err,rows){
  		res.json(rows);
  	});
});



//修改功能
//点击确认更新
router.post('/update',function(req,res){
	var newsid = xss(req.body.id),
		newstitle = xss(req.body.newstitle),
		newstype = xss(req.body.newstype),
		newsimg = xss(req.body.newsimg),
		newstime = xss(req.body.newstime),
		newssrc = xss(req.body.newssrc);
	console.log(newsid);
	console.log(newstitle);
	console.log(newstype);
	console.log(newsimg);
	console.log(newssrc);
	connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',
					  [newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){

				res.json(rows.changedRows);//回调函数
				
	});
});


//模态框取值
router.get('/curnews',function(req,res){
	var newsid = xss(req.query.newsid);
	console.log(newsid);
	connection.query('SELECT * FROM `news` WHERE id = ?',[newsid],function(err,rows){
		res.json(rows);
	});
});


//删除功能
router.post('/delete',function(req,res){
	var newsid = xss(req.body.newsid);
	console.log(newsid);
	connection.query('DELETE FROM `news` WHERE `news`.`id` =?',[newsid],function(err,result){
		res.json(result.affectedRows);
	});
});


//insert添加
router.post('/insert',function(req,res){
	var newstitle = xss(req.body.newstitle),
		newstype = xss(req.body.newstype),
		newsimg = xss(req.body.newsimg),
		newstime = xss(req.body.newstime),
		newssrc = xss(req.body.newssrc);
	console.log(newstitle);
	console.log(newstype);
	console.log(newsimg);
	console.log(newssrc);
	connection.query('INSERT INTO `news`( `newstitle`, `newstype`,`newsimg`, `newstime`, `newssrc`) VALUES (?,?,?,?,?)',
					[newstitle,newstype,newsimg,newstime,newssrc],function(err,result){
				if(!err){
					res.json(result.insertId);
				}
	});
});

module.exports = router;
