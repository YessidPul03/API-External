-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-05-2024 a las 15:58:54
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
-- Base de datos: `apimasalcance`
--
CREATE DATABASE IF NOT EXISTS `apimasalcance` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `apimasalcance`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_consultas`
--

CREATE TABLE `registro_consultas` (
  `id_consulta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `tipo_metodo` varchar(100) NOT NULL,
  `datos` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registro_consultas`
--

INSERT INTO `registro_consultas` (`id_consulta`, `id_usuario`, `tipo_metodo`, `datos`, `fecha`) VALUES
(1, 1, 'PUT', '{\r\nbody:\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"\r\nid: 1\r\ntitle: \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\"\r\nuserId: 1\r\n}', '2024-05-06 13:00:00'),
(2, 1, 'DELETE', '{\r\nbody: \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"\r\nid: 1\r\ntitle: \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\"\r\nuserId: 1\r\n}', '2024-05-06 13:30:29'),
(3, 10, 'DELETE', '{\r\nbody: \"cupiditate quo est a modi nesciunt soluta\\nipsa voluptas error itaque dicta in\\nautem qui minus magnam et distinctio eum\\naccusamus ratione error aut\"\r\nid: 100\r\ntitle: \"at nam consequatur ea labore ea harum\"\r\nuserId: 10\r\n}', '2024-05-06 13:32:53'),
(4, 1, 'POST', '{\r\nbody: \"This is a test\"\r\nid: 101\r\ntitle: \"Hey\"\r\nuserId: 1\r\n}', '2024-05-06 13:38:09');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registro_consultas`
--
ALTER TABLE `registro_consultas`
  ADD PRIMARY KEY (`id_consulta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registro_consultas`
--
ALTER TABLE `registro_consultas`
  MODIFY `id_consulta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
