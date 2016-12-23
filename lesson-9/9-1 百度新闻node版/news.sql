-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-12-14 08:04:30
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL COMMENT '自动增长',
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(24, '图片', 'picture123', 'img/newsimg2.jpg', '2016-12-07 00:00:00', 'pic'),
(25, '本地', '北京', 'img/newsimg3.jpg', '2016-12-07 00:00:00', 'fang'),
(27, '娱乐', '锦绣未央', 'img/newsimg4.jpg', '2016-12-10 22:00:00', 'souhu'),
(37, '本地', '测试3', 'img/newsimg2.jpg', '2016-12-15 01:23:00', 'mine'),
(38, '百家', 'text', 'img/newsimg1.jpg', '2016-12-08 07:12:00', 'news'),
(39, '娱乐', 'text', 'img/newsimg4.jpg', '2016-12-08 07:12:00', 'news'),
(40, '精选', 'text', 'img/newsimg1.jpg', '2016-12-08 07:12:00', 'news'),
(45, '精选', 'xsstest&lt;script&gt;alert(1)&lt;/script&gt;', 'img/newsimg2.jpg', '2016-12-13 02:22:00', 'test3'),
(46, '图片', 'node', 'img/newsimg4.jpg', '2016-12-14 00:00:00', 'test1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=49;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
