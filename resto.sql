-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2024 at 05:03 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resto`
--

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id_menu` int(11) NOT NULL,
  `nama_menu` varchar(255) DEFAULT NULL,
  `jenis` enum('makanan','minuman') DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id_menu`, `nama_menu`, `jenis`, `deskripsi`, `gambar`, `harga`, `createdAt`, `updatedAt`) VALUES
(1, 'Nasi Goreng', 'makanan', 'Nasi goreng, hidangan khas Indonesia yang penuh rasa, dengan bumbu rempah yang kaya dan lauk lezat seperti ayam atau udang. Disajikan hangat dengan kerupuk renyah dan irisan mentimun, menjadikannya pilihan sempurna untuk setiap momen.', 'image-1734092453595-nasigoreng.jpg', 10, '2024-12-13 12:20:53', '2024-12-13 12:20:53'),
(2, 'Nasi Bakar', 'makanan', 'Nasi bakar dengan bumbu rempah yang menggoda, dibungkus daun pisang dan dipanggang hingga harum. Setiap gigitan menghadirkan sensasi gurih dengan lauk pilihan yang tak pernah gagal memanjakan.', 'image-1734092503739-ec6432343d6e9291d96b62b03aa44a91.jpg', 12, '2024-12-13 12:21:43', '2024-12-13 12:21:43'),
(3, 'Nasi Kuning', 'makanan', 'Nasi kuning yang kaya akan rasa gurih dari santan dan kunyit, disajikan dengan lauk seperti ayam goreng dan telur. Sebuah hidangan penuh keberkahan yang sempurna untuk setiap perayaan.', 'image-1734092542865-bd8d8972793480a3a5b3d622df559fdc.jpg', 12, '2024-12-13 12:22:22', '2024-12-13 12:22:22'),
(4, 'Nasi Liwet', 'makanan', 'Nasi liwet, nasi gurih yang dimasak dengan santan dan rempah, disajikan dengan lauk seperti ayam goreng atau ikan asin. Rasanya yang lembut dan harum selalu membawa kebersamaan dalam setiap hidangan.', 'image-1734092580303-nasiliwet.jpg', 15, '2024-12-13 12:23:00', '2024-12-13 12:23:00'),
(5, 'Rendang', 'makanan', 'Rendang, daging sapi yang dimasak perlahan dengan santan dan rempah-rempah khas, menghasilkan rasa gurih dan pedas yang kaya. Sempurna disajikan dengan nasi putih hangat sebagai hidangan yang memuaskan.', 'image-1734092623502-rendang.jpg', 20, '2024-12-13 12:23:43', '2024-12-13 12:23:43'),
(6, 'Salad Wrapp', 'makanan', 'Salad wrap, pilihan sehat dan segar dengan sayuran crisp yang dibungkus dalam tortilla atau daun selada. Ditambah saus creamy, membuatnya menjadi hidangan ringan yang penuh gizi dan rasa.', 'image-1734092674652-98f48ab4917bdb461a27ee1e2d20b766.jpg', 15, '2024-12-13 12:24:34', '2024-12-13 12:24:34'),
(7, 'Sayur Lodeh', 'makanan', 'Sayur lodeh, hidangan sup santan dengan sayuran segar yang dipadukan dengan bumbu rempah khas. Lezat dan menyehatkan, cocok dinikmati bersama nasi hangat.', 'image-1734092712440-a7d202a33c8b85f3f7a1a4c848cfc3b2.jpg', 8, '2024-12-13 12:25:12', '2024-12-13 12:25:12'),
(8, 'Es Teler', 'minuman', 'Es teler, minuman pencuci mulut khas Indonesia yang menyegarkan. Perpaduan rasa sempurna untuk mengusir dahaga.', 'image-1734093537062-6288c0790c80b510b4c91151457e25bf.jpg', 10, '2024-12-13 12:38:57', '2024-12-13 12:38:57'),
(9, 'Es Cendol', 'minuman', 'Es cendol, sajian khas Nusantara yang memanjakan, terdiri dari cendol kenyal berbahan tepung beras, disajikan dengan santan segar, gula merah cair, dan es serut. Rasanya yang legit dan lembut menjadikannya minuman favorit di hari yang panas.', 'image-1734093571047-cendol.jpg', 10, '2024-12-13 12:39:31', '2024-12-13 12:39:31');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20241210032251-create-menu.js'),
('20241211045315-create-order.js'),
('20241211045602-create-order-detail.js'),
('20241211050354-create-payment.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
