-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2022 at 10:24 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backoffice`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(10) NOT NULL,
  `name` text NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `added` timestamp NOT NULL DEFAULT current_timestamp(),
  `updete` timestamp NOT NULL DEFAULT current_timestamp(),
  `rec_status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `username`, `email`, `password`, `added`, `updete`, `rec_status`) VALUES
(1, '', '', 'pinpong.tp@gmail.com', '0', '2021-11-14 13:31:26', '2021-11-14 13:31:26', 'inactive'),
(2, '', '', 'pinpong.tp@gmail.com', '0', '2021-11-14 13:31:46', '2021-11-14 13:31:46', 'inactive'),
(3, '', '', 'pinpong.tp@gmail.com', '0', '2021-11-14 13:33:03', '2021-11-14 13:33:03', 'inactive'),
(4, '', '', 'pinpong.tp@gmail.com', '0', '2021-11-14 13:34:31', '2021-11-14 13:34:31', 'inactive'),
(5, 'test update', 'update', 'pinpong.tp@gmail.com', '$2b$10$xt3GzYzc19/HVddvlkTo0Oi9gd2pU7Rbhdca9zKRGrVEuRm56NYbe', '2021-11-14 13:41:02', '2021-11-14 13:41:02', 'active'),
(6, '', '', 'email', '$2b$10$JR9PzTb91U4ziA00Ci1ZsOhnia72eDHrUPNXNV/WbkBHLJnXmk8KC', '2021-11-16 17:07:02', '2021-11-16 17:07:02', 'inactive'),
(7, 'name', 'username', 'email', '$2b$10$DKjkbdDRA.lN7Ocat8GZ2./5Nh0Gvdbfp4IE605jEHHcbw2X1ZuiO', '2021-11-16 17:17:42', '2021-11-16 17:17:42', 'active'),
(8, 'test creates', 'username2', 'email.com', '$2b$10$A1qsJOEIuV8lgi8uZbSO4ekmChnWNQHk.Q93a5uKPUbXnrW6iGs4O', '2021-11-16 17:39:42', '2021-11-16 17:39:42', 'active'),
(9, 'test', 'admin_pin', 'pinpong.tp@gmail.com', '$2b$10$jaqu2EP7IMzHsNrPkjDupuwMQCcEJkoEdfCUdL583mg.Jsm.cPKua', '2021-11-18 16:22:22', '2021-11-18 16:22:22', 'active'),
(10, 'admin', 'admin', 'admin@admin', '$2b$10$L8pZaoWUL2IeBYhkjyNooeytUOFgYOoZdFDSGRce0nq7tI4nUKpLW', '2021-11-21 11:52:05', '2021-11-21 11:52:05', 'active'),
(11, 'admin', 'admin', 'admin@admin', '$2b$10$jpWzIZaxsBH0fQoYFw4AuetUc27aZ19wqHcrz4zx.Objl7/rysp8.', '2021-11-21 14:07:02', '2021-11-21 14:07:02', 'inactive'),
(12, 'admin', 'admin', 'admin@admin', '$2b$10$JhGszgn6P0n00QshK/1b4eYxouE3jlE/RbxgbExYpumdAlYymzZAG', '2021-11-21 14:26:08', '2021-11-21 14:26:08', 'inactive'),
(13, 'make for delete', '', '', '$2b$10$cFYCyCxGtH6CpA4taxUlHupFgp5zsehneDisfNd78Zn5wkA0AmaVK', '2021-11-21 16:53:51', '2021-11-21 16:53:51', 'inactive'),
(14, 'make del', '', '', '$2b$10$bkkLD7TORYjJp0uPQqEfFuVl5dNMsD47oopPqxtjK7gsEbw62TUSm', '2021-11-21 16:58:04', '2021-11-21 16:58:04', 'inactive'),
(15, 'del', '', '', '$2b$10$5kYfnR/c1CJsHoSORgc.n.97jZyRwbsWbVPhHN.yI/k9fTRyFQ3by', '2021-11-21 16:58:47', '2021-11-21 16:58:47', 'inactive'),
(16, 'del', '', '', '$2b$10$tJ6u2GZL0ZR1c0u0ka2zeuUHHlOhxU6CN9BcIzZD9kNP2r54QokBm', '2021-11-21 16:59:15', '2021-11-21 16:59:15', 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(10) NOT NULL,
  `thumbnail` text NOT NULL,
  `title` text NOT NULL,
  `subtitle` text NOT NULL,
  `content` text NOT NULL,
  `tags` text NOT NULL,
  `postdate` datetime NOT NULL,
  `approved` int(10) NOT NULL DEFAULT 0,
  `rec_added` timestamp NOT NULL DEFAULT current_timestamp(),
  `rec_update` timestamp NOT NULL DEFAULT current_timestamp(),
  `rec_status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `thumbnail`, `title`, `subtitle`, `content`, `tags`, `postdate`, `approved`, `rec_added`, `rec_update`, `rec_status`) VALUES
(1, '', 'test', 'test', 'test', '', '0000-00-00 00:00:00', 0, '2021-12-06 07:16:14', '2021-12-06 07:16:14', 'inactive'),
(2, '', 't', 't', 't', '', '2021-12-07 19:49:00', 0, '2021-12-06 12:49:35', '2021-12-06 12:49:35', 'inactive'),
(3, '', 'tt', 'ts', 'tc', '', '2021-12-06 23:51:00', 0, '2021-12-06 12:51:10', '2021-12-06 12:51:10', 'inactive'),
(4, '', 'Title test', 'Subtitle', 'Con tent test', '', '2021-12-10 19:53:00', 0, '2021-12-06 12:53:05', '2021-12-06 12:53:05', 'active'),
(5, '', 'test', 'test', '<p><strong>บทความที่ 1</strong></p>\n<p>บทความทดสอบ<br><ins>ทดสอบต่างๆ</ins><br><span style=\"font-size: 30px;\">อื่นๆ</span></p>\n', '', '2021-12-24 22:30:00', 0, '2021-12-06 15:30:17', '2021-12-06 15:30:17', 'active'),
(6, '', '', '', '<p></p>\n<img src=\"http://localhost:3001/data/uploads/0cb02640-46c5-4549-a798-87f1fcb8e492-1639319133933.jpeg\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n', '', '0000-00-00 00:00:00', 0, '2021-12-12 14:25:55', '2021-12-12 14:25:55', 'inactive'),
(7, '', '', '', '<p></p>\n', '', '0000-00-00 00:00:00', 0, '2021-12-14 15:03:18', '2021-12-14 15:03:18', 'inactive'),
(8, '24886c92-e4b4-4919-9b81-87956b0c59ee-1639905740579.jpeg', 'resume', 'myresume', '<p><strong>this is my resume </strong></p>\n<p><strong>ขอบคุณที่ติดตาม</strong></p>\n', '[{\"id\":\"resume\",\"text\":\"resume\"},{\"id\":\"profile\",\"text\":\"profile\"}]', '0000-00-00 00:00:00', 0, '2021-12-19 09:22:20', '2021-12-19 09:22:20', 'active'),
(9, '72f3b8d7-1ace-42a4-8102-45cf86ba98b1-1639923073368.jpeg', 'Resume ของฉัน', 'myresume', '<p>This is my resume</p>\n<p><em>นี้คือเรซูเม่ของฉัน</em></p>\n', '[{\"id\":\"resume\",\"text\":\"resume\"},{\"id\":\"profile\",\"text\":\"profile\"}]', '2021-12-19 21:10:00', 2147483647, '2021-12-19 14:11:13', '2021-12-19 14:11:13', 'active'),
(10, '5fd33ee1-462d-43bb-a615-2bedf9df3a5a-1641284093770.jpeg', 'test', 'test', '<p>test</p>\n', '[{\"id\":\"test\",\"text\":\"test\"}]', '2022-01-04 15:11:00', 2147483647, '2022-01-04 08:14:53', '2022-01-04 08:14:53', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
