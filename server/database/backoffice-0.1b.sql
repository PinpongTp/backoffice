-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2021 at 06:40 PM
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
(5, '', '', 'pinpong.tp@gmail.com', '$2b$10$xt3GzYzc19/HVddvlkTo0Oi9gd2pU7Rbhdca9zKRGrVEuRm56NYbe', '2021-11-14 13:41:02', '2021-11-14 13:41:02', 'active'),
(6, '', '', 'email', '$2b$10$JR9PzTb91U4ziA00Ci1ZsOhnia72eDHrUPNXNV/WbkBHLJnXmk8KC', '2021-11-16 17:07:02', '2021-11-16 17:07:02', 'inactive'),
(7, 'name', 'username', 'email', '$2b$10$DKjkbdDRA.lN7Ocat8GZ2./5Nh0Gvdbfp4IE605jEHHcbw2X1ZuiO', '2021-11-16 17:17:42', '2021-11-16 17:17:42', 'active'),
(8, 'test create', 'username', 'email.com', '$2b$10$A1qsJOEIuV8lgi8uZbSO4ekmChnWNQHk.Q93a5uKPUbXnrW6iGs4O', '2021-11-16 17:39:42', '2021-11-16 17:39:42', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
