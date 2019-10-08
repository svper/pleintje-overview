-- phpMyAdmin SQL Dump
-- version 4.0.10.20
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 09, 2019 at 12:56 AM
-- Server version: 10.0.38-MariaDB-cll-lve
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `deb38057_pleintje`
--

-- --------------------------------------------------------

--
-- Table structure for table `goal`
--

CREATE TABLE IF NOT EXISTS `goal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `match_id` int(11) NOT NULL,
  `minute` int(11) NOT NULL,
  `scorer_id` int(11) DEFAULT NULL,
  `assist_id` int(11) DEFAULT NULL,
  `score` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `goal`
--

INSERT INTO `goal` (`id`, `match_id`, `minute`, `scorer_id`, `assist_id`, `score`) VALUES
(11, 1, 2, 8, 9, '1-0'),
(12, 1, 7, 8, 1, '2-0'),
(13, 1, 11, NULL, NULL, '2-1'),
(14, 1, 17, NULL, NULL, '2-2'),
(15, 1, 35, 4, 6, '3-2'),
(16, 1, 46, 1, NULL, '4-2'),
(17, 2, 6, NULL, NULL, '0-1'),
(18, 2, 19, NULL, NULL, '0-2'),
(19, 2, 35, 3, NULL, '1-2'),
(20, 2, 40, 4, 1, '2-2'),
(21, 2, 52, 3, 12, '2-3'),
(22, 2, 58, NULL, NULL, '3-3'),
(23, 3, 10, 6, 7, '1-0'),
(24, 3, 22, 7, 6, '2-0'),
(25, 3, 30, 3, 1, '3-0'),
(26, 3, 39, 6, 4, '4-0'),
(27, 3, 46, 1, 4, '5-0'),
(28, 4, 2, 1, 2, '1-0'),
(29, 4, 5, NULL, NULL, '1-1'),
(30, 4, 10, NULL, NULL, '1-2'),
(31, 4, 13, 4, 5, '2-2'),
(32, 4, 22, 5, 2, '3-2'),
(33, 4, 25, 5, NULL, '4-2'),
(34, 4, 32, 4, 10, '5-2'),
(35, 4, 35, 8, 4, '6-2'),
(36, 4, 43, 2, NULL, '7-2'),
(37, 4, 47, 4, 10, '8-2'),
(38, 4, 49, NULL, NULL, '8-3');

-- --------------------------------------------------------

--
-- Table structure for table `lineup`
--

CREATE TABLE IF NOT EXISTS `lineup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `match_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  `shirt_number` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `lineup`
--

INSERT INTO `lineup` (`id`, `match_id`, `player_id`, `shirt_number`) VALUES
(1, 1, 12, 1),
(2, 1, 8, 2),
(3, 1, 6, 3),
(4, 1, 5, 4),
(5, 1, 1, 5),
(6, 1, 9, 6),
(7, 1, 3, 7),
(8, 1, 4, 8),
(9, 2, 13, 1),
(10, 2, 5, 2),
(11, 2, 4, 5),
(12, 2, 12, 7),
(13, 2, 1, 8),
(14, 2, 3, 11),
(15, 2, 7, 14),
(16, 3, 12, 1),
(17, 3, 5, 2),
(18, 3, 1, 5),
(19, 3, 3, 7),
(20, 3, 6, 8),
(21, 3, 4, 11),
(22, 3, 7, 14),
(23, 4, 12, 1),
(24, 4, 5, 2),
(25, 4, 1, 5),
(26, 4, 8, 7),
(27, 4, 2, 8),
(28, 4, 9, 11),
(29, 4, 10, 12),
(30, 4, 4, 14);

-- --------------------------------------------------------

--
-- Table structure for table `match`
--

CREATE TABLE IF NOT EXISTS `match` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `opponent_name` varchar(200) NOT NULL,
  `summary_video_url` varchar(250) NOT NULL,
  `summary_embed_url` varchar(250) NOT NULL,
  `score_us` int(11) NOT NULL,
  `score_opponent` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `match`
--

INSERT INTO `match` (`id`, `date`, `opponent_name`, `summary_video_url`, `summary_embed_url`, `score_us`, `score_opponent`) VALUES
(1, '2019-10-08 23:43:02', 'Branli', 'https://streamable.com/atklu', 'https://streamable.com/s/atklu/squkwm', 4, 2),
(2, '2019-10-08 23:53:27', 'F. Van Dessel', 'https://streamable.com/227of', 'https://streamable.com/s/227of/hlaqel', 3, 3),
(3, '2019-10-08 23:53:27', 'Primus', 'https://streamable.com/0yj3l', 'https://streamable.com/s/0yj3l/scxfvc', 5, 0),
(4, '2019-10-09 00:45:28', 'De Dreef', '', '', 8, 3);

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE IF NOT EXISTS `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`id`, `first_name`, `last_name`) VALUES
(1, 'Robin', 'Verhulst'),
(2, 'Sven', 'Stassyns'),
(3, 'Nielsen', 'Stassyns'),
(4, 'Sven', 'De Ceuster'),
(5, 'Stefan', 'Haemhouts'),
(6, 'Filip', 'Vermeiren'),
(7, 'Jan', 'Verlinden'),
(8, 'Jonas', 'Donckers'),
(9, 'Glenn', 'Van Croonenborgh'),
(10, 'Remko', 'Gielen'),
(11, 'Philip', 'Hermans'),
(12, 'Michael', 'Vleugels'),
(13, 'Vincent', 'Veys');

-- --------------------------------------------------------

--
-- Stand-in structure for view `player_stats`
--
CREATE TABLE IF NOT EXISTS `player_stats` (
`player_id` int(11)
,`goal` bigint(20)
,`assist` bigint(20)
);
-- --------------------------------------------------------

--
-- Stand-in structure for view `player_stats_full`
--
CREATE TABLE IF NOT EXISTS `player_stats_full` (
`player_id` int(11)
,`first_name` varchar(150)
,`last_name` varchar(50)
,`goals` decimal(41,0)
,`assists` decimal(41,0)
);
-- --------------------------------------------------------

--
-- Structure for view `player_stats`
--
DROP TABLE IF EXISTS `player_stats`;

CREATE ALGORITHM=UNDEFINED DEFINER=`deb38057`@`localhost` SQL SECURITY DEFINER VIEW `player_stats` AS select `goal`.`scorer_id` AS `player_id`,1 AS `goal`,0 AS `assist` from `goal` union all select `goal`.`assist_id` AS `assist_id`,0 AS `0`,1 AS `1` from `goal`;

-- --------------------------------------------------------

--
-- Structure for view `player_stats_full`
--
DROP TABLE IF EXISTS `player_stats_full`;

CREATE ALGORITHM=UNDEFINED DEFINER=`deb38057`@`localhost` SQL SECURITY DEFINER VIEW `player_stats_full` AS select `ps`.`player_id` AS `player_id`,`p`.`first_name` AS `first_name`,`p`.`last_name` AS `last_name`,sum(`ps`.`goal`) AS `goals`,sum(`ps`.`assist`) AS `assists` from (`player_stats` `ps` join `player` `p`) where (`ps`.`player_id` = `p`.`id`) group by `ps`.`player_id` order by sum(`ps`.`goal`) desc;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
