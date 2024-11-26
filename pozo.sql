-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2022 a las 22:27:53
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pozo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `dni` int(8) NOT NULL,
  `nomApe` varchar(100) NOT NULL,
  `curso` varchar(10) NOT NULL,
  `grupo` int(3) NOT NULL,
  `id` int(11) NOT NULL,
  `rfid` int(11) NOT NULL,
  `estado` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`dni`, `nomApe`, `curso`, `grupo`, `id`, `rfid`, `estado`) VALUES
(45422796, 'Pepe Argento', '7C', 710, 1, 123123, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `nombre` varchar(60) NOT NULL,
  `id_cat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `herramientas`
--

CREATE TABLE `herramientas` (
  `nombre` varchar(60) NOT NULL,
  `cant` int(11) NOT NULL,
  `estado` int(1) NOT NULL,
  `url_img` varchar(999) NOT NULL,
  `devolucion` int(2) NOT NULL,
  `id_h` int(11) NOT NULL,
  `id_cat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `herramientas`
--

INSERT INTO `herramientas` (`nombre`, `cant`, `estado`, `url_img`, `devolucion`, `id_h`, `id_cat`) VALUES
('Netbook g5', 36, 1, 'https://http2.mlstatic.com/D_NQ_NP_817020-MLA31045595837_062019-O.jpg', 0, 2, 2),
('Termotanque', 10, 1, 'https://http2.mlstatic.com/D_NQ_NP_817020-MLA31045595837_062019-O.jpg', 0, 6, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_rehe`
--

CREATE TABLE `rel_rehe` (
  `id` int(11) NOT NULL,
  `id_retiros` int(11) NOT NULL,
  `id_herramientas` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rel_rehe`
--

INSERT INTO `rel_rehe` (`id`, `id_retiros`, `id_herramientas`, `cantidad`) VALUES
(14, 49, 6, 3),
(15, 49, 2, 2),
(16, 50, 2, 1),
(17, 50, 6, 1),
(18, 51, 6, 1),
(19, 52, 2, 1),
(20, 52, 6, 1),
(21, 53, 6, 1),
(22, 55, 6, 1),
(23, 56, 2, 6),
(24, 57, 6, 1),
(25, 58, 6, 3),
(26, 59, 6, 40),
(27, 60, 6, 10),
(28, 61, 6, 10),
(29, 62, 6, 1),
(30, 63, 6, 10),
(31, 64, 6, 10),
(32, 65, 6, 10),
(33, 66, 6, 10),
(34, 67, 6, 10),
(35, 68, 6, 10),
(36, 69, 6, 1),
(37, 70, 6, 10),
(38, 71, 6, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retiros`
--

CREATE TABLE `retiros` (
  `id_r` int(11) NOT NULL,
  `dni` varchar(12) NOT NULL,
  `nom_ape` text NOT NULL,
  `grupo` varchar(4) NOT NULL,
  `curso` varchar(4) NOT NULL,
  `estado` int(2) NOT NULL,
  `fecha_ret` date NOT NULL,
  `fecha_dev` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `retiros`
--

INSERT INTO `retiros` (`id_r`, `dni`, `nom_ape`, `grupo`, `curso`, `estado`, `fecha_ret`, `fecha_dev`) VALUES
(49, '45422796', 'Lautaro Laraignee', '710', '7C', 1, '2022-10-11', '0000-00-00'),
(50, '88282883', 'Chin Chan Chon devuelta a japon', '333', '4C', 0, '2022-10-11', '0000-00-00'),
(51, '22678333', 'Alfonos Rodriguez Perez', '303', '3C', 1, '2022-10-11', '0000-00-00'),
(52, '45151275', 'Charly williams', '709', '7C', 0, '0000-00-00', '0000-00-00'),
(53, '66666666', 'gfd', '333', '4s', 0, '0000-00-00', '0000-00-00'),
(54, '11222333', 'chu chu wa chu chu wa', '202', '4D', 0, '2022-11-25', '0000-00-00'),
(55, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(56, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(57, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(58, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(59, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(60, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(61, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(62, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(63, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(64, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(65, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(66, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(67, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(68, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(69, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(70, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00'),
(71, '45422796', 'Pepe Argento', '710', '7C', 0, '2022-11-29', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `dni` varchar(12) NOT NULL COMMENT 'dni del administrador',
  `password` text NOT NULL COMMENT 'contraseña del administrador (credencial)',
  `nom_ape` text NOT NULL COMMENT 'nombre y apellido del administrador'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`dni`, `password`, `nom_ape`) VALUES
('45320178', '0014080825', 'Andres Schiro'),
('45422796', '12345678', 'jose perez');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `herramientas`
--
ALTER TABLE `herramientas`
  ADD PRIMARY KEY (`id_h`);

--
-- Indices de la tabla `rel_rehe`
--
ALTER TABLE `rel_rehe`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `retiros`
--
ALTER TABLE `retiros`
  ADD PRIMARY KEY (`id_r`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `herramientas`
--
ALTER TABLE `herramientas`
  MODIFY `id_h` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `rel_rehe`
--
ALTER TABLE `rel_rehe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `retiros`
--
ALTER TABLE `retiros`
  MODIFY `id_r` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
