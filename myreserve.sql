-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2022 at 03:46 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myreserve`
--

-- --------------------------------------------------------

--
-- Table structure for table `reserve`
--

CREATE TABLE `reserve` (
  `No` int(11) NOT NULL,
  `UserNo` int(11) NOT NULL,
  `SeatNo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reserve`
--

INSERT INTO `reserve` (`No`, `UserNo`, `SeatNo`) VALUES
(1, 1, 12),
(2, 2, 9),
(4, 3, 8);

-- --------------------------------------------------------

--
-- Table structure for table `seat`
--

CREATE TABLE `seat` (
  `No` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Status` enum('Free','Reserve','Full') NOT NULL DEFAULT 'Free'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `seat`
--

INSERT INTO `seat` (`No`, `Name`, `Status`) VALUES
(1, 'ตัวที่1', 'Free'),
(2, 'ตัวที่2', 'Free'),
(3, 'ตัวที่3', 'Free'),
(4, 'ตัวที่4', 'Free'),
(5, 'ตัวที่5', 'Free'),
(6, 'ตัวที่6', 'Free'),
(7, 'ตัวที่7', 'Free'),
(8, 'ตัวที่8', 'Reserve'),
(9, 'ตัวที่9', 'Full'),
(10, 'ตัวที่10', 'Free'),
(11, 'ตัวที่11', 'Free'),
(12, 'ตัวที่12', 'Reserve'),
(13, 'ตัวที่13', 'Free'),
(14, 'ตัวที่14', 'Reserve'),
(15, 'ตัวที่15', 'Free'),
(16, 'ตัวที่16', 'Free');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `No` int(11) NOT NULL,
  `Fname` varchar(50) NOT NULL,
  `Lname` varchar(50) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `User` varchar(100) DEFAULT NULL,
  `Password` varchar(100) NOT NULL,
  `Status` enum('User','Admin') NOT NULL DEFAULT 'User'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`No`, `Fname`, `Lname`, `Phone`, `User`, `Password`, `Status`) VALUES
(1, 'admin', 'istrator', '0600000000', 'admin', 'admin', 'Admin'),
(2, 'a', 'a', '123456', 'a', 'a', 'User'),
(3, 'b', 'b', '66', 'b', 'b', 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reserve`
--
ALTER TABLE `reserve`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `seat`
--
ALTER TABLE `seat`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reserve`
--
ALTER TABLE `reserve`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
