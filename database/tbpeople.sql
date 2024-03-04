-- DROP TABLE IF EXISTS `people`;

CREATE TABLE `people` (
  `id` int NOT NULL auto_increment,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `people` WRITE;
UNLOCK TABLES;
