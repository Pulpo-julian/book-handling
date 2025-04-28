-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: libreria
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_autor`
--

CREATE DATABASE libreria;

USE libreria;

DROP TABLE IF EXISTS `tbl_autor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_autor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `profesion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`),
  UNIQUE KEY `nombre_2` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_autor`
--

LOCK TABLES `tbl_autor` WRITE;
/*!40000 ALTER TABLE `tbl_autor` DISABLE KEYS */;
INSERT INTO `tbl_autor` VALUES (1,'Gabriel García','Escritor'),(2,'Isabel Allende','Novelista'),(3,'Mario Vargas','Periodista'),(4,'Julio Cortázar','Narrador'),(5,'Laura Esquivel','Guionista'),(6,'Carlos Fuentes','Diplomático'),(7,'Jorge Luis Borges','Poeta'),(8,'Pablo Neruda','Poeta'),(9,'Miguel de Cervantes','Dramaturgo'),(10,'Federico García','Dramaturgo'),(11,'Octavio Paz','Ensayista'),(12,'Juan Rulfo','Fotógrafo'),(13,'Ana María Matute','Novelista'),(14,'Benedetti Mario','Poeta'),(15,'Rosa Montero','Periodista');
/*!40000 ALTER TABLE `tbl_autor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_estudiante`
--

DROP TABLE IF EXISTS `tbl_estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_estudiante` (
  `cedula` varchar(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `carrera` varchar(50) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_estudiante`
--

LOCK TABLES `tbl_estudiante` WRITE;
/*!40000 ALTER TABLE `tbl_estudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_libro`
--

DROP TABLE IF EXISTS `tbl_libro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_libro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `autor` int(11) DEFAULT NULL,
  `copiasDisponibles` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `autor` (`autor`),
  CONSTRAINT `tbl_libro_ibfk_1` FOREIGN KEY (`autor`) REFERENCES `tbl_autor` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_libro`
--

LOCK TABLES `tbl_libro` WRITE;
/*!40000 ALTER TABLE `tbl_libro` DISABLE KEYS */;
INSERT INTO `tbl_libro` VALUES (1,'Cien años de soledad',1,5),(2,'El amor en los tiempos del cólera',1,3),(3,'Don Quijote de la Mancha',2,7),(4,'Un año mas',11,6),(5,'Rebelión en la granja',3,6),(6,'Orgullo y prejuicio',4,2),(7,'Emma',4,3),(8,'Crimen y castigo',5,4),(9,'Los hermanos Karamazov',5,2),(10,'El principito',6,8),(11,'El señor de los anillos',7,5),(12,'El hobbit',7,6),(13,'Harry Potter y la piedra filosofal',8,9),(14,'Harry Potter y el prisionero de Azkaban',8,7),(15,'Drácula',9,4),(19,'libro jjj',5,6);
/*!40000 ALTER TABLE `tbl_libro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_prestamo`
--

DROP TABLE IF EXISTS `tbl_prestamo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_prestamo` (
  `cedulaEstudiante` varchar(10) NOT NULL,
  `idLibro` int(11) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaHasta` date NOT NULL,
  `estado` enum('activo','inactivo') DEFAULT 'activo',
  PRIMARY KEY (`cedulaEstudiante`,`idLibro`),
  KEY `FK_tbllibro_tblprestamo` (`idLibro`),
  CONSTRAINT `FK_tblestudiante_tblprestamo` FOREIGN KEY (`cedulaEstudiante`) REFERENCES `tbl_estudiante` (`cedula`),
  CONSTRAINT `FK_tbllibro_tblprestamo` FOREIGN KEY (`idLibro`) REFERENCES `tbl_libro` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_prestamo`
--

LOCK TABLES `tbl_prestamo` WRITE;
/*!40000 ALTER TABLE `tbl_prestamo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_prestamo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-28  0:23:55
